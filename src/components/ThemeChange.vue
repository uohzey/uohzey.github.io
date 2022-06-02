<template>
    <div class="theme-btn flex-center" @click="changeTheme">
        <i class="fa fa-sun-o"></i>
        <i class="fa fa-moon-o"></i>
    </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: "ThemeChange",
    methods: {
        changeTheme() {
            const body = document.querySelector("body");
            const theme = document.querySelector(".theme-btn");
            const isDark = body.classList.contains("dark");
            if (isDark) {
                body.classList.remove("dark");
                theme.classList.remove("sun");
                theme.classList.add("moon");
            } else {
                body.classList.add("dark");
                theme.classList.remove("moon");
                theme.classList.add("sun");
            }
        }
    }
});
</script>

<style scoped>
.theme-btn {
    z-index: 999999;
    position: fixed;
    right: 0;
    top: 100px;
    background: var(--transparent-color-01);
    backdrop-filter: blur(20px);
    width: 50px;
    height: 50px;
    font-size: 1.2em;
    border-radius: 5px 0 0 5px;
    box-shadow: var(--box-shadow);
    cursor: pointer;
}

.theme-btn .fa-sun-o,
.fa-moon-o {
    line-height: 20px;
    margin: auto;
    text-align: center;
}

.theme-btn .fa-sun-o,
.theme-btn.sun .fa-moon-o {
    display: none;
}

.theme-btn.sun .fa-sun-o {
    display: block;
}
</style>