(function ($) {
  $our_team_layer_classname = "our-team-layer-active";
  $team_layer_wrapper_classname = ".sptp-section";

  $('body.home a[rel="our-team-layer"]').on("click", function () {
    $("body.home").addClass($our_team_layer_classname);
    $(".our-team-layer-active").append(
      '<div class="close-btn-triangle">X</div>',
    );

    $(".close-btn-triangle").on("click", function () {
      $("body.home").removeClass($our_team_layer_classname);
      $(".close-btn-triangle").remove();
    });
  });
})(jQuery.noConflict());
