<script>
import { ref, toRef } from 'vue'
export default {
  emits: ['onEdit', 'onDelete'],
  props: {
    task: {
      required: true,
    }
  },
  setup(props, { emit }) {
    const name = ref(props.task.name)
    const description = ref(props.task.description)
    let isShow = ref(false)

    const emitOnEdit = () => {
      if (isShow.value === true) {
        emit('onEdit', { id: props.task.id, name: name.value, description: description.value })
      }
      isShow.value = !isShow.value
    }

    const emitOnDelete = () => {
      emit('onDelete')
    }

    return {
      name,
      description,
      isShow,
      emitOnEdit,
      emitOnDelete
    }
  }
}
</script>

<template>
  <div class="w-[26rem] justify-between flex border p-5 rounded-2xl border-cyan-200">
    <div class="w-full">
      <h3 v-if="!isShow" class="text-2xl text-cyan-100 border-b border-cyan-200 mr-4">{{ task.name }}</h3>
      <input v-if="isShow" v-model="name" type="text"
        class="text-lime-100 outline-0 mb-2 bg-transparent border-b border-cyan-200">
      <p v-if="!isShow" class="text-xl text-cyan-100">{{ task.description }}</p>
      <input v-if="isShow" v-model="description" type="text"
        class="text-lime-100 outline-0 mb-2 bg-transparent border-b border-cyan-200">
    </div>
    <div class="flex flex-col">
      <button class='text-xl text-cyan-100 p-3 bg-blue-400 hover:bg-blue-600 duration-300 rounded-2xl mb-2'
        @click="emitOnEdit">{{ isShow ? 'Save' : 'Edit' }}</button>
      <button class='text-xl text-cyan-100 p-3 bg-rose-400 hover:bg-rose-600 duration-300 rounded-2xl'
        @click="emitOnDelete">Remove</button>
    </div>
  </div>
</template>

<style scoped></style>
