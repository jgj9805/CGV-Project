// 헤더 리스트 내려오게 하기, 헤더 스크롤 시 고정
$(this).on({
    scroll: function (e) {
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

//메인 동영상 재생, 일시정지
function video_pause() {
    const play = document.getElementById("main_pause").innerHTML
    if(play == "play_arrow"){
        document.getElementById("main_video").play();
        document.getElementById("main_pause").innerHTML = "pause"
    }
    else if(play == "pause"){
        document.getElementById("main_video").pause();
        document.getElementById("main_pause").innerHTML = "play_arrow"
    }
}

//메인 동영상 사운드 재생, 음소거
function video_mute() {
    const play = document.getElementById("main_sound").innerHTML
    if(play == "volume_off"){
        document.getElementById("main_video").muted = true;
        document.getElementById("main_sound").innerHTML = "volume_up"
    }
    else if(play == "volume_up"){
        document.getElementById("main_video").muted = true;
        document.getElementById("main_sound").innerHTML = "volume_off"
    }
}
    










