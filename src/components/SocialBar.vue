<template>
  <section>
    <ul class="social-icons">
      <li class="initials">
        <div class="gradient-border" id="box">
          <p>{{initials}}</p>
        </div>
      </li>
      <!--STANDBY PROJECT
      <li>
        <a v-on:click="change" href="#" class="social-icon">
          <i class="fa fa-envelope"></i>
        </a>
      </li>
      -->
      <!-- <li>
        <a href="https://twitter.com/hu_sonny" target="_blank" class="social-icon">
          <i class="fa fa-twitter"></i>
        </a>
      </li>-->
      <li>
        <a
          href="https://www.linkedin.com/in/sonny-hu-16001384/"
          target="_blank"
          class="social-icon"
        >
          <i class="fa fa-linkedin"></i>
        </a>
      </li>
      <li>
        <a href="https://github.com/s0nnyhu/" target="_blank" class="social-icon">
          <i class="fa fa-github"></i>
        </a>
      </li>
      <transition name="fade">
        <li v-if="time !== ''" class="clock">
          <p>{{ time }}</p>
        </li>
      </transition>
    </ul>
  </section>
</template>

<script>
export default {
  name: "SocialBar",
  data() {
    return {
      time: "",
      initials: ""
    };
  },
  created() {
    setInterval(this.getNow, 1000);
  },
  methods: {
    getNow: function () {
      const today = new Date();
      const time =
        today.getHours() +
        ":" +
        (today.getMinutes() < 10
          ? "0" + today.getMinutes()
          : today.getMinutes());
      this.time = time;
      this.initials = "SH";
    },
    change: function () {
      this.$store.commit("changeSelectedMenu", "contact");
    }
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: "Ninja Naruto";
  src: url("../assets/css/fonts/6cb4254d224fa60f15c496c4720b5c9a.eot"); /* IE9*/
  src: url("../assets/css/fonts/6cb4254d224fa60f15c496c4720b5c9a.eot")
      format("embedded-opentype"),
    /* IE6-IE8 */
      url("../assets/css/fonts/6cb4254d224fa60f15c496c4720b5c9a.woff2")
      format("woff2"),
    /* chrome firefox */
      url("../assets/css/fonts/6cb4254d224fa60f15c496c4720b5c9a.woff")
      format("woff"),
    /* chrome firefox */
      url("../assets/css/fonts/6cb4254d224fa60f15c496c4720b5c9a.ttf")
      format("truetype"),
    /* chrome firefox opera Safari, Android, iOS 4.2+*/
      url("../assets/css/fonts/6cb4254d224fa60f15c496c4720b5c9a.svg")
      format("svg"); /* iOS 4.1- */
}

@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css);

.gradient-border {
  --borderWidth: 2px;
  position: relative;
  border-radius: var(--borderWidth);
}
.gradient-border:after {
  content: "";
  position: absolute;
  top: calc(-1 * var(--borderWidth));
  left: calc(-1 * var(--borderWidth));
  height: calc(100% + var(--borderWidth) * 2);
  width: calc(100% + var(--borderWidth) * 2);
  background: linear-gradient(
    60deg,
    #a166ab,
    #5073b8,
    #1098ad,
    #07b39b,
    #6fba82
  );
  border-radius: calc(2 * var(--borderWidth));
  z-index: -1;
  animation: animatedgradient 3s ease alternate infinite;
  background-size: 300% 300%;
}

@keyframes animatedgradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
ul {
  padding: 0;
  list-style: none;
}
.social-icon {
  color: #fff;
}
.social-icons {
  background-color: #322f30;
  width: 100vw;
}
.social-icons li {
  vertical-align: top;
  display: inline;
  height: 100px;
}
.social-icons li:last-child {
  vertical-align: top;
  display: inline;
  height: 0;
}
.social-icons a {
  color: #fff;
  text-decoration: none;
}
.fa-envelope {
  padding: 10px 14px;
  -o-transition: 0.2s;
  -ms-transition: 0.2s;
  -moz-transition: 0.2s;
  -webkit-transition: 0.2s;
  transition: 0.2s;
  background-color: #322f30;
}

.initials {
  float: left;
}
.initials p {
  padding: 5px 14px;
  color: white;
  font-size: 15px;
  font-family: "Ninja Naruto";
}
.fa-envelope:hover {
  background-color: #3d5b99;
}
.fa-twitter {
  padding: 10px 12px;
  -o-transition: 0.2s;
  -ms-transition: 0.2s;
  -moz-transition: 0.2s;
  -webkit-transition: 0.2s;
  transition: 0.2s;
  background-color: #322f30;
}
.fa-twitter:hover {
  background-color: #00aced;
}

.fa-youtube:hover {
  background-color: #e64a41;
}
.fa-linkedin {
  padding: 10px 14px;
  -o-transition: 0.2s;
  -ms-transition: 0.2s;
  -moz-transition: 0.2s;
  -webkit-transition: 0.2s;
  transition: 0.2s;
  background-color: #322f30;
}
.fa-linkedin:hover {
  background-color: #0073a4;
}
.fa-github {
  padding: 10px 14px;
  -o-transition: 0.2s;
  -ms-transition: 0.2s;
  -moz-transition: 0.2s;
  -webkit-transition: 0.2s;
  transition: 0.2s;
  background-color: #322f30;
}
.clock p {
  padding: 5px 14px;
  -o-transition: 0.2s;
  -ms-transition: 0.2s;
  -moz-transition: 0.2s;
  -webkit-transition: 0.2s;
  transition: 0.2s;
  color: white;
  font-size: 15px;
}
.fa-github:hover {
  background-color: #5a32a3;
}
.clock {
  float: right;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
