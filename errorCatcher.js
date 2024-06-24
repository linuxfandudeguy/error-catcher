// errorCatcher.js

// Define a function to catch errors and render them in an iframe
function errorCatcher(code) {
    const iframe = document.createElement('iframe');
    iframe.style.border = 'none';
    iframe.style.width = '100%';
    iframe.style.height = '200px';

    try {
        // Attempt to evaluate the provided JavaScript code
        eval(code);
    } catch (error) {
        const errorHtml = `
            <html>
            <head>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f8f9fa;
                        margin: 20px;
                    }
                    .error-container {
                        background-color: #f14668;
                        color: white;
                        padding: 10px;
                        border-radius: 5px;
                    }
                </style>
            </head>
            <body>
                <div class="error-container">
                    <h2>Error in JavaScript Code:</h2>
                    <pre>${escapeHtml(code)}</pre>
                    <p><strong>Error Details:</strong> ${error.message}</p>
                </div>
            </body>
            </html>
        `;

        iframe.srcdoc = errorHtml;
        document.body.appendChild(iframe);
    }
}

// Function to escape HTML characters in the code for displaying in <pre>
function escapeHtml(unsafe) {
    return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
