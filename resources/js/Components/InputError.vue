<script setup>
defineProps({
    message: String,
});
</script>

<template>
    <div v-show="message" class="invalid-feedback">
        <span>
            {{ message }}
        </span>
    </div>
</template>
