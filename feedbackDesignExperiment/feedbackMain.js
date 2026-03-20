// find elements to use
const introDialog = document.getElementById("intro-dialog");
const dialogCloseButton = document.getElementById("dialog-close-button");
const playButton = document.getElementById("play-button");

// intro dialog setup
introDialog.showModal();

dialogCloseButton.addEventListener("click", closeDialog);

function closeDialog() {
  introDialog.close();
  Tone.start();
}

// tone synth init
const synth = new Tone.Synth().toDestination();

// play sound with tone
function playNote() {
  synth.triggerAttackRelease("F3", "8n");
}

// playButton.addEventListener("click", playNote);

function startNote() {
  synth.triggerAttack("F3");
  // Here, i thought the original C5 would be too sharp, therefore I adjusted to a more lower one.
  // In the future, I might consider to use this Tone,js as my music funtion, where users can use a tool and play sound.
  // In this class-experiment, I have learnt how to use the basics of loading sound and played the sound with just a click.
  document.body.style.backgroundColor = "#E36A6A";
}

function endNote() {
  synth.triggerRelease();
  document.body.style.backgroundColor = "#FFF2D0";
}

playButton.addEventListener("mousedown", startNote);
playButton.addEventListener("mouseup", endNote);
