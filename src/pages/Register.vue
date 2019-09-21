<template>
  <div class="container">
    <section class="container is-centered">
      <div class="box">
        <section class="hero is-primary">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">VISITOR REGISTRATION</h1>
            </div>
          </div>
        </section>
        <div class="container field">
          <label class="label">Full Name:</label>
          <div class="control">
            <input class="input" v-model="fullName" type="text" placeholder="Full Name" />
          </div>

          <div class="container field">
            <label class="label">Email:</label>
            <div class="control">
              <input class="input" v-model="email" type="email" placeholder="Email" />
            </div>
          </div>
          <div class="container field">
            <label class="label">Phone Number:</label>
            <div class="control">
              <input class="input" v-model="phone" type="phone" placeholder="Phone Number" />
            </div>
          </div>
          <div class="container field">
            <label class="label">Meals:</label>
            <div class="control">
              <input class="input" v-model="company" type="company" placeholder="Company" />
            </div>
          </div>
        </div>
      </div>

      <a class="button is-success is-large" v-on:click="getFormValues()">
        <span>Submit</span>
      </a>
    </section>
  </div>
</template>


<script>
import UserClass from "@/assets/models/UserClass.js";
// import { EventBus } from "../models/eventbus.js";

export default {
  name: "Home",
  data: () => ({
    // users: users,
    fullName: localStorage.existing_fullname,
    email: localStorage.existing_email,
    phone: "",
    company: "",
    purpose: "",
    visiting: "",
    citizen: "",
    badge: "",
    classified: "",
    lvlofEd: "Level of Education",
    gender: localStorage.existing_gender,
    arr: []
  }),
  methods: {
    getFormValues() {
      const user = new UserClass();
      user.fullName = this.fullName;
      user.email = this.email;
      user.phone = this.phone;
      user.lvlofEd = this.lvlofEd;
      user.gender = this.gender;
      user.company = this.company;
      user.purpose = this.purpose;
      user.visiting = this.visiting;
      user.badge = this.badge;
      user.citizen = this.citizen;
      user.classified = this.classified;
      user.date = new Date()
        .toJSON()
        .slice(0, 10)
        .replace(/-/g, "/");
      localStorage.setItem(`${user.fullName}`, JSON.stringify(user));
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
