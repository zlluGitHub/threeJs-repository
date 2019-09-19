$(document).ready(function() {
    //首页标题动态遍历
    titleContentList([{
            perant_title: "Web前端知识整合",
            child_title: [{
                    url: "page/React.html",
                    list_title: "深入浅之 React 框架"
                },
                {
                    url: "page/vue.html",
                    list_title: "Vue.js 整理总结"
                },
                {
                    url: "page/linuxJava.html",
                    list_title: "linux 安装 java 环境和 eclipse"
                },
                {
                    url: "page/Es6.html",
                    list_title: "ECMAScript 6 整理总结"
                },
                {
                    url: "page/sass.html",
                    list_title: "Sass 安装及使用"
                },
                {
                    url: "page/javascript.html",
                    list_title: "javascript 笔记总结"
                },
                {
                    url: "page/redux.html",
                    list_title: "redux 状态容器"
                },
                {
                    url: "page/git.html",
                    list_title: "git和github的基本知识"
                },
                {
                    url: "page/npm.html",
                    list_title: "NPM 的安装及使用"
                },
                {
                    url: "page/node.html",
                    list_title: "Linux 之 Nodejs 的安装与配置"
                },
                {
                    url: "page/linux.html",
                    list_title: "Linux 常用基础命令"
                },
                {
                    url: "page/webpack.html",
                    list_title: "webpack 的简单使用"
                },
                {
                    url: "page/css.html",
                    list_title: "重温 css3 之整理总结"
                },
                {
                    url: "page/Vs code.html",
                    list_title: "vscode 常用插件推荐"
                }
            ]
        },
        {
            perant_title: "React 专题",
            child_title: [{
                    pic_url: "img/favicon (2).ico",
                    url: "https://reactjs.org",
                    list_title: "React",
                    gitHub_Url: "https://github.com/facebook/react",
                    describe: "React 是一个Facebook 和Instagram 用来创建用户界面的JavaScript 库。"
                },
                {
                    pic_url: "img/152.png",
                    url: "http://www.redux.org.cn",
                    list_title: "Redux",
                    describe: "Redux 是 JavaScript 状态容器，提供可预测化的状态管理。"
                },
                {
                    pic_url: "img/94673a4.png",
                    url: "https://react-redux.js.org",
                    list_title: "react-redux",
                    gitHub_Url: "https://github.com/reduxjs/react-redux",
                    describe: "react-redux 允许您的React组件从Redux存储中读取数据，并将操作分派给存储以更新数据。"
                },
                {
                    pic_url: "img/94673a4.png",
                    url: "https://www.npmjs.com/package/react-transition-group",
                    list_title: "react-transition-group",
                    gitHub_Url: "https://github.com/reactjs/react-transition-group",
                    describe: "用于管理组件状态（包括安装和卸载）的一组组件，专门针对动画设计。"
                },
                {
                    pic_url: "img/favicon (2).ico",
                    url: "https://reactnative.cn",
                    list_title: "React Native",
                    gitHub_Url: "https://github.com/facebook/react-native",
                    describe: "React Native只使用JavaScript也能编写原生移动 WebApp 应用,它在设计原理上和React一致，通过声明式的组件机制来搭建丰富多彩的用户界面。"
                },
                {
                    pic_url: "img/colorfavicon.ico",
                    url: "https://material-ui.com",
                    list_title: "material-ui",
                    gitHub_Url: "https://github.com/mui-org/material-ui",
                    describe: "集成 Google Material 设计的 React 组件"
                },
                {
                    url: "https://www.npmjs.com/package/redux-logger",
                    list_title: "redux-logger",
                    gitHub_Url: "https://github.com/reduxjs/react-redux",
                    describe: "redux-logger 是一个生产 Redux 日志记录工具，可在自己的浏览器中显示数据存放状态。"
                },
                {
                    url: "https://www.npmjs.com/package/redux-thunk",
                    list_title: "redux-thunk",
                    gitHub_Url: "https://github.com/reduxjs/react-redux",
                    describe: "Redux的Thunk 中间件，便于函数传递。"
                },
                {
                    url: "http://recharts.org/en-US",
                    list_title: "Recharts",
                    gitHub_Url: 'https://github.com/recharts/recharts',
                    describe: '基于 React 的组合式图表组件。'
                },
                {
                    pic_url: "img/antdesign.png",
                    url: "https://ant.design/index-cn",
                    list_title: "Ant Design",
                    gitHub_Url: 'https://github.com/ant-design/ant-design',
                    describe: 'Ant Design 的 React 实现，开发和服务于企业级后台产品。'
                },
                {
                    url: "https://jpuri.github.io/react-draft-wysiwyg",
                    list_title: "Draft Wysiwyg",
                    describe: '在 ReactJS 和 DraftJS 上构建的 Wysiwyg'
                }
            ]

        },
        {
            perant_title: "Vue 专题",
            child_title: [{
                    pic_url: "img/apple-icon-57x57.png",
                    url: "https://vuejs.org",
                    list_title: "Vue",
                    gitHub_Url: 'https://github.com/vuejs/vue',
                    describe: '一个用以创建用户接口的直观、快速、简洁的 MVVM 框架'
                },
                {
                    pic_url: "img/apple-icon-57x57.png",
                    url: "https://cli.vuejs.org",
                    list_title: "vue-cli",
                    gitHub_Url: 'https://github.com/vuejs/vue-cli',
                    describe: 'Vue.js 简单的脚手架命令行工具。'


                },
                {
                    pic_url: "img/apple-icon-57x57.png",
                    url: "https://vuex.vuejs.org",
                    list_title: "Vuex",
                    gitHub_Url: 'https://github.com/vuejs/vuex',
                    describe: 'Vuex 是一个专门为 Vue.js 应用所设计的集中式状态管理架构，借鉴了 Flux 和 Redux 的设计思想。'

                },
                {
                    pic_url: "img/apple-icon-57x57.png",
                    url: "https://router.vuejs.org",
                    list_title: "vue-router",
                    gitHub_Url: 'https://github.com/vuejs/vue-router',
                    describe: 'Vue.js 的官方路由。'
                },
                {
                    pic_url: "img/iview.png",
                    url: "https://www.iviewui.com",
                    list_title: "iview",
                    gitHub_Url: 'https://github.com/iview/iview',
                    describe: '一套基于 Vue.js 的高质量 UI 组件库。'
                },
                {
                    pic_url: "img/weex.png",
                    url: "http://weex.apache.org",
                    list_title: "weex",
                    gitHub_Url: 'https://github.com/apache/incubator-weex',
                    describe: 'Weex 是阿里推出的跨平台的 Web 移动端开发框架，具有轻量级、可扩展和高性能的特点。'
                },
                {
                    pic_url: "img/er.png",
                    url: "https://mint-ui.github.io",
                    list_title: "Mint UI",
                    gitHub_Url: 'https://github.com/ElemeFE/mint-ui',
                    describe: '基于 Vue.js 的 mint-ui 移动端框架。'
                },
                {
                    url: "https://ustbhuangyi.github.io/better-scroll",
                    list_title: "BetterScroll",
                    gitHub_Url: 'https://github.com/ustbhuangyi/better-scroll',
                    describe: 'BetterScroll 可以应用于普通滚动列表，选择器，幻灯片，索引列表，启动指导等。此外，还可以更轻松地实现一些复杂的需求，如下拉刷新和上拉负载。'
                },
                {
                    pic_url: "img/logo-b6e1ef6e.svg",
                    url: "http://sass-lang.com",
                    list_title: "Sass",
                    gitHub_Url: '',
                    describe: 'Sass 拥有比其他任何 CSS 扩展语言更多的功能和能力。'
                },
                {
                    pic_url: "img/favicon (4).png",
                    url: "https://www.styled-components.com",
                    list_title: "styled-components",
                    gitHub_Url: 'https://github.com/styled-components/styled-components',
                    describe: '利用标记的模板文字（最近添加到JavaScript）和CSS的强大功能，样式组件允许您编写实际的CSS代码来设置组件的样式。'
                },
                {
                    pic_url: "img/94673a4.png",
                    url: "https://didi.github.io/cube-ui/#/zh-CN",
                    list_title: "cube-ui",
                    gitHub_Url: 'https://github.com/didi/cube-ui',
                    describe: '基于 Vue.js 实现的精致移动端组件库。'

                },
                {
                    url: "https://dwqs.github.io/vue-area-linkage",
                    list_title: "vue-area-linkage",
                    gitHub_Url: 'https://github.com/dwqs/vue-area-linkage',
                    describe: '基于 Element UI 的省市区街道联动选择组件'
                },
                {
                    url: "https://distpicker.pigjian.com",
                    list_title: "vue-area-linkage",
                    gitHub_Url: 'https://github.com/jcc/v-distpicker',
                    describe: '一个灵活的，高可用的 vue 省市区选择插件。'
                }
            ]
        },
        {
            perant_title: "前端开发组件库",
            child_title: [

                {
                    pic_url: "img/favicon (1).png",
                    url: "http://www.easybui.com",
                    list_title: "BUI",
                    gitHub_Url: '',
                    describe: 'BUI 是用来快速构建界面交互的UI框架, 专注webapp开发, 开发者只需关注业务的开发。'
                },
                {
                    pic_url: "img/favicon.png",
                    url: "https://www.swiper.com.cn",
                    list_title: "Swiper",
                    gitHub_Url: '',
                    describe: 'Swiper 是纯 javascript 打造的滑动特效插件，面向手机、平板电脑等移动终端。'
                },
                {
                    pic_url: "img/favicon (9).ico",
                    url: "http://element-cn.eleme.io/#/zh-CN",
                    list_title: "Element",
                    gitHub_Url: 'https://github.com/ElemeFE/element',
                    describe: '饿了么前端推出的基于 Vue.js 2.0 的后台组件库，它能够帮助你更轻松更快速地开发 web 项目。'
                },
                {
                    pic_url: "img/favicon (1).ico",
                    url: "http://www.jeasyui.net",
                    list_title: "EasyUI",
                    gitHub_Url: '',
                    describe: 'easyui 是一种基于jQuery的用户界面插件集合。'
                },
                {
                    url: "https://www.layui.com",
                    list_title: "layui",
                    gitHub_Url: 'https://github.com/sentsin/layui',
                    describe: '采用自身模块规范编写的前端 UI 框架，遵循原生 HTML/CSS/JS 的书写形式，极低门槛，拿来即用。'
                },
                {
                    pic_url: "img/favicon.ico",
                    url: "http://www.angularjs.net.cn",
                    list_title: "AngularJS",
                    gitHub_Url: 'https://github.com/angular/angular',
                    describe: '一个开发移动端和桌面端的框架。'
                },
                {
                    pic_url: "img/apple-touch-icon.png",
                    url: "https://v4.bootcss.com",
                    list_title: "Bootstrap",
                    gitHub_Url: 'https://github.com/twbs/bootstrap',
                    describe: 'Bootstrap 是一套用于 HTML、CSS 和 JS 开发的开源工具集，用于开发响应式布局、移动设备优先的 WEB 项目。'
                },
                {
                    pic_url: "img/favicon (3).png",
                    url: "http://echarts.baidu.com",
                    list_title: "ECharts",
                    gitHub_Url: 'https://github.com/apache/incubator-echarts',
                    describe: 'ECharts 是一个使用 JavaScript 实现的开源可视化库，可以流畅的运行在 PC 和移动设备上，底层依赖轻量级的矢量图形库 ZRender，提供直观，交互丰富，可高度个性化定制的数据可视化图表。'
                }
            ]

        },
        {
            perant_title: "前端相关开发文档",
            child_title: [

                {
                    pic_url: "img/ea1.png",
                    url: "https://developer.mozilla.org/zh-CN",
                    list_title: "MDN Web 文档",
                    describe: '开发者参文档。'
                },
                {
                    url: "http://www.nginx.cn/doc",
                    list_title: "Nginx 中文文档",
                    describe: '解决跨域数据请求。'
                },
                {
                    pic_url: "img/favicon (5).ico",
                    url: "https://webpack.js.org",
                    list_title: "webpack",
                    gitHub_Url: 'https://github.com/webpack/webpack',
                    describe: '开发者参文档。'
                }

            ]

        },
        {
            perant_title: "Web开发 js 库",
            child_title: [

                {
                    pic_url: "img/94673a4.png",
                    url: "https://www.npmjs.com/package/axios",
                    list_title: "axios",
                    gitHub_Url: 'https://github.com/axios/axios',
                    describe: '基于Promise的HTTP客户端，用于浏览器和node.js。'
                },
                {
                    pic_url: "img/moment-favicon.png",
                    url: "http://momentjs.cn",
                    list_title: " Moment.js",
                    gitHub_Url: 'https://github.com/moment/moment',
                    describe: '日期时间格式转换 js 插件。'
                },
                {
                    pic_url: "img/lo.png",
                    url: "https://www.lodashjs.com",
                    list_title: "Lodash.js",
                    gitHub_Url: 'https://github.com/lodash/lodash/wiki/FP-Guide',
                    describe: 'Lodash，这是一个具有一致接口、模块化、高性能等特性的 JavaScript 工具库。'
                },
                {
                    pic_url: "img/favicon (3).ico",
                    url: "https://jquery.com",
                    list_title: "jQuery",
                    gitHub_Url: '',
                    describe: 'jQuery是一个快速，小巧，功能丰富的JavaScript库。'
                },
                {
                    pic_url: "img/favicon (2).png",
                    url: "http://www.zeptojs.cn",
                    gitHub_Url: 'https://github.com/madrobby/zepto',
                    describe: 'Zepto 是一个轻量级的针对现代高级浏览器的 JavaScript 库， 它与jquery有着类似的 api, 适用于移动端。',
                    list_title: "zeptojs"
                }
            ]

        },
        {
            perant_title: "前端常用工具",
            child_title: [{
                    pic_url: "img/apple.png",
                    url: "https://www.netlify.com",
                    list_title: "netlify",
                    describe: 'netlify 可以用于构建 部署和管理现代 Web 项目。'
                },
                {
                    pic_url: "img/favicon (7).ico",
                    url: "https://sso.qiniu.com",
                    list_title: "七牛云",
                    describe: '七牛云可以方便快捷的访问在七牛云中使用的各类资源，通过简单操作便可以完成对相关资源的配置监控和管理。'
                },
                {
                    pic_url: "img/663.ico",
                    url: "https://gitee.com",
                    list_title: "码云",
                    describe: '码云专为开发者提供稳定、高效、安全的云端软件开发协作平台。'
                },
                {
                    pic_url: "img/gitbook.ico",
                    url: "https://www.gitbook.com",
                    list_title: "GitBook",
                    describe: 'GitBook可以轻松编写和维护高质量的文档。'
                },
                {
                    pic_url: "img/youdao.ico",
                    url: "http://note.youdao.com",
                    list_title: "有道笔记",
                    describe: '有道云在线笔记。'
                },
                {
                    pic_url: "img/favicon (8).ico",
                    url: "https://lanhuapp.com",
                    list_title: "蓝湖-UI设计",
                    describe: '蓝湖是一款设计图共享平台，帮助互联网团队管理设计图，可以自动生成标注，与团队共享设计图，展示页面之间的跳转关系等。'
                },
                {
                    pic_url: "img/Mu.png",
                    url: "https://www.yuque.com",
                    list_title: "语雀",
                    describe: '语雀是一款阿里巴巴使用的文本编辑，用于撰写文档。'
                },
                {
                    pic_url: "img/al.ico",
                    url: "http://www.iconfont.cn",
                    list_title: "阿里 iconfont",
                    describe: '阿里 iconfont。'
                },
                {
                    pic_url: "",
                    url: "https://lanhuapp.com",
                    list_title: "在线JSON工具",
                    describe: '在线JSON转换工具。'
                },
                {
                    pic_url: "img/apple-touch-icon-57x57.png",
                    url: "https://codepen.io",
                    list_title: "codePen",
                    describe: '在线代码编辑工具。'
                },
                {
                    pic_url: "img/favicon (6).ico",
                    url: "http://fontawesome.dashgame.com",
                    list_title: "Font Awesome 字体图标",
                    describe: 'Font Awesome 字体图标。'
                },
                {
                    pic_url: "img/icon.ico",
                    url: "http://www.qiuziti.com",
                    list_title: "UI-求字体",
                    describe: 'UI-求字体 字体下载。'
                },
                {
                    pic_url: "img/in-logo.png",
                    url: "https://www.fontke.com/tool/fontface",
                    list_title: "font-face 字体生成器",
                    describe: 'font-face 字体生成器。'
                },
                {
                    pic_url: "img/favicon (6).ico",
                    url: "http://www.echohoo.com/css-button",
                    list_title: "css按钮在线制作",
                    describe: 'css 按钮在线制作'
                }
            ]

        },
        {
            perant_title: "在线学习资源整合",
            child_title: [{
                    pic_url: "img/favicon-32x32.png",
                    url: "https://juejin.im",
                    list_title: "掘金",
                    describe: '开发者成长社区。'
                },
                {
                    pic_url: "img/logo-50.30615fb.png",
                    url: "https://www.awesomes.cn",
                    list_title: "Wesomes(前端库)",
                    describe: '开发者前端库。'
                },
                {
                    url: "http://haoduoshipin.com",
                    list_title: "好多视频",
                    describe: '前端学习视频网站。'
                },
                {
                    pic_url: "img/touch-icon-ipad.png",
                    url: "https://www.imooc.com",
                    list_title: "慕课网",
                    describe: '慕课网'
                },
                {
                    pic_url: "img/favicon (4).ico",
                    url: "https://www.w3cschool.cn",
                    list_title: "W3Cschool",
                    describe: 'W3Cschool'
                },
                {
                    pic_url: "img/we.png",
                    url: "http://www.lvyestudy.com",
                    list_title: "绿叶学习网",
                    describe: '绿叶学习网'
                },
                {
                    pic_url: "img/qw.png",
                    url: "http://study.163.com",
                    list_title: "网易云课堂",
                    describe: '网易云课堂'
                }
            ]
        },
        {
            perant_title: "开发平台",
            child_title: [{
                    pic_url: "img/weixin.ico",
                    url: "https://mp.weixin.qq.com",
                    list_title: "微信公众平台",
                    describe: '微信公众平台'
                },
                {
                    pic_url: "img/baidu.ico",
                    url: "http://lbsyun.baidu.com",
                    list_title: "百度地图开放平台",
                    describe: '百度地图开放平台'
                }
            ]

        }
    ]);
    //滚动条监听
    $(window).scroll(function() {
        //获取当前滚动条高度
        var highttop = $(document).scrollTop();
        //用于调试 弹出当前滚动条高度
        if (highttop > 80) {
            $(".navigation-outer").css({ position: "fixed", top: "0px" });
        } else {
            $(".navigation-outer").css({ position: "", top: "none" });
        }

    });
    //返回顶部
    go_back();
    // tab切换
    $('.navigation__inner a').map(function(elementOrValue, indexOrKey) {
        $(indexOrKey).attr("index", elementOrValue).click(function(e) {
            // e.preventDefault();
            $('.navigation__inner a').removeClass("active");
            $('.content-tab>div').css({ display: "none" });
            var index = $(this).addClass("active").attr("index");
            $('.content-tab>div').eq(index).css({ display: "block" });

        });

    });

    function tabContentList(className, directoryContent) {
        var Title_templet = directoryContent.map(function(data) {
            return `<div class="list">
                    <div class="title-list">
                        <i class="fa fa-file-text-o fa-fw"></i>
                        <a href=${data.url} target="_blank">${data.title}</a>
                    </div>
                    <p>${data.describe}</p>
                </div>`
        }).join('');
        $(className).html(Title_templet);
    };
    // GitHub 仓库数据
    var repository = [{
            title: "StudyRecord",
            describe: "在这里记录自己在学习探索过程中遇到的一些比较常见问题和重要的知识点，并将其进行了整理，部分内容可能会有很多欠缺，如发现问题或有更好的建议欢迎fork 之后提交 pr。",
            url: "https://github.com/zlluGitHub/StudyRecord"
        },
        {
            title: "Markdown-Chinese-Demo",
            describe: "针对中文,演示Markdown的各种语法 (转自 @guoyunsky)",
            url: "https://github.com/zlluGitHub/Markdown-Chinese-Demo"
        },
        {
            title: "MyFunctionLibrary",
            describe: "MyFunctionLibrary 是自己写的一个相互间无依赖的,轻量级的JavaScript“类”库,可以用来替换存在兼容性问题的一些属性或方法的方式，支持所有浏览器，以便开发中使用。目前还在不断更新中... （ 特别说明：在调用时 jsFL===jsFL()===$ 的。）",
            url: "https://github.com/zlluGitHub/MyFunctionLibrary"
        },
        {
            title: "ReactCnode",
            describe: "使用 React 框架模仿的 CNode:Node.js专业中文社区 ，目前还在持续更新中。。。",
            url: "https://github.com/zlluGitHub/ReactCnode"
        },
        {
            title: "E-business-Mozan",
            describe: "使用原生js制作的 PC 端 魔赞电商网站项目，浏览地址：https://zllugithub.github.io/E-business-Mozan",
            url: "https://github.com/zlluGitHub/E-business-Mozan"

        },
        {
            title: "SelfDrivingTour",
            describe: "移动端自驾游 web APP",
            url: "https://github.com/zlluGitHub/SelfDrivingTour"
        }
    ]
    tabContentList('.repository', repository);
    //问答列表
    var repository1 = [{
        title: "问答星星小计",
        describe: "",
        url: "https://github.com/zlluGitHub/StudyRecord/issues"
    }, {
        title: "My笔记 New Blog",
        describe: "",
        url: "http://www.zhenglinglu.cn/personal"
    }]
    tabContentList('.repository1', repository1);
    //插件
    var repository2 = [{
        title: "MyFunctionLibrary",
        describe: "在开发的过程中，常常会用到很多类似的属性或方法，而且有些属性或方法在不同的浏览器上存在兼容性问题，于是我就把这些小功能用了一个小的闭包结合构造函数封装了一下，做了一个小的js封装库，其中封装内容基本都是一些经过兼容我们常用的浏览器的方法，以便在开发过程中可以直接使用这些属性或方法。分装好的js库函数，在【jsOwnFunction】文件夹下，剩下的部分则是一些测试案例）",
        url: "https://github.com/zlluGitHub/MyFunctionLibrary"
    }]
    tabContentList('.repository2', repository2);
    //个人分享
    var repository3 = [{
            title: "Pc 端 Cnode",
            describe: "使用 react 框架，redux，react router 等技术进行页面构建，使用 axios 进行后台数据交互, 制作的 PC 端 cnode。",
            url: "https://zllcnode.netlify.com"
        },
        {
            title: "魔赞商店",
            describe: "使用原生js制作的 PC 端魔赞电商网站项目。",
            url: "https://zllugithub.github.io/E-business-Mozan"
        },
        {
            title: "elm WebApp",
            describe: "使用 vue 全家桶，Element UI 组件，better-scroll 组件进行页面展示，自行模拟数据，实现整套点餐流程。",
            url: "https://zllelm.netlify.com"
        },
        {
            title: "jQ 仿京东购物车",
            describe: "使用 jQ 仿京东购物车，实现商品的选择、删除以及商品的价格计算。",
            url: "https://zllugithub.github.io/StudyRecord/cart"
        },
        {
            title: " 肺笛 WebApp",
            describe: "使用 vue框架，mint-ui 组件，node-sass 等构建的页面展示，自行模拟数据，实现的商品购物流程等。",
            url: "https://yidong.netlify.com"
        },
        {
            title: " 网易邮箱注册 demo",
            describe: "此 demo 使用 jQ 仿网易邮箱注册页。",
            url: "https://zllugithub.github.io/StudyRecord/Mailbox/email.html"
        }
    ]
    tabContentList('.repository3', repository3);
});