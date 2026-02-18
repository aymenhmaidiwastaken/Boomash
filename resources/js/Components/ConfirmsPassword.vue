<script setup>
import { ref, reactive, nextTick } from 'vue';
import InputError from './InputError.vue';
import TextInput from './TextInput.vue';

const emit = defineEmits(['confirmed']);

defineProps({
    title: {
        type: String,
        default: 'Confirm Password',
    },
    content: {
        type: String,
        default: 'For your security, please confirm your password to continue.',
    },
    button: {
        type: String,
        default: 'Confirm',
    },
});

const confirmingPassword = ref(false);

const form = reactive({
    password: '',
    error: '',
    processing: false,
});

const passwordInput = ref(null);

const startConfirmingPassword = () => {
    axios.get(route('password.confirmation')).then(response => {
        if (response.data.confirmed) {
            emit('confirmed');
        } else {
            console.log(response)
            confirmingPassword.value = true;

            setTimeout(() => passwordInput.value.focus(), 250);
        }
    });
};

const confirmPassword = () => {
    form.processing = true;

    axios.post(route('password.confirm'), {
        password: form.password,
    }).then(() => {
        form.processing = false;

        closeModal();
        nextTick().then(() => emit('confirmed'));

    }).catch(error => {
        form.processing = false;
        form.error = error.response.data.errors.password[0];
        passwordInput.value.focus();
    });
};

const closeModal = () => {
    confirmingPassword.value = false;
    form.password = '';
    form.error = '';
};
</script>

<template>
    <span>
        <span @click="startConfirmingPassword">
            <slot />
        </span>

        <BModal v-model="confirmingPassword" :title="title" hide-footer header-class="bg-success-subtle p-3">
            <p class="text-muted fs-14 mb-3">{{ content }}</p>
            <div class="mb-3">
                <TextInput
                    ref="passwordInput"
                    v-model="form.password"
                    type="password"
                    placeholder="Password"
                    autocomplete="current-password"
                    @keyup.enter="confirmPassword"
                    :class="{ 'is-invalid': form.error }"
                />

                <InputError :message="form.error" class="mt-2" />
            </div>

            <div class="text-end">
                <BButton variant="danger" @click="closeModal">Cancel</BButton>
                <BButton variant="success" class="ms-1" :class="{ 'opacity-25': form.processing }"
                :disabled="form.processing"
                @click="confirmPassword">{{ button }}</BButton>
            </div>

        </BModal>
    </span>
</template>
