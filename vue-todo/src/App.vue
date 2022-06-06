<template>
  <div id="app">
    <div class="todo_wrap">
      <TodoHeader />
      <TodoInput @addTodoItem="addOneItem" />
      <TodoList
        :propsData="todoItems"
        @removeItem="removeOneItem"
        @toggleItem="toggleOneItem"
      />
      <TodoFooter @clearAll="clearAllItems" />
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
    return {};
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
  methods: {
    addOneItem(todoItem) {
      const obj = { completed: false, item: todoItem };
      localStorage.setItem(todoItem, JSON.stringify(obj));
      if (!this.todoItems.some((data) => data.item == todoItem)) {
        this.todoItems.push(obj);
      }
    },
    removeOneItem(item, i) {
      localStorage.removeItem(item.item);
      this.todoItems.splice(i, 1);
    },
    toggleOneItem(item, i) {
      this.todoItems[i].completed = !this.todoItems[i].completed;
      // localStorage에 갱신
      localStorage.removeItem(item.item);
      localStorage.setItem(item.item, JSON.stringify(item));
    },
    clearAllItems() {
      localStorage.clear();
      this.todoItems = [];
    },
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
