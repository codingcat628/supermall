<!--  -->
<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners" />
    <recommend-view :recommends="recommends" />
    <feature-view />
    <tab-control class="tab-control" :titles="['流行','新款','精选']"/>
    <ul>
      <li>hahah1</li>
      <li>hahah2</li>
      <li>hahah3</li>
      <li>hahah4</li>
      <li>hahah5</li>
      <li>hahah6</li>
      <li>hahah7</li>
      <li>hahah8</li>
      <li>hahah9</li>
      <li>hahah10</li>
      <li>hahah11</li>
      <li>hahah12</li>
      <li>hahah13</li>
      <li>hahah14</li>
      <li>hahah15</li>
      <li>hahah16</li>
      <li>hahah17</li>
      <li>hahah18</li>
      <li>hahah19</li>
      <li>hahah20</li>
      <li>hahah21</li>
      <li>hahah22</li>
      <li>hahah23</li>
      <li>hahah24</li>
      <li>hahah25</li>
      <li>hahah26</li>
       <li>hahah1</li>
      <li>hahah2</li>
      <li>hahah3</li>
      <li>hahah4</li>
      <li>hahah5</li>
      <li>hahah6</li>
      <li>hahah7</li>
      <li>hahah8</li>
      <li>hahah9</li>
      <li>hahah10</li>
      <li>hahah11</li>
      <li>hahah12</li>
      <li>hahah13</li>
      <li>hahah14</li>
      <li>hahah15</li>
      <li>hahah16</li>
      <li>hahah17</li>
      <li>hahah18</li>
      <li>hahah19</li>
      <li>hahah20</li>
      <li>hahah21</li>
      <li>hahah22</li>
      <li>hahah23</li>
      <li>hahah24</li>
      <li>hahah25</li>
      <li>hahah26</li>
    </ul>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";

import { getHomeMultidata } from "network/home";
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl
  },
  data() {
    //这里存放数据
    return {
      banners: [],
      recommends: [],
    };
  },
  created() {
    //1.请求多个数据
    getHomeMultidata().then((res) => {
      // console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },

  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
};
</script>
<style scoped>
#home {
  padding-top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.tab-control{
  position: sticky;
  top: 44px;
}
</style>
