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
      top: 'top',
      notTop: 'scroll',
      pinned: '',
      unpinned: 'compact'
    }
  });

  /* DeSVG the page */
  deSVG('.de-svg', true);

  /* Popup Menu */
  $('#navbar-menu-trigger').click(function(e) {
    e.stopImmediatePropagation();
    $('#navbar-menu').toggleClass('open');
  });
  $(document.body).click(function() {
    $('#navbar-menu').removeClass('open');
  });

});
