jQuery(document).ready(function ($) {
  var $slide = jQuery("#ticker-content li");
  var c = $slide.length, // Element count
    e = 0, // Current element
    s = 200, // Animation speed
    p = 2500, // Delay
    h = 37, // Line height
    sI;

  $slide.hover(function (el) {
    return el.type.match("t") ? clearInterval(sI) : loop();
  });

  function anim(elem) {
    var n = elem % c;

    $slide.each(function (i, el) {
      jQuery(el)
        .stop()
        .animate({ opacity: n == i ? 1 : 0, top: n * -h }, s);
    });
  }

  function loop() {
    sI = setInterval(function () {
      anim(e++);
    }, p);
  }

  loop();
});
