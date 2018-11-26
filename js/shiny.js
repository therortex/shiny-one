
$( document ).ready(function() {
    $(".shiny1").fadeIn("fast");
});

$( ".btn-shiny1" ).click(function() {
  $(".shiny1").slideUp("fast");
  $(".shiny2, .shiny-top").slideDown("fast");
  return false
});

$( ".btn-shiny2" ).click(function() {
  $("div.shiny2, span.shiny2").slideUp("fast");
  $(".shiny3").slideDown("fast");
  return false
});

$( ".btn-shiny3" ).click(function() {
  $("div.shiny3, span.shiny3").slideUp("fast");
  $(".shiny4").slideDown("fast");
  return false
});

$( ".btn-shiny4" ).click(function() {
  $("div.shiny4, span.shiny4").slideUp("fast");
  $(".shiny5").slideDown("fast");
  return false
});

$( ".btn-shiny5" ).click(function() {
  $("div.shiny5, span.shiny5").slideUp("fast");
  $("h1, h2").css('display', 'inline-block');
  $(".shiny6").fadeIn("fast");
  return false
});
