<template>
	<div id="portfolio">
		<Fireflies></Fireflies>
		<div class="content">
			<div class="social">
				<Social-bar></Social-bar>
			</div>
			<div class="menu">
				<Menu></Menu>
			</div>
			<div class="data">
				<about-me></about-me>
				<!--

        -->
			</div>
		</div>
	</div>
</template>

<script>
import Fireflies from './Fireflies.vue';
import Menu from './Menu.vue';
import SocialBar from './SocialBar.vue';
import AboutMe from './AboutMe.vue';

export default {
	name: 'Portfolio',
	data() {
		return {};
	},
	methods: {},
	components: {
		Fireflies,
		Menu,
		SocialBar,
		AboutMe
	},
	mounted() {}
};
</script>
<style>
/**Portfolio - Clickable content */
#portfolio .content {
	position: relative;
	display: inline-block;
	z-index: 80;
}
/**Portfolio - Background */
#portfolio {
	overflow: hidden;
	position: relative;
	height: 100vh;
	width: 100%;
	/*
  background: -o-linear-gradient(top, #000, #257eb7);
  background: -ms-linear-gradient(top, #000, #257eb7);
  background: -moz-linear-gradient(top, #000, #257eb7);
  background: -webkit-linear-gradient(top, #000, #021522);
  background: linear-gradient(top, #000, #257eb7);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorStr='#040429', EndColorStr='#257eb7');
  -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorStr='#040429', EndColorStr='#257eb7')";
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  */
}
/**Menu CSS - Position */
.menu {
	overflow: hidden;
	position: fixed;
	bottom: 0;
	width: 100%;
}
/**Data */
.data {
	padding: 15px;
}
</style>
