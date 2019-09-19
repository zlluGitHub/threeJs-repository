## ECMAScript 6 语法总结

---

- ### let 与 var 的区别
    ```js

    let 不能重复声明　不能声明提升　

    let 声明的变量｛｝为一个作用域

    const 用来声明常量　不能被修改

    let 变量的数组结构赋值 let [q,w,e]=[1,2,3 ]　结构不成功，结果为 undefind

    let 变量的对象结构赋值 let {q,w,e}={q:'test1',2:'test2',3:'test' }

    

    ```
- ### template 模板字符串
    ```js
    let name = "铃铛";
    let age = 26;

    //es5拼接字符串
    console.log(name+"年龄是"+age+"岁");
    //es6拼接字符串

    console.log(`${name}年龄是${age}岁`)
    ```
- ### 箭头函数
    注意：this 的指向普通函数与箭头函数有个微小的不同点，箭头函数没有自己的 this 值，其 this 值是通过继承其它传入对象而获得的,通常来说是上一级外部函数的 this 的指向。
    ```js
    var f = v => v;  
    //等同于：  
    var f = function(v) {  
        return v;  
    };  

    //如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分。  
    var f = () => 15;  
    //  等同于  
    var f = function () { return 15 };  

    var sum = (num1, num2) => num1 + num2;  
    //  等同于  
    var sum = function(num1, num2) {  
        return num1 + num2;  
    };  
    ```
- ### 变量的结构赋值
    + #### 数组的解构赋值
   
        之前变量赋值时只能直接指定值
        ```js
        let a = 1;
        let b = 2;
        let c = 3;
        ```
        ES6 允许写成下面这样赋值
        ```js
        let [a, b, c] = [1, 2, 3];
        a // 1
        b // 2
        c // 3

        let [foo, [[bar], baz]] = [1, [[2], 3]];
        foo // 1
        bar // 2
        baz // 3

        let [x, y, ...z] = ['a'];
        x // "a"
        y // undefined
        z // []

        let [foo] = [];
        foo // undefined
        let [bar, foo] = [1];
        foo // undefined
        ```
        结构默认值 , ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，只有当一个数组成员严格等于undefined，默认值才会生效。
        ```js
        let [foo = true] = [];
        // foo = true

        let [x, y = 'b'] = ['a']; 
        // x='a', y='b'

        let [x, y = 'b'] = ['a', undefined]; 
        // x='a', y='b'

        let [x = 1] = [null];
        // x = null
        ```
    + #### 对象的结构赋值
        ```js
        //对象是无序的，底层由哈希表实现
        let obj = {
            a:'1',
            b:'2',
            c:'3'
        }

        //由于obj是非线性的，所以x,y,z的值不固定.所以采用下述方式进行对象的结构赋值
        let {x,y,z} = obj;
        let {a:mya,b:myb,c:myc} = obj
        ```
       

- ### es6 对象合并方法

    ```js
    Object.assign(aldobject,newobject) $.extend()　｛...obj１，...obj２｝//对象合并方法　
    Object.assign({},newobject)　或｛...obj｝                            //扩展运算符复制新的对象
    ```

    `promise.all() 处理多个请求成功之后要做某件事
axios 请求底层就是使用 promise 实现的，所以每个 axios 请求就是 promise 实例`
