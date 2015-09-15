(function () {
    "use strict";

    angular.module("Demo")
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'template/albums.html',
                    controller: 'AlbumController',
                    label:     "Ron's Albums"
                })
                .when('/gallery/:id', {
                    templateUrl: 'template/gallery.html',
                    controller: 'ImageDataController',
                    label: "Gallery"
                })
                .when('/gallery/:id/:photoId', {
                    templateUrl: 'template/carousel.html',
                    controller: 'MyCarouselController',
                    excludeBreadcrumb: true
                })
                .when('/about/', {
                    templateUrl: 'template/about.html',
                    controller: 'AboutController',
                    label: "About"
                })
                .when('/stream', {
                    templateUrl: 'template/stream.html',
                    controller: 'StreamController',
                    label: "Stream"
                })
                .when('/stream/single/:id', {
                    templateUrl: 'template/streamSingle.html',
                    controller: 'StreamSingleController',
                    label: " "
                })
                .otherwise({
                    templateUrl: 'template/about.html',
                    controller: 'AboutController',
                    label: "About"
                });
        }]);
}());