$(document).ready(function () {
    //关闭广告
    $("#dd_close a").click(function () {
        $("#right").hide();
    })

    //图片轮播
    //定时器触发 图片轮播mouseover事件
    var index = 0;
    var stop = false;
    var timer = setInterval(function () {
        if(stop){
            return;
        };
        index++;
        index = index%4;
        $("#scroll_number li:eq("+index+")").mouseover();
    }, 1000)
    $("#scroll_number li").mouseover(function () {
        var index = $("#scroll_number li").index(this);
        //背景加红
        $(this).css({"background":"red"}).siblings().css({"background":"#a9a9a9"});
        //控制图片的显示隐藏
        //$("#scroll_img li:eq("+index+")").show().siblings().hide();
        $("#scroll_img li:eq("+index+")").fadeIn(500).siblings().fadeOut(100);
    })
//鼠标移入关闭轮播动画
    $(".scroll").mousemove(function () {
        stop = true;
    }).mouseout(function () {
        stop = false;
    })
    //书讯快递滚动
    function autoPlay(){
        time = setInterval(function(){
            $("#express li:eq(0)").animate({height:0},"slow");
            var fz = $("#express li:eq(0)").clone(true);
            $("#express li:eq(0)").remove();
            fz.appendTo("#express");
        },1000);
    }
    autoPlay();
    $("#express").hover(function(){
        clearInterval(time),function(){
            autoPlay();
       }
    })
})