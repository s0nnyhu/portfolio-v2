<template>
    <span class="command">{{userPrompt}}<input type="text"></span>
</template>

<script>
export default {
  name: 'Cli',
  props: {
      userPrompt: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.command{
  display: block;
  max-width: 20em;
  color: #181818;
  font-weight: 700;
  margin: 2em 0;
}
input[type="text"]{
  max-width: 10em;
  border: none;
  font-family: inherit;
  background: #fff;
  padding:0 .5em;
}
input[type="text"]:focus{
  background: #fff;
  color: #000;
  outline:none;
}
span{
  display: block;
  color:#999;
  line-height:1;
}
</style>
