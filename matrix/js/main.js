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
