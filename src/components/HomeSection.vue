<template>
    <section class="home flex-center" id="home">
        <div class="home-container">
            <div class="media-icons">
                <a href="#"><i class="fa fa-facebook-f"></i></a>
                <a href="#"><i class="fa fa-instagram"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-weibo"></i></a>
            </div>
            <div class="info">
                <h2>你好, 我是叶舟!</h2>
                <h3>一名即将毕业的普通大学生.</h3>
                <p>这是我的个人主页. 我会在这里介绍我的论文成果,项目设计以及学习情况!</p>
                <a href="" class="btn">Contace Me <i class="fa fa-arrow-circle-right"></i></a>
            </div>
            <div class="home-img">
                <img src="@/images/xiaoxue1.jpg" alt="">
            </div>
        </div>
        <a href="#about" class="scroll-down">Scroll Down<i class="fa fa-arrow-down"></i></a>
    </section>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: 'HomePage',
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
.home {
    position: relative;
    max-width: 1250px;
    min-height: 100vh;
    margin-left: auto;
    margin-right: auto;
    padding: 4rem 2rem;
    flex-direction: column;
}

.home .home-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.home-container .media-icons {
    display: flex;
    flex-direction: column;
    margin-right: 40px;
}

.home-container .media-icons a {
    color: var(--second-color);
    font-size: 1.5em;
    margin: 10px 0;
}

.home-container .media-icons a:hover {
    color: var(--hover-color);
}

.home-container .info h2 {
    font-size: 2.5em;
    font-weight: 600;
    line-height: 70px;
}

.home-container .info h3 {
    color: var(--third-color);
    font-feature-settings: 1.3em;
    font-weight: 600;
    line-height: 50px;
}

.home-container .info p {
    color: var(--third-color);
    font-size: var(--normal-font-size);
    /* max-width: 550px; */
}

.btn {
    background: var(--second-color);
    color: #fff;
    font-size: var(--normal-font-size);
    font-weight: 500;
    display: inline-block;
    margin-top: 25px;
    padding: 20px 30px;
    letter-spacing: 1px;
    border-radius: 10px;
}

.btn:hover {
    background: var(--hover-color);
}

.home-container .home-img {
    position: relative;
}

.home-container .home-img img {
    width: 90%;
    transform: translate(0, 0);
}

.home .scroll-down {
    color: var(--first-color);
    font-size: var(--normal-font-size);
    font-weight: 500;
    margin-top: 20px;
}

.home .scroll-down i {
    color: var(--second-color);
    font-size: 1.2em;
    animation: arrow-down ease 2s infinite;
}

@keyframes arrow-down {
    0% {
        transform: translateY(0);
    }

    30% {
        transform: translateY(10px);
    }
}
</style>