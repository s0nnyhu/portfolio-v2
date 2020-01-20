<template>
  <div>
    <section id="cli-help">
      <p>A fun experiment for displaying simple info in a geeky manner.</p>
      <p>
        <span>
          Type 'help' +
          <kbd>Enter</kbd> -- for available commands.
        </span>
      </p>
    </section>
    <span class="command">
      {{userPrompt}}
      <input type="text" v-model="typedCommand" v-on:keyup.enter="executeCommand" />
    </span>
  </div>
</template>

<script>
export default {
  name: "Cli",
  data() {
    return {
      typedCommand: ""
    };
  },
  props: {
    userPrompt: String
  },
  methods: {
    executeCommand: function() {
      switch (this.typedCommand) {
        case "about":
          this.$store.commit("changeSelectedMenu", "aboutMe");
          this.$store.commit("updateWasRenderedAboutMe", true);
          break;
        case "skills":
          this.$store.commit("changeSelectedMenu", "skills");
          break;
        case "projects":
          this.$store.commit("changeSelectedMenu", "projects");
          break;
        case "settings":
          this.$store.commit("changeSelectedMenu", "settings");
          break;
      }
      this.typedCommand = "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.command {
  display: block;
  /* max-width: 20em; */
  color: #181818;
  font-weight: 700;
  margin: 2em 0;
}
input[type="text"] {
  /* max-width: 10em; */
  border: none;
  font-family: inherit;
  background: #fff;
  padding: 0 0.5em;
  width: 55%;
}
input[type="text"]:focus {
  background: #fff;
  color: #000;
  outline: none;
}
span {
  display: block;
  color: #999;
  line-height: 1;
}
</style>
