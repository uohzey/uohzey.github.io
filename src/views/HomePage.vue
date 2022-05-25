<template>

  <body>
    <my-header />
    <home-section />
    <about-section />
    <skills-section />
  </body>
</template>

<script>
import MyHeader from "@/components/MyHeader.vue"
import HomeSection from "@/components/HomeSection.vue"
import AboutSection from "@/components/AboutSection.vue"
import SkillsSection from "@/components/SkillsSection.vue"
import { defineComponent } from "@vue/runtime-core"
export default defineComponent({
  name: 'HomePage',
  components: { MyHeader, AboutSection, HomeSection, SkillsSection },
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
        }, {
          date: '2022-04-24',
          status: 3
        }, {
          date: '2022-04-26',
          status: 3
        }, {
          date: '2022-04-27',
          status: 2
        }, {
          date: '2022-04-28',
          status: 1
        }, {
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
        {
          date: '2022-05-20',
          status: 1
        },
        {
          date: '2022-05-23',
          status: 2
        },
      ],
      size: 2,
      times: {
        longest: 123,
        longestContinuous: 13,
        latestContinuous: 6,
      }
    }
  },
})
</script>

<style scoped>
</style>