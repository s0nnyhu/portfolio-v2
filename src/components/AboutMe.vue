<template>
  <div class="about-me">
    <typewriter ref="typewriter_about_me" :interval="30" :style="{ visibility: status }">
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
      aboutMeText: `<p> Hi, my name is <strong>Sonny</strong> </p> <p> I'm a junior developer and I <strong>design</strong>, <strong>build</strong> &amp; <strong>experiment</strong> on various digital applications. </p> <p> I'm improving everyday by challenging myself with things that matter to me. </p> <p> I’m easily inspired and more than willing to follow my fascinations wherever they take me. </p> <br /><p> Take a look at my linkedin and github and feel free to get in touch. </p>`
    };
  },
  components: {
    typewriter
  },
  methods: {
    // $emit
    type: function () {
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
p {
  font-size: 1.1rem;
}
</style>
