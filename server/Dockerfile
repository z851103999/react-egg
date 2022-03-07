# 设置基础镜像
FROM node:16
# 配置环境变量
ENV NODE_ENV production
# 容器目录文件
RUN mkdir -p /usr/src/egg
# 设置默认目录
WORKDIR /usr/src/egg
# 拷贝package.json
COPY package.json /usr/src/app/package.json

RUN pnpm --production --registry=https://registry.npm.taobao.org

COPY . /usr/src/app
# 暴露接口
EXPOSE 7001

CMD pnpm prod
