// Image switcher code

const myImage = document.querySelector("img");

  myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/mainFamily.jpg") {
    myImage.setAttribute("src", "images/joker.jpg");
  } else {
    myImage.setAttribute("src", "images/mainFamily.jpg");
  }
});


// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Приветствую, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Приветствую, ' + storedName;
}

myButton.addEventListener("click", () => {
  setUserName();
});
