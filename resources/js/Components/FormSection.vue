<script setup>
import { computed, useSlots } from 'vue';

defineEmits(['submitted']);

defineProps({
    title: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        default: ""
    },
})

const hasActions = computed(() => !!useSlots().actions);
</script>

<template>
    <div class="">
        <div class="">
            <form @submit.prevent="$emit('submitted')">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle>{{ title }}</BCardTitle>
                        <p class="text-muted mb-0">{{ description }}</p>
                    </BCardHeader>
                    <BCardBody class="p-4">
                        <div class="mb-3">
                            <slot name="form" />
                        </div>
                        <div v-if="hasActions">
                            <slot name="actions" />
                        </div>
                    </BCardBody>
                </BCard>

            </form>
        </div>
    </div>
</template>
