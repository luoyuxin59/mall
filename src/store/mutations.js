import * as types from './mutation-types'
const  mutations = {
  [types.ADD_COUNTER](state, payload) {
    // let oldProduct = state.cartList.find(item => item.iid === payload.iid)
    // if (oldProduct) {
    //   oldProduct.count += 1;
    // }else {
    //   payload.count = 1
    //   state.cartList.push(payload)
    // }
    payload.count++
  },
  [types.ADD_TO_CART](state, payload) {
    payload.checked = true
    state.cartList.push(payload)
  }
}
export default mutations