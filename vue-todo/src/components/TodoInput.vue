<template>
  <div>
    <div class="input_area shadow">
      <div class="input_box">
        <input type="text" v-model="newTodoItem" @keyup.enter="addTodo" />
      </div>
    </div>
    <button @click="addTodo"><i class="fas fa-plus"></i></button>
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
      this.newTodoItem;
      // 저장하는 로직 api
      localStorage.setItem(this.newTodoItem, this.newTodoItem);
      this.clearInput();
    },
    clearInput() {
      this.newTodoItem = "";
    },
  },
};
</script>

<style scoped>
.input_area {
  display: inline-block;
  vertical-align: middle;
  width: 600px;
}

.input_box {
  padding: 1.5rem 2rem;
  background: #fff;
  box-sizing: border-box;
}

input {
  width: 100%;
  height: 100%;
  font-size: 1.6rem;
  line-height: 1;
  background: transparent;
  outline: none;
}

button {
  display: inline-block;
  vertical-align: middle;
  width: 12rem;
  height: 5.3rem;
  margin-left: 2rem;
  line-height: 5.3rem;
  border: 0.1rem solid #000;
  background: #000;
  font-size: 1.6rem;
  color: #fff;
}
</style>