//function triggered on mouse click on image:
const change = function (src, imgId) {
  //console.log(infoArray);
  let k = 0; // iterator to traverse the whole sidebar node list
  for (k = 0; k < imgInfo.length; k++) {
    if (imgId === sideBar[k].id) {
      // check which of the image id of the sidebar images matches with id of the clicked image
      iter = k; // copy the child number to the global iterator
      break;
    }
  }
  let parent = sideBar[k].parentNode; // select parent of the clicked image
  for (k = 0; k < imgInfo.length; k++) {
    sideBarDiv[k].classList.remove("blue"); // remove blue bg color class from all other nodes in sideBarDiv
  }
  parent.classList.add("blue"); // add blue color class to the clicked image class

  setMainImg(src, imgInfo[iter].title);
};
