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
        <div class="blogs">
          <h1>个人心得</h1>
          <div class="item">
            <el-link href="https://blog.csdn.net/qq_45155318/article/details/106597527" target="primary">Mockjs遇到的坑</el-link>
            <p>Mockjs遇到的坑看了很多网上的文章，又去看了一些视频，总算是让我稍微摸透了点mock的用法。没安装mock的先在文件夹下安装；npm install mockjs安装完的就可以在文件夹下新建一个名为mock的文件夹，在里面新建两个文件；一个为index.js，这个主要用于拦截ajax请求，并且返回数据；另一个为存放你数据的js文件，我们暂且将它命名为Myinfo.js。我们在Myinfo.js中编写以下代码（传输局用）：import Mock from 'mockjs'const </p>
            <p>2020-06-07 09:37:55</p>
          </div>
          <div class="item">
            <el-link href="https://blog.csdn.net/qq_45155318/article/details/106573982" target="primary">element UI 中的返回顶部组件没效果</el-link>
            <p>element UI 中的返回顶部组件没效果官网提供：&lt;el-backtop target=".page-component__scroll .el-scrollbar__wrap"&gt;&lt;/el-backtop&gt;但是有些会发现它并不会起作用只需要把它改成：&lt;el-backtop :visibility-height="60"&gt;  &lt;i class="el-icon-caret-top"&gt;&lt;/i&gt;&lt;/el-backtop&gt;</p>
            <p>2020-06-05 16:58:07</p>
          </div>
          <div class="item">
            <el-link href="https://blog.csdn.net/qq_45155318/article/details/106614099" target="primary">css防止导航栏变成多行</el-link>
            <p>在做个人博客时，我发现当我缩小浏览器时，我写的导航栏会变成好多行，如图：
            一开始还以为是flex布局的问题，后来才发现自己没有给它指定宽度，怪不得会乱跑。
            但是，如果我们只给它设置宽度其他的布局会发生变化，所以最好是给html标签指定最小宽度</p>
            <p>2020-06-08 10:51:33</p>
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
      activeIndex2: '/experience'
    }
  },
  created () {}
}
</script>

<style lang="less" scoped>
.blogs {
  margin-top: 30px;
  h1 {
    color: #555;
    height: 60px;
  }
  .item {
    margin: 50px auto;
    text-align: left;
    .el-link {
      font-size: 20px;
    }
    p {
      font-size: 14px;
      color: #858585;
      line-height: 24px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      margin: 15px auto;
    }
  }
}
</style>
