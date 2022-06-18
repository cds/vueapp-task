<template>
  <div class="Userdetails">
    <h1>User-Details</h1>
    <div>ID: {{userDetails.id}}</div>
    <div>Name: {{userDetails.name}}</div>
    <div>Username: {{userDetails.username}}</div>
    <div>Email: {{userDetails.email}}</div>
    <ul>
      <h2> Address:</h2>
      <li>Street: {{userDetails.address.street}}</li>
      <li>Suite: {{userDetails.address.suite}}</li>
      <li>City: {{userDetails.address.city}}</li>
      <li>Zipcode: {{userDetails.address.zipcode}}</li>
      <li>Geo-Lat:
        <ol>{{userDetails.address.geo.lat}}</ol>
      </li>
      <li>Geo-Lng:
        <ol> {{userDetails.address.geo.lng}}</ol>
      </li>
    </ul>
    <div>Phone: {{userDetails.phone}}</div>
    <div>Website:{{userDetails.website}}</div>
    <ul>
      <h2>Company:</h2>
      <li>Name: {{userDetails.company.name}}</li>
      <li>Catch Phrase: {{userDetails.company.catchPhrase}}</li>
      <li>Based: {{userDetails.company.bs}}</li>
    </ul>
  </div>
</template>

<script>
import { useRoute } from "vue-router";

const DOMAIN = "https://jsonplaceholder.typicode.com/";

export default {
  name: "UserDetails",
  data() {
    return {
      id: null,
      userDetails: {},
    };
  },
  methods: {
    Create() {
      if (this.id !== null) {
        fetch(DOMAIN + "users/" + this.id)
          .then((response) => response.json())
          .then((data) => (this.userDetails = data));
      }
    },
  },
  beforeMount() {
    const route = useRoute();
    this.id = route.params.id;
    this.Create();
  },
};
</script>