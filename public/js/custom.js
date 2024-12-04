// const hero = document.querySelector(".hero"),
//     threshold = window.innerHeight;
// window.addEventListener("scroll", function () {
//     let e = 1 + window.scrollY / 25,
//         o = 100 - 1.5 * window.scrollY;
//     e < 20 && ((hero.style.transform = `scale(${e})`), (hero.style.opacity = 0.05 * o));
// });


// $(document).ready(function(){
//   $('[data-toggle="tooltip"]').tooltip()
// });

// function goBack() {
//   window.history.back();
// }
// AOS Instance //
// AOS.init();

// AOS.init({
// 	once: true,
// 	duration: 1000,
// });

// $(window).on("load", function () {
// 	$(".spinner-box").fadeOut(500);
// });

// $(document).ready(function () {
//   var Size = $(window).width();

// //   while (Size <= 768) {
// //     var maxLength = 300;
// //     $(".show-read-more").each(function () {
// //       var myStr = $(this).text();
// //       if ($.trim(myStr).length > maxLength) {
// //         var newStr = myStr.substring(0, maxLength);
// //         var removedStr = myStr.substring(maxLength, $.trim(myStr).length);
// //         $(this).empty().html(newStr);
// //         $(this).append("<br/>");
// //         $(this).append(
// //           '<a href="javascript:void(0);" class="read-more">Read More</a>'
// //         );
// //         $(this).append('<span class="more-text">' + removedStr + "</span>");
// //       }
// //     });
// //     $(".read-more").click(function () {
// //       $(this).siblings(".more-text").contents().unwrap();
// //       $(this).remove();
// //     });
// //   }

$(window).scroll(function () {
    if ($(document).scrollTop() >= 70) {
        $(".header-inner-wrapper").addClass("scrolled");
    } else {
        $(".header-inner-wrapper").removeClass("scrolled");
    }
});


// // number or not check//
// function isNumberKey(evt) {
// 	var charCode = evt.which ? evt.which : evt.keyCode;
// 	if (charCode != 46 && charCode > 31 && (charCode < 49 || charCode > 57))
// 		return false;

// 	return true;
// }
// // number or not check//


// Cart Modal Slider
// $(document).ready(function(){
//     $(".cart-close").click(function(){
//         $(this).closest(".cart-product-box").css({
//             "display": "none"
//         });
//     });

//     $(".cart-minus").click(function(){
//         var currentVal = parseInt($(this).next(".cart-count-input").val());
//         if (currentVal != NaN && currentVal > 0)
//         {
//             if(currentVal == 1){
//                 return;
//             }else{
//                 $(this).next(".cart-count-input").val(currentVal - 1);
//             }
//         }
//     });

//     $(".cart-plus").click(function(){
//         var currentVal = parseInt($(this).prev(".cart-count-input").val());
//         if (currentVal != NaN)
//         {
//             $(this).prev(".cart-count-input").val(currentVal + 1);
//         }
//     });
// });
// Cart Modal Slider

//   // Check Width
// //   function checkWidth() {
// //     var windowSize = $(window).width();
// //     if (windowSize <= 768) {
// //       var maxLength = 300;
// //       $(".show-read-more").each(function () {
// //         var myStr = $(this).text();
// //         if ($.trim(myStr).length > maxLength) {
// //           var newStr = myStr.substring(0, maxLength);
// //           var removedStr = myStr.substring(maxLength, $.trim(myStr).length);
// //           $(this).empty().html(newStr);
// //           $(this).append("<br/>");
// //           $(this).append(
// //             '<a href="javascript:void(0);" class="read-more">Read More</a>'
// //           );
// //           $(this).append('<span class="more-text">' + removedStr + "</span>");
// //         }
// //       });
// //       $(".read-more").click(function () {
// //         $(this).siblings(".more-text").contents().unwrap();
// //         $(this).remove();
// //       });
// //     }
// //   }
//   // open
//   $(".open").click(function () {
//     $(".open").css("display", "none");
//     $(".close").css("display", "block");
//     $(".toggle-logo").css("color", "transparent");
//     $(".toggle-logo").bind("click", false);
//   });

//   $(".close").click(function () {
//     $(".open").css("display", "block");
//     $(".close").css("display", "none");
//     $(".toggle-logo").css("color", "#c94f9b");
//     $(".toggle-logo").unbind("click", false);
//   });
//   //close

//   // Check Width
// //   checkWidth();
//   activePageLinkControl();
// });

// $(document).ready(function(){
// 	activeStepControl();
// });

// function activeStepControl() {
//   $(".middle .step1-box button").click(function () {
//     $(".middle .step1-box button").removeClass("active");
//     $(this).closest(".middle .step1-box button").addClass("active");
//   });
// }

// function goBack() {
//   window.history.back();
// }

// // number or not check//
// function isNumberKey(evt) {
// 	var charCode = evt.which ? evt.which : evt.keyCode;
// 	if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
// 		return false;

// 	return true;
// }
// // number or not check//

// const prevIcon = '<span class="material-symbols-outlined">west</span>';
// const prevIcon = '<span class="material-symbols-outlined">chevron_left</span>';
// const nextIcon = '<span class="material-symbols-outlined">east</span>';
// const nextIcon = '<span class="material-symbols-outlined">chevron_right</span>';

// const prevIcon = '<img src="./assets/images/home/left_scroll.png" alt="">';
// const nextIcon = '<img src="./assets/images/home/right_scroll.png" alt="">';

// ,
//     navText: [
//         prevIcon,
//         nextIcon
//     ],


// $('.custom1').owlCarousel({
// 	loop: true,
//     animateOut: 'bounceInRight',
//     animateIn: 'bounceInLeft',
// 	animateOut: 'fadeOut',
//     animateIn: 'slideInLeft',
//     items:1,
//     margin:30,
//     stagePadding:30,
//     smartSpeed:450,
// 	autoplay: true,
// 	autoplayTimeout: 8000,
// 	autoplayHoverPause: true,
// });

// $('.top-tours-slider').owlCarousel({
// 	loop: true,
// 	margin: 20,
// 	autoplay: false,
// 	autoplaySpeed: 1000,
// 	nav: false,
// 	center: false,
// 	dots: true,
// 	responsive: {
// 		0: {
// 			items: 1
// 		},
// 		260: {
// 			items: 1,

// 		},
// 		380: {
// 			items: 1,

// 		},
// 		768: {
// 			items: 1,

// 		},
// 		992: {
// 			items: 1,

// 		},
// 		1300: {
// 			items: 1,

// 		}
// 	}
// });


// $('.our-partner-inner').owlCarousel({
// 	loop: true,
// 	margin: 50,
// 	autoplay: false,
// 	autoplaySpeed: 1000,
// 	nav: false,
// 	center: false,
// 	dots: false,
// 	responsive: {
// 		0: {
// 			items: 1
// 		},
// 		260: {
// 			items: 2,

// 		},
// 		380: {
// 			items: 2,

// 		},
// 		768: {
// 			items: 2,

// 		},
// 		992: {
// 			items: 2,

// 		},
// 		1300: {
// 			items: 2,

// 		}
// 	}
// });
// $('.clients-slider').owlCarousel({
// 	loop: false,
// 	margin: 20,
// 	autoplay: true,
// 	autoplaySpeed: 1000,
// 	nav: false,
// 	center: false,
// 	slideBy: 1,
// 	rewind: true,
// 	dots: false,
// 	responsive: {
// 		0: {
// 			items: 1
// 		},
// 		260: {
// 			items: 2,

// 		},
// 		380: {
// 			items: 2,

// 		},
// 		768: {
// 			items: 3,

// 		},
// 		992: {
// 			items: 4,

// 		},
// 		1300: {
// 			items: 5,

// 		}
// 	}
// });
// $('.team-slider').owlCarousel({
// 	loop: true,
// 	margin: 20,
// 	autoplay: false,
// 	autoplaySpeed: 1000,
// 	nav: false,
// 	center: false,
// 	dots: false,
// 	responsive: {
// 		0: {
// 			items: 1
// 		},
// 		260: {
// 			items: 2,

// 		},
// 		380: {
// 			items: 3,

// 		},
// 		768: {
// 			items: 4,

// 		},
// 		992: {
// 			items: 4,

// 		},
// 		1300: {
// 			items: 4,

// 		}
// 	}
// });

// var prevIcon = '<i class="fa fa-chevron-left" aria-hidden="true"></i>';
// var nextIcon = '<i class="fa fa-chevron-right" aria-hidden="true"></i>';

// $(document).ready(function () {
// var owl = $('.dashboard-events-slider');
// owl.owlCarousel({
//   items: 8,
//   loop: false,
//   margin: 20,
//   autoplay: false,
//   slideTransition: 'linear',
//   autoplaySpeed: 2000,
//   autoplayTimeout: 5000,
//   autoplaySpeed: 3000,
//   autoplayHoverPause: false,
//   nav: true,
//   navText: [
//     prevIcon,
//     nextIcon
//   ],
//   dots: false,
//   responsive: {
//     0: {
//       items: 1
//     },
//     260: {
//       items: 1
//     },
//     380: {
//       items: 1
//     },
//     768: {
//       items: 1
//     },
//     992: {
//       items: 1
//     },
//     1399: {
//       items: 1
//     },
//     1400: {
//       items: 1
//     }
//   }

// });

// var owls = $('.dashboard-news-slider');
// owls.owlCarousel({
//   items: 8,
//   loop: false,
//   margin: 20,
//   autoplay: false,
//   slideTransition: 'linear',
//   autoplaySpeed: 2000,
//   autoplayTimeout: 5000,
//   autoplaySpeed: 3000,
//   autoplayHoverPause: false,
//   nav: true,
//   navText: [
//     prevIcon,
//     nextIcon
//   ],
//   dots: false,
//   responsive: {
//     0: {
//       items: 1
//     },
//     260: {
//       items: 1
//     },
//     380: {
//       items: 1
//     },
//     768: {
//       items: 1
//     },
//     992: {
//       items: 1
//     },
//     1399: {
//       items: 1
//     },
//     1400: {
//       items: 1
//     }
//   }

// });

// });

// $('.brands-slider').owlCarousel({
// loop:true,
// margin:20,
// autoplay: true,
// autoplaySpeed: 1000,
// autoplayTimeout: 0,
// nav:false,
// slideTransition: 'linear',
// dots:false,
// items: 8,
// loop: true,
// margin: 20,
// autoplay: true,
// slideTransition: 'linear',
// autoplayTimeout: 0,
// autoplaySpeed: 3000,
// autoplayHoverPause: false,
// nav: false,
// dots: false
// responsive: {
// 	0: {
// 		items: 1
// 	},
// 	260: {
// 		items: 2
// 	},
// 	380: {
// 		items: 3
// 	},
// 	768: {
// 		items: 3
// 	},
// 	992: {
// 		items: 4
// 	},
// 	1399: {
// 		items: 5
// 	},
// 	1400: {
// 		items: 5
// 	}
// }
// })

// $('.searchbtn').click(function(){
//     // $('.search-wrapper').css({
//     //     bottom: "-20px"
//     // });
//     $(".search-wrapper").toggleClass("bottom");
// });
// $('.msearchicon').click(function(){
//   $(".mobile-search-wrapper").toggleClass("bottom");
// });

// $(document).ready(function () {
//     $("#sidebarCollapse").on("click", function () {
//       // $("#sidebar").toggleClass("active");
//       if ($("#sidebar").css("left") == "-250px") {
//         $("#sidebar").css({ left: "0px" });
//       } else {
//         $("#sidebar").css({ left: "-250px" });
//       }
//     });
//   });
//   $(document).click(function(e){
//   var container = $("#sidebar");
//   // If the target of the click isn't the container
//   if(!$("#sidebar").is(e.target) && $("#sidebar").has(e.target).length === 0){
//     if ($("#sidebar").css("left") == "0px") {
//         $("#sidebar").css({ left: "-250px" });
//       }
//   }
//   });


// $(document).ready(function () {
// 	$('.hero-slider').carousel({
// 		pause: true,
// 		interval: false
// 	});

// 	slowScroll();

// 	$(document).ready(function () {
// 		activeStepControl();
// 	});

// 	function activeStepControl() {
// 		$(".tour-details-top-buttons-wrapper a").click(function () {
// 			$(".tour-details-top-buttons-wrapper a").removeClass("active");
// 			$(this).closest(".tour-details-top-buttons-wrapper a").addClass("active");
// 		});
// 	}

// 	$(".searchIcon").click(function(){
// 		$(".search-wrapper").toggleClass("showsearch");
// 	});
// 	$(document).mouseup(function (e){
// 		var container = $(".search-wrapper");
// 		if (container.has(e.target).length === 0) {
// 			$(".search-wrapper").removeClass("showsearch");
// 		}
// 	});
// });

// $(".mobile-menu-wrapper li a").click(function(){
// 	$("#mobileMenuClose").click();
// });


// $(window).load(function()
// {
//     $('#loginModal').modal('show');
// });
$(document).ready(function(){
	// $('#myVideo').play();
	$('#loginModal').modal('show');
});

slowScroll();

function slowScroll() {
	$('.home-top-content-box .link-wrapper a[href^="#"]').on("click", function (e) {
		if ($(this).attr('href') === '#') {
			e.preventDefault();
		} else {
			if ($(window).width() < 1024) {
				if (!$(e.target).is('.sub-arrow')) {
					$('html, body').animate({
						scrollTop: $(this.hash).offset().top - 71
					}, 500);
					$('.menu-holder').removeClass('show');
					$('#toggle').removeClass('on');
					return false;
				}
			} else {
				$('html, body').animate({
					scrollTop: $(this.hash).offset().top - 71
				}, 500);
				return false;
			}
		}
	});
}


var prevIcon = '<span class="material-symbols-outlined">arrow_left_alt</span>';
var nextIcon = '<span class="material-symbols-outlined">arrow_right_alt</span>';

$('.success-stories-slider').owlCarousel({
	loop: true,
	margin: 20,
	autoplay: true,
	autoplaySpeed: 2000,
	nav: true,
	center: false,
    navText: [
    prevIcon,
    nextIcon
    ],
	dots: false,
	responsive: {
		0: {
			items: 1
		},
		260: {
			items: 1,

		},
		380: {
			items: 1,

		},
		768: {
			items: 1.5,

		},
		992: {
			items: 2.2,

		},
		1300: {
			items: 2.5,

		},
		1441:{
			items: 2.8
		},
	}
});


// var $post = $(".top-btn-box");
// setTimeout(function(){
// 	$(".top-btn-box").removeClass('btn-bg');
//  },4000);
//  setTimeout(function(){
// 	$('.top-btn-box').toggleClass('btn-bg');
//  },9000);
// setInterval(function(){
//     $post.toggleClass("btn-bg");
// }, 10000);






// Header Sticky
// $(window).scroll(function () {
//   var scroll = $(window).scrollTop();
//   if (scroll >= 200) {
//     $("header").addClass("sticky");
//   } else {
//     $("header").removeClass("sticky");
//   }
// });
// Header Sticky





// Mobile Bar



// Mobile Bar


// $(".type").click(function () {
// 	$("#organization_name").val('');
// 	var id = $(this).attr('id');
// 	if (id == "organization") {
// 		$('.organizationname').show();
// 		$("#organization_name").attr("required", "true");
// 	} else {
// 		$('.organizationname').hide();
// 		$("#organization_name").removeAttr("required");
// 	}
// });


// $.validator.addMethod("is_valid_email",
// 	function (value, element) {
// 		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
// 		return regex.test(value);
// 	},
// 	"Please enter a valid email address."
// );
// if ($("#contact_form").length > 0) {
// 	$("#contact_form").validate({
// 		ignore: [],
// 		rules: {
// 			'email': {
// 				email: true,
// 				is_valid_email: true
// 			},
// 			'mobile': {
// 				digits: true,
// 				minlength: 10,
// 				maxlength: 10
// 			},
// 			'g-recaptcha-response': {
// 				required: true
// 			}
// 		},
// 		messages: {},
// 	});
// }
// if ($("#getintouch_form").length > 0) {
// 	$("#getintouch_form").validate({
// 		ignore: [],
// 		rules: {
// 			'email': {
// 				email: true,
// 				is_valid_email: true
// 			},
// 			'mobile': {
// 				digits: true,
// 				minlength: 10,
// 				maxlength: 10
// 			},
// 			'g-recaptcha-response': {
// 				required: true
// 			}
// 		},
// 		messages: {},
// 	});
// }

// if ($("#boond_card").length > 0) {
// 	$("#boond_card").validate({
// 		ignore: [],
// 		rules: {
// 			'email': {
// 				email: true,
// 				is_valid_email: true
// 			},
// 			'mobile': {
// 				digits: true,
// 				minlength: 10,
// 				maxlength: 10
// 			},
// 			'g-recaptcha-response': {
// 				required: true
// 			}
// 		},
// 		messages: {},
// 	});
// }

// $('#boond_card_city').click(function () {
// 	var html = "";
// 	if ($(this).val() == "Delhi") {
// 		html = '<option value="Mayur Vihar, Phase 1 (110091)">Mayur Vihar, Phase 1 (110091)</option>';
// 		html += '<option value="Mayur Vihar, Phase 2 (110091)">Mayur Vihar, Phase 2 (110091)</option>';
// 		html += '<option value="Patpargunj (110091)">Patpargunj 110091)</option>';
// 		html += '<option value="Laxmi Nagar	(110091)">Laxmi Nagar (110091)</option>';
// 		html += '<option value="Badarpur – Jaitpur (110044)">Badarpur – Jaitpur	(110044)</option>';
// 		html += '<option value="Hari Nagar (110044)">Hari Nagar	(110044)</option>';
// 		html += '<option value="Meethapur (110044)">Meethapur (110044)</option>';
// 		html += '<option value="Saurabh Vihar (110044)">Saurabh Vihar (110044)</option>';
// 	} else if ($(this).val() == "Uttar Pradesh") {
// 		html = '<option value="Noida Sectors 66 (201301)">Noida Sectors 66 (201301)</option>';
// 		html += '<option value="Noida Sectors 62 (201301)">Noida Sectors 62 (201301)</option>';
// 		html += '<option value="Noida Sectors 59 (201301)">Noida Sectors 59 (201301)</option>';
// 		html += '<option value="Noida Sectors 45 (201301)">Noida Sectors 45 (201301)</option>';
// 		html += '<option value="Noida Sectors 99 (201301)">Noida Sectors 99 (201301)</option>';
// 		html += '<option value="Noida Sectors 93 (201301)">Noida Sectors 93 (201301)</option>';
// 		html += '<option value="Noida Sectors 90 (201301)">Noida Sectors 90 (201301)</option>';
// 		html += '<option value="Sadarpur (201301)">Sadarpur (201301)</option>';
// 		html += '<option value="Ghaziabad - Bhopura & Tulsi Niketan (201005)">Ghaziabad - Bhopura & Tulsi Niketan (201005)</option>';
// 		html += '<option value="Vijay Nagar (201009)">Vijay Nagar (201009)</option>';
// 		html += '<option value="Crossing Republic (201009)">Crossing Republic (201009)</option>';
// 		html += '<option value="Indira Colony (201005)">Indira Colony (201005)</option>';
// 		html += '<option value="Brij Vihar (201010)">Brij Vihar (201010)</option>';
// 		html += '<option value="Jhandapur Village (201010)">Jhandapur Village (201010)</option>';
// 	}
// 	$('#boond_card_area').html(html);
// });

// $('.counter-box h2 span').counterUp({
//     delay: 20,
//     time: 1000
// });



// $('#tc').change( function(){
// 	console.log( $(this).val() );
// 	document.documentElement.style.setProperty('--tooltip-color', $(this).val() );
// 	init_tooltip();
//   } );

//   $('#tp').change( function(){
// 	console.log( $(this).val() );
// 	$('#a1').attr('data-bs-placement', $(this).val() );
// 	init_tooltip();
//   } );

//   function init_tooltip(){

// 	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
//   var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
// 	return new bootstrap.Tooltip(tooltipTriggerEl)
//   })

//   }

//   init_tooltip();



// var otp_inputs = document.querySelectorAll(".otp__digit")
// var mykey = "0123456789".split("")
// otp_inputs.forEach((_) => {
//   _.addEventListener("keyup", handle_next_input)
// })
// function handle_next_input(event) {
//   let current = event.target
//   let index = parseInt(current.classList[1].split("__")[2])
//   current.value = event.key

//   if (event.keyCode == 8 && index > 1) {
//     current.previousElementSibling.focus()
//   }
//   if (index < 6 && mykey.indexOf("" + event.key + "") != -1) {
//     var next = current.nextElementSibling;
//     next.focus()
//   }
//   var _finalKey = ""
//   for (let { value } of otp_inputs) {
//     _finalKey += value
//   }
//   if (_finalKey.length == 6) {
//     document.querySelector("#_otp").classList.replace("_notok", "_ok")
//     document.querySelector("#_otp").innerText = _finalKey
//   } else {
//     document.querySelector("#_otp").classList.replace("_ok", "_notok")
//     document.querySelector("#_otp").innerText = _finalKey
//   }
// }


// if ($(window).width() < 767){
//   $(".events-section .events-box-wrapper").addClass("dashboard-events-slider");
// }


// Animation 

// Fade In Right Animation 
 // Function to handle the reveal of sections
 const revealSections2 = (entries2, observer2) => {
    entries2.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate--fade-in-right');
            observer2.unobserve(entry.target); // Stop observing once revealed
        }
    });
};

// Create an Intersection Observer
const observer2 = new IntersectionObserver(revealSections2, {
    threshold: 0.6 // Trigger when 10% of the section is visible
});

// Select all sections and observe them
const sections2 = document.querySelectorAll('.fade-in-right-animation');
sections2.forEach(section2 => {
    observer2.observe(section2);
});
// Fade In Right Animation 

// Fade In Left Animation 

// Function to handle the reveal of sections
const revealSections1 = (entries1, observer1) => {
    entries1.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate--fade-in-left');
            observer1.unobserve(entry.target); // Stop observing once revealed
        }
    });
};

// Create an Intersection Observer
const observer1 = new IntersectionObserver(revealSections1, {
    threshold: 0.6 // Trigger when 10% of the section is visible
});

// Select all sections and observe them
const sections1 = document.querySelectorAll('.fade-in-left-animation');
sections1.forEach(section1 => {
    observer1.observe(section1);
});

// Fade In Left Animation


//  Fade In Top Animation  

  // Function to handle the reveal of sections
const revealSections4 = (entries4, observer4) => {
    entries4.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate--fade-in-top');
            observer4.unobserve(entry.target); // Stop observing once revealed
        }
    });
};

// Create an Intersection Observer
const observer4 = new IntersectionObserver(revealSections4, {
    threshold: 0.5 // Trigger when 10% of the section is visible
});

// Select all sections and observe them
const sections4 = document.querySelectorAll('.fade-in-top-animation');
sections4.forEach(section4 => {
    observer4.observe(section4);
});

//  Fade In Top Animation  

//  Fade In Animation 


 
// Animation 



