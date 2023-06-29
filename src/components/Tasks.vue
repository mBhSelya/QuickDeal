<script>
import TaskForm from './TaskForm.vue';
import TaskCard from './TaskCard.vue';
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'Tasks',
  components: {
    TaskCard,
    TaskForm
  },
  setup() {
    const store = useStore()

    const localStore = localStorage.getItem('tasks')

    if (localStore) {
      store.commit('editTasks', JSON.parse(localStore))
    }

    const tasks = computed(() => store.state.tasks)


    const addTask = ({ name, description }) => {
      const tasksArr = [...store.state.tasks, { id: store.state.tasks.length + 1, name, description }]
      store.commit('editTasks', tasksArr)
    }

    const editTask = ({ id, name, description }) => {
      const tasksArr = store.state.tasks.map((item) => {
        if (item.id === id) {
          item.name = name
          item.description = description
        }
        return item
      })
      store.commit('editTasks', tasksArr)
    }

    const deleteTask = (id) => {
      const tasksArr = store.state.tasks.filter((item) => item.id !== id)
      store.commit('editTasks', tasksArr)
    }

    return {
      tasks,
      editTask,
      addTask,
      deleteTask
    }
  }
}

</script>

<template>
  <div class="p-3 flex-col flex items-center min-h-screen w-screen bg-gradient-to-r from-green-400 to-blue-500">
    <div class="flex justify-start w-full">
      <RouterLink class="text-xl font-medium text-white hover:text-rose-400 duration-300" to="/">Return to
        Home Page
      </RouterLink>
    </div>
    <TaskForm @onAddTask="addTask" />
    <ul class="mt-4">
      <li class="mb-2" v-for="task in tasks" :key="task.id">
        <TaskCard @onEdit="editTask" @onDelete="deleteTask(task.id)" :task="task" />
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
