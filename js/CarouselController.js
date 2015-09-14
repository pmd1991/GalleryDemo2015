(function () {
    "use strict";

    // CarouselController name is used by bootstrap
    angular.module('Demo').controller('MyCarouselController', ['$scope', '$routeParams', 'ImageData',
        function ($scope, $routeParams, ImageData) {
            $scope.noWrapSlides = false;
            $scope.slides = [];

            var names = ImageData.getMainPhotos($routeParams.id);
            var offsetCount = Number($routeParams.photoId);

            for (var i = 0; i < names.length; i++) {
                $scope.slides.push({
                    image: names[offsetCount]
                });
                offsetCount = (offsetCount + 1) % names.length;
            }
        }]);
}());