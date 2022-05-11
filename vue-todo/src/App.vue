<template>
  <div id="app">
    <div class="todo_wrap">
      <TodoHeader />
      <TodoInput />
      <TodoList />
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
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
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
