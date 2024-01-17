---
title: 安装V2Ray通过ws+tls转发
date: 2020-01-04 15:56:04
categories: 
  - Linux
tags: 
  - v2ray
permalink: /pages/1f3178/
sidebar: auto
author: 
  name: AnWen
  link: https://github.com/micolor
---



### 申请vps
系统选择Debain9或以上
### 域名
申请域名并解析到你的vps的ip
### 开启bbr
1. 使用Xshell之类的程序连接你的Debian9系统服务器，然后全选如下命令粘贴到Xshell执行（作用：改变系统变量）
```
echo "net.core.default_qdisc=fq" >> /etc/sysctl.conf
echo "net.ipv4.tcp_congestion_control=bbr" >> /etc/sysctl.conf
```
2. 然后执行如下命令（作用：保存上一步的修改并生效）
```
sysctl -p
```
3. 最后执行如下命令，如果显示tcp_bbr +数字 说明BBR已开启成功。
```
lsmod | grep bbr
```

### 安装nginx
```
sudo apt update
sudo apt install nginx
```

### 安装官网v2Ray
1. 先检查机器和服务器的时间
```
date -R
Sat, 21 Oct 2017 14:27:52 +0800
```
2. 如果时区不一样，请参考如何修改Linux时区
```
$ sudo rm -rf /etc/localtime
$ sudo ln -s /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
```
3. 执行官方安装脚本
```
bash <(curl -L -s https://install.direct/go.sh)
```
4. 配置config文件、可以使用v2Ray配置生成器
https://tools.sprov.xyz/v2ray/
修改配置文件 /etc/v2Ray/config.json

参考配置文件
```
{
    "log": {
        "access": "/var/log/v2ray/access.log",
        "error": "/var/log/v2ray/error.log",
        "loglevel": "warning"
    },
    "inbound": {
        "port": 233,
        "protocol": "vmess",
        "settings": {
            "clients": [
                {
                    "id": "c885b310-f53d-2229-bae6-3faab20092a6",
                    "level": 1,
                    "alterId": 64
                }
            ]
        },
        "streamSettings": {
            "network": "ws",
            "security": "tls",
            "tlsSettings": {
                "serverName": "niubook.com",
                "certificates": [
                    {
                        "certificateFile": "/etc/letsencrypt/live/niubook.com/fullchain.pem",
                        "keyFile": "/etc/letsencrypt/live/niubook.com/privkey.pem"
                    }
                ]
            },
            "wsSettings": {
                "path": "/laok",
                "headers": {}
            }
        }
    },
    "outbound": {
        "protocol": "freedom",
        "settings": {}
    },
    "inboundDetour": [],
    "outboundDetour": [
        {
            "protocol": "blackhole",
            "settings": {},
            "tag": "blocked"
        }
    ],
    "routing": {
        "strategy": "rules",
        "settings": {
            "rules": [
                {
                    "type": "field",
                    "ip": [
                        "0.0.0.0/8",
                        "10.0.0.0/8",
                        "100.64.0.0/10",
                        "127.0.0.0/8",
                        "169.254.0.0/16",
                        "172.16.0.0/12",
                        "192.0.0.0/24",
                        "192.0.2.0/24",
                        "192.168.0.0/16",
                        "198.18.0.0/15",
                        "198.51.100.0/24",
                        "203.0.113.0/24",
                        "::1/128",
                        "fc00::/7",
                        "fe80::/10"
                    ],
                    "outboundTag": "blocked"
                }
            ]
        }
    }
}
```

### 开放端口
```
iptables -A INPUT -p tcp --dport 233 -j ACCEPT
然后我们保存后退出。
iptables-save > /etc/iptables.up.rules
/etc/init.d/ssh restart
```
