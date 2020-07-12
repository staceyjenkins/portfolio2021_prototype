$(document).ready(function(){
	  $.instagramFeed({
	    'username': 'froginajar',
	    'container': "#instagram_feed",
	    'display_profile': false,
	    'display_biography': false,
	    'display_igtv': false,
        'items': 9,
        'styling': false,
	  });
	

if ($('.relatedposts .list_of_posts').is(':empty')){
  console.log('hiderelatedposts');
}

});

$('.mainarea').waypoint(function(direction){
     setTimeout(function(){
      $('.siteheader').toggleClass('is_sticky', direction=='down');
}, 100);
});   

disqusLoader( '.disqus', $options );


