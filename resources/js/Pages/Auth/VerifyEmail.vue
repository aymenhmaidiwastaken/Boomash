<script setup>
import { computed } from 'vue';
import { Head, Link, useForm } from '@inertiajs/vue3';

const props = defineProps({
    status: String,
});

const form = useForm({});

const submit = () => {
    form.post(route('verification.send'));
};

const verificationLinkSent = computed(() => props.status === 'verification-link-sent');
</script>

<template>
    <Head title="Email Verification" />

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
                                            <i class="ri-mail-line"></i>
                                        </div>
                                    </div>
                                </div>

                                <div class="p-2 mt-4">
                                    <div class="text-muted text-center mb-4 mx-lg-3">
                                        <h4 class="">Verify Your Email</h4>
                                        <div class="text-sm text-muted">
                                            Before continuing, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another.
                                        </div>
                                    </div>

                                    <div v-if="verificationLinkSent" class="mb-4 alert alert-success text-sm text-success">
                                        A new verification link has been sent to the email address you provided in your profile settings.
                                    </div>

                                    <form @submit.prevent="submit">
                                        <div class="w-100 mb-3">
                                            <BButton variant="success" type="submit" class="w-100" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">Resend Verification Email</BButton>
                                        </div>

                                        <div>
                                            <Link :href="route('profile.show')" class="text-sm me-2 align-middle btn-link text-decoration-underline">
                                            Edit Profile</Link>

                                            <Link :href="route('logout')" method="post" class="text-sm align-middle btn-link text-decoration-underline">
                                            Log Out
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                            </BCardBody>
                        </BCard>

                        <div class="mt-4 text-center">
                            <p class="mb-0">Didn't receive a code ?
                                <Link :href="route('login')" class="fw-semibold text-primary text-decoration-underline">Resend</Link>
                            </p>
                        </div>

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
