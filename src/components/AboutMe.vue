<template>
  <div class="about-me">
    <typewriter ref="typewriter_about_me" :interval="22" :style="{ visibility: status }">
      <div v-if="wasAboutMeRendered === false" v-html="aboutMeText"></div>
    </typewriter>
    <div v-if="wasAboutMeRendered === true" v-html="aboutMeText"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import typewriter from "vue-type-writer";
export default {
  name: "AboutMe",
  data() {
    return {
      status: "hidden",
      aboutMeText: `<p> Hi, my name is <strong>Sonny</strong> </p> <p> I'm a junior developer and I <strong>design</strong>, <strong>build</strong> &amp; <strong>experiment</strong> on various digital applications </p> <p> I'm learning everyday to improve, continue challenging myself, and do interesting things that matter. </p> <p> Fueled by high energy levels and boundless enthusiasm, I’m easily inspired and more than willing to follow my fascinations wherever they take me. </p> <p> Feel free to take look at my latest personal projects and do not hesitate to get in touch </p>`
    };
  },
  components: {
    typewriter
  },
  methods: {
    // $emit
    type: function() {
      if (!this.wasAboutMeRendered) {
        this.status = "visible";
        this.$refs.typewriter_about_me.$emit("typewrite");
      }
    }
  },
  mounted() {
    this.type();
  },
  computed: {
    ...mapGetters({
      wasAboutMeRendered: "wasAboutMeRendered"
    })
  }
};
</script>

<style>
.about-me {
  margin-bottom: 150px;
}
</style>
