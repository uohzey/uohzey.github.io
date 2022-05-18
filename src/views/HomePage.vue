<template>
  <my-header />
</template>

<script>
import MyHeader from "@/components/MyHeader.vue"
import { defineComponent } from "@vue/runtime-core"
export default defineComponent({
  name: 'HomePage',
  components: { MyHeader }
})
</script>

<style scoped>
</style>