/*
Template: Pecto - Multipurpose HTML Template
Author: PECTO
Version: 1.0
Design and Developed by: PECTO
NOTE:
*/

/*================================================
[  Table of contents  ]
================================================
:: Predefined Variables
:: Preloader
:: Check Exists
:: Tooltip
:: Counter
:: Owl carousel
:: Owl carousel mobile
:: Countdown
:: Magnific Popup
:: Progressbar
:: Rounded Skill
:: Masonry
:: Isotope
:: Scroll to Top
:: Screen Size Control
:: Background Control
:: Text Rotator
:: Date Time Picker
:: PECTO Window load and functions

======================================
[ End table content ]
======================================*/

/*************************
      Predefined Variables
*************************/

 (function($){
  "use strict";

/*************************
      Predefined Variables
*************************/
    var PECTO = {},
        $window = $(window),
        $document = $(document),
        $body = $('body'),
        $countdownTimer = $('.countdown'),
        $bar = $('.bar'),
        $header = $('header'),
		    $progressBar = $('.progress-bar'),
        $fullScreen = $('.fullscreen') || $('.section-fullscreen'),
        $counter = $('.counter-main'),
        $counter = $('.counter');

 /*************************
        Preloader
*************************/
  PECTO.preloader = function () {
    $("#load").fadeOut();
    $('#preloader').delay(0).fadeOut('slow');
  };


 /*************************
        Check if function exists
*************************/
     $.fn.exists = function () {
        return this.length > 0;
    };

 /*************************
        Tooltip
*************************/
$('[data-toggle="tooltip"]').tooltip()


 /*************************
       counter
*************************/
 PECTO.counters = function () {
          if ($counter.exists()) {
              $counter.each(function () {
                  var $elem = $(this);
                      $elem.appear(function () {
                          $elem.find('.timer').countTo();
                      });
              });
          }
  };


/*************************
       owl-carousel
*************************/
 PECTO.carousel = function () {
    $(".owl-carousel").each(function () {
        var $this = $(this),
            $items = ($this.data('items')) ? $this.data('items') : 1,
            $loop = ($this.attr('data-loop')) ? $this.data('loop') : true,
            $navdots = ($this.data('nav-dots')) ? $this.data('nav-dots') : false,
            $navarrow = ($this.data('nav-arrow')) ? $this.data('nav-arrow') : false,
            $autoplay = ($this.attr('data-autoplay')) ? $this.data('autoplay') : true,
            $space = ($this.attr('data-space')) ? $this.data('space') : 30;

            $(this).owlCarousel({
				        loop: $loop,
                items: $items,
                responsive: {
                  0:{items: $this.data('xx-items') ? $this.data('xx-items') : 1},
                  499:{items: $this.data('xs-items') ? $this.data('xs-items') : 1},
                  768:{items: $this.data('sm-items') ? $this.data('sm-items') : 2},
                  980:{items: $this.data('md-items') ? $this.data('md-items') : 3},
                  1200:{items: $items}
                },
                dots: $navdots,
                margin:$space,
                nav: $navarrow,
                navText:["<i class='fa fa-angle-left fa-2x'></i>","<i class='fa fa-angle-right fa-2x'></i>"],
                autoplay: $autoplay,
                autoplayHoverPause: true
           });
    });
}


/*************************
       owl carousel mobile
*************************/
PECTO.owlslidermobile = function () {
   if ($('.header-slide').exists()) {
          var owl = $('.header-slide').find('.owl-carousel');
            if(owl.length != 0){

               owl.find(".slide-img").each(function () {
                  $(this).closest('.item').attr('style','background-image:url('+ $(this).find('img').attr("src") +')');
               });
            }
      }
}

/*************************
         Countdown
*************************/
  PECTO.countdownTimer = function () {
      if ($countdownTimer.exists()) {
            $countdownTimer.downCount({
                date: '10/05/2019 12:00:00',
                offset: 400
            });
      }
  };

/*************************
       Magnific Popup
************************/
PECTO.mediaPopups = function () {
    if ($(".popup-img").exists()) {
          $('.popup-img').magnificPopup({
              type: 'image',
              tLoading: 'Loading image #%curr%...',
              mainClass: 'mfp-img-mobile',
              gallery: {
                  enabled: true,
                  navigateByImgClick: true,
                  preload: [0,1] // Will preload 0 - before current, and 1 after the current image
              },
              image: {
                  tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                  titleSrc: function(item) {
                      return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
                  }
             }
         });
      }
      if ($(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()) {
           $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
          });
      }
  }

/*************************
       Progressbar
*************************/
PECTO.progressBar = function () {
    if ($progressBar.exists()) {
        $progressBar.each(function (i, elem) {
            var $elem = $(this),
                percent = $elem.attr('data-percent') || "100",
                delay = $elem.attr('data-delay') || "100",
                type = $elem.attr('data-type') || "%";
            if (!$elem.hasClass('progress-animated')) {
                $elem.css({
                    'width': '0%'
                });
            }
        var progressBarRun = function () {
            $elem.animate({
                'width': percent + '%'
            }, 'easeInOutCirc').addClass('progress-animated');
             $elem.delay(delay).append('<span class="progress-type animated fadeIn">' + type + '</span><span class="progress-number animated fadeIn">' + percent + '</span>');
        };
        $(elem).appear(function () {
                setTimeout(function () {
                    progressBarRun();
                }, delay);
            });
        });
      }
};

/*************************
  Rounded Skill
*************************/
PECTO.roundedSkill = function () {
      var $roundedSkillEl = $('.rounded-skill');
      if( $roundedSkillEl.length > 0 ){
        $roundedSkillEl.each(function(){
          var element = $(this);
          var roundSkillSize = element.attr('data-size');
          var roundSkillSpeed = element.attr('data-speed');
          var roundSkillWidth = element.attr('data-width');
          var roundSkillColor = element.attr('data-color');
          var roundSkillTrackColor = element.attr('data-trackcolor');
          if( !roundSkillSize ) { roundSkillSize = 140; }
          if( !roundSkillSpeed ) { roundSkillSpeed = 2000; }
          if( !roundSkillWidth ) { roundSkillWidth = 8; }
          if( !roundSkillColor ) { roundSkillColor = '#0093BF'; }
		     if( !roundSkillTrackColor ) { roundSkillTrackColor = 'rgba(200,200,200,0.2)'; }
          var properties = {roundSkillSize:roundSkillSize, roundSkillSpeed:roundSkillSpeed, roundSkillWidth:roundSkillWidth, roundSkillColor:roundSkillColor, roundSkillTrackColor:roundSkillTrackColor};
           element.css({'width':roundSkillSize+'px','height':roundSkillSize+'px','line-height':roundSkillSize+'px'}).animate({opacity:0}, 10);
            element.appear(function () {
              if (!element.hasClass('skills-animated')) {
                var t = setTimeout( function(){ element.css({opacity: 1}); }, 100 );
                runRoundedSkills( element, properties );
                element.addClass('skills-animated');
              }
            });
        });

       }
    function runRoundedSkills( element, properties){
      element.easyPieChart({
        size: Number(properties.roundSkillSize),
        animate: Number(properties.roundSkillSpeed),
        scaleColor: false,
        trackColor: properties.roundSkillTrackColor,
        lineWidth: Number(properties.roundSkillWidth),
        lineCap: 'square',
        barColor: properties.roundSkillColor
      });
    }
}


/*************************
         Masonry
*************************/
PECTO.masonry = function () {
    var $masonry = $('.masonry-main .masonry'),
      $itemElement = '.masonry-main .masonry-item';
      if ($masonry.exists()) {
        $masonry.isotope({
          resizable: true,
          itemSelector: $itemElement,
          masonry: {
            gutterWidth: 10
          }
        });
     }
}


/*************************
         Isotope
*************************/
PECTO.Isotope = function () {
      if ($('.b-isotope').length > 0) {
        var $container = $('.b-isotope-grid');
        // init Isotope
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-sizer'
            }
        });

        // layout Isotope after each image loads
        $grid.imagesLoaded().progress(function() {
            $grid.isotope('layout');
        });
        // filter items when filter link is clicked
        $('.b-isotope-filter a').on('click', function() {
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector
            });
            return false;
        });
        $('.b-isotope-filter a').on('click', function() {
            $('.b-isotope-filter').find('.current').removeClass('current');
            $(this).parent().addClass('current');
        });
    }

}

/*************************
     Back to top
*************************/
PECTO.goToTop = function () {
  var $goToTop = $('#back-to-top');
      $goToTop.hide();
    	$window.scroll(function(){
  		  if ($window.scrollTop()>100) $goToTop.fadeIn();
  		  else $goToTop.fadeOut();
  	  });

  	$goToTop.on("click", function () {
  		$('body,html').animate({scrollTop:0},1000);
  		return false;
    });
}

/*************************
     Screen Size Control
*************************/
PECTO.screenSizeControl = function () {
    if ($fullScreen.exists()) {
        $fullScreen.each(function () {
          var id = $fullScreen.attr('id');
            var $elem = $(this),
                 elemHeight = $window.height();
                 $elem.css('height', elemHeight);
                 $('.header-slide .owl-carousel .item').css('height', elemHeight);
        });
    }
};

/*************************
     Background Control
*************************/
PECTO.backgroundcontrol = function () {
    $("[data-bg-color]").each(function() {
        $(this).attr('style','background-color:'+ $(this).attr("data-bg-color") +'');
    });
     $("[data-bg-img]").each(function() {
        $(this).attr('style','background-image:url('+ $(this).attr("data-bg-img") +')');
    });
};

/*************************
     Text Rotator
*************************/
PECTO.textrotator = function () {
  if ($(".textrotator").exists()) {
       $(".textrotator").textrotator({
          animation: "flip",
          speed: 3000
        });
  }
}

/*************************
     Date Time Picker
*************************/
PECTO.datetimepickers = function () {
  if ($(".datetimepicker").exists()) {
       $('.datetimepicker').datetimepicker();
  }
}


/*************************
  Php Contact Form
*************************/
PECTO.Contactform = function (e) {
  $( "#submit-btn").on('click',function( event ) {
	$("#ajaxloader").show();
    $("#contactform").hide();
    $.ajax({
      url:'php/contact-form.php',
      data:$('#contactform').serialize(),
      type:'post',
	  dataType:'json',
      success:function(response){
        $("#ajaxloader").hide();
        $("#contactform").show();
        $("#contactform").find("input, textarea").val("");
        $("#formmessage").html(response.msg).show().delay(2000).fadeOut('slow');
      }
    });
    event.preventDefault(e);
  });
}

/****************************************************
     PECTO Window load and functions
****************************************************/
  //Window load functions
    $window.load(function () {
      PECTO.preloader(),
      PECTO.masonry(),
      PECTO.Isotope(),
		  PECTO.progressBar();
    });

 //Document ready functions
    $document.ready(function () {
        PECTO.counters(),
        PECTO.carousel(),
        PECTO.owlslidermobile(),
        PECTO.countdownTimer(),
        PECTO.mediaPopups(),
        PECTO.roundedSkill(),
        PECTO.goToTop(),
        PECTO.screenSizeControl(),
        PECTO.backgroundcontrol(),
        PECTO.textrotator(),
		PECTO.Contactform(),
        PECTO.datetimepickers();
    });

//Window resize functions
    $window.resize(function () {
      PECTO.screenSizeControl();
    });
})(jQuery);

