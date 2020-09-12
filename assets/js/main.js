$(window).on("load", function() {

//     $(".loader .inner").fadeOut(1000, function() {
//         $(".loader").fadeOut(750);
//     });

// })
/*******************End of loader area***************/

$(document).ready(function(){
    $('#slides').superslides({
        animation: 'fade',
        play: '3000',
        pagination: false,
    });
    /****************End of slider area**************/

    var typed = new Typed(".sub", {
        strings: ["Web Designer...", "Web Developer...", "Software Engineer..."],
        loop: true,
        cursor: false,
        typeSpeed: 50,
        showCursor: false,
    });
    /****************End of typed area***************/
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
                }
            }
        });
    /***************End of olwcarousel area***********/
    
    var skillsTopOffset = $(".skillSection").offset().top;
    var countUpFinished = false;
    $(window).scroll(function(){
         if(window.pageYOffset > skillsTopOffset - $(window).height() + 200){
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function(from, to, percent){
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
            }
        		
        });
    /*************End of easyPieChart*************/
    
    var mixer = mixitup('.mymixcon');
    /*********End of mixitup*********/
    
    var navOffset = $("#about").offset().top;
    $(window).scroll(function(){
        var scrollPos = $(window).scrollTop();
        if(scrollPos >= navOffset){
           $("nav").addClass("fixed");
           }else{
               $("nav").removeClass("fixed");
           }
    });
    /************End of navbar****************/

});
















