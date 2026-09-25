/**
* Template Name: Personal - v2.1.0
* Template URL: https://bootstrapmade.com/personal-free-resume-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Initialize VanillaTilt on project cards and interests
  const initTilt = () => {
    if (typeof VanillaTilt !== 'undefined') {
      VanillaTilt.init(document.querySelectorAll(".portfolio-wrap"), {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
      });

      VanillaTilt.init(document.querySelectorAll(".interests .icon-box"), {
        max: 20,
        speed: 400,
        glare: true,
        "max-glare": 0.1,
      });
      
      VanillaTilt.init(document.querySelectorAll(".about-me img"), {
        max: 10,
        speed: 400,
        glare: true,
        "max-glare": 0.3,
      });

      VanillaTilt.init(document.querySelectorAll(".skill-card"), {
        max: 20,
        speed: 400,
        glare: true,
        "max-glare": 0.15,
      });

      VanillaTilt.init(document.querySelectorAll(".edu-card"), {
        max: 10,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
      });

      VanillaTilt.init(document.querySelectorAll(".contact .info-box"), {
        max: 10,
        speed: 400,
        glare: true,
        "max-glare": 0.1,
      });
    }
  };

  // Nav Menu
  $(document).on('click', '.nav-menu a, .mobile-nav a', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var hash = this.hash;
      var target = $(hash);
      if (target.length) {
        e.preventDefault();
        window.scrollTo(0, 0); // Open section from the top

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if (hash == '#header') {
          $('#header').removeClass('header-top');
          $("section").removeClass('section-show');
          history.pushState(null, null, ' '); // remove hash
          return false;
        }

        if (!$('#header').hasClass('header-top')) {
          $('#header').addClass('header-top');
          setTimeout(function() {
            $("section").removeClass('section-show');
            $(hash).addClass('section-show');
            if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
          }, 350);
        } else {
          $("section").removeClass('section-show');
          $(hash).addClass('section-show');
          if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
        }

        // Update URL
        history.pushState(null, null, hash);

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }

        // Animate elements in the active section
        animateSection(hash);

        return false;
      }
    }
  });

  // Always force Home page on load/refresh
  if (window.location.hash) {
    history.replaceState(null, null, ' '); // remove hash from URL
    window.scrollTo(0, 0);
  }

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Skills section
  $('.skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });

  // Testimonials carousel
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      900: { items: 3 }
    }
  });

  // Porfolio isotope and filter
  
  // About 3D mouse interaction
  const aboutContainer = document.querySelector('.about-container');
  const orbitsContainer = document.querySelector('.orbits-parallax-container');
  if (aboutContainer && orbitsContainer) {
    aboutContainer.addEventListener('mousemove', (e) => {
      const rect = aboutContainer.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      
      orbitsContainer.style.setProperty('--mouseX', x);
      orbitsContainer.style.setProperty('--mouseY', y);
      orbitsContainer.style.transform = `translateX(${x * 30}px) translateY(${y * 30}px)`;
    });
    aboutContainer.addEventListener('mouseleave', () => {
      orbitsContainer.style.transform = `translateX(0px) translateY(0px)`;
    });
  }

  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

    initTilt();
    
    // Register GSAP ScrollTrigger
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }
  });

  // Initiate venobox
  $(document).ready(function() {
    $('.venobox').venobox();
  });

  // Custom GSAP Animations for sections
  function animateSection(sectionId) {
    if (typeof gsap === 'undefined') return;
    
    const tl = gsap.timeline();
    
    if (sectionId === '#about') {
      tl.fromTo(`${sectionId} .about-me img`, 
        { x: -50, opacity: 0, rotationY: 45 }, 
        { x: 0, opacity: 1, rotationY: 0, duration: 0.8, ease: "power3.out" }
      )
      .fromTo(`${sectionId} .about-me .content`, 
        { x: 50, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, 
        "-=0.6"
      )
      .fromTo(`${sectionId} .interests .icon-box`, 
        { y: 30, opacity: 0, scale: 0.9 }, 
        { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.5)" },
        "-=0.4"
      );
    } else if (sectionId === '#skills') {
      tl.fromTo(`${sectionId} .category-title`,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: "power2.out" }
      )
      .fromTo(`${sectionId} .skill-card`,
        { y: 50, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.08, ease: "back.out(1.5)" },
        "-=0.4"
      );
    
    } else if (sectionId === '#experience') {
      tl.to(`${sectionId} .timeline-line-fill`, {
        height: '100%',
        duration: 1.5,
        ease: "power2.inOut"
      })
      .to(`${sectionId} .timeline-item`, {
        opacity: 1,
        duration: 0.1,
        stagger: 0.2
      }, "-=1.4")
      .to(`${sectionId} .timeline-node`, {
        scale: 1,
        duration: 0.4,
        stagger: 0.2,
        ease: "back.out(1.5)"
      }, "-=1.3")
      .to(`${sectionId} .timeline-item.left .timeline-content`, {
        x: 0,
        duration: 0.5,
        stagger: 0.4,
        ease: "power2.out"
      }, "-=1.2")
      .to(`${sectionId} .timeline-item.right .timeline-content`, {
        x: 0,
        duration: 0.5,
        stagger: 0.4,
        ease: "power2.out"
      }, "-=1.0");
    } else if (sectionId === '#education') {
      tl.fromTo(`${sectionId} .edu-card`, 
        { y: 50, opacity: 0, scale: 0.95 }, 
        { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.15, ease: "back.out(1.2)" }
      );
    } else if (sectionId === '#portfolio') {
      tl.fromTo(`${sectionId} .portfolio-item`, 
        { scale: 0.8, opacity: 0, y: 50 }, 
        { scale: 1, opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "back.out(1.2)" }
      );
    } else if (sectionId === '#contacts') {
      tl.fromTo(`${sectionId} .info-box`, 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" }
      );
    }
  }


  
})(jQuery);
