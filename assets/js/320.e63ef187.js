(window.webpackJsonp=window.webpackJsonp||[]).push([[320],{671:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#kubernetes-dashboard"}},[s._v("Kubernetes Dashboard")]),a("ul",[a("li",[a("a",{attrs:{href:"#安装"}},[s._v("安装")])]),a("li",[a("a",{attrs:{href:"#配置所有权限账号"}},[s._v("配置所有权限账号")])])])]),a("li",[a("a",{attrs:{href:"#kubesphere"}},[s._v("kubesphere")]),a("ul",[a("li",[a("a",{attrs:{href:"#本地存储动态-pvc"}},[s._v("本地存储动态 PVC")])]),a("li",[a("a",{attrs:{href:"#安装"}},[s._v("安装")])]),a("li",[a("a",{attrs:{href:"#启用可插拔组件"}},[s._v("启用可插拔组件")])])])]),a("li",[a("a",{attrs:{href:"#rancher"}},[s._v("Rancher")])]),a("li",[a("a",{attrs:{href:"#kuboard"}},[s._v("Kuboard")])])])]),a("p"),s._v(" "),a("h2",{attrs:{id:"kubernetes-dashboard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-dashboard"}},[s._v("#")]),s._v(" Kubernetes Dashboard")]),s._v(" "),a("p",[s._v("Kubernetes Dashboard 是 Kubernetes 集群的基于 Web 的通用 UI。它允许用户管理在群集中运行的应用程序并对其进行故障排除，以及管理群集本身。")]),s._v(" "),a("p",[s._v("由于 Kubernetes API 版本之间的重大更改，某些功能可能无法在仪表板中正常运行，这也导致了 kubernetes-dashboard 的兼容性问题比较严重，最好一个版本使用一个版本最稳定的 dashboard。")]),s._v(" "),a("h3",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载官方部署配置文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://raw.githubusercontent.com/kubernetes/dashboard/v2.7.0/aio/deploy/recommended.yaml\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改属性")]),s._v("\nkind: Service\napiVersion: v1\nmetadata:\n  labels:\n    k8s-app: kubernetes-dashboard\n  name: kubernetes-dashboard\n  namespace: kubernetes-dashboard\nspec:\n  type: NodePort   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#新增")]),s._v("\n  ports:\n    - port: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v("\n      targetPort: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8443")]),s._v("\n  selector:\n    k8s-app: kubernetes-dashboard\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建资源")]),s._v("\nkubectl apply "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" recommend.yaml\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看资源是否已经就绪")]),s._v("\nkubectl get all "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" kubernetes-dashboard "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" wide\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 访问测试")]),s._v("\nhttps://节点ip:端口\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("h3",{attrs:{id:"配置所有权限账号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置所有权限账号"}},[s._v("#")]),s._v(" 配置所有权限账号")]),s._v(" "),a("p",[s._v("创建账号配置文件")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" dashboard-admin.yaml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("配置文件")]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" v1 \n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ServiceAccount \n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" \n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("k8s-app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" kubernetes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("dashboard \n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" dashboard"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("admin \n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("namespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" kubernetes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("dashboard \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" rbac.authorization.k8s.io/v1 \n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ClusterRoleBinding \n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" \n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" dashboard"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("admin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("cluster"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("role \n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("roleRef")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" \n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiGroup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" rbac.authorization.k8s.io \n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ClusterRole \n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" cluster"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("admin \n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("subjects")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ServiceAccount\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" dashboard"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("admin\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("namespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" kubernetes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("dashboard\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[s._v("创建资源")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("kubectl apply "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" dashboard-admin.yaml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("查看账号信息")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("kubectl describe serviceaccount dashboard-admin "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" kubernetes-dashboard\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("获取账号的 token 登录 dashboard")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("kubectl describe secrets dashboard-admin-token-5crbd "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" kubernetes-dashboard\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"kubesphere"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubesphere"}},[s._v("#")]),s._v(" kubesphere")]),s._v(" "),a("p",[s._v("官方地址："),a("code",[s._v("https://kubesphere.io/zh/")])]),s._v(" "),a("p",[s._v("KubeSphere 愿景是打造一个以 Kubernetes 为内核的云原生分布式操作系统，它的架构可以非常方便地使第三方应用与云原生生态组件进行即插即用（plug-and-play）的集成，支持云原生应用在多云与多集群的统一分发和运维管理。")]),s._v(" "),a("h3",{attrs:{id:"本地存储动态-pvc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地存储动态-pvc"}},[s._v("#")]),s._v(" 本地存储动态 PVC")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在所有节点安装 iSCSI 协议客户端（OpenEBS 需要该协议提供存储支持）")]),s._v("\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" iscsi-initiator-utils "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置开机启动")]),s._v("\nsystemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--now")]),s._v(" iscsid\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动服务")]),s._v("\nsystemctl start iscsid\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看服务状态")]),s._v("\nsystemctl status iscsid\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 OpenEBS ")]),s._v("\nkubectl apply "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" https://openebs.github.io/charts/openebs-operator.yaml\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看状态（下载镜像可能需要一些时间）")]),s._v("\nkubectl get all "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" openebs\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在主节点创建本地 storage class")]),s._v("\nkubectl apply "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" default-storage-class.yaml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("default-storage-class.yaml 内容：")]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" StorageClass\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" storage.k8s.io/v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" local\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("annotations")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cas.openebs.io/config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token scalar string"}},[s._v('\n      - name: StorageType\n        value: "hostpath"\n      - name: BasePath\n        value: "/var/openebs/local/"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kubectl.kubernetes.io/last-applied-configuration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token scalar string"}},[s._v('\n      {"apiVersion":"storage.k8s.io/v1","kind":"StorageClass","metadata":{"annotations":{"cas.openebs.io/config":"-\n      name: StorageType\\n  value: \\"hostpath\\"\\n- name: BasePath\\n  value:\n      \\"/var/openebs/local/\\"\\n","openebs.io/cas-type":"local","storageclass.beta.kubernetes.io/is-default-class":"true","storageclass.kubesphere.io/supported-access-modes":"[\\"ReadWriteOnce\\"]"},"name":"local"},"provisioner":"openebs.io/local","reclaimPolicy":"Delete","volumeBindingMode":"WaitForFirstConsumer"}')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("openebs.io/cas-type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" local\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("storageclass.beta.kubernetes.io/is-default-class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'true'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("storageclass.kubesphere.io/supported-access-modes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[\"ReadWriteOnce\"]'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("provisioner")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" openebs.io/local\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("reclaimPolicy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Delete\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumeBindingMode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" WaitForFirstConsumer\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("h3",{attrs:{id:"安装-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-2"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装资源")]),s._v("\nkubectl apply "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" https://github.com/kubesphere/ks-installer/releases/download/v3.3.1/kubesphere-installer.yaml\nkubectl apply "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" https://github.com/kubesphere/ks-installer/releases/download/v3.3.1/cluster-configuration.yaml\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查安装日志")]),s._v("\nkubectl logs "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" kubesphere-system "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("kubectl get pod "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" kubesphere-system "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'app in (ks-install, ks-installer)'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("jsonpath")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{.items[0].metadata.name}'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看端口")]),s._v("\nkubectl get svc/ks-console "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" kubesphere-system\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认端口是 30880，如果是云服务商，或开启了防火墙，记得要开放该端口")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 登录控制台访问，账号密码：admin/P@88w0rd")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h3",{attrs:{id:"启用可插拔组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启用可插拔组件"}},[s._v("#")]),s._v(" 启用可插拔组件")]),s._v(" "),a("p",[s._v("地址："),a("code",[s._v("https://kubesphere.io/zh/docs/v3.3/pluggable-components/")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"rancher"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rancher"}},[s._v("#")]),s._v(" Rancher")]),s._v(" "),a("p",[s._v("地址："),a("code",[s._v("https://www.rancher.cn/")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"kuboard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kuboard"}},[s._v("#")]),s._v(" Kuboard")]),s._v(" "),a("p",[s._v("地址："),a("code",[s._v("https://www.kuboard.cn/")]),s._v("。")])])}),[],!1,null,null,null);a.default=n.exports}}]);