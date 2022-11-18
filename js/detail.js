$(function(){
    // parallax
    $(window).scroll(function(){
        var wst = $(this);
        parallax(wst,$('.parallax1'));
        parallax(wst,$('.parallax2'));
        parallax(wst,$('.parallax3'));
        parallax(wst,$('.parallax4'));
        parallax(wst,$('.parallax5'));
        parallax(wst,$('.parallax6'));
        parallax(wst,$('.parallax7'));
        parallax(wst,$('.parallax8'));
        parallax(wst,$('.parallax9'));
        parallax(wst,$('.parallax10'));
    });
    function parallax(wd,wq,way){
        if(wq == null || wq.offset() == undefined) {
            return;
        } else { 
            if( wd.scrollTop() > $(wq).offset().top - $(this).height()/2 ){
                $(wq).addClass('active');
            } else {
                // $(wq).removeClass('active');
            }
        }
    }
});