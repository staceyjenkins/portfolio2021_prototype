requirejs.config({
    baseUrl:'assets/scripts',
    paths:{
        disqusloader:'lib/disqusloader-min',
        instagramfeed: 'lib/instagramfeed',
        jquery: '//code.jquery.com/jquery-3.5.1.min',
        fontawesome: '//use.fontawesome.com/releases/v5.0.6/js/all',
        waypoints:'lib/jquery.waypoints.min',
        app: 'app'
    }
});

requirejs(['app/functions']);


