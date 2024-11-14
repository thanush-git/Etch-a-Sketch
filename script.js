const pixelPrompt = document.getElementById("resize-prompt");
const pixelContainer = document.querySelector(".container");
const defaultPixel = 16; // Default pixel size when page loads

pixelContainer.style.height = "80vh"
pixelContainer.style.width = "80vh"
pixelContainer.style.border = "1px black solid"


function clearContainer (x) {
    x.innerHTML = ''
} 


function populatePixels(num) {

    for (let i = 0; i < num * num; i++) {
        const newDiv = document.createElement("div");
        pixelContainer.appendChild(newDiv);
    }

    const pixel = document.querySelectorAll(".container div");
    pixel.forEach(function (pixel) {
        pixel.style.flex = `1 1 calc(100% / ${num})`;
        pixel.style.height = `calc(100% / ${num})`;
      });
}


pixelPrompt.addEventListener("click", function () {
    let numPixels = parseInt(prompt("Enter the number of pixels between 1 to 100"));
    clearContainer(pixelContainer);
    populatePixels(numPixels);
});


