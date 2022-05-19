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
                <img src="@/images/xiaoxue1.jpg" alt="">
            </div>
        </div>
        <a href="#about" class="scroll-down">Scroll Down<i class="fa fa-arrow-down"></i></a>
    </section>
    <section class="about section" id="about">
        <div class="container flex-center">
            <h1 class="section-title-01"></h1>
            <h2 class="section-title-02"></h2>
            <div class="content flex-center">
                <div class="about-img">
                    <img src="@/images/about-img.jpg" alt="">
                </div>
                <div class="about-info">
                    <div class="description">
                        <h3>I'm uohzey</h3>
                        <h4>A student now studing at USTC</h4>
                        <p></p>
                    </div>
                    <ul class="professional-list">
                        <li class="list-item">
                            <h3>5+</h3>
                            <span>Years of<br>Experience</span>
                        </li>
                        <li class="list-item">
                            <h3>3K+</h3>
                            <span>Happy<br>Customers</span>
                        </li>
                        <li class="list-item">
                            <h3>5+</h3>
                            <span>Success<br>Projects</span>
                        </li>
                    </ul>
                    <a href="" class="btn">Download CV <i class="fa fa-download"></i></a>
                </div>
            </div>
        </div>
    </section>
    <submission-chart :profile="profile"></submission-chart>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"
import SubmissionChart from "./SubmissionChart.vue"
export default defineComponent({
    name: 'MyHeader',
    components: { SubmissionChart },
    data() {
        return {
            profile: [{
                '2022-01-01': 10
            }],
            size: 2,
        }
    }
})
</script>

<style scoped>
</style>