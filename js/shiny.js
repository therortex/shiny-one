
$( document ).ready(function() {
    $(".shiny1").fadeIn();
});

$( ".btn-shiny1" ).click(function() {
  $(".shiny1").fadeOut();
  $(".shiny2").fadeIn();
  return false
});

$( ".btn-shiny2" ).click(function() {
  $("div.shiny2, span.shiny2").fadeOut();
  $(".shiny3").fadeIn();
  return false
});

$( ".btn-shiny3" ).click(function() {
  $("div.shiny3, span.shiny3").fadeOut();
  $(".shiny4").fadeIn();
  return false
});

$( ".btn-shiny4" ).click(function() {
  $("div.shiny4, span.shiny4").fadeOut();
  $(".shiny5").fadeIn();
  return false
});

$( ".btn-shiny5" ).click(function() {
  $("div.shiny5, span.shiny5").fadeOut();
  $(".shiny6").fadeIn();
  return false
});
