var character = document.getElementById("character");
var characterSheet = document.getElementById("characterSheet");
var block = document.getElementById("block");
var result = document.getElementById("result");
var score = document.getElementById("score");
var counter = 0;

function jump() {
  if (character.classList != "animate") {
    character.classList.add("animate");
  }
  setTimeout(function () {
    character.classList.remove("animate");
  }, 500);
}

var checkDead = setInterval(function () {
  var characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  var blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (blockLeft == 0) {
    counter = counter + 1;
    document.getElementById("score-count").innerHTML = counter;
  }

  if (blockLeft < 32 && blockLeft > 0 && characterTop >= 120) {
    block.style.animation = "none";
    block.style.display = "none";
    result.style.display = "flex";
    score.style.display = "none";
    document.getElementById("score-final").innerHTML = counter;
    characterSheet.style.animation = "none";
  }
}, 10);
