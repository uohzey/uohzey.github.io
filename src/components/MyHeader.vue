<template>
    <header>
        <div class="nav-bar">
            <a href="#" class="logo">Uohzey</a>
            <div class="navigation">
                <div class="nav-items">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </div>
    </header>
    <section class="home flex-center" id="home">
        <div class="home-container">
            <div class="media-icons">
                <a href="#"><i class="fa fa-facebook-f"></i></a>
                <a href="#"><i class="fa fa-instagram"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
            </div>
            <div class="info">
                <h2>Hi, I am Uohzey</h2>
                <h3>Font-end Developer</h3>
                <p>This is my personal website. 我会在这里介绍我的论文成果,项目设计以及学习情况!</p>
                <a href="" class="btn">Contace Me <i class="fa fa-arrow-circle-right"></i></a>
            </div>
            <div class="home-img">
                <img src="@/images/xiaoxue.jpg" alt="" style="height:30%;width:30%">
            </div>
        </div>
        <a href="#about" class="scrool-down">Scroll Down<i class="fa fa-arrow-down"></i></a>
    </section>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"
export default defineComponent({
    name: 'MyHeader',
    data() {
        return {
            size: 2,
        }
    }
})
</script>

<style scoped>
</style>