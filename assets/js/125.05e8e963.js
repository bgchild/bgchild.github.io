(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{532:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#介绍"}},[s._v("介绍")])]),t("li",[t("a",{attrs:{href:"#作用"}},[s._v("作用")])]),t("li",[t("a",{attrs:{href:"#代码演示"}},[s._v("代码演示")])]),t("li",[t("a",{attrs:{href:"#使用pc寄存器存储字节码指令地址有什么用呢"}},[s._v("使用PC寄存器存储字节码指令地址有什么用呢？")])]),t("li",[t("a",{attrs:{href:"#两个面试题"}},[s._v("两个面试题")]),t("ul",[t("li",[t("a",{attrs:{href:"#pc寄存器为什么被设定为私有的"}},[s._v("PC寄存器为什么被设定为私有的？")])]),t("li",[t("a",{attrs:{href:"#cpu时间片"}},[s._v("CPU时间片")])])])])])]),t("p"),s._v(" "),t("h2",{attrs:{id:"介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[s._v("官方文档地址：https://docs.oracle.com/javase/specs/jvms/se8/html/index.html")])]),s._v(" "),t("p",[s._v("JVM 中的程序计数寄存器（Program Counter Register）中，Register 的命名源于 CPU 的寄存器，"),t("strong",[s._v("寄存器存储指令相关的现场信息")]),s._v("。CPU 只有把数据装载到寄存器才能够运行。这里，并非是广义上所指的物理寄存器，或许将其翻译为 PC 计数器（或指令计数器）会更加贴切（也称为程序钩子），并且也不容易引起一些不必要的误会。"),t("strong",[s._v("JVM 中的 PC 寄存器是对物理 PC 寄存器的一种抽象模拟")]),s._v("。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Java/20220116000444.png",alt:"image-20200705155551919"}})]),s._v(" "),t("p",[s._v("它是一块很小的内存空间，几乎可以忽略不记。"),t("strong",[s._v("也是运行速度最快的存储区域")]),s._v("。")]),s._v(" "),t("p",[s._v("在 JVM 规范中，每个线程都有它自己的程序计数器，是线程私有的，生命周期与线程的生命周期保持一致。")]),s._v(" "),t("p",[s._v("任何时间一个线程都只有一个方法在执行，也就是所谓的 "),t("strong",[s._v("当前方法")]),s._v("。程序计数器会存储当前线程正在执行的 Java 方法的 JVM 指令地址；或者，如果是在执行 native 方法，则是未指定值（undefined）。")]),s._v(" "),t("p",[s._v("它是程序控制流的指示器，分支、循环、跳转、异常处理、线程恢复等基础功能都需要依赖这个计数器来完成。字节码解释器工作时就是通过改变这个计数器的值来选取下一条需要执行的字节码指令。")]),s._v(" "),t("p",[s._v("它是唯一一个在 Java 虚拟机规范中 "),t("strong",[s._v("没有规定任何 OutofMemoryError 情况的区域")]),s._v("。")]),s._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[s._v("笔记")]),s._v(" "),t("p",[s._v("相当于行号计时器，记录下一行的地址，方便过去。类似于 JDBC 结果集的游标，也类似于集合的迭代器指针。")]),s._v(" "),t("div",{staticClass:"custom-block right"},[t("p",[s._v("2021-01-17 @Young Kbt")])])]),s._v(" "),t("h2",{attrs:{id:"作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#作用"}},[s._v("#")]),s._v(" 作用")]),s._v(" "),t("p",[s._v("PC 寄存器用来存储指向下一条指令的地址，也即将要执行的指令代码。由执行引擎或 CPU 读取下一条指令。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Java/20220117154458.png",alt:"image-20220117154455452"}})]),s._v(" "),t("h2",{attrs:{id:"代码演示"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码演示"}},[s._v("#")]),s._v(" 代码演示")]),s._v(" "),t("p",[s._v("我们首先写一个简单的代码")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("PCRegisterTest")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" j "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" k "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" j"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        \n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" s "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"abc"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("k"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("然后将代码进行编译成字节码文件")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(": bipush        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(": istore_1\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(": bipush        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(": istore_2\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(": iload_1\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(": iload_2\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(": iadd\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(": istore_3\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("return")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("上方左边的数字代表 "),t("strong",[s._v("指令地址（指令偏移）")]),s._v("，用于指向当前执行到哪里，即 PC 寄存器中可能存储的值，然后执行引擎读取 PC 寄存器中的值，并执行该指令。")]),s._v(" "),t("p",[s._v("通过 PC 寄存器，我们就可以知道当前程序执行到哪一步了")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Java/20220117154727.png",alt:"image-20220117154725969"}})]),s._v(" "),t("h2",{attrs:{id:"使用pc寄存器存储字节码指令地址有什么用呢"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用pc寄存器存储字节码指令地址有什么用呢"}},[s._v("#")]),s._v(" 使用PC寄存器存储字节码指令地址有什么用呢？")]),s._v(" "),t("p",[s._v("因为 CPU 需要不停的切换各个线程，这时候切换回来以后，就得知道接着从哪开始继续执行。")]),s._v(" "),t("p",[s._v("JVM 的字节码解释器就需要通过改变 PC 寄存器的值来明确下一条应该执行什么样的字节码指令。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Java/20220116000449.png",alt:"image-20200705161409533"}})]),s._v(" "),t("h2",{attrs:{id:"两个面试题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#两个面试题"}},[s._v("#")]),s._v(" 两个面试题")]),s._v(" "),t("h3",{attrs:{id:"pc寄存器为什么被设定为私有的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pc寄存器为什么被设定为私有的"}},[s._v("#")]),s._v(" PC寄存器为什么被设定为私有的？")]),s._v(" "),t("p",[s._v("我们都知道所谓的多线程在一个特定的时间段内只会执行其中某一个线程的方法，CPU 会不停地做任务切换，这样必然导致经常中断或恢复，如何保证分毫无差呢？"),t("strong",[s._v("为了能够准确地记录各个线程正在执行的当前字节码指令地址，最好的办法自然是为每一个线程都分配一个 PC 寄存器")]),s._v("，这样一来各个线程之间便可以进行独立计算，从而不会出现相互干扰的情况。")]),s._v(" "),t("p",[s._v("由于 CPU 时间片轮限制，众多线程在并发执行过程中，任何一个确定的时刻，一个处理器或者多核处理器中的一个内核，只会执行某个线程中的一条指令。")]),s._v(" "),t("p",[s._v("这样必然导致经常中断或恢复，如何保证分毫无差呢？每个线程在创建后，都会产生自己的程序计数器和栈帧，程序计数器在各个线程之间互不影响。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Java/20220117174907.png",alt:"image-20220117174906502"}})]),s._v(" "),t("p",[s._v("如上图：PC 寄存器 1 执行到了 5，然后交给 PC 寄存器 2 执行到 7，接着交给 PC 寄存器 3 执行到 17，最后回到 PC 寄存器 1 执行 5 后面的代码。")]),s._v(" "),t("p",[s._v("如果三者共用一个 PC 寄存器，那么 7 会覆盖 5，17 或覆盖 7，导致 17 回到 PC 寄存器 1 时，找不到原来的 5 位置，从而又从 0 开始。")]),s._v(" "),t("p",[s._v("所以每个线程都有自己的 PC 寄存器，这样不会被别的线程覆盖影响。")]),s._v(" "),t("h3",{attrs:{id:"cpu时间片"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cpu时间片"}},[s._v("#")]),s._v(" CPU时间片")]),s._v(" "),t("p",[s._v("CPU 时间片即 CPU 分配给各个程序的时间，每个线程被分配一个时间段，称作它的时间片。")]),s._v(" "),t("p",[s._v("在宏观上：俄们可以同时打开多个应用程序，每个程序并行不悖，同时运行。")]),s._v(" "),t("p",[s._v("但在微观上：由于只有一个 CPU，一次只能处理程序要求的一部分，如何处理公平，一种方法就是引入时间片，每个程序轮流执行。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Java/20220116000453.png",alt:"image-20200705161849557"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);