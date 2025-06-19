$(document).ready(function(){
  $(".juego").hide().each(function(i){
    $(this).delay(300 * i).fadeIn(800);
  });

  $("li").hover(
    function() {
      $(this).css("box-shadow", "0 0 12px #00ffff");
    },
    function() {
      $(this).css("box-shadow", "none");
    }
  );
});