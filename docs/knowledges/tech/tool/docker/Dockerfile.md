# Java服务
```bash
# 指定基础镜像
FROM registry.cn-shenzhen.aliyuncs.com/alanlee-common/openjdk:8-jre-alpine
# 重命名
ADD ["/target/*.jar","good-night-to-you-server.jar"]
# 同步容器时间
ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
# 对外暴露端口号
EXPOSE 28080
# 运行
ENTRYPOINT ["java","-jar","/good-night-to-you-server.jar", "--spring.profiles.active=prod", "-Xmx128m", "-Xms128m"]

```
