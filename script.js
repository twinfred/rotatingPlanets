$(document).ready(function(){
    var img = $('img');
    
    $(window).scroll(function(){
        console.log('scrolling');
        var rotate = ($(window).scrollTop()/10)
        img.css('transform', 'rotate('+rotate+'deg)');
    })
})