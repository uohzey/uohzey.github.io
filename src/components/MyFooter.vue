<template>
  <footer>
    <div class="footer-container hr">
      <div class="about group">
        <h2>Uohzey</h2>
        <p>Front-end Developer</p>
        <a href="javascript:void(0)" @click="goAnchor('#about')">About Me</a>
      </div>
      <div class="info group">
        <h3>More</h3>
        <ul>
          <li>
            <a href="javascript:void(0)" @click="goAnchor('#skills')">Skills</a>
          </li>
          <li>
            <a href="javascript:void(0)" @click="goAnchor('#latest')">Latest</a>
          </li>
        </ul>
      </div>
      <div class="follow group">
        <h3>Follow</h3>
        <ul>
          <li>
            <a
              href="javascript:void(0);"
              @click="
                goWeb(
                  'https://www.facebook.com/people/Ye-Zhou/100024159512555/'
                )
              "
              ><i class="fa fa-facebook-f"></i
            ></a>
          </li>
          <li>
            <a
              href="javascript:void(0);"
              @click="goWeb('https://www.instagram.com/uohzey0519/')"
              ><i class="fa fa-instagram"></i
            ></a>
          </li>
          <li>
            <a
              href="javascript:void(0);"
              @click="goWeb('https://twitter.com/uohzey')"
              ><i class="fa fa-twitter"></i
            ></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-copyright group">
      <p>Copyright © 2022 Uohzey. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "MyFooter",
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
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: var(--second-color);
  width: 100%;
  margin-top: 50px;
  padding: 3rem 2rem;
  color: #fff;
}

footer a {
  color: #fff;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1150px;
}

.footer-container .about h2 {
  font-size: 3em;
  font-weight: 600;
  background: linear-gradient(to top, transparent 0%, #fff 50%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.8;
}

.footer-container .about p {
  font-size: var(--normal-font-size);
  font-weight: 300;
  margin-bottom: 30px;
  text-align: center;
}

.footer-container .info,
.footer-container .follow {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-container .info h3,
.footer-container .follow h3 {
  font-size: 1.1em;
  font-weight: 500;
  margin-bottom: 30px;
}

.footer-container .info ul,
.footer-container .follow ul {
  display: flex;
}

.footer-container .info a {
  margin: 20px;
}

.footer-container .follow a {
  font-size: 1.5em;
  margin: 20px;
}
.hr {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 0 auto;
}

.footer-copyright p {
  font-size: var(--normal-font-size);
  font-weight: 300;
  margin-top: 50px;
}
</style>