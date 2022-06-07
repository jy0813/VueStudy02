<template>
  <div class="todo_add">
    <div class="input_area shadow">
      <div class="input_box">
        <input type="text" v-model="newTodoItem" @keyup.enter="addTodo" />
        <button @click="addTodo" class="addBtn shadow">
          <i class="fas fa-plus"></i>
        </button>
      </div>
    </div>
    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        경고!
        <button class="closeModalBtn" @click="showModal = false">
          <i class="fas fa-times"></i>
        </button>
      </h3>
      <p slot="body">입력값을 넣어주세요!</p>
    </Modal>
  </div>
</template>

<script>
import Modal from "./common/CommonModal.vue";

export default {
  name: "TodoInput",
  data() {
    return {
      newTodoItem: "",
      showModal: false,
    };
  },
  components: {
    Modal,
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== "") {
        // 저장하는 로직 api
        const text = this.newTodoItem.trim();
        this.$store.commit("addOneItem", text);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
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

.addBtn {
  width: 12rem;
  border: 0.1rem solid #000;
  border-radius: 0 0.5rem 0.5rem 0;
  background: #000;
  font-size: 1.6rem;
  color: #fff;
}

.closeModalBtn {
  position: absolute;
  top: 0;
  right: 0;
  color: #000;
}
</style>
