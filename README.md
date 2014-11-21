angular-kindeditor
==================
angular-kindeditor is a prot of kindeditor

The goal is to use kindeditor whit angular easier

Demo
==================

no one

Installation
==================
include javascript files of kindeditor
<script src="kindeditor/kindeditor-all-min.js"></script>
Grab the latest release and javascript file:
<script src="angular-kindeditor.js"></script>
Then add angular-ueditor to your modules dependencies:
var app = angular.module("demoApp",['ngKeditor']);

usage
==================
Must bind NgModel

<div class="keditor" ng-model="content"></div>
Editor customization

<div class="keditor" ng-model="content" data-config="config"></div>
...
<script>
    $scope.config = {
        ...
    }
</script>
