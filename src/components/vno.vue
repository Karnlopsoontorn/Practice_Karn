<template>
  <div>
    <input :value="text" @input="converttoUpperCase" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "test",
    };
  },
  methods: {
    converttoUpperCase(event) {
      this.text = event.target.value.toUpperCase();
    },
  },
};
</script>