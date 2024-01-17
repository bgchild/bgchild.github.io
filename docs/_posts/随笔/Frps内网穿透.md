---
title: frps搭建内网穿透服务
date: 2021-12-15 21:51:33
categories: 
  - Linux
tags: 
  - Frps
permalink: /pages/b3b56e/
sidebar: auto
author: 
  name: AnWen
  link: https://github.com/micolor
---

# 服务器搭建

下载到指定目录

```shell
wget https://github.com/fatedier/frp/releases/download/v0.38.0/frp_0.38.0_linux_amd64.tar.gz
```

编辑frps.ini配置文件

```shell
[common]
# 服务器端端口                                                                 
bind_port = 7000
# 客户端连接凭证                                                
privilege_token = zxcvbnm
# 最大连接数                                    
max_pool_count = 5                                                    
# 客户端映射的端口                                               
vhost_http_port = 80                                                 
# 服务器看板的访问端口                                                
dashboard_port = 7500                                     
dashboard_user = admin                                      
dashboard_pwd = admin
```

启动程序

```shell
./frps -c ./frps.ini
```

启动之后查看日志， 提示Start frps success基本上就启动成功

```shell
[I] [service.go:130] frps tcp listen on 0.0.0.0:7000
[I] [service.go:172] http service listen on 0.0.0.0:8080
[I] [root.go:207] Start frps success
```

# 客户端搭建

客户端是通常是windows
下载frps客户端文件: [下载地址](https://github.com/fatedier/frp/releases)
选择frp_0.21.0_windows_amd64.zip 64位文件
然后解压，配置frpc.ini文件，配置如下:

```shell
[common]
# 服务器地址
server_addr = ip
# 服务器端口
server_port = 7000
# 服务器连接凭证
privilege_token = zxcvbnm

[web]
privilege_mode = true
remote_port = 6000
type = http
local_ip = 127.0.0.1
# 本地映射的端口
local_port = 80
use_gzip = true
# 绑定域名 域名需要配置好解析，解析到服务器
custom_domains = xxx.cn
```

客户端启动

新建start.bat，内容如下

```shell
frpc.exe -c frpc.ini
```



# 服务器服务后台运行及自动启动

vi /etc/systemd/system/frps.service

```shell
[Unit]
Description=frps daemon
After=syslog.target network.target
Wants=network.target
[Service]
Type=simple
ExecStart=/home/frp/frps -c /home/frp/frps.ini
Restart= always
RestartSec=1min
[Install]
WantedBy=multi-user.target
```

启动并设为开机自启

```shell
systemctl start frps //启动
systemctl status frps //状态查询
systemctl enable frps //开机启动
```

