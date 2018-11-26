
$( document ).ready(function() {
    $(".shiny1").fadeIn();
});

$( ".btn-shiny1" ).click(function() {
  $(".shiny1").fadeOut();
  $(".shiny2").slideDown();
  return false
});
