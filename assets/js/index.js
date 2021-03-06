/***************************************When Modal open not Scroll*****************************/

var modalOpenBtns = document.querySelectorAll('.modalOpen')
for (var i = 0; i < modalOpenBtns.length; i++) {
  modalOpenBtns[i].addEventListener('click', function(event) {
    document.querySelector("body").style.overflow = 'hidden';
  });
}

$('.modal').on('hidden.bs.modal', function () {
  document.querySelector("body").style.overflow = 'visible';
})


/*************************Scroll to Top****************/
var mybutton = document.getElementById("scrollTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  $('html, body').animate({scrollTop:0}, 'slow');
}


/**********************************************Start app hover effects*********************** */
$('.first-order >h6').hover(function(){
    $('.first-text > h6 ').css('transform','scale(1.1)');
    $('.first-text > div').css('transform','scale(1.1)');
    $('.first-text > h6').css('transition','all .2s ease-out');
    $('.first-text > div').css('transition','all .2s ease-out');
  }, function(){
    $('.first-text > h6 ').css('transform','scale(1)');
    $('.first-text > div').css('transform','scale(1)');
  });

  $('.second-order>h6').hover(function(){
    $('.second-text > h6 ').css('transform','scale(1.1)');
    $('.second-text > div').css('transform','scale(1.1)');
    $('.second-text > h6').css('transition','all .2s ease-out');
    $('.second-text > div').css('transition','all .2s ease-out');
  }, function(){
    $('.second-text > h6 ').css('transform','scale(1)');
    $('.second-text > div').css('transform','scale(1)');
  });


  $('.third-order>h6').hover(function(){
    $('.third-text > h6 ').css('transform','scale(1.1)');
    $('.third-text > div').css('transform','scale(1.1)');
    $('.third-text > h6').css('transition','all .2s ease-out');
    $('.third-text > div').css('transition','all .2s ease-out');
  }, function(){
    $('.third-text > h6 ').css('transform','scale(1)');
    $('.third-text > div').css('transform','scale(1)');
  });

  $('.fourth-order>h6').hover(function(){
    $('.fourth-text > h6 ').css('transform','scale(1.1)');
    $('.fourth-text > div').css('transform','scale(1.1)');
    $('.fourth-text > h6').css('transition','all .2s ease-out');
    $('.fourth-text > div').css('transition','all .2s ease-out');
  }, function(){
    $('.fourth-text > h6 ').css('transform','scale(1)');
    $('.fourth-text > div').css('transform','scale(1)');
  });


/***************************************************Apply modal icon hover***************************** */
  $('#icon-muraciet').hover(function(){
    $('#icon-text-muraciet').css('opacity','.7');
    $('#icon-text-muraciet').css('transition','all .2s ease-out');
  }, function(){
    $('#icon-text-muraciet').css('opacity','0');
    $('#icon-text-muraciet').css('transition','all .2s ease-out');
  });

  $('#icon-task').hover(function(){
    $('#icon-text-task').css('opacity','.7');
    $('#icon-text-task').css('transition','all .2s ease-out');
  }, function(){
    $('#icon-text-task').css('opacity','0');
    $('#icon-text-task').css('transition','all .2s ease-out');
  });

  $('#icon-interv').hover(function(){
    $('#icon-text-interv').css('opacity','.7');
    $('#icon-text-interv').css('transition','all .2s ease-out');
  }, function(){
    $('#icon-text-interv').css('opacity','0');
    $('#icon-text-interv').css('transition','all .2s ease-out');
  });



/*********************************************Fullpage.js*********************************** */



$(document).ready(function() {
            
  $(window).scroll( function(){
  
      $('.animate-start-app').each( function(i){
          var firstOrder = $('.first-order');
var firstText = $('.first-text');
var secondOrder = $('.second-order');
var secondText = $('.second-text');
var thirdOrder = $('.third-order');
var thirdText = $('.third-text');
var fourthOrder = $('.fourth-order');
var fourthText = $('.fourth-text');
          var bottom_of_object = $(this).offset().top - 100;
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_object ){
              
              firstOrder.addClass('animation-first-order');
      firstText.addClass('animation-first-text');
      secondOrder.addClass('animation-second-order');
      secondText.addClass('animation-second-text');
      thirdOrder.addClass('animation-third-order');
      thirdText.addClass('animation-third-text');
      fourthOrder.addClass('animation-fourth-order');
      fourthText.addClass('animation-fourth-text');
                  
          }
          
      }); 


      $('.become-d-s-container').each( function(i){
          var left = $('.become-d-s-icon-text-left');
          var right = $('.become-d-s-icon-text-right')


          var bottom_of_object = $(this).offset().top+500;
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_object ){
              
              left.addClass('fadeInLeft');
              left.css("opacity","1")
              right.addClass('fadeInRight')
              right.css("opacity","1")
                  
          }
          
      }); 

      $('.aspiring-total-container').each( function(i){
          var left = $('.aspiring-d-s-left');
          var right = $('.aspiring-d-s-right')


          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height()+200;
          
          if( bottom_of_window > bottom_of_object ){
              
              left.addClass('zoomIn');
              left.css("opacity","1")
              right.addClass('zoomIn')
              right.css("opacity","1")
                  
          }
          
      }); 

      $('.salary-container').each( function(i){
          var progress1 = $('.progress-bar1');
          var progress2 = $('.progress-bar2');
          var progress3 = $('.progress-bar3');
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_object ){
              
              progress1.addClass('progress1');
              progress2.addClass('progress2');
              progress3.addClass('progress3');
                  
          }
          
      }); 

      $('.interv-resume-container').each( function(i){
          var interResumeListItem = $('.interv-resume-list-item');


          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height()+200;
          
          if( bottom_of_window > bottom_of_object ){
              
              interResumeListItem.addClass('fadeInUp');
              interResumeListItem.css("opacity","1")
                  
          }
          
      }); 


      $('.finance-container').each( function(i){
          var financeHeading = $('.finance-heading-animate');


          var bottom_of_object = $(this).offset().top+100;
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_object ){
              
              financeHeading.addClass('fadeInUpTution');
              financeHeading.css("opacity","1")
                  
          }
          
      }); 

      

      $('.finance-container').each( function(i){
          var tutionCard = $('.tution-total-card');


          var bottom_of_object = $(this).offset().top+100;
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_object ){
              
              tutionCard.addClass('fadeInUpTution');
              tutionCard.css("opacity","1")
                  
          }
          
      }); 

      $('.schedule-contact-container').each( function(i){
          var contactContainers = $('.contactScheduleAnimation');


          var bottom_of_object = $(this).offset().top+500;
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_object ){
              
              contactContainers.addClass('zoomIn');
              contactContainers.css("opacity","1")
                  
          }
          
      }); 
  
  });
  
});


var removeClass = false;
var $mentorName = $('.mentor-name');
var $mentorAbout = $('.mentor-about-div');
$mentorImg = $('.mentor-imgs  .mentor-img').click(function() {
    $('.mentor-imgs  .mentor-img').removeClass("mentor-img-scale").filter('#' + this.id).addClass("mentor-img-scale")
    removeClass = false;
    $(this).css('opacity','1')
   .closest('.mentor-img-list')
   .siblings('.mentor-img-list')
   .find('.mentor-img')
   .css('opacity', '0.6')
    $mentorName.hide().filter('#name-' + this.id).show();
    $mentorAbout.hide().filter('#about-' + this.id).show();
});

$("html").click(function (evt) {
  if(evt.target.id == "particles-js"){
    if (removeClass) {
        $('.mentor-imgs .mentor-img').removeClass("mentor-img-scale");
        $('.mentor-imgs .mentor-img').css('opacity','1')
        .closest('.mentor-img-list')
        .siblings('.mentor-img-list')
        .find('.mentor-img')
        .css('opacity', '1')
    }
    removeClass = true;
  }
});


//Bootcamp program on hover show content
var $progInfoDiv = $('.prog-info-div'),
$progListItem = $('.bootcamp-prog-ul .bootcamp-prog-list-item').mouseover(function() {
$progInfoDiv.hide().filter('#prog-' + this.id).show();
});

//Interview, Resume on hover show content
var $intervInfoDiv = $('.interv-resume-div'),
$intervListItem = $('.interv-resume-list  .interv-resume-list-item').mouseover(function() {
$intervInfoDiv.hide().filter('#interv-' + this.id).show();
});

//Bootcamp program select option
$(document).ready(function(){
$("#bootcamp-program-select").change(function(){
$(this).find("option:selected").each(function(){
var optionValue = $(this).attr("value");
if(optionValue){
    $(".box").not("." + optionValue).hide();
    $("." + optionValue).show();
} else{
    $(".box").hide();
}
});
}).change();
});

$(document).ready(function(){
  $("#interv-resume-select").change(function(){
  $(this).find("option:selected").each(function(){
  var optionValue = $(this).attr("value");
  if(optionValue){
      $(".intCont").not("." + optionValue).hide();
      $("." + optionValue).show();
  } else{
      $(".intCont").hide();
  }
  });
  }).change();
});
/***************Alumni opinion slider******/
$(document).ready(function(){
    $("#testimonial-slider-opinion").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        autoplayHoverPause: true,
        autoplaySpeed: 800,
        navSpeed: 700,
        dots:false,
        navigation:true,
        navText: ["<img src='assets/img/icons/arrow-left.png'>","<img src='assets/img/icons/arrow-right.png'>"],
        autoplay:false,
        nav: true,
        loop: true
    });
});

var el = document.querySelector('.alumni-opinions-container');
console.log(el)
el.innerHTML = el.innerHTML.replace(/&nbsp;/g,'');
