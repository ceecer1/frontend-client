

myApp.service('dashboardService', ['$http', '$q', function ($http, $q) {


    this.SearchComic = function (data) {
        var deferred = $q.defer();
        var searchComicServiceURL = serviceBase + "comics";
        $http.post(searchComicServiceURL, data, {
            headers: { 'Content-Type': 'application/json' }
        }).success(function (data, status, header) {
            deferred.resolve(data);
        })
        .error(function (err, status) {
            deferred.resolve(err);
        });
        return deferred.promise;
    }

}
]);