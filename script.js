// Cloak button functionality to change the tab title
document.querySelector(".cloaker").addEventListener("click", function() {
    let newTitle = prompt("Enter a new tab name:");
    if (newTitle) {
        document.title = newTitle;
    }
});
