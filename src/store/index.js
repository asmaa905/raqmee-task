import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    products: JSON.parse(localStorage.getItem('products')) || [] // Load initial state from localStorage
  },
  getters: {
    products: state => state.products,
  },
  mutations: {
    INDEX(state, data) {
      state.products = data;
      localStorage.setItem('products', JSON.stringify(state.products)); // Update local storage
    },
    ADD_ITEM(state, product) {
      state.products.push(product);
      localStorage.setItem('products', JSON.stringify(state.products)); 
    },
    UPDATE_ITEM(state, updatedProduct) {
      const index = state.products.findIndex(p => p.id === updatedProduct.id);
      if (index !== -1) {
        state.products.splice(index, 1, updatedProduct);
        localStorage.setItem('products', JSON.stringify(state.products)); 
    }
  },
    REMOVE_ITEM(state, id) {
      state.products = state.products.filter(p => p.id !== id);
      localStorage.setItem('products', JSON.stringify(state.products)); // Update local storage
    }
  },
  actions: {
    async index({ commit }) {
      try {
        const res = await axios.get(`http://localhost:3000/products`);
        commit('INDEX', res.data);
      } catch (error) {
        console.log(error);
      }
    },
    async addProduct({ commit }, product) {
      try {
        const res = await axios.post(`http://localhost:3000/products`, product);
        commit('ADD_ITEM', res.data); 
      } catch (error) {
        console.error('Error adding product:', error);
      }
    },
    async updateProduct({ commit }, product) {
      try {
        const res = await axios.put(`http://localhost:3000/products/${product.id}`, product);
        commit('UPDATE_ITEM', res.data); 
      } catch (error) {
        console.error('Error updating product:', error);
      }
    },
    async removeItem({ commit }, id) {
      await axios.delete(`http://localhost:3000/products/${id}`).then(() => {
        commit('REMOVE_ITEM', id); 
      }).catch(error => {
        console.error('Error removing product:', error);
      });
    },
  }
});

export default store;
