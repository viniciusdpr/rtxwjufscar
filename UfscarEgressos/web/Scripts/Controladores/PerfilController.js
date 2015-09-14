App.controller('PerfilController', ["$scope", "$modal", function ($scope, $modal) {
        $scope.index = 1;
         
        $scope.ativa = function (index) {
            return $scope.index == index;
        };

        $scope.abrir = function (index) {
            $scope.index = index;
        };


        $scope.items = ['item1'];   
        $scope.abrirModal = function (size) {

            var modalInstance = $modal.open({
                templateUrl: '/myModalContent.html',
                controller: 'ModalController',
                size: size,
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            });

        };



    }]);