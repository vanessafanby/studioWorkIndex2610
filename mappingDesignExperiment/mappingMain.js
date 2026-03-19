// find our elements
const stageContainer = document.getElementById("stage-container");
const circleButton = document.getElementById("circle-button");
const changeRed = document.getElementById("change-red");
const changeCornflower = document.getElementById("change-cornflower");
const changeGreenYellow = document.getElementById("change-greenyellow");

// find stage width
let stageContainerWidth = stageContainer.offsetWidth;
// console.log(stageContainerWidth);
// Here, you can see the width of the page on console

// find stage height
let stageContainerHeight = stageContainer.offsetHeight;
// console.log(stageContainerHeight);
// set default circle colour
let circleColour = "red";

// create the konva stage
const stage = new Konva.Stage({
  container: "konva-stage",
  width: stageContainerWidth,
  height: stageContainerHeight,
});

// create our layer
const firstLayer = new Konva.Layer();

// add the layer to our stage
stage.add(firstLayer);

// add interaction to button
function drawNewCircle() {
  const circle = new Konva.Circle({
    x: stage.width() * Math.random(),
    y: stage.height() / 2,
    radius: 50 * Math.random(),
    fill: circleColour,
  });

  // add the circle to our first layer
  firstLayer.add(circle);
}

circleButton.addEventListener("click", drawNewCircle);

// change circle colour
// I chose radio buttons because they allow for a exclusive selection, making user choice limited but certain...

function changeColourRadio(clickEvent) {
  // find the value of whichever of the radio buttons was clicked
  let newColour = clickEvent.target.value;
  // set the new circle colour to that value
  circleColour = newColour;
}

// add eventListeners
changeRed.addEventListener("click", changeColourRadio);
changeCornflower.addEventListener("click", changeColourRadio);
changeGreenYellow.addEventListener("click", changeColourRadio);
