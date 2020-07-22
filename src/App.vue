<template>
  <div id="app">
    <!--<button class="btnSwitch" v-on:click="view = !view">Switch universe</button>-->
    <transition name="slide-fade" mode="out-in">
      <component v-bind:is="view"></component>
    </transition>
  </div>
</template>

<script>
import Portfolio from "./components/Portfolio.vue";
import Universe from "./components/Universe.vue";
import Trololo from "./components/Trololo.vue";

export default {
  name: "app",
  data() {
    return {
      view: "portfolio"
    };
  },
  methods: {
    updateview: function (sView) {
      switch (this.view) {
        case "portfolio":
          this.view = sView;
          break;
        case "universe":
          console.log(sView);
          if (sView == "universe") {
            this.view = "portfolio";
          }
          if (sView == "trololo") {
            this.view = "trololo";
          }
          break;
        case "trololo":
          console.log(sView);
          if (sView == "universe") {
            this.view = "universe";
          }
          if (sView == "trololo") {
            this.view = "portfolio";
          }
          break;
        default:
          break;
      }
    }
  },
  components: {
    portfolio: Portfolio,
    universe: Universe,
    trololo: Trololo
  },
  mounted() {
    window.addEventListener("keydown", e => {
      if (e.altKey && e.key === "s") {
        this.updateview("universe");
      }
      if (e.altKey && e.key === "t") {
        this.updateview("trololo");
      }
    });
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Inconsolata:400,700");
#app {
  font: 0.875em/1.6 "Inconsolata", monospace;
  color: #181818;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: justify;
  color: #2c3e50;
}

.slide-fade-enter-active {
  transition: all 0.1s ease;
}
.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
	/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.btnSwitch {
  position: absolute;
  right: 0;
  margin-top: 1%;
  z-index: 40;
}
</style>
