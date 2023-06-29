import $ from 'jquery'; /* 제이쿼리 쓰겠다는 명령어 */


$(function (){
    $(".menu li a").on("mouseenter", function(){
        $(".menubox").stop().slideDown(100);
    });
    $("#nav").on("mouseleave", function(){
        $(".menubox").stop().slideUp(100);
    });
});