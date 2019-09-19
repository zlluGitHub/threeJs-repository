## Vue.js 整理总结

---
> Vue 不支持 IE8 及以下版本，因为 Vue 使用了 IE8 无法模拟的 ECMAScript 5 特性。若使浏览器兼容 ECMAScript 5，可访问 http://caniuse.com/#feat=es5 查看支持 ECMAScript 5 特性的浏览器版本。
另外，Vue CLI 的包名称由 vue-cli 改成了 @vue/cli 。 如果你已经全局安装了旧版本的 vue-cli (1.x 或 2.x)，需要先通过 npm uninstall vue-cli -g 或 yarn global remove vue-cli 卸载它，之后重新安装。
- ### Vue.js 安装
    + #### 直接下载 js 文件
      在官网下载 `vue.min.js` 文件，然后在 `<script>` 标签中引用，如下：
      ```js
        <script src="vue.min.js"></script>
      ```
        vue.min.js 下载地址：[http://vuejs.org/js/vue.min.js](http://vuejs.org/js/vue.min.js)
    + #### 使用 CDN 方法
      ```js
      https://cdn.bootcss.com/vue/2.5.17-beta.0/vue.min.js
      ```
      bootcdn vue地址：http://www.bootcdn.cn/vue
    + #### 命令行工具 (CLI)
        ```js
        npm install -g @vue/cli   //或者  yarn global add @vue/cli
        vue create my-project     //或者  vue ui 其中 my-project 可以随便命名
        ```
        创建完 `my-project` 后会有提示命令，在命令行键入：
        ```js
        cd my-project
        npm run serve
        ```
        即可进入开发环境，`Vue CLI 3` 官方参考地址：[https://cli.vuejs.org/zh/guide/installation.html](https://cli.vuejs.org/zh/guide/installation.html) 

* ### Class 与 Style 绑定     

    - #### 对象方法绑定
        **方式一**
        active 这个 class 存在与否将取决于数据属性 isActive 的真或假，如下：
        ```js
        <div v-bind:class="{ active: isActive }"></div>

        //如下 data：
        data: {
            isActive: true,
            hasError: false
        }
        ```
        结果渲染为：
        ```html
        <div class="static active"></div>
        ```
        **方式二**
        动态 `class` 指令也可以与普通的 class 属性共存，如下：
        ```js
        <div class="static"
            v-bind:class="{ active: isActive, 'text': has }">
        </div>

        //如下 data：
        data: {
            isActive: true,
            has: false
        }
        ```
        或
        ```js
        <div v-bind:class="classObject"></div>
        //如下 data：
        data: {
            classObject: {
                active: true,
                'text': false
            }
        }
        ```

        结果渲染均为：
        ```html
        <div class="static active"></div>
        ```
        当 isActive 或者 has 变化时，class 列表将相应地更新。例如，当 has 的值变为 true时，结果渲染为：
        ```html
        <div class="static active text"></div>
        ```
        **方式三**
        我们也可以在这里绑定一个返回对象的计算属性。这是一个常用且强大的模式：
        ```js
        <div v-bind:class="classObject"></div>
        data: {
            isActive: true,
        },
        computed: {
            classObject: function () {
                return {
                    //此处可以进行运算
                    isActive: true,
                }
            }
        }
        ```
    - #### 数组方法绑定

        数组方法亦可用三元表达式，例如：
        ```js
        <div v-bind:class="[activeClass, otherClass]"></div>
        //或
        <div v-bind:class="[isActive ? activeClass : '', otherClass]"></div>
        data: {
            isActive：true,
            activeClass: 'active',
            otherClass: 'text'
        }
        ```
        渲染为：
        ```html
        <div class="active text"></div>
        ```


        在数组语法中也可以使用对象方法：
        ```js
        <div v-bind:class="[{ active: isActive }, otherClass]"></div>
        ```
- ### Vue.js 指令
    + #### v-text
        v-text 更新元素中的纯文本，直接输出字符串时需要用单引号包含，否则将报错。
    + #### v-html
        v-html 指令则是将 HTML 内容解析后输出。
    + #### v-show 
        v-show 控制元素的显示与隐藏。 只是简单的改变元素的 display 属性，不管是 true 或 false，页面均存在该元素。而另一个判断指令 v-if 的值为 false 时，页面不会生成对应元素。

    + #### v-if 
        v-if 会根据其表达式的值的真假决定是否渲染元素。

        * ##### v-if 和 v-show 比较
        
            | 左对齐标题 | v-if | v-show |
            | :------:| :------: | :------: |
            | 渲染时间 | 第一次为真时 | 刚开始就渲染
            | 切换形式 | 动态生成，局部编译/卸载 | 控制display属性
            | 生成消耗 | 较小（只生成为真的部分） | 较大（生成全部）
            | 切换消耗 | 较大（切换时需要局部编译） | 较小（因为生成时已经渲染完成）
            一般来说，v-if 有更高的切开换销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件不太可能改变，则使用 v-if 较好。
    + #### v-else 
        `v-else` 指令之前必须有 `v-if` 或者 `v-else-if` 指令，当 `if` 中的条件的值为真时显示当前内容，反之显示 else 中的内容。
    + #### v-else-if
        `if···else···`只能满足真假两种选择，如果有第三种选择，我们可以使用 `elseif` 语句。在 `vue.js` 中，该指令写法为 `v-else-if`，使用时，前面必须使用过 `v-if` 或者 `v-else-if` 指令。
    + #### v-for 数组
        当渲染的数据为数组形式时，`vue.js` 中列表渲染使用 `v-for` 指令，效果类似 `js` 中的遍历 , 另外 `v-for` 还支持一个可选的第二个参数为当前项的索引。例如：
        ```js
        <template>
            <ul id="example">
                <li v-for="(item, index) in items">
                    {{ item.message }} - {{index}}
                </li>
            </ul>
        </template>
        ```
        ```js
        <script>
            export default {
            el: '#example',
            data: {
                items: [
                    { message: 'A' },
                    { message: 'B' },
                    { message: 'c' }
                ]
            }
            }
        </script>
        ```
        输出结果：
        ```
            A - 0
            B - 1
            C - 2
        ```
    + #### v-for 对象
        当渲染的数据为对象形式时，`vue.js` 中列表渲染使用 `v-for` 指令，类似 `js` 中数组的遍历 , 另外 `v-for` 支持一个可选的三个参数 `v-for="(value, key, index) in object"` ，第一个参数为值“`index`”、第二个参数为键“`key`”、第三个参数为索引值“`index`”`。例如：
        ```js
        <template>
            <div v-for="(value, key, index) in object">
                {{ index }} - {{ key }} - {{ value }}
            </div>
        </template>
        ```
        ```js
        <script>
            export default {
            el: '#object',
            data: {
                object: {
                    name: 'xiaohong',
                    sex: 'man',
                    age: 30
                }
            }
            }
        <script>
        ```
        输出结果：
        ```
            0 - name - xiaohong 
            1 - sex - man
            2 - age - 30
        ```
        **注意：**
        尽可能在使用 v-for 时提供 key，除非遍历输出的 DOM 内容非常简单，或者是刻意依赖默认行为以获取性能上的提升。
        ```js
        <template>
            <div v-for="item in items" :key="item.id">
                // 内容 
            </div>
        </template>
        ```

    + #### v-on
        `v-on` 指令用于监听 `dom` 事件，对应的处理方法在 `methods` 属性中执行。另外，`vue.js` 提供了 `v-on` 指令的简写形式 `@`，例如：
        ```js
        //完整语法
        <a v-on:click="doSomething">...</a>

        //缩写
        <a @click="doSomething">...</a>
        ```
        实例：
        ```js
        <template>
            <div id="example">
                <button v-on:click="counter += 1">点击</button>
                <p>点击了{{ counter }}次</p>
            </div>
        </template>
        ```
        ```js
        <script>
            export default {
                el: '#example',
                data: {
                    counter: 0
                }
            }
        </script>
        ```
        每点击一次 `counter` 加一
        
    + #### v-bind 
        v-bind 指令用于属性的绑定。
        ```js
        // 绑定一个属性 
        <h2 v-bind:属性名="属性值"></h2>

        // 缩写
        <h2 :属性名="属性值"></h2>
        ```
    + #### v-model 文本
        `v-model` 指令可实现数据的双向绑定，主要用于监听用户的输入事件，使 `vue` 实例中的 `data` 数据与渲染的 `dom` 元素的数据保持一致。注意：`v-model` 指令只能作用于 `<input>`、`<textarea>`、`<select>`等表单元素上。
        **单行文本**
        ```js
        <template>
            <input v-model="message" placeholder="请输入内容。。。">
            <p>Message is: {{ message }}</p>
        </template>
        ```
    + #### v-model 复选框
        **单个复选框，绑定布尔值：**
        ```js
        <template>
            <input type="checkbox" id="checkbox" v-model="checked">
            <label for="checkbox">{{ checked }}</label>
        </template>
        ```
        **多个复选框，绑定到同一个数组：**
        ```js
        <template>
            <div id='example'>
                <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
                <label for="jack">Jack</label>
                <input type="checkbox" id="john" value="John" v-model="checkedNames">
                <label for="john">John</label>
                <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
                <label for="mike">Mike</label>
                <br>
                <span>Checked names: {{ checkedNames }}</span>
            </div>
        </template>
        ```
        ```js
        <script>
            export default {
            el: '#example',
            data: {
                checkedNames: []
            }
            }
        </script>
        ```
    + #### v-model 单选按钮
        ```js
        <template>
            <div id="example">
                <input type="radio" id="one" value="One" v-model="picked">
                <label for="one">One</label>
                <br>
                <input type="radio" id="two" value="Two" v-model="picked">
                <label for="two">Two</label>
                <br>
                <span>Picked: {{ picked }}</span>
            </div>
        <template>
        ```
        ```js
        <script>
            export default {
                el: '#example',
                data: {
                    picked: ''
                }
            }
        </script>
        ```
    + #### v-model 选择框
        ```js
        <template>
            <div id="example">
                <select v-model="selected">
                    <option disabled value="">请选择</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                </select>
                <span>Selected: {{ selected }}</span>
            </div>
        </template>
        ```
        ```js
        <script>
            export default {
                el: '...',
                data: {
                    selected: ''
                }
            }
        </script>
        ```
    + #### v-pre
        `vue` 实例化时会遍历页面所有节点，如果想跳过某些节点，可以在该节点中使用 `v-pre` 指令，编译器会自动忽略该节点和其子节点。
    + #### v-cloak 
        在`vuejs`开发的项目中，有些页面在加载不完全时，有可能会出现一些vuejs变量名，为了避免这种情况，可以使用 `v-cloak` 指令，该指令会在关联元素的所有`vuejs`变量编译完成后才正常显示。
    + #### v-once
        使用 `v-once` 指令，表示只对关联元素或组件进行一次渲染，随后会被当做静态内容跳过，不会再次渲染。
- ### vue props
    **父组件**
    ```js
    <template>
        <div>
            <Form :value="value"/>
            <input type="text" v-model="todo">
            <button @click="addTodo">提交</button>
        </div>
    </template>

    <script>
        import Form from './components/Form'
        export default {
        name: 'forms',
        data: () => ({
            todo: ''
        }),
        methods: {
            addTodo() {
            if (this.todo.trim()) {
                this.$store.commit('addTodo', this.todo)
                this.todo = ''
            }
            }
        }
        }
    </script>

    ```
    **子组件**
    ```js
    <template>
        <div>
            <h1>{{value}}</h1>
        </div>
    </template>
    <script>
        export default {
            name: 'forms',
            props: ['value']
        
        }
    </script>

    ```
+ ### 路由懒加载
    ```js
    export default new Router({
        routes: [
            {
                path: '/lazy',
                name: 'lazy-loading',
                component: (resolve) => {  //这里加载了 记得上面就不需要在import 这个组件了
                    require(['../components/lazy-loading'], resolve)
                }
            }
        ]
    })
    ```
+ ### 生命周期钩子函数
    ```js
    beforeCreate () { 

        // 组件实例将要创建，一般在该时机，开启加载一个动画用，加loading事件

        console.log('--------------beforeCreate-------------------')
        console.log('在实例创建之后同步调用。此时实例已经结束解析选项，这意味着已建立：数据绑定，计算属性，方法，watcher/事件回')
        console.log('但是还没有开始 DOM 编译，$el 还不存在,但是实例存在')
    },
    created () {

        // 组件实例创建完成，在该时机可以访问实例中的data的属性和methods中的方法，但不能操作dom。因为页面还未加载成功，页面未显示。
        // 注意：调用methods中的方法，完成网络请求，vue推荐的两种数据获取方式
        // 1、beforeRouteEnter 该路由加载之前请求数据，数据请求完成执行next（），显示目标路由（优点：保证页面显示时，一定可以拿到数据）
        // 2、created 在该时机发起请求，获取数据

        console.log('--------------created-------------------')
        console.log('在实例创建完成后被立即调用,挂载阶段还没开始，$el属性目前不可见')
    },
    beforeMount () {

        // 组件实例将要挂载到挂载点,页面未显示，开发中很少使用。

        console.log('--------------beforeMount-------------------')
        console.log('模板编译挂载之前')
    },
    mounted () {

        // 组件模板已经渲染到指定的el，页面显示，可以操作dom，配合路由钩子使用。

        console.log('--------------mounted-------------------')
        console.log('模板编译挂载之后')
    },
    beforeUpdate () {

        // 组件将要更新时调用此函数

        console.log('--------------beforeUpdate-------------------')
        console.log('组件更新之前')
    },
    updated () {

        // 组件将要更新时调用此函数，但值得注意的是关于 update 的钩子函数，都是页面动态渲染有关，每当数据变化是，变会页面更新，都会触发这些钩子，这些钩子的触发频率很高，我们极少操作，即便操作，也要保证内部方法轻量级。（此处也可以用watch进行观测）

        console.log('--------------updated-------------------')
        console.log('组件更新之后')
    },
    activated () {
        console.log('--------------activated-------------------')
        console.log('keep-alive 组件激活时调用')
    },
    deactivated () {
        console.log('--------------deactivated-------------------')
        console.log('keep-alive 组件停用时调用')
    },
    beforeDestroy () {

        // 组件将要销毁时调用此函数。

        console.log('--------------beforeDestroy-------------------')
        console.log('组件销毁之前')
    },
    destroyed () {

        // 组件销毁完成时调用此函数，常在该时机移除耗时操作，比如计时器等。

        console.log('--------------destroyed-------------------')
        console.log('组件销毁之后')
    }
    ```
    - **create 和 mounted 相关**
        + `beforecreated` ：`el` 和 `data` 并未初始化 
        + `created` :完成了 `data` 数据的初始化，`el` 没有 
        + `beforeMount` ：完成了 `el` 和 `data` 初始化 
        + `mounted` ：完成挂载
+ ### 路由钩子函数
    ```js
    // 全局钩子函数
    const router = new VueRouter({ ... })
    
    router.beforeEach((to, from, next) => {
        //可以检测用户是否登录啥的
        next();
    });

    router.afterEach((to, from, next) => {
        console.log(to.path);
    });


    to: //即将要进入的目标 [路由对象]
    from: //当前导航正要离开的路由
    next(): //进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是confirmed （确认的）。
    next(false): //中断当前的导航。如果浏览器的 URL 改变了（可能是用户手动或者浏览器后退按钮），那么 URL 地址会重置到 from
    next('/') 或者 next({ path: '/' }): //跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航

   
    // 组件内的钩子
    beforeRouteEnter (to, from, next) {
        // 在渲染该组件的对应路由被 confirm 前调用
        // 相对于组件来说的，而且应该是在路由进入之前开始准备的 所以beforeRouteEnter是调用ajax的时机
        // 不能获取组件实例 `this`
        // 因为当钩子执行前，组件实例还没被创建
        next();
    },

    beforeRouteLeave (to, from, next) {
        // 在组件的生命周期完成后，且旧路由即将切换走，新路由beforeEach的时机执行
    }
    ```
+ ### 本地开发解决跨域请求
    - 在 config 文件下的 index.js 文件中修改以下代码:
        ```js
        proxyTable: {}
        ``` 
        设置成
        ```js
        proxyTable: {
            '/api': {
                target: 'http://www.mytest.com', //这里放需要请求的接口
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        } 
        //  请求接口的时候 http://www.mytest.com/login  可以写成  /api/login
        ```
    - 可以发起多个代理 (如下):
        ```js
        proxyTable: {
            '/api': {
                target: 'http://www.mytest.com', 
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
            '/a': {
                target: 'http://www.test.com', 
                changeOrigin: true,
                pathRewrite: {
                    '^/a': ''
                }
            }
        }
        ```
- ### babel-polyfill
    **babel-polyfill 可以让ie上使用新语法的内置对象和API**
    - 下载安装 babel-polyfill 模块
        ```js
        npm i babel-polyfill --save
        ```
    - 在 webpack.base.conf.js 中做以下修改
        ```js
        module.exports = {
            entry: {
            app: ['babel-polyfill', './src/main.js']
            },
            ......
        }
        ```
- ### Vuex 的使用

    - #### 安装
        ```js
        npm i vuex
        ```

    - #### 创建

        - 在 `src` 下新建 `store/index.js`
        - 在 `index.js` 内使用 `Vuex.Store()` 方法创建 `store` 具体内容如下:

            ```js
            import Vuex from 'vuex'
            import Vue from 'vue'
            Vue.use(Vuex)

            const state = {
                count: 0
            }
            const mutations = {
                increment(state) {
                state.count++
                }
            }
            const store = new Vuex.Store({
                state,
                mutations
            })

            export default store
            // state 指的就是数据
            // mutstions 指的就是修改数据的方法
            // store 指的就是创建好之后的 store
            ```

    + #### 使用

        - 到 main.js 下 引入并导入

            ```js
            import store from './store'
            new Vue({
                render: h => h(App),
                store
            }).$mount('#app')
            ```

        - 在任意的组件内部，可以使用 `this.$store.state` 访问 `store` 中的数据了

        - 如果想要修改 `store` 中的数据的话，使用 `this.$store.commit('mutation 函数名')` 触发 `mutation` 从而修改 `store`。

- ### Axios 的使用
    **Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。简单来说就是前端最火最简单的一个http请求解决方案。**
    + #### 安装
        ```js
        npm install vuex --save
        ```
    + #### 工具类封装
        ```js
        // 引入axios
        import axios from 'axios';

        // 创建axios实例
        const httpService = axios.create({
            // url前缀-'https://some-domain.com/api/'
            baseURL: process.env.BASE_API, // 需自定义
            // 请求超时时间
            timeout: 3000 // 需自定义
        });

        // request拦截器
        httpService.interceptors.request.use(
            config => {
                // 根据条件加入token-安全携带
                if (true) { // 需自定义
                    // 让每个请求携带token
                    config.headers['User-Token'] = '';
                }
                return config;
            }, 
            error => {
                // 请求错误处理
                Promise.reject(error);
            }
        )

        // respone拦截器
        httpService.interceptors.response.use(
            response => {
                // 统一处理状态
                const res = response.data;
                if (res.statuscode != 1) { // 需自定义
                    // 返回异常
                    return Promise.reject({
                        status: res.statuscode,
                        message: res.message
                    });
                } else {
                    return response.data;
                }
            },
            // 处理处理
            error => {
                if (error && error.response) {
                    switch (error.response.status) {
                        case 400:
                            error.message = '错误请求';
                            break;
                        case 401:
                            error.message = '未授权，请重新登录';
                            break;
                        case 403:
                            error.message = '拒绝访问';
                            break;
                        case 404:
                            error.message = '请求错误,未找到该资源';
                            break;
                        case 405:
                            error.message = '请求方法未允许';
                            break;
                        case 408:
                            error.message = '请求超时';
                            break;
                        case 500:
                            error.message = '服务器端出错';
                            break;
                        case 501:
                            error.message = '网络未实现';
                            break;
                        case 502:
                            error.message = '网络错误';
                            break;
                        case 503:
                            error.message = '服务不可用';
                            break;
                        case 504:
                            error.message = '网络超时';
                            break;
                        case 505:
                            error.message = 'http版本不支持该请求';
                            break;
                        default:
                            error.message = `未知错误${error.response.status}`;
                    }
                } else {
                    error.message = "连接到服务器失败";
                }
                return Promise.reject(error);
            }
        )

        /*网络请求部分*/

        /*
        *  get请求
        *  url:请求地址
        *  params:参数
        * */
        export function get(url, params = {}) {
            return new Promise((resolve, reject) => {
                httpService({
                    url: url,
                    method: 'get',
                    params: params
                }).then(response => {
                    resolve(response);
                }).catch(error => {
                    reject(error);
                });
            });
        }

        /*
        *  post请求
        *  url:请求地址
        *  params:参数
        * */
        export function post(url, params = {}) {
            return new Promise((resolve, reject) => {
                httpService({
                    url: url,
                    method: 'post',
                    data: params
                }).then(response => {
                    resolve(response);
                }).catch(error => {
                    reject(error);
                });
            });
        }

        /*
        *  文件上传
        *  url:请求地址
        *  params:参数
        * */
        export function fileUpload(url, params = {}) {
            return new Promise((resolve, reject) => {
                httpService({
                    url: url,
                    method: 'post',
                    data: params,
                    headers: { 'Content-Type': 'multipart/form-data' }
                }).then(response => {
                    resolve(response);
                }).catch(error => {
                    reject(error);
                });
            });
        }

        export default {
            get,
            post,
            fileUpload
        }
        ```
    + #### 使用
        ```js
        // 引入工具类-目录自定义
        import fetch from '@/util/fetch'

        // 使用
        const TMPURL = ''; // url地址
        const params = {}; // 参数
        fetch.post(TMPURL + '/login/login', params);
        ```
* ### package.json 文件
    ```js
    {
    "name": "vue-eleme",
    "version": "0.1.0",
    "private": true,
    "scripts": {
        "serve": "vue-cli-service serve",
        "build": "vue-cli-service build",
        "lint": "vue-cli-service lint"
    },
    "dependencies": {
        "antd-init": "^2.0.6",
        "axios": "^0.18.0",
        "better-scroll": "^1.12.6",
        "moment": "^2.22.2",
        "node-sass": "^4.9.3",
        "sass-loader": "^7.1.0",
        "vue": "^2.5.17",
        "vue-router": "^3.0.1",
        "vuex": "^3.0.1"
    },
    "devDependencies": {
        "@vue/cli-plugin-babel": "^3.0.1",
        "@vue/cli-plugin-eslint": "^3.0.1",
        "@vue/cli-service": "^3.0.1",
        "vue-template-compiler": "^2.5.17"
    },
    "eslintConfig": {
        "root": true,
        "env": {
        "node": true
        },
        "extends": [
        "plugin:vue/essential",
        "eslint:recommended"
        ],
        "rules": {},
        "parserOptions": {
        "parser": "babel-eslint"
        }
    },
    "postcss": {
        "plugins": {
        "autoprefixer": {}
        }
    },
    "browserslist": [
        "> 1%",
        "last 2 versions",
        "not ie <= 8"
    ]
    }

    ```
+ ### demo 模板
    ```js
    <template>
        <div>
            <input type="text" v-model="todo">
            <button @click="addTodo">提交</button>

            <input type="text" v-model="fruits.name">
            <p>fruits：{{message}}</p>
        </div>
    </template>
    <script>
        import TodoMenu from './components/TodoMenu'
        export default {
            //组件名称
            name: 'forms',

            //组件声明（使用外部组件需要在这里声明）
            components: {
                TodoMenu
            },

            //数据
            data: () => ({
                todo: '',
                fruits: {
                    name: "xiao"
                },
                message:''
            }),

            //props
            props:[],

            //计算属性
            computed:{
                //属性计算逻辑
            },

            //模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。
            mounted() { 
                this.$store.dispatch('getTodos')
            },

            //绑定在组件上的方法
            methods: {
                addTodo() {
                    this.$store.commit('addTodo', this.todo)
                }
            },
            //监视 vue 实例上的数据变动 当类型是对象变量，键值发生变化时，为了监听到数据变化，需要设置deep选项为true
            watch: {
                todo: function (curVal, oldVal) {
                    //curVal 表示当前数据，oldVal 表示前一步数据（或默认数据）
                },
                //例如:
                fruits: {
                    handler(obj){
                        this.message = obj.name
                    },
                    deep: true
                }
            }
        }    
    </script>
    <style lang="scss" scoped>
        @import '../assets/style.scss';
        .menu-wrap {
            .active {
                color: $color;
            }
        }
    </style>

    ```
- ### 参考资料
    1、Vue Github源码：http://github.com/vuejs/vue

    2、Vue 中文文档：http://cn.vuejs.org/v2/guide/

    3、Vue 英文文档：http://vuejs.org/v2/guide/

    4、Vue CLI 3：https://cli.vuejs.org/

    5、http://www.mingtern.com/vue/v-if.html
    http://doc.liangxinghua.com/vue-family/5.html