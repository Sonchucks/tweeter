$(document).ready(function() {
  var maxLength = 140;

  $('textarea').on('input', function() {
    var length = $(this).val().length;

    length = maxLength - length;
    $('.counter').text(length);

    if (length < 0) {
      $('.counter').css('color', 'red');
    } else {
      $('.counter').css('color', '#244751');
    }
  });
});

