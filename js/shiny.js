
$( document ).ready(function() {
    $(".shiny1").fadeIn();
});

$( ".btn-shiny1" ).click(function() {
  $(".shiny1").fadeOut();
  $(".shiny2").slideDown();
  return false
});

$( ".btn-shiny2" ).click(function() {
  $(".shiny2").fadeOut();
  $(".shiny3").slideDown();
  return false
});

$( ".btn-shiny3" ).click(function() {
  $(".shiny3").fadeOut();
  $(".shiny4").slideDown();
  return false
});

$( ".btn-shiny4" ).click(function() {
  $(".shiny4").fadeOut();
  $(".shiny5").slideDown();
  return false
});

$( ".btn-shiny5" ).click(function() {
  $(".shiny5").fadeOut();
  $(".shiny6").slideDown();
  return false
});
