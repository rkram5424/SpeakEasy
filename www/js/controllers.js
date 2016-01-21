angular.module('starter.controllers', [])

.controller('BrowseCtrl', function($scope, $ionicFilterBar) {
    var vm = this,
        items = [],
        filterBarInstance;

    for (var i = 1; i <= 1000; i++) {
        

        var item = {
            description: 'Description for item ' + i,
            date: 'test'
        };
        items.push(item);
    }

    vm.items = items;

    vm.showFilterBar = function () {
      filterBarInstance = $ionicFilterBar.show({
        items: vm.items,
        update: function (filteredItems) {
          vm.items = filteredItems;
        },
        filterProperties: 'description'
      });
    };

    return vm;
})

.controller('FavoritesCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('HistoryCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
