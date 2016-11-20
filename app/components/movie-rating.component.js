/**
 * Created by Nikola on 11/20/2016.
 */
(function(){
    'use strict';

    var module = angular.module('psMovies');

    function movieRatingController() {
        var self = this;

        self.$onInit = function () {
            self.entries = new Array(self.value);
        };
        
        self.$onChanges = function () {
            self.entries = new Array(self.value);
        }
    }
    module.component('movieRating', {
        templateUrl: 'components/movie-rating.component.html',
        bindings:{
            value: "<"
        },
        controller: movieRatingController,
        transclude: true,
        controllerAs: 'model'
    });
})();