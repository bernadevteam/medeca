﻿'use strict';



angular.module('medecaApp', ['ngOrderObjectBy', 'checklist-model', 'ngMaterial', 'angular.morris-chart', 'mwl.calendar', 'ui.bootstrap', 'angularUtils.directives.dirPagination'])
    .directive('ngUnique', ['$http', function ($http) {
        return {
            require: 'ngModel',
            link: function (scope, elem, attrs, ctrl) {
                elem.on('blur', function (evt) {
                    ctrl.$setValidity('unique', true);
                    scope.uniquemsg = '';
                    var thisVal = elem.val();

                    if (ctrl.$$parentForm[elem.attr('name')].$dirty && ctrl.$$parentForm[elem.attr('name')].$valid)
                    scope.$apply(function () {
                        $http({ 
                            method: 'GET', 
                            url: attrs.ngUnique + '?field=' + thisVal + '&id=' + (attrs.ngModid || 0)
                        }).success(function(data, status, headers, config) {
                            ctrl.$setValidity('unique', data.Existe == 0);
                            scope.uniquemsg = data.Nombre;
                        });
                    });
                })
                }
        }}
        ])
    .directive('loading', ['$http', function ($http) {
    return {
        restrict: 'A',
        link: function (scope, elm, attrs) {
            scope.isLoading = function () {
                return $http.pendingRequests.length > 0;
            };

            scope.$watch(scope.isLoading, function (v) {
                if (v) {
                    elm.show();
                } else {
                    elm.hide();
                }
            });
        }
    };

    }])
.run(function ($rootScope) {
    /*
        Receive emitted message and broadcast it.
        Event names must be distinct or browser will blow up!
    */
    $rootScope.$on('cambiocita', function (event, args) {
        $rootScope.$broadcast('manejarcambiocita', args);
    });
});;
