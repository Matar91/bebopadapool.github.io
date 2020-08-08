$(function () {
  resizeCanvas();
});

$(window).on("resize", function () {
  resizeCanvas();
});

function resizeCanvas() {
  var canvas = $("#bgCanvas");

  var body = document.body,
    html = document.documentElement;

  var height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );

  canvas.css("width", $(window).width());
  canvas.css("height", body.scrollHeight);
}
