<script setup>
import { Link, Head, useForm } from '@inertiajs/vue3';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';
import Lottie from "@/Components/widgets/lottie.vue";
import animationData from "@/Components/widgets/rhvddzym.json";

defineProps({
    status: String,
});

const form = useForm({
    email: '',
});

const submit = () => {
    form.post(route('password.email'));
};
</script>

<script>

export default {
    components: {
        lottie: Lottie
    },
    data() {
        return {
            defaultOptions: {
                animationData: animationData
            },
        };
    }
}

</script>

<template>
    <Head title="Forgot Password" />

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
                                    <h5 class="text-primary">Forgot Password?</h5>
                                    <p class="text-muted">Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.</p>

                                    <lottie class="avatar-xl some-class" colors="primary:#0ab39c" :options="defaultOptions" :height="120" :width="120" />

                                </div>

                                <BAlert v-if="status" :model-value="true" variant="warning" class="mb-2 mx-2 border-0 text-center">{{ status }}</BAlert>

                                <div class="p-2">
                                    <form @submit.prevent="submit">
                                        <div class="mb-4">
                                            <InputLabel for="email" value="Email" />
                                            <TextInput id="email" v-model="form.email" type="email" class="mt-1 block w-full" required autofocus autocomplete="email" placeholder="Enter your registred email address" :class="{ 'is-invalid': form.errors.email }" />
                                            <InputError :message="form.errors.email" />
                                        </div>

                                        <div class="text-center mt-4">
                                            <b-button variant="success" class="w-100" type="submit" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">Send Reset Link</b-button>
                                        </div>
                                    </form>
                                </div>
                            </BCardBody>
                        </BCard>

                        <div class="mt-4 text-center">
                            <p class="mb-0">Wait, I remember my password...
                                <Link :href="route('login')" class="fw-semibold text-primary text-decoration-underline"> Click here
                                </Link>
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
