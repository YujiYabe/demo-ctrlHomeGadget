<template>
  <section class="container">
    <DeviceList />
  </section>
</template>


<script>
import DeviceList from "~/components/deviceList.vue";

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
    DeviceList
  }
};
</script>

<style scoped>
div {
  cursor: pointer;
  font-family: "Roboto Mono", sans-serif;
}
</style>
