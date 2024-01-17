(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{524:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[s._v("笔记")]),s._v(" "),t("p",[s._v("本内容介绍 Redis 的配置文件内容，这也是 Redis 进阶、优化需要掌握的技能。建议打开着配置文件看，理解更好。")]),s._v(" "),t("div",{staticClass:"custom-block right"},[t("p",[s._v("2021-12-26 @Young Kbt")])])]),s._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#位置"}},[s._v("位置")])]),t("li",[t("a",{attrs:{href:"#单位"}},[s._v("单位")])]),t("li",[t("a",{attrs:{href:"#include"}},[s._v("include")])]),t("li",[t("a",{attrs:{href:"#network网络配置"}},[s._v("NETWORK网络配置")]),t("ul",[t("li",[t("a",{attrs:{href:"#bind、protected-mode、port"}},[s._v("bind、protected-mode、Port")])]),t("li",[t("a",{attrs:{href:"#tcp-backlog"}},[s._v("tcp-backlog")])]),t("li",[t("a",{attrs:{href:"#timeout"}},[s._v("timeout")])]),t("li",[t("a",{attrs:{href:"#tcp-keepalive"}},[s._v("tcp-keepalive")])])])]),t("li",[t("a",{attrs:{href:"#general通用"}},[s._v("GENERAL通用")]),t("ul",[t("li",[t("a",{attrs:{href:"#daemonize"}},[s._v("daemonize")])]),t("li",[t("a",{attrs:{href:"#pidfile"}},[s._v("pidfile")])]),t("li",[t("a",{attrs:{href:"#loglevel"}},[s._v("loglevel")])]),t("li",[t("a",{attrs:{href:"#logfile"}},[s._v("logfile")])]),t("li",[t("a",{attrs:{href:"#databases"}},[s._v("databases")])])])]),t("li",[t("a",{attrs:{href:"#snapshopting持久化"}},[s._v("SNAPSHOPTING持久化")])]),t("li",[t("a",{attrs:{href:"#replication主从复制"}},[s._v("REPLICATION主从复制")])]),t("li",[t("a",{attrs:{href:"#security安全"}},[s._v("SECURITY安全")])]),t("li",[t("a",{attrs:{href:"#客户端连接相关"}},[s._v("客户端连接相关")]),t("ul",[t("li",[t("a",{attrs:{href:"#maxclients"}},[s._v("maxclients")])]),t("li",[t("a",{attrs:{href:"#maxmemory"}},[s._v("maxmemory")])]),t("li",[t("a",{attrs:{href:"#maxmemory-policy"}},[s._v("maxmemory-policy")])]),t("li",[t("a",{attrs:{href:"#maxmemory-samples"}},[s._v("maxmemory-samples")])])])]),t("li",[t("a",{attrs:{href:"#appendonly模式"}},[s._v("appendonly模式")])])])]),t("p"),s._v(" "),t("h2",{attrs:{id:"位置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#位置"}},[s._v("#")]),s._v(" 位置")]),s._v(" "),t("p",[s._v("Redis 的配置文件位于 Redis 安装目录下，文件名为 redis.conf。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("config get * "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取全部的配置")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("我们一般情况下，会单独拷贝出来一份进行操作。来保证初始文件的安全。")]),s._v(" "),t("h2",{attrs:{id:"单位"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单位"}},[s._v("#")]),s._v(" 单位")]),s._v(" "),t("p",[s._v("容量单位不区分大小写，但是容量大小 G 和 GB 有区别。")]),s._v(" "),t("p",[s._v("配置大小单位，开头定义了一些基本的度量单位，只支持 bytes，不支持 bit。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211226151529.png",alt:"image-20211226151527726"}})]),s._v(" "),t("h2",{attrs:{id:"include"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#include"}},[s._v("#")]),s._v(" include")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211226151549.png",alt:"image-20211226151548208"}})]),s._v(" "),t("p",[s._v("类似 jsp 中的 include，可以通过 includes 包含其他文件，redis.conf 可以作为总文件，可以包含其他文件，即 "),t("strong",[s._v("多实例的情况可以把公用的配置文件提取出来")]),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"network网络配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#network网络配置"}},[s._v("#")]),s._v(" NETWORK网络配置")]),s._v(" "),t("h3",{attrs:{id:"bind、protected-mode、port"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bind、protected-mode、port"}},[s._v("#")]),s._v(" bind、protected-mode、Port")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("bind")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 绑定的ip")]),s._v("\nprotected-mode "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 保护模式")]),s._v("\nport "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认端口")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("默认情况 "),t("code",[s._v("bind=127.0.0.1")]),s._v(" 只能接受本机的访问请求，如果注释掉或不写的情况下，无限制接受任何 ip 地址的访问。")]),s._v(" "),t("p",[s._v("生产环境肯定要写你应用服务器的地址，服务器是需要远程访问的，所以需要将其注释掉。")]),s._v(" "),t("p",[s._v("如果开启了 "),t("code",[s._v("protected-mode")]),s._v("，那么在没有设定 bind ip 且没有设密码的情况下，Redis 只允许接受本机的响应。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211226151641.png",alt:"image-20211226151640216"}})]),s._v(" "),t("h3",{attrs:{id:"tcp-backlog"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-backlog"}},[s._v("#")]),s._v(" tcp-backlog")]),s._v(" "),t("p",[s._v("设置 tcp 的 backlog。backlog 其实是一个连接队列，backlog 队列总和 = 未完成三次握手队列 + 已经完成三次握手队列。")]),s._v(" "),t("p",[s._v("在高并发环境下需要一个高 backlog 值来避免慢客户端连接问题。")]),s._v(" "),t("p",[s._v("注意 Linux 内核会将这个值减小到 "),t("code",[s._v("/proc/sys/net/core/somaxconn")]),s._v(" 的值（128），所以需要确认增大 "),t("code",[s._v("/proc/sys/net/core/somaxconn")]),s._v(" 和 "),t("code",[s._v("/proc/sys/net/ipv4/tcp_max_syn_backlog（128）")]),s._v(" 两个值来达到想要的效果。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211226151503.png",alt:"image-20211226151502217"}})]),s._v(" "),t("h3",{attrs:{id:"timeout"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#timeout"}},[s._v("#")]),s._v(" timeout")]),s._v(" "),t("p",[s._v("一个空闲的客户端维持多少秒会关闭，0 表示关闭该功能。即永不关闭。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211226151702.png",alt:"image-20211226151701798"}})]),s._v(" "),t("h3",{attrs:{id:"tcp-keepalive"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-keepalive"}},[s._v("#")]),s._v(" tcp-keepalive")]),s._v(" "),t("p",[s._v("对访问客户端的一种心跳检测，每个 n 秒检测一次。")]),s._v(" "),t("p",[s._v("单位为秒，如果设置为 0，则不会进行 Keepalive 检测，建议设置成 60。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211226151736.png",alt:"image-20211226151735808"}})]),s._v(" "),t("h2",{attrs:{id:"general通用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#general通用"}},[s._v("#")]),s._v(" GENERAL通用")]),s._v(" "),t("h3",{attrs:{id:"daemonize"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#daemonize"}},[s._v("#")]),s._v(" daemonize")]),s._v(" "),t("p",[s._v("是否为后台进程，设置为 yes 为守护进程，后台启动。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211226152028.png",alt:"image-20211226152026984"}})]),s._v(" "),t("h3",{attrs:{id:"pidfile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pidfile"}},[s._v("#")]),s._v(" pidfile")]),s._v(" "),t("p",[s._v("存放 pid 文件的位置，每个实例会产生一个不同的 pid 文件。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211226152110.png",alt:"image-20211226152107994"}})]),s._v(" "),t("h3",{attrs:{id:"loglevel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#loglevel"}},[s._v("#")]),s._v(" loglevel")]),s._v(" "),t("p",[s._v("指定日志记录级别，Redis 总共支持四个级别：debug、verbose、notice、warning，默认为 notice。")]),s._v(" "),t("p",[s._v("四个级别根据使用阶段来选择，生产环境选择 notice 或者 warning。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211226152151.png",alt:"image-20211226152150127"}})]),s._v(" "),t("h3",{attrs:{id:"logfile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#logfile"}},[s._v("#")]),s._v(" logfile")]),s._v(" "),t("p",[s._v("日志文件名称")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211226152222.png",alt:"image-20211226152221350"}})]),s._v(" "),t("h3",{attrs:{id:"databases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#databases"}},[s._v("#")]),s._v(" databases")]),s._v(" "),t("p",[s._v("设定库的数量 默认 16，默认数据库为 0，可以使用 "),t("code",[s._v("SELECT <dbid>")]),s._v(" 命令在连接上指定数据库 id。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211226152312.png",alt:"image-20211226152312056"}})]),s._v(" "),t("p",[s._v("常用模板如下：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("daemonize "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" \t\t "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认情况下，Redis 不作为守护进程运行。需要开启的话，改为 yes")]),s._v("\n\nsupervised no \t\t "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可通过 upstart 和 systemd 管理 Redis 守护进程")]),s._v("\n\nloglevel notice \t "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 日志级别。可选项有：")]),s._v("\n\t\t\t\t\t "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# debug（记录大量日志信息，适用于开发、测试阶段）")]),s._v("\n\t\t\t\t\t "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# verbose（较多日志信息）")]),s._v("\n\t\t\t\t\t "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# notice（适量日志信息，使用于生产环境）")]),s._v("\n\t\t\t\t\t "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# warning（仅有部分重要、关键信息才会被记录）")]),s._v("\nlogfile "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(" \t\t\t "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 日志文件的位置，当指定为空字符串时，为标准输出")]),s._v("\ndatabases "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(" \t\t "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置数据库的数目。默认的数据库是 DB 0")]),s._v("\nalways-show-logo "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是否总是显示 logo")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h2",{attrs:{id:"snapshopting持久化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#snapshopting持久化"}},[s._v("#")]),s._v(" SNAPSHOPTING持久化")]),s._v(" "),t("p",[s._v("由于 Redis 是基于内存的数据库，需要将数据由内存持久化到文件中。")]),s._v(" "),t("p",[s._v("持久化方式：")]),s._v(" "),t("ul",[t("li",[s._v("RDB")]),s._v(" "),t("li",[s._v("AOF")])]),s._v(" "),t("p",[s._v("AOF 配置：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 900秒（15分钟）内至少 1 个 key 值改变（则进行数据库保存--持久化）")]),s._v("\nsave "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("900")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 300秒（5分钟）内至少 10 个 key 值改变（则进行数据库保存--持久化）")]),s._v("\nsave "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 60秒（1分钟）内至少 10000 个 key 值改变（则进行数据库保存--持久化）")]),s._v("\nsave "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211226152624.png",alt:"image-20211226152622972"}})]),s._v(" "),t("p",[s._v("RDB 配置：（内容太长，以代码显示）")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("stop-writes-on-bgsave-error "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 持久化出现错误后，是否依然进行继续进行工作")]),s._v("\n\nrdbcompression "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用压缩 rdb 文件 yes：压缩，但是需要一些 cpu 的消耗。no：不压缩，需要更多的磁盘空间")]),s._v("\n\nrdbchecksum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是否校验 rdb 文件，更有利于文件的容错性，但是在保存 rdb 文件的时候，会有大概 10% 的性能损耗")]),s._v("\n\ndbfilename dump.rdb "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# dbfilenamerdb 文件名称")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dir")]),s._v(" ./ \t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# dir 数据目录，数据库的写入会在这个目录。rdb、aof 文件也会写在这个目录")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h2",{attrs:{id:"replication主从复制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#replication主从复制"}},[s._v("#")]),s._v(" REPLICATION主从复制")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211226152842.png",alt:"image-20211226152841729"}})]),s._v(" "),t("p",[s._v("简单认识，后面详细说。")]),s._v(" "),t("h2",{attrs:{id:"security安全"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#security安全"}},[s._v("#")]),s._v(" SECURITY安全")]),s._v(" "),t("p",[s._v("命令访问密码的查看，设置和取消，缺点：在命令中设置密码，只是临时的。重启 redis 服务器，密码就还原了。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动redis")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 连接客户端")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获得和设置密码")]),s._v("\nconfig get requirepass\nconfig "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" requirepass "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123456"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#测试ping，发现需要验证")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v("\nNOAUTH Authentication required.\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 验证")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" auth "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("\nOK\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v("\nPONG\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("p",[s._v("或者在配置文件修改密码：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("requirepass "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123456"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211226153358.png",alt:"image-20211226153322688"}})]),s._v(" "),t("h2",{attrs:{id:"客户端连接相关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#客户端连接相关"}},[s._v("#")]),s._v(" 客户端连接相关")]),s._v(" "),t("h3",{attrs:{id:"maxclients"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#maxclients"}},[s._v("#")]),s._v(" maxclients")]),s._v(" "),t("p",[s._v("设置 Redis 同时可以与多少个客户端进行连接。")]),s._v(" "),t("p",[s._v("默认情况下为 10000 个客户端，如果达到了此限制，Redis 则会拒绝新的连接请求，并且向这些连接请求方发出 "),t("code",[s._v("max number of clients reached")]),s._v(" 以作回应。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211226154101.png",alt:"image-20211226154001167"}})]),s._v(" "),t("h3",{attrs:{id:"maxmemory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#maxmemory"}},[s._v("#")]),s._v(" maxmemory")]),s._v(" "),t("p",[s._v("建议必须设置，否则，将内存占满，造成服务器宕机，设置 Redis 可以使用的内存量。一旦到达内存使用上限，Redis 将会试图移除内部数据，移除规则可以通过 maxmemory-policy 来指定。")]),s._v(" "),t("p",[s._v("如果 Redis 无法根据移除规则来移除内存中的数据，或者设置了「不允许移除」，那么 Redis 则会针对那些需要申请内存的指令返回错误信息，比如 SET、LPUSH 等。")]),s._v(" "),t("p",[s._v("但是对于无内存申请的指令，仍然会正常响应，比如 GET 等。如果你的 Redis 是主 Redis（说明你的 Redis 有从 Redis），那么在设置内存使用上限时，需要在系统中留出一些内存空间给同步队列缓存，只有在你设置的是「不移除」的情况下，才不用考虑这个因素。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211226153945.png",alt:"image-20211226153944767"}})]),s._v(" "),t("h3",{attrs:{id:"maxmemory-policy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#maxmemory-policy"}},[s._v("#")]),s._v(" maxmemory-policy")]),s._v(" "),t("p",[t("code",[s._v("maxmemory-policy")]),s._v(" 六种方式：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("volatile-lru：利用 LRU 算法移除设置过过期时间的 key")])]),s._v(" "),t("li",[t("p",[s._v("allkeys-lru： 用 LRU 算法删除 key")])]),s._v(" "),t("li",[t("p",[s._v("volatile-random：随机删除即将过期 key")])]),s._v(" "),t("li",[t("p",[s._v("allkeys-random：随机删除")])]),s._v(" "),t("li",[t("p",[s._v("volatile-ttl：删除即将过期的")])]),s._v(" "),t("li",[t("p",[s._v("noevictionx：不移除任何 key，只是返回一个写错误")])])]),s._v(" "),t("p",[s._v("redis 中的 "),t("strong",[s._v("默认")]),s._v(" 的过期策略是 "),t("code",[s._v("volatile-lru")]),s._v("。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211226154058.png",alt:"image-20211226154032551"}})]),s._v(" "),t("p",[s._v("命令设置方式")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" maxmemory-policy volatile-lru \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("配置文件设置")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("maxclients "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 最大客户端数量")]),s._v("\nmaxmemory "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("bytes"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 最大内存限制")]),s._v("\nmaxmemory-policy noeviction "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 内存达到限制值的处理策略")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"maxmemory-samples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#maxmemory-samples"}},[s._v("#")]),s._v(" maxmemory-samples")]),s._v(" "),t("p",[s._v("设置样本数量，LRU 算法和最小 TTL 算法都并非是精确的算法，而是估算值，所以你可以设置样本的大小，redis 默认会检查这么多个 key 并选择其中 LRU 的那个。")]),s._v(" "),t("p",[s._v("一般设置 3 到 7 的数字，数值越小样本越不准确，但性能消耗越小。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211226154205.png",alt:"image-20211226154205172"}})]),s._v(" "),t("h2",{attrs:{id:"appendonly模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#appendonly模式"}},[s._v("#")]),s._v(" appendonly模式")]),s._v(" "),t("p",[s._v("AOF 相关部分")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211226154227.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211226154231.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("appendfsync everysec \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# appendfsync aof 持久化策略的配置")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# no 表示不执行 fsync，由操作系统保证数据同步到磁盘，速度最快。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# always表示每次写入都执行 fsync，以保证数据同步到磁盘。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# everysec表示每秒执行一次 fsync，可能会导致丢失这 1s数据。")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);