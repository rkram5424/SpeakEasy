angular.module('starter.services', [])

.factory('Data', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var data = [
    {
      name: 'first task 1',
      tree: [
        {
          name: 'first task 1.1'
        }
      ]
    },
    {
      name: 'first task 2'
    }
  ];

  return {
    all: function() {
      return data;
    },
    remove: function(item) {
      data.splice(data.indexOf(item), 1);
    },
    get: function(itemId) {
      for (var i = 0; i < data.length; i++) {
        if (data[i].id === parseInt(itemId)) {
          return data[i];
        }
      }
      return null;
    },
    set: function (position, type, text) {
    
    }
  };
})

.factory('Storage', function(){

})

.factory('Text', function(){
  var text = "";
  return {
    getText: function(){
	  return text;
    },
    setText: function(input){
	  text = input;
    }
  };
});
