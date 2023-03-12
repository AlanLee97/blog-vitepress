# 创建docker-compose.yml文件
docker-compose.yml
```yaml
version: '3'
services:
  gitlab:
    image: 'gitlab/gitlab-ce:latest'
    container_name: gitlab
    restart: always
    environment:
      GITLAB_OMNIBUS_CONFIG: |
        external_url 'http://192.168.75.100:18080' #若有域名可以写域名
        gitlab_rails['gitlab_shell_ssh_port'] = 2224
    ports:
      - '18080:18080'
      - '2224:22'
    volumes:
      #将相关配置映射到当前目录下的config目录
      - './config:/etc/gitlab'
      #将日志映射到当前目录下的logs目录
      - './logs:/var/log/gitlab'
      #将数据映射到当前目录下的data目录
      - './data:/var/opt/gitlab'

```

# 运行
```bash
docker-compose up -d
```

# 重置gitlab密码
```bash
gitlab-rake "gitlab:password:reset[root]"
Enter password: 
Confirm password: 
Password successfully updated for user with username root.
```
