<script setup>
import { Link, Head, useForm } from '@inertiajs/vue3';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';

const props = defineProps({
    email: String,
    token: String,
});

const form = useForm({
    token: props.token,
    email: props.email,
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('password.update'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<script>
export default {
    data() {
        return {
            togglePassword: false,
            togglePassword_conf: false,
        }
    }
}
</script>

<template>
    <Head title="Reset Password" />

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
                                <Link to="/" class="d-inline-block auth-logo">
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
                                <div class="text-center mt-2">
                                    <h5 class="text-primary">Create new password</h5>
                                    <p class="text-muted">Your new password must be different from previous used
                                        password.</p>
                                </div>

                                <div class="p-2">
                                    <form @submit.prevent="submit">
                                        <div class="mb-3">
                                            <InputLabel for="email" value="Email" />
                                            <TextInput id="email" v-model="form.email" type="email" required autofocus autocomplete="email" :class="{ 'is-invalid' : form.errors.email}" />
                                            <InputError :message="form.errors.email" />
                                        </div>
                                        <div class="mb-3">
                                            <InputLabel for="password-input" value="Password" />
                                            <div class="position-relative auth-pass-inputgroup">
                                                <input :type="togglePassword ? 'text' : 'password'" class="form-control pe-5 password-input" placeholder="Enter password" id="password-input" v-model="form.password" required :class="{ 'is-invalid' : form.errors.password}">
                                                <BButton variant="link" class="position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="password-addon" @click="togglePassword = !togglePassword"><i class="ri-eye-fill align-middle"></i>
                                                </BButton>
                                                <InputError :message="form.errors.password" />
                                            </div>
                                        </div>

                                        <div class="mb-3">
                                            <InputLabel for="password_confirmation" value="Confirm Password" />
                                            <div class="position-relative auth-pass-inputgroup mb-3">
                                                <input :type="togglePassword_conf ? 'text' : 'password'" class="form-control pe-5 password-input" placeholder="Confirm password" id="confirm-password-input" v-model="form.password_confirmation" required :class="{ 'is-invalid' : form.errors.password_confirmation}">
                                                <BButton variant="link" class="position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="confirm-password-input" @click="togglePassword_conf = !togglePassword_conf"><i class="ri-eye-fill align-middle"></i>
                                                </BButton>
                                                <InputError :message="form.errors.password_confirmation" />
                                            </div>
                                        </div>

                                        <div class="mt-4">
                                            <BButton variant="success" class="w-100" :class="{ 'opacity-25': form.processing }" :disabled="form.processing" type="submit">Reset Password</BButton>
                                        </div>

                                    </form>
                                </div>
                            </BCardBody>
                        </BCard>

                        <div class="mt-4 text-center">
                            <p class="mb-0">Wait, I remember my password...
                                <Link :href="route('login')" class="fw-semibold text-primary text-decoration-underline"> Click
                                here </Link>
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
