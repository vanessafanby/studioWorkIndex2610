const introDialog = document.getElementById("intro-dialog");
const dialogCloseButton = document.getElementById("dialog-close-button");
const playButton = document.getElementById("play-button");

introDialog.showModal();

dialogCloseButton.addEventListener("click", closeDialog);

function closeDialog() {
  introDialog.close();
  Tone.start();
}

const synth = new Tone.Synth().toDestination();

function startNote() {
  synth.triggerAttack("C4");
  document.body.style.backgroundColor = "#E36A6A";
}

function endNote() {
  synth.triggerRelease();
  document.body.style.backgroundColor = "#FFF2D0";
}

playButton.addEventListener("mousedown", startNote);
playButton.addEventListener("mouseup", endNote);
playButton.addEventListener("mouseleave", endNote);
