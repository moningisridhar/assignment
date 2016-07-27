'use strict';

/**
 * @ngdoc function
 * @name machineAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the machineAppApp
 */
angular.module('machineAppApp')
    .controller('AboutCtrl', function (DataHouse) {
        var self = this;

        function successHandle(response) {
            console.log(response);
            self.response = response;
        }

        function errorHandle(response) {
            console.error(response);
        }
        DataHouse.getData().then(successHandle, errorHandle);
    });