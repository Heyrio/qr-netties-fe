<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Users</h1>
        </div>
      </div>
    </section>
    <br />
    <div class="columns is-narrow">
      <div class="column is-one-fifth">
        <div v-for="(data) in values" v-bind:key="data.id">
          <br />
          <a class="button is-primary">{{ data.fullName }}</a>
        </div>
      </div>

      <div class="container is-centered">
        <br />

        <table class="table is-bordered has-text-centered">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Date</th>
              <th>Email</th>
              <th>Meals</th>
            </tr>
            <tr v-for="(data, id) in values" v-bind:key="id">
              <td>{{ data.fullName }}</td>
              <td>{{ data.date }}</td>
              <td>{{ data.email }}</td>
              <td>{{ data.meals}}</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
// import users from "@/assets/fake.json";
// import UserClass from "@/models/UserClass.js";

export default {
  name: "User",
  data() {
    return {
      // users: users,
      values: []
    };
  }
};
</script>

<style>
li {
  list-style: none;
}
</style>