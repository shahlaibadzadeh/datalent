new fullpage('#fullPage',{
autoScrolling: true,
scrollingSpeed: 700,
paddingTop: '1em',
fitToSection: true,
responsiveWidth: 1199,
keyboardScrolling: true,

afterLoad: (origin, destination, direction) => {
const section = destination.item;
console.log(section)

if(section.id =="become-d-s-container"){
$('.become-d-s-container').each( function(i){
var left = $('.become-d-s-icon-text-left');
var right = $('.become-d-s-icon-text-right')

    left.addClass('fadeInLeft');
    left.css("opacity","1")
    right.addClass('fadeInRight')
    right.css("opacity","1")

}); 
}


if(section.id =="aspiring-total-container"){
$('.aspiring-total-container').each( function(i){
var left = $('.aspiring-d-s-left');
var right = $('.aspiring-d-s-right')
    
    left.addClass('zoomIn');
    left.css("opacity","1")
    right.addClass('zoomIn')
    right.css("opacity","1")

}); 
}


if(section.id =="salary-expectation-network-container"){
$('.salary-container').each( function(i){
var progress1 = $('.progress-bar1');
var progress2 = $('.progress-bar2');
var progress3 = $('.progress-bar3');
    
    progress1.addClass('progress1');
    progress2.addClass('progress2');
    progress3.addClass('progress3');

}); 
}


if(section.id =="interv-resume-container"){
$('.interv-resume-container').each( function(i){
var interResumeListItem = $('.interv-resume-list-item');

    interResumeListItem.addClass('fadeInUp');
    interResumeListItem.css("opacity","1")
        
}); 
}



if(section.id =="start-app-container"){
$('.animate-start-app').each( function(i){
var firstOrder = $('.first-order');
var firstText = $('.first-text');
var secondOrder = $('.second-order');
var secondText = $('.second-text');
var thirdOrder = $('.third-order');
var thirdText = $('.third-text');
var fourthOrder = $('.fourth-order');
var fourthText = $('.fourth-text');
    firstOrder.addClass('animation-first-order');
firstText.addClass('animation-first-text');
secondOrder.addClass('animation-second-order');
secondText.addClass('animation-second-text');
thirdOrder.addClass('animation-third-order');
thirdText.addClass('animation-third-text');
fourthOrder.addClass('animation-fourth-order');
fourthText.addClass('animation-fourth-text');
}); 
}


if(section.id =="finance-container"){
$('.finance-container').each( function(i){
var financeHeading = $('.finance-heading-animate');
    
    financeHeading.addClass('fadeInUpTution');
    financeHeading.css("opacity","1")

}); 
}


if(section.id =="finance-container"){

$('.finance-container').each( function(i){
var tutionCard = $('.tution-total-card');


    
    tutionCard.addClass('slideInRightTution');
    tutionCard.css("opacity","1")
}); 
}


if(section.id =="schedule-contact-container"){

$('.schedule-contact-container').each( function(i){
var contactContainers = $('.contactScheduleAnimation');

    
    contactContainers.addClass('zoomIn');
    contactContainers.css("opacity","1")

});  
}

if(section.id == "mentors-container"){
var removeClass = true;
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

$("html").click(function () {
if (removeClass) {
$('.mentor-imgs .mentor-img').removeClass("mentor-img-scale");
$('.mentor-imgs .mentor-img').css('opacity','1')
.closest('.mentor-img-list')
.siblings('.mentor-img-list')
.find('.mentor-img')
.css('opacity', '1')
}
removeClass = true;
});
}


}
});

$(document).on('click', '#esasMeqamlar', function(){
fullpage_api.moveTo(2);
});

$(document).on('click', '#tedrisPlani', function(){
fullpage_api.moveTo(4);
});

$(document).on('click', '#karyera', function(){
fullpage_api.moveTo(7);
});

$(document).on('click', '#muellimler', function(){
fullpage_api.moveTo(8);
});

$(document).on('click', '#tehsilHaqqi', function(){
fullpage_api.moveTo(10);
});

$(document).on('click', '#faq', function(){
fullpage_api.moveTo(13);
});

$(document).on('click', '#elaqe', function(){
fullpage_api.moveTo(14);
});
// function sendForm(e){
//   e.preventDefault();
// }

// $('#form-button-submit').on('click', function(e){
//    e.preventDefault();

//    var name = $('input#name').val(),
//        email = $('input#email').val(),
//        comments = $('textarea#comments').val(),
//        formData = 'name=' + name + '&email=' + email + '&comments=' + comments;

//     $.ajax({
//       type: 'post',
//       url: 'js/sendEmail.php',
//       data: formData,
//       success: function(results) {
//         $('ul#response').html(results);
//       }
//     });
// });


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
$("select").change(function(){
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
    $("#testimonial-slider-opinion").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        autoplaySpeed: 700,
        navSpeed: 700,
        dots:false,
        navigation:true,
        navText: ["<img src='assets/img/icons/arrow-left.png'>","<img src='assets/img/icons/arrow-right.png'>"],
        autoplay:true,
        nav: true,
        loop: true
    });
});

var el = document.querySelector('.alumni-opinions-container');
el.innerHTML = el.innerHTML.replace(/&nbsp;/g,'');