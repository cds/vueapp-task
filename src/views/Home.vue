<template>
  <div class="home">

    <ul>
      <li
        v-for="user in users"
        :key="user.id"
        class="profile"
      >
        <router-link :to="{ name: 'UserDetails', params: { id: user.id }}">
          <User
            :id="user.id"
            :name="user.name"
            :username="user.username"
            :email="user.email"
            :phone="user.phone"
          />
        </router-link>
      </li>
    </ul>
    <Pagination />
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

import User from "@/components/User.vue";
import Pagination from "@/components/Pagination.vue";

const DOMAIN = "https://jsonplaceholder.typicode.com/";

export default {
  name: "Home",
  data() {
    return {
      users: [],
    };
  },
  components: {
    User,
    RouterLink,
    Pagination,
  },
  methods: {
    Create() {
      fetch(DOMAIN + "users")
        .then((response) => response.json())
        .then((data) => (this.users = data));
    },
  },
  beforeMount() {
    this.Create();
  },
};
</script>
