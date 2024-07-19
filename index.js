var toggle = true;
var sn = document.querySelector(".sidenav");

document.querySelector(".toggle").addEventListener("click", function() {
    sn.style.display = toggle ? "block" : "none";
    toggle = !toggle;
});

var home = document.querySelector(".home");
var workspace = document.querySelector(".workspace");
var about = document.querySelector(".about");
var contact = document.querySelector(".contact");

var currentSection = home;

function helper(curr) {
    currentSection.style.display = "none";
    curr.style.display = "block";
    currentSection = curr;
    sn.style.display = "none";
    toggle = true; // Reset toggle state to ensure sidebar can be toggled again
}

document.querySelectorAll(".sidenav ul li").forEach(function(ele, index) {
    ele.addEventListener("click", function() {
        switch (index) {
            case 0:
                helper(home);
                break;
            case 1:
                helper(workspace);
                break;
            case 2:
                helper(about);
                break;
            case 3:
                helper(contact);
                break;
        }
        // Always hide the sidebar after selecting an item (if it's open)
        sn.style.display = "none";
        toggle = true; // Reset toggle state
    });
});

function displayLettersOneByOne(element, text, delay) {
    element.innerHTML = ""; // Clear the current content
    text.split('').forEach((letter, index) => {
        setTimeout(() => {
            if (index === 9) { // Adjust this index based on where you want the line break
                element.innerHTML += '<br>';
            }
            element.innerHTML += letter;
        }, delay * index);
    });
}

const elements = document.getElementsByClassName('textonimg');
Array.from(elements).forEach((ele) => {
    const text = "Hi!👋 I'M Anjaneya Kumar"; // Your desired text
    displayLettersOneByOne(ele, text, 150); // Adjust the delay as needed
});
document.addEventListener("click", function(event) {
    var sidenav = document.querySelector(".sidenav");
    var isClickInsideMenu = sidenav.contains(event.target);
    var isClickOnToggle = event.target.closest(".toggle") !== null; // Check if the click is on the toggle or a child of it

    if (!isClickInsideMenu && !isClickOnToggle) {
        sidenav.style.display = "none";
        toggle=!toggle
    }
});


