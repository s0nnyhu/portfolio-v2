<template>
  <span class="command">
    {{userPrompt}}
    <input type="text" v-model="typedCommand" v-on:keyup.enter="executeCommand" />
  </span>
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
  width: 95%;
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
