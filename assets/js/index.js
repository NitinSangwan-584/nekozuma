//-----------------------------------navbar---------------------------------------------
const navbarbtn = () => {
    document.getElementById("name").classList.toggle("show-navbar")
    document.getElementById("rotates").classList.toggle("rotate40")
    document.getElementById("transparent").classList.toggle("bg-transparent")
    document.getElementById("rotates2").classList.toggle("rotate-45")
    document.body.classList.toggle("overflow-hidden")
}
//------------------------------------------------theme---------------------------------------------

// Function to switch between light and dark themes
function switchTheme() {
    const body = document.body;
    const themeToggleButton = document.getElementById('theme-toggle');
    const sunContainer = document.getElementById('sun-container');
    const moonContainer = document.getElementById('moon-container');

    // Toggle the dark class on the body
    body.classList.toggle('dark');

    // Toggle the visibility of the sun and moon icons
    if (body.classList.contains('dark')) {
        sunContainer.style.display = 'none'; // Hide sun icon
        moonContainer.style.display = 'block'; // Show moon icon
    } else {
        sunContainer.style.display = 'block'; // Show sun icon
        moonContainer.style.display = 'none'; // Hide moon icon
    }
}
//----------------------------------------------back to top------------------------------------------------
const myButton = document.getElementById("myBtn");

window.onscroll = function () {
    myButton.style.display = window.scrollY > 200 ? "block" : "none";
};

function topFunction() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
