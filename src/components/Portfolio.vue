<template>
  <div id="portfolio">
    <Fireflies></Fireflies>
    <div class="content">
      <div class="social">
        <SocialBar></SocialBar>
      </div>
      <div class="menu">
        <Menu></Menu>
      </div>
      <div class="data">
        <!--
        <p>
          Hi, my name is
          <strong>Sonny</strong>
        </p>

        <p>
          I'm a junior developer and I
          <strong>design</strong>,
          <strong>build</strong> &amp;
          <strong>experiment</strong> on various digital applications
        </p>
        <p>I'm currently studying for a master’s degree. I'm learning everyday to improve, continue challenging myself, and do interesting things that matter.</p>
        <p>Fueled by high energy levels and boundless enthusiasm, I’m easily inspired and more than willing to follow my fascinations wherever they take me.</p>
        <p>Feel free to take look at my latest personal projects and do not hesitate to get in touch</p>
        <p>Portfolio built using VueJs.</p>
        -->
      </div>
    </div>
  </div>
</template>

<script>
import Fireflies from "./Fireflies.vue";
import Menu from "./Menu.vue";
import SocialBar from "./SocialBar.vue";

export default {
  name: "Portfolio",
  data() {
    return {};
  },
  methods: {},
  components: {
    Fireflies,
    Menu,
    SocialBar
  },
  mounted() {}
};
</script>
<style>
/**Portfolio - Clickable content */
#portfolio .content {
  position: relative;
  display: inline-block;
  z-index: 80;
}
/**Portfolio - Background */
#portfolio {
  overflow: hidden;
  position: relative;
  height: 100vh;
  width: 100%;
  /*
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
  */
}
/**Menu CSS - Position */
.menu {
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
}
/**Data */
.data {
  padding: 15px;
}
</style>
