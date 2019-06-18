

    $( document ).ready(function() {

        var $horizontal = $('#hori');
        var $horizontal2 = $('#hori2');
        var circle= $('.circle');


        if ($(document).width() < 576) {
            $horizontal.removeClass("glitch");
            $horizontal.removeClass("glitch1");
        }

        if ($(document).width() > 576) {
            $(window).scroll(function () {


                var s = $(this).scrollTop() ,
                    d = $(window).height(),

                    scrollPercent = (s / d)*10;


                var position = (scrollPercent * ($(document).width() - $horizontal.width())-600);
                var position1 = (scrollPercent * ($(document).width() - $horizontal2.width())-600);
                var position3 = scrollPercent * ($(document).width() - circle.width());
console.log(scrollPercent);
                if ( scrollPercent >= 0.7){
                    circle.css({
                        'transform':'scale(10)',
                        'transition':'1s all',



                    });
                    $('#heart').fadeIn(1000);

                }
                if (position < -200 ){
                    $horizontal.css({
                        'left': position,

                    });

                }
                if (position < -200){

                    $horizontal2.css({
                        'right': position1,

                    });}


            });
            $.fn.followTo = function (pos) {
                var $this = this,
                    $window = $(window);

                $window.scroll(function (e) {
                    if ($window.scrollTop() > pos) {
                        $this.css({
                            position: 'absolute',
                            top: pos
                        });
                    } else {
                        $this.css({
                            position: 'fixed',
                            top: 0
                        });
                    }
                });
            };

            $('.glitch,.glitch2').followTo(250);
        }



    });
