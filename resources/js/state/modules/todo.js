import axios from "axios";

const state = {
    todos: [],
};

const getters = {
    todos: state => state.todos,
};

const mutations = {
    setTodos(state, newValue) {
        state.todos = newValue
    },
};

const actions = {
    fetchTodos({ commit }) {
        axios.get('https://jsonplaceholder.typicode.com/todos').then(res => {
            commit('setTodos', res.data)
        })
    },
};

export default {
    namespaced: true, 
    state,
    mutations,
    actions,
  };