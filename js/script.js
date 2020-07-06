$(document).ready(function() {
  var linkMenu = $('.navbar-main-center li > a');
  linkMenu.mouseenter(function() {
    $(this).next('.dropdown').show();
  });

  $('.navbar-main-center li').mouseleave(function() {
    $(this).children('.dropdown').hide();
  });
});
