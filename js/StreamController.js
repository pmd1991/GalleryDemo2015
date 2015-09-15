(function () {
    "use strict";

    angular.module("Demo")
        .controller("StreamController", ["$scope", "ImageData",
            function($scope, ImageData) {
                $scope.currentPage = 1;
                $scope.perPage = 10;
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

                $scope.update = function () {
                    var begin = (($scope.currentPage - 1) * $scope.perPage),
                        end = Math.min(begin + $scope.perPage, $scope.files.length);

                    updateImages(begin, end);
                };

                updateImages(0, $scope.perPage);
            }]);
}());