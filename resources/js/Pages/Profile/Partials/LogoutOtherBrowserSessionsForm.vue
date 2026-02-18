<script setup>
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';
import InputError from '@/Components/InputError.vue';
import TextInput from '@/Components/TextInput.vue';

defineProps({
    sessions: Array,
});

const confirmingLogout = ref(false);
const passwordInput = ref(null);

const form = useForm({
    password: '',
});

const confirmLogout = () => {
    confirmingLogout.value = true;

    setTimeout(() => passwordInput.value.focus(), 250);
};

const logoutOtherBrowserSessions = () => {
    form.delete(route('other-browser-sessions.destroy'), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => passwordInput.value.focus(),
        onFinish: () => form.reset(),
    });
};

const closeModal = () => {
    confirmingLogout.value = false;

    form.reset();
};
</script>

<template>
    <BCard no-body>
        <BCardHeader>
            <BCardTitle>Browser Sessions</BCardTitle>
            <p class="text-muted mb-0">Manage and log out your active sessions on other browsers and devices.</p>
        </BCardHeader>
        <BCardBody class="p-4">
            <div class="text-sm text-muted">
                If necessary, you may log out of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password.
            </div>

            <!-- Other Browser Sessions -->
            <div v-if="sessions.length > 0" class="mt-5">
                <div v-for="(session, i) in sessions" :key="i" class="d-flex align-items-center mb-2">
                    <div>
                        <svg v-if="session.agent.is_desktop" width="30" class="text-muted" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                        </svg>

                        <svg v-else width="30" class="text-muted" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg>
                    </div>

                    <div class="ms-3">
                        <div>
                            {{ session.agent.platform ? session.agent.platform : 'Unknown' }} - {{ session.agent.browser ? session.agent.browser : 'Unknown' }}
                        </div>

                        <div>
                            <div class="text-xs">
                                {{ session.ip_address }},

                                <span v-if="session.is_current_device" class="text-success fw-semibold">This device</span>
                                <span v-else>Last active {{ session.last_active }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-5">
                <BButton variant="danger w-100" type="button" @click="confirmLogout">Log Out From Other Browser </BButton>
                <p class="alert alert-success text-success mt-3" v-if="form.recentlySuccessful">Logged out of all browser.</p>
            </div>

            <!-- Log Out Other Devices Confirmation Modal -->
            <BModal v-model="confirmingLogout" title="Log Out Other Browser Sessions" hide-footer header-class="bg-info-subtle p-3">
                <p class="text-muted">Please enter your password to confirm you would like to log out of your other browser sessions across all of your devices.</p>
                <div class="mb-3">
                    <TextInput ref="passwordInput" v-model="form.password" type="password" placeholder="Password" required autocomplete="current-password" @keyup.enter="logoutOtherBrowserSessions" :class="{ 'is-invalid': form.errors.password }" />

                    <InputError :message="form.errors.password" class="mt-2" />
                </div>

                <div class="text-end">
                    <BButton variant="danger" @click="closeModal">Close</BButton>
                    <BButton variant="success" class="ms-1" :class="{ 'opacity-25': form.processing }" :disabled="form.processing" @click="logoutOtherBrowserSessions">Log Out Other Browser Sessions</BButton>
                </div>
            </BModal>
        </BCardBody>
    </BCard>
</template>
