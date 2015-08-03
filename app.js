var newDiv = function(number) {
  for (i = 0; i < number; i++) {
    $('body').prepend('<div class="wrapper" />');
    };
  for (i = 0; i < number; i++) {
    $('.wrapper').append('<div class="etch" />');    
    };
};

var sketch = function(){
    $('.etch').on('mouseenter', function() {
    $(this).addClass('sketch');
  });
};

$(document).ready(function(){
  sketch();
});

  newDiv(16);

  $('#reset').on('click', function() {
    $('.etch').removeClass('sketch');
  });

  $('#resize').on('click', function() {
    $('div').remove();
      var canvas = prompt("How many squares across?");
      newDiv(canvas);
      var viewport = 960;
      var gridWidth = viewport/canvas;
      $('.etch').css({
        width : gridWidth + 'px',
        height: gridWidth + 'px'
      })
      sketch();
  });