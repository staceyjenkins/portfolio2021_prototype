function loadInstagram(){
    require(['instagramfeed'], function(){
        
        $.instagramFeed({
	    'username': 'froginajar',
	    'container': "#instagram_feed",
	    'display_profile': false,
	    'display_biography': false,
	    'display_igtv': false,
        'items': 9,
        'styling': false,
	  });
    
    });
};
            
function loadWaypoints(){
       require(['waypoints'], function(n){ 
           $('.mainarea').waypoint(function(direction){
     setTimeout(function(){
      $('.siteheader').toggleClass('is_sticky', direction=='down');
}, 100);
});   
       });
    };
    
    function loadDisqus(){
        require(['disqusloader'], function(){ 
        disqusLoader( '.disqus', $options );
        });
    };

require(["jquery", "fontawesome"], function() {
    $(document).ready(function() {
        $siteFunctions = [loadInstagram(), loadWaypoints(), loadDisqus()];
        for (var n = 0; n < $siteFunctions.length; n++) setTimeout($siteFunctions[n], 4e3);
        console.log("Javascript loaded")
    });
});



