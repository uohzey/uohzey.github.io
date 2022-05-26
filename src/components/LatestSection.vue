<template>
    <!-- ======= Latest section -->
    <section class="latest section" id="latest">
        <div class="container flex-center">
            <h1 class="section-title-01">Latest</h1>
            <h2 class="section-title-02">Latest</h2>
            <div class="content">
                <div class="skills-description">
                    <h3>Reading</h3>
                </div>
                <div class="skills-info education-all">
                    <div class="education">
                        <h4><label>Java</label></h4>
                        <ul class="bars">
                            <li class="bar">
                                <div class="info">
                                    <span>剑指offer</span>
                                    <span>75%</span>
                                </div>
                                <div class="line javascript-guide"></div>
                            </li>
                            <li class="bar">
                                <div class="info">
                                    <span>Java 核心技术 卷Ⅰ</span>
                                    <span>10%</span>
                                </div>
                                <div class="line javascript-dom"></div>
                            </li>
                        </ul>
                    </div>
                    <div class="education">
                        <h4><label>frontEnd</label></h4>
                        <ul class="bars">
                            <li class="bar">
                                <div class="info">
                                    <span>JavaScript 权威指南</span>
                                    <span>55%</span>
                                </div>
                                <div class="line javascript-guide"></div>
                            </li>
                            <li class="bar">
                                <div class="info">
                                    <span>JavaScript Dom 编程艺术</span>
                                    <span>10%</span>
                                </div>
                                <div class="line javascript-dom"></div>
                            </li>
                            <li class="bar">
                                <div class="info">
                                    <span>Vue.js 设计与实现</span>
                                    <span>30%</span>
                                </div>
                                <div class="line vuejs"></div>
                            </li>
                        </ul>
                    </div>
                    <div class="education">
                        <h4><label>others</label></h4>
                        <ul class="bars">
                        </ul>
                    </div>
                </div>
                <div class="skills-description">
                    <h3>Pending items</h3>
                    <ul class="bars">
                        <li class="bar">
                            <div class="info">
                                <span>1. 找到一个线上暑期实习.</span>
                            </div>
                            <div class="info">
                                <span>2. 继续完善数据库项目,完成echarts图像展示部分与数值计算部分.</span>
                            </div>
                            <div class="info">
                                <span>3. 继续完善个人主页,尽快适配手机端.</span>
                            </div>
                            <div class="info">
                                <span>4. 继续参加力扣周赛,争取稳3题!</span>
                            </div>
                            <div class="info">
                                <span>...</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: 'ServicesSection',
})
</script>

<style scoped>
.latest .container .content {
    width: 100%;
}

.latest-info h4 label {
    background: var(--second-color);
    color: #fff;
    font-size: var(--normal-font-size);
    font-weight: 400;
    padding: 5px 15px;
    border-radius: 5px;
}

.latest-description h3 {
    font-size: 2em;
    margin-bottom: 50px;
}

.latest-info {
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin: 0 auto;
}

.latest-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    max-width: 100%;
    margin: 0 auto;
    gap: 20px;
}

.latest-card>i {
    color: var(--second-color);
    font-size: 3em;
    margin-bottom: 30px;
}

.latest-card {
    background: var(--card-bg-color);
    border-bottom: 3px solid var(--second-color);
    padding: 50px;
    border-radius: 6px;
    box-shadow: var(--box-shadow);
}

.latest-card h3 {
    font-size: 1.5em;
    font-weight: 700;
    line-height: 30px;
    margin-bottom: 20px;
}

.skills .container .content {
    width: 100%
}

.skills-description {
    max-width: 700px;
    margin-bottom: 50px;
}

.skills-description h3 {
    font-size: 2em;
    margin-bottom: 5px;
}

.skills-info {
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin: 0 auto;
}

.skills-info h4 {
    margin-bottom: 20px;
}

.skills-info h4 label {
    background: var(--second-color);
    color: #fff;
    font-size: var(--normal-font-size);
    font-weight: 400;
    padding: 5px 15px;
    border-radius: 5px;
}

.education-all {
    margin-bottom: 80px;
}

.edu-list .item {
    text-align: left;
    background: var(--card-bg-color);
    box-shadow: var(--box-shadow);
    border-bottom: 3px solid var(--second-color);
    padding: 20px;
    margin-top: 15px;
    border-radius: 6px;
    transition: .3s ease;
}

.edu-list .item .year {
    font-size: var(--small-font-size);
    margin-bottom: 5px;
}

.edu-list .item p {
    color: var(--third-color);
    font-size: var(--small-font-size);
}

.edu-list .item p span {
    text-align: left;
    color: var(--first-color);
    font-size: var(--normal-font-size);
    font-weight: 500;
}


.bar .javascript-guide:before {
    width: 55%;
}

.bar .javascript-dom:before {
    width: 10%;
}

.bar .vuejs:before {
    width: 30%;
}

.edu-list .item:hover,
.bar:hover,
.experience-card:hover {
    transform: scale(1.03);
}
</style>