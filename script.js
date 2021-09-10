// Fetch Header

fetch("fetch-header-nav.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.getElementById("fetch-header-nav").innerHTML = data;
    });




// Fetch Footer

fetch("fetch-footer.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.getElementById("fetch-footer").innerHTML = data;
    });


// Navbar functionality

function show() {
    console.log("this is working");
    const mainMenu = document.querySelector(".mainMenu");
    const closeMenu = document.querySelector(".closeMenu");
    mainMenu.style.height = "400px";
    closeMenu.style.color = "white";
    closeMenu.style.top = "20px";
}

function closeToggle() {
    console.log("close is also working");
    const mainMenu = document.querySelector(".mainMenu");
    const closeMenu = document.querySelector(".closeMenu");
    mainMenu.style.height = "0";
    closeMenu.style.color = "black";
    closeMenu.style.top = "-30px";

    //   window.location.reload(false);
}