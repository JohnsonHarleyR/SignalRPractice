// functions

function changeColor(element) {
    console.log('changing color');

    let colorIndex = -1;

    // figure out which color the element has currently
    // then decide the next color
    for (let i = 0; i < colors.length; i++) {
        console.log(element.style.backgroundColor);
        if (element.style.backgroundColor === colors[i]) {
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
    element.style.backgroundColor = colors[colorIndex];

    console.log(colorIndex);

}


// variables
var colors = ['rgb(255, 216, 0)', 'rgb(51, 255, 249)', 'rgb(23, 51, 196)', 'rgb(255, 14, 211)', 'rgb(255, 100, 0)'];
var circle1 = document.getElementById('circle1');


// event handlers
circle1.addEventListener("click", function () { changeColor(circle1) });