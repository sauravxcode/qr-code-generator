// Get references to necessary HTML elements
let displaybox = document.getElementById("displaybox");
let qrimage = document.getElementById("qrimage");
let qrtext = document.getElementById("qrtext");
let downloadButton = document.getElementById("downloadButton");

// Function to generate QR code
function GenerateQR() {
    if (qrtext.value.length > 0) { // Check if input text is not empty
        
        // Generate QR code image using QR Server API
        qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;

        // Show the container with the QR image
        displaybox.classList.add("show-img");

        // Update download link href to the generated QR code image
        downloadButton.href = qrimage.src;
        downloadButton.style.display = "block"; // Show the download button
    } else {
        // If input text is empty, add error class to input field for visual feedback
        qrtext.classList.add("error");
        
        // Remove error class after 1 second to remove visual feedback
        setTimeout(() => {
            qrtext.classList.remove("error");
        }, 1000);
    }
}
