$(document).ready(function() {
    //模板替换
    var contenttemplet = $("body>div").clone();
    var links = `<link rel="shortcut icon" href="../favicon.ico" type="image/x-icon">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"> 
<link rel="stylesheet" href="../css/public.css">`;
    var frame = `<header>
                <div class="warp">
                    <div class="inner">
                        <a href="http://www.zhenglinglu.cn">
                            <h1>
                                <img src="http://www.zhenglinglu.cn/templets/MyBlogs/images/logo.png" alt="Logo">
                                <i class="light"></i>
                            </h1>
                            <span> Welcome to zll-NoteBook!</span>
                        </a>
                        <nav>
                            <a href="../index.html">
                                <i class="fa fa-home fa-fw"></i>首页</a>
                            <a href="http://www.zhenglinglu.cn/index.html">
                                <i class="fa fa-send-o fa-fw"></i>博客</a>
                            <a href="https://github.com/zlluGitHub">
                                <i class="fa fa-github fa-fw"></i>GitHub</a>
                            <a href="javascript:void(0);">
                                <i class="fa fa-search fa-fw"></i>搜索</a>
                        </nav>
                    </div>
                </div>
                </header>
            <section>
                <div class="body-box">
                    <div class="sidebar">
                        <!-- 导航部分 -->
                        <div class="navigation-outer">
                            <div class="navigation">
                                <ul class="sidebar-fixed">
                                    <li class="catalog">
                                        <a href="">目录</a>
                                    </li>
                                    <li class="dashed"></li>
                                    <!-- 目录内容 -->
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="content">
                        <div class="navigation__inner clearstyle flex">
                            <div class="position"><i class="fa fa-map-marker fa-lg"></i>
                                <a href="../index.html">知识库</a>
                                <span>></span>
                                <a href="javascript:void(0);" class="bigtitle active">npm</a>
                                <!-- tab 导航 -->
                            </div>
                        </div>
                        <div class="content-btm">
                            <!-- 标题列表 -->
                        </div>
                    </div>
                </div>
            </section>
            <!-- 回到顶部 -->
            <div class="bg">
                <a id="tiaoma"></a>
                <a href="javascript:;" id="btn" title="回到顶部" style="display: block;"></a>
            </div>`;
    //重构页面
    $("head").append(links);
    $("body").html(frame);
    $(".content-btm").html(contenttemplet);
});