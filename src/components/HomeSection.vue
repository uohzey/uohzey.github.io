<template>
  <section class="home flex-center" id="home">
    <div class="home-container">
      <div class="intro">
        <div class="media-icons">
          <a
            href="javascript:void(0);"
            @click="
              goWeb('https://www.facebook.com/people/Ye-Zhou/100024159512555/')
            "
            ><i class="fa fa-facebook-f"></i
          ></a>
          <a
            href="javascript:void(0);"
            @click="goWeb('https://www.instagram.com/uohzey0519/')"
            ><i class="fa fa-instagram"></i
          ></a>
          <a
            href="javascript:void(0);"
            @click="goWeb('https://twitter.com/uohzey')"
            ><i class="fa fa-twitter"></i
          ></a>
          <a
            href="javascript:void(0);"
            @click="goWeb('https://leetcode.cn/u/uohzey/')"
            ><i class="fa fa-code"></i
          ></a>
          <a
            href="javascript:void(0);"
            @click="goWeb('https://github.com/uohzey/')"
            ><i class="fa fa-github"></i
          ></a>
        </div>
        <div class="info">
          <h2>你好, 我是叶舟!</h2>
          <h3>一名即将毕业的研究生</h3>
          <p>
            这是我的个人主页.
            我会在这里分享我的论文成果,项目设计,学习情况和最近的待办事项.
          </p>
          <p>
            本主页主要参考了Coding
            Show的响应式个人网站布局,并使用vue重新进行了部分设计.
          </p>
          <a href="" class="btn"
            >Contace Me <i class="fa fa-arrow-circle-right"></i
          ></a>
        </div>
      </div>
      <div>
        <div class="home-img">
          <img src="@/images/Personal.jpg" alt="" />
        </div>
      </div>
    </div>
    <a
      href="javascript:void(0);"
      class="scroll-down"
      @click="goAnchor('#about')"
      >Scroll Down<i class="fa fa-arrow-down"></i
    ></a>
  </section>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "HomePage",
  methods: {
    goAnchor(selector) {
      document.querySelector(selector).scrollIntoView({
        behavior: "smooth",
      });
    },
    goWeb(web) {
      window.open(web);
    },
  },
});
</script>

<style scoped>
h2 {
  text-align: left;
}

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
  display: grid;
  align-items: center;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  max-width: 100%;
  margin: 0 auto;
  gap: 20px;
}

.home .home-container .intro {
  display: flex;
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

.home-container .home-img {
  position: relative;
}

.home-container .home-img img {
  width: 60%;
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