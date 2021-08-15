<template>
  {{ count }}
  <button @click="count++">+</button>
  <button @click="count--">-</button>
  <br>
  parent count from child
  {{ parentCount }}
</template>

<script lang="ts">
import {defineComponent, inject, Ref, ref} from "vue";

export default defineComponent({
  name: "Child",
  // inject: ["parentCount"],
  setup() {
    const count = ref<number>(0);
    const parentCount = inject<Ref<number>>('parentCount')
    return {count, parentCount}
  }
});
</script>

<style scoped>

</style>
