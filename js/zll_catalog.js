function catalogue(configure) {
    var marknum = 1;
    $('.bigtitle').text($('h2').text());
    //创建目录并插入
    $(".content").find(configure.h_tag_one).each(function(index, ele) {
        marknum++;
        //为指定文本内ａ元素添加ｉｄ
        $(ele).attr("id", "h" + marknum);
        // 创建一级ａ元素
        var creacta = $('<a href="javascript:(0);" index="h' + marknum + '"><i class="fa fa-chevron-right fa-fw"></i>' + ele.innerText + "</a>");
        //添加绑定事件
        creacta.click(function() {
            var indexval = this.getAttribute('index');
            $("html, body").animate({
                scrollTop: $("#" + indexval).offset().top
            }, { duration: 500, easing: "swing" });
            return false;
        });
        // 将一级目录插入到指定demo中
        var oneele = $("<li>").append(creacta);
        $(configure.insert_location).append(oneele);

        //二级菜单  判断加载后目录是否展开
        if (!configure.catalog_show) {
            var twoele = oneele.append('<ul style="display: none;"></ul>');
        } else {
            var twoele = oneele.append('<ul>');
        };

        if (!configure.catalog_skip) {
            $(ele).parent().find(configure.h_tag_two).each(function(index, ele) {
                marknum++;
                $(ele).attr("id", "h" + marknum);
                // 创建二级ａ元素
                var creacta = $('<a href="javascript:(0);" index="h' + marknum + '"><i class="fa fa-chevron-right fa-fw"></i>' + ele.innerText + "</a>");
                //添加绑定事件
                creacta.click(function() {
                    var indexval = this.getAttribute('index');
                    $("html, body").animate({ scrollTop: $("#" + indexval).offset().top }, { duration: 500, easing: "swing" });
                });
                // 将二级目录插入到指定demo中
                twoele.find('ul').append($("<li>").append(creacta));
            });
        } else {
            $(ele).parent().find(configure.h_tag_two + ' a').each(function(index, ele) {

                // 创建二级ａ元素
                var creacta = $('<a href="' + ele.getAttribute("href") + '"><i class="fa fa-chevron-right fa-fw"></i>' + ele.innerText + "</a>");
                // 将二级目录插入到指定demo中
                twoele.find('ul').append($("<li>").append(creacta));
            });
        }
    });
    //初始化目录
    var allicon = $(configure.insert_location + ' i');
    if (configure.catalog_show) {
        for (var i = 0; i < allicon.length; i++) {

            if (allicon.eq(i).parent('a').next().text() !== '') {
                allicon.eq(i).attr('class', 'fa fa-chevron-down fa-fw');
            } else {
                allicon.eq(i).attr('class', 'fa fa-chevron-right fa-fw');
                allicon.eq(i).addClass('active');
            }
        }
    } else {
        for (var i = 0; i < allicon.length; i++) {
            allicon.eq(i).attr('class', 'fa fa-chevron-right fa-fw');
            if (allicon.eq(i).parent('a').next().text() === '') {
                allicon.eq(i).addClass('active');
            }
        }
    }
    //点击后字体颜色
    $(configure.insert_location + ' li a').click(function() {
        var lia = $(configure.insert_location + ' li a');
        for (var i = 0; i < lia.length; i++) {
            lia.eq(i).removeClass('active');
        }
        $(this).addClass('active');
    });

    //改变箭头方向
    $(configure.insert_location + ' i').click(function() {
        if ($(this).parent('a').next().text() !== '') {
            $(this).parent('a').next().toggle('fast', function() {

                if ($(this).css('display') === 'none') {
                    $(this).prev().find('i').attr('class', 'fa fa-chevron-right fa-fw');
                } else {
                    $(this).prev().find('i').attr('class', 'fa fa-chevron-down fa-fw');
                }
            });
        } else {
            $(this).addClass('active');
        };
    });
    // 滚动条监听
    var box_height = $(window).height();
    $(configure.scroll_box).css({ position: "", top: "none", height: box_height + "px" });
    if (configure.is_scroll) {
        $(window).scroll(function() {
            //获取当前滚动条高度
            var highttop = $(document).scrollTop();
            $(".sidebar-fixed").css({ height: box_height + "px" });
            //用于调试 弹出当前滚动条高度
            // console.log(highttop);
            if (highttop > configure.scrolltop_hight) {
                $(configure.scroll_box).css({ position: "fixed", top: "0px", height: box_height + "px" });
            } else {
                $(configure.scroll_box).css({ position: "", top: "none", height: box_height + "px" });
            }

        });
    }
};
//返回顶部
function go_back() {
    var obtn = document.getElementById("btn");
    //获取页面可视区高度
    var timer = null;
    var isTop = true;
    //滚动条滚动时触发
    window.onscroll = function() {
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (osTop >= 150) {
            obtn.style.display = 'block';
        } else {
            obtn.style.display = 'none';
        };
        if (!isTop) {
            //清除定时器
            clearInterval(timer);
        };
        isTop = false;
    };
    obtn.onclick = function() {
        //清除定时器
        clearInterval(timer);
        //设置定时器
        timer = setInterval(function() {
            //获取滚动条到顶部的距离
            var osTop = document.documentElement.scrollTop || document.body.scrollTop;
            var ispeed = Math.floor(-osTop / 6);
            document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
            isTop = true;
            if (osTop == 0) {
                clearInterval(timer);
            };
        }, 30);
    };
};


//首页标题动态遍历
function titleContentList(directoryContent) {
    var list_all = null;
    var Title_templet = directoryContent.map(function(data) {
                list_all = data.child_title.map(function(data_all) {
                            return `<li class="liList">
                        <h4>
                            ${data_all.pic_url ? `<img src="${data_all.pic_url}" alt="${data_all.list_title}">&nbsp;<a href="javascript:void(0)">${data_all.list_title}</a>` : `<a href="javascript:void(0)"><i class="fa fa-book fa-fw">&nbsp;</i>${data_all.list_title}</a>`}
                        </h4>
                        <div class="mask">
                            <div class="box">
                                <h5>${data_all.list_title}</h5>
                                <div class="describe">
                                    ${data_all.pic_url?`<img src="${data_all.pic_url}" alt="${data_all.list_title}">`:``}
                                    ${data_all.describe?`<div>${data_all.describe}</div>`:`暂无相关描述。`}
                                </div>
                                <div class="click">
                                    ${data_all.gitHub_Url?`<a href="${data_all.gitHub_Url}">GitHub</a>`:``}
                                    
                                    <a href="${data_all.url}">参考文档</a>
                                    <a class="cancel" href="javascript:void(0)">取消</a></div>
                            </div>
                        </div>
                    </li>`
        });
        return `<div class="list-btm clearfix">
                    <h3><i class="fa fa-th-large fa-fw fa-lg">&nbsp;</i>${data.perant_title}</h3>
                    <ul>${list_all.join('')}</ul>
                </div>`
    }).join('');
    $('.content-btm').html(Title_templet);
    //事件绑定描述
    $(".liList").click(function(event){
        event.stopPropagation();
        $(this).find('.mask').fadeIn(100);
    })
    $(".cancel").click(function(event){
        event.stopPropagation();
        $('.mask').fadeOut(100);
    })

};