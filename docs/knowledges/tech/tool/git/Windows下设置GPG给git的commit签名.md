1.查看是否安装gpg
windows下安装git时已经默认安装了gpg

2. 查看gpg版本
```bash
gpg --version
```

3. 生成key
```bash
gpg --full-generate-key
```
接下来根据提示输入
![image.png](https://cdn.nlark.com/yuque/0/2021/png/743297/1640756732422-53b9c323-2fd0-442f-886c-cb580d504cbd.png#clientId=u14dda4f9-5449-4&from=paste&height=601&id=u5d865f8d&name=image.png&originHeight=601&originWidth=793&originalType=binary&ratio=1&rotation=0&showTitle=false&size=77170&status=done&style=none&taskId=u1077eb4c-1bba-4909-89b3-30088bf4d8a&title=&width=793)
回车后设置密码
![image.png](https://cdn.nlark.com/yuque/0/2021/png/743297/1640788678147-d63a7026-e8f5-45c0-9545-6ed0fbb62a7f.png#clientId=u00a6526d-4a6c-4&from=paste&height=277&id=u4eb7863a&name=image.png&originHeight=277&originWidth=462&originalType=binary&ratio=1&rotation=0&showTitle=false&size=12396&status=done&style=none&taskId=u26996c8e-1bd3-4aca-8bae-b039621d295&title=&width=462)
出现下面的提示表示生成完成
![image.png](https://cdn.nlark.com/yuque/0/2021/png/743297/1640756805258-f24208d6-0718-45d5-b99e-f47fac23519c.png#clientId=u14dda4f9-5449-4&from=paste&height=303&id=u861f33b1&name=image.png&originHeight=303&originWidth=958&originalType=binary&ratio=1&rotation=0&showTitle=false&size=35674&status=done&style=none&taskId=u7239e4bc-ebd4-43f9-9c15-d38233fb497&title=&width=958)

4. 查看密钥
```bash
gpg --list-secret-keys --keyid-format=long
```
![image.png](https://cdn.nlark.com/yuque/0/2021/png/743297/1640756987352-9ff8a57b-3dfd-4968-82fd-903b89169073.png#clientId=u14dda4f9-5449-4&from=paste&height=190&id=uc81f103a&name=image.png&originHeight=190&originWidth=714&originalType=binary&ratio=1&rotation=0&showTitle=false&size=24829&status=done&style=none&taskId=ueb854d1d-f1d7-4bd2-b80c-03c8b66ac50&title=&width=714)

5. 查看并复制密钥
```bash
gpg --armor --export 上一步复制的密钥ID
```
![image.png](https://cdn.nlark.com/yuque/0/2021/png/743297/1640757121635-e5f15150-4d5e-44e4-84de-53926a435d65.png#clientId=u14dda4f9-5449-4&from=paste&height=586&id=u4ca06c7a&name=image.png&originHeight=586&originWidth=689&originalType=binary&ratio=1&rotation=0&showTitle=false&size=116519&status=done&style=none&taskId=u41ec9038-c9bb-43de-9f3e-c1efff7faa4&title=&width=689)
复制 GPG 密钥，从 -----BEGIN PGP PUBLIC KEY BLOCK----- 开始，到 -----END PGP PUBLIC KEY BLOCK----- 结束。

6. 在github中增加gpg key

![image.png](https://cdn.nlark.com/yuque/0/2021/png/743297/1640757423499-76ce4303-279f-4910-aeb5-fce6b4ec6009.png#clientId=u14dda4f9-5449-4&from=paste&height=865&id=u73376b5c&name=image.png&originHeight=865&originWidth=1248&originalType=binary&ratio=1&rotation=0&showTitle=false&size=102904&status=done&style=none&taskId=u7813e4c3-2013-4506-b7d0-dcd27b52a70&title=&width=1248)
![image.png](https://cdn.nlark.com/yuque/0/2021/png/743297/1640757500949-d4362eed-c29d-4776-ab10-a43ea96002bd.png#clientId=u14dda4f9-5449-4&from=paste&height=408&id=ude5734f2&name=image.png&originHeight=408&originWidth=866&originalType=binary&ratio=1&rotation=0&showTitle=false&size=44214&status=done&style=none&taskId=u5e76f4a8-da5e-41da-b633-f2d258c994b&title=&width=866)

7. 查找gpg签名id
```bash
gpg --list-secret-keys --keyid-format=long
```
![image.png](https://cdn.nlark.com/yuque/0/2021/png/743297/1640757800715-49262d67-6c97-4793-9fb7-ca2f8cca00e5.png#clientId=u14dda4f9-5449-4&from=paste&height=181&id=u1d87b588&name=image.png&originHeight=181&originWidth=641&originalType=binary&ratio=1&rotation=0&showTitle=false&size=20618&status=done&style=none&taskId=u5c2cb577-0df2-4c0f-ae9d-f5520216fac&title=&width=641)

8. 在本地git中设置gpg签名
```bash
git config --global user.signingkey 刚刚复制的id
```

9. 设置提交时使用签名
```bash
# 在当前项目中使用
git config commit.gpgsign true

# 全局使用
# git config commit.gpgsign true --global

```
# 遇到的问题
【问题】
![image.png](https://cdn.nlark.com/yuque/0/2021/png/743297/1640910798931-ab4669d5-5d10-460e-bb34-75a9d205c4b8.png#clientId=u32bde515-09bd-4&from=paste&height=76&id=u572ace0e&name=image.png&originHeight=76&originWidth=480&originalType=binary&ratio=1&rotation=0&showTitle=false&size=3553&status=done&style=none&taskId=u34bdec4a-047e-4335-92d6-fccaa4414aa&title=&width=480)
![image.png](https://cdn.nlark.com/yuque/0/2021/png/743297/1640910778337-8b846c56-cfe1-49d8-9a1b-c9eb09666af7.png#clientId=u32bde515-09bd-4&from=paste&height=144&id=u7b89314b&name=image.png&originHeight=144&originWidth=970&originalType=binary&ratio=1&rotation=0&showTitle=false&size=14002&status=done&style=none&taskId=u6700ed35-2e50-4849-a562-1e9dcb20dac&title=&width=970)
【解决方案】
安装gpg即可，下载链接[https://gpg4win.org/get-gpg4win.html](https://gpg4win.org/get-gpg4win.html)
下载完成安装之后
配置环境变量
![image.png](https://cdn.nlark.com/yuque/0/2021/png/743297/1640911680866-98675786-6aca-4837-858a-9d16468e3211.png#clientId=u59e79132-66f3-4&from=paste&height=687&id=ud5a2ee83&name=image.png&originHeight=687&originWidth=1176&originalType=binary&ratio=1&rotation=0&showTitle=false&size=91766&status=done&style=none&taskId=u7c0af2bf-8171-4e3e-9de4-a12ba8d2cfc&title=&width=1176)
重启电脑
再次打开命令行，输入
```bash
gpg --version
```
![image.png](https://cdn.nlark.com/yuque/0/2021/png/743297/1640911738417-43af9a6a-0de1-46f1-b2e2-26dfc596f53a.png#clientId=u59e79132-66f3-4&from=paste&height=338&id=u7bbcebc2&name=image.png&originHeight=338&originWidth=796&originalType=binary&ratio=1&rotation=0&showTitle=false&size=29997&status=done&style=none&taskId=u4cab0a75-c4e2-400d-92b4-717c5e474a7&title=&width=796)

【问题】
已经配置了gpg，提交的时候显示No secret key
![image.png](https://cdn.nlark.com/yuque/0/2021/png/743297/1640913553655-6775f547-df58-4982-bc5d-0ea1d304b829.png#clientId=u9bfca341-6ab1-4&from=paste&height=130&id=ud7b24c91&name=image.png&originHeight=130&originWidth=617&originalType=binary&ratio=1&rotation=0&showTitle=false&size=11539&status=done&style=none&taskId=u28cae319-dd49-4a53-81d9-287da5d8d0b&title=&width=617)

【解决】
```bash
git config --global gpg.program "C:\Program Files (x86)\GnuPG\bin\gpg.exe" 
```
git设置一下gpg.program，值为gpg的安装目录
