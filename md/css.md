## 重温 css3 之整理总结

- ### 清除浮动

  ```css
  .clearfix:after {
      display: block;
      clear: both;
      content: "";
      visibility: hidden;
      height: 0;
  }
  .clearfix {
      zoom: 1;
  }
  ```

- ### 媒体查询案例


    ```css
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"/>

    @media screen and (max-width:100px){
      body{
        <!-- 样式 -->
      }
    }


    @media screen and (max-width: 1200px) and (min-width: 992px){
      body{background-color: #000;}
    }
    @media screen and (max-width: 992px) and (min-width: 768px){
      body{background-color: blue;}
    }
    @media screen and (max-width: 768px){
      body{background-color: red;}
    }
    ```
- ### 背景渐变
  ```css
  background:linear-gradient(#000,#fff);
  ```
- ### 直角三角形
  ```css
  border-top: 40px solid #000;
  border-left: 40px solid transparent;
  ```
- ### 双边框
  ```css
  border:1px double #fff;
  ```
- ### css动画
  ```css
  animation: 动画名称  一次效果的持续时间  速度曲线  延迟  播放次数  偶数次是否逆向播放 是否停到最后一帧;
  @keyframes jump {
      0%{transform:translateY(-50px);opacity: 1;}
      50%{transform:translateY(-60px);opacity: 0.5;}
      100%{transform:translateY(-100px);opacity: 1;}
    }
  ```
- ### 引入字体，将字体导入到本地

    ```css
    @font-face{
      font-family:haha;
      src:url('font/BebasNeue-webfont.eot'),
          url('font/BebasNeue-webfont.svg'),
          url('font/BebasNeue-webfont.ttf'),
          url('font/BebasNeue-webfont.woff');
    }

    .fonts{
        font-family:haha;
        font-size:18px;
    } 
    ```
- 字母不换行

  ```css
  letter-spacing:2px ;/*字母间距*/

  word-spacing:20px; /*单词间距*/

  word-break: break-all; /*打破单词*/

  /*超出部分显示三个点*/
  /*1.必有有定宽*/
  /*2.强制不换行*/
  /*3.超出部分隐藏*/
  /*4.超出部分文字显示三个点*/
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ```


- ### 动画旋转 过渡

    ```css
    /*转换 ： 位移(translate(水平,垂直))  缩放  旋转  拉伸*/
    /*transform: translate(200px,100px);  水平移动 200px  垂直移动 100px*/
    /*盒子原来的位置不会变化，只是内容移动，并不会影响其他盒子，还有可能覆盖其他盒子*/
    /*transform: scale(1,2) 宽度放大一倍 高度放大2倍 默认放大圆心是盒子中心点*/
    /*transform: scale(0.5);*/
    /*transform: rotate(45deg);*/
    /*转换的组合变化*/
    transform: translate(0px,0) rotate(90deg) scale(0.5,1) ;
    /*使用 transform-origin 改变 transform 的中心点*/



    /*使用 transform-origin 改变 transform 的中心点  transform-origin: center(水平) bottom(垂直);  */
    /*transform-origin: center bottom; */
    /*transform: rotate(90deg);*/


    /*transition: 样式名(all 代表所有改变的样式)  时间  速度曲线(linear(匀速） ease(默认 慢-快-慢)  ease-in(慢-快)  ease-out(快-慢)) 延时*/
    /*transition 会监听该元素的样式变化 只要变化的样式名符合 就会把这个变化的过程展现出来*/
    ```





