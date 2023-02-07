// Thoughts for extra credit buttons that modify the page:
// 1. Add a button that changes the background color of the page
// 2. Add a button that changes the color of the text on the page
// 3. Add a button that changes the color of all links on the page

let isDark = false;
function changeColor() {
    isDark = !isDark;
    if (isDark) {
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
            }
    else {
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
            }
}