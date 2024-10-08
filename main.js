const keys = document.querySelectorAll(".key");

//play notes
function playNote(event) {
  let audioKeyCode = getKeyCode(event);

  // types or pressed key
  const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`);

  // if key exists
  const isKeyExists = key;

  if (!isKeyExists) {
    alert(
      "This Key doesn`t work, try another, between (A,W,S,E,D,F,T,G,Y,H,U,J,K,O,L,P)"
    );
    return;
  }
  addPlayingClass(key);
  playAudio(audioKeyCode);
}

function addPlayingClass(key){
    key.classList.add('playing');
}

//function to get key code
function getKeyCode(event) {
  let keyCode;

  const isKeyboard = event.type === "keydown";
  if (isKeyboard) {
    keyCode = event.keyCode;
  } else {
    keyCode = event.target.dataset.key;
  }
  return keyCode;
}

function playAudio(audioKeyCode) {
  const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`);
  audio.currentTime = 0;
  audio.play();
}

function removePlayingClass(event){
    event.target.classList.remove("playing");
}

//with mouse
keys.forEach(function (key) {
    key.addEventListener("click", playNote);
    key.addEventListener("transitionend", removePlayingClass);
});

//with keyboard
window.addEventListener("keydown", playNote);
