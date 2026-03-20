// find our elements
const stageContainer = document.getElementById("stage-container");
const circleButton = document.getElementById("circle-button");
const changeAqua = document.getElementById("change-aqua");
const changeBlue = document.getElementById("change-blue");
const changePink = document.getElementById("change-pink");

// find slider
const colourSlider = document.getElementById("colour-slider");

// find stage width
let stageContainerWidth = stageContainer.offsetWidth;
// console.log(stageContainerWidth);
// Here, you can see the width of the page on console

// find stage height
let stageContainerHeight = stageContainer.offsetHeight;
// console.log(stageContainerHeight);

// set default circle colour
let circleColour = "#44A194";

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
changeAqua.addEventListener("click", changeColourRadio);
changeBlue.addEventListener("click", changeColourRadio);
changePink.addEventListener("click", changeColourRadio);

// NEW FUNCTION (mapping exercise)
// this function takes the slider value (0–360) and maps it to a colour
// I used HSL because the hue value directly corresponds to colours on a colour wheel
// this makes the interaction intuitive, as sliding changes colour smoothly

function updateColourFromSlider(event) {
  // get slider value
  let hueValue = event.target.value;

  // map number to HSL colour
  let newColour = `hsl(${hueValue}, 60%, 60%)`;

  // set circle colour
  circleColour = newColour;
}

// add event listener for slider
colourSlider.addEventListener("input", updateColourFromSlider);
