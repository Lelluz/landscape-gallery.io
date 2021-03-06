var grid = document.querySelector('.grid');
var msnry = new Masonry( grid, {
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true,
  transitionDuration: 0,
  stagger: 0
});

var lazyLoadInstance = new LazyLoad({
  callback_loaded: function(){ msnry.layout() }
});