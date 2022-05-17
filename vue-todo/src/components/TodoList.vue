<template>
  <div class="todo_list">
    <ul>
      <li class="shadow" v-for="(item, i) in propsData" :key="item.item">
        <button
          class="check_btn"
          :class="{ completed: item.completed }"
          @click="toggleComplete(item)"
        >
          <i class="fas fa-check"></i>
        </button>
        <span :class="{ text_completed: item.completed }">{{ item.item }}</span>
        <button class="remove_btn" @click="removeTodo(item, i)">
          <i class="fas fa-trash"></i>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    propsData: Array,
  },
  methods: {
    removeTodo(item, i) {
      this.$emit("removeItem", item, i);
    },
    toggleComplete(item) {
      item.completed = !item.completed;
      // localStorage에 갱신
      localStorage.removeItem(item.item);
      localStorage.setItem(item.item, JSON.stringify(item));
    },
  },
};
</script>

<style scoped>
ul {
  text-align: left;
}

li {
  display: flex;
  min-height: 5rem;
  line-height: 5rem;
  margin: 0.5rem 0;
  padding-left: 0.9rem;
  background: #fff;
  border-radius: 0.5rem;
  font-size: 1.6rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.check_btn {
  line-height: 4.5rem;
  font-size: 1.6rem;
  color: #62acde;
  margin-right: 2rem;
}

.check_btn.completed {
  color: #b3adad;
}

.text_completed {
  text-decoration: line-through;
  color: #b3adad;
}

.remove_btn {
  width: 12rem;
  margin-left: auto;
  border-radius: 0 0.5rem 0.5rem 0;
  background: #000;
  font-size: 1.6rem;
  color: #fff;
}
</style>