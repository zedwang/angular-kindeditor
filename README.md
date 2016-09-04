#angular-kindeditor
==================

angular-kindeditor是整合kindeditor的富文本编辑器插件，我们在项目中可以随处使用，非常方便


修复日志:

1，解决高版本不兼容问题
2，解决初始化内容不显示问题

#Demo
==================

[http://zedwang.github.io/angular-kindeditor](http://zedwang.github.io/angular-kindeditor)

[demo](http://www.w3cscript.com/Angular/2014-11-26/14.html)
##Install
```js
$ bower install ngKeditor
```
构建
===
第一步:
```javascript
    ~ npm install
```
第二步:
```javascript
    ~ grunt
```
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
因为我们的插件是继承ngmodel的，所以我们必须要绑定model，然后写上我们默认命名的指令

```javascript
<div keditor ng-model="content"></div>
```
如果要自定义配置，按照下面的格式做就OK了

```javascript
<div keditor ng-model="content" data-config="config"></div>

<script>
    $scope.config = {
        width:'100px'
    }

</script>
```

```javascript
<div keditor ng-model="content" data-pattern="reg"></div>

<script>
    $scope.reg = /\d+/g;
    // input 123/hello
    // output true/false;
</script>
```
