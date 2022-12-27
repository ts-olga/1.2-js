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
// navigator.geolocation.getCurrentPosition(function (position) {
//   document.getElementById(
//     "location"
//   ).innerHTML = `Longitude: ${position.coords.longitude}, Latitude: ${position.coords.latitude}`;
// });

// Task 13