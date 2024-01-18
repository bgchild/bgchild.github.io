#!/usr/bin/env sh

# 设置 OpenSSL Legacy Provider 环境变量
export NODE_OPTIONS=--openssl-legacy-provider

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果发布到自定义域名，请使用，不填则使用 GitHub 自带的 <username>.github.io
#echo 'bgchild.github.io' > CNAME

# 如果手运行该脚本，则执行 if 里的，如果是 GitHub 自动执行该脚本，则是 else 里的
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy 脚本部署'
  githubUrl=git@github.com:bgchild/bgchild.github.io.git
else
  msg='来自 Github actions 的自动部署'
  githubUrl=https://bgchild.github.io:${GITHUB_TOKEN}@github.com/bgchild/bgchild.github.io.git
  git config --global user.name "AnWen"
  git config --global user.email "Annlvxy@gmail.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到 Github gh-pages 分支

# deploy to coding
# echo 'www.xugaoyi.com\nxugaoyi.com' > CNAME  # 自定义域名
# if [ -z "$CODING_TOKEN" ]; then  # -z 字符串 长度为0则为true；$CODING_TOKEN来自于github仓库`Settings/Secrets`设置的私密环境变量
#   codingUrl=git@git.dev.tencent.com:xugaoyi/xugaoyi.git
# else
#   codingUrl=https://xugaoyi:${CODING_TOKEN}@git.dev.tencent.com/xugaoyi/xugaoyi.git
# fi
# git add -A
# git commit -m "${msg}"
# git push -f $codingUrl master # 推送到coding

cd - 
# 删除打包项目
rm -rf docs/.vuepress/dist