//creates array of elements with "point" class
var pointsArray = document.getElementsByClassName('point');

//style selling points
var revealPoint = function(point) {
    point.style.opacity = 1;
    point.style.transform = "scale(1) translateY(0)"
    point.style.msTransform = "scaleX(1) translateY(0)";
    point.style.WebkitTransform = "scaleX(1) translateY(0)";
};

//call forEach function to iterate through the three members of the pointsArray
var animatePoints = function(array) {
    forEach(array, revealPoint);
};

//controls events for window onload, 
window.onload = function() {
//if window is larger than 950px, animatePoints() runs
    if (window.innerHeight > 950) {
        animatePoints(pointsArray);
    }
    
    var sellingPoints = document.getElementsByClassName('selling-points')[0];
    var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;
    
//if window is smaller than 950px and user scrolls to selling points, animatePoints() runs
    window.addEventListener('scroll', function(event) {
        if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
            animatePoints(pointsArray);
        }
    });
}