function showText(id, delay) {
  setTimeout( function () { document.getElementById(id).style.opacity = 1; }, delay * 1000)
}

function hideText(id, delay) {
  setTimeout( function () { document.getElementById(id).style.opacity = 0; }, delay * 1000)
}

showText("intro1", 1)
showText("intro2", 3)
showText("intro3", 5)
showText("button", 7)
showText("intro4", 9)
showText("intro5", 11)

function startGame() {
  window.location.href = "game_page.html";
}
