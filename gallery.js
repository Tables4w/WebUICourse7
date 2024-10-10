$(document).ready(function() {
    console.log( "ready!" );

    $('.carousel').slick({
        infinite: true,
        dots: true,
        slidesToShow: 3,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
            slidesToShow: 1,
            }
            }
        ]
    });
});  