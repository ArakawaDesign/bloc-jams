//iterates through pointsArray and calls revealPoint() to style each point
var forEach = function(array, callback) {
    for (var i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}