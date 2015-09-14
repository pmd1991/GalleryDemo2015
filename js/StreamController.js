(function () {
    "use strict";

    angular.module("Demo")
        .controller("StreamController", ["$scope", "ImageData",
            function($scope, ImageData) {
                $scope.imageArray = [];

                var stream = ImageData.getStream(0, 12);

                for (var i = 0; i < stream.length; i++) {
                    $scope.imageArray.push({
                        src: stream[i]
                    });
                }
            }]);
}());