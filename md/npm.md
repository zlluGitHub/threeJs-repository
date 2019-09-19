## NPM 的安装及使用

---

- ### npm 介绍

  ```
    NPM 是随同 NodeJS 一起安装的包管理工具，能解决 NodeJS 代码部署上的很多问题，常见的使用场景有以下几种：

    1.允许用户从 npm 服务器下载别人编写的第三方包到本地使用。

    2.允许用户从 npm 服务器下载并安装别人编写的命令行程序到本地使用。

    3.允许用户将自己编写的包或命令行程序上传到 npm 服务器供别人使用。
  ```

* ### npn 安装方式

  - #### 本地安装 npm

    将包安装在项目内的 node_modules 下，如果没有这个文件夹， npm 会自动创建。可以通过 require() 来引入项目内的包。

    ```js
    npm install express --save  版本名和版本号记录在 dependencies 字段
    ```

    ```js
    npm install express --save-dev  版本名和版本号记录在 devDependencies 字段
    ```

  - #### 全局安装 npm

    全局安装后可以直接在命令行里使用，不能在项目内引入。

    ```
    npm install gulp -g
    ```

    可以使用以下命令来查看所有全局安装的模块：

    ```
    npm ls -g
    ```

- ### npm 初始化

  创建模块，package.json 文件是必不可少的。我们可以使用 npm 生成 package.json 文件，生成的文件包含了基本的结果。

  ```
  npm init
  ```

  以上的信息，你需要根据你自己的情况输入。在最后输入 "yes" 后会生成 package.json 文件。同时在这个 json 文件中可以在 script 字段定义我们自己的一些脚本。

* ### 创建 npm 包

  ```
  npm install <Module Name>
  ```

  例如:

  ```
  npm install express --save
  ```

  这时，就会在我们的工程目录下生成一个 node_modules 的文件夹，在里边就会有 express 这个包了。如果想要用这个包，只需要在需要的地方 `require` 或者 `import` 一下就可以了。

- ### npm 常用命令

  - #### npm 安装模块

    ```js
    npm install xxx　   利用 npm 安装xxx模块到当前命令行所在目录；
    npm install -g xxx  利用npm安装全局模块xxx；

    本地安装时将模块写入package.json中：

    npm install xxx           安装但不写入package.json；
    npm install xxx –save     安装并写入package.json的”dependencies”中；
    npm install xxx –save-dev 安装并写入package.json的”devDependencies”中。
    ```

  - #### npm 卸载模块
    ```js
    npm uninstall xxx     卸载 xxx 模块；
    npm uninstall -g xxx  卸载全局模块 xxx；
    ```
  - #### 更新模块

        npm update xxx

  - #### 搜索模块

        npm search xxx

  - #### 发布模块

        npm publish xxx

    这里需要注意，发布模块的话需要在 npm 官网注册账号，并且执行下面的命令。

    ```js
    npm adduser

    Username: demo

    Password:

    Email:(this is public) 1182567968@qq.com
    ```

  - #### 查看帮助

        npm help

  - #### 清空缓存
    可以清空 NPM 本地的缓存

        npm cache clear

  - #### 撤销发布

    撤销发布的某个版本的模块

      npm unpublish @[版本号]

- ### npm install -S -D -g 的区别

    `npm install module_name -S`    即    `npm install module_name –save`    写入 `dependencies`

    `npm install module_name -D`    即    `npm install module_name –save-dev` 写入 `devDependencies`

    `npm install module_name -g` 全局安装(命令行使用)

    `npm install module_name` 本地安装(将安装包放在 ./node_modules 下)



    `dependencies`与`devDependencies`区别？

    `devDependencies` 里面的插件只用于开发环境，不用于生产环境

    `dependencies` 是需要发布到生产环境的
    
    有点儿不好理解，别怕，举个例子就好：

    你开发一个前端项目，在项目中你需要使用gulp构建你的开发和本地运行环境,这时你就要放到dependencies里。gulp是你用来压缩代码，打包等需要的工具，程序实际运行的时候并不需要，所以放到dev里就ok了。

    你写程序要用element-ui,生产环境运行项目时肯定要用到element-ui,这时element-ui就应该安装到dependencies中去。
* ### 关于其他

  - #### npm 中文文档
    ```js
    https://www.npmjs.com.cn/
    ```
  - #### npm 英文文档
    ```js
    https://docs.npmjs.com/
    ```
