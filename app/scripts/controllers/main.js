'use strict';

/**
 * @ngdoc function
 * @name machineAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the machineAppApp
 */
angular.module('machineAppApp')
    .controller('MainCtrl', function (DataHouse, $uibModal, $scope) {
        var self = this;

        function successHandle(response) {
            console.log(response);
            self.response = response;
            self.setSubTotal();
        }

        function errorHandle(response) {
            console.error(response);
        }
        DataHouse.getData().then(successHandle, errorHandle);

    });