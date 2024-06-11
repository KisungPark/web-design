//슬라이드
function slide(){
    $(".slider>ul").animate({top:"-400px"},2000,function(){
        $(".slider>ul").append($(".slide").first());
        $(".slider>ul").css({top:"0px"});
    })
}
setInterval(slide,5000);

//메뉴
$("nav>ul>li").mouseenter(function(){
    $(this).find(".sub").stop().slideDown();
})
$("nav>ul>li").mouseleave(function(){
    $(".sub").stop().slideUp();
})
$("nav>ul>li>a").focusin(function(){
    $(this).parent().addClass("on");
    $(this).parent().find(".sub").stop().slideDown();
})
$(".sub>li:last-child").focusout(function(){
    $("nav>ul>li").removeClass("on");
    $(".sub").stop().slideUp();
})

//탭메뉴
$(".tab").click(function(){
    $(".tab").removeClass("on");
    $(this).addClass("on");
})

//모달
$(".pp").click(function(){
    $(".pop").show();
    return false;
})
$(".pop button").click(function(){
    $(".pop").hide();
})