$(document).ready(function(){
  $('#li1').addClass('active');
});
function setToCurrentPage(type){
	$(".common-content-div").hide();
	$(".common-li").removeClass('active');
	switch (type) {
	  case "home":
	  $('#li1').addClass('active');
	    $('#home-divId').show();
	    break;
	  case "about":
	  $('#li2').addClass('active');
	    $('#about-divId').show();
	    break;
	  case "gallery":
	  $('#li3').addClass('active');
	    $('#gallery-divId').show();
	    break;
	  case "contact":
	  $('#li4').addClass('active');
	    $('#contactus-divId').show();
	    break;
	}

}
