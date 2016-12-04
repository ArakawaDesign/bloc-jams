var forEach = function (array, callback) {
    for (var i = 0; i < array.length; i++) {
        callback(array, i);
    }
}
function myCallback (array, i) {
    array[i].style.opacity = 1;
    array[i].style.transform = "scale(1) translateY(0)"
    array[i].style.msTransform = "scaleX(1) translateY(0)";
    array[i].style.WebkitTransform = "scaleX(1) translateY(0)";
}