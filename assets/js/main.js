$(document).ready(function () {

  $('#toggle-fixed-plugin').click(function () {
    if($(this).parent().hasClass('open')) {
      $(this).parent().removeClass('open');
    } else {
      $(this).parent().addClass('open');
    }
  });

});
