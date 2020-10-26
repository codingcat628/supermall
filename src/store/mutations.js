import{
  ADD_COUNTER,
  ADD_TO_CART
}from './mutation-types'

export default  {
  //mutations唯一的目的就是修改state
  //mutations中的方法尽可能完成单一的事件，便于跟踪
  [ADD_COUNTER](state,payload) {
    payload.count++
  },
  [ADD_TO_CART](state,payload) {
    payload.checked = true
    state.cartList.push(payload)
  }
}
