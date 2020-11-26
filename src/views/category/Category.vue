 <template>
  <div class="category">
    <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>
    <div class="content">
      <left-category
        class="content-left"
        :category="category"
        @selectItem="selectItem"
      ></left-category>
      <scroll class="scroll" ref="scroll" >
        <right-category   class="content-right" :categoryData="categoryData">  </right-category>
          <tab-control class="tab-control" @tabClick="tabClick" ></tab-control>
        <goods-list :goods="categoryDataDetail"></goods-list>
      </scroll>
    </div>
  </div>
</template>
<script>
import GoodsList from '@/components/content/goods/GoodsList'
import Scroll from '@/components/common/scroll/Scroll'
import  TabControl from '../../components/content/tabControl/TabControl'
import NavBar from "@/components/common/navbar/NavBar";
// import TabContent from './childComps/TabContent'
import LeftCategory from "./childComps/LeftCategory";
import RightCategory from "./childComps/RightCategory";
import {debounce} from "@/common/utils"

import BScroll from "better-scroll";

import { getCategory, getSubcategory, getCategoryDetail } from "@/network/category";
export default {
  name: "Category",
  data() {
    return {
      category: [],
      categoryData: {},
      categoryDataDetail: [],
      currentIndex: 0
    };
  },
  components: {
    NavBar,
    LeftCategory,
    RightCategory,
    GoodsList,
    Scroll,
    TabControl,
    // TabContent
  },
  created() {
  
  },
  mounted() {
    this.getCategory();
     // 监听图片加载完成
    const refresh = debounce(this.$refs.scroll.refresh,200)
        this.$bus.$on('imgload', () => {
        refresh()
       })
     this.$bus.$on('imageLoad',()=>{
    refresh()
    })
  },
   activated() {
          this.$refs.scroll.refresh()
   },
  methods: {
   tabClick(index){
     let tabType = null;
     switch(index) {
       case 0: 
         tabType = 'pop';
         break;
      case 1: 
        tabType = 'new';
        break;
      case 2:
        tabType = "pop";
        break;  
     }
      this.getCategoryDetail(tabType)
   },
    // 网络请求
    getCategory() {
      getCategory().then((res) => {
        // 1.获取分类数据
        this.category = res.data.category.list;
        console.log(  this.categoryData);
         this.getSubcategory(0)
      });
    },
    getSubcategory(index) {
        getSubcategory(this.category[index].maitKey).then((res) => {
        this.categoryData = res.data.list;
        this.categoryData = {...this.categoryData}
        console.log(this.categoryData)
          this.getCategoryDetail('pop')
          this.getCategoryDetail('new')
          this.getCategoryDetail('sell')
      });
      
    },
    selectItem(index) {
        this.currentIndex = index
      this.getSubcategory(index)  
      console.log(index);
    },
    getCategoryDetail(type) {
      const miniWallkey = this.category[this.currentIndex].miniWallkey
      console.log(miniWallkey);
      getCategoryDetail(miniWallkey, type).then(res => {
         this.categoryDataDetail = res
          console.log(this.categoryDataDetail);
      })
    }
  },
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  position: fixed;
  top: 44px;
  bottom: 49px;
  display: flex;
  .scroll{
    width: 275px;
    .tab-control{
      width: 100%;
    } 
  } 
  .content-left {
    width: 26.66667vw;
    background-color: rgba(0, 0, 0, .03);
  }
}

.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-size: 18px;
  font-weight: 500;
}

</style>