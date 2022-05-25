<template>
    <section class="calendar">
        <!-- Loading stuff -->
        Loading the data just for you.
    </section>
    <div>
        GitHubCalendar(".calendar", "uohzey");
    </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
    name: 'GithubCalendar'
})
</script>

<style scoped>
@import 'node_modules/github-calendar/dist/github-calendar-responsive.css'
</style>