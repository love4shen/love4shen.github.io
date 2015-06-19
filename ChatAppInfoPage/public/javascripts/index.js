if ($(window).height() < $(window).width()) {
  $("#section_design__feature p").width($("#section_design__feature").width() - $("#section_design__feature img").width()*2 - 40);
}

$(window).resize(function() {
  window.location.reload();
});
