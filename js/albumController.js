(function () {
    "use strict";

    angular.module('Demo').controller("AlbumController", ["$scope", "ImageData",
        function ($scope, ImageData, breadcrumbs) {

            var names = ImageData.getAlbumsWithLocation();

            $scope.albums = [];
            for (var i = 0; i < names.length; i++) {
                $scope.albums.push({
                    timestamp: 0,
                    label: names[i].name,
                    link: "/gallery/" + i
                });
            }
            initializeMap(names);
        }]);
}());

