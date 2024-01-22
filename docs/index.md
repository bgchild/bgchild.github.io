---
home: true
# heroImage: /img/web.png
heroText: KNOTE
tagline: 积跬步以至千里

pageClass: vdoing-index-class

# actionText: 立刻进入 →
# actionLink: /web/
# bannerBg: auto # auto => 网格纹背景(有bodyBgImg时无背景)，默认 | none => 无 | '大图地址' | background: 自定义背景样式       提示：如发现文本颜色不适应你的背景时可以到palette.styl修改$bannerTextColor变量

# features: # 可选的
#   - title: 前端
#     details: JavaScript、ES6、Vue框架等前端技术
#     # link: /front/ # 可选
#     imgUrl: /img/index/front.png # 可选
#   - title: 后端 
#     details: Java、Web、Spring、Cloud等后端技术
#     # link: /java/
#     imgUrl: /img/index/backEnd.png
#   - title: 文档
#     details: 技术文档、教程、技巧、总结等文章
#     # link: /technology/
#     imgUrl: /img/index/other.png

# bannerBg: https://cdn.staticaly.com/gh/Weibw162/image-hosting@dev/%E6%9D%82%E5%BD%95/%E4%BC%8A%E8%95%BE%E9%9B%85.5vklmk9v83o0.webp   # 背景图，长度是整个屏幕

# 文章列表显示方式: detailed 默认，显示详细版文章列表（包括作者、分类、标签、摘要、分页等）| simple => 显示简约版文章列表（仅标题和日期）| none 不显示文章列表
postList: detailed
# simplePostListLength: 10 # 简约版文章列表显示的文章数量，默认10。（仅在postList设置为simple时生效）
---


<!-- 网页左下角动态gif 小熊猫挥手 -->
<!-- <img src="/img/panda-waving.png" class="panda no-zoom" style="width: 130px;height: 115px;opacity: 0.8;margin-bottom: -4px;padding-bottom:0;position: fixed;bottom: 0;left: 0.5rem;z-index: 1;"> -->

<ClientOnly>
  <IndexBigImg />
  <!-- <Fantasy index="true" /> -->
</ClientOnly>

<script>
</script>