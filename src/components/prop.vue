<template>
  <div>
    <input v-model="text" />
    <button @click="GotoHome()">Go</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
    };
  },
  methods: {
    GotoHome() {
      this.$router.push({ path: "/", query: { msg: this.text } });
    },
  },
};
</script>