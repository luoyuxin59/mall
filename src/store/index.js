import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
Vue.use(Vuex)

 const state = {
   cartList: []
 }
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  // state: {
  //   cartList: []
  // },
  // mutations: {
  //   addCounter(state, payload) {
  //     // let oldProduct = state.cartList.find(item => item.iid === payload.iid)
  //     // if (oldProduct) {
  //     //   oldProduct.count += 1;
  //     // }else {
  //     //   payload.count = 1
  //     //   state.cartList.push(payload)
  //     // }
  //     payload.count++
  //   } ,
  //   addToCart(state, payload) {
  //     state.cartList.push(payload)
  //   }
  // },
  // actions: {
  //   addCart(context,payload) {
  //     let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
  //     if (oldProduct) {
  //       // oldProduct.count += 1;
  //       context.commit('addCounter',oldProduct)
  //     }else {
  //       payload.count = 1
  //       context.commit('addToCart', payload)
    
  //     }
  //   }
  // },
  modules: {
  }
})
