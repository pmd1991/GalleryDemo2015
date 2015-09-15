(function() {
    "use strict"

    angular.module("Demo").controller("StreamSingleController", ["$scope", "$routeParams", "ImageData",
        function($scope, $routeParams, ImageData) {
            $scope.image = ImageData.getAllMediumOrderDesc()[$routeParams.id];
        }]);
}());
