$( document ).ready(function() {
    var getFooterAction = $('#footer__menu_action');
    var getFooterMenu = $('.footer__menu_submenu');
    var getFooterMenuI = $('#footer__menu_action > i');
    getFooterAction.on("click", function(){
        getFooterMenu.toggleClass('action__footer_menu');
        if(getFooterMenu.hasClass('action__footer_menu')){
            getFooterMenuI.attr('class', 'fas fa-caret-down');
        }else{
            getFooterMenuI.attr('class', 'fas fa-caret-right');
        }
    });
    var offset = 100;

  // Fade duration
  var duration = 500;

  // Toggle view of button when scrolling.
  $(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
      $('#c-go-top').fadeIn(duration);
    } else {
      $('#c-go-top').fadeOut(duration);
    }
  });

  // Scroll to top when button is clicked.
  $('#c-go-top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, duration);
    return false;
  });
  
});