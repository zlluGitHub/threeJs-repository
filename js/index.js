$(function() {
    //构建目录配置
    var boxHeight = $('header').outerHeight() + 20;
    catalogue({
        seek_location: ".content", //标题开始查询的位置
        insert_location: ".sidebar-fixed", //目录插入的位置
        scroll_box: ".navigation-outer", //需要定位的盒子
        is_scroll: true, //是否允许目录固定定位
        scrolltop_hight: boxHeight, //页面距顶部多少开始允许目录固定定位
        catalog_skip: false, //是否允许点击目录标题时跳转到与之页面
        catalog_show: false, //是否允许加载页面后目录展开
        h_tag_one: "h3", //查找的一级目录标签
        h_tag_two: "h4" //查找的二级目录标签
    });
    //返回顶部
    go_back();
});