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
        userModel: 'Models/UserModel',
        userControllers: 'Controllers/userControllers',
        provider: 'Service/provider',
        service:'Service/service',
        factory:'Service/factory',
        myApp:'app'
    },

    shim: {
        'angular': {
            exports: 'angular'
        }
        ,
        'userControllers': {
             deps: ["myApp"]
        },
        'myApp': {
             deps: ["angular"]
        }
    },
});

// Start the main app logic.
require(["angular","myApp","userControllers"],function(angular,myApp,userControllers){
    angular.bootstrap(document,['TestAll']);
});