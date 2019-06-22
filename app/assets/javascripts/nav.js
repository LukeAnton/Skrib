$( document ).ready(function() {

  $(".navbar-burger").click(function(){
    $(".dropdown").toggle();
  });

  $("a").hover(function(){
      $(".logo").css("fill", "white");
      }, function(){
      $(".logo").css("fill", "black");
    });

    $(".button").hover(function(){
      $(".logo").css("fill", "black");
  });

});
