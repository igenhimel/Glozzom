$(document).ready(function () {
    $('.navbuttons').click(function () { 
        $('#myNav').toggleClass("navbar-overlay-js");
     
        $('#myNav2').toggleClass("navbar-overlay-js");

        $('.navbar-brand').toggleClass('brand-none');

});
$('.close-nav').click(function () { 
    $('#myNav').toggleClass("navbar-overlay-js");
 
    $('#myNav2').toggleClass("navbar-overlay-js");

    $('.navbar-brand').toggleClass('brand-none');
    
});
AOS.init({
    easing:'ease-in-out',
    duration:600
});



    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
    });




  
});