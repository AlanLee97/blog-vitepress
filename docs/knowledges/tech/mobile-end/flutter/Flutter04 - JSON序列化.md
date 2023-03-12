# JSON序列化

## 安装插件

安装插件JsonToDartAction

## 创建目录

创建models目录，用来存放model类

## 使用插件生成model

在models目录下右键 选择 New -> JsonToDartAction

![](https://gitee.com/AlanLee97/public-asset/raw/master/note_images/image-20200422204129695.png#alt=image-20200422204129695)

填写相应的数据

![](https://gitee.com/AlanLee97/public-asset/raw/master/note_images/image-20200422204500032.png#alt=image-20200422204500032)

点击make之后会生成对应的model类和一个generated文件夹

![](https://gitee.com/AlanLee97/public-asset/raw/master/note_images/image-20200422204849666.png#alt=image-20200422204849666)

## 使用

在xxx_entity_helper.dart文件中有一个xxxEntityFromJson()方法，调用该方法，返回数据

以用户model为例

```dart
var userEntity = userEntityFromJson(UserEntity(), res["data"]);
print(userEntity.username);
```
