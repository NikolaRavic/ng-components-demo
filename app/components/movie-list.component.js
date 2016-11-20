/**
 * Created by Nikola on 11/20/2016.
 */
(function () {
    'use strict';

    var module;
    module = angular.module('psMovies');

    function fetchMovies($http) {
        return $http.get("model/movies.json")
            .then(function (response) {
                return response.data;
            });
    }

    function movieListController($http) {

        var self = this;
        self.movies = [];

        self.$onInit = function () {
            fetchMovies($http).then(function (movies) {
                self.movies = movies;
            });
        };

        self.goTo = function (id) {
            self.$router.navigate(["Details", {id: id}]);
        };
        self.upRating = function (movie) {
            if (movie.rating < 5) {
                movie.rating += 1;
            }
        };

        self.downRating = function (movie) {
            if (movie.rating > 1) {
                movie.rating -= 1;
            }
        };

    }

    module.component('movieList', {
        templateUrl: "components/movie-list.component.html",
        controller: ['$http', movieListController],
        controllerAs: 'model',
        bindings: {
            "$router": "<"
        }
    });


}());
