$(function(){
  $('.effect').css("opacity",".3");
  $(window).scroll(function (){
    $('.effect').each(function(){
      var imgPos = $(this).offset().top;    
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + 200){
        $(this).animate({ 
          "margin-left": "50px",
          "opacity": "1"
        }, 1000);
      }
    });
  });
});