document.getElementById('clickButton').addEventListener('click', function() {
    alert('Button clicked!');
});

document.getElementById('cloakButton').addEventListener('click', function() {
    // Use the prompt function to ask for a new tab name
    const newTabName = prompt("Enter the new tab name:");

    // If the user entered a non-empty value, change the tab title
    if (newTabName && newTabName.trim() !== "") {
        document.title = newTabName;
    }
});
