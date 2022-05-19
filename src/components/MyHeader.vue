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
    <!-- About section -->
    <section class="about section" id="about">
        <div class="container flex-center">
            <h1 class="section-title-01">About me</h1>
            <h2 class="section-title-02">About me</h2>
            <div class="content flex-center">
                <div class="about-img">
                    <img src="@/images/about-img.jpg" alt="">
                </div>
                <div class="about-info">
                    <div class="description">
                        <h3>I'm uohzey</h3>
                        <h4>A student now studing at <span>USTC</span>, major in <span>Computer Applications</span></h4>
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
            profile: [
                {
                    date: '2021-10-24',
                    status: 18
                },
                {
                    date: '2021-10-25',
                    status: 10
                },
                {
                    date: '2021-10-26',
                    status: 7
                },
                {
                    date: '2021-10-27',
                    status: 2
                },
                {
                    date: '2021-10-28',
                    status: 1
                },
                {
                    date: '2021-10-29',
                    status: 1
                },
                {
                    date: '2021-10-30',
                    status: 1
                },
                {
                    date: '2021-10-31',
                    status: 1
                },
                {
                    date: '2021-11-01',
                    status: 2
                },
                {
                    date: '2021-11-09',
                    status: 1
                },
                {
                    date: '2021-11-17',
                    status: 1
                },
                {
                    date: '2021-11-28',
                    status: 1
                },
                {
                    date: '2021-11-29',
                    status: 1
                },
                {
                    date: '2021-11-30',
                    status: 1
                },
                {
                    date: '2021-12-01',
                    status: 1
                },
                {
                    date: '2021-12-02',
                    status: 3
                },
                {
                    date: '2021-12-28',
                    status: 3
                },
                {
                    date: '2022-01-05',
                    status: 4
                },
                {
                    date: '2022-03-25',
                    status: 2
                },
                {
                    date: '2022-03-26',
                    status: 5
                },
                {
                    date: '2022-03-27',
                    status: 1
                },
                {
                    date: '2022-03-29',
                    status: 1
                },
                {
                    date: '2022-03-30',
                    status: 1
                },
                {
                    date: '2022-03-31',
                    status: 1
                },
                {
                    date: '2022-04-10',
                    status: 1
                },
                {
                    date: '2022-04-23',
                    status: 4
                },{
                    date: '2022-04-24',
                    status: 3
                },{
                    date: '2022-04-26',
                    status: 3
                },{
                    date: '2022-04-27',
                    status: 2
                },{
                    date: '2022-04-28',
                    status: 1
                },{
                    date: '2022-04-30',
                    status: 2
                },
                {
                    date: '2022-05-01',
                    status: 1
                },
                {
                    date: '2022-05-02',
                    status: 3
                },
                {
                    date: '2022-05-03',
                    status: 2
                },
                {
                    date: '2022-05-04',
                    status: 5
                },
                {
                    date: '2022-05-05',
                    status: 2
                },
                {
                    date: '2022-05-06',
                    status: 4
                },
                {
                    date: '2022-05-07',
                    status: 2
                },
                {
                    date: '2022-05-08',
                    status: 3
                },
                {
                    date: '2022-05-09',
                    status: 5
                },
                {
                    date: '2022-05-10',
                    status: 2
                },
                {
                    date: '2022-05-11',
                    status: 2
                },
                {
                    date: '2022-05-12',
                    status: 1
                },
                {
                    date: '2022-05-14',
                    status: 2
                },
                {
                    date: '2022-05-15',
                    status: 2
                },
                {
                    date: '2022-05-16',
                    status: 1
                },
                {
                    date: '2022-05-17',
                    status: 1
                },
                {
                    date: '2022-05-18',
                    status: 2
                },
                {
                    date: '2022-05-19',
                    status: 4
                },
                
            ],
            size: 2,
        }
    },
})
</script>

<style scoped>
</style>