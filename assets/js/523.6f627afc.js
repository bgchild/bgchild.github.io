(window.webpackJsonp=window.webpackJsonp||[]).push([[523],{873:function(s,n,a){"use strict";a.r(n);var e=a(0),r=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),n("ol",[n("li",[s._v("参照：https://www.runoob.com/docker/docker-install-centos.html")]),s._v(" "),n("li",[s._v("命令大全：https://www.runoob.com/docker/docker-command-manual.html\n")])]),s._v(" "),n("h2",{attrs:{id:"常用操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常用操作"}},[s._v("#")]),s._v(" 常用操作")]),s._v(" "),n("h3",{attrs:{id:"_1-容器管理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-容器管理"}},[s._v("#")]),s._v(" 1. 容器管理")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#查看运行容器\ndocker ps\n#查看所有容器\ndocker ps -a\n#停止运行容器\ndocker stop [容器名称或id]\n#运行容器\ndocker start [容器名称或id]\n#进入容器\ndocker exec -it [容器名称或id] /bin/bash\n#运行容器 随机分配端口（大写p）\ndocker run -d -P --name [容器名称] [镜像名]:[tag]\n#指定端口（小写p）80内部容器端口\ndocker run -d -p [本机端口]:[容器端口] --name [容器名称] [镜像名]:[tag]\n#删除已有容器\ndocker rm [容器id]\n#删除所有未运行容器\ndocker rm  `docker ps -a -q`\n#查看容器日志\ndocker logs [容器id]\n#拷贝文件到容器\ndocker cp [源文件] [容器名称或id]:[目标路径]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])]),n("h3",{attrs:{id:"_2-镜像管理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-镜像管理"}},[s._v("#")]),s._v(" 2. 镜像管理")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('#查看本地镜像\ndocker images\n#删除image镜像\ndocker rmi [镜像id多个空格隔开]\n#删除所有镜像\ndocker rmi  `docker images -a -q`\n#导出导入容器\ndocker export [容器id] > [压缩包]\ncat [压缩包] | docker import [压缩包] [镜像名]:[tag]\ndocker import http://example.com/exampleimage.tgz [镜像名]:[tag]\n#将现有容器创建成镜像\ndocker commit -a ["作者"] -m ["描述"] [容器名称或id] [镜像名]:[tag]\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h3",{attrs:{id:"_3-dockerfile制作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-dockerfile制作"}},[s._v("#")]),s._v(" 3.  DockerFile制作")]),s._v(" "),n("ul",[n("li",[s._v("DockerFile 案例")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('FROM centos\nMAINTAINER laok "ann0.0@hotmail.com"\n#nginx\nADD nginx-1.17.5.tar.gz /usr/local/src\n#running required command\nRUN yum install -y gcc gcc-c++ make automake libtool\nRUN yum install -y pcre pcre-devel zlib zlib-devel openssl openssl-devel\nRUN useradd -M -s /sbin/nologin nginx\nWORKDIR /usr/local/src/nginx-1.17.5\n#execute command to compile nginx\nRUN ./configure --prefix=/usr/local/nginx && make && make install\nENV PATH /usr/local/nginx/sbin:$PATH\nRUN mkdir -m 777 /usr/local/bin/www\nADD nginx.conf /usr/local/nginx/conf\n#jdk\nADD jdk-8u191-linux-x64.tar.gz /usr/local/src\nRUN cp -rf /usr/local/src/jdk1.8.0_191 /usr/local/jdk\n#add java env\nENV JAVA_HOME /usr/local/jdk\nENV JRE_HOME $JAVA_HOME/jre\nENV CLASSPATH $CLASSPATH:$JAVA_HOME/lib:$JAVA_HOME/lib\nENV PATH $PATH:$JAVA_HOME/bin:$JRE_HOME/bin\n#tomcat\nADD apache-tomcat-8.5.35.tar.gz /usr/local/src\nRUN cp -rf /usr/local/src/apache-tomcat-8.5.35 /usr/local/bin/tomcat4micolor\nRUN cp -rf /usr/local/src/apache-tomcat-8.5.35 /usr/local/bin/tomcat4interfaces\nWORKDIR /usr/local/bin/tomcat4interfaces/conf/\nRUN sed -i \'s|"8005"|"8006"|\' server.xml\nRUN sed -i \'s|"8080"|"8081"|\' server.xml\nRUN cp -rf /usr/local/src/apache-tomcat-8.5.35 /usr/local/bin/tomcat4extra\nWORKDIR /usr/local/bin/tomcat4extra/conf/\nRUN sed -i \'s|"8005"|"8007"|\' server.xml\nRUN sed -i \'s|"8080"|"8082"|\' server.xml\n#del install files\nRUN rm -rf /usr/local/src/*\n#EXPOSE 80 443 8080\nEXPOSE 80 81 443\nADD entrypoint.sh /usr/local/src\nRUN chmod -R 777 /usr/local/src/entrypoint.sh\nENTRYPOINT ["/usr/local/src/entrypoint.sh"]\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br")])]),n("ul",[n("li",[s._v("镜像打包 "),n("code",[s._v("docker build -t [镜像名]:[tag] .")])])]),s._v(" "),n("h3",{attrs:{id:"_4-仓库管理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-仓库管理"}},[s._v("#")]),s._v(" 4. 仓库管理")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#登入\ndocker login\n#登出\ndocker logout\n#镜像搜索拉取\ndocker search [镜像名称]\ndocker pull [镜像名称]\n#推送镜像\ndocker push [镜像名称]:[tag]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h3",{attrs:{id:"_5-docker-compose制作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-docker-compose制作"}},[s._v("#")]),s._v(" 5. docker-compose制作")]),s._v(" "),n("p",[s._v("参考地址：https://www.runoob.com/docker/docker-compose.html")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('version: "3" \n  service01:\n    image: [镜像名称]:[tag]\n    container_name: [容器名称]\n    ports: \n      - "[本机端口]:[容器端口]"\n      - .....\n    volumes:\n      - [源文件地址]:[容器地址]\n      - .....\n    links:\n    - [service02]\n    - ...\n    network_mode: "host"\n    restart: always\n    \n  service02:\n    ......\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("h3",{attrs:{id:"_6-docker备份迁移"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-docker备份迁移"}},[s._v("#")]),s._v(" 6. docker备份迁移")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#容器保存为镜像\ndocker commit mynginx mynginx_i\n#镜像备份\ndocker save -o mynginx.tar mynginx_i\n#镜像恢复与迁移\ndocker load -i mynginx.tar\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])])])}),[],!1,null,null,null);n.default=r.exports}}]);