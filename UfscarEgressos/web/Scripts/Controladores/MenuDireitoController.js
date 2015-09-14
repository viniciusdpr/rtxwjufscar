App.controller('MenuDireitoController', ["$scope", function ($scope) {
        $scope.selected = 0;
        $scope.select = function (index) {
            $scope.selected = index;
        };
    }]);