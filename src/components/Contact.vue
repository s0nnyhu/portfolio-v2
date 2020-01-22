<template>
  <div class="contact">
    <h1>Let's get in touch</h1>
    <label for="name">Name</label>
    <input type="text" name="name" id="name" placeholder="First name || Last name" />
    <label for="name">Email</label>
    <input type="text" name="email" id="email" placeholder="email@domain.com" />
    <label for="name">Message</label>
    <textarea name="message" id="message" cols="70" rows="10"></textarea>
  </div>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style>
label {
  display: block;
}
.contact {
  margin-bottom: 150px;
}
</style>