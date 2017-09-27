/*global $, alert, console*/

$(function () {
    
    'use strict';
    
    //header height
    
    var myHeader = $('.header'),
        
        mySlider = $('.bxslider'),
        
        scr = $('.sc');
        
    
    myHeader.height($(window).height());
    
    $(window).resize(function () {
        
        myHeader.height($(window).height());
        
                // Adjust Bxslider List Item Center
        
        mySlider.each(function () {

            $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);

        });
        
        
    });
    
    //links active 
    
    $('.links li a').click(function () {
        
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    
    // Adjust Bxslider List Item Center
    
    mySlider.each(function () {
       
        $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
        
    });
    
    // Trigger The Bx Slider
    
    mySlider.bxSlider({
        
        pager: false
        
    });
    
    // smoth scroll
    
    $('.links li a').click(function () {
        
        $('html body').animate({
            
            scrollTop: $('#' + $(this).data('value')).offset().top + 2
        }, 1000);
    });
    
    // auto slider
    
    
    (function autoSlider() {
        
        $('.slider .active').each(function () {
            
            if (!$(this).is(':last-child')) {
                
                $(this).delay(3000).fadeOut(1000, function () {
                    
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    
                    autoSlider();
                });
                
            } else {
                
                $(this).delay(3000).fadeOut(1000, function () {
                
                    $(this).removeClass('active');
                   
                    $('.slider div').eq(0).addClass('active').fadeIn();
                    
                    autoSlider();
                });
            }
        });
        
    }());
    
    /*
    (function autoSlider()
    {
        $(".slider .active").delay(2000).fadeOut(2000,function()
        {
            $(this).removeClass("active");
            var next = ($(this).index() + 1 ) % 5;
            $(".slider div").eq(next).addClass("active").fadeIn();
             autoSlider();
        });   
    })();
    */
    
    // Trigger MixitUp
    
    $('#Container').mixItUp();
    
    // adjust shu
    
    $('.shu li').click(function () {
        
        $(this).addClass('active').siblings().removeClass('active');
    });
    
    // scroll top
    
    
    $(window).scroll(function () {
        
        if ($(this).scrollTop() >= 900) {
            
            scr.fadeIn(650);
        
        } else {
            
            scr.fadeOut(650);
        }
    });
    
    scr.click(function () {
        
        $('html, body').animate({scrollTop: 0}, 1000);
        
    });
    
    // trigger nice scroll
    
    $('html').niceScroll({
        
        cursorcolor: '#1abc9c',
        
        cursorwidth: '10px',
        
        cursorborder: '1px solid #1abc9c',
        
        cursorborderradius: 0
    });
    
});