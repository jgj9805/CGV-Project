$(this).on({
    scroll: function (e) {
        /* S GNB fixed */
        var headerOffsetT = $('.header').offset().top;
        var headerOuterH = $('.header').outerHeight(true);
        var fixedHeaderPosY = headerOffsetT + headerOuterH;
        var scrollT = $(this).scrollTop();
        var scrollL = $(this).scrollLeft();

        if (scrollT >= fixedHeaderPosY) {
            $('.nav').addClass('fixed');
            $('.fixedBtn_wrap').addClass('topBtn');
        } else {
            $('.nav').removeClass('fixed');
            $('.fixedBtn_wrap').removeClass('topBtn');
        }
    }
});

$(document).ready(function () {
    $('.nav_menu > li > h2 > a').on({
        mouseenter: function (e) {
            var target = e.target;
            $(target).parents('.nav_menu').find('.nav_overMenu').slideDown(function () {
                $('.nav').addClass('active');
            });
        }
    });
    $('.nav').on({
        mouseleave: function (e) {
            $(this).find('.nav_overMenu').slideUp(200, function () {
                $('.nav').removeClass('active');
            });
        }
    });
});

/**********************************************************/                    

$(function(){
    $(window).scroll(function(){
        const navHeight =  $(window).height();
        if($(window).scrollTop() > navHeight){
            $('#CW').addClass('fixed-top');
        }else{
            $('#CW').removeClass('fixed-top');
        };
    });
});