myApp.controller('dashboardController', ['$scope', '$rootScope', '$location', 'dashboardService', function ($scope, $rootScope, $location, dashboardService) {

    var data = [57245, 57163, 62605, 61308, 60293];
    dashboardService.SearchComic(data).then(function (response) {
        $scope.comicList = response;
    });

}]);
