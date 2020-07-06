$(document).ready(function() {
  var linkMenu = $('.navbar-main-center li > a');
  linkMenu.mouseenter(function() {
    $(this).next('.dropdown').toggle();
  });

  $('.navbar-main-center li').mouseleave(function() {
    $(this).children('.dropdown').toggle();
  });
});
