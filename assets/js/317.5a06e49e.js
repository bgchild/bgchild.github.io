(window.webpackJsonp=window.webpackJsonp||[]).push([[317],{668:function(s,a,e){"use strict";e.r(a);var t=e(0),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#什么是-helm"}},[s._v("什么是 Helm？")])]),a("li",[a("a",{attrs:{href:"#helm-架构"}},[s._v("Helm 架构")]),a("ul",[a("li",[a("a",{attrs:{href:"#重要概念"}},[s._v("重要概念")])]),a("li",[a("a",{attrs:{href:"#组件"}},[s._v("组件")])])])]),a("li",[a("a",{attrs:{href:"#安装-helm"}},[s._v("安装 Helm")])]),a("li",[a("a",{attrs:{href:"#helm-的常用命令"}},[s._v("Helm 的常用命令")])]),a("li",[a("a",{attrs:{href:"#chart-详解"}},[s._v("chart 详解")]),a("ul",[a("li",[a("a",{attrs:{href:"#目录结构"}},[s._v("目录结构")])]),a("li",[a("a",{attrs:{href:"#redis-chart-实践"}},[s._v("Redis chart 实践")])])])])])]),a("p"),s._v(" "),a("h2",{attrs:{id:"什么是-helm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-helm"}},[s._v("#")]),s._v(" 什么是 Helm？")]),s._v(" "),a("p",[s._v("Kubernetes 包管理器")]),s._v(" "),a("p",[s._v("Helm 是查找、分享和使用软件构件 Kubernetes 的最优方式。")]),s._v(" "),a("p",[s._v("Helm 管理名为 chart 的 Kubernetes 包的工具。Helm 可以做以下的事情：")]),s._v(" "),a("ul",[a("li",[s._v("从头开始创建新的 chart")]),s._v(" "),a("li",[s._v("将 chart 打包成归档(tgz)文件")]),s._v(" "),a("li",[s._v("与存储 chart 的仓库进行交互")]),s._v(" "),a("li",[s._v("在现有的 Kubernetes 集群中安装和卸载 chart")]),s._v(" "),a("li",[s._v("管理与 Helm 一起安装的 chart 的发布周期")])]),s._v(" "),a("p",[s._v("对于Helm，有三个重要的概念：")]),s._v(" "),a("ul",[a("li",[s._v("chart 创建Kubernetes应用程序所必需的一组信息")]),s._v(" "),a("li",[s._v("config 包含了可以合并到打包的chart中的配置信息，用于创建一个可发布的对象")]),s._v(" "),a("li",[s._v("release 是一个与特定配置相结合的chart的运行实例")])]),s._v(" "),a("h2",{attrs:{id:"helm-架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#helm-架构"}},[s._v("#")]),s._v(" Helm 架构")]),s._v(" "),a("h3",{attrs:{id:"重要概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重要概念"}},[s._v("#")]),s._v(" 重要概念")]),s._v(" "),a("ul",[a("li",[s._v("chart：chart 创建 Kubernetes 应用程序所必需的一组信息")]),s._v(" "),a("li",[s._v("config：config 包含了可以合并到打包的 chart 中的配置信息，用于创建一个可发布的对象")]),s._v(" "),a("li",[s._v("release：release 是一个与特定配置相结合的 chart 的运行实例")])]),s._v(" "),a("h3",{attrs:{id:"组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件"}},[s._v("#")]),s._v(" 组件")]),s._v(" "),a("blockquote",[a("p",[s._v("Helm 客户端")])]),s._v(" "),a("p",[a("strong",[s._v("Helm 客户端")]),s._v(" 是终端用户的命令行客户端。负责以下内容：")]),s._v(" "),a("ul",[a("li",[s._v("本地 chart 开发")]),s._v(" "),a("li",[s._v("管理仓库")]),s._v(" "),a("li",[s._v("管理发布")]),s._v(" "),a("li",[s._v("与 Helm 库建立接口\n"),a("ul",[a("li",[s._v("发送安装的 chart")]),s._v(" "),a("li",[s._v("发送升级或卸载现有发布的请求")])])])]),s._v(" "),a("blockquote",[a("p",[s._v("Helm 库")])]),s._v(" "),a("p",[a("strong",[s._v("Helm 库")]),s._v(" 提供执行所有 Helm 操作的逻辑。与 Kubernetes API 服务交互并提供以下功能：")]),s._v(" "),a("ul",[a("li",[s._v("结合 chart 和配置来构建版本")]),s._v(" "),a("li",[s._v("将 chart 安装到 Kubernetes 中，并提供后续发布对象")]),s._v(" "),a("li",[s._v("与 Kubernetes 交互升级和卸载 chart")])]),s._v(" "),a("p",[s._v("独立的 Helm 库封装了 Helm 逻辑以便不同的客户端可以使用它。")]),s._v(" "),a("h2",{attrs:{id:"安装-helm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-helm"}},[s._v("#")]),s._v(" 安装 Helm")]),s._v(" "),a("p",[s._v("安装文档："),a("code",[s._v("https://helm.sh/docs/intro/install")]),s._v("。")]),s._v(" "),a("p",[s._v("下载二进制文件")]),s._v(" "),a("p",[s._v("下载 Helm：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /opt/k8s\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://get.helm.sh/helm-v3.2.3-linux-amd64.tar.gz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("解压")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("tar -zxvf helm-v3.2.3-linux-amd64.tar.gz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("将解压目录下的 helm 程序移动到 "),a("code",[s._v("usr/local/bin/helm")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" helm usr/local/bin\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("添加 Helm 仓库")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加仓库")]),s._v("\nhelm repo "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" ingress-nginx https://kubernetes.github.io/ingress-nginx "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ingress-nginx 源")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 仓库源，任选或者都添加")]),s._v("\nhelm repo "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" bitnami https://charts.bitnami.com/bitnami "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 微软镜像")]),s._v("\nhelm repo "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" aliyun https://apphub.aliyuncs.com/stable "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 阿里镜像")]),s._v("\nhelm repo "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" azure http://mirror.azure.cn/kubernetes/charts\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看仓库列表")]),s._v("\nhelm repo list \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 搜索 ingress-nginx")]),s._v("\nhelm search repo ingress-nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h2",{attrs:{id:"helm-的常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#helm-的常用命令"}},[s._v("#")]),s._v(" Helm 的常用命令")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("命令")]),s._v(" "),a("th",[s._v("功能")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("helm repo")]),s._v(" "),a("td",[s._v("列出、增加、更新、删除 chart 仓库")])]),s._v(" "),a("tr",[a("td",[s._v("helm search")]),s._v(" "),a("td",[s._v("使用关键词搜索 chart")])]),s._v(" "),a("tr",[a("td",[s._v("helm pull")]),s._v(" "),a("td",[s._v("拉取远程仓库中的 chart 到本地")])]),s._v(" "),a("tr",[a("td",[s._v("helm create")]),s._v(" "),a("td",[s._v("在本地创建新的 chart")])]),s._v(" "),a("tr",[a("td",[s._v("helm dependency")]),s._v(" "),a("td",[s._v("管理 chart 依赖")])]),s._v(" "),a("tr",[a("td",[s._v("helm install")]),s._v(" "),a("td",[s._v("安装 chart")])]),s._v(" "),a("tr",[a("td",[s._v("helm list")]),s._v(" "),a("td",[s._v("列出所有 release")])]),s._v(" "),a("tr",[a("td",[s._v("helm lint")]),s._v(" "),a("td",[s._v("检查 chart 配置是否有误")])]),s._v(" "),a("tr",[a("td",[s._v("helm package")]),s._v(" "),a("td",[s._v("打包本地 chart")])]),s._v(" "),a("tr",[a("td",[s._v("helm rollback")]),s._v(" "),a("td",[s._v("回滚 release 到历史版本")])]),s._v(" "),a("tr",[a("td",[s._v("helm uninstall")]),s._v(" "),a("td",[s._v("卸载 release")])]),s._v(" "),a("tr",[a("td",[s._v("helm upgrade")]),s._v(" "),a("td",[s._v("升级 release")])])])]),s._v(" "),a("h2",{attrs:{id:"chart-详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chart-详解"}},[s._v("#")]),s._v(" chart 详解")]),s._v(" "),a("h3",{attrs:{id:"目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[s._v("#")]),s._v(" 目录结构")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("mychart\n├── Chart.yaml\n├── charts "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 该目录保存其他依赖的 chart（子 chart）")]),s._v("\n├── templates "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chart 配置模板，用于渲染最终的 Kubernetes YAML 文件")]),s._v("\n│   ├── NOTES.txt "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用户运行 helm install 时候的提示信息")]),s._v("\n│   ├── _helpers.tpl "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用于创建模板时的帮助类")]),s._v("\n│   ├── deployment.yaml "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Kubernetes deployment 配置")]),s._v("\n│   ├── ingress.yaml "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Kubernetes ingress 配置")]),s._v("\n│   ├── service.yaml "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Kubernetes service 配置")]),s._v("\n│   ├── serviceaccount.yaml "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Kubernetes serviceaccount 配置")]),s._v("\n│   └── tests\n│       └── test-connection.yaml\n└── values.yaml "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 定义 chart 模板中的自定义配置的默认值，可以在执行 helm install 或 helm update 的时候覆盖")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h3",{attrs:{id:"redis-chart-实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-chart-实践"}},[s._v("#")]),s._v(" Redis chart 实践")]),s._v(" "),a("blockquote",[a("p",[s._v("修改 helm 源")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看默认仓库")]),s._v("\nhelm repo list\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加仓库源，任选或者都添加")]),s._v("\nhelm repo "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" bitnami https://charts.bitnami.com/bitnami\nhelm repo "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" aliyun https://apphub.aliyuncs.com/stable\nhelm repo "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" azure http://mirror.azure.cn/kubernetes/charts\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("blockquote",[a("p",[s._v("搜索 redis chart")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 搜索 redis chart")]),s._v("\nhelm search repo redis\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看安装说明")]),s._v("\nhelm show readme bitnami/redis\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("blockquote",[a("p",[s._v("修改配置安装")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 先将 chart 拉到本地")]),s._v("\nhelm pull bitnami/redis\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解压后，修改 values.yaml 中的参数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-xvf")]),s._v(" redis-17.11.6.tgz\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改 storageClass 为 managed-nfs-storage，前面有创建过该 nfs 应用")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置 redis 密码 password")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改集群架构 architecture，默认是主从（replication，3 个节点），可以修改为 standalone 单机模式")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改实例存储大小 persistence.size 为需要的大小")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改 service.nodePorts.redis 向外暴露端口，范围 <30000-32767>")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装操作")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建命名空间")]),s._v("\nkubectl create namespace redis\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/\nhelm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" redis ./redis "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" redis\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("blockquote",[a("p",[s._v("查看安装情况")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看 helm 安装列表")]),s._v("\nhelm list "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" redis\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看 redis 命名空间下所有对象信息")]),s._v("\nkubectl get all "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" redis\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("blockquote",[a("p",[s._v("升级与回滚")])]),s._v(" "),a("p",[s._v("要想升级 chart 可以修改本地的 chart 配置并执行：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("helm upgrade "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("RELEASE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("CHART"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("flags"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nhelm upgrade redis ./redis\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("使用 helm ls 的命令查看当前运行的 chart 的 release 版本，并使用下面的命令回滚到历史版本：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("helm rollback "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("RELEASE"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("REVISION"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("flags"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看历史")]),s._v("\nhelm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("history")]),s._v(" redis\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 回退到上一版本")]),s._v("\nhelm rollback redis\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 回退到指定版本")]),s._v("\nhelm rollback redis "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("blockquote",[a("p",[s._v("helm 卸载 redis")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("helm delete redis "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" redis\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("顺便记得把 PVC 也删除，它们不是级联删除。")])])}),[],!1,null,null,null);a.default=n.exports}}]);