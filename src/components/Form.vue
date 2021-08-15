<template>
  <form ref="form" @submit.prevent="onSubmit">
    <input v-model="formData.name" type="text" />
    <input v-model="formData.title" type="text" />
    <input v-model="formData.date" type="date" />
    <button type="submit">submit</button>
  </form>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
type FormData = {
  name: string,
  title: string,
  date: string
}
export default defineComponent({
  name: "Form",
  setup() {
    const formData = ref<FormData>({
      name: "",
      title: "",
      date: ""
    });

    const onSubmit = () => {
      console.log('submit', formData.value);
    }
    return {formData, onSubmit}
  }
})
</script>

<style scoped>

</style>
