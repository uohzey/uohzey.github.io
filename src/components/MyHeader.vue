<template>
    <header>
        <div class="nav-bar">
            <a href="#" class="logo">Uohzey</a>
            <div class="navigation">
                <div class="nav-items">
                    <a href="javascript:void(0)" @click="goAnchor('#home')">Home</a>
                    <a href="javascript:void(0)" @click="goAnchor('#about')">About</a>
                    <a href="javascript:void(0)" @click="goAnchor('#skills')">Skills</a>
                    <a href="javascript:void(0)" @click="goAnchor('#services')">Services</a>
                    <a href="javascript:void(0)" @click="goAnchor('#contact')">Contact</a>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"
export default defineComponent({
    name: 'MyHeader',
    methods: {
        goAnchor(selector) {
            document.querySelector(selector).scrollIntoView({
                behavior: "smooth"
            })
        }
    }
})
</script>

<style scoped>
header {
    z-index: 99999;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    backdrop-filter: blur(20px);
    transition: .6s ease;
}

/* 标题显示是,底线有阴影 */
header.sticky {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: var(--box-shadow);
}

.nav-bar {
    position: relative;
    height: calc(4rem + 1rem);
    max-width: 1250px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    padding: 0 20px;
    transition: .6s ease;
}

header.sticky .nav-bar {
    height: calc(2.5rem + 1rem);
}

.nav-bar .logo {
    color: var(--first-color);
    font-size: 1.3em;
    font-weight: 600;
}

.nav-items a {
    color: var(--first-color);
    font-size: var(--normal-font-size);
    font-weight: 500;
}

.nav-items a:not(:last-child) {
    margin-right: 50px;
}

.nav-items a:hover {
    color: var(--second-color);
}
</style>