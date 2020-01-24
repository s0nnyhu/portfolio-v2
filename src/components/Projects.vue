<template>
  <div class="projects">
    <div class="row">
      <div class="col col--1of3">
        <section class="project" v-bind:class="{ 'theme-night-card': state==='projects'}">
          <h2>
            <a class="link-project" href="#">Lorem Ipsum</a>
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, molestiae veniam nesciunt eveniet nam corrupti. Aspernatur maiores laudantium natus quod quam soluta voluptas hic, porro amet ea sapiente! Cum, neque.</p>
        </section>
      </div>
      <div class="col col--1of3">
        <section class="project" v-bind:class="{ 'theme-night-card': state==='projects'}">
          <h2>
            <a class="link-project" href="#">Lorem Ipsum</a>
          </h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt maiores at magni perspiciatis dolore ipsum vero ullam, tempore, delectus quam sit temporibus qui reprehenderit. Magni delectus assumenda rem ea asperiores.</p>
        </section>
      </div>
      <div class="col col--1of3">
        <section class="project" v-bind:class="{ 'theme-night-card': state==='projects'}">
          <h2>
            <a class="link-project" href="#">Lorem Ipsum</a>
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores adipisci totam, quas ab voluptatibus consequuntur ex fuga animi, laborum cum saepe debitis quis incidunt odio unde necessitatibus nemo voluptatum obcaecati?</p>
        </section>
      </div>
      <div class="col col--1of3">
        <section class="project" v-bind:class="{ 'theme-night-card': state==='projects'}">
          <h2>
            <a class="link-project" href="#">Lorem Ipsum</a>
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta asperiores necessitatibus suscipit ratione rem repellat minus! Dolores explicabo maxime veniam iusto, deleniti mollitia vel deserunt numquam maiores odit quisquam excepturi!</p>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Projects",
  computed: {
    ...mapGetters({
      state: "pickedMenu"
    })
  }
};
</script>

<style lang="scss">
.theme-night-card {
  background: transparent !important;
}
.link-project {
  color: #2c3e50 !important;
  opacity: 1;
}

.link-project:hover {
  color: #376899 !important;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

h1,
h2,
h3 {
  font-weight: 600;
}

.row {
  margin-bottom: 24px;
}

.col--group > .row {
  margin-bottom: 0;
}

// GRID
.row {
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  flex-wrap: wrap;

  @media only screen and (min-width: 640px) {
    flex-direction: row;
  }
}

.col {
  flex: 0 0 auto;
  padding: 0 12px;
  flex-basis: 100%;
  max-width: 100%;
}

.col--1of1,
.col--2of2,
.col--3of3,
.col--6of6 {
  flex-basis: 100%;
  max-width: 100%;
}

.col--1of2,
.col--3of6 {
  @media only screen and (min-width: 640px) {
    flex-basis: 50%;
    max-width: 50%;
  }
}

.col--1of3,
.col--2of6 {
  @media only screen and (min-width: 640px) {
    flex-basis: 33.3333333%;
    max-width: 33.3333333%;
  }
}

.col--1of6 {
  @media only screen and (min-width: 640px) {
    flex-basis: 16.6666667%;
    max-width: 16.6666667%;
  }
}

.col--2of3,
.col--4of6 {
  @media only screen and (min-width: 640px) {
    flex-basis: 66.6666667%;
    max-width: 66.6666667%;
  }
}

.col--5of6 {
  @media only screen and (min-width: 640px) {
    flex-basis: 83.3333333%;
    max-width: 83.3333333%;
  }
}

.col--group {
  padding: 0;
}

.project {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background: #fff;
  border-radius: 3px;
  margin: 12px 0;
  padding: 1rem;
}
</style>