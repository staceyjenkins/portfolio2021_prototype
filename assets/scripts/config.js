requirejs.config({
    baseUrl:'http://www.staceyjenkins.co.uk/portfolio2021_prototype/assets/scripts',
    paths:{
        disqusloader:'lib/disqusloader-min',
        jquery: '//code.jquery.com/jquery-3.5.1.min',
        fontawesome: '//use.fontawesome.com/releases/v5.0.6/js/all',
        waypoints:'lib/jquery.waypoints.min',
        app: 'app'
    }
});

requirejs(['app/functions']);


