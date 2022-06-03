<template  ref="reference">

  <body>
    <my-header ref="myHeader"/>
    <home-section ref="homeSection"/>
    <about-section/>
    <skills-section ref="skillsSection"/>
    <latest-section ref="latestSection"/>
    <scroll-to-top ref="scrollToTop"/>
    <my-footer ref="myFooter"/>
    <theme-change ref="themeChange"/>
  </body>
</template>

<script>
import MyHeader from "@/components/MyHeader.vue"
import HomeSection from "@/components/HomeSection.vue"
import AboutSection from "@/components/AboutSection.vue"
import SkillsSection from "@/components/SkillsSection.vue"
import LatestSection from "@/components/LatestSection.vue"
import ScrollToTop from "@/components/ScrollToTop.vue"
import ThemeChange from "@/components/ThemeChange.vue"
import MyFooter from "@/components/MyFooter.vue"
import { defineComponent } from "@vue/runtime-core"
export default defineComponent({
  name: 'HomePage',
  components: { MyHeader, AboutSection, HomeSection, SkillsSection, LatestSection, ScrollToTop, MyFooter, ThemeChange },

})
</script>

<style scoped>
</style>