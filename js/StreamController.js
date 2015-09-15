(function () {
    "use strict";

    angular.module("Demo")
        .controller("StreamController", ["$scope", "ImageData",
            function($scope, ImageData) {
                console.log("creating controller");

                $scope.perPage = 10;

                if (ImageData.getSingleImageIndex()) {
                    $scope.currentPage = Math.floor(ImageData.getSingleImageIndex() / $scope.perPage) + 1;
                }
                else {
                    $scope.currentPage = 1;
                }

                $scope.files = ImageData.getAllMediumOrderDesc();

                var updateImages = function(begin, end) {
                    $scope.imageArray = [];
                    for (var i = begin; i < end; i++) {
                        $scope.imageArray.push({
                            src: $scope.files[i],
                            link: "/stream/single/" + i
                        });
                    }
                };

                var beginIndex = function() {
                    return (($scope.currentPage - 1) * $scope.perPage);
                };

                $scope.update = function () {
                    var begin = beginIndex(),
                        end = Math.min(begin + $scope.perPage, $scope.files.length);

                    updateImages(begin, end);
                };

                $scope.imageClick = function(index) {
                    ImageData.setSingleImageIndex(beginIndex() + index);
                };

                $scope.update();
            }]);
}());