(window.webpackJsonp=window.webpackJsonp||[]).push([[522],{872:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("Centos查看端口占用情况命令，比如查看80端口占用情况使用如下命令：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("lsof -i tcp:80\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("列出所有端口")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("netstat -ntlp\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),s._v(" "),a("h3",{attrs:{id:"开启端口-以80端口为例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开启端口-以80端口为例"}},[s._v("#")]),s._v(" 开启端口（以80端口为例）")]),s._v(" "),a("p",[s._v("方法一：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/sbin/iptables -I INPUT -p tcp --dport 80 -j ACCEPT 写入修改\n/etc/init.d/iptables save   保存修改\nservice iptables restart    重启防火墙，修改生效\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("方法二：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("vi /etc/sysconfig/iptables 打开配置文件加入如下语句:\n\n-A INPUT -p tcp -m state --state NEW -m tcp --dport 80 -j ACCEPT   重启防火墙，修改完成\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"关闭端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关闭端口"}},[s._v("#")]),s._v(" 关闭端口")]),s._v(" "),a("p",[s._v("方法一：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/sbin/iptables -I INPUT -p tcp --dport 80 -j DROP   写入修改\n/etc/init.d/iptables save   保存修改\nservice iptables restart    重启防火墙，修改生效\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("方法二：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("vi /etc/sysconfig/iptables  打开配置文件加入如下语句:\n-A INPUT -p tcp -m state --state NEW -m tcp --dport 80 -j DROP   重启防火墙，修改完成\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"查看端口状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看端口状态"}},[s._v("#")]),s._v(" 查看端口状态")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/etc/init.d/iptables status\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("有时启动应用时会发现端口已经被占用，或者是感觉有些端口自己没有使用却发现是打开的。这时我们希望知道是哪个应用/进程在使用该端口。")]),s._v(" "),a("p",[s._v("CentOS下可以用netstat或者lsof查看，Windows下也可以用netstat查看，不过参数会不同\nLinux:")]),s._v(" "),a("p",[s._v("netstat -nap #会列出所有正在使用的端口及关联的进程/应用\nlsof -i :portnumber #portnumber要用具体的端口号代替，可以直接列出该端口听使用进程/应用")]),s._v(" "),a("ol",[a("li",[s._v("检查端口被哪个进程占用")])]),s._v(" "),a("p",[s._v("代码如下复制代码")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("netstat -lnp|grep 88   #88请换为你的apache需要的端口，如：80\nSSH执行以上命令，可以查看到88端口正在被哪个进程使用。如下图，进程号为 1777 。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("查看进程的详细信息")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ps 1777\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("SSH执行以上命令。查看相应进程号的程序详细路径。如下图。")]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[s._v("杀掉进程，重新启动apache")])]),s._v(" "),a("p",[s._v("代码如下复制代码")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("kill -9 1777        #杀掉编号为1777的进程（请根据实际情况输入）\nservice httpd start #启动apache\nSSH执行以上命令，如果没有问题，apache将可以正常启动。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("Windows系统:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("netstat -nao #会列出端口关联的的进程号，可以通过任务管理器查看是哪个任务\n最后一列为程序PID，再通过tasklist命令：tasklist | findstr 2724\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("再通过任务管理结束掉这个程序就可以了")])])}),[],!1,null,null,null);a.default=n.exports}}]);