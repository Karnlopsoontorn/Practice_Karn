<template>
  <div>
    <h1 v-bind:style="colors">{{ text }}</h1>
    <button @click="changcolor()">chang Color</button>

    <br />
    <br />
    <button
      v-bind:class="{ green: boolean, blue: !boolean }"
      @click="boolean = !boolean"
    ></button>

    <h1 v-if="boonlean">This is True</h1>
    <h1 v-else>This is False</h1>

    <br />
    <br />

    <li v-for="data in object" :key="data.id">
      {{ data.id }} - {{ data.name }}
    </li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "test",
      colors: { color: "blue" },
      boolean: true,
      object: [
        { id: 1, name: "Green" },
        { id: 2, name: "Blue" },
        { id: 3, name: "Red" },
        { id: 4, name: "Black" },
      ],
    };
  },
  methods: {
    changcolor() {
      this.colors.color = "red";
    },
  },
};
</script>

<style scoped>
.green {
  background-color: green;
  width: 100px;
  height: 100px;
}
.blue {
  background-color: blue;
  width: 100px;
  height: 100px;
}
</style>