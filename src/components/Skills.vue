<template>
  <div class="skills">
    <div class="languages">
      <img src="../assets/icons/coding.svg" alt="Languages" title="Languages" />
      <h1>Languages I speak</h1>
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
      <h1>Framework I know</h1>
      <ul>
        <li>Symfony 4</li>
        <li>Vue.js</li>
        <li>React</li>
      </ul>
    </div>
    <div class="tools">
      <img src="../assets/icons/toolbox.svg" alt="Tools" title="Tools" />
      <h1>Tools I use</h1>
      <ul>
        <li>Visual studio code</li>
        <li>Familiar with Netbeans / IntelliJ</li>
        <li>Git</li>
        <li>Github</li>
        <li></li>
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
.skills li {
  font-size: 1.2rem;
}
</style>
