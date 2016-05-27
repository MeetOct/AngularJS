requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: '../Libs',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        angular:'angular',
        mailModel: 'Models/mailModel',
        mainController: 'mainController',
        appController: 'Controllers/appController',
        userController: 'Controllers/userController',
        provider: 'Service/provider',
        service:'Service/service',
        factory:'Service/factory',
        myApp:'app',
        route: "route"
    },

    shim: {
        'angular': {
            exports: 'angular'
        },
        'myApp': {
             deps: ["angular"]
        },
        'userController': {
             deps: ["mailModel"]
        }
    },
    urlArgs: "bust=" + (new Date()).getTime() //防止读取缓存，调试用
});

// Start the main app logic.
require(["angular","myApp","route"],function(angular){
    angular.bootstrap(document,['Testapp']);
});