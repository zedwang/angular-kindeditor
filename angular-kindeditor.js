/**
 * @license AngularJS v1.2.9
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 * Created by Zed on 19-11-2014.
 */
(function(window, angular, undefined) {'use strict';

    /**
     * @ngdoc overview
     * @name ngKeditor
     * @description
     */


    angular.module('ngKeditor', ['ng'])
        .directive('keditor',function(){
            return {
                require : 'ngModel',
                scope : {
                    config : '=config'
                },
                link : function (scope,elm,attr,ctrl) {
                    if(typeof KindEditor === "undefined") {
                        console.error('Please import the local resources of kindeditor!(无法获取到kindeditor资源包！)');
                        return;
                    }
                    var _config = {
                        uploadJson: '/hummingbird/attachment/uploadimg',
                        autoHeightMode: false,
                        afterCreate: function () {
                            this.loadPlugin('autoheight');
                        },
                        width: '100%'
                    };
                    var editorId = elm[0];
                    var editorConfig = scope.config ? scope.config : _config;
                    editorConfig.afterChange = function () {
                        if (!scope.$$phase) {
                            ctrl.$setViewValue(this.html());
                            scope.$apply();
                        }
                    }
                    KindEditor.ready(function(K){
                         K.create(editorId,editorConfig);
                    });
                    ctrl.$parsers.push(function (viewValue) {
                        ctrl.$setValidity('fbcpssb', viewValue);
                        return viewValue;
                    });
                }
            }
        });
})(window, window.angular);

