<template>
  <div class="container">
    <section class="container is-centered">
      <div class="box">
        <section class="hero is-success">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">VISITOR REGISTRATION</h1>
            </div>
          </div>
        </section>

        <div class="container field">
          <label class="label">Full Name</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input" type="text" placeholder="Full Name" v-model="fullName" />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </div>
        </div>
        <div class="container field">
          <label class="label">Email</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input" type="email" placeholder="Email" v-model="email" />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-exclamation-triangle"></i>
            </span>
          </div>
        </div>

        <div class="container field">
          <label class="label">Phone Number</label>
          <div class="control">
            <input class="input" type="text" placeholder="Phone Number" v-model="phoneNumber" />
          </div>
        </div>
        <div class="container field">
          <label class="label">Project Address</label>
          <div class="control">
            <input class="input" type="text" placeholder="Address" v-model="address" />
          </div>
        </div>
        <div class="container field">
          <label class="label">How can we help you?</label>
          <div class="control">
            <textarea class="textarea" placeholder="e.g. Hello world"></textarea>
          </div>
        </div>
        <div class="container field">
          <a @click="sumbitForm" class="button is-success is-medium">
            <span>Submit</span>
          </a>
        </div>
      </div>
      <br />
    </section>
  </div>
</template>


<script>
export default {
  name: "ContactUs",
  data: () => ({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: ""
  }),
  methods: {
    callNow() {
      this.$toast.open({
        message: "Something happened correctly!",
        type: "is-success"
      });
    },
    sumbitForm() {
      this.$toast.open({
        message: "Something happened correctly!",
        type: "is-success"
      });
    }
  }
};
</script>

<style>
.reg {
  font-size: 50px;
}
.columns {
  height: 40px;
  margin-left: 8px;
  margin-top: 5px;
  margin-right: 7px;
}

.field {
  width: 50px;
}
</style>
