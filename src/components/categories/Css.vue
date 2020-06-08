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
        <h1>层叠样式表</h1>
        <p>层叠样式表（英語：Cascading Style Sheets，缩写：CSS；又称串樣式列表、级联样式表、串接样式表、阶层式样式表）是一种用来为结构化文档（如HTML文档或XML应用）添加样式（字体、间距和颜色等）的计算机语言，由W3C定义和维护。目前最新版本是CSS2.1，为W3C的推荐标准。[來源請求]CSS3現在已被大部分現代瀏覽器支援，而下一版的CSS4仍在开发中。</p>
        <h2>概述</h2>
        <p>CSS不能单独使用，必须与HTML或XML一起协同工作，为HTML或XML起装饰作用。本文主要介绍用于装饰HTML网页的CSS技术。其中HTML负责确定网页中有哪些内容，CSS确定以何种外观(大小、粗细、颜色、对齐和位置)展现这些元素。CSS可以用于设定页面布局、设定页面元素样式、设定适用于所有网页的全局样式。CSS可以零散地直接添加在要应用样式的网页元素上，也可以集中化内置于网页、链接式引入网页以及导入式引入网页。</p>
        <p>CSS最重要的目标是将文件的内容与它的显示分隔开来。在CSS出现前，几乎所有的HTML文件内都包含文件显示的信息，比如字体的颜色、背景应该是怎样的、如何排列、边缘、连线等等都必须一一在HTML文件内列出，有时重复列出。CSS使作者可以将这些信息中的大部分隔离出来，简化HTML文件，这些信息被放在一个辅助的，用CSS语言写的文件中。HTML文件中只包含结构和内容的信息，CSS文件中只包含样式的信息。</p>
        <p>CSS样式信息可以包含在一个附件中或包含在HTML文件内。读者可以使用多个样式表，在重复的情况下他可以选择其中之一。不同的媒体可以使用不同的样式表。比如一个文件在荧光屏上的显示可以与在打印机中打印出来的显示不同。这样作者可以为不同的媒体设计最佳的显示方式。此外CSS的目标之一是让读者有更大的控制显示的自由。假如一个读者觉得斜体字的标题读起来很困难，他可以使用自己的样式表文件，这个样式表可以“层叠”使用，他可以只改变红色斜体字这个样式而保留所有其他的样式。</p>
        <h2>主要内容</h2>
        <p>CSS由多组“规则”组成。每个规则由“选择器”（selector）、“属性”（property）和“值”（value）组成：</p>
        <p> 1.选择器（Selector）：多个选择器可以半角逗号（,）隔开。<br>
            2.属性（property）：CSS1、CSS2、CSS3规定了许多的属性，目的在控制选择器的样式。<br>
            3.值（value）：指属性接受的设置值，多个关键字时大都以空格隔开。</p>
      </el-main>
      <el-footer>© 2020 | ^_^</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex2: '/css'
    }
  },
  created () {}
}
</script>

<style lang="less" scoped>
.el-main {
  h1 {
    margin: 40px auto 30px;
    font-size: 30px;
  }
  h2 {
    text-align: left;
    font-size: 16px;
    margin: 15px auto;
  }
  p {
    text-indent:2em;
    text-align: left;
  }
  .img {
    margin: 10px auto;
    p {
       text-align: center;
       text-indent:0;
       font-size: 12px;
       color: #555;
    }
  }
}
</style>
