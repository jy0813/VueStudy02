<template>
  <div class="todo_clear">
    <button class="clear_btn" @click="clearTodo">Clear All</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations({
      clearTodo: "clearAllItems",
    }),
  },
};
</script>

<style scoped>
.clear_btn {
  width: 50%;
  height: 5rem;
  margin: 5rem auto;
  line-height: 5rem;
  border-radius: 0.5rem;
  background: #000;
  font-size: 1.6rem;
  color: #fff;
}
</style>
