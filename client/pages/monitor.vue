<template>
  <section class="container">
    <DeviceList />
    <Monitor />
  </section>
</template>


<script>
import DeviceList from "~/components/deviceList.vue";
import Monitor from "~/components/monitor.vue";
import Tv from "~/components/tv.vue";

export default {
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Roboto+Mono"
        }
      ]
    };
  },

  components: {
    DeviceList,
    Monitor,
    Tv
  }
};
</script>

<style scoped>
div {
  cursor: pointer;
  font-family: "Roboto Mono", sans-serif;
}
</style>
