'use strict';

angular.module('chattyApp')
  .service('messageService', function ( $http ) {

      this.getMessages = function () {
        return $http.get('/messages');
      }

      this.addMessage = function ( message, user) {
        console.log('service', user, message);
        return $http.post('/messages', { message: message, user: user });
      }
      // this.getUser = function () {
      //   console.log('hello');
      //   return $http.get('/user');
      // }
      // this.addUser = function (user) {
      //   return $http.post('/messages', {user: user})
      // }

  });
