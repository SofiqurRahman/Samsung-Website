// YTPlayer PlugIn
jQuery("#bgndVideo").YTPlayer({
  mute: true,
  showControls: false,
  autoPlay: true,
  loop: true,
  stopAt: 48
});

// Isotope PlugIn

// Product List
var $grid = $('.product-list').isotope({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.single-product',
  percentPosition: true,
  masonry: {
    // use element for option
    columnWidth: '.single-product'
  }
})

// filter items on button click
$('.product-filter-button').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

// change is-checked class on buttons
$('.product-filter-button').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.active').removeClass('active');
    $( this ).addClass('active');
  });
});

