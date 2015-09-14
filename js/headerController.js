(function () {
    "use strict";

    angular.module("Demo").
        controller("headerController", ["$scope", 'breadcrumbs',
            function ($scope, breadcrumbs) {
                $scope.breadcrumbs = breadcrumbs;
            }]);
}());
