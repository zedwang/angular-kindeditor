angular-kindeditor
==================
angular-kindeditor是整合kindeditor的富文本编辑器插件，我们在项目中可以随处使用，非常方便

Demo
==================

[http://zedwang.github.io/angular-kindeditor](http://zedwang.github.io/angular-kindeditor)
github的演示页面一直有问题，可以看下面的这个链接
[demo](http://www.w3cscript.com/Angular/2014-11-26/14.html)
准备
==================
先引入kindeditor的配置文件
```javascript
<script src="kindeditor/kindeditor-all-min.js"></script>
```
然后把angular-kindeditor插件引入进来:

```javascript
<script src="angular-kindeditor.js"></script>
```
还没完，在声明模块的地方把ngKeditor注入进去:
```javascript
var app = angular.module("demoApp",['ngKeditor']);
```
使用
==================
因为我们的插件是继承ngmodel的，所以我们必须要绑定model，然后写上我们以class命名的指令

```javascript
<div class="keditor" ng-model="content"></div>
```
如果要自定义配置，按照下面的格式做就OK了

```javascript
<div class="keditor" ng-model="content" data-config="config"></div>

<script>
    $scope.config = {
        ...
    }
</script>
```
结语：工程不大，但是很有用。之前一直用别人的，算是回馈了大家！有什么问题大家可以fork
