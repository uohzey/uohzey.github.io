<template>
    <!--=========About section=========-->
    <section class="about section" id="about">
        <div class="container flex-center">
            <h1 class="section-title-01">About me</h1>
            <h2 class="section-title-02">About me</h2>
            <div class="content flex-center">
                <!-- <div class="about-img">
                    <img src="@/images/about-img.jpg" alt="">
                </div> -->
                <div class="about-info">
                    <div>
                        <div class="description">
                            <h3>我叫叶舟</h3>
                            <h4>一名<span>中国科学技术大学</span>的学生, 专业是<span>计算机应用技术. </span>
                            </h4>
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
                    <div>
                        <p>grid-template-columns</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
    name: "AboutSection",
})
</script>

<style scoped>
.about .container .content {
    column-gap: 40px;
    width: 100%;
}

.about-img {
    position: relative;
}

.about-img img {
    max-width: 90%;
    min-width: 500px;
    max-height: 90%;
    border-radius: 10px;
}

.about-info {
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin: 0 auto;
}

.about-info .description {
    max-width: 600px;
}

.about-info .description h3 {
    font-size: 2em;
    font-weight: 600;
    margin-bottom: 10px;
}

.about-info .description h4 {
    font-size: 1.3em;
    font-weight: 600;
    margin-bottom: 10px;
}

.about-info .description h4 span {
    color: var(--second-color);
}

.about-info .description p {
    color: var(--third-color);
    font-size: var(--normal-font-size);
    margin-bottom: 15px;
    padding-bottom: 25px;
    border-bottom: 2px solid var(--line-color);
}

.about-info .professional-list {
    display: flex;
    column-gap: 70px;
}

.about-info .professional-list .list-item h3 {
    font-size: 2.5em;
    font-weight: 700;
}

.about-info .professional-list .list-item span {
    color: var(--third-color);
    font-size: var(--small-font-size);
}
</style>