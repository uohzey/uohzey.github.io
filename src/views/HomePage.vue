<template>

  <body>
    
    <my-header />
    <home-section />
    <about-section />
    <skills-section />
    <latest-section />
    <scroll-to-top />
  </body>
</template>

<script>
import MyHeader from "@/components/MyHeader.vue"
import HomeSection from "@/components/HomeSection.vue"
import AboutSection from "@/components/AboutSection.vue"
import SkillsSection from "@/components/SkillsSection.vue"
import LatestSection from "@/components/LatestSection.vue"
import ScrollToTop from "@/components/ScrollToTop.vue"
import { defineComponent } from "@vue/runtime-core"
export default defineComponent({
  name: 'HomePage',
  components: { MyHeader, AboutSection, HomeSection, SkillsSection, LatestSection, ScrollToTop },

})
</script>

<style scoped>
</style>