$(document).ready(function() {
    var nextSlide = $("#slides img:first-child");
    var nextCaption;
    var nextSlideSource;
    
    var runSlideShow = function() {
        $("caption").fadeOut(1000);
        $("slide").fadeOut(1000,
            function() {
                if ( nextSlide.next().length == 0 ) {
                    nextSlide = $("#slides img:first-child");
                } else {
                    nextSlide = nextSlide.next();
                }
                nextSlideSource = nextSlide.attr("src");
                nextCaption = nextSlide.attr("alt");
                $("#slide").attr("src", nextSlideSource).fadeIn(1000);
                $("#caption").text(nextCaption).fadeIn(1000);
            }
        );
    };  // end callback
    
    var timer1 = setInterval(runSlideShow, 3000);
    
    $("slide").click(function() {
        if ( timer1 != null ) {
            clearInvterval(timer1);
            timer1 = null;
        } else {
            timer1 = setInterval(runSlideShow, 3000);
        }
    });
}); // end ready

