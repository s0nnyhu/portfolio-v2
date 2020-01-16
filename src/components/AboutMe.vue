<template>
	<div class="about-me">
		<vue-typer text="Hello World! I was registered locally! I'm VueTyper!">
			<p>
				Hi, my name is
				<strong>Sonny</strong>
			</p>

			<p>
				I'm a junior developer and I
				<strong>design</strong>, <strong>build</strong> &amp;
				<strong>experiment</strong> on various digital applications
			</p>
			<p>
				I'm currently studying for a master’s degree. I'm learning everyday to
				improve, continue challenging myself, and do interesting things that
				matter.
			</p>
			<p>
				Fueled by high energy levels and boundless enthusiasm, I’m easily
				inspired and more than willing to follow my fascinations wherever they
				take me.
			</p>
			<p>
				Feel free to take look at my latest personal projects and do not
				hesitate to get in touch
			</p>
			<p>Portfolio built using VueJs.</p>
		</vue-typer>
	</div>
</template>

<script>
import { VueTyper } from 'vue-typer';
export default {
	name: 'AboutMe',
	data() {
		return {
			textAboutMe: '["Arya Stark","Jon Snow"]'
		};
	},
	components: {
		VueTyper
	}
};
</script>

<style></style>
