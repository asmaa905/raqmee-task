import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    products: []
  },
  getters: {
    products(state) {
      return state.products; // Return the products from state
    }
  },
  mutations: {
    INDEX(state, data) {
      state.products = Object.values(data);
    },
    REMOVE_ITEM(state, id) {
      state.products =  state.products.filter((p)=>p.id !== id)
    }
  },
  actions: {
    async removeItem({ commit }, id) {
      await axios.delete(`http://localhost:3000/items/${id}`).then(()=>{
      // Assuming you have a way to update your state after deletion
      commit('REMOVE_ITEM', id); // You might want to create a mutation for this
      })

    },
    SearchProduct() {
      // Implement search logic here
    },
    async index({ commit }) {
      try {
        const res = await axios.get(`http://localhost:3000/products`);
        commit('INDEX', res.data);
      } catch (error) {
        console.log(error);
      }
    }
  }
});

export default store;
