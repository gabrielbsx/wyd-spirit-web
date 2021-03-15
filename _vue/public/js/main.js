$(document).ready(function()
{
  $('.streams-block .logo').on('click', function()
  {
    let s = $('.streams-block');
    if(s.hasClass('opened'))
      s.removeClass('opened');
    else
      s.addClass('opened');
  });
});