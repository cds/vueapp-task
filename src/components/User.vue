<template>
  <li class="profile">
    <div>ID: {{id}}</div>
    <div>Name: {{name}}</div>
    <div>Username: {{username}}</div>
    <div>Email: {{email}}</div>
    <div>Phone: {{phone}}</div>
  </li>

</template>

<script>
export default {
  name: "User",
  props: ["id", "name", "username", "email", "phone"],
};
</script>
