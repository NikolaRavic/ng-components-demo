/**
 * Created by Nikola on 11/20/2016.
 */
(function () {
    'use strict';

  var psMovies = angular.module('psMovies',['ngComponentRouter']);

  psMovies.value('$routerRootComponent','movieApp');

  psMovies.component("appAbout",{
      template: "This is about page!"
  })
}());