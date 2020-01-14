<template>
  <div id="portfolio">
    <Fireflies></Fireflies>
    <div class="content"></div>
  </div>
</template>

<script>
import Fireflies from "./Fireflies.vue";

export default {
  name: "Portfolio",
  data() {
    return {};
  },
  methods: {},
  components: {
    Fireflies
  },
  mounted() {}
};
</script>
<style>
#portfolio .content {
  position: absolute;
  display: block;
  z-index: 80;
}
#portfolio {
  overflow: hidden;
  position: relative;
  height: 100%;
  width: 100%;
  background: -o-linear-gradient(top, #000, #257eb7);
  background: -ms-linear-gradient(top, #000, #257eb7);
  background: -moz-linear-gradient(top, #000, #257eb7);
  background: -webkit-linear-gradient(top, #000, #021522);
  background: linear-gradient(top, #000, #257eb7);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorStr='#040429', EndColorStr='#257eb7');
  -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorStr='#040429', EndColorStr='#257eb7')";
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
