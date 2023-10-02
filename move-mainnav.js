$( function() {
    _moveMainnav();

    $(window).resize( function() {
        _moveMainnav();
    } );
} );

function _moveMainnav() {
    if(window.matchMedia){
        if(window.matchMedia( "(max-width: 568px)" ).matches) {
            $("#hpb-nav").insertBefore("#hpb-wrapper");
        }
        else {
            $("#hpb-nav").insertAfter("#hpb-wrapper");
        }
    }
    else {
        if ($(window).width() <= 568) {
            $("#hpb-nav").insertBefore("#hpb-wrapper");
        }
        else {
            $("#hpb-nav").insertAfter("#hpb-wrapper");
        }
    }
}