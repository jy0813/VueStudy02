import getDate from "../../assets/js/common";

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  },
};

const state = {
  headerText: "TODOLIST!",
  todoItems: storage.fetch(),
};

const getters = {
  storedTodoItems(state) {
    return state.todoItems;
  },
};

const mutations = {
  addOneItem(state, todoItem) {
    const obj = {
      completed: false,
      item: todoItem,
      date: `${getDate().year}${getDate().month}${getDate().day}${
        getDate().hour
      }${getDate().minutes}${getDate().seconds}`,
    };
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.sort((date) => date.item == todoItem);
    if (!state.todoItems.some((data) => data.item == todoItem)) {
      state.todoItems.push(obj);
    } else {
      alert("중복된 리스트 입니다.");
    }
  },

  removeOneItem(state, payload) {
    localStorage.removeItem(payload.item.item);
    state.todoItems.splice(payload.i, 1);
  },

  toggleOneItem(state, payload) {
    state.todoItems[payload.i].completed =
      !state.todoItems[payload.i].completed;
    // localStorage에 갱신
    localStorage.removeItem(payload.item.item);
    localStorage.setItem(payload.item.item, JSON.stringify(payload.item));
  },

  clearAllItems(state) {
    localStorage.clear();
    state.todoItems = [];
  },
};

export default {
  state,
  getters,
  mutations,
};
