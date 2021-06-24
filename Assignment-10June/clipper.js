const clipper = (titleNodes, infoArray) => {
  titleNodes.forEach((element, index) => {
    let imgTitle = infoArray[index].title;
    element.textContent = imgTitle;
    if (element.scrollWidth > element.clientWidth) {
      let maxAllowed = Math.floor(
        (element.clientWidth * imgTitle.length) / element.scrollWidth // Length of title that will fit inside the given size
      );
      maxAllowed -= 3; // subtracting three characters for putting dots
      let newTitle = imgTitle.substr(0, maxAllowed / 2); // left side of the title
      newTitle += "...";
      newTitle += imgTitle.substr(
        // right side of the title
        imgTitle.length + 1 - maxAllowed / 2,
        maxAllowed / 2
      );
      element.textContent = newTitle;
      //console.log(i);
    }
  });
};
