angular.module('starter.services', [])

.factory('Data', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var data = [
	{
	  type: "category",
	  name: "Category_1",
	  text: "Category 1"
	},{
	  type: "category",
	  name: "Category_2",
	  text: "Category 2"
	},{
	  type: "category",
	  name: "Category_3",
	  text: "Category 3"
	},{
	  type: "category",
	  name: "Category_4",
	  text: "Category 4"
	},{
	  type: "item",
	  name: "Item_1",
	  text: "Item 1 text"
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
