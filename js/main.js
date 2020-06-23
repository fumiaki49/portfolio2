$(function () {
  $('.menu-btn').click(function (){
    var index = $(this).index();
    var sameIndex = $('.scroll-target').eq(index).offset().top - 83;
    $('html, body').animate({scrollTop: sameIndex});
  });
});