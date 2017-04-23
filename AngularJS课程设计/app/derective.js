// Ìí¼ÓÖ¸Áî
angular.module('routeJs',['ngRoute'])
.controller('mainctrl', function ($scope){
        $scope.show=false;
    });
.directive('showmore', function (){
    return {
        restrict: 'E',
        template:'<div class="{{show?\'more2\':\'more\'}}">' +
            '<a href="javascript:;" ng-click="show=!show"><span class="glyphicon glyphicon-cog">设置</span></a>' +
            '<span ng-transclude></span></div>',
        transclude: true
    };
});