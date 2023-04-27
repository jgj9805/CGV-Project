$(function(){
    $('.menugnb>li').click(function(){
        $(this).find('.menulnb').stop().slideToggle();
    });
    $('.menugnb>li').click(function(){
        $(this).find('.menulnb2').stop().slideToggle();
    });
});
function scrollUp(){
    window.scrollTo({top:0, behavior: 'smooth'});
}
$(function(){
        $(window).on('scroll',function(){
            if($(window).scrollTop()>100){
              $('#scroll-box').fadeIn()
              $('#reserv').animate({
                right : 60
              });
            }else if($(window).scrollTop()<=100){
              $('#scroll-box').fadeOut();
              
            }
        });
});
