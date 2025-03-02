// Function to show snackbar notification
function showSnackbar(message, type) {
    const snackbar = document.getElementById("snackbar");
    snackbar.textContent = message;
    snackbar.className = `show ${type}`;

    // Remove snackbar after 3 seconds
    setTimeout(() => {
        snackbar.className = snackbar.className.replace("show", "");
    }, 3000);
}