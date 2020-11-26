import * as types from './mutation-types'
const actions = {
  addCart(context,payload) {
    let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
    if (oldProduct) {
      // oldProduct.count += 1;
      context.commit(types.ADD_COUNTER,oldProduct)
    }else {
      payload.count = 1
      context.commit(types.ADD_TO_CART, payload)
  
    }
  }
}
export default actions