$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.header-sticky').addClass('scrolle-header')
    } else {
      $('.header-sticky').removeClass('scrolle-header')
    }
  })
})





// about section read more and less 
$(document).ready(function () {
  var container = $('.about-description--wrapper');
  var btn = $('.toggle--btn');
  var fullHeight = container.outerHeight(true);

  if (fullHeight <= 160) {
    btn.hide();
  } else {
    container.css('height', '160px');
    btn.on('click', function () {
      container.parent().toggleClass('fullcontent');

      if (container.parent().hasClass('fullcontent')) {
        btn.html(
          'Read less <span class="icon-wrapper"><iconify-icon icon="uil:angle-up"></iconify-icon></span>'
        );
        container.css('height', fullHeight + 'px');
      } else {
        btn.html(
          'Read more <span class="icon-wrapper"><iconify-icon icon="uil:angle-down"></iconify-icon></span>'
        );
        container.css('height', '160px');
      }
    });
  }
});


// project section js

const filterTabs = document.querySelectorAll(".filter li");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterTabs.forEach(tab => {
  tab.addEventListener("click", () => {

    // active tab
    filterTabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const filterValue = tab.getAttribute("data-filter");

    portfolioItems.forEach(item => {
      if (filterValue === "*") {
        item.style.display = "block";
      } else {
        item.classList.contains(filterValue.replace(".", ""))
          ? item.style.display = "block"
          : item.style.display = "none";
      }
    });

  });
});


// Testomonial section js
$('.testimonial-carousel').owlCarousel({
  loop: true,
  margin: 10,
  rtl: true,
  responsiveClass: true,
  items: 1,        // Number of items per slide
  nav: false,
  dot: true,
  autoplay: false,  // Enable autoplay
  autoplayTimeout: 3000, // Set autoplay interval
  autoplayHoverPause: true, // Pause on hover
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,

    },
     768: {
      items: 3,

    },
    992: {
      items: 4,
    }
  }
})

// Resume skills slider
$('.skills-carousel').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  items: 1,     
  nav: false,
  dot: true,
  autoplay: false,  // Enable autoplay
  autoplayTimeout: 3000, // Set autoplay interval
  autoplayHoverPause: false, // Pause on hover
  responsive: {
   0: {
      items: 1,
    },
    576: {
      items: 2,

    },
     768: {
      items: 3,

    },
    992: {
      items: 4,
    }
  }
})

