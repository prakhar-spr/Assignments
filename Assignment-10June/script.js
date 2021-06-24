let mainImg = document.querySelector(".main_image img");
mainImg.setAttribute("id", "main");
mainImg.setAttribute("src", imgInfo[0].previewImage); // initializing the main image to the first image of ImgInfo array.
document.getElementById("mainFigCap").innerHTML = imgInfo[0].title;

let division = document.querySelector(".sideBar"); // select the divison which will contain all the sideBar images and their captions
renderThumbnail(imgInfo, division);

let iter = 0; // iterator which Represent  the current selected element. iter varries from 0 to 4 representing all the 5 images in sidebar

sideBar = document.querySelectorAll(".sideBar img"); // List of all the image nodes of sidebar
sideBarDiv = document.querySelectorAll(".sideBar div"); // List of all the division tags of sidebar which house images and paragraphs

sideBarDiv[0].classList.add("blue");

document.querySelectorAll(".sideBar div").forEach((element) => {
  element.addEventListener(
    "click",
    change(element.firstChild.src, element.firstChild.id)
  );
});

//Function for truncating thumbnail title
let titleNode = document.querySelectorAll(".sideBar p");
//console.log(titleNode);
clipper(titleNode, imgInfo); // calling the clipper function for the first time
window.addEventListener("resize", clipper(titleNode, imgInfo)); // calling this function whenever resizing.
