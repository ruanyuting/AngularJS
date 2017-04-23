// Èë¿ÚÎÄ¼þ
angular.module("myapp",['routeJs','ngRoute'])
.controller("mainctrl",function($scope){
	$scope.show=false;
	$scope.listShow=false;

	$scope.userName="ryt";
	$scope.imgSrc="images/a3.jpg";
	$scope.fanNum=520;	
	$scope.list=[{name:'首页',class:'glyphicon glyphicon-home'},
	{name:'简介',class:'glyphicon glyphicon-file'},
	{name:'信息',class:'glyphicon glyphicon-envelope'},
	];
	$scope.person = [
	{id:0,name:'小王',job:'设计师，博客'},
	{id:2,name:'小李',job:'设计师，博客'},
	{id:9,name:'张琳',job:'作家，杂志编辑'},
	{id:4,name:'赵大城',job:'作家，杂志编辑'},
	]
	$scope.addFans=function()
	{
		$scope.fanNum=$scope.fanNum+1;
		document.getElementById("addFans").disabled=true;
		document.getElementById("addFans").value="已支持";
	}
})
.directive('showmore', function (){
    return {
       restrict: 'E',
       template:'<div">' +
       '<a href="javascript:;" ng-click="show=!show"><span class="glyphicon glyphicon-cog">操作</span></a>' +
       '<span ng-transclude></span></div>',
       transclude: true
    };
});