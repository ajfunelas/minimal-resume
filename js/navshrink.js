// $(window).scroll(function){
//   if ($(document).scrollTop() > 50) {
//     $('nav').addClass('shrink');
//   }
//   else {
//     $('nav').removeClass('shrink');
//   }
// });

$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 10) {
    	$('#nav').addClass('shrink');
    }
    else {
    $('#nav').removeClass('shrink');
    }
  });
});
