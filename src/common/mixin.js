import {debounce} from "./utils";
import BackTop from "components/content/backTop/BackTop";

export const itemListenerMixin = {
  data () {
    return {
      itemImageListener:null
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    this.itemImageListener = () => {
      refresh();
    }
    this.$bus.$on("itemImageLoad", this.itemImageListener);
    // console.log('我是混入的内容');
  }
}

export const backTopMixin = {
  components:{
    BackTop
  },
  data () {
    return{
      isShowBackTop: false,
    }
  },
  methods:{
    backClick() {
      // console.log("backClick");
      this.$refs.scroll.scrollTo(0, 0);
      // console.log(this.$refs.scroll.scroll.message);
    },
  }


}
