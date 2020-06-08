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
          <h2 style="height:60px">个人简介</h2>
          <p><img src="../assets/img/user.jpg" style="width:150px; height:200px;"></p>
          <div class="info">
            <h3>Blog</h3>
            <p>本博客用于记录平时工作和学习中的知识点，总结经验，用于分享。如有错误地方烦请指正。</p>
            <p>博客重点在于分享web前端开发知识，或涉其它。</p>
            <h3>Info</h3>
            <p>Name：洪嘉俊</p>
            <p>Hight：&lt;2m</p>
            <p>Github：hero007</p>
            <p>QQ：528447096</p>
            <p>Email：528447096@qq.com</p>
            <p>Awards：连续三年获得奖学金，其中一年获得国家励志奖学金。CET4：455分。</p>
            <h3>Skills</h3>
            <p>
              1.精通DIV+CSS布局的HTML代码编写，熟练手写符合W3C标准的代码，能够根据交互原型和UI设计图完整制作出网页。<br>
              2.熟悉Javascript、css3和html5，掌握面向对象编程思想。<br>
              3.熟悉掌握基于HTML5的webApp开发以及各种手机移动端适配，熟悉ECMA标准，熟练掌握DOM、BOM操作，熟悉闭包原理，熟悉面向对象JS编程，理解原型链的继承机制。<br>
              4.熟悉Bootstrap,element ui等前端框架，了解Nodejs以及less，sass、git、github等技术和团队协作开发工具。<br>
              5.熟练AJAX/JSON,熟悉正则表达式、JS面向对象。<br>
              6.熟悉vuejs等大型框架。<br>
              7.熟悉webpack,vuex,并熟悉MySQL语句。<br>
              8.熟悉Photoshop,AI等图片处理软件。<br>
              9.具备抗压能力、且有一定自学能力，能够熟练阅读使用中文API，英文API可以大概看懂并运用。<br>
              10.担任项目组长并组织团队开发过电商、企业和移动端网站前端项目。<br>
            </p>
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
      activeIndex2: '/about'
    }
  },
  created () {}
}
</script>

<style lang="less" scoped>
.el-main {
  height: 1200px;
}
.content {
  color: #555;
}
.info {
  text-align: left;
  h3 {
    height: 30px;
    margin: 0 0 15px;
    font-size: 20px;
  }
  p {
    height: 32px;
    margin: 0 0 10px;
    font-size: 16px;
  }
}
</style>
