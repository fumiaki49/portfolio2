$(function () {
  $('.menu-btn').click(function (){
    var index = $(this).index();
    var sameIndex = $('.scroll-target').eq(index).offset().top - 83;
    $('html, body').animate({scrollTop: sameIndex});
  });

  $('.my-works__list__item').click(function() {
    var modalData = $(this).data('modal-link');
    var sameItem = document.querySelector('.' + modalData);
    $(sameItem).fadeIn();
  })
  $('.modal__content-box__close-btn').click(function() {
    $('.modal').fadeOut();
  });
});