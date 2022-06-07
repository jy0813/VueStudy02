<template>
  <div class="todo_list">
    <transition-group name="list" tag="ul">
      <li
        class="shadow"
        v-for="(item, i) in this.storedTodoItems"
        :key="item.item"
      >
        <button
          class="check_btn"
          :class="{ completed: item.completed }"
          @click="toggleComplete({ item, i })"
        >
          <i class="fas fa-check"></i>
        </button>
        <span :class="{ text_completed: item.completed }">{{ item.item }}</span>
        <button class="remove_btn" @click="removeTodo({ item, i })">
          <i class="fas fa-trash"></i>
        </button>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations({
      removeTodo: "removeOneItem",
      toggleComplete: "toggleOneItem",
    }),
    // removeTodo(todoItem, index) {
    //   this.$store.commit("removeOneItem", { todoItem, index });
    // },
    // toggleComplete(todoItem, index) {
    //   this.$store.commit("toggleOneItem", { todoItem, index });
    // },
  },
  computed: {
    ...mapGetters(["storedTodoItems"]),
  },
  mounted() {
    this.$nextTick(function () {
      this.storedTodoItems.sort(function (a, b) {
        return a.date - b.date;
      });
    });
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

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
