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
        <div class="content">
          <h2>Open source</h2>
          <div class="open-items">
            <div class="item">
              <div class="item-img"><img src="../assets/img/shop.png" alt=""></div>
              <div class="item-title"><a href="https://github.com/528447096/vue_shop">vue_shop</a></div>
              <div class="item-info"><p>一个基于vue和elementui开发的后台管理系统</p></div>
            </div>
            <div class="item">
              <div class="item-img"><img src="../assets/img/blog.png" alt=""></div>
              <div class="item-title"><a href="https://github.com/528447096/vue_shop">person blog</a></div>
              <div class="item-info"><p>一个基于vue,elementui,js开发的个人博客系统</p></div>
            </div>
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
      activeIndex2: '/open'
    }
  },
  created () {}
}
</script>

<style lang="less" scoped>
.content {
  color: #555;
  h2 {
    margin: 50px auto 55px;
  }
}
.open-items {
  display: flex;
  justify-content: space-between;
}
.item {
  width: 405px;
  height: 350px;
  border: 1px solid #d9d9d9;
  .item-img {
    margin-top: 5px;
  }
  .item-title {
    margin: 20px auto 20px;
    a {
      color: #333;
      font-size: 20px;
      text-decoration: none;
    }
  }
}
</style>
