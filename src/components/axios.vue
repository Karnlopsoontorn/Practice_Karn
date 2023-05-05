<template>
  <div>
    <p v-for="manu in manufacturer" :key="manu.id">
      {{ manu.id }} - {{ manu.Title }}
    </p>
    <input placeholder="id" v-model="id" />
    <input placeholder="Title" v-model="Title" />
    <button @click="post()">Post</button>
    <button @click="put()">put</button>
    <button @click="remove()">Delete</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      text: "test",
      manufacturer: [{ id: 1, Title: "Test1" }],
    };
  },

  created() {},
  methods: {
    get() {
      axios
        .get("https://localhost:7195/api/manufacturerscontrollers")
        .then((response) => {
          this.manufacturer = response.data;
        });
    },
  },
};
</script>