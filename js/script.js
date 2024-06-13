//슬라이드
var i = 0;
function slide(){
    i = (i==2) ? 0 : i+1;
    $(".slide").fadeOut();
    $(".slide").eq(i).fadeIn(2000);
}
setInterval(slide,3000)

//네비
$("nav>ul>li").mouseenter(function(){
    $(this).find(".sub").stop().slideDown();
})
$("nav>ul>li").mouseleave(function(){
    $(".sub").stop().slideUp();
})
$("nav>ul>li>a").focusin(function(){
    $(this).parent().addClass("on")
    $(this).parent().find(".sub").stop().slideDown();
})
$(".sub>li:last-child>a").focusout(function(){
    $("nav>ul>li").removeClass("on")
    $(".sub").stop().slideUp();
})

//탭
$(".tab").click(function(){
    $(".tab").removeClass("on")
    $(this).addClass("on")
    return false;
})

//모달
$(".pp").click(function(){
    $(".modal").show();
    return false;
})
$(".modal button").click(function(){
    $(".modal").hide();
})