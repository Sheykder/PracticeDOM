// Avatar
var image = document.getElementById("avatar");
image.src = "https://static.vecteezy.com/system/resources/previews/024/183/525/non_2x/avatar-of-a-man-portrait-of-a-young-guy-illustration-of-male-character-in-modern-color-style-vector.jpg";
image.width = 200;
image.height = 200;

// Title
var header = document.getElementById("header");
header.textContent = "Моя сторінка";
header.style.fontStyle = "italic";

// Status
var statusDiv = document.getElementsByClassName("status")[0];
statusDiv.textContent = "Online";
statusDiv.classList.add("active");

// List of scores
var items = document.querySelectorAll("#scores li");

for (var i = 0; i < items.length; i++) {
    var value = Number(items[i].textContent);

    if (value < 60) 
    {
        items[i].classList.add("failed");
    } 
    else 
    {
        items[i].classList.add("passed");
    }
}




