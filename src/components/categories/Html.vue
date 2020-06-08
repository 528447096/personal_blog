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
        <h1>HTML</h1>
        <p>超文本标记语言（英语：HyperText Markup Language，简称：HTML）是一种用于创建网页的标准标记语言。HTML是一种基础技术，常与CSS、JavaScript一起被众多网站用于设计网页、网页应用程序以及移动应用程序的用户界面。网页浏览器可以读取HTML文件，并将其渲染成可视化网页。HTML描述了一个网站的结构语义随着线索的呈现，使之成为一种标记语言而非编程语言。</p>
        <p>HTML元素是构建网站的基石。HTML允许嵌入图像与对象，并且可以用于创建交互式表单，它被用来结构化信息——例如标题、段落和列表等等，也可用来在一定程度上描述文档的外观和语义。HTML的语言形式为尖括号包围的HTML元素，浏览器使用HTML标签和脚本来诠释网页内容，但不会将它们显示在页面上。</p>
        <p>HTML可以嵌入如JavaScript的脚本语言，它们会影响HTML网页的行为。网页浏览器也可以引用层叠样式表（CSS）来定义文本和其它元素的外观与布局。维护HTML和CSS标准的组织万维网联盟（W3C）鼓励人们使用CSS替代一些用于表现的HTML元素。</p>
        <h2>发展</h2>
        <p>1980年，物理学家蒂姆·伯纳斯-李在欧洲核子研究中心（CERN）在承包工程期间，为使CERN的研究人员使用并共享文档，他提出并创建原型系统ENQUIRE。1989年，伯纳斯-李在一份备忘录中提出一个基于互联网的超文本系统。他规定HTML并在1990年底写出浏览器和服务器软件。同年，伯纳斯-李与CERN的数据系统工程师罗伯特·卡里奥联合为项目申请资助，但未被CERN正式批准。在他的个人笔记中伯纳斯-李列举“一些使用超文本的领域”，并把百科全书列为首位。</p>
        <div class="img"><img src="../../assets/img/htmlfather.jpg" alt=""><p>蒂姆·伯纳斯-李</p></div>
        <p>HTML的首个公开描述出现于一个名为HTML Tags的文件中，由蒂姆·伯纳斯-李于1991年底提及。它描述18个元素，包括HTML初始的、相对简单的设计。除了超链接标签外，其他设计都深受CERN内部一个以标准通用标记语言（SGML）为基础的文件格式SGMLguid的影响。这些元素仍有11个存在于HTML 4中。</p>
        <p>伯纳斯-李认为HTML是SGML的一个应用程序。1993年中期互联网工程任务组（IETF）发布首个HTML规范的提案：“超文本标记语言（HTML）”互联网草案，由伯纳斯-李与丹·康纳利撰写。其中包括一个SGML文档类型定义来定义语法。草案于6个月后过期，不过值得注意的是其对NCSA Mosaic浏览器嵌入在线图像的自定义标签的认可，这反映IETF把标准立足于成功原型的理念。同样，戴夫·拉格特在1993年末提出的与之竞争的互联网草案“HTML+（超文本标记格式）”建议规范已经实现的功能，如表格与填写表单。</p>
        <p>在HTML和HTML+的草案于1994年初到期后，IETF创建一个HTML工作组，并在1995年完成"HTML 2.0"，这是第一个旨在成为对其后续实现标准的依据的HTML规范。</p>
        <p>在IETF的主持下，HTML标准的进一步发展因竞争利益而遭受停滞。自1996年起，HTML规范一直由万维网联盟（W3C）维护，并由商业软件厂商出资。不过在2000年，HTML也成为国际标准（ISO/ IEC15445：2000）。HTML 4.01于1999年末发布，进一步的勘误版本于2001年发布。2004年，网页超文本应用技术工作小组（WHATWG）开始开发HTML5，并在2008年与W3C共同交付，2014年10月28日完成标准化。</p>
      </el-main>
      <el-footer>© 2020 | ^_^</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex2: '/html'
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
