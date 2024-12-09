
$(window).scroll(function () {
    if ($(document).scrollTop() >= 70) {
        $(".header-inner-wrapper").addClass("scrolled");
    } else {
        $(".header-inner-wrapper").removeClass("scrolled");
    }
});



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



