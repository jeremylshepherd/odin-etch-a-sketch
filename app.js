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

$(document).ready();
                  
  newDiv(4);
  sketch();

  $('#reset').on('click', function() {
    $('.etch').removeClass('sketch');
  });
  $('#resize').on('click', function() {
    $('div').remove();
      var canvas = prompt("How many squares across?");
      newDiv(canvas);
  });
  
  sketch();