## Linux 之 Nodejs 的安装与配置

---

- ### 关于 Nodejs
  ```js
    node 模块分类:核心模块 第三方模块 自定义模块

    node 模块导入导出，使用 require('模块名') 导入核心模块和第三方模块。

    自定义模块需要使用 module.exports 导出，require('路径') 导入。

    node 模块自带作用域，不会污染全局环境，js 文件之间可以相互引用，减少 html 文件的 js 引入。
  ```
- ### 安装 nvm

  首先安装 curl
  ```js
  sudo apt-get install curl
  ```
  若无法安装 Curl ,需要先升级 `sudo apt-get update` 可执行如下命令：
  ```js
  sudo apt-get update
  sudo apt-get install curl
  ```
  若升级 `sudo apt-get update` 时出现如下错误提示：
  ```js
  E: 无法获得锁 /var/lib/apt/lists/lock - open (11: 资源暂时不可用)
  E: 无法对目录 /var/lib/apt/lists/ 加锁
  ```
  时可以进行如下操作：
  **方法一**
  执行命令: 
  ```js
  sudo dpkg --configure -a
  ```
  **方法二**（亲测）
  强制解锁,命令如下：
  ```js
  sudo rm /var/cache/apt/archives/lock
  sudo rm /var/lib/dpkg/lock
  ```
  参考原文：[https://blog.csdn.net/hjq376247328/article/details/52838200](https://blog.csdn.net/hjq376247328/article/details/52838200)

  在命令行执行以下命令就可以安装 nvm 。
  ```js
  curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash
  ```

* ### 安装 nodejs

  在安装之前如想查看有哪些版本可以安装，即可执行如下命令：

  ```js
   nvm ls-remote
  ```

  执行如下命令即可安装 nodejs ，另外，安装好 nodejs 后，不必再次安装 npm ，因为安装 nodejs 的同时 npm 也安装好了。

  ```js
  nvm install 版本号　　　//例如：nvm install v10.9.0
  ```

  查看 nodejs 版本号

  ```js
  node -v
  ```

  查看 npm 版本号

  ```js
  npm -v
  ```

    + ###### 注意
      linux 系统上安装好 node 之后关闭了命令行 node 命令就找不到了，这是因为 node 没有被添加到系统环境变量内所以需要执行以下命令，将 node 添加到系统的环境变量中，操作如下：
        ```js
        //进入到 bin 目录下
        cd ~/.nvm/versions/node/v10.9.0/bin
        ```
        进入后在此目录下打开终端键入 `pwd` 回车后可以看到`/home/zll/.nvm/versions/node/v10.9.0/bin` 复制此路径添加到 根目录 `.bashrc` 文件的最后，(在用户主目录下 `code .bashrc` 就可以在 vscode 中打开 .bashrc 文件) 
        ```js
        //讲以下代码添加至 .bashrc 文件的最后
        export PATH="$PATH:/home/zll/.nvm/versions/node/v10.9.0/bin"
        ```
        然后保存，重启命令行

  如果是 windows 系统的话，可以直接到 [nodejs](https://nodejs.org/zh-cn/) 官网下载对应版本的软件，双击安装即可。

- ### 设置默认 nodejs 版本
  利用 nvm 可以在我们的机器上安装多个版本 node ，并且可以进行灵活的切换。下面将 5.10.1 这个 node 版本设置为默认。执行下面语句即可。重启 shell 之后，执行 `node -v` 可以查看当前的 node 版本。
  ```js
  nvm alias default 5.10.1
  ```

* ### 配置 npm

  npm 是一个非常强大的包管理工具，可以让我们非常方便的安装、卸载、更新插件包，但是默认的 npm 下载包是从国外的服务器获取，速度很不给力，这里推荐使用淘宝镜像。推荐执行下面的命令，即使用淘宝定制的 cnpm 。执行一下命令就可以用 cnpm 这个命令了。

  ```js
  npm install -g cnpm --registry=https://registry.npm.taobao.org
  ```

  检查是否已经装好可以执行命令：`cnpm -v`　之后装包的话可以直接 `cnpm install gulp` 进行安装。
