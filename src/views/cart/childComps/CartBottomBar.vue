<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button
      :is-checked="isSelectAll"
      class="check-button" @click.native="checkClick"/>
      <span>全选</span>
    </div>
    <div class="price">合计:{{ totalPrice }}</div>

    <div class="calculate" @click="calcClick">
      去计算({{checkLength}})
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
export default {
  name: "CartButtonBar",
  data() {
    return {};
  },
  components: {
    CheckButton,
  },
  computed: {
    totalPrice() {
      return (
        "￥" +
        this.$store.state.cartList
          .filter((item) => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return preValue+item.price * item.count;
          }, 0).toFixed(2)
      );
    },
    checkLength(){
      return this.$store.state.cartList.filter((item) => item.checked).length;
    },
    isSelectAll(){
      // return !(this.cartList.filter(item => !item.checked).length)
      if(this.$store.state.cartList.length===0){
        return false;
      }
      //find找到一个就停止，性能更好
      return !this.$store.state.cartList.find(item =>!item.checked)
      //普通遍历
      // for (let item of this.$store.state.cartList){
      //   if (!item.checked){
      //     return false
      //   }
      // }
      // return true

    }
  },
  methods: {
    checkClick(){
      if(this.isSelectAll){//全部选中
      //forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数。
        this.$store.state.cartList.forEach(item =>item.checked=false);
      }else{//部分选中或全部不选中
        this.$store.state.cartList.forEach(item =>item.checked=true);
      }
    },
    calcClick(){
      if(!this.isSelectAll){
        this.$toast.show('请选择购买的商品',2000);
      }
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  height: 40px;
  background-color: #eee;
  position: relative;
  line-height: 40px;
  display: flex;
  font-size:14px;
  /* bottom: -9px; */
}

.check-content {
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 60px;
}

.check-button {
  height: 20px;
  width: 20px;
  line-height: 20px;
  margin-right: 5px;
}

.price{
  margin-left: 40px;
  flex: 1;
}

.calculate{
  width: 90px;
  background-color: red;
  color:#fff;
  text-align: center;
}
</style>

