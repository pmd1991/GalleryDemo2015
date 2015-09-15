(function () {
    "use strict";

    angular.module("Demo").
        controller("headerController", ["$scope", 'breadcrumbs', 'ImageData',
            function ($scope, breadcrumbs, ImageData) {
                $scope.breadcrumbs = breadcrumbs;

                $scope.resetStream = function() {
                    ImageData.setSingleImageIndex(null);
                };
            }]);
}());
