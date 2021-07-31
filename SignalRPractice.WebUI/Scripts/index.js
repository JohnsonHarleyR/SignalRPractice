// functions

// SignalR
function sendSignalRData() {
    console.log('sendSignalRData()');
    connection.send(shapeClasses);
    //console.log("Opening SignalR connection...");
    //var connection = $.connection("/SignalR/echo");
    //connection.start()
    //    .done(function () {
    //        if (shapeClasses.length > 0) {
    //            connection.send(shapeClasses);
    //        }
    //    })
    //    .fail(function () {
    //        console.log("Error connecting to realtime service.");
    //    });
}

function receiveSignalRData(data) {
    console.log("receiveSignalRData(data)");

    // try to turn it into shape objects - if it doesn't work, just display the message

    try {
        // parse the data
        var newShapeClasses = data;
        /*var newShapeClasses = JSON.parse(data);*/
        // loop through and update the shapeClasses - as well as the corresponding elements
        for (let i = 0; i < newShapeClasses.length; i++) {
            let newShapeClass = newShapeClasses[i];
            let id = newShapeClass.IdName;
            let element = document.getElementById(id);;
            let shapeClass = getShapeClass(element);
            // update shapeClass properties
            shapeClass.Width = newShapeClass.Width;
            shapeClass.Height = newShapeClass.Height;
            shapeClass.Background = newShapeClass.Background;
            shapeClass.Border = newShapeClass.Border;
            shapeClass.BorderRadius = newShapeClass.BorderRadius;
            shapeClass.BorderLeft = newShapeClass.BorderLeft;
            shapeClass.BorderRight = newShapeClass.BorderRight;
            shapeClass.BorderTop = newShapeClass.BorderTop;
            shapeClass.BorderBottom = newShapeClass.BorderBottom;
            shapeClass.Transform = newShapeClass.Transform;
            shapeClass.TransformOrigin = newShapeClass.TransformOrigin;
            shapeClass.Content = newShapeClass.Content;
            shapeClass.ShapeType = newShapeClass.ShapeType;
            //// now update the element
            updateElement(shapeClass);
        }
    } catch (Exception) {
        console.log(data);
    }

    // update the elements
    updateAllElements();

}

function updateAllElements() {
    for (let i = 0; i < shapeClasses.length; i++) {
        updateElement(shapeClasses[i]);
    }
}

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

    // change color of element
    element.style.background = colors[colorIndex];

    // perform finishing tasks for any page change
    completePageChange(element);

}

// call this function after updating any of the shapes on the page
function completePageChange(element) {
    console.log("completePageChange(element)");
    // update the corresponding class
    updateShapeClass(element.id);
    // send signalR data
    sendSignalRData();
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

}

function getShapeClass(element) {
    console.log("getShapeClass(element)");
    let idName = element.id;
    for (let i = 0; i < shapeClasses.length; i++) {
        if (idName == shapeClasses[i].IdName) {
            return shapeClasses[i];
        }
    }
    return null;
}

function updateShapeClass(shapeId) {
    // TODO consider also updating null elements - just in case
    console.log("Updating shape class: " + shapeId);
    let shape = document.getElementById(shapeId);
    let shapeClass = getShapeClass(shape);

    if (shapeClass != null) {
        // loop through object properties and set accordingly - if one is null, do not set anything
        for (const [key, value] of Object.entries(shapeClass)) {
            let shapeValue = null;
            if (value != null) {
                switch (key) {
                    case "Width":
                        shapeValue = shape.style.width;
                        if (shapeValue != shapeClass.Width) {
                            shapeClass.Width = shapeValue;
                        }
                        break;
                    case "Height":
                        shapeValue = shape.style.height;
                        if (shapeValue != shapeClass.Height) {
                            shapeClass.Height = shapeValue;
                        }
                        break;
                    case "Background":
                        shapeValue = shape.style.background;
                        if (shapeValue != shapeClass.Background) {
                            shapeClass.Background = shapeValue;
                        }
                        break;
                    case "Border":
                        shapeValue = shape.style.border;
                        if (shapeValue != shapeClass.Border) {
                            shapeClass.Border = shapeValue;
                        }
                        break;
                    case "BorderRadius":
                        shapeValue = shape.style.borderRadius;
                        if (shapeValue != shapeClass.BorderRadius) {
                            shapeClass.BorderRadius = shapeValue;
                        }
                        break;
                    case "BorderLeft":
                        shapeValue = shape.style.borderLeft;
                        if (shapeValue != shapeClass.BorderLeft) {
                            shapeClass.BorderLeft = shapeValue;
                        }
                        break;
                    case "BorderRight":
                        shapeValue = shape.style.borderRight;
                        if (shapeValue != shapeClass.BorderRight) {
                            shapeClass.BorderRight = shapeValue;
                        }
                        break;
                    case "BorderTop":
                        shapeValue = shape.style.borderTop;
                        if (shapeValue != shapeClass.BorderTop) {
                            shapeClass.borderTop = shapeValue;
                        }
                        break;
                    case "BorderBottom":
                        shapeValue = shape.style.borderBottom;
                        if (shapeValue != shapeClass.BorderBottom) {
                            shapeClass.BorderBottom = shapeValue;
                        }
                        break;
                    case "Transform":
                        shapeValue = shape.style.transform;
                        if (shapeValue != shapeClass.Transform) {
                            shapeClass.Transform = shapeValue;
                        }
                        break;
                    case "TransformOrigin":
                        shapeValue = shape.style.transformOrigin;
                        if (shapeValue != shapeClass.TransformOrigin) {
                            shapeClass.Width = shapeValue;
                        }
                        break;
                    case "Content":
                        shapeValue = shape.style.content;
                        if (shapeValue != shapeClass.Content) {
                            shapeClass.Content = shapeValue;
                        }
                        break;
                }
            }
    }
    
    }
}

function updateElement(shapeClass) {
    console.log("Updating shape element: " + shapeClass.IdName);
    let shape = document.getElementById(shapeClass.IdName);

    // loop through object properties and set accordingly - if one is null, do not set anything
    for (const [key, value] of Object.entries(shapeClass)) {
        if (value != null) {
            switch (key) {
                case "Width":
                    shape.style.width = value;
                    break;
                case "Height":
                    shape.style.height = value;
                    break;
                case "Background":
                    shape.style.background = value;
                    break;
                case "Border":
                    shape.style.border = value;
                    break;
                case "BorderRadius":
                    shape.style.borderRadius = value;
                    break;
                case "BorderLeft":
                    shape.style.borderLeft = value;
                    break;
                case "BorderRight":
                    shape.style.borderRight = value;
                    break;
                case "BorderTop":
                    shape.style.borderTop = value;
                    break;
                case "BorderBottom":
                    shape.style.borderBottom = value;
                    break;
                case "Transform":
                    shape.style.transform = value;
                    break;
                case "TransformOrigin":
                    shape.style.transformOrigin = value;
                    break;
                case "Content":
                    shape.style.content = value;
                    break;
            }
        }
    }
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