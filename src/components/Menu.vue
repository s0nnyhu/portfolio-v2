<template>
  <nav class="slidemenu">
    <!-- Item 1 -->
    <input
      @input="changed"
      type="radio"
      name="slideItem"
      value="aboutMe"
      id="slide-item-1"
      class="slide-toggle"
      checked
      v-model="pickedMenu"
    />
    <label for="slide-item-1">
      <img src="../assets/icons/businessman.svg" alt="About Me" title="About Me" />
      <span>About me</span>
    </label>

    <!-- Item 2 -->
    <input
      @input="changed"
      type="radio"
      name="slideItem"
      value="skills"
      id="slide-item-2"
      class="slide-toggle"
      v-model="pickedMenu"
    />
    <label for="slide-item-2">
      <img src="../assets/icons/desktop.svg" alt="Skills" title="Skills" />
      <span>Skills</span>
    </label>

    <!-- Item 3 STANDBY PROJECT
    <input
      @input="changed"
      type="radio"
      name="slideItem"
      value="projects"
      id="slide-item-3"
      class="slide-toggle"
      v-model="pickedMenu"
    />
    <label for="slide-item-3">
      <img src="../assets/icons/folder.svg" alt="My Projects" title="My Projects" />
      <span>Projects</span>
    </label>
    -->

    <!-- Item 3 -->
    <input
      @input="changed"
      type="radio"
      name="slideItem"
      value="contact"
      id="slide-item-3"
      class="slide-toggle"
      v-model="pickedMenu"
    />
    <label for="slide-item-3">
      <img src="../assets/icons/contact.svg" alt="Contact" title="Contact" />
      <span>Contact</span>
    </label>

    <!-- Item 4 -->
    <input
      @input="changed"
      type="radio"
      name="slideItem"
      value="settings"
      id="slide-item-4"
      class="slide-toggle"
      v-model="pickedMenu"
    />
    <label for="slide-item-4">
      <img src="../assets/icons/support.svg" alt="Settings" title="Settings" />
      <span>Settings</span>
    </label>

    <div class="clear"></div>

    <!-- Bar -->
    <div class="slider">
      <div class="bar"></div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      pickedMenu: "aboutMe"
    };
  },
  methods: {
    changed: function (event) {
      this.$store.commit("changeSelectedMenu", event.target.value);
      this.$store.commit("updateWasRenderedAboutMe", true);
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.clear {
  clear: both;
}

.slide-toggle {
  display: none;
}

.slidemenu {
  font-family: arial, sans-serif;
  max-width: 600px;
  margin: 10px auto;
  overflow: hidden;
}

.slidemenu label {
  width: 25%;
  text-align: center;
  display: block;
  float: left;
  color: #333;
  opacity: 0.2;
}

.slidemenu label:hover {
  cursor: pointer;
  color: #666;
}

.slidemenu label span {
  display: block;
  padding: 10px;
}

.slidemenu label .icon {
  font-size: 20px;
  border: solid 2px #333;
  text-align: center;
  height: 50px;
  width: 50px;
  display: block;
  margin: 0 auto;
  line-height: 50px;
  border-radius: 50%;
}

/*Bar Style*/

.slider {
  width: 100%;
  height: 5px;
  display: block;
  background: #ccc;
  margin-top: 10px;
  border-radius: 5px;
}

.slider .bar {
  width: 25%;
  height: 5px;
  background: #333;
  border-radius: 5px;
}

/*Animations*/
.slidemenu label,
.slider .bar {
  transition: all 500ms ease-in-out;
  -webkit-transition: all 500ms ease-in-out;
  -moz-transition: all 500ms ease-in-out;
}

/*Toggle*/

.slidemenu .slide-toggle:checked + label {
  opacity: 1;
}

.slidemenu #slide-item-1:checked ~ .slider .bar {
  margin-left: 0;
}
.slidemenu #slide-item-2:checked ~ .slider .bar {
  margin-left: 25%;
}
.slidemenu #slide-item-3:checked ~ .slider .bar {
  margin-left: 50%;
}
.slidemenu #slide-item-4:checked ~ .slider .bar {
  margin-left: 75%;
}
img {
  width: 70px;
}

@media only screen and (max-width: 600px) {
  .slidemenu {
    background: #435a6b;
    padding-top: 5px;
    opacity: 0.9;
    margin: 0px auto;
  }
  .slidemenu span {
    color: rgba(31, 29, 29, 0.959);
  }
}
</style>
