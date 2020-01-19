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
.skills h1 {
  line-height: 40px;
}
.skills {
  display: flex;
  flex-direction: column;
  /* background: #565656; */
  padding: 5px;
  align-content: space-between;
  justify-content: space-between;
}
.skills > div {
  text-align: center;
  padding: 10px 0;
  margin: 5px;
  margin-bottom: 150px;
}
.skills > .languages {
  /* background-color: #d30058; */
}

.skills > .framework {
  /* background-color: #36abe1; */
}

.skills > .tools {
  /* background-color: #23b776; */
}
@media (min-width: 576px) {
  .skills {
    flex-flow: row wrap;
  }
  .skills > .languages {
    order: 1;
    flex: 0.5;
  }
  .skills > .framework {
    order: 2;
    flex: 0.5;
  }
  .skills > .tools {
    order: 3;
    width: 100%;
  }
}

@media (min-width: 768px) {
  .skills {
    flex-flow: row nowrap;
  }
  .skills > div {
    width: 33.33% !important;
  }
  .skills > .languages {
    order: 1;
  }
  .skills > .framework {
    order: 2;
  }
  .skills > .tools {
    order: 3;
  }
}
</style>