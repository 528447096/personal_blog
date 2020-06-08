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
        <!-- {{this.articlelist[0].title}}
        {{this.articlelist[0].paragraph}}
        {{this.articlelist[0].time}}
        {{this.articlelist[0].img}} -->
        <div class="article" v-if="articlelist">
          <div class="article-info">
            <el-link :href="link + '/article/0'" target="primary">{{articlelist[0].title}}</el-link>
            <p>创建时间：{{articlelist[0].time}}</p>
            <p class="atc">{{articlelist[0].paragraph}}</p>
          </div>
          <div class="img">
            <img :src="articlelist[0].img" alt="">
          </div>
        </div>
        <div class="article" v-if="articlelist">
          <div class="article-info">
            <el-link :href="link + '/article/1'" target="primary">{{articlelist[1].title}}</el-link>
            <p>创建时间：{{articlelist[1].time}}</p>
            <p class="atc">{{articlelist[1].paragraph}}</p>
          </div>
          <div class="img">
            <img :src="articlelist[1].img" alt="">
          </div>
        </div>
        <div class="article" v-if="articlelist">
          <div class="article-info">
            <el-link :href="link + '/article/2'" target="primary">{{articlelist[2].title}}</el-link>
            <p>创建时间：{{articlelist[2].time}}</p>
            <p class="atc">{{articlelist[2].paragraph}}</p>
          </div>
          <div class="img">
            <img :src="articlelist[2].img" alt="">
          </div>
        </div>
        <div class="article" v-if="articlelist">
          <div class="article-info">
            <el-link :href="link + '/article/3'" target="primary">{{articlelist[3].title}}</el-link>
            <p>创建时间：{{articlelist[3].time}}</p>
            <p class="atc">{{articlelist[3].paragraph}}</p>
          </div>
          <div class="img">
            <img :src="articlelist[3].img" alt="">
          </div>
        </div>
        <div class="article" v-if="articlelist">
          <div class="article-info">
            <el-link :href="link + '/article/4'" target="primary">{{articlelist[4].title}}</el-link>
            <p>创建时间：{{articlelist[4].time}}</p>
            <p class="atc">{{articlelist[4].paragraph}}</p>
          </div>
          <div class="img">
            <img :src="articlelist[4].img" alt="">
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
      activeIndex2: '/home',
      link: 'http://localhost:8080/#',
      articlelist: ''
    }
  },
  async created () {
    const res = await this.$http.get('/home')
    // console.log(res)
    this.articlelist = res.data
    console.log(this.articlelist)
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.article {
  height: 200px;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}
.article-info {
  margin-top: 30px;
  width: 690px;
  p {
    margin-top: 5px;
  }
  .el-link {
    font-size: 20px;
  }
}
.atc {
  position: relative;
  line-height: 1.4em;
  height: 4.2em;
  overflow: hidden;
  padding: 0 15px;

}

.atc::after {
  content: "...";
  font-weight: bold;
  position: absolute;
  bottom: 0;
  right: -15px;
  padding: 0 20px 1px 45px;
}
</style>
