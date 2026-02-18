<script setup>
import { Head } from "@inertiajs/vue3"
import Layout from "@/Layouts/main.vue";
import DeleteUserForm from '@/Pages/Profile/Partials/DeleteUserForm.vue';
import LogoutOtherBrowserSessionsForm from '@/Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.vue';
import TwoFactorAuthenticationForm from '@/Pages/Profile/Partials/TwoFactorAuthenticationForm.vue';
import UpdatePasswordForm from '@/Pages/Profile/Partials/UpdatePasswordForm.vue';
import UpdateProfileInformationForm from '@/Pages/Profile/Partials/UpdateProfileInformationForm.vue';

defineProps({
    confirmsTwoFactorAuthentication: Boolean,
    sessions: Array,
});
</script>

<template>
    <Layout>
        <Head title="Profile" />
        <template #header>
            <h2 class="fw-semibold">
                Profile
            </h2>
        </template>

        <div>
            <BRow class="justify-content-center">
                <BCol lg="6">
                    <div v-if="$page.props.jetstream.canUpdateProfileInformation">
                        <UpdateProfileInformationForm :user="$page.props.auth.user" />
                    </div>

                    <div v-if="$page.props.jetstream.canUpdatePassword">
                        <UpdatePasswordForm />
                    </div>

                    <div v-if="$page.props.jetstream.canManageTwoFactorAuthentication">
                        <TwoFactorAuthenticationForm :requires-confirmation="confirmsTwoFactorAuthentication" />
                    </div>

                    <LogoutOtherBrowserSessionsForm :sessions="sessions" />

                    <template v-if="$page.props.jetstream.hasAccountDeletionFeatures">
                        <DeleteUserForm />
                    </template>
                </BCol>
            </BRow>
        </div>
    </Layout>
</template>
