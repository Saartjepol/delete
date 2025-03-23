
let shapes = ["50%", "0%", "25%"];
let shapeIndex = 0;

let eyeColors = ["white", "yellow", "red", "blue"];
let eyeIndex = 0;

let legStyles = ["30px", "40px", "50px"];
let legIndex = 0;

let armStyles = ["10px", "20px", "30px"];
let armIndex = 0;

function changeShape() {
    shapeIndex = (shapeIndex + 1) % shapes.length;
    document.getElementById("monster").style.borderRadius = shapes[shapeIndex];
}

function changeEyes() {
    eyeIndex = (eyeIndex + 1) % eyeColors.length;
    document.getElementById("eye").style.backgroundColor = eyeColors[eyeIndex];
}

function changeLegs() {
    legIndex = (legIndex + 1) % legStyles.length;
    document.getElementById("legL").style.height = legStyles[legIndex];
    document.getElementById("legR").style.height = legStyles[legIndex];
}

function changeArms() {
    armIndex = (armIndex + 1) % armStyles.length;
    document.getElementById("armL").style.height = armStyles[armIndex];
    document.getElementById("armR").style.height = armStyles[armIndex];
}
