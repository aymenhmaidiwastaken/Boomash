<script setup>
defineProps({
    value: String,
});
</script>

<template>
    <label class="form-label" v-if="value">
        {{ value }} <span class="text-danger">*</span>
    </label>
</template>
