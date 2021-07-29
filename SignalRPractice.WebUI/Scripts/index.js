// functions

function changeColor(elementId) {
    console.log("click");
    let element = document.getElementById(elementId);
    let colorIndex = -1;

    // figure out which color the element has currently
    // then decide the next color
    for (let i = 0; i < colors.length; i++) {
        if (element.style.background === colors[i]) {
            colorIndex = i + 1;
            break;
        }
    }

    // HACK for some reason, it skips the for loop the first time it is clicked, so if colorIndex is still -1, set it to 1
    if (colorIndex < 0) {
        colorIndex = 1;
    } else if (colorIndex >= colors.length) { // if the index is out of range, set it back to 0.
        colorIndex = 0;
    } 

    // change the background color of the element
    element.style.background = colors[colorIndex];

}


function createShape(shapeClass) {
    console.log('Creating shape.');
    // create new div inside body with shapeClass idnamme
    bodyDiv.innerHTML += '<div class="shape" id="' + shapeClass.IdName + '" onclick="changeColor(\'' + shapeClass.IdName + '\')"></div>';

    // grab item and add to array of shapes
    let newShape = document.getElementById(shapeClass.IdName);
    shapes.push(newShape);

    // loop through object properties and set accordingly - if one is null, do not set anything
    for (const [key, value] of Object.entries(shapeClass)) {
        console.log('Setting value for: ' + key);
        if (value != null) {
            switch (key) {
                case "Width":
                    newShape.style.width = value;
                    break;
                case "Height":
                    newShape.style.height = value;
                    break;
                case "Background":
                    newShape.style.background = value;
                    break;
                case "Border":
                    newShape.style.border = value;
                    break;
                case "BorderRadius":
                    newShape.style.borderRadius = value;
                    break;
                case "BorderLeft":
                    newShape.style.borderLeft = value;
                    break;
                case "BorderRight":
                    newShape.style.borderRight = value;
                    break;
                case "BorderTop":
                    newShape.style.borderTop = value;
                    break;
                case "BorderBottom":
                    newShape.style.borderBottom = value;
                    break;
                case "Transform":
                    newShape.style.transform = value;
                    break;
                case "TransformOrigin":
                    newShape.style.transformOrigin = value;
                    break;
                case "Content":
                    newShape.style.content = value;
                    break;
            }
        }
    }

    // add event listener
/*    newShape.addEventListener("click", function () { changeColor(newShape.id) });*/

}


function addModelShapes() {
    console.log('adding shapes');
    for (let i = 0; i < shapeClasses.length; i++) {
        console.log('Shape #' + (i + 1));
        createShape(shapeClasses[i]);
    }
}


// variables
var colors = ['rgb(255, 216, 0)', 'rgb(51, 255, 249)', 'rgb(23, 51, 196)', 'rgb(255, 14, 211)', 'rgb(255, 100, 0)'];

var bodyDiv = document.getElementById('bodyDiv');

var circle1 = document.getElementById('circle1');

var shapes = new Array();


// event handlers
document.body.onload = addModelShapes;