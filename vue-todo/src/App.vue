<template>
  <div id="app">
    <div class="todo_wrap">
      <TodoHeader />
      <TodoInput @addTodoItem="addOneItem" />
      <TodoList :propsData="todoItems" @removeItem="removeOneItem" />
      <TodoFooter />
    </div>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  name: "App",
  data() {
    return {
      todoItems: [],
    };
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
  methods: {
    addOneItem(todoItem) {
      let obj = { completed: false, item: todoItem };
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItem(item, i) {
      localStorage.removeItem(item.item);
      this.todoItems.splice(i, 1);
    },
  },
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          this.todoItems.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          );
        }
      }
    }
  },
};
</script>

<style>
.todo_wrap {
  width: 80rem;
  margin: 0 auto;
}

.shadow {
  box-shadow: 0.5rem 1rem 1rem rgba(0, 0, 0, 0.03);
}
</style>
