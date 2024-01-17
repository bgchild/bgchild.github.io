(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{430:function(a,s,n){"use strict";n.r(s);var t=n(0),e=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"javadoc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javadoc"}},[a._v("#")]),a._v(" JavaDoc")]),a._v(" "),s("h3",{attrs:{id:"_1、简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、简介"}},[a._v("#")]),a._v(" 1、简介")]),a._v(" "),s("p",[a._v("JavaDoc是一种将注释生成HTML文档的技术，生成的HTML文档类似于Java的API，易读且清晰明了。 在简略介绍JavaDoc写法之后，再看一下在Intellij Idea 中如何将代码中的注释生成HTML文档。")]),a._v(" "),s("p",[a._v("javadoc是Sun公司提供的一个技术，它从程序源代码中抽取类、方法、成员等注释形成一个和源代码配 套的API帮助文档。也就是说，只要在编写程序时以一套特定的标签作注释，在程序编写完成后，通过 Javadoc就可以同时形成程序的开发文档了。javadoc命令是用来生成自己API文档的，使用方式：使用 命令行在目标文件所在目录输入javadoc +文件名.java。")]),a._v(" "),s("p",[a._v("先看一段样例代码：")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n * 这是一个Javadoc测试程序\n *\n * @author Kuangshen\n * @version 1.0\n * @since 1.5\n */")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("HelloWorld")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n     * @param name 姓名\n     * @return 返回name姓名\n     * @throws Exception 无异常抛出\n     */")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throws")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Exception")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br")])]),s("p",[a._v("解释一下：\n以 /* 开始，以 / 结束。\n@author 作者名\n@version 版本号\n@since 指明需要最早使用的jdk版本\n@param 参数名\n@return 返回值情况\n@throws 异常抛出情况")]),a._v(" "),s("h3",{attrs:{id:"_2、命令行生成doc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、命令行生成doc"}},[a._v("#")]),a._v(" 2、命令行生成Doc")]),a._v(" "),s("p",[a._v("打开cmd")]),a._v(" "),s("p",[a._v("切换到文件当前目录  "),s("code",[a._v("cd /d E:\\java\\study\\package\\test")])]),a._v(" "),s("p",[a._v("输入指令： javadoc HelloWorld.java")]),a._v(" "),s("p",[a._v("一般会加上"),s("code",[a._v("-encoding UTF-8 -charset UTF-8")]),a._v(" 解决GBK乱码问题，在中间添加编码设置")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("javadoc -encoding UTF-8 -charset UTF-8 HelloWorld.java\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://cdn.staticaly.com/gh/oddfar/static@master/img/JavaSE-%E5%9F%BA%E7%A1%80%E8%AF%AD%E6%B3%95.assets/image-20210327210911496.png",alt:"image-20210327210911496"}})]),a._v(" "),s("p",[a._v("之后会多出一堆文件，打开index.html查看")])])}),[],!1,null,null,null);s.default=e.exports}}]);