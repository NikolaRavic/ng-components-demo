(function(){

    'use strict';

    var module = angular.module('psMovies');

    var movieDetailsController = function () {
        var self = this;

        self.$routerOnActivate = function (next) {
            self.id = next.params.id;
        };
    };

    module.component('movieDetails',{
        templateUrl: 'components/movie-details.component.html',
        // $canActivate: function ($timeout) {
        //     return $timeout(function () {
        //         return true;
        //     },2000);
        // },
        controller: movieDetailsController,
    });


})();