<script>
import * as Prism from 'prismjs';

export default {
    components: {},
    mounted() {
        Prism.highlightAll();

        const checkbox = document.getElementsByClassName("code-switcher");
        Array.from(checkbox).forEach((check) => {
            check.addEventListener("change", () => {
                const card = check.closest(".card");
                const preview = card.querySelector(".live-preview");
                const code = card.querySelector(".code-view");
                if (check.checked) {
                    // do this
                    preview.classList.add("d-none");
                    code.classList.remove("d-none");
                } else {
                    // do that
                    preview.classList.remove("d-none");
                    code.classList.add("d-none");
                }
            });
        });
    },
    props: {
        title: {
            type: String,
            default: "",
        },
    },
};
</script>

<template>
    <b-card-header class="align-items-center d-flex">
        <b-card-title class="mb-0 flex-grow-1">{{ title }}</b-card-title>
        <div class="flex-shrink-0">
            <div class="form-check form-switch form-switch-right form-switch-md">
                <label for="navbarscrollspy-showcode" class="form-label text-muted">Show Code</label>
                <input class="form-check-input code-switcher" type="checkbox" id="navbarscrollspy-showcode">
            </div>
        </div>
    </b-card-header>
</template>
