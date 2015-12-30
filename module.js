'use strict';

module.exports = function (assets) {
    assets.put(this, 'js', 'js/directives/noradf-angular-dropzone.js');
    assets.put(this, 'bower_js', 'dropzone/dist/min/dropzone.min.js');

    assets.put(this, 'bower_css', 'dropzone/dist/min/dropzone.min.css', 1000);
    assets.put(this, 'bower_css', 'dropzone/dist/min/basic.min.css', 1001);
};