

## webpack 的简单使用

---
- ### 关于 webpack
   由于我们使用了 npm 管理我们的项目，所以 js 就变成了模块，但是模块的导入导出的方法浏览器不支持，所以需要编译。webpack 就可以实现。

- ### 安装 webpack

    - #### 在 npm 项目中安装 webpack 工具
   
        ```
        npm install webpack webpack-cli --save-dev
        ```
    - 新建 dist 文件夹，将项目的 index.html 放在里面。index.html 内引入 main.js 文件。
    - 新建 src 文件夹，将 index.js 放在里面。
    - 然后执行 `npx webpack` 命令。浏览器打开 index.html 发现原本 index.js 内不支持的语法现在成功执行了

- ### npx webpack 命令

    是将项目下的 `src` 内的 `index.js `文件打包到 `dist` 文件夹下的 `main.js`。打包过程会对 js 进行编译(将浏览器不能识别的模块倒入导出编译成浏览器识别的语法)，并对 `index.js` 导入的模块进行打捆全部写入到 `main.js` 内。这样 `index.html` 直接引入 `main.js` 就可以看到 `index.js` 所写内容了