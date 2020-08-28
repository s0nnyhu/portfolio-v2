<template>
  <div class="bg-video-wrap">
    <div class="overlay"></div>
    <!-- <h1>Fullscreen video background</h1> -->
    <audio autoplay>
      <source
        src="http://docs.google.com/uc?export=open&id=1s6Q8mULC5nVp5dJnA64j-I8G7N9T3W2s"
        type="audio/mpeg"
      />Your browser does not support the audio tag.
    </audio>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.bg-video-wrap {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  background-image: url("../assets/img/trololo.gif");

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

video {
  min-width: 100%;
  min-height: 100vh;
  z-index: 1;
}
.overlay {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0.3) 50%
  );
  background-size: 3px 3px;
  z-index: 2;
}
</style>