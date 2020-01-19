<template>
  <div id="portfolio">
    <Fireflies></Fireflies>
    <div class="content">
      <!--Social Bar-->
      <div class="social">
        <Social-bar></Social-bar>
      </div>
      <!--End Social Bar-->
      <!--Menu-->
      <div v-if="!cliMode" class="menu">
        <Menu></Menu>
      </div>
      <!--End Menu-->
      <!--Cli-->
      <div v-else class="cli">
        <Cli user-prompt="binbash"></Cli>
      </div>
      <!--End Cli-->
      <div class="data">
        <transition name="component-fade" mode="out-in">
          <component v-bind:is="state"></component>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Fireflies from "./Fireflies";
import Menu from "./Menu";
import SocialBar from "./SocialBar";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import Cli from "./Cli";

export default {
  name: "Portfolio",
  data() {
    return {
      pickedMenu: "aboutMe",
      cliMode: false
    };
  },
  methods: {},
  components: {
    Fireflies,
    Menu,
    SocialBar,
    Cli,
    aboutMe: AboutMe,
    skills: Skills,
    projects: Projects
  },
  mounted() {},
  computed: {
    ...mapGetters({
      state: "pickedMenu"
    })
  }
};
</script>
<style>
/**Portfolio - Clickable content */
#portfolio .content {
  position: relative;
  display: inline-block;
  width: 100%;
  z-index: 80;
}
/**Portfolio - Background */
#portfolio {
  overflow: hidden;

  height: 100%; /*ici*/
  width: 100%;
  position: absolute;
  overflow-y: auto;
  max-width: 100% !important;
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
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /*background-image: url(https://cathydolle.github.io/assets/settings/wallpaper/giyuu_tomioka.svg);*/
}
/**Menu CSS - Position */
.menu {
  /*background: rgba(1, 1, 1, 0.2);*/
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
}
/**Social */
.social {
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
}
/**Data */
.data {
  font: 1.2em/1.6 "Inconsolata", monospace;
  margin-top: 50px;
  padding: 5%;
  text-align: center;
}
/**Cli */
.cli {
  /*background: rgba(1, 1, 1, 0.2);*/
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  margin: 10px;
}
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active for <2.1.8 */ {
  opacity: 0;
}
</style>
