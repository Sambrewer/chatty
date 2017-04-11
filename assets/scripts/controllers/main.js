'use strict';

angular.module('chattyApp')
  .controller('MainCtrl', function ( $scope, messageService ) {
    messageService.getMessages().then(function ( response ) {
      $scope.messages = response.data.messages;
    });

    $scope.addMessage = function ( message, user ) {
      console.log('testtststs');
      if (message && user) {
        messageService.addMessage(message, user).then(function ( response ) {
          $scope.messages = response.data.messages;
          $scope.user = response.data.user;
          console.log('ctrl', $scope.messages, $scope.user)
        });
      }
    };
    // messageService.getUser().then(function(response){
    //   $scope.user = response.data.user;
    //   console.log(response);
    // })
    // $scope.addUser = function (user) {
    //   if (user) {
    //     messageService.addUser(user).then(function(response) {
    //       $scope.user = response.data.username;
    //     })
    //   }
    // }


    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
