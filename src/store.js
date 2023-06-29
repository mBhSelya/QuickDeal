import { createStore } from "vuex"

const store = createStore({
  state() {
    return {
      tasks: [],
    }
  },
  mutations: {
    editTasks(state, tasks) {
      localStorage.setItem('tasks', JSON.stringify(tasks))
      state.tasks = tasks
    }
  }
})

export default store