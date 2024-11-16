const pixelPrompt = document.getElementById("resize-prompt");
const pixelContainer = document.querySelector(".container");
const defaultPixel = 16; // Default pixel size when page loads
const pickColor = document.getElementById("pickColor");
const eraser = document.getElementById("eraser");
const surprise = document.getElementById("surprise");
const reset = document.getElementById("reset");

let colorCode = "black";

let surpriseMode = false

function clearContainer(x) {
    x.innerHTML = ''
}

function randomNumGen() {
    return Math.floor(Math.random() * 256);
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
    colorPixel();
}

populatePixels(defaultPixel);

pixelPrompt.addEventListener("click", function () {
    let numPixels = parseInt(prompt("Enter the number of pixels between 1 to 100"));
    clearContainer(pixelContainer);
    populatePixels(numPixels);
});

function colorPixel() {
    const pixels = document.querySelectorAll('.container div')
    pixels.forEach(function (color) {
        color.addEventListener("mouseover", function (e) {
            if (surpriseMode === true) {
                a = randomNumGen();
                b = randomNumGen();
                c = randomNumGen();
                colorCode = `rgba(${a}, ${b}, ${c})`
            }
            color.style.backgroundColor = `${colorCode}`;
        });
    });
}

eraser.addEventListener("click", function (e) {
    colorCode = "#FFFCF2";
})

pickColor.addEventListener("input", function () {
    colorCode = pickColor.value;
    console.log(colorCode);
})


surprise.addEventListener("click", function () {
    function randomize() {
        a = randomNumGen();
        b = randomNumGen();
        c = randomNumGen();
        colorCode = `rgba(${a}, ${b}, ${c})`
    }
    const pixels = document.querySelectorAll('.container div')
    pixels.forEach(function (color) {
        color.addEventListener("mouseover", function (e) {
            randomize()
        });
    })
})

reset.addEventListener("click", function (e) {
    clearContainer(pixelContainer);
    populatePixels(defaultPixel);
})
