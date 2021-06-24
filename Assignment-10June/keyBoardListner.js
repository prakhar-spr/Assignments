// event listner created for capturing arrow movement on keyboard
window.addEventListener("keydown", (e) => {
  // e is the event
  if (e.code == "ArrowDown" || e.code == "ArrowRight") {
    if (iter < 4) {
      document.getElementById("main").src = sideBar[iter + 1].src; //add src of next image to the main image src
      sideBarDiv[iter + 1].classList.add("blue"); // add background color blue to the next division in sidebar
      sideBarDiv[iter].classList.remove("blue"); // remove blue bg color from the current divison
      document.getElementById("mainFigCap").innerHTML = imgInfo[iter + 1].title;
      iter++;
    }
  }
  if (e.code == "ArrowUp" || e.code == "ArrowLeft") {
    if (iter >= 1) {
      document.getElementById("main").src = sideBar[iter - 1].src; //add src of previous image to the main image src
      sideBarDiv[iter - 1].classList.add("blue"); // add background color blue to the previous division in sidebar
      sideBarDiv[iter].classList.remove("blue"); // remove blue bg color from the current divison
      document.getElementById("mainFigCap").innerHTML = imgInfo[iter - 1].title;
      iter--;
    }
  }
});
