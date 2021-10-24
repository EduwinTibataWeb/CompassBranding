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
});