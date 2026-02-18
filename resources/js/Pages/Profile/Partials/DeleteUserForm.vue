<script setup>
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';
import InputError from '@/Components/InputError.vue';
import TextInput from '@/Components/TextInput.vue';

const confirmingUserDeletion = ref(false);
const passwordInput = ref(null);

const form = useForm({
    password: '',
});

const confirmUserDeletion = () => {
    confirmingUserDeletion.value = true;

    setTimeout(() => passwordInput.value.focus(), 250);
};

const deleteUser = () => {
    form.delete(route('current-user.destroy'), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => passwordInput.value.focus(),
        onFinish: () => form.reset(),
    });
};

const closeModal = () => {
    confirmingUserDeletion.value = false;

    form.reset();
};
</script>

<template>
    <BCard no-body>
        <BCardHeader>
            <BCardTitle>Delete Account</BCardTitle>
            <p class="text-muted mb-0">Permanently delete your account.</p>
        </BCardHeader>
        <BCardBody class="p-4">
            <div class="text-sm text-muted">
                Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain.
            </div>

            <div class="mt-5">
                <BButton variant="danger w-100" @click="confirmUserDeletion">Delete Account</BButton>
            </div>

            <BModal v-model="confirmingUserDeletion" title="Delete Account" hide-footer header-class="bg-danger-subtle p-3">
                <p class="text-muted">Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account.</p>
                <div class="mb-3">
                    <TextInput ref="passwordInput" v-model="form.password" type="password" placeholder="Password" required autocomplete="current-password" @keyup.enter="deleteUser" :class="{ 'is-invalid': form.errors.password }" />

                    <InputError :message="form.errors.password" class="mt-2" />
                </div>

                <div class="text-end">
                    <BButton variant="danger" @click="closeModal">Close</BButton>
                    <BButton variant="success" class="ms-1" :class="{ 'opacity-25': form.processing }" :disabled="form.processing" @click="deleteUser">Delete Account</BButton>
                </div>
            </BModal>
        </BCardBody>
    </BCard>
</template>
