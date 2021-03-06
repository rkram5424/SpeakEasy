angular.module('starter.controllers', [])

.controller('BrowseCtrl', function($scope, $state, $timeout, $ionicFilterBar, $ionicPopup, Data, Text) {
  $scope.data = Data.all();
  $scope.remove = function(item) {
    Data.remove(item);
  };
    
  $scope.tapCategory = function() {
    
  };
  
  $scope.tapItem = function () {
    
  };
  
  $scope.newCategory = function () {
  
  };
  
  $scope.newItem = function () {
  
  };
  
  var viewText = function (text){
    Text.setText(text);
	$state.go('text');
  }
  
  $scope.quickText = function () {
	$scope.modal = {};
    var myPopup = $ionicPopup.show({
      template: '<input type="text" ng-model="modal.text">',
      title: 'Text to show',
      scope: $scope,
      buttons: [
        { text: 'Cancel' },
        {
          text: '<b>Show</b>',
          type: 'button-positive',
          onTap: function(e) {
            if (!$scope.modal.text) {
              //don't allow the user to close unless he enters wifi password
              e.preventDefault();
            } else {
              viewText($scope.modal.text);
            }
          }
        }
      ]
  });

  myPopup.then(function(res) {
    console.log('Tapped!', res);
  });

  };
    
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

.controller('FavoritesCtrl', function($scope) {

})

.controller('SettingsCtrl', function($scope) {

})

.controller('TextCtrl', function($scope, $stateParams, Text) {
  $scope.view = {};
  //$scope.view.text = Text.getText();
  $scope.view.text = [Text.getText(), 'Tab: Ryan Kramlich'];
})

.controller('HistoryCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
