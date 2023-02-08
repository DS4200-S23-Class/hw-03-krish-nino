
// creates dark mode on button click
let isDark = false;
function changeColor() {
    isDark = !isDark;
    // checks if the site is already in dark mode or light mode, and switches it based on this answer
    if (isDark) {
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
            }
    else {
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
            }
}