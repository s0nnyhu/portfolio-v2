<template>
  <div class="contact">
    <h1>Let's get in touch</h1>
    <div
      class="result"
      v-bind:class="{
				'result result-ok': error === false,
				'result result-ko': error === true
			}"
    >
      <p>{{ result }}</p>
    </div>
    <p>
      <label>Name*</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="First name || Last name"
        :value="contactData.name"
        @input="updateContact($event)"
        required
      />
    </p>

    <p>
      <label>E-mail*</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="john.doe@domain.com"
        :value="contactData.email"
        @input="updateContact($event)"
        required
      />
    </p>

    <p>
      <label>Message*</label>
      <textarea
        name="message"
        rows="5"
        id="message"
        placeholder="Message"
        :value="contactData.message"
        @input="updateContact($event)"
        required
      ></textarea>
    </p>
    <div class="security">
      <p>
        <label>Security captcha: {{ cap1 }} plus {{ cap2 }}</label>
        <input type="text" name="captcha" id="captcha" v-model="captcha" required />
      </p>

      <p class="send-message">
        <button v-on:click="sendMessage" type="submit">Send</button>
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Contact",
  data() {
    return {
      result: "",
      cap1: Math.floor(Math.random() * Math.floor(10)),
      cap2: Math.floor(Math.random() * Math.floor(10)),
      captcha: "",
      error: false
    };
  },
  methods: {
    sendMessage: function() {
      if (this.rescaptcha == this.captcha) {
        if (
          this.contactData.name !== "" &&
          this.contactData.email !== "" &&
          this.contactData.message !== ""
        ) {
          this.error = false;
          const msg = {
            to: process.env.VUE_APP_ROOTEMAIL,
            from: this.contactData.email,
            subject: "From s0nnyhu.github.io",
            text: this.contactData.message,
            html:
              "<p>" +
              this.contactData.message +
              "</p> <strong>User: " +
              this.contactData.name +
              " / Message send from s0nnyhu.github.io</strong>"
          };

          fetch("https://s0nnyhu.azurewebsites.net/api/v1/sendgrid", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(msg)
          }).then(function(response) {
            return response.json();
          });

          this.displayResultMessage("Your message has been sent.");
          this.cap1 = Math.floor(Math.random() * Math.floor(10));
          this.cap2 = Math.floor(Math.random() * Math.floor(10));
        }
      } else {
        this.error = true;
        this.displayResultMessage("Error, check captcha.");
      }
    },
    displayResultMessage: function(message) {
      this.result = message;
      setTimeout(() => {
        this.result = "";
      }, 10000);
    },
    updateContact: function(event) {
      this.$store.commit("updateContact", event.target);
    }
  },
  computed: {
    rescaptcha: function() {
      return this.cap1 + this.cap2;
    },
    ...mapGetters({
      contactData: "contact"
    })
  }
};
</script>

<style>
.result {
  width: 50%;
  text-align: center;
  display: inline-block;
}
.result-ok {
  background-color: #dff0d8;
}
.result-ko {
  background-color: #f2dede;
}
.contact {
  display: block;
}

.contact label {
  display: block;
}

.contact p {
  margin: 0;
}

.contact button {
  width: 10%;
  padding: 0.3em;
  border: solid 1px #0a0e1f;
}
#captcha {
  width: 10% !important;
  padding: 0.1em;
  margin-bottom: 10px;
}
.contact input,
.contact textarea {
  font: 0.875em/1.6 "Inconsolata", monospace;
  color: #181818;
  width: 30%;
  padding: 0.3em;
  border: solid 1px #0a0e1f;
}

.contact textarea {
  resize: none;
}
.contact button:hover,
.contact button:focus {
  cursor: pointer;
  outline: 0;
  transition: background-color 2s ease-out;
}

@media only screen and (max-width: 600px) {
  .contact button {
    width: 60%;
    border: solid 1px #0a0e1f;
  }
  .contact input,
  .contact textarea {
    width: 60%;
    border: solid 1px #0a0e1f;
  }
}
.contact {
  margin-bottom: 150px;
}

.security {
  position: relative;
  z-index: 100;
}
</style>
