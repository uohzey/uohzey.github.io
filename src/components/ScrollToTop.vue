<template>
    <div class="scrollToTop-btn flex-center" @click="scrollToTop">
        <i class="fa fa-arrow-up"></i>
    </div>
</template>


<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    // copliot
    name: 'StrollToTop',
    mounted() {
        // 监听滚动事件，然后用handleScroll这个方法进行相应的处理
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        // 离开这个页面销毁滚动条事件，不然会给每一个页面都触发
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        },
        handleScroll() {
            const scrollToTopBtn = document.querySelector('.scrollToTop-btn');
            scrollToTopBtn.classList.toggle('active', window.scrollY > 300);
        },
    },
})
</script>

<style scoped>
.scrollToTop-btn {
    z-index: 99999;
    position: fixed;
    right: 0;
    bottom: 20px;
    width: 40px;
    height: 40px;
    background: var(--second-color);
    color: #fff;
    font-size: var(--small-font-size);
    border-radius: 3px;
    cursor: pointer;
    opacity: 0;
    transition: .5s ease;
}

.scrollToTop-btn .fa-arrow-up {
    line-height: 20px;
    margin: auto;
    text-align: center;
}

.scrollToTop-btn.active {
    right: 20px;
    pointer-events: all;
    opacity: 1;
}
</style>