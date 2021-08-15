<template>
  <div v-if="isShow">
    From Child component <br>
    <Child/>

    <p>inject</p>
    {{ count }}

    <p>parent count</p>
    {{ parentCount }}

    <button @click="parentCount++">+</button>
    <button @click="parentCount--">-</button>
  </div>
  <button @click="isShow = true">open</button>
  <button @click="closeShow">close</button>

  <ul>
    <li v-for="(item, index) in items" :key="index">
      ID: {{ item.id }} {{ item.title }}
    </li>
  </ul>
  <div>
    <p>store counter=====================================================</p>
    <div>
      {{ state.count }}
      <button @click="countUp">store +</button>
      <button @click="countDown">store -</button>
    </div>
  </div>

  <div>
    <p>teleport ========================================================</p>
    <button @click="toggleModal">toggle modal</button>
    <teleport to="#teleport">
      <div v-if="isVisible" id="myModal" class="modal">
        <div class="modal-content">
          <span class="close" @click="toggleModal">&times;</span>
          <p>modal content</p>
        </div>
      </div>
    </teleport>
  </div>

  <div>
    <p>form================================================</p>
    <button @click="router.push('/form')">to Form</button>
  </div>
</template>

<script lang="ts">
import {ref, defineComponent, provide, inject, Ref} from 'vue'
import Child from "./Child.vue";
import {CountState} from "../store"
import {useRouter} from "vue-router";

export type Item = {
  id: number,
  title: string
}
export default defineComponent({
  name: 'HelloWorld',
  components: {Child},
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
    const isShow = ref<boolean>(false);
    const items = ref<Array<Item>>([
      {
        id: 1,
        title: "aaaa"
      },
      {
        id: 2,
        title: "bbbb"
      }
    ]);
    const closeShow = () => {
      isShow.value = false;
    }
    const count = inject('count') as Ref<number>;
    const parentCount = ref<number>(0);
    provide<Ref<number>>("parentCount", parentCount);
    // teleport ===================
    const isVisible = ref<boolean>(false);
    const toggleModal = () => {
      isVisible.value = !isVisible.value;
    }

    // router =======================================
    const router = useRouter();
    return {
      isShow,
      closeShow,
      items,
      count,
      parentCount,
      ...CountState(),
      isVisible,
      toggleModal,
      router
    }
  }
})
</script>

<style scoped>
li {
  list-style: none;
}
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.7);
}
.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  text-align: center;
}
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
