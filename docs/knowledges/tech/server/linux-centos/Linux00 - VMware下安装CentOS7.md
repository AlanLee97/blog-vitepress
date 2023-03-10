# VMware下安装CentOS7

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200404074217-775986.png#alt=image-20200404074217273)

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200404074252-283236.png#alt=image-20200404074252455)

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200404074332-468638.png#alt=image-20200404074332049)

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200404075937-468793.png#alt=image-20200404075936874)

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200404080028-328414.png#alt=image-20200404080028145)

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200404081456-875860.png#alt=image-20200404081454575)

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200404081633-580551.png#alt=image-20200404081632823)

开启虚拟机

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200404081903-763402.png#alt=image-20200404081903293)

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200404082133-563310.png#alt=image-20200404082133533)

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200404082253-871800.png#alt=image-20200404082253703)

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200404082347-391156.png#alt=image-20200404082347159)

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200404082520-923770.png#alt=image-20200404082520059)

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200404082547-791975.png#alt=image-20200404082547181)

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200404082601-10308.png#alt=image-20200404082601437)

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200404082704-390824.png#alt=image-20200404082704443)

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200404082749-871072.png#alt=image-20200404082749718)

等待安装完成

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200404084327-377459.png#alt=image-20200404084326576)

登录完成

## 配置网络

配置虚拟机

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200404084729-841068.png#alt=image-20200404084729244)

进入目录

```sh
cd /etc/sysconfig/network-scripts
```

查看网卡

```sh
ls
```

我这里的是ifcfg-ens33

编辑这个文件

```sh
vi ifcfg-ens33
```

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200404085550-73601.png#alt=image-20200404085549253)

修改成如下配置

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200404090154-572857.png#alt=image-20200404090148572)

保存配置退出

按esc键 输入`:wq`，按回车即可

> 给IPADDR指定ip地址，前面的192.168.1这三位数一定要与本机的ip一样

> 打开cmd，输入`ipconfig`查看本机的ip

> ![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200404090441-977429.png#alt=image-20200404090439788)

> 我本机的ip是192.168.1开头的，所以我给虚拟机分配的ip是192.168.1.6。


重启网络

```sh
service network restart
```

配置VMware的虚拟网络

点击VM的“编辑” > “虚拟网络编辑器”

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200404084916-506090.png#alt=image-20200404084915876)

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200404091044-677193.png#alt=image-20200404091044168)

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200404091321-728122.png#alt=image-20200404091318978)

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200404091435-698769.png#alt=image-20200404091435468)
