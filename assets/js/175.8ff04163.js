(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{525:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("笔记")]),t._v(" "),s("p",[t._v("Redis 发布订阅 (pub/sub) 是一种消息通信模式：发送者 (pub) 发送消息，订阅者 (sub) 接收消息。")]),t._v(" "),s("div",{staticClass:"custom-block right"},[s("p",[t._v("2021-12-26 @Young Kbt")])])]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#什么是发布和订阅"}},[t._v("什么是发布和订阅")])]),s("li",[s("a",{attrs:{href:"#简介"}},[t._v("简介")])]),s("li",[s("a",{attrs:{href:"#指令与描述"}},[t._v("指令与描述")])]),s("li",[s("a",{attrs:{href:"#指令测试"}},[t._v("指令测试")]),s("ul",[s("li",[s("a",{attrs:{href:"#原理"}},[t._v("原理")])])])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"什么是发布和订阅"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是发布和订阅"}},[t._v("#")]),t._v(" 什么是发布和订阅")]),t._v(" "),s("p",[t._v("Redis 发布订阅 (pub/sub) 是一种消息通信模式：发送者 (pub) 发送消息，订阅者 (sub) 接收消息。")]),t._v(" "),s("p",[t._v("Redis 客户端可以订阅任意数量的频道。")]),t._v(" "),s("h2",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),s("p",[t._v("订阅/发布消息图：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211226154905.png",alt:"image-20210409105838259"}})]),t._v(" "),s("p",[t._v("下图展示了频道 channel1，以及订阅这个频道的三个客户端 —— client2 、client5 和 client1 之间的关系：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211226154929.png",alt:"image-20210409105859670"}})]),t._v(" "),s("p",[t._v("当有新消息通过 PUBLISH 命令发送给频道 channel1 时，这个消息就会被发送给订阅它的三个客户端：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211226154637.png",alt:"image-20210409110314032"}})]),t._v(" "),s("h2",{attrs:{id:"指令与描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指令与描述"}},[t._v("#")]),t._v(" 指令与描述")]),t._v(" "),s("p",[t._v("下表列出了 Redis 发布订阅常用命令：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("序号")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("命令")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("PSUBSCRIBE pattern [pattern ...]")]),t._v(" "),s("td",[t._v("订阅一个或多个符合给定模式的频道")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("PUBSUB subcommand [argument [argument ...]]")]),t._v(" "),s("td",[t._v("查看订阅与发布系统状态")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("3")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("PUBLISH channel message")]),t._v(" "),s("td",[t._v("将信息发送到指定的频道")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("4")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("PUNSUBSCRIBE [pattern [pattern ...]]")]),t._v(" "),s("td",[t._v("退订所有给定模式的频道")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("5")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("SUBSCRIBE channel [channel ...]")]),t._v(" "),s("td",[t._v("订阅给定的一个或多个频道的信息")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("6")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("UNSUBSCRIBE [channel [channel ...]]")]),t._v(" "),s("td",[t._v("指退订给定的频道")])])])]),t._v(" "),s("p",[s("strong",[t._v("大小写都可以。")])]),t._v(" "),s("h2",{attrs:{id:"指令测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指令测试"}},[t._v("#")]),t._v(" 指令测试")]),t._v(" "),s("p",[t._v("以下实例演示了发布订阅是如何工作的。")]),t._v(" "),s("p",[t._v("我们先打开两个 redis-cli 客户端")]),t._v(" "),s("p",[t._v("在 "),s("strong",[t._v("第一个 redis-cli 客户端")]),t._v("，创建订阅频道名为 redisChat，输入命令 "),s("code",[t._v("SUBSCRIBE redisChat")])]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("redis "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:637"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("9")]),t._v(">")]),t._v(" SUBSCRIBE redisChat\nReading messages"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("press Ctrl-C to quit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"subscribe"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"redisChat"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("integer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("在 "),s("strong",[t._v("第二个客户端")]),t._v("，发布两次消息，订阅者就能接收到消息。")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("redis "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:637"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("9")]),t._v(">")]),t._v(" PUBLISH redisChat "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello,Redis"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("integer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nredis "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:637"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("9")]),t._v(">")]),t._v(" PUBLISH redisChat "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello，java"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("integer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("第一个 redis-cli 客户端，即订阅者的客户端会显示如下消息：")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"message"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"redisChat"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello,Redis"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"message"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"redisChat"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello，java"')]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("h3",{attrs:{id:"原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),s("p",[t._v("Redis 是使用 C 实现的，通过分析 Redis 源码里的 pubsub.c 文件，了解发布和订阅机制的底层实现，来加深对 Redis 的理解。")]),t._v(" "),s("p",[t._v("Redis 通过 PUBLISH、SUBSCRIBE 和 PSUBSCRIBE 等命令实现发布和订阅功能。")]),t._v(" "),s("p",[t._v("通过 SUBSCRIBE 命令订阅某频道后，redis-server 里维护了一个字典，字典的键就是一个个 channel，而字典的值则是一个链表，链表中保存了所有订阅这个 channel 的客户端。SUBSCRIBE 命令的关键，就是将客户端添加到给定 channel 的订阅链表中。")]),t._v(" "),s("p",[t._v("通过 PUBLISH 命令向订阅者发送消息，redis-server 会使用给定的频道作为键，在它所维护的 channel 字典中查找记录了订阅这个频道的所有客户端的链表，遍历这个链表，将消息发布给所有订阅者。")]),t._v(" "),s("p",[t._v("Pub/Sub 从字面上理解就是发布（Publish）与订阅（Subscribe），在 Redis 中，你可以设定对某一个 key 值进行消息发布及消息订阅，当一个 key 值上进行了消息发布后，所有订阅它的客户端都会收到相应的消息。这一功能最明显的用法就是用作实时消息系统，比如普通的即时聊天，群聊等功能。")]),t._v(" "),s("p",[t._v("使用场景：Redis 的 Pub/Sub 系统可以构建实时的消息系统，比如很多用 Pub/Sub 构建的实时聊天系统的例子。")]),t._v(" "),s("p",[s("strong",[t._v("注意：发布的消息没有持久化，如果在订阅的客户端收不到 hello，只能收到订阅后发布的消息。")])])])}),[],!1,null,null,null);s.default=n.exports}}]);