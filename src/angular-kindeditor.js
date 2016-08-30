/**
 * @license AngularJS v1.2.9
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 * Created by Zed on 19-11-2014.
 */
(function (window, angular) {
    'use strict';

    angular
        .module('ngKeditor', [])
        .directive('keditor', function ($rootScope) {

            var linkFn = function (scope, elm, attr, ctrl) {

                if (typeof window.KindEditor === 'undefined') {
                    console.error('Please import the local resources of kindeditor!');
                    return;
                }

                var _config = {
                    width: '100%',
                    autoHeightMode: false,
                    afterCreate: function () {
                        this.loadPlugin('autoheight');
                    }
                };

                var editorId = elm[0],
                    editorConfig = angular.extend(_config,scope.config);

                editorConfig.afterChange = function () {
                    var that = this;
                    scope.$apply(function () {
                        ctrl.$setViewValue(that.html());
                    })
                    scope.$digest()
                };

                if (window.KindEditor) {
                    window.KindEditor.ready(function (k) {
                        k.create(editorId, editorConfig);
                    })
                }
                // 验证合法性
                var regObj = scope.pattern ? new RegExp(scope.pattern) : false;
                ctrl.$parsers.push(function (viewValue) {
                    if (regObj) {

                        regObj.test(viewValue) ? ctrl.$setValidity('nk',true) :  ctrl.$setValidity('nk',false);

                        return viewValue;
                    }

                });
            };

            return {
                restrict:'AC',
                require: 'ngModel',
                scope: {
                    config: '=',
                    pattern:'='
                },
                link: linkFn
            };
        });
})(window, window.angular);