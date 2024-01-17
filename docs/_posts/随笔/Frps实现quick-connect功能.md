---
title: frps，实现quick connect功能
date: 2020-01-03 21:51:33
categories: 
  - Linux
tags: 
  - Frps
permalink: /pages/a66cb6/
sidebar: auto
author: 
  name: AnWen
  link: https://github.com/micolor
---

frps，实现quick connect功能
<!--MORE--> 
一、申请免费的vps：https://cloud.google.com/free/

二、申请完vps后， 安装frps服务端：
第一步：
1、获取root 权限
sudo su - 
2、#安装git客户端
yum install -y git
3、获取一键安装frps脚本
git clone https://github.com/clangcn/onekey-install-shell.git
4、进去frps目录安装
cd onekey-install-shell/frps
sh version.sh
sh install-frps.sh install

然后选择2，就可以一直往下按回车


安装完后，会看到相关的账户密码信息，请记录下来。
第二步：
开通vps上的防火墙，在vpc网络–> 防火墙策略下新建一条防火墙，放开所有端口和所有来源ip（假如要安全的话，按需开通端口）,如下图


第三步：
启动frps

frps start


三、申请域名
1、在godaddy网站：https://www.godaddy.com/， 申请一级域名，如： nayfeng.com
2、新建一条A记录指向刚才新建vps的外网ip，如nas。那么我们访问nas.nafeng.com，就是指向刚才新建的vps上

四、在vps上配置frps 服务端

1、进入fprs的配置模式
frps config
2、新增配置信息，在配置文件最下面，新增subdomain_host = nayfeng.com，然后按esc，:，x 来保存配置信息

3、重启fprs服务使其生效
frps restart
如下图所示的配置信息，

五、在群晖nas上配置frp 客户端
1、通过security crt 或者xshell的客户端，远程登录我们的nas

2、下载frps客户端 wget https://github.com/fatedier/frp/releases/download/v0.21.0/frp_0.21.0_linux_amd64.tar.gz
3、解压
tar zxvf frp_0.21.0_linux_amd64.tar.gz
4、修改配置文件
cd frp_0.20.0_linux_amd64
vi frpc.ini

frpc.ini的参考配置信息如下，只要把我们的中文说明的两行根据实际情况填写就可以了，部分人发现配置文件有异常的话，请把中文的备注信息删除：

[common]
server_addr = 1.1.1.1   #用个人vps公网ip代替
server_port = 5443
token = tian-xie-token    #填写自己vps上frps的token配置代替

admin_addr = 127.0.0.1
admin_port = 7001
admin_user = admin
admin_pwd = admin

[ssh]
type = tcp
local_ip = 127.0.0.1
local_port = 22
remote_port = 6000

[plex]
type = tcp
local_ip = 127.0.0.1
local_port = 32400
remote_port = 32400

[nas_5000]
type = tcp
local_ip = 127.0.0.1
local_port = 5000
remote_port = 5000

[nas_5001]
type = tcp
local_ip = 127.0.0.1
local_port = 5001
remote_port = 5001


[nas_web]
type = http
local_ip = 127.0.0.1
local_port = 5000
subdomain = nas

[nas_webs]
type = https
local_ip = 127.0.0.1
local_port = 5001
subdomain = nas
5、启动frpc 客户端服务


nohup ./frpc -c frpc.ini &
在此你就可以在外网连你家的黑群晖了。


六、使其更完美。
1、在黑群晖上装一个dns server套件
2、在dns server 上添加刚申请的域名，并新建一条A记录，指向我们家里的nas ip
3、在路由器上设置分配dns server 的ip  为我们nas 存储的ip
4、黑群晖开机启动frps