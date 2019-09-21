<template>
  <div>
    <nav class="navbar-end" role="navigation" aria-label="dropdown navigation">
      <div class="navbar-end">
        <a class="navbar-item has-dropdown" href="https://www.spathesystems.com/">
          <img src="@/assets/logo.png" />
        </a>
        <a
          @click="toggleHamburgerMenu"
          role="button"
          class="navbar-burger burger"
          v-bind:class="{'is-active':showHamburgerMenu}"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        class="navbar-menu has-dropdown has-dropdown-up is-hoverable"
        v-bind:class="{'is-active':showHamburgerMenu}"
      >
        <div class="navbar-end">
          <div class="navbar-item has-dropdown has-dropdown-up is-hoverable">
            <a class="navbar-item" v-on:click="route('Register')">Register</a>
            <a class="navbar-item" v-on:click="route('ContactUs')">Contact Us</a>
            <a class="navbar-item" v-on:click="route('Users')">Users</a>
            <div class="navbar-item">
              <p class="control">
                <a class="button">
                  <span class="icon">
                    <i class="fab fa-twitter" aria-hidden="true"></i>
                  </span>
                </a>
              </p>
              <p class="control">
                <a class="button">
                  <span class="icon">
                    <i class="fab fa-instagram" aria-hidden="true"></i>
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import router from "../router.js";

export default {
  name: "NavBar",
  data() {
    return {
      showHamburgerMenu: false
    };
  },

  methods: {
    route: function(message) {
      router.push({ name: message });
    },
    toggleHamburgerMenu() {
      this.showHamburgerMenu = !this.showHamburgerMenu;
    }
  }
};
</script>

<style scoped="scss">
.navbar {
  background-color: #000519;
}
</style>
