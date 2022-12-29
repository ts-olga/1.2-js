// Task 1
document.getElementById("css-btn").addEventListener("click", function () {
  document.getElementById("square1").style.display = "none";
});

document.getElementById("js-btn").addEventListener("click", function () {
  document.getElementById("square1").remove();
});

document.getElementById("css-js-btn").addEventListener("click", function () {
  document.getElementById("square1").style.visibility = "hidden";
});

// Task 2
let square = document.getElementById("square2");
document.getElementById("delete2").addEventListener("click", function () {
  if (square.style.visibility === "hidden") {
    square.style.visibility = "visible";
    this.innerText = "Delete";
  } else {
    square.style.visibility = "hidden";
    this.innerText = "Create";
  }
});

// Task 3
let square3 = document.getElementsByClassName("square3");
document.getElementById("delete3").addEventListener("click", function () {
  if (square3[0].style.display === "none") {
    for (let i = 0; i < square3.length; i++) {
      square3[i].style.display = "block";
    }
    this.innerText = "Hide";
  } else {
    for (let i = 0; i < square3.length; i++) {
      square3[i].style.display = "none";
    }
    this.innerText = "Display";
  }
});

// Task 4
document.getElementById("delete4").addEventListener("click", function () {
  let selectedSquare = document.getElementById(
    document.getElementById("input4").value
  );
  if (selectedSquare.style.display === "none") {
    selectedSquare.style.display = "block";
  } else {
    selectedSquare.style.display = "none";
  }
});

// Task 5
let yellowSquare = document.getElementById("square5");
yellowSquare.addEventListener("click", myFunction);
function myFunction() {
  alert("Hello!");
  yellowSquare.removeEventListener("click", myFunction);
  yellowSquare.addEventListener("click", function () {
    yellowSquare.style.display = "none";
  });
}

// Task 6
let redSquare = document.getElementById("redSquare");
document.getElementById("show5").addEventListener("mouseover", function () {
  redSquare.style.display = "block";
});
document.getElementById("show5").addEventListener("mouseout", function () {
  redSquare.style.display = "none";
});

// Task 7
let greenRect = document.getElementById("greenRect");
document.getElementById("input7").addEventListener("focus", function () {
  greenRect.style.display = "block";
});
document.getElementById("input7").addEventListener("input", function () {
  greenRect.style.display = "none";
});

// Task 8
document.getElementById("btn8").addEventListener("click", function () {
  let image = document.getElementById("image8");
  image.src = document.getElementById("input8").value;
});

// Task 9
document.getElementById("btn9").addEventListener("click", showImages);
function showImages() {
  let imageLink = document.getElementById("input9").value.split("\n");
  for (let i = 0; i < imageLink.length; i++) {
    let image = document.createElement("img");
    image.setAttribute("src", imageLink[i]);
    document.querySelector(".show-images").append(image);
  }
}

// Task 10
document.addEventListener("mousemove", coordinates);
function coordinates(event) {
  document.getElementById(
    "mouse-coord"
  ).innerHTML = `X: ${event.clientX}, Y: ${event.clientY}`;
}

//Task 11
let selectedLanguage = navigator.language;
document.getElementById("language").innerHTML = `Language: ${selectedLanguage}`;

//Task 12
navigator.geolocation.getCurrentPosition(function (position) {
  document.getElementById(
    "location"
  ).innerHTML = `Longitude: ${position.coords.longitude}, Latitude: ${position.coords.latitude}`;
});

//Task 13
document.getElementById("input1").addEventListener("input", function () {
  localStorage.setItem(
    "localStorage",
    document.getElementById("input1").innerHTML
  );
});

document.getElementById("input2").addEventListener("input", function () {
  document.cookie = `cookie= ${document.getElementById("input2").innerHTML}`;
});

document.getElementById("input3").addEventListener("input", function () {
  sessionStorage.setItem(
    "sessionStorage",
    document.getElementById("input3").innerHTML
  );
});

onload = loadInput();
function loadInput() {
  document.getElementById("input1").innerHTML =
    localStorage.getItem("localStorage");

  let cookieInfo = document.cookie.split(";");

  for (let i = 0; i < cookieInfo.length; i++) {
    if (cookieInfo[i].includes("cookie=")) {
      document.getElementById("input2").innerHTML = cookieInfo[i].split("=")[1];
    }
  }

  document.getElementById("input3").innerHTML =
    sessionStorage.getItem("sessionStorage");
}

// Task 14
let topBtn = document.getElementById("top-btn");

window.onscroll = scrollFunction;
function scrollFunction() {
  if (
    window.pageYOffset + innerHeight ===
    document.documentElement.scrollHeight
  ) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

topBtn.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
});
// добавить плавный переход наверх

// Task 15
document
  .querySelector(".small-square")
  .addEventListener("click", function (event) {
    alert("It's a small square!");
    event.stopPropagation();
  });

document.querySelector(".big-square").addEventListener("click", function () {
  alert("It's a big square!");
});

// Task 16
let greySquareBtn = document.getElementById("btn16");
greySquareBtn.addEventListener("click", function () {
  document.querySelector(".grey-square").style.display = "block";
  document.body.style.overflow = "hidden";
});

document.querySelector(".grey-square").addEventListener("click", function () {
  document.querySelector(".grey-square").style.display = "none";
  document.body.style.overflow = "auto";
});

// Task 17
document.getElementById("go-btn").addEventListener("click", function (event) {
  event.preventDefault();
});

// Task 18
let dropArea = document.getElementById("input18");

dropArea.addEventListener("dragenter", function (e) {
  e.preventDefault();
  document.querySelector(".input-label").style.border = "5px dashed green";
});

dropArea.addEventListener("change", function () {
  document.querySelector(".input-label").style.border = "8px dotted purple";
});
