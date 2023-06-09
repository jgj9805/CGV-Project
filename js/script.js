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
    
function arrbtnR(){
    const btnR = document.getElementsByClassName("swiper-button-next")[0];
    const btnL = document.getElementsByClassName("swiper-button-prev")[0];
    const swp = document.getElementById("movieChart_list");
    swp.style.right = "1010px";
    btnR.style.display = "none"
    btnL.style.display = "flex"
}
function arrbtnL(){
    const btnR = document.getElementsByClassName("swiper-button-next")[0];
    const btnL = document.getElementsByClassName("swiper-button-prev")[0];
    const swp = document.getElementById("movieChart_list");
    swp.style.right = "0px";
    btnL.style.display = "none"
    btnR.style.display = "flex"
}

document.querySelector('.img_wrap').addEventListener('mouseover', function() {
	document.querySelectorAll('.movieChart_btn_wrap').style.display = "block";
});


const imgWraps = document.querySelectorAll('.img_wrap');

imgWraps.forEach(imgWrap => {
  const movieChartBtnWrap = imgWrap.querySelector('.movieChart_btn_wrap');
  const icon = imgWrap.querySelector('.movieAgeLimit_wrap');
  const screenType = imgWrap.querySelector('.screenType_wrap');

  imgWrap.addEventListener('mouseenter', () => {
    movieChartBtnWrap.style.display = 'block';
    icon.style.display = 'none';
    screenType.style.display = 'none';
  });

  imgWrap.addEventListener('mouseleave', () => {
    movieChartBtnWrap.style.display = 'none';
    icon.style.display = 'flex';
    screenType.style.display = 'block';
  });
});

const playPauseButton = document.getElementById("event_playstop");
function event_playstop(){
    const event_play = document.getElementById("event_playstop").innerHTML
    if (event_play == '<img src="../images/stop.png" alt="stop">') {
        playPauseButton.innerHTML = '<img src="../images/play.png" alt="play">';
      } else {
        playPauseButton.innerHTML = '<img src="../images/stop.png" alt="stop">';
      }
}









