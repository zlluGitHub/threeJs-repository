## Sass 安装及使用
- ### 在 create-react-app 中使用 sass

    + #### 直接修改配置方案

        - 安装 `npm i -D node-sass sass-loader`
            ```js
            npm i -D node-sass sass-loader
            ```
        - 找到配置 `node_modules/react-scripts/config/webpack.config.dev.js`,此文件是开发环境配置，如果生产环境配置也需要修改，那么也要找到 `webpack.config.prod.js`
        - 在配置文件中查找到 `file-loader` 在 `file-loader` 的配置项 `exclude` 数组中添加一项 `/\.scss$/`
        - 然后在 `file-loader` 这一项前面添加一项新的 `sass-loader`
            ```js
            {
                test:/\.scss$/,
                loader: ['style-loader','css-loader','sass-loader'],
            }
            ```
        - 重启服务就可以引入 `.scss` 文件即可。

    + #### 使用 react-app-rewired 修改配置方案

        - 安装 `react-app-rewired` 、 `node-sass` 和 `sass-loader`
            ```js
            npm install react-app-rewired
            npm install --save-dev sass-loader
            //sass-loader依赖于node-sass
            npm install --save-dev node-sass
            ```
        
        - 安装 `react-app-rewire-sass-modules` 来添加 `sass` 配置
            ```js
            npm install react-app-rewire-sass-modules
            ```
        - 在根目录新建一个配置文件 `config-overrides.js` 并且在 `config-overrides.js` 文件内填入以下内容：

            ```js
            const rewireSass = require('react-app-rewire-sass-modules')
            module.exports = function override(config, env) {
                config = rewireSass(config, env)
                return config
            }
            ```

        - 然后修改 `package.json` 的 `scripts` 的 `start` 和 `build` 字段，修改如下:

            ```js
            "start": "react-app-rewired start",
            "build": "react-app-rewired build",
            ```

        - 最后重启服务即可使用 `sass`

- ### 在 Vue-cli 中使用 sass

    安装sass的依赖包
    ```js
    npm install --save-dev sass-loader
    //sass-loader依赖于node-sass
    npm install --save-dev node-sass
    ```
    修改style标签
    ```js
    <style lang="scss">
    ```
    然后运行项目
    ```js
    npm run dev
    ```
- ### 基本用法

    + #### 变量

        sass 相较于 css 来说是允许使用变量的，且所有变量以 $ 开头 , 如果变量需要镶嵌在字符串之中，就必须需要写在 `#{}` 之中。
        ```css
        <-- 例一 -->
        $blue : #1875e7;　
        　　div {　　    　
                color : $blue;
            }

        <-- 例二 -->
        $side : left;
        .rounded {
            border-#{$side}-radius: 5px;
        }
        ```
    + #### 计算
        ```css
        body {
            margin: (14px/2);
            top: 50px + 100px;
            right: $var * 10%;
        }
        ```

    + #### 嵌套

        sass 允许选择器嵌套。比如，下面的CSS代码：
        ```css
        div h1 {
        　　　　color : red;
        　　}
        ```

        **可以写成：**
        ```css
        div {
            h1 {
                color:red;
            }
        }
        ```
        属性嵌套，比如 `border-color` 属性，但注意的是 `border` 后面必须加上冒号。例如：
        ```css
        p {
            border: {
                color: red;
            }
        }
        ```
        在嵌套的代码块内，可以使用 `&` 引用父元素。比如 `a:hover` 伪类，可以写成：
        ```js 
        a {
            &:hover { color: #ffb3ff; }
        }
        ```

    + #### 注释

        sass 共有两种注释风格。

        标准的CSS注释 `/* comment */` ，会保留到编译后的文件。

        单行注释 `// comment`，只保留在 `sass` 源文件中，编译后被省略。另外，在 `/*` 后面加一个感叹号，表示这是"重要注释"。即使是压缩模式编译，也会保留这行注释，通常可以用于声明版权信息。
        ```css
        /*! 
            重要注释！
         */
        ```
+ ### 代码的复用

    - #### 选择器继承
        例如 `class2` 需要继承 `class1` 现有 `class1`
        ```css
        .class1{
            border: 1px solid #ddd;
        }
        ```
        `class2` 继承 `class2` 可以这样写：
        ```css
        .class1{
            @extend .class1;
            color: red;
        }
        ```
    - #### 代码块继承
        可以受用 `@mixin` 命令来定义一个代码块。
        ```css
        @mixin left {
            float: left;
            margin-left: 10px;
        }
        ```
        使用 `@include` 命令，调用这个 `mixin`。
        ```css
        div {
            @include left;
        }
        ```
        **可以指定参数和缺省值**
        ```css
        @mixin left($value: 10px) {
            float: left;
            margin-right: $value;
        }
        ```
        我们在使用的时候可以根据需要加入参数
        ```css
        div{
            @include left(20px);
        }
        ```

+ ### 引入文件
    可以使用 `@import` 命令来插入外部 `sass` 文件或 `css` 文件
    ```css
    <-- @import "path/file.scss"; -->
    <-- @import "file.css"; -->
    ```

 - ### 资料参考：http://www.ruanyifeng.com/blog/2012/06/sass.html