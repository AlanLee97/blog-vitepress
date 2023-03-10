# MySQL主从配置与Mycat读写分离

## 一、主数据库配置

1. 
编辑配置文件

添加如下内容
```bash
server-id=1
binlog-do-db=master_db1 #备份的数据库
log-bin=mysql-bin
binlog-ignore-db=mysql
```


![](https://gitee.com/AlanLee97/public-asset/raw/master/note_images/image-20200523133136523.png#alt=image-20200523133136523)

2. 
重启mysql

3. 
创建一个允许从服务器来访问的用户(主服务器)：
```bash
grant replication slave on *.* to 'root'@'%' identified by '123456';

GRANT FILE ON *.* TO 'root'@'%' IDENTIFIED BY '123456';

FLUSH PRIVILEGES;
```

> grant replication slave on _._ to 'root'@'%' identified by '123456';

> 说明：

> - 
root：Slave使用的账号

> - 
IDENTIFIED BY 123456：Slave使用的密码

> - 
%：Slave数据库IP




4. 
查看配置的信息
```bash
show master status \G;
```


如图：

![](https://gitee.com/AlanLee97/public-asset/raw/master/note_images/image-20200522155203831.png#alt=image-20200522155203831)
> 记住 File和Position的值，后面会用到




## 二、从数据库配置

1. 编辑配置文件my.cnf，在[mysqld]下面添加这段内容

```bash
log-bin=mysql-bin
server-id=2
# 忽略日志的db
binlog-ignore-db=information_schema
binlog-ignore-db=cluster
binlog-ignore-db=mysql
# 需要备份的db
replicate-do-db=master_db1
# 忽略备份的db
replicate-ignore-db=mysql
log-slave-updates
slave-skip-errors=all
slave-net-timeout=60
```

2. 关联Master信息

```bash
stop slave;

CHANGE MASTER TO MASTER_HOST='192.168.1.20',MASTER_USER='root',MASTER_PASSWORD='123456',MASTER_PORT=3306,MASTER_LOG_FILE='mysql-bin.000001',MASTER_CONNECT_RETRY=60,MASTER_LOG_POS=154;

start slave;
```

> 这里的MASTER_LOG_POS=154的154就是配置主服务器的时候说要记住的那个，

> MASTER_LOG_FILE的值就是之前的Position的值


3. 查看状态

```bash
show slave status \G;
```

![](https://gitee.com/AlanLee97/public-asset/raw/master/note_images/image-20200522170042277.png#alt=image-20200522170042277)

> 只有Slave_IO_Running与Slave_SQL_Running都为Yes才配置成功。


## 三、主从复制测试

1. 在从服务器中创建数据库master_db1

![](https://gitee.com/AlanLee97/public-asset/raw/master/note_images/image-20200523131328951.png#alt=image-20200523131328951)

2. 在主MySQL服务器创建test表，测试结果是从MySQL的服务器会自动复制主MySQL服务器的test表。
3. 添加500w条数据进行测试，可以使用jdbc插入，也可以使用dataFactory。（可以先手动插入一条数据查看效果）![](https://gitee.com/AlanLee97/public-asset/raw/master/note_images/image-20200603111431707.png#alt=image-20200603111431707)

![](https://gitee.com/AlanLee97/public-asset/raw/master/note_images/image-20200603111537557.png#alt=image-20200603111537557)

## 四、启用Mycat读写分离
|  | 主机名 | IP和端口 | 操作 | 引擎 |
| --- | --- | --- | --- | --- |
| 主MySQL服务器 | master | 192.168.1.20:3306 | 写 | InnoDB |
| 从MySQL服务器 | node-1 | 192.168.1.21:3306 | 读 | MyISAM |


1. 
修改从数据库的表

将表的引擎改为`MyISAM`

![](https://gitee.com/AlanLee97/public-asset/raw/master/note_images/image-20200523135553033.png#alt=image-20200523135553033)

2. 
配置mycat读写分离


编辑schema.xml文件

```xml
<？xml version="1.0"?>
<!DOCTYPE mycat:schema SYSTEM "schema.dtd">
<mycat:schema xmlns:mycat="http://org.opencloudb/">

	<schema name="zdxh" checkSQLschema="false" sqlMaxLimit="100">

		<!-- 测试读写分离 -->
		<table name="test" primaryKey="ID" dataNode="dn4" />
	</schema>


	<!-- 测试读写分离 -->
	<dataNode name="dn4" dataHost="local-master-rw" database="master_db1" />

	
	<!-- 测试读写分离 -->
	<dataHost name="local-master-rw" maxCon="1000" minCon="10" balance="1"
		writeType="0" dbType="mysql" dbDriver="native" switchType="1"  slaveThreshold="100">
		<heartbeat>select user()</heartbeat>
		<!-- 写入配置-->
		<writeHost host="hostM4" url="192.168.1.20:3306" 
                   user="root" password="123456">
			<!-- 添加只读库配置-->
            <readHost host="hostS1" url="192.168.1.21:3306" 
                      user="root" password="123456" />
		</writeHost>
	</dataHost>

</mycat:schema>
```

![](https://gitee.com/AlanLee97/public-asset/raw/master/note_images/image-20200523145846248.png#alt=image-20200523145846248)

## 五、Mycat读写分离测试

测试分为启用读写分离测试和不启用读写分离的情况赖测试

### 启用读写分离的查询

配置schema.xml

![](https://gitee.com/AlanLee97/public-asset/raw/master/note_images/image-20200603092525583.png#alt=image-20200603092525583)

在mycat中查询

**count关键字查询**

```bash
select count(id) from test;
```

![](https://gitee.com/AlanLee97/public-asset/raw/master/note_images/image-20200603093857376.png#alt=image-20200603093857376)

**like关键字查询**

```bash
select * from test where name like '%alanlee%';
```

![](https://gitee.com/AlanLee97/public-asset/raw/master/note_images/image-20200603094541570.png#alt=image-20200603094541570)

**=查询**

```bash
select * from test where name = 'alanlee';
```

![](https://gitee.com/AlanLee97/public-asset/raw/master/note_images/image-20200603094709481.png#alt=image-20200603094709481)

**insert**

```bash
insert into test(name) values('libuguan');
```

![](https://gitee.com/AlanLee97/public-asset/raw/master/note_images/image-20200603095335013.png#alt=image-20200603095335013)

**update**

```bash
update test set name = 'libuguan-007' where name = 'libuguan';
```

![](https://gitee.com/AlanLee97/public-asset/raw/master/note_images/image-20200603095728778.png#alt=image-20200603095728778)

**delete**

```bash
delete from test where name = 'libuguan-007';
```

![](https://gitee.com/AlanLee97/public-asset/raw/master/note_images/image-20200603100214050.png#alt=image-20200603100214050)

### 不启用读写分离的查询

配置schema.xml

![](https://gitee.com/AlanLee97/public-asset/raw/master/note_images/image-20200529152232726.png#alt=image-20200529152232726)

在mycat中查询

**count关键字查询**

```bash
select count(*) from test;
```

![](https://gitee.com/AlanLee97/public-asset/raw/master/note_images/image-20200529151832264.png#alt=image-20200529151832264)

**like关键字查询**

```bash
select * from test where name like '%alanlee%';
```

![](https://gitee.com/AlanLee97/public-asset/raw/master/note_images/image-20200529153145449.png#alt=image-20200529153145449)

**=查询**

```bash
select * from test where name = 'alanlee';
```

![](https://gitee.com/AlanLee97/public-asset/raw/master/note_images/image-20200529153440308.png#alt=image-20200529153440308)

**insert**

```bash
insert into test(name) values('libuguan-01');
```

![](https://gitee.com/AlanLee97/public-asset/raw/master/note_images/image-20200603104934708.png#alt=image-20200603104934708)

**update**

```bash
update test set name = 'libuguan-02' where name = 'libuguan-01';
```

![](https://gitee.com/AlanLee97/public-asset/raw/master/note_images/image-20200603105102926.png#alt=image-20200603105102926)

**delete**

```bash
delete from test where name = 'libuguan-02';
```

![](https://gitee.com/AlanLee97/public-asset/raw/master/note_images/image-20200603105351203.png#alt=image-20200603105351203)

### 统计
| Sql语句 | 启用读写分离机制（读库使用MyISAM） | 取消读写分离机制(读使用的是Innodb) |
| --- | --- | --- |
| count | 0.00秒 | 1.68秒 |
| like | 2.36秒 | 3.01秒 |
| = | 0.92秒 | 1.30秒 |
| insert | 0.11秒 | 0.05秒 |
| update | 3.27秒 | 3.02秒 |
| delete | 2.93秒 | 3.31秒 |


![](https://gitee.com/AlanLee97/public-asset/raw/master/note_images/image-20200603110848207.png#alt=image-20200603110848207)

### 总结

**启用mycat读写分离，查询操作的速度比不启用读写分离快很多。**原因是查询时使用的是MyISAM引擎。而插入、更新、删除的操作基本上没有变化，因为执行这3个操作时都是使用的InnoDB引擎。

## 六、遇到的问题

### 问题1

[ERROR] unknown variable 'master-host=192.168.1.20'

![](https://gitee.com/AlanLee97/public-asset/raw/master/note_images/image-20200522162243354.png#alt=image-20200522162243354)

#### 原因

MySQL5.6和之后的版本没有master-host参数了

#### 解决

解决方案：

1. 在my.cnf文件的[mysqld]下面添加以下配置

```
log-bin=mysql-bin
server-id=2
# 忽略日志的db
binlog-ignore-db=information_schema
binlog-ignore-db=cluster
binlog-ignore-db=mysql
# 需要备份的db
replicate-do-db=master_db
# 忽略备份的db
replicate-ignore-db=mysql
log-slave-updates
slave-skip-errors=all
slave-net-timeout=60
```

![](https://gitee.com/AlanLee97/public-asset/raw/master/note_images/image-20200522165424009.png#alt=image-20200522165424009)

2. 
重启mysql

3. 
命令行输入


```bash
CHANGE MASTER TO MASTER_HOST='192.168.1.20',MASTER_USER='root',MASTER_PASSWORD='123456',MASTER_PORT=3306,MASTER_LOG_FILE='mysql-bin.000001',MASTER_CONNECT_RETRY=60,MASTER_LOG_POS=154;
```

> 需根据自己的机子修改参数值

> - MASTER_HOST
> - MASTER_LOG_FILE
> - MASTER_LOG_POS


![](https://gitee.com/AlanLee97/public-asset/raw/master/note_images/image-20200522164835461.png#alt=image-20200522164835461)

### 问题2

配置好了主从服务器之后，主服务器创建表后，从服务器不会复制

### 原因

没有赋予Slave机器有File权限，没有刷新权限。

### 解决

在主MySQL服务器中命令行执行

```bash
# 赋予Slave机器有File权限
GRANT FILE ON *.* TO 'root'@'%' IDENTIFIED BY '123456';
# 刷新权限
FLUSH PRIVILEGES;
```

重启主MySQL服务器

> 还要检查其他的配置是否准确，例如MASTER_HOST，MASTER_LOG_FILE，MASTER_LOG_POS的参数值等等。

