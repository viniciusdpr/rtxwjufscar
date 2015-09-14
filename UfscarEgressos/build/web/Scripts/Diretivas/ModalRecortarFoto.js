App.controller('ModalRecortarFotoController', ['$scope', function ($scope) {
        $scope.myImage = '';
        $scope.myCroppedImage = '';

        var handleFileSelect = function (evt) {
            var file = evt.currentTarget.files[0];
            var reader = new FileReader();
            reader.onload = function (evt) {
                $scope.$apply(function ($scope) {
                    $scope.myImage = evt.target.result;
                });
            };
            reader.readAsDataURL(file);
        };
        angular.element(document.querySelector('#fileInput')).on('change', handleFileSelect);
    }])
App.directive('modalRecortarFoto', function () {
    return {
        templateUrl: '/UfscarEgressos/Views/Partials/modalRecortarFoto.html',
        restrict: 'E',
        controller: 'ModalRecortarFotoController',
        scope: {
        }
    };
});