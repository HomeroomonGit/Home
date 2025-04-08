document.getElementById('clickButton').addEventListener('click', function() {
    alert('Button clicked!');
});

document.getElementById('cloakButton').addEventListener('click', function() {
    // Show the input field and submit button for the user to change the tab name
    document.getElementById('cloakInputSection').style.display = 'block';
});

document.getElementById('submitTabName').addEventListener('click', function() {
    // Get the new tab name from the input field
    const newTabName = document.getElementById('newTabName').value;

    // Check if the input field is not empty
    if (newTabName.trim() !== '') {
        // Change the tab title to the new name
        document.title = newTabName;
    }

    // Hide the input section after submission
    document.getElementById('cloakInputSection').style.display = 'none';
    document.getElementById('newTabName').value = ''; // Clear the input field
});
