/*-------------------------------scrollUp---------------------------------*/
function scrollUp(){
    window.scrollTo({top:0, behavior: 'smooth'});
}
$(function(){
        $(window).on('scroll',function(){
            if($(window).scrollTop()>300){
              $('#scroll-box').fadeIn()
              $('#reserv').animate({
                right : 60
              });
            }else if($(window).scrollTop()<=300){
              $('#scroll-box').fadeOut();
              
            }
        });
});
/*-------------------------------scrollUp---------------------------------*/

/*-------------------------------Header---------------------------------*/
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
/*-------------------------------Header---------------------------------*/


/*-------------------------------pbtn------------------------------------*/
function pbtn() {
  document.getElementsByClassName("plusmovie_chart")[0].style.display = "block"
  document.getElementsByClassName("plus-button")[0].style.display = "none";
}
/*-------------------------------pbtn------------------------------------*/


/*-------------------------------showSlides---------------------------------*/
$(function(){
      //슬라이드
      showSlides(1);
});
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activea", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " activea";
}
$(function(){
let slideIndex = 1;
showSlides(slideIndex);
});
    

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activea", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " activea";
}
/*-------------------------------showSlides---------------------------------*/
/*-------------------------------bang-btn------------------------------------*/
function bangbtn(e) {
  document.getElementsByClassName("cgvSaleTab-center-content")[e].style.display = "block"
  document.getElementsByClassName("bang-btn")[e].style.display="none";
  document.getElementsByClassName("bang-btn")[e+1].style.display="block";
}
/*-------------------------------bang-btn------------------------------------*/