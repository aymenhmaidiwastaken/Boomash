<script setup>
import { ref, computed, watch } from 'vue';
import { router, useForm, usePage } from '@inertiajs/vue3';
import ConfirmsPassword from '@/Components/ConfirmsPassword.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';

const props = defineProps({
    requiresConfirmation: Boolean,
});

const page = usePage();
const enabling = ref(false);
const confirming = ref(false);
const disabling = ref(false);
const qrCode = ref(null);
const setupKey = ref(null);
const recoveryCodes = ref([]);

const confirmationForm = useForm({
    code: '',
});

const twoFactorEnabled = computed(
    () => !enabling.value && page.props.auth.user?.two_factor_enabled,
);

watch(twoFactorEnabled, () => {
    if (!twoFactorEnabled.value) {
        confirmationForm.reset();
        confirmationForm.clearErrors();
    }
});

const enableTwoFactorAuthentication = () => {
    enabling.value = true;

    router.post(route('two-factor.enable'), {}, {
        preserveScroll: true,
        onSuccess: () => Promise.all([
            showQrCode(),
            showSetupKey(),
            showRecoveryCodes(),
        ]),
        onFinish: () => {
            enabling.value = false;
            confirming.value = props.requiresConfirmation;
        },
    });
};

const showQrCode = () => {
    return axios.get(route('two-factor.qr-code')).then(response => {
        qrCode.value = response.data.svg;
    });
};

const showSetupKey = () => {
    return axios.get(route('two-factor.secret-key')).then(response => {
        setupKey.value = response.data.secretKey;
    });
}

const showRecoveryCodes = () => {
    return axios.get(route('two-factor.recovery-codes')).then(response => {
        recoveryCodes.value = response.data;
    });
};

const confirmTwoFactorAuthentication = () => {
    confirmationForm.post(route('two-factor.confirm'), {
        errorBag: "confirmTwoFactorAuthentication",
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => {
            confirming.value = false;
            qrCode.value = null;
            setupKey.value = null;
        },
    });
};

const regenerateRecoveryCodes = () => {
    axios
        .post(route('two-factor.recovery-codes'))
        .then(() => showRecoveryCodes());
};

const disableTwoFactorAuthentication = () => {
    disabling.value = true;

    router.delete(route('two-factor.disable'), {
        preserveScroll: true,
        onSuccess: () => {
            disabling.value = false;
            confirming.value = false;
        },
    });
};
</script>

<template>
    <BCard no-body>
        <BCardHeader>
            <BCardTitle>Two Factor Authentication</BCardTitle>
            <p class="text-muted mb-0">Add additional security to your account using two factor authentication.</p>
        </BCardHeader>
        <BCardBody class="p-4">
            <h5 v-if="twoFactorEnabled && !confirming">
                You have enabled two factor authentication.
            </h5>

            <h5 v-else-if="twoFactorEnabled && confirming">
                Finish enabling two factor authentication.
            </h5>

            <h5 v-else>
                You have not enabled two factor authentication.
            </h5>

            <div class="mt-3 text-muted text-sm">
                <p>
                    When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application.
                </p>
            </div>

            <div v-if="twoFactorEnabled">
                <div v-if="qrCode">
                    <div class="mt-3 max-w-xl text-sm text-gray-600">
                        <p v-if="confirming" class="text-muted">
                            To finish enabling two factor authentication, scan the following QR code using your phone's authenticator application or enter the setup key and provide the generated OTP code.
                        </p>

                        <p v-else>
                            Two factor authentication is now enabled. Scan the following QR code using your phone's authenticator application or enter the setup key.
                        </p>
                    </div>

                    <div class="mt-3 p-2" v-html="qrCode" />

                    <div v-if="setupKey" class="mt-3 text-muted">
                        <p class="fw-semibold">
                            Setup Key: <span v-html="setupKey"></span>
                        </p>
                    </div>

                    <div v-if="confirming" class="mt-3">
                        <InputLabel for="code" value="Code" />

                        <TextInput id="code" v-model="confirmationForm.code" type="text" name="code" inputmode="numeric" autofocus autocomplete="one-time-code" @keyup.enter="confirmTwoFactorAuthentication" :class="{ 'is-invalid': confirmationForm.errors.code }" />

                        <InputError :message="confirmationForm.errors.code" class="mt-2" />
                    </div>
                </div>

                <div v-if="recoveryCodes.length > 0 && !confirming">
                    <div class="mt-3 text-sm text-muted">
                        <p class="fw-semibold">
                            Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost.
                        </p>
                    </div>

                    <div class="fw-semibold">
                        <pre class="language-markup"><code><div v-for="code in recoveryCodes" :key="code">{{ code }}</div></code></pre>
                    </div>
                </div>
            </div>

            <div class="mt-3">
                <div v-if="!twoFactorEnabled">
                    <ConfirmsPassword @confirmed="enableTwoFactorAuthentication">
                        <BButton variant="danger w-100" type="button" :class="{ 'opacity-25': enabling }" :disabled="enabling">Enable</BButton>
                    </ConfirmsPassword>
                </div>

                <div v-else>
                    <ConfirmsPassword @confirmed="confirmTwoFactorAuthentication">
                        <BButton v-if="confirming" variant="success" type="button" class="me-1" :class="{ 'opacity-25': enabling }" :disabled="enabling">Confirm</BButton>
                    </ConfirmsPassword>

                    <ConfirmsPassword @confirmed="regenerateRecoveryCodes">
                        <BButton v-if="recoveryCodes.length > 0 && !confirming" variant="success" type="button" class="me-1">Regenerate Recovery Codes</BButton>
                    </ConfirmsPassword>

                    <ConfirmsPassword @confirmed="showRecoveryCodes">
                        <BButton v-if="recoveryCodes.length === 0 && !confirming" variant="success" class="me-1" type="button">Show Recovery Codes</BButton>
                    </ConfirmsPassword>

                    <ConfirmsPassword @confirmed="disableTwoFactorAuthentication">
                        <BButton v-if="confirming" variant="danger" type="button" :class="{ 'opacity-25': disabling }" :disabled="disabling">Cancel</BButton>
                    </ConfirmsPassword>

                    <ConfirmsPassword @confirmed="disableTwoFactorAuthentication">
                        <BButton v-if="!confirming" variant="danger" type="button"  :class="{ 'opacity-25': disabling }" :disabled="disabling">Disable</BButton>
                    </ConfirmsPassword>
                </div>
            </div>
        </BCardBody>
    </BCard>
</template>
