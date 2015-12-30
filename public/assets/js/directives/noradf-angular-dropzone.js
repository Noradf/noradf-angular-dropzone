'use strict';

angular.module('noradf-angular-dropzone',[])
    .directive('dropzone', function () {
        return {
            restrict: 'A',
            scope: {
                options: '=dropzoneOptions'
            },
            link: function (scope, element, attrs) {
                new Dropzone(element[0], scope.options || {});
            }
        }
    });