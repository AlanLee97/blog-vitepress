# LVS

Linux Virtual Server

| 名称 | IP | 软件 |
| --- | --- | --- |
| DR(Master) | 192.168.1.20
vip:192.168.1.100 | keepalived,ipvsadm |
| DR(BACKUP) | 192.168.1.20
vip:192.168.1.100 | keepalived,ipvsadm |
| RS1 | 192.168.1.22
隐藏vip:192.168.1.100 | nginx |
| RS2 | 192.168.1.23
隐藏vip:192.168.1.100 | nginx |


## 配置DR服务器

```
ifconfig ens33:192.168.1.100/24
route add -host 192.168.1.100 dev ens33
ipvsadm -A -t 192.168.1.100:80 -s wlc
ipvsadm -a -t 192.168.1.100:80 -s wlc -r 192.168.1.22 -g -w 1
ipvsadm -a -t 192.168.1.100:80 -s wlc -r 192.168.1.23 -g -w 1
ipvsadm -Ln
```

```
route add -host 192.168.1.100 dev ens33
```

## 配置RS服务器

在2台RS服务器上操作

修改内核参数

```sh
echo 1 > /proc/sys/net/ipv4/conf/ens33/arp_ignore
echo 1 > /proc/sys/net/ipv4/conf/all/arp_ignore
echo 2 > /proc/sys/net/ipv4/conf/ens33/arp_announce
echo 2 > /proc/sys/net/ipv4/conf/all/arp_announce
```

在两台机器（RS）上，设置网卡的别名IP：192.168.1.200

```sh
ifconfig lo:0 192.168.1.100 netmask 255.255.255.255 broadcast 192.168.1.100
```

在两台机器（RS）上，添加一个路由

```sh
route add -host 192.168.1.200 dev lo:0
```

DR上需要加一个路由设置

```sh
route add -host 192.168.1.100 dev ens33
```

在DR上使用ipvsadm添加集群服务

```sh
Ipvsadm –C

ipvsadm -A -t 192.168.1.100:80 -s wlc

ipvsadm -a -t 192.168.1.100:80 -r 192.168.1.21 -g -w 1

ipvsadm -a -t 192.168.1.100:80 -r 192.168.1.22 -g -w 1
```
