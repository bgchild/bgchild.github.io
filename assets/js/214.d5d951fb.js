(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{566:function(a,s,t){"use strict";t.r(s);var e=t(0),n=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"kafka单机安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kafka单机安装"}},[a._v("#")]),a._v(" kafka单机安装")]),a._v(" "),s("h2",{attrs:{id:"安装文件上传-目录-md4g-tools"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装文件上传-目录-md4g-tools"}},[a._v("#")]),a._v(" 安装文件上传  （目录/md4g/tools）")]),a._v(" "),s("ul",[s("li",[a._v("apache-zookeeper-3.6.3-bin.tar.gz")]),a._v(" "),s("li",[a._v("kafka_2.13-2.8.0.gz")])]),a._v(" "),s("h2",{attrs:{id:"解压并修改配置-目录-md4g-kafka"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解压并修改配置-目录-md4g-kafka"}},[a._v("#")]),a._v(" 解压并修改配置（目录/md4g/kafka）")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#解压并重命名")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-zxvf")]),a._v(" /md4g/tools/apache-zookeeper-3.6.3-bin.tar.gz "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-C")]),a._v(" /md4g/kafka/\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-zxvf")]),a._v(" /md4g/tools/kafka_2.13-2.8.0.gz "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-C")]),a._v(" /md4g/kafka/\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /md4g/kafka/\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" apache-zookeeper-3.6.3-bin/ zookeeper\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" kafka_2.13-2.8.0/ kafka\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#复制配置文件")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" zookeeper\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" data\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" conf\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" zoo_sample.cfg zoo.cfg\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" zoo.cfg\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#修改dataDir=/md4g/kafka/zookeeper/data如下图")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://jsd.cdn.zzko.cn/gh/micolor/images/note/202401121419744.png",alt:"image-20211027111006110"}})]),a._v(" "),s("h2",{attrs:{id:"启动zookeeper-并查看是否安装成功"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动zookeeper-并查看是否安装成功"}},[a._v("#")]),a._v(" 启动zookeeper，并查看是否安装成功")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("/md4g/kafka/zookeeper/bin/zkServer.sh start\n/md4g/kafka/zookeeper/bin/zkCli.sh\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://jsd.cdn.zzko.cn/gh/micolor/images/note/202401121419746.png",alt:"image-20211027111846747"}})]),a._v(" "),s("h2",{attrs:{id:"kafka配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kafka配置"}},[a._v("#")]),a._v(" kafka配置")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /md4g/kafka/kafka/\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" data\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" server.properties\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#修改：log.dirs=/md4g/kafka/kafka/data 如下图")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://jsd.cdn.zzko.cn/gh/micolor/images/note/202401121419747.png",alt:"image-20211027112243156"}})]),a._v(" "),s("h2",{attrs:{id:"启动kafka"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动kafka"}},[a._v("#")]),a._v(" 启动kafka")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("nohup")]),a._v(" /md4g/kafka/kafka/bin/kafka-server-start.sh /md4g/kafka/kafka/config/server.properties "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"创建topic测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建topic测试"}},[a._v("#")]),a._v(" 创建topic测试")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /md4g/kafka/kafka/bin\n./kafka-topics.sh "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--create")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--zookeeper")]),a._v(" localhost:2181 --replication-factor "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--partitions")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--topic")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("test")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h2",{attrs:{id:"kafka-tools-连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kafka-tools-连接"}},[a._v("#")]),a._v(" kafka tools 连接")]),a._v(" "),s("h3",{attrs:{id:"安装kafka-tools工具新建连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装kafka-tools工具新建连接"}},[a._v("#")]),a._v(" 安装kafka-tools工具新建连接")]),a._v(" "),s("p",[a._v("File-》Add new connection...")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://jsd.cdn.zzko.cn/gh/micolor/images/note/202401121419748.png",alt:"image-20211027113216300"}})]),a._v(" "),s("p",[s("img",{attrs:{src:"https://jsd.cdn.zzko.cn/gh/micolor/images/note/202401121419749.png",alt:"image-20211027113243372"}})])])}),[],!1,null,null,null);s.default=n.exports}}]);