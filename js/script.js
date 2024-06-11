var i = 0;
function slide(){
    if(i==2){
        i = 0;
    }else{
        i++;
    }
    $(".slide").fadeOut();
    $(".slide").eq(i).fadeIn(2000);
}
setInterval(slide,3000)

$(".tab").click(function(){
    $(".tab").removeClass("on")
    $(this).addClass("on")
})

$(".pp").click(function(){
    $(".modal").show();
})

$(".modal button").click(function(){
    $(".modal").hide();
})