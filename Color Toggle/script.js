let toggleMenuOpen = false;
let toggleMenuButton = document.querySelector(".nav-button");

let toggleMenu = function() {
    let sideBar = document.querySelector(".nav-menu");
    let sideBarUl = document.querySelector(".nav-menu ul");

    if (toggleMenuOpen === false) {
        sideBarUl.style.display ="block";
        sideBar.style.width ="272px";
        toggleMenuOpen = true;
    }

    else if (toggleMenuOpen === true) {
        sideBar.style.width ="0";
        sideBarUl.style.display ="none";
        toggleMenuOpen = false;
    };
   
};
toggleMenuButton.addEventListener("mouseover", toggleMenu);

let bodyElement = document.body;
let colorTitle =document.querySelector(".title");
let backgroundGrey = document.querySelector(".backGround-grey");
backgroundGrey.addEventListener("click", function (){
    bodyElement.classList.remove("backGround-grey", "backGround-red", "backGround-orange", "backGround-purple", "backGround-green");
    bodyElement.classList.add("backGround-grey");
    colorTitle.innerHTML = "<h1>Color Grey</h1>";
    toggleMenu();
});

let backgroundRed = document.querySelector(".backGround-red");
backgroundRed.addEventListener("click", function (){
    bodyElement.classList.remove("backGround-grey", "backGround-red", "backGround-orange", "backGround-purple", "backGround-green");
    bodyElement.classList.add("backGround-red");
    colorTitle.innerHTML = "<h1>Color Red</h1>";
    toggleMenu();
});

let backgroundOrange = document.querySelector(".backGround-orange");
backgroundOrange.addEventListener("click", function (){
    bodyElement.classList.remove("backGround-grey", "backGround-red", "backGround-orange", "backGround-purple", "backGround-green");
    bodyElement.classList.add("backGround-orange");
    colorTitle.innerHTML = ("<h1>Color Orange</h1>");
    toggleMenu();
});

let backgroundPurple = document.querySelector(".backGround-purple");
backgroundPurple.addEventListener("click", function (){
    bodyElement.classList.remove("backGround-grey", "backGround-red", "backGround-orange", "backGround-purple", "backGround-green");
    bodyElement.classList.add("backGround-purple");
    colorTitle.innerHTML = ("<h1>Color Purple</h1>");
    toggleMenu();
});

let backgroundGreen = document.querySelector(".backGround-green");
backgroundGreen.addEventListener("click", function (){
    bodyElement.classList.remove("backGround-grey", "backGround-red", "backGround-orange", "backGround-purple", "backGround-green");
    bodyElement.classList.add("backGround-green");
    colorTitle.innerHTML = ("<h1>Color Green</h1>");
    toggleMenu();
});


