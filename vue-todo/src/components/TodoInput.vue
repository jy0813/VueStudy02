<template>
  <div class="todo_add">
    <div class="input_area shadow">
      <div class="input_box">
        <input type="text" v-model="newTodoItem" @keyup.enter="addTodo" />
        <button @click="addTodo" class="shadow">
          <i class="fas fa-plus"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: "",
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== "") {
        // 저장하는 로직 api
        let obj = { completed: false, item: this.newTodoItem };
        localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
        this.clearInput();
      }
    },
    clearInput() {
      this.newTodoItem = "";
    },
  },
};
</script>

<style scoped>
.input_area {
  display: flex;
}

.input_box {
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 5rem;
  line-height: 5rem;
  padding-left: 0.9rem;
  background: #fff;
  border-radius: 0.5rem;
}

input {
  width: calc(100% - 12rem);
  height: 100%;
  font-size: 1.6rem;
  line-height: 1;
  background: transparent;
  outline: none;
}

button {
  width: 12rem;
  border: 0.1rem solid #000;
  border-radius: 0 0.5rem 0.5rem 0;
  background: #000;
  font-size: 1.6rem;
  color: #fff;
}
</style>