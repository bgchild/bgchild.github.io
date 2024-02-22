(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{475:function(a,t,s){"use strict";s.r(t);var e=s(0),n=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#什么是本地方法"}},[a._v("什么是本地方法")])]),t("li",[t("a",{attrs:{href:"#为什么使用native-method"}},[a._v("为什么使用Native Method？")]),t("ul",[t("li",[t("a",{attrs:{href:"#与java环境的交互"}},[a._v("与Java环境的交互")])]),t("li",[t("a",{attrs:{href:"#与操作系统的交互"}},[a._v("与操作系统的交互")])]),t("li",[t("a",{attrs:{href:"#sun-s-java"}},[a._v("Sun's Java")])])])]),t("li",[t("a",{attrs:{href:"#现状"}},[a._v("现状")])])])]),t("p"),a._v(" "),t("h2",{attrs:{id:"什么是本地方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是本地方法"}},[a._v("#")]),a._v(" 什么是本地方法")]),a._v(" "),t("p",[a._v("简单地讲，一个 "),t("code",[a._v("Native Method")]),a._v(" 是一个 Java 调用非 Java 代码的接囗。一个 "),t("code",[a._v("Native Method")]),a._v(' 是这样一个 Java 方法：该方法的实现由非 Java 语言实现，比如 C。这个特征并非 Java 所特有，很多其它的编程语言都有这一机制，比如在 C++ 中，你可以用 extern "C" 告知 C++ 编译器去调用一个 C 的函数。')]),a._v(" "),t("p",[a._v("『A native method is a Java method whose implementation is provided by non-java code.』（本地方法是一个非 Java 的方法，它的具体实现是非 Java 代码的实现）。")]),a._v(" "),t("p",[a._v("在定义一个 "),t("code",[a._v("native method")]),a._v(" 时，并不提供实现体（有些像定义一个 Java interface），因为其实现体是由非 Java 语言在外面实现的。")]),a._v(" "),t("p",[a._v("本地接口的作用是融合不同的编程语言为 Java 所用，它的初衷是融合 C/C++ 程序。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Java/20220116151813.png",alt:"image-20220116151811620"}})]),a._v(" "),t("p",[a._v("代码举例说明 Native 方法是如何编写的")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n * 本地方法\n */")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("IhaveNatives")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("native")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Native1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("native")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("long")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Native2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("native")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("synchronized")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("float")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Native3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" o"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("native")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Natives")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" ary"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throws")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Exception")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br")])]),t("p",[a._v("可以看到，Native Method 方法需要使用 "),t("code",[a._v("native")]),a._v(" 来标志。")]),a._v(" "),t("blockquote",[t("p",[a._v("需要注意的是：标识符 native 可以与其它 java 标识符连用，但是 abstract 除外。")])]),a._v(" "),t("h2",{attrs:{id:"为什么使用native-method"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用native-method"}},[a._v("#")]),a._v(" 为什么使用Native Method？")]),a._v(" "),t("p",[a._v("Java 使用起来非常方便，然而有些层次的任务用 Java 实现起来不容易，或者我们对程序的效率很在意时，问题就来了。")]),a._v(" "),t("h3",{attrs:{id:"与java环境的交互"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#与java环境的交互"}},[a._v("#")]),a._v(" 与Java环境的交互")]),a._v(" "),t("p",[a._v("有时 Java 应用需要与 Java 外面的环境交互，这是本地方法存在的主要原因。你可以想想 Java 需要与一些底层系统，如操作系统或某些硬件交换信息时的情况。本地方法正是这样一种交流机制：它为我们提供了一个非常简洁的接口，而且我们无需去了解 Java 应用之外的繁琐的细节。")]),a._v(" "),t("h3",{attrs:{id:"与操作系统的交互"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#与操作系统的交互"}},[a._v("#")]),a._v(" 与操作系统的交互")]),a._v(" "),t("p",[a._v("JVM 支持着 Java 语言本身和运行时库，它是 Java 程序赖以生存的平台，它由一个解释器（解释字节码）和一些连接到本地代码的库组成。然而不管怎样，它毕竟不是一个完整的系统，它经常依赖于一底层系统的支持。这些底层系统常常是强大的操作系统。通过使用本地方法，我们得以用 Java 实现了 jre 的与底层系统的交互，甚至 JVM 的一些部分就是用 C 写的。还有，如果我们要使用一些 Java 语言本身没有提供封装的操作系统的特性时，我们也需要使用本地方法。")]),a._v(" "),t("h3",{attrs:{id:"sun-s-java"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sun-s-java"}},[a._v("#")]),a._v(" Sun's Java")]),a._v(" "),t("p",[a._v("Sun 的解释器是用 C 实现的，这使得它能像一些普通的 C 一样与外部交互。jre 大部分是用 Java 实现的，它也通过一些本地方法与外界交互。例如：类"),t("code",[a._v("java.lang.Thread")]),a._v(" 的 "),t("code",[a._v("setpriority()")]),a._v(" 方法是用 Java 实现的，但是它实现调用的是该类里的本地方法 "),t("code",[a._v("setpriorityo()")]),a._v(" 。这个本地方法是用 C 实现的，并被植入 JVM 内部，在 Windows 95 的平台上，这个本地方法最终将调用 Win32 setpriority() API。这是一个本地方法的具体实现由 JVM 直接提供，更多的情况是本地方法由外部的动态链接库（external dynamic link library）提供，然后被 JVM 调用。")]),a._v(" "),t("h2",{attrs:{id:"现状"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#现状"}},[a._v("#")]),a._v(" 现状")]),a._v(" "),t("p",[a._v("目前该方法使用的越来越少了，除非是与硬件有关的应用，比如通过 Java 程序驱动打印机或者 Java 系统管理生产设备，在企业级应用中已经比较少见。因为现在的异构领域间的通信很发达，比如可以使用 Socket 通信，也可以使用 Web Service 等等，不多做介绍。")])])}),[],!1,null,null,null);t.default=n.exports}}]);