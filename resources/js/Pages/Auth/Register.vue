<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3';
import Checkbox from '@/Components/Checkbox.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    terms: false,
});

const submit = () => {
    form.post(route('register'), {
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
    <Head title="Register" />

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
                                <div class="text-center mt-2">
                                    <h5 class="text-primary">Create New Account</h5>
                                    <p class="text-muted">Get your free Boomash account now</p>
                                </div>
                                <div class="p-2 mt-4">
                                    <form @submit.prevent="submit" class="needs-validation" novalidate>

                                        <div class="mb-3">
                                            <InputLabel for="name" value="Name" />
                                            <TextInput id="name" v-model="form.name" type="text" class="mt-1 block w-full" required autofocus autocomplete="name" placeholder="Enter your name" :class="{ 'is-invalid': form.errors.name }" />
                                            <InputError :message="form.errors.name" />
                                        </div>
                                        <div class="mb-3">
                                            <InputLabel for="email" value="Email" />
                                            <TextInput id="email" v-model="form.email" type="email" class="mt-1 block w-full" required autocomplete="email" :class="{ 'is-invalid': form.errors.email }" placeholder="Enter your email" />
                                            <InputError :message="form.errors.email" />
                                        </div>
                                        <div class="mb-3">
                                            <InputLabel for="password" value="Password" />
                                            <div class="position-relative auth-pass-inputgroup">
                                                <input :type="togglePassword ? 'text' : 'password'" class="form-control pe-5 password-input" placeholder="Enter password" id="password" required v-model="form.password" :class="{ 'is-invalid': form.errors.password }" autocomplete="new-password">
                                                <BButton variant="link" class="position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" @click="togglePassword = !togglePassword"><i class="ri-eye-fill align-middle"></i></BButton>
                                                <InputError :message="form.errors.password" />
                                            </div>
                                        </div>

                                        <div class="mb-3">
                                            <InputLabel for="password_confirmation" value="Confirm Password" />
                                            <div class="position-relative auth-pass-inputgroup">
                                                <input :type="togglePassword_conf ? 'text' : 'password'" class="form-control pe-5 password-input" placeholder="Enter password" id="password_confirmation" required v-model="form.password_confirmation" :class="{ 'is-invalid': form.errors.password_confirmation }" autocomplete="new-password">
                                                <BButton variant="link" class="position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" @click="togglePassword_conf = !togglePassword_conf"><i class="ri-eye-fill align-middle"></i></BButton>
                                                <InputError :message="form.errors.password_confirmation" />
                                            </div>
                                        </div>

                                        <div v-if="$page.props.jetstream.hasTermsAndPrivacyPolicyFeature" class="mb-3 form-check">
                                            <Checkbox id="terms" v-model:checked="form.terms" name="terms" required class="form-check-input me-1" :class="{ 'is-invalid': form.errors.terms }" />
                                            <label class="form-check-label mb-0 fs-12 text-muted fst-italic" for="auth-remember-check">
                                                I agree to the <BLink target="_blank" :href="route('terms.show')" class="">Terms of Service</BLink> and <BLink target="_blank" :href="route('policy.show')" class="">Privacy Policy</BLink>
                                            </label>
                                            <InputError :message="form.errors.terms" />
                                        </div>
                                        <div class="mt-4">
                                            <BButton variant="success" class="w-100" type="submit" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">Sign
                                                Up</BButton>
                                        </div>

                                        <div class="mt-4 text-center">
                                            <div class="signin-other-title">
                                                <h5 class="fs-13 mb-4 title text-muted">Create account with</h5>
                                            </div>

                                            <div>
                                                <BButton type="button" variant="primary" class="btn-icon"><i class="ri-facebook-fill fs-16"></i></BButton>
                                                <BButton type="button" variant="danger" class="btn-icon ms-1"><i class="ri-google-fill fs-16"></i></BButton>
                                                <BButton type="button" variant="dark" class="btn-icon ms-1"><i class="ri-github-fill fs-16"></i></BButton>
                                                <BButton type="button" variant="info" class="btn-icon ms-1"><i class="ri-twitter-fill fs-16"></i></BButton>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </BCardBody>
                        </BCard>

                        <div class="mt-4 text-center">
                            <p class="mb-0">Already have an account ?
                                <Link :href="route('login')" class="fw-semibold text-primary text-decoration-underline"> Signin </Link>
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
