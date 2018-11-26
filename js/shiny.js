
$( document ).ready(function() {
    $(".shiny1").fadeIn();
});

$( ".btn-shiny1" ).click(function() {
  $(".shiny1").slideUp();
  $(".shiny2, .shiny-top").slideDown();
  return false
});

$( ".btn-shiny2" ).click(function() {
  $("div.shiny2, span.shiny2").slideUp();
  $(".shiny3").slideDown();
  return false
});

$( ".btn-shiny3" ).click(function() {
  $("div.shiny3, span.shiny3").slideUp();
  $(".shiny4").slideDown();
  return false
});

$( ".btn-shiny4" ).click(function() {
  $("div.shiny4, span.shiny4").slideUp();
  $(".shiny5").slideDown();
  return false
});

$( ".btn-shiny5" ).click(function() {
  $("div.shiny5, span.shiny5").slideUp();
  $("h2").css('display', 'inline-block').delay( 800 );
  $(".shiny6").fadeIn();
  return false
});
