<!--  -->
<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <!-- 具名插槽 -->
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="" />
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt=""/>
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="" />
      <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt=""/>
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="" />
      <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt=""/>
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="" />
      <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt=""/>
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>
<style scoped>
</style>
