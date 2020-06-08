<template>
  <div>
    <el-backtop :visibility-height="60" :bottom="80">
      <i class="el-icon-caret-top" style="color: #333"></i>
    </el-backtop>
    <el-container>
      <el-header>
        <a href="/"><span>洪嘉俊的博客</span></a>
        <el-menu
        :default-active="activeIndex2"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
        >
          <el-menu-item index="/home">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">分类</template>
            <el-menu-item index="/categories/html">html</el-menu-item>
            <el-menu-item index="/categories/css">css</el-menu-item>
            <el-menu-item index="/categories/javascript">javascript</el-menu-item>
          </el-submenu>
          <el-menu-item index="/experience">心得</el-menu-item>
          <el-menu-item index="/open">开源</el-menu-item>
          <el-menu-item index="/about">关于</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <div>
          <div class="article-info">
            <h3>{{this.articlelist[1].title}}</h3>
            <p>创建时间：{{this.articlelist[1].time}}</p>
            <p class="atc">{{this.articlelist[1].paragraph}}</p>
          </div>
          <div class="img">
            <img :src="this.articlelist[1].img" alt="">
          </div>
        </div>
      </el-main>
      <el-footer>© 2020 | ^_^</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      articlelist: [
        {
          title: '',
          paragraph: ''
        }
      ]
    }
  },
  async created () {
    const res = await this.$http.get('/home')
    // console.log(res)
    this.articlelist = res.data
    console.log(this.articlelist)
  }
}
</script>

<style lang="less" scoped>
.article-info {
  h3 {
    font-size: 20px;
  }
  p {
    margin: 15px auto;
  }
  .atc {
    text-indent:2em;
    text-align: left;
  }
}
</style>
