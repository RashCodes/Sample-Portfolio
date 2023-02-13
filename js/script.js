(function($){
    var typed = new Typed('span.txt-rotate', {
        strings: ['I Have a Multiple Roles Such As:', 'As a FrontEnd Developer Role' , 'As a React.js Developer Role', 'As a Angular Developer Role', 'As a Vue.js Developer Role', 'I am also a UI/UX Designer, fluent in Figma Prototype Design Tool.'],
        typeSpeed: 30,
        backSpeed: 20,
        fadeOut: false,
        smartBackspace: true,
        loop: true
    });
})(jQuery);


$(document).ready(function() {

    $('.projects-wrapper').isotope({

        filter: '*',
        layoutMode: 'masonry'
    });

    $('.list-filter a').click(function() {
        var selector = $(this).attr('data-filter');
        $('.list-filter a').removeClass('active');
        $(this).addClass('active');
        $('.projects-wrapper').isotope({
            filter: selector
        })
        return false;
    });

    $('.popup-image').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        gallery: {
            enabled: true,
            navigateByImgClick: true
        }
    });
});