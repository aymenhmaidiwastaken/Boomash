<script setup>
import { nextTick, ref } from 'vue';
import { Link, Head, useForm } from '@inertiajs/vue3';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';

const recovery = ref(false);

const form = useForm({
    code: '',
    recovery_code: '',
});

const recoveryCodeInput = ref(null);
const codeInput = ref(null);

const toggleRecovery = async () => {
    recovery.value ^= true;

    await nextTick();

    if (recovery.value) {
        recoveryCodeInput.value.focus();
        form.code = '';
    } else {
        codeInput.value.focus();
        form.recovery_code = '';
    }
};

const submit = () => {
    form.post(route('two-factor.login'));
};
</script>

<template>
    <Head title="Two Factor Authentication" />

    <div class="auth-page-wrapper pt-5">
        <div class="auth-one-bg-position auth-one-bg" id="auth-particles">
            <div class="bg-overlay"></div>

            <div class="shape">

                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1440 120">
                    <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"></path>
                </svg>
            </div>
        </div>

        <div class="auth-page-content">
            <BContainer>
                <BRow>
                    <BCol lg="12">
                        <div class="text-center mt-sm-5 mb-4 text-white-50">
                            <div>
                                <Link href="/" class="d-inline-block auth-logo">
                                <img src="@assets/images/logo-light.svg" alt="Boomash" height="20">
                                </Link>
                            </div>
                            <p class="mt-3 fs-15 fw-medium">Smart Dashboard Solution</p>
                        </div>
                    </BCol>
                </BRow>

                <BRow class="justify-content-center">
                    <BCol md="8" lg="6" xl="5">
                        <BCard no-body class="mt-4">

                            <BCardBody class="p-4">
                                <div class="mb-4">
                                    <div class="avatar-lg mx-auto">
                                        <div class="avatar-title bg-light text-primary display-5 rounded-circle">
                                            <i class="ri-rotate-lock-line"></i>
                                        </div>
                                    </div>
                                </div>

                                <div class="p-2 mt-4">
                                    <div class="text-muted text-center mb-4 mx-lg-3">
                                        <h4 class="">Two Factor Authentication</h4>
                                        <div class="text-sm text-muted">
                                            <template v-if="! recovery">
                                                Please confirm access to your account by entering the authentication code provided by your authenticator application.
                                            </template>
                                
                                            <template v-else>
                                                Please confirm access to your account by entering one of your emergency recovery codes.
                                            </template>
                                        </div>
                                    </div>

                                    <form @submit.prevent="submit">
                                        <div v-if="! recovery">
                                            <InputLabel for="code" value="Code" />
                                            <TextInput
                                                id="code"
                                                ref="codeInput"
                                                v-model="form.code"
                                                type="text"
                                                inputmode="numeric"
                                                autofocus
                                                placeholder="Enter the code that you recieve your authenticator app"
                                                autocomplete="one-time-code"
                                                :class="{ 'is-invalid' : form.errors.code }"
                                            />
                                            <InputError class="mt-2" :message="form.errors.code" />
                                        </div>
                            
                                        <div v-else>
                                            <InputLabel for="recovery_code" value="Recovery Code" />
                                            <TextInput
                                                id="recovery_code"
                                                ref="recoveryCodeInput"
                                                v-model="form.recovery_code"
                                                type="text"
                                                autocomplete="one-time-code"
                                                :class="{ 'is-invalid' : form.errors.recovery_code }"
                                            />
                                            <InputError class="mt-2" :message="form.errors.recovery_code" />
                                        </div>
                            
                                        <div class="d-flex align-items-center justify-content-end mt-4">
                                            <button type="button" class="btn btn-primary me-1" @click.prevent="toggleRecovery">
                                                <template v-if="! recovery">
                                                    Use a recovery code
                                                </template>
                            
                                                <template v-else>
                                                    Use an authentication code
                                                </template>
                                            </button>
                            
                                            <BButton variant="success" type="submit" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">Log in</BButton>
                                        </div>
                                    </form>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                </BRow>
            </BContainer>
        </div>

        <footer class="footer">
            <BContainer>
                <BRow>
                    <BCol lg="12">
                        <div class="text-center">
                            <p class="mb-0 text-muted">&copy; {{ new Date().getFullYear() }} Boomash. Design & Develop by Aymen</p>
                        </div>
                    </BCol>
                </BRow>
            </BContainer>
        </footer>
    </div>
</template>
