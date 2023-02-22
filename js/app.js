// wow js
new WOW().init();

$(window).scroll(function(){
    let index = $(window).scrollTop();
    if(index >= 40){
        $('.section1_nav2').css({
            'position' : 'fixed',
            'top':'0px',
            'width':'100%',
            'z-index':'521521452542145',
        })
        $('.section1-div').css({
             'height' : '94.5vh',
        })
        }else{
        $('.section1_nav2').css({

            'position' : 'static'
        })
        $('.section1-div').css({
            'height' : '86.8vh'
        })
    }
})      
