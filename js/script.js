//슬라이드
function slide(){
    var sw = $(".slide").width();
    $(".slider>ul").animate({left:-sw},2000,function(){
        $(".slider>ul").append($(".slide").first())
        $(".slider>ul").css({left:0})
    })
}
setInterval(slide,3000)
//네비
$("nav>ul>li").mouseenter(function(){
    $(this).addClass("on")
    $(this).find(".sub").stop().slideDown()
})
$("nav>ul>li").mouseleave(function(){
    $("nav>ul>li").removeClass("on")
    $(".sub").stop().slideUp()
})
$("nav>ul>li>a").focusin(function(){
    $(this).parent().addClass("on")
    $(this).parent().find(".sub").stop().slideDown()
})
$(".sub>li:last-child>a").focusout(function(){
    $("nav>ul>li").removeClass("on")
    $(".sub").stop().slideUp()
})
//모달
$(".pp").click(function(){
    $(".modal").show();
    return false;
})
$(".modal button").click(function(){
    $(".modal").hide();
})