var app=angular.module('api-docs',[])

app.controller('docsCtrl',function($scope,$http){
    $http.get('/public/data.json')
    .then((res)=>{
        $scope.data=res.data
    })
})