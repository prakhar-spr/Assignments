function setMainImg(imgSrc, imgCap) {
  let mainImg = document.querySelector(".main_image img");
  mainImg.setAttribute("src", imgSrc); // initializing the main image to the first image of ImgInfo array.
  document.getElementById("mainFigCap").textContent = imgCap;
}

setMainImg(imgInfo[0].previewImage, imgInfo[0].title);

let division = document.querySelector(".sideBar"); // select the divison which will contain all the sideBar images and their captions
renderThumbnail(imgInfo, division);

let iter = 0; // iterator which Represent  the current selected element. iter varries from 0 to 4 representing all the 5 images in sidebar

sideBar = document.querySelectorAll(".sideBar img"); // List of all the image nodes of sidebar
sideBarDiv = document.querySelectorAll(".sideBar div"); // List of all the division tags of sidebar which house images and paragraphs
sideBarDiv[0].classList.add("blue");

let titleNode = document.querySelectorAll(".sideBar p");
clipper(titleNode, imgInfo);
window.addEventListener("resize", clipper(titleNode, imgInfo)); // calling this function whenever resizing.
