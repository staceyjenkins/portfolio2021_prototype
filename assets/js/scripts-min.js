$(document).ready((function(){$.instagramFeed({username:"froginajar",container:"#instagram_feed",display_profile:!1,display_biography:!1,display_igtv:!1,items:9,styling:!1}),$(".relatedposts .list_of_posts").is(":empty")&&console.log("hiderelatedposts")})),$(".mainarea").waypoint((function(s){setTimeout((function(){$(".siteheader").toggleClass("is_sticky","down"==s)}),100)})),disqusLoader(".disqus",$options);