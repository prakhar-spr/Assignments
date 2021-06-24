function renderThumbnail(infoArray, parentDiv) {
  infoArray.forEach((element, index) => {
    let sideDiv = document.createElement("div"); //create a new divison
    sideDiv.setAttribute("id", `sideDiv${index}`);
    sideDiv.classList.add("sideDiv");
    let sideImg = document.createElement("img"); // craete image tag to add image in sideBar
    sideImg.classList.add("thumb");
    sideImg.setAttribute("id", `sideImg${index}`);
    sideImg.setAttribute("src", element.previewImage);
    sideImg.setAttribute("onclick", "change(this.src,this.id)");
    sideDiv.append(sideImg); // appending image to divison
    let sideCap = document.createElement("p"); // craeting paragraph to decribe the image caption
    sideCap.classList.add("desc");
    sideCap.innerHTML = element.title;
    sideDiv.append(sideCap); // appending p tag to divison
    // sideDiv.setAttribute(
    //   "onclick",
    //   "change(this.firstChild.src, this.firstChild.id)"
    // );
    // sideDiv.addEventListener(
    //   "click",
    //   change(sideDiv.firstChild.src, sideDiv.firstChild.id)
    // );
    parentDiv.append(sideDiv); // appending the new divison to its parent divison.
  });
}
