// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery-ui/effect-blind
//= require jquery_ujs
//= require bootstrap-sprockets
//= require_tree .
$(document).ready(function(){

  //fix main-menu
  var heightOfMenu = $("#main-menu").offset().top;
  // alert(heightOfMenu);
  var nav = $('.header');
  $(window).scroll(function(){
    if($(this).scrollTop()>80) {
      nav.addClass("fix-menu");
      $("#logo").hide();
    }else {
      nav.removeClass("fix-menu");
      $("#logo").show();
    }
  })


  // jquery dropdown for menu
  $("#main-menu ul li").hover(function(){
    $(this).find("ul").stop().fadeToggle(400);
  }
  );
  // $("#main-menu ul .cart-box").hover(function(){
    // $(this).slideToggle();
  // });

  // Jquery for slideshow
  // $(function(){
  //   var interval;
  //   function startSlider(){
  //     interval = setInterval(function() {
  //       var nextItem = $('.slide.active').fadeOut().removeClass('active').next('.slide');
  //       var nextBt = $('.button.active').removeClass('active').next();
  //       if (nextItem.length === 0 ) {
  //       // if (nextItem === $('slide').last()){
  //           nextItem = $('.slide').first();
  //           nextBt = $('.button').first();

  //       }
  //       console.log(nextItem.length);
  //       nextItem.fadeIn().addClass('active');
  //       nextBt.addClass('active');
  //       }, 4000);
  //   }
    
  //   function pauseSlider(){
  //     clearInterval(interval);
  //   } 
        
  //   $('#slider')
  //     .on('mouseenter', pauseSlider)
  //     .on('mouseleave', startSlider);
  //   startSlider();
  // });


  // // Jquery for arrow button in slider
  // $('#slider').on('click', '.button-left', function(){
  //   var prvItem = $(this).closest('#slider').find('.slide.active').fadeOut().removeClass('active').prev('.slide');
  //   if(prvItem.length === 0){
  //     prvItem = $('.slide').last();
  //     }
  //   prvItem.fadeIn().addClass('active');
  //   console.log(prvItem.length);
  // });

  // $('#slider').on('click', '.button-right', function(){
  //   var prvItem = $(this).closest('#slider').find('.slide.active').fadeOut().removeClass('active').next('.slide');
  //   if(prvItem.length === 0){
  //     prvItem = $('.slide').first();
  //     }
  //   prvItem.fadeIn().addClass('active');
  //   console.log(prvItem.length);
  // });
  // // Jquery for bullet button
  // $('#slider').on('click', '.button', function(){
  //   var index = $('.button').index(this);
  //   console.log(index);
  //   // var currentItem = $('#slider').find('.button.active');
  // });

  var $bt = document.getElementsByClassName('add-button');
  var $cartbox = document.getElementsByClassName('cart-box');
  // console.log($cartbox);
  
  // jquery for cart ajax
  $('.product-box').on('click', '.add-button', function(){
    console.log("show meeeeeeee");
    console.log($cartbox);
    $('.cart-box').parent().stop().fadeToggle().delay(3000).fadeOut();
    var num = +$('.num-of-cart p').val();
    num = num + 1
    console.log(num);
    // $('.num-of-cart p').;

  });
  // Delete row in cart box 
  // $('.cart-box .deleteItem').on('click', function(){
    // var tr = $(this).closest('tr');
    // tr.css("background-color", "green");
    // tr.fadeOut(400, function(){
      // tr.remove();
    // });
    // return false;
  // });

 



}); // End of document ready