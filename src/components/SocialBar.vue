<template>
  <section>
    <ul class="social-icons">
      <li>
        <a href class="social-icon">
          <i class="fa fa-envelope"></i>
        </a>
      </li>
      <li>
        <a href class="social-icon">
          <i class="fa fa-twitter"></i>
        </a>
      </li>
      <li>
        <a href class="social-icon">
          <i class="fa fa-linkedin"></i>
        </a>
      </li>
      <li>
        <a href class="social-icon">
          <i class="fa fa-github"></i>
        </a>
      </li>
      <transition name="fade">
        <li v-if="time !== ''" class="clock">
          <p>{{time}}</p>
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
      time: ""
    };
  },
  created() {
    setInterval(this.getNow, 1000);
  },
  methods: {
    getNow: function() {
      const today = new Date();
      const time =
        today.getHours() +
        ":" +
        (today.getMinutes() < 10
          ? "0" + today.getMinutes()
          : today.getMinutes());
      this.time = time;
    }
  }
};
</script>

<style>
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css);
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
.social-icons a {
  color: #fff;
  text-decoration: none;
}
.fa-envelope {
  padding: 10px 14px;
  -o-transition: 0.5s;
  -ms-transition: 0.5s;
  -moz-transition: 0.5s;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  background-color: #322f30;
}
.fa-envelope:hover {
  background-color: #3d5b99;
}
.fa-twitter {
  padding: 10px 12px;
  -o-transition: 0.5s;
  -ms-transition: 0.5s;
  -moz-transition: 0.5s;
  -webkit-transition: 0.5s;
  transition: 0.5s;
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
  -o-transition: 0.5s;
  -ms-transition: 0.5s;
  -moz-transition: 0.5s;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  background-color: #322f30;
}
.fa-linkedin:hover {
  background-color: #0073a4;
}
.fa-github {
  padding: 10px 14px;
  -o-transition: 0.5s;
  -ms-transition: 0.5s;
  -moz-transition: 0.5s;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  background-color: #322f30;
}
.clock p {
  padding: 5px 14px;
  -o-transition: 0.5s;
  -ms-transition: 0.5s;
  -moz-transition: 0.5s;
  -webkit-transition: 0.5s;
  transition: 0.5s;
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
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>