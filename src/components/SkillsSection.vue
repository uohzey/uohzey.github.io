<template>
    <!--==========Skills section========-->
    <section class="skills section" id="skills">
        <div class="container flex-center">
            <h1 class="section-title-01">Skills</h1>
            <h2 class="section-title-02">Skills</h2>
            <div class="content">
                <div class="skills-description">
                    <h3>Education & Skills</h3>
                    <p>六年的计算机专业学习,目前在实验室负责利用注意力机制对相关大气数据进行时间序列预测,同时设计并开发了一个前后端分离的大气数据库软件项目,以及维护了一个个人网站.</p>
                </div>
                <div class="skills-info education-all">
                    <div class="education">
                        <h4><label>Education</label></h4>
                        <ul class="edu-list">
                            <li class="item">
                                <span class="year">2020-2023</span>
                                <p><span>硕士</span> - 中国科学技术大学 计算机应用技术</p>
                            </li>
                        </ul>
                        <ul class="edu-list">
                            <li class="item">
                                <span class="year">2016-2020</span>
                                <p><span>本科</span> - 安徽师范大学 计算机科学与技术</p>
                            </li>
                        </ul>
                    </div>
                    <div class="education">
                        <h4><label>Skills</label></h4>
                        <ul class="bars">
                            <li class="bar">
                                <div class="info">
                                    <span>Java</span>
                                    <span>75%</span>
                                </div>
                                <div class="line java"></div>
                            </li>
                            <li class="bar">
                                <div class="info">
                                    <span>JavaScript</span>
                                    <span>70%</span>
                                </div>
                                <div class="line javascript"></div>
                            </li>
                            <li class="bar">
                                <div class="info">
                                    <span>HTML</span>
                                    <span>60%</span>
                                </div>
                                <div class="line html"></div>
                            </li>
                            <li class="bar">
                                <div class="info">
                                    <span>CSS</span>
                                    <span>60%</span>
                                </div>
                                <div class="line css"></div>
                            </li>
                            <li class="bar">
                                <div class="info">
                                    <span>Python</span>
                                    <span>50%</span>
                                </div>
                                <div class="line python"></div>
                            </li>
                        </ul>
                    </div>
                    <div class="education">
                        <h4><label>Awards</label></h4>
                        <ul class="edu-list">
                            <li class="item">
                                <span class="year">2021 - 2022</span>
                                <p><span>软件著作</span> 海上大气光学数据库软件</p>
                            </li>
                            <li class="item">
                                <span class="year">2021 - 2022</span>
                                <p><span>奖学金</span> USTC - 一等奖学金</p>
                            </li>
                            <li class="item">
                                <span class="year">2016 - 2020</span>
                                <p><span>奖学金</span> AHNU - 二等奖学金 * 4</p>
                            </li>
                            <li class="item">
                                <span class="year">2019</span>
                                <p><span>美国大学生数学建模比赛</span> - Finalist</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="skills-description">
                    <h3>Project & Paper</h3>
                </div>
                <div class="skills-info">
                    <div class="experience-card">
                        <div class="upper">
                            <h3>大气数据库软件</h3>
                            <h5>Part Time | Project</h5>
                            <p><span class="year">2021 - 2022</span></p>
                        </div>
                        <div class="hr"></div>
                        <p>基于 vue2 + express 实现的前后端分离的大气数据库软件项目, 主要特点:</p>
                        <p>1. 重构了数据库表,大大优化了查询耗时</p>
                        <p>2. 实现组件复用,大大减少了代码量,并减轻后期维护压力</p>
                        <p>3. 实现路由懒加载,使首页加载速度更快,获得更好的用户体验</p>
                        <p>4. 通过watch监听数据变化,实现表格自动渲染并实现表格懒加载</p>
                    </div>
                    <div class="experience-card">
                        <div class="upper">
                            <h3>个人主页</h3>
                            <h5>Part Time | Project</h5>
                            <p><span class="year">2021 - 2022</span></p>
                        </div>
                        <div class="hr"></div>
                        <p></p>
                    </div>
                    <div class="experience-card">
                        <div class="upper">
                            <h3>消光系数预测(Deep Learning)</h3>
                            <h5>Part Time | Paper</h5>
                            <p><span class="year">2021 - 2022</span></p>
                        </div>
                        <div class="hr"></div>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
    name: "SkillsSection",
})
</script>

<style scoped>
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

.bar {
    text-align: left;
    background-color: var(--card-bg-color);
    box-shadow: var(--box-shadow);
    margin-bottom: 10px;
    padding: 20px;
    border-radius: 6px;
    transition: .3s ease;
}

.bar .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
    font-size: var(--small-font-size);
}

.bar .info span {
    font-size: 500;
}

.bar .line {
    position: relative;
    width: 100%;
    height: 7px;
    background: #c5cadf;
    border-radius: 2px;
}

.bar .line:before {
    content: '';
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    background: var(--second-color);
    border-radius: 2px;

}

.bar .java:before {
    width: 75%;
}

.bar .javascript:before {
    width: 70%;
}

.bar .html:before {
    width: 60%;
}

.bar .css:before {
    width: 60%;
}

.bar .python:before {
    width: 50%;
}

.edu-list .item:hover,
.bar:hover,
.experience-card:hover {
    transform: scale(1.03);
}

.experience-card {
    background: var(--card-bg-color);
    border-bottom: 3px solid var(--second-color);
    padding: 35px;
    border-radius: 6px;
    box-shadow: var(--box-shadow);
    transition: .3s ease;
}

.experience-card .uppper {
    line-height: 30px;
}

.experience-card h3 {
    font-size: 1.3em;
    font-weight: 700;
}

.experience-card h5 {
    font-size: var(--small-font-size);
    font-weight: 500;
    font-style: italic;
}

.experience-card span {
    color: var(--third-color);
}

.experience-card .hr {
    width: 100%;
    height: 2px;
    background: var(--line-color);
    margin: 10px 0 22px;
}
</style>