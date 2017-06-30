var ua = navigator.userAgent;


	var allowAnimation = true;
	var scrollVal = 0;
	var scrollCur;

	function checkAnimation() {
		return(allowAnimation);

	}
/*$(document).on('mousewheel', function(e){
	console.log("mousewheel document");

	var st = $(this).scrollTop();  
	if(window.matchMedia("screen and (min-width: 1350px)").matches && !(ua.indexOf('Trident/7.0') + 1)) {
		if(!allowAnimation) {
			return false;
		}
    


     if(e.originalEvent.wheelDelta < 0) {
         //scroll down
         //console.log('Down');         
        
        if(st>=0 && st<600) {
        	allowAnimation = false;
         	$("html, body").stop().animate({scrollTop:850}, 850-st, 'swing', function() {
         		allowAnimation = true;
         	});
		}
		if(st>=600 && st<1600) {
			allowAnimation = false;
			$("html, body").stop().animate({scrollTop:1780}, 1780-st, 'swing', function() {
         		allowAnimation = true;
         	});
		}
		if(st>=1600 && st<2600) {
			allowAnimation = false;
			$("html, body").stop().animate({scrollTop:2700}, 2700-st, 'swing', function() {
         		allowAnimation = true;
         	});
		}
		if(st>=2600 && st<2900) {
			allowAnimation = false;
			$("html, body").stop().animate({scrollTop:3140}, 3140-st, 'swing', function() {
         		allowAnimation = true;
         	});
		}
		if(st>=2900) {
		}

     }else {
         //scroll up
         //console.log('Up');

         if(st>=0 && st<600) {
         	allowAnimation = false;
         	$("html, body").stop().animate({scrollTop:0}, st, 'swing', function() {
         		allowAnimation = true;
         	});
		}
		if(st>=600 && st<1600) {
			allowAnimation = false;
			$("html, body").stop().animate({scrollTop:0}, st, 'swing', function() {
         		allowAnimation = true;
         	});
		}
		if(st>=1600 && st<2600) {
			allowAnimation = false;
			$("html, body").stop().animate({scrollTop:850}, st-850, 'swing', function() {
         		allowAnimation = true;
         	});
		}
		if(st>=2600 && st<2900) {
			allowAnimation = false;
			$("html, body").stop().animate({scrollTop:1780}, st-1780, 'swing', function() {
         		allowAnimation = true;
         	});
		}
		if(st>=2900) {
			allowAnimation = false;
			$("html, body").stop().animate({scrollTop:2700}, st-2700, 'swing', function() {
         		allowAnimation = true;
         	});
		}
     }

}
     //prevent page fom scrolling
     //return false;
 });*/


 /*$('iframe').load(function(){
  $(this).contents().find("body").on('click', function(event) { alert('test'); });
});

 $('#TVAR').on('mousewheel', function(e) {
 	console.log('SUKKAAAAAAA');

 });*/
document.onwheel = function(e) {

	console.log("mousewheel window");

	var st = $(this).scrollTop();  
	if(window.matchMedia("screen and (min-width: 1350px)").matches && !(ua.indexOf('Trident/7.0') + 1)) {
		if(!allowAnimation) {
			return false;
		}
    


     if(e.wheelDelta < 0) {
         //scroll down
         //console.log('Down');         
        
        if(st>=0 && st<600) {
        	allowAnimation = false;
         	$("html, body").stop().animate({scrollTop:850}, 850-st, /*'swing',*/ function() {
         		allowAnimation = true;
         	});
		}
		if(st>=600 && st<1600) {
			allowAnimation = false;
			$("html, body").stop().animate({scrollTop:1780}, 1780-st, /*'swing',*/ function() {
         		allowAnimation = true;
         	});
		}
		if(st>=1600 && st<2600) {
			allowAnimation = false;
			$("html, body").stop().animate({scrollTop:2700}, 2700-st, /*'swing',*/ function() {
         		allowAnimation = true;
         	});
		}
		if(st>=2600 && st<2900) {
			allowAnimation = false;
			$("html, body").stop().animate({scrollTop:3140}, 3140-st, /*'swing',*/ function() {
         		allowAnimation = true;
         	});
		}
		if(st>=2900) {
		}

     }else {
         //scroll up
         //console.log('Up');

         if(st>=0 && st<600) {
         	allowAnimation = false;
         	$("html, body").stop().animate({scrollTop:0}, st, 'swing', function() {
         		allowAnimation = true;
         	});
		}
		if(st>=600 && st<1600) {
			allowAnimation = false;
			$("html, body").stop().animate({scrollTop:0}, st, 'swing', function() {
         		allowAnimation = true;
         	});
		}
		if(st>=1600 && st<2600) {
			allowAnimation = false;
			$("html, body").stop().animate({scrollTop:850}, st-850, 'swing', function() {
         		allowAnimation = true;
         	});
		}
		if(st>=2600 && st<2900) {
			allowAnimation = false;
			$("html, body").stop().animate({scrollTop:1780}, st-1780, 'swing', function() {
         		allowAnimation = true;
         	});
		}
		if(st>=2900) {
			allowAnimation = false;
			$("html, body").stop().animate({scrollTop:2700}, st-2700, 'swing', function() {
         		allowAnimation = true;
         	});
		}
     }

}
     //prevent page fom scrolling
     return false;
 }/*)*/;


/*window.onwheel = function() {
	scrollCur = $(this).scrollTop();
}*/


	$(window).scroll(function() {   
		if(window.matchMedia("screen and (min-width: 1350px)").matches && !(ua.indexOf('Trident/7.0') + 1)) {







	var st = $(this).scrollTop();
	$(".backgrounds").css({
		"transform" : "translate(0%, -" + st/120 + "%"
	});  

	/*if(st > 2800){
		$(".footer").show();
	}else{
		$(".footer").hide();
	}*/
	//console.log(st);
	if(st>=0 && st<600) {
		$(".bullet").attr("src", "img/scroll-indicator.png");
		$(".1bull").attr("src", "img/scroll-indicator-active1.png");
	}
	if(st>=600 && st<1600) {
		$(".bullet").attr("src", "img/scroll-indicator.png");
		$(".2bull").attr("src", "img/scroll-indicator-active2.png");
	}
	if(st>=1600 && st<2600) {
		$(".bullet").attr("src", "img/scroll-indicator.png");
		$(".3bull").attr("src", "img/scroll-indicator-active1.png");
	}
	if(st>=2600 && st<2900) {
		$(".bullet").attr("src", "img/scroll-indicator.png");
		$(".4bull").attr("src", "img/scroll-indicator-active3.png");
	}
	if(st>=2900) {
		$(".bullet").attr("src", "img/scroll-indicator.png");
		$(".5bull").attr("src", "img/scroll-indicator-active2.png");
	}


	if(st>=490) {
		if (st<850) {
			$(".videoHeader").css("margin-top", st-490+80);
			$(".form-h2").css("margin-top", 360-(st-490));
			$(".wrapper").css("background-position-y", st-490);
		}else {
			$(".videoHeader").css("margin-top", 850-490+80);
			$(".form-h2").css("margin-top", 360-(850-490));
			$(".wrapper").css("background-position-y", 850-490);
		}

	} else {
		$(".videoHeader").css("margin-top", 490-490+80);
			$(".form-h2").css("margin-top", 360-(490-490));
			$(".wrapper").css("background-position-y", 490-490);
	}


}else {
	if(window.matchMedia("screen and (max-width: 1350px)").matches) {
		$(".backgrounds").css({
		"transform" : "translate(0%, -" + 30 + "%"  
	}); 

	}
	$(".videoHeader").css("margin-top", 450-450+80);
			$(".form-h2").css("margin-top", 50);
			$(".wrapper").css("background-position-y", 450-450);

}	
if(window.matchMedia("screen and (max-width: 680px)").matches) {
	$(".videoHeader").css("margin-top", 35);
}
});

	


/*$(window).bind('mousewheel', function(e){
	console.log("mousewheel Bind");

	var st = $(this).scrollTop();  
	if(window.matchMedia("screen and (min-width: 1350px)").matches && !(ua.indexOf('Trident/7.0') + 1)) {
		if(!allowAnimation) {
			return false;
		}
    


     if(e.originalEvent.wheelDelta < 0) {
         //scroll down
         //console.log('Down');         
        
        if(st>=0 && st<600) {
        	allowAnimation = false;
         	$("html, body").stop().animate({scrollTop:850}, 850-st, 'swing', function() {
         		allowAnimation = true;
         	});
		}
		if(st>=600 && st<1600) {
			allowAnimation = false;
			$("html, body").stop().animate({scrollTop:1780}, 1780-st, 'swing', function() {
         		allowAnimation = true;
         	});
		}
		if(st>=1600 && st<2600) {
			allowAnimation = false;
			$("html, body").stop().animate({scrollTop:2700}, 2700-st, 'swing', function() {
         		allowAnimation = true;
         	});
		}
		if(st>=2600 && st<2900) {
			allowAnimation = false;
			$("html, body").stop().animate({scrollTop:3500}, 3500-st, 'swing', function() {
         		allowAnimation = true;
         	});
		}
		if(st>=2900) {
		}

     }else {
         //scroll up
         //console.log('Up');

         if(st>=0 && st<600) {
         	allowAnimation = false;
         	$("html, body").stop().animate({scrollTop:0}, st, 'swing', function() {
         		allowAnimation = true;
         	});
		}
		if(st>=600 && st<1600) {
			allowAnimation = false;
			$("html, body").stop().animate({scrollTop:0}, st, 'swing', function() {
         		allowAnimation = true;
         	});
		}
		if(st>=1600 && st<2600) {
			allowAnimation = false;
			$("html, body").stop().animate({scrollTop:850}, st-850, 'swing', function() {
         		allowAnimation = true;
         	});
		}
		if(st>=2600 && st<2900) {
			allowAnimation = false;
			$("html, body").stop().animate({scrollTop:1780}, st-1780, 'swing', function() {
         		allowAnimation = true;
         	});
		}
		if(st>=2900) {
			allowAnimation = false;
			$("html, body").stop().animate({scrollTop:2700}, st-2700, 'swing', function() {
         		allowAnimation = true;
         	});
		}
     }

}
     //prevent page fom scrolling
     //return false;
 });*/





$(window).resize(function() {
if(window.matchMedia("screen and (min-width: 1620px)").matches) {
	$(".scroll-indicator").show();
}else {
	$(".scroll-indicator").hide();
}

if((ua.indexOf('Trident/7.0') + 1)) {
		
		$(".footer").css("margin-left", -$(".footer").width()/2);
			}

});



$(document).ready(function(){

	





	scrollVal = $(this).scrollTop();
	var first_name_flag = 0;
   	var second_name_flag = 0;
   	var email_flag = 0;
   	var phone_flag = 0;
	if((ua.indexOf('Trident/7.0') + 1)) {
		$(".backgrounds").hide();
		$(".footeк").css("left", "50%");
		$(".footer").css("margin-left", -$(".footer").width()/2);
		$(".fields").css("max-width", "940px");
		$("#comment").css("margin-left", "50%");
		$("#comment").css("margin-left", -$("#comment").width()/2);
			}
	
	if(window.matchMedia("screen and (min-width: 1620px)").matches && !(ua.indexOf('Trident/7.0') + 1)) {
	$(".scroll-indicator").show();
}else {
	$(".scroll-indicator").hide();
}
	$('.content-comments').slick({
		//infinite: true,
  		slidesToShow: 2,
 		slidesToScroll: 1,
 		adaptiveHeight: true,
 		prevArrow: $('arrow-left'),
 		nextArrow: $('arrow-right'),
 		//variableWidth: true,
 		responsive: [
 		{
 			breakpoint: 951,
 			settings: {
 				slidesToShow: 1
 			}

 		}
 		]
      });

	$('.arrow-right').click(function(){
		//console.log("arrow right");
		$('.content-comments').slick('slickNext');
	});
	$('.arrow-left').click(function(){
		//console.log("arrow right");
		$('.content-comments').slick('slickPrev');
	});


if(!(ua.indexOf('Trident/7.0') + 1)) {
	var st = $(this).scrollTop();  
	//console.log(st);
	if(st>=0 && st<600) {
		$(".bullet").attr("src", "img/scroll-indicator.png");
		$(".1bull").attr("src", "img/scroll-indicator-active1.png");
	}
	if(st>=600 && st<1600) {
		$(".bullet").attr("src", "img/scroll-indicator.png");
		$(".2bull").attr("src", "img/scroll-indicator-active2.png");
	}
	if(st>=1600 && st<2600) {
		$(".bullet").attr("src", "img/scroll-indicator.png");
		$(".3bull").attr("src", "img/scroll-indicator-active1.png");
	}
	if(st>=2600 && st<2900) {
		$(".bullet").attr("src", "img/scroll-indicator.png");
		$(".4bull").attr("src", "img/scroll-indicator-active3.png");
	}
	if(st>=2900) {
		$(".bullet").attr("src", "img/scroll-indicator.png");
		$(".5bull").attr("src", "img/scroll-indicator-active2.png");
	}
}


	$(".1bull").click(function(){
		$("html, body").stop().animate({scrollTop:0}, 500, 'swing');
	});
	$(".2bull").click(function(){
		$("html, body").stop().animate({scrollTop:850}, 500, 'swing');
	});
	$(".3bull").click(function(){
		$("html, body").stop().animate({scrollTop:1780}, 500, 'swing');
	});
	$(".4bull").click(function(){
		$("html, body").stop().animate({scrollTop:2700}, 500, 'swing');
	});
	$(".5bull").click(function(){
		$("html, body").stop().animate({scrollTop:3140}, 500, 'swing');
	});

   	$("#input-first-name").focusout(function(){
   		if ($("#input-first-name").val().length == 0 ) {
   			$(".field-first-name .flag").show();
   			$(".field-first-name .flag").css("background-image", "url(img/field_error.png)");
   			$("#input-first-name").css("border-color", "#e30613");
   			$("#input-first-name-error").show();
   			$(".field-first-name").css("margin-bottom","40px");
   			first_name_flag = 0;
   		}
   		else {
   			$(".field-first-name .flag").show();
   			$(".field-first-name .flag").css("background-image", "url(img/field_correct.png)");
   			$("#input-first-name").css("border-color", "#35aa49");
   			$("#input-first-name-error").hide();
   			$(".field-first-name").css("margin-bottom","30px");
   			first_name_flag = 1;
   		}
   	});
   	$("#input-second-name").focusout(function(){
   		if ($("#input-second-name").val().length == 0 ) {
   			$(".field-second-name .flag").show();
   			$(".field-second-name .flag").css("background-image", "url(img/field_error.png)");
   			$("#input-second-name").css("border-color", "#e30613");
   			$("#input-second-name-error").show();
   			$(".field-second-name").css("margin-bottom","40px");
   			second_name_flag = 0;
   		}
   		else {
   			$(".field-second-name .flag").show();
   			$(".field-second-name .flag").css("background-image", "url(img/field_correct.png)");
   			$("#input-second-name").css("border-color", "#35aa49");
   			$("#input-second-name-error").hide();
   			$(".field-second-name").css("margin-bottom","30px");
   			second_name_flag = 1;
   		}
   	});

   /*	$("#input-phone").focusout(function(){
   		if ($("#input-phone").val().length == 0 ) {
   			$(".field-phone .flag").show();
   			$(".field-phone .flag").css("background-image", "url(img/field_error.png)");
   			$("#input-phone").css("border-color", "#e30613");
   			$("#input-phone-error").show();
   			$(".field-phone").css("margin-bottom","40px");
   		}
   		else {
   			$(".field-phone .flag").show();
   			$(".field-phone .flag").css("background-image", "url(img/field_correct.png)");
   			$("#input-phone").css("border-color", "#35aa49");
   			$("#input-phone-error").hide();
   			$(".field-phone").css("margin-bottom","30px");
   		}
   	});*/

   	$("#input-email").focusout(function(){
   		if ($("#input-email").val().length == 0 ) {
   			$("#input-email-error2").hide();
   			$(".field-email .flag").show();
   			$(".field-email .flag").css("background-image", "url(img/field_error.png)");
   			$("#input-email").css("border-color", "#e30613");
   			$("#input-email-error1").show();
   			$(".field-email").css("margin-bottom","40px");
   			email_flag = 0;
   		}
   		else {
   			var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
   			if (!rv_email.test($("#input-email").val())) {
   				$("#input-email-error1").hide();
	   			$(".field-email .flag").show();
	   			$(".field-email .flag").css("background-image", "url(img/field_error.png)");
	   			$("#input-email").css("border-color", "#e30613");
	   			$("#input-email-error2").show();
	   			$(".field-email").css("margin-bottom","40px");
	   			email_flag = 0;

   			}
   			else {


   			$(".field-email .flag").show();
   			$(".field-email .flag").css("background-image", "url(img/field_correct.png)");
   			$("#input-email").css("border-color", "#35aa49");
   			$("#input-email-error1").hide();
   			$(".field-email").css("margin-bottom","30px");
   			$("#input-email-error2").hide();
   			email_flag = 1;
   			}
   		}
   	});

   	$("#input-phone").focusout(function(){
   		if ($("#input-phone").val().length == 0 ) {
   			$("#input-phone-error2").hide();
   			$(".field-phone .flag").show();
   			$(".field-phone .flag").css("background-image", "url(img/field_error.png)");
   			$("#input-phone").css("border-color", "#e30613");
   			$("#input-phone-error1").show();
   			$(".field-phone").css("margin-bottom","40px");
   			phone_flag = 0;
   		}
   		else {
   			var rv_phone = /^\+?([0-9])+$/;
   			if (!rv_phone.test($("#input-phone").val())) {
   				$("#input-phone-error1").hide();
	   			$(".field-phone .flag").show();
	   			$(".field-phone .flag").css("background-image", "url(img/field_error.png)");
	   			$("#input-phone").css("border-color", "#e30613");
	   			$("#input-phone-error2").show();
	   			$(".field-phone").css("margin-bottom","40px");
	   			phone_flag = 0;

   			}else {


   			$(".field-phone .flag").show();
   			$(".field-phone .flag").css("background-image", "url(img/field_correct.png)");
   			$("#input-phone").css("border-color", "#35aa49");
   			$("#input-phone-error1").hide();
   			$(".field-phone").css("margin-bottom","30px");
   			$("#input-phone-error2").hide();
   			phone_flag = 1;
   			}
   		}
   	});
   	$('#send').click(function(){
      if((phone_flag+first_name_flag+second_name_flag+email_flag) == 4) {
      	$("html, body").stop().animate({scrollTop:0}, 500, 'swing');
         $(".thanks").css("display", "block");
      }
   });
   	$('.sendmob').click(function(){
      if((phone_flag+first_name_flag+second_name_flag+email_flag) == 4) {
      	$("html, body").stop().animate({scrollTop:0}, 500, 'swing');
         $(".thanks").css("display", "block");
      }
   });
   	$
   	$("#select-country").focusout(function(){
   		$(".select-country .flag").show();
   		$(".select-country .flag").css("background-image", "url(img/field_correct.png)");
   		$("#select-country").css("border-color", "#35aa49");
   	});

   	$("#input-skype").focusout(function(){
   		if ($("#input-skype").val().length == 0 ) {
   			$(".field-skype .flag").hide();
   			$("#input-skype").css("border-color", "#555555");
   		}
   		else {
   			$(".field-skype .flag").show();
   			$(".field-skype .flag").css("background-image", "url(img/field_correct.png)");
   			$("#input-skype").css("border-color", "#35aa49");
   		}
   	});
   	$('#select-country').keydown(function(eventObject){
  		if(eventObject.which == 9) {
  			//alert("sdsdsd");
  			$("#confid").focus();

  		}
	});

	$('#download').click(function(){
		if(window.matchMedia("screen and (max-width: 420px)").matches) {
		$("html, body").stop().animate({scrollTop:1270-$(window).height()}, 500, 'swing');
	} else if(window.matchMedia("screen and (max-width: 680px)").matches){
		$("html, body").stop().animate({scrollTop:1520-$(window).height()}, 500, 'swing');

	} else {
		$("html, body").stop().animate({scrollTop:850}, 500, 'swing');
	}
	});
	$('.youtubeLogo').click(function(){
		if(window.matchMedia("screen and (max-width: 420px)").matches) {
		$("html, body").stop().animate({scrollTop:1270-$(window).height()}, 500, 'swing');
	} else if(window.matchMedia("screen and (max-width: 680px)").matches){
		$("html, body").stop().animate({scrollTop:1520-$(window).height()}, 500, 'swing');

	} else {
		$("html, body").stop().animate({scrollTop:850}, 500, 'swing');
	}
	});
});



