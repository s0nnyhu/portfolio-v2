<template>
  <div class="skills">
    <div class="languages">
      <img src="../assets/icons/coding.svg" alt="Languages" title="Languages" />
      <h1>Languages i speak</h1>
      <ul>
        <li>PHP</li>
        <li>Java</li>
        <li>A little bit of Python</li>
        <li>Javascript</li>
        <li>Html</li>
        <li>CSS</li>
      </ul>
    </div>
    <div class="framework">
      <img src="../assets/icons/framework.svg" alt="Framework" title="Framework" />
      <h1>Framework i know</h1>
      <ul>
        <li>Symfony 4</li>
        <li>Vue.js</li>
      </ul>
    </div>
    <div class="tools">
      <img src="../assets/icons/toolbox.svg" alt="Tools" title="Tools" />
      <h1>Tools i use</h1>
      <ul>
        <li>Visual studio code</li>
        <li>Git</li>
        <li>Github</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills"
};
</script>

<style>
.skills {
  display: table;
  width: 100%;
  margin-bottom: 150px;
}
.languages,
.framework,
.tools {
  display: table-cell;
  padding: 16px;
}
@media only screen and (max-width: 600px) {
  .framework,
  .languages,
  .tools {
    display: block;
    width: 100%;
  }
}
</style>
