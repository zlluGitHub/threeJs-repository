## Redux 框架使用教程

---
- ### Redux 简介
    - Redux 是 JavaScript 状态容器，提供可预测化的状态管理。Redux基于简化版本的Flux框架，Flux是Facebook开发的一个框架。 
    - 在Redux中，所有的数据（比如state）被保存在一个被称为store的容器中 → 在一个应用程序中只能有一个。store本质上是一个状态树，保存了所有对象的状态。任何UI组件都可以直接从store访问特定对象的状态。要通过本地或远程组件更改状态，需要分发一个action。分发在这里意味着将可执行信息发送到store。当一个store接收到一个action，它将把这个action代理给相关的reducer。reducer是一个纯函数，它可以查看之前的状态，执行一个action并且返回一个新的状态。数据流动如下：

        ![流程图](../img/643b8_articlex.png)
    - 简单来说 所有数据的状态，都保存在一个对象里面，并且储存到 store 这个容器中。
- ### Redux 的安装
    安装Redux开发环境的最快方法是使用react官方提供的create-react-app工具。在安装开始之前，要确保已经安装了[nodejs](node.html)和[npm](npm.html)。一切准备就绪后，一次执行以下命令：
    ```js
    $ npm install -g create-react-app             // 全局安装　create-react-app 工具
    $ create-react-app my-app　　　　　　　        //使用 create-react-app 创建 my-app 项目
    $ cd my-app/                                  //进入创建的文件夹
    $ npm install --save redux 或 yarn add redux  //安装 redux 模块
    ```
    
- ### Redux 基本 API

    + #### Store
        `Store` 就是保存数据的一个容器，在整个开发应用中只能有唯一的一个 `Store` 用来存放数据。
        我们可以使用 `Redux` 提供的 `createStore` 这个函数来生成 `Store` 这个数据容器。
        ```js
        import { createStore } from 'redux'; 
        const store = createStore(fn); //fn 为另一个函数作参数，返回新生成的 Store 对象。
        return store;
        ```
    + #### getState()
        我们可以通过 `store` 中的 `getState()` 方法获取 `store` 中的所有数据，并将其存储到 `state` 中。
        ```js
        import { createStore } from 'redux';
        const store = createStore(fn);
        const state = store.getState();
        ```

    * #### Action       
        `Action` 是一个对象，是改变 `State` 的唯一方法，它会运送数据到 `Store`。其中的 `type` 属性是必须的，表示 `Action` 的名称 ，`payload` 属性就是需要传递的数据内容。返回的 `store` 有一个可以借助 `action` 间接更改 `store` 的方法 `dispatch()`。后面会详细介绍。
        ```js
        const action = {
            type: 'ADD_TODO',
            payload: 'data'
        };
        store.dispatch(action); //此时可以通过 action 获取需要更改的数据
        ```
- ### Redux 简单使用
    - 首先，在安装的项目中删除 `src` 文件夹中除 `index.js` 以外的所有文件。打开 `index.js` ，删除所有代码，键入以下内容：
      ```js
      //从redux包中引入createStore()方法。
      import { createStore } from "redux";  
      //模拟 state 数据
      const state = {
        userName: "zlluGitHub"
        url: "https://zlluGitHub.github.io"
      }
      //创建了一个名为reducer的方法。第一个参数state是当前保存在store中的数据，第二个参数action是一个容器，用于：
        type - 一个简单的字符串常量，例如ADD, UPDATE, DELETE等。
        payload - 用于更新状态的数据。
      const reducer = function(state, action) {
        return state;
      }
      const store = createStore(reducer);
      ```
    + 目前我们创建的 `reducer` 是通用的。那么我们如果需要使用多个 `reducer` 时可以将用到 `Redux` 包中提供的 `combineReducers` 函数。修改代码如下：
      ```js
      import { createStore } from "redux";
      import { combineReducers } from 'redux';
      const state1 = {
        userName: "zlluGitHub"
        url: "https://zlluGitHub.github.io"
      }
      const state2 = {
        name: "zll"
        blog_url: "http://www.zhenglinglu.cn"
      }
      const productsReducer = function(state1=[], action) {
        return state;
      }

      const cartReducer = function(state2=[], action) {
        return state;
      }

      const allReducers = {
        products: productsReducer,
        shoppingCart: cartReducer
      }
      //将 productsReducer 和 cartReducer 这两条数据合并成一条数据
      const rootReducer = combineReducers(allReducers); 

      let store = createStore( rootReducer );
      
      ```
      在上面的代码中，我们将通用的 `reducer` 修改为 `productReducer` 和 `cartReducer` 。创建这两个空的 `reducer` 是为了展示如何在一个 `store` 中使用 `combineReducers` 函数组合多个 `reducer`。

+ ### 参考文档
  - #### [Redux 中文文档](http://www.redux.org.cn/)
  - #### [Redux 英文文档](https://redux.js.org/)