jQuery(document).ready(function ($) {
  setTimeout(function () {
    var $slide = jQuery("#ticker-content li");
    var $nextBtn = jQuery("#ticker-next-btn");

    var delay = 0;
    var c = $slide.length, // Element count
      e = 0, // Current element
      s = 400, // Animation speed
      p = 3000, // Delay
      h = 135, // Line height
      sI;

    $slide.hover(function (el) {
      console.log(el);
      return el.type.match("t") ? clearInterval(sI) : loop();
    });

    $nextBtn.click(function () {
      anim(e++);
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
  }, 1500);
});
