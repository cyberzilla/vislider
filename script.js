$(document).ready(function(){
    $('.next').on('click', function(){
        var $this = $(this);
        var currentImg = $('.active');
        var nextImg = currentImg.next();

        if(nextImg.length){
            currentImg.removeClass('active fadeIn animated').css('z-index', -10);
            nextImg.addClass('active fadeIn animated').css('z-index', 10);
        }else{
            nextImg = currentImg.parent().children().first();
            currentImg.removeClass('active fadeIn animated').css('z-index', -10);
            nextImg.addClass('active fadeIn animated').css('z-index', 10);
        }

        if(nextImg.is("video")){
            var promise = nextImg[0].play();
            if (promise !== undefined) {
                promise.then(_ => {
                    nextImg[0].muted = false;
                    nextImg[0].onended = function () {
                        $this.click();
                    }
                }).catch(error => {
                    alert("Ini adalah kebijakan dari google untuk untuk interaksi user");
                });
            }
        }else{
            setTimeout(function () {
                $this.click();
            },3000)
        }
        if(currentImg.is("video")){
            //stop video sebelumnya kemudian pindah
            currentImg[0].pause();
            currentImg[0].currentTime=0;
        }
    });

    $('.prev').on('click', function(){
        var $this = $(this);
        var currentImg = $('.active');
        var prevImg = currentImg.prev();

        if(prevImg.length){
            currentImg.removeClass('active fadeIn animated').css('z-index', -10);
            prevImg.addClass('active fadeIn animated').css('z-index', 10);
        }else{
            prevImg = currentImg.parent().children().last();
            currentImg.removeClass('active fadeIn animated').css('z-index', -10);
            prevImg.addClass('active fadeIn animated').css('z-index', 10);
        }

        if(prevImg.is("video")){
            var promise = prevImg[0].play();
            if (promise !== undefined) {
                promise.then(_ => {
                    prevImg[0].muted = false;
                    prevImg[0].onended = function () {
                        $this.click();
                    }
                }).catch(error => {
                    alert("Ini adalah kebijakan dari google untuk untuk interaksi user");
                });
            }
            prevImg[0].muted = false;
            prevImg[0].onended = function () {
                $this.click();
            }
        }else{
            setTimeout(function () {
                $this.click();
            },3000)
        }
        if(currentImg.is("video")){
            //stop video sebelumnya kemudian pindah
            currentImg[0].pause();
            currentImg[0].currentTime=0;
        }
    });

    autoplay();
});

function autoplay(){
    setTimeout(function () {
        $(".next").click();
    },"3000");
}