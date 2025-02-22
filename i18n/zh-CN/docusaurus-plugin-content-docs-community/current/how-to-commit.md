---
title: 如何提交代码
sidebar_position: 2
---

Apache InLong使用Github的Pull Request (PR)来接收贡献的代码，本文将详细介绍提交代码的详细流程。

- InLong代码库：https://github.com/apache/inlong

- InLong官网库：https://github.com/apache/inlong-website

## Fork仓库

进入 [apache/inlong](https://github.com/apache/inlong) 的Github页面 ，点击右上角按钮 `Fork` 进行 Fork。如下图所示：


## 配置git和提交修改

### 将代码克隆到本地
```shell
git clone https://github.com/<your_github_name>/inlong.git
```
clone完成后，origin会默认指向github上的远程fork地址。

### 将 apache/inlong 添加为本地仓库的远程分支upstream
```shell
cd  inlong
git remote add upstream https://github.com/apache/inlong.git
```
### 检查远程仓库设置
```shell
git remote -v
origin    https://github.com/<your_github_name>/inlong.git (fetch)
origin    https://github.com/<your_github_name>/inlong.git(push)
upstream  https://github.com/apache/inlong.git (fetch)
upstream  https://github.com/apache/inlong.git (push)
```
此时会有两个仓库：origin(自己的仓库)和upstream（官方的仓库）

### 获取upstream仓库代码，并更新本地master分支代码为最新
```shell
git fetch upstream
git pull upstream master
```
### 新建分支
> 一般以issue id作为分支名，如：INLONG-123
```shell
git checkout -b INLONG-123
```
**确保分支`INLONG-123`是基于官方master分支的最新代码**

分支创建完成后即可进行代码更改。

### 提交代码到远程分支
> commit 信息的格式必须与Issue标题保持一致且以`[issue id]`开头，即：`[INLONG-123] xxx`
```shell
git commit -a -m "[INLONG-123] xxx"
git push origin INLONG-123
```
## 创建PR
### 打开自己的github仓库页面
    https://github.com/<your_github_name>/inlong
### 切换分支
    切换到提交的分支 `INLONG-123`
### 创建新PR
    点击 `New pull request`或者`Compare & pull request`
### 点击`Create pull request`按钮进行创建PR
    需要注意以下几点：
      1. PR的标题必须以issue id开头，最好与commit信息保持一致
      2. 可以填写部分描述信息也可以不填
      3. 如果点击`Create pull request`后提示代码冲突，则请将`INLONG-123`分支的代码
         与master分支同步一致后在进行提交


## Review代码
创建完PR后，所有的人都可以Review代码，可能会与您讨论一些实现的细节，可能还需要你进一步修改。
**一般该PR必须有2位以上的社区PMC/Committer +1后，才可能正式合入官方代码库。**

最后，恭喜您已经成为了InLong的官方贡献者了！
