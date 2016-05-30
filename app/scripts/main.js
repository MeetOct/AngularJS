requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: '../scripts',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        angular:'angular',
        app:'app',
        blogCtrl:'controllers/blogController',
        blogService:'service/blogService',
    },

    shim: {
        'angular': {
            exports: 'angular'
        },
        'app': {
           deps: ["angular"]
       },
       'config': {
           deps: ["blogCtrl"]
       },
       'config': {
           deps: ["app"]
       }
   },
    urlArgs: "bust=" + (new Date()).getTime() //防止读取缓存，调试用
});

// Start the main app logic.
require(["angular","app","config"],function(angular){
    angular.bootstrap(document,['BlogApp']);
});