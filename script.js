document.addEventListener('DOMContentLoaded', () => {
    let currentCaptcha = '';

    // 1. Captcha Generation
    function generateCaptcha(length = 6) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let captcha = '';
        for (let i = 0; i < length; i++) {
            captcha += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return captcha;
    }

    // 2. Display Captcha
    function displayCaptcha(captcha) {
        const captchaDisplayElement = document.getElementById('captcha_display');
        if (captchaDisplayElement) {
            captchaDisplayElement.textContent = captcha;
        } else {
            console.error("Captcha display element not found!");
        }
    }

    // 4. Captcha Validation
    function validateCaptcha(userInput, actualCaptcha) {
        if (userInput === actualCaptcha) {
            alert("Captcha validated successfully! Data submitted.");
            // In a real scenario, form submission would happen here.
        } else {
            alert("Invalid captcha. Please try again.");
        }
        // After validation, generate and display a new captcha.
        currentCaptcha = generateCaptcha();
        displayCaptcha(currentCaptcha);
    }

    // 3. Event Listener for Submit Button
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            const userInputElement = document.getElementById('captcha_input');
            const captchaDisplayElement = document.getElementById('captcha_display');

            if (userInputElement && captchaDisplayElement) {
                const userInput = userInputElement.value;
                // currentCaptcha holds the latest generated captcha text
                validateCaptcha(userInput, currentCaptcha);
                // Clear the input field after attempting validation
                userInputElement.value = ''; 
            } else {
                console.error("Captcha input or display element not found for submission handling!");
            }
        });
    } else {
        console.error("Form element not found!");
    }

    // 5. Initial Setup
    currentCaptcha = generateCaptcha();
    displayCaptcha(currentCaptcha);
});
