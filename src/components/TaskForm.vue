<script>
import { ref } from 'vue'

export default {
  emits: {
    onAddTask({ name, description }) {
      if (name === '' || description === '') {
        return false
      }
      return true
    }
  },
  setup(props, { emit }) {
    const name = ref('')
    const description = ref('')

    const onAddTask = () => {
      emit('onAddTask', { name: name.value, description: description.value })
      name.value = ''
      description.value = ''
    }

    return {
      name,
      description,
      onAddTask
    }
  }


}
</script>

<template>
  <div class="w-[26rem] justify-between flex items-end border p-5 rounded-2xl border-lime-200">
    <div class="flex flex-col">
      <label class="text-lime-100" for="name">Name</label>
      <input v-model="name" id="name" class="text-lime-100 outline-0 mb-2 bg-transparent border-b border-lime-200"
        type="text">
      <label class="text-lime-100" for="description">Description</label>
      <input v-model="description" id="description"
        class="text-lime-100 outline-0 bg-transparent border-b border-lime-200" type="text">
    </div>
    <button type="button" @click="onAddTask"
      class='text-xl font-semibold text-lime-200 p-10 bg-purple-400 hover:bg-purple-600 duration-300 rounded-2xl'>Add
      Task!</button>
  </div>
</template>

<style scoped></style>
