## javascript 笔记总结
---

- ### 数组对象
    - #### push() 
        给数组最后添加一项或多项 返回数组的长度
        ```js
        var animals = ['pigs', 'goats', 'sheep'];

        console.log(animals.push('cows'));
        //输出结果: 4

        console.log(animals);
        //输出结果: Array ["pigs", "goats", "sheep", "cows"]

        animals.push('chickens');

        console.log(animals);
        //输出结果: Array ["pigs", "goats", "sheep", "cows", "chickens"]

        ```
    + #### pop() 
        删除数组的最后一项，返回被删除的数据
        ```js
        var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

        console.log(plants.pop());
        //输出结果: "tomato"

        console.log(plants);
        //输出结果: Array ["broccoli", "cauliflower", "cabbage", "kale"]

        plants.pop();

        console.log(plants);
        //输出结果: Array ["broccoli", "cauliflower", "cabbage"]
        ```
    - #### unshift() 
        向数组前面添加一项或多项 并返回数组长度
        ```js
        var array1 = [1, 2, 3];

        console.log(array1.unshift(4, 5));
        // 输出结果: 5

        console.log(array1);
        // 输出结果: Array [4, 5, 1, 2, 3]
        ```
    - #### shift() 
        删除数组前的第一项，并返回被删除的数据
        ```js
        var array1 = [1, 2, 3];

        var firstElement = array1.shift();

        console.log(array1);
        // 输出结果: Array [2, 3]

        console.log(firstElement);
        // 输出结果: 1

        ```
    - #### concat()
        用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
        ```js
        var array1 = ['a', 'b', 'c'];

        var array2 = ['d', 'e', 'f'];

        console.log(array1.concat(array2));

        //输出结果：["a", "b", "c", "d", "e", "f"]
        ```
    
    - #### filter() 
        方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。

        ```js 

        var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

        const result = words.filter(word => word.length > 6);

        console.log(result);

        //输出结果：["exuberant", "destruction", "present"]
        ```
    - #### find() 
        返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
        ```js 

        var array1 = [5, 12, 8, 130, 44];

        var found = array1.find(function(element) {

            return element > 10;

        });

        console.log(found);

        //输出结果: 12
        ```
    - #### findIndex()
        返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。
        ```js
        var array1 = [5, 12, 8, 130, 44];

        function findFirstLargeNumber(element) {

            return element > 13;

        }

        console.log(array1.findIndex(findFirstLargeNumber));

        //输出结果: 3
        ```
    - #### join() 
        将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。
        ```js
        var elements = ['Fire', 'Wind', 'Rain'];

        console.log(elements.join());
        //输出结果: Fire,Wind,Rain

        console.log(elements.join(''));
        //输出结果: FireWindRain

        console.log(elements.join('-'));
        //输出结果: Fire-Wind-Rain
        ```

    - #### toString() 
        返回一个字符串，表示指定的数组及其元素。
        ```js
        var array1 = [1, 2, 'a', '1a'];

        console.log(array1.toString());
        // 输出结果: "1,2,a,1a"
        ```

    
    - #### indexOf() 
        返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
        ```js
        var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

        console.log(beasts.indexOf('bison'));
        //输出结果: 1

        //从索引值 2 开始
        console.log(beasts.indexOf('bison', 2));
        //输出结果:  4

        console.log(beasts.indexOf('giraffe'));
        //输出结果:  -1
        ```
    - #### reverse() 
        将数组中元素的位置颠倒。第一个数组元素成为最后一个数组元素，最后一个数组元素成为第一个。
        ```js
        var array1 = ['one', 'two', 'three'];
        console.log('array1: ', array1);
        // 输出结果: Array ['one', 'two', 'three']

        var reversed = array1.reverse(); 
        console.log('reversed: ', reversed);
        // 输出结果: Array ['three', 'two', 'one']

        console.log('array1: ', array1);
        // 输出结果: Array ['three', 'two', 'one']
        ```

    - #### slice() 
        返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。且原始数组不会被修改。
        ```js
        var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

        console.log(animals.slice(2));
        // 输出结果: Array ["camel", "duck", "elephant"]

        console.log(animals.slice(2, 4));
        // 输出结果: Array ["camel", "duck"]

        console.log(animals.slice(1, 5));
        // 输出结果: Array ["bison", "camel", "duck", "elephant"]
        ```
    - #### splice() 
        通过删除现有元素和/或添加新元素来更改一个数组的内容。
        ```js
        var months = ['Jan', 'March', 'April', 'June'];

        months.splice(1, 0, 'Feb');
        console.log(months);
        // 输出结果: Array ['Jan', 'Feb', 'March', 'April', 'June']

        months.splice(4, 1, 'May');
        console.log(months);
        // 输出结果: Array ['Jan', 'Feb', 'March', 'April', 'May']

        ```

    - #### sort() 
        方法用就地（ in-place ）的算法对数组的元素进行排序，并返回数组。 sort 排序不一定是稳定的。默认排序顺序是根据字符串 Unicode 码点。
        ```js
        var months = ['March', 'Jan', 'Feb', 'Dec'];
        months.sort();
        console.log(months);
        // 输出结果: Array ["Dec", "Feb", "Jan", "March"]

        var array1 = [1, 30, 4, 21];
        array1.sort();
        console.log(array1);
        // 输出结果: Array [1, 21, 30, 4]

        ```
    - #### forEach() 
        对数组的每个元素执行一次提供的函数。
        ```js
        var array1 = ['a', 'b', 'c'];

        array1.forEach(function(element) {
            console.log(element);
        });

        //输出结果："b"
        //输出结果："a"
        //输出结果："c"
        ```
    - #### includes() 
        用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。
        ```js
        var array1 = [1, 2, 3];

        console.log(array1.includes(2));
        //输出结果: true

        var pets = ['cat', 'dog', 'bat'];

        console.log(pets.includes('cat'));
        //输出结果： true

        console.log(pets.includes('at'));
        //输出结果： false

        ```

    - #### map() 
        方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
        ```js
        var array1 = [1, 4, 9, 16];

        const map1 = array1.map(x => x * 2);

        console.log(map1);
        //输出结果： Array [2, 8, 18, 32]
        ```
    - #### reduce() 
        对累加器和数组中的每个元素（从左到右）应用一个函数，将其减少为单个值。
        ```js
        const array1 = [1, 2, 3, 4];
        const reducer = (accumulator, currentValue) => accumulator + currentValue;

        // 1 + 2 + 3 + 4
        console.log(array1.reduce(reducer));
        //输出结果: 10

        // 5 + 1 + 2 + 3 + 4
        console.log(array1.reduce(reducer, 5));
        //输出结果: 15
        ```
    - #### 方法总结  
        ```js
        push() 想数组最后添加一项或多项 返回数组的长度
        pop() 删除数组的最后一项，返回被删除的数据

        unshift() 向数组前面添加一项或多项 并返回数组长度
        shift() 删除数组前的第一项，并返回被删除的数据

        concat() 用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
        join() 将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。

        indexOf() 返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
        reverse() 将数组中元素的位置颠倒。第一个数组元素成为最后一个数组元素，最后一个数组元素成为第一个。

        slice() 返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。且原始数组不会被修改。
        splice() 通过删除现有元素和/或添加新元素来更改一个数组的内容。

        sort() 方法用就地（ in-place ）的算法对数组的元素进行排序，并返回数组。 sort 排序不一定是稳定的。默认排序顺序是根据字符串 Unicode 码点。
        filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。
        arr.filter(function(ele){
        return ele>4;
        })

        forEach() 方法对数组的每个元素执行一次提供的函数。
        find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
        findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。
        map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
        reduce() 方法对累加器和数组中的每个元素（从左到右）应用一个函数，将其减少为单个值。
        ```

- ### 字符串对象

        String.length 表示一个字符串的长度。

    - #### concat()
        将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回。
        ```js
        str.concat(string2, string3[, ..., stringN])

        var hello = "Hello, ";
        console.log(hello.concat("Kevin", " have a nice day.")); 
        //输出结果：Hello, Kevin have a nice day
        ```

    - #### charAt(index) 
        从一个字符串中返回指定的字符， index指的是索引值
        ```js
        var str = "Hello";
        
        console.log(str.charAt(0))
        //输出结果：　H
        ```
    - #### charCodeAt() 
        获取字符串中对应的某个字符的字符编码 返回 0 到 65535 之间的整数，表示给定索引处的 UTF-16 代码 语法：｀str.charCodeAt(index)｀
        ```js
        var　str　＝　str.charCodeAt(0)　
        console.log(str) //输出结果：65
        ```
    - #### endsWith()
        用来判断当前字符串是否是以另外一个给定的子字符串“结尾”的，根据判断结果返回 true 或 false。语法：`str.endsWith(searchString [, position])`;
        ```js
        
        var str = "To be, or not to be, that is the question.";

        alert( str.endsWith("question.") );  // true
        alert( str.endsWith("to be") );      // false
        alert( str.endsWith("to be", 19) );  // true
        ```
        + #### includes(str) 
        用于判断一个字符串是否包含在另一个字符串中，根据情况返回 true 或 false。
        ```js
        var str = 'To be, or not to be, that is the question.';

        console.log(str.includes('question'));    // true
        console.log(str.includes('nonexistent')); // false
        console.log(str.includes('To be', 1));    // false
        ```
    + #### indexOf(str) 
        是否包含,第一个结果为 true 或 false 第二个结果为位置或-1.语法：`str.indexOf(searchValue[, fromIndex])`
        ```js
        "Blue Whale".indexOf("Blue");     // returns  0
        "Blue Whale".indexOf("Blute");    // returns -1
        "Blue Whale".indexOf("Whale", 0); // returns  5
        "Blue Whale".indexOf("Whale", 5); // returns  5
        "Blue Whale".indexOf("", 9);      // returns  9
        "Blue Whale".indexOf("", 10);     // returns 10
        "Blue Whale".indexOf("", 11);     // returns 10
        ```



    - #### repeat() 
        构造并返回一个新字符串，该字符串包含被连接在一起的指定数量的字符串的副本。语法：let resultString = str.repeat(count);
        ```js
        "abc".repeat(0)      // ""
        "abc".repeat(1)      // "abc"
        "abc".repeat(2)      // "abcabc"
        ```




    - #### search() 返回正确查找的开始位置 否则返回 -1。语法：`str.search(regexp)`
        执行正则表达式和 String对象之间的一个搜索匹配。
        ```js
        var str = "qwerty";
        console.log(str.search(/q/))
        //输出结果： 0
        console.log(str.search(/c/))
        ///输出结果： -1
        ```

  

    + #### split()
        使用指定的分隔符字符串将一个 String 对象分割成字符串数组，以将字符串分隔为子字符串，以确定每个拆分的位置。语法：`str.split([separator[, limit]])`
        ```js
        "Webkit Moz O ms Khtml".split( " " )   // ["Webkit", "Moz", "O", "ms", "Khtml"]
        ```
    + #### slice() 
        提取一个字符串的一部分，并返回一新的字符串。语法：`str.slice(beginSlice[, endSlice])`
        ```js
        var str1 = 'The morning is upon us.';
        var str2 = str1.slice(4, -2);

        console.log(str2); 
        // 输出结果： morning is upon u
        ```

    - #### toUpperCase() 
        字符串转成大写 语法：`console.log(str.toUpperCase())`
        ```js
        console.log( "alphabet".toUpperCase() ); // "ALPHABET"
        ```

    - #### toLowerCase() 
        字符串转成小写 语法：`console.log(str.toLowerCase())`
        ```js
        console.log( "ALPHABET".toLowerCase() ); // "alphabet"
        ```

    - #### replace() 
        方法返回一个由替换值替换一些或所有匹配的模式后的新字符串。语法：`str.replace(regexp|substr, newSubStr|function)`
        ```js
        var str = 'Twas the night before Xmas...';
        var newstr = str.replace(/xmas/i, 'Christmas');
        console.log(newstr);  // Twas the night before Christmas...
        ```

    - #### trim() 
        从一个字符串的两端删除空白字符。
        ```js
        var orig = '   foo  ';
        console.log(orig.trim()); // 'foo'
        ```
    - #### trimLeft() 
        去掉字符串左的空白符。
        ```js
        var orig = '   foo  ';
        console.log(orig.trim()); // 'foo　　'
        ```
    - #### trimRight() 
        去掉字符串右的空白符。
        ```js
        var orig = '   foo  ';
        console.log(orig.trim()); // '　　foo'
        ```

- ### 正则 RegExp
    - regexp 正则表达式 RegExp 检测某个字符串或某个数字是否符合规则
    - exec 检测字符串是否符合正则表达式的规则 想要的到 正确匹配的某段字符串的时候 使用 exec 方法，使用 exec 方法的得到的返回值[0]
    - 如何符合返回一个类数组(包含符合条件的某段字符串，这个字符串开始的位置，被检测的字符串，分组情况) 反之 null
    - #### 参数
        ```js
        g: 全局匹配;找到所有匹配，而不是在第一个匹配后停止
        i: 忽略大小写
        m: 多行; 将开始和结束字符（^和$）视为在多行上工作（也就是，分别匹配每一行的开始和结束（由 \n 或 \r 分割），而不只是只匹配整个输入字符串的最开始和最末尾处。

        ```
    - #### regexp 匹配规则
        ```js
        []代表一位 {}(只作用于前面一位数)个数

        [0-9] \d 一位数字 [a-z] 一位小写字母 [A-Z] 一位大写字母 [A-z] 一位字母或下划线

        \w 一位字母数字或下划线 \s 一位空白符

        ^ 开头 $ 结尾

        +(1 到多) \*(0 到多) ?(0 位或一位) (只作用于前面一位数)个数

        | 或 ()分组

        \ 转义符

        [^a] 非

        /^(.)\1{1,}$/ 匹配全部一样的字符 \数字 和低级个分组内的第一位完全一样
        ```
    
    - #### 案例
        ```js
        var re = /^1(6|7)4$/
        console.log(re.exec('4qewekjhgjhg74'))

        var regex1 = /\w+/;
        var regex2 = new RegExp('\\w+');

        console.log(regex1);
        // 输出结果: /\w+/

        console.log(regex2);
        // 输出结果: /\w+/

        console.log(regex1 === regex2);
        // 输出结果: false
        ```
    - #### 正则匹配手机号
        ```js
        中国电信号段
        133、149、153、173、177、180、181、189、199

        中国联通号段
        130、131、132、145、155、156、166、171、175、176、185、186

        中国移动号段
        134(0-8)、135、136、137、138、139、147、150、151、152、157、158、159、178、182、183、184、187、188、198

        13  0123456789
        15  012345789
        16  6
        17  135678
        18  0123456789
        19  89

        var re = /^1(3[0-9]|5[012345789]|6[6]|7[135678]|8[0-9]|9[89])[0-9]{8}$/
        ```
    - #### 更多
        [JavaScript RegExp 正则表达式总结](https://github.com/zlluGitHub/StudyRecord/issues/25)

- ### 本地信息存储方式
    + #### Cookie

        Cookie 是客户端技术，程序把每个用户的数据以 cookie 的形式写给用户各自的浏览器。当用户使用浏览器再去访问服务器中的web资源时，就会带着各自的数据去。这样，web资源处理的就是用户各自的数据了。
    + #### Session

        Session 是服务器端技术，利用这个技术，服务器在运行时可以为每一个用户的浏览器创建一个其独享的session对象，由于 session 为用户浏览器独享，所以用户在访问服务器的web资源时，可以把各自的数据放在各自的 session 中，当用户再去访问服务器中的其它web资源时，其它web资源再从用户各自的 session 中取出数据为用户服务。

    + #### sessionStorage
        存储信息 窗口关闭消失
        ```js  
        sessionStorage.removeItem('key') 删除某一条项数据
        sessionStorage.clear() 删除所有项数据
        ```
    - #### localStorage
        存储信息 一直存在
        ```js
        localStorage.removeItem('key')
        localStorage.clear() 删除所有项数据
        lolocalStorage.setItem('key','val') 添加谋一项数据
        lolocalStorage.getItem('key') 获取谋一项数据
        ```
- ### JavaScript 获取当前时间戳
    ```js
    第一种方法：
        var timestamp = Date.parse(new Date()); //获取的时间戳是把毫秒改成 000 显示，
        结果：1280977330000

    第二种方法：
        var timestamp = (new Date()).valueOf(); //获取了当前毫秒的时间戳。
        结果：1280977330748

    第三种方法：
        var timestamp=new Date().getTime(); //获取了当前毫秒的时间戳。
        结果：1280977330748
    ```

- ### 倒计时案例
    ```js
    <script type="text/javascript">
        var targetHoursTime = 21;
        var targetMinutesTime = 24;
        var targetSecondsTime = 59;
        var Time = setInterval(Timekeeping,1000);
        function  Timekeeping(){
            var date = new Date();
            var nowHoursTime = date.getHours();
            var nowMinutesTime = date.getMinutes();
            var nowSecondsTime = date.getSeconds();
            var getHoursTime = targetHoursTime - nowHoursTime;
            var getMinutesTime = targetMinutesTime - nowMinutesTime;
            var getSecondsTime = targetSecondsTime - nowSecondsTime;
            if (getHoursTime === 0 && getMinutesTime === -1 && getSecondsTime === 59) {
                $('div').html('时间到！');
                clearInterval(Time);
            };
            if(getHoursTime < 10){
                $('span:nth-child(1)').text(`${'0'+getHoursTime}`);
            }else{
                $('span:nth-child(1)').text(getHoursTime);
            };
            if(getMinutesTime < 10){
                $('span:nth-child(2)').text(`${'0'+getMinutesTime}`);
            }else{
                 $('span:nth-child(2)').text(getMinutesTime);
            };
            if(getSecondsTime < 10){
                $('span:nth-child(3)').text(`${'0'+getSecondsTime}`);
            }else{
                $('span:nth-child(3)').text(getSecondsTime);
            };
        };
    </script>
    ```

- ### 定时器
  计时器:是异步函数
  ```js
  setInterval(fn) 反复执行某个函数 
  setTimeout(fn)  延迟执行
  clearInterval() 
  clearTimeout()
  ```
- ### 日期对象
    ```js
    var date = new Date() 创建一个当前时间的日期对象
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var hao = date.getDate();
    var day = date.getDay(); 星期 0(周日)-6
    var hour = date.getHours();
    .getMinutes() 分钟;
    .getSeconds() 秒;
    .getMilliSeconds() 毫秒;

    将 get 换成 set 就是设置,格林威治时间 1970.1.1 0:0:0 到现在的毫秒数
    当你需要一个永远不会重复的数时就使用 getTime
    ```

- ### Math 随机数
    ```js
    Math.floor() 返回小于 x 的最大整数。
    Math.round() 返回四舍五入后的整数.
    Math.random() 返回 0 到 1 之间的伪随机数.
    Math.ceil() 返回 x 向上取整后的值.
    ```
    - 随机获取 [max~min) 之间的随机数
        ```js
        parseInt(Math.random()_(max-min+1)+min,10);
        Math.floor(Math.random()_(max-min+1)+min);
        ```