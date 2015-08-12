/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */

$(function(){
  $(".post-content").fitVids();

  /* Headroom.js navbar */
  $('nav#navbar').headroom({
    offset: 20,
    tolerance: {
      up:   20,
      down: 40
    },
    classes: {
      notTop: 'scroll'
    }
  });

  /* DeSVG the page */
  deSVG('.de-svg', true);

});
