<template>
  <div class="settings">
    <div class="theme">
      <h1>Change Theme</h1>
      <hr class="custom-separator" />
      <br />
      <p>
        <input
          @input="changeTheme"
          type="radio"
          id="normal"
          value="normal"
          name="theme"
          :checked="theme == 'normal'"
        />
        <label for="normal">Normal</label>
      </p>
      <p>
        <input
          @input="changeTheme"
          type="radio"
          id="night"
          value="night"
          name="theme"
          :checked="theme == 'night'"
        />
        <label for="night">Night</label>
      </p>
    </div>
    <div class="credit">
      <h1>Credits</h1>
      <hr class="custom-separator" />
      <br />
      <div>
        Icons on my portfolio are made by
        <a
          href="https://www.flaticon.com/authors/freepik"
          title="Freepik"
        >Freepik</a> from
        <a href="https://www.flaticon.com/" title="Flaticon">Flaticon</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Settings",
  methods: {
    changeTheme: function(event) {
      this.$store.commit("changeTheme", event.target.value);
      const settingsSh = {
        theme: event.target.value
      };

      if (window.localStorage.getItem("settingsSh") !== null) {
        window.localStorage.removeItem("settingsSh");
        window.localStorage.setItem("settingsSh", JSON.stringify(settingsSh));
      } else {
        window.localStorage.setItem("settingsSh", JSON.stringify(settingsSh));
      }
    },
    switchView: function() {}
  },
  computed: {
    ...mapGetters({
      theme: "pickedTheme"
    })
  }
};
</script>

<style scoped>
.credit a {
  color: black;
}

hr.custom-separator {
  border: 0;
  height: 1px;
  background: #333;
  background-image: none;
  background-image: linear-gradient(to right, #ccc, #333, #ccc);
}
[type="radio"]:checked,
[type="radio"]:not(:checked) {
  position: absolute;
  left: -9999px;
}
[type="radio"]:checked + label,
[type="radio"]:not(:checked) + label {
  position: relative;
  padding-left: 28px;
  cursor: pointer;
  line-height: 20px;
  display: inline-block;
  color: #666;
}
[type="radio"]:checked + label:before,
[type="radio"]:not(:checked) + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 18px;
  height: 18px;
  border: 1px solid #ddd;
  border-radius: 100%;
  background: #fff;
}
[type="radio"]:checked + label:after,
[type="radio"]:not(:checked) + label:after {
  content: "";
  width: 12px;
  height: 12px;
  background: #1a577e;
  position: absolute;
  top: 4px;
  left: 4px;
  border-radius: 100%;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
[type="radio"]:not(:checked) + label:after {
  opacity: 0;
  -webkit-transform: scale(0);
  transform: scale(0);
}
[type="radio"]:checked + label:after {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}
.theme p {
  text-align: start;
}
</style>