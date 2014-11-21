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

```javascript
<script src="kindeditor/kindeditor-all-min.js"></script>
```
Grab the latest release and javascript file:

```javascript
<script src="angular-kindeditor.js"></script>
```
Then add angular-ueditor to your modules dependencies:
```javascript
var app = angular.module("demoApp",['ngKeditor']);
```
usage
==================
Must bind NgModel

```javascript
<div class="keditor" ng-model="content"></div>
```
Editor customization

```javascript
<div class="keditor" ng-model="content" data-config="config"></div>

<script>
    $scope.config = {
        ...
    }
</script>
```
