(function () {
    "use strict";

    angular.module('Demo').controller("ImageDataController", ["$scope", "ImageData", "$routeParams",
        function($scope, ImageData, $routeParams, BreadCrumbsService) {
            var names = ImageData.getThumbnails($routeParams.id);
            var albumLink = '#/gallery/'+$routeParams.id;

            $scope.imageArray = [];
            for (var i = 0; i < names.length; i++) {
                $scope.imageArray.push({
                    src : names[i],
                    link : albumLink + '/' + i
                });
            }
    }]);
}());
