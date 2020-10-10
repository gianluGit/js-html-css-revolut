// dropdown versione lg
$(document).ready(function() {
  var linkMenu = $('.navbar-main-center li > a');
  linkMenu.mouseenter(function() {
    $(this).next('.dropdown').show();
  });

  $('.navbar-main-center li').mouseleave(function() {
    $(this).children('.dropdown').hide();
  });

  // evento click per far apparire l'hamburger menu
  var menuIcon = $('#menu-icon');
  menuIcon.click(function() {
    $('.hamburger-menu').addClass('active');
    $('.jumbo-left, .jumbo-right').addClass('none');
  });

  // evento click per chiudere l'hamburger menu
  var closeMenu = $('.hamburger-menu #close');
  closeMenu.click(function() {
    $('.hamburger-menu').removeClass('active');
    $('.jumbo-left, .jumbo-right').removeClass('none');
  });

  // evento click sul dropdown-hamburger-menu
  var mainLinkH = $('.hamburger-menu .main-link');
  mainLinkH.click(function() {
    if ($(this).next('.dropdown-hamburger').hasClass('visible') == false) {
      $('.dropdown-hamburger').removeClass('visible').slideUp();
      $(this).next('.dropdown-hamburger').addClass('visible').slideDown();
    } else if ($(this).next('.dropdown-hamburger').hasClass('visible') == true) {
      $(this).next('.dropdown-hamburger').removeClass('visible').slideUp();
    }
  });
});
