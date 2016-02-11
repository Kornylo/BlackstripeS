jQuery(document).ready(function(){
	if( $('.cd-stretchy-nav').length > 0 ) {
		var stretchyNavs = $('.cd-stretchy-nav');
		
		stretchyNavs.each(function(){
			var stretchyNav = $(this),
				stretchyNavTrigger = stretchyNav.find('.cd-nav-trigger');
			
			stretchyNavTrigger.on('click', function(event){
				event.preventDefault();
				stretchyNav.toggleClass('nav-is-visible');
			});
		});

		$(document).on('click', function(event){
			( !$(event.target).is('.cd-nav-trigger') && !$(event.target).is('.cd-nav-trigger span') ) && stretchyNavs.removeClass('nav-is-visible');
		});
	}
});


/*------- home pages--------*/


    $(document).ready(function(){
        $('#pages').wankyPages({
            selector_prefix   : 'wanky_',                // Prefix to give all classes and ID's (apart from animations)
            default_page      : '1',                     // Default/ first page to load
            animation         : 'glueTopBottom'
        });
    
    });



/*--------------google map--------*/

 $(document).ready(function() {
        $(".various").fancybox({
          maxWidth  : 1100,
          maxHeight : 1100,
          fitToView : false,
          width   : '90%',
          height    : '90%',
          autoSize  : false,
          closeClick  : false,
          openEffect  : 'elastic',
          closeEffect : 'none'
        });
      });
/*--------------backgraund trianglify--------*/

  var $c = $(".c"),
      $wrap = $(".wrap"),
      w = window.innerWidth,
      h = window.innerHeight;

function random(min, max){
   return (Math.random() * (max - min)) + min;
}

$c.each(function(i){
   
   var x = random(0, w),
         y = random(0, h),
         z = random(-1000, -200),
         color = "hsla("+i * 1.8+", 50%, 50%, 1)",
         size = random(2, 30),
         c = $(this);
   
   c.css({
      background: color,
      height: size,
      width: size,
      borderRadius: "50%",
      boxShadow: "0 0 "+size+"px " + color
   })
   
   TweenMax.fromTo(c, 3, {
         opacity: 0,
         x: x,
         y: y,
         z: z
      }, {
         opacity: 1,
         z: 500,
         repeat: -1,
         delay: i * -.015
   });
   
});

function touches(e){
   var x = e.touches ? e.touches[0].clientX : e.clientX, 
         y = e.touches ? e.touches[0].clientY : e.clientY;
   
   TweenMax.to($wrap, 1, {
      webkitPerspectiveOrigin: x + "px " + y +"px",
      perspectiveOrigin: x + "px " + y +"px"
   });
   
}

window.addEventListener("mousemove", touches);
window.addEventListener("touchstart", touches);
window.addEventListener("touchmove", touches);