// Add this to your javascript/script.js
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) { // Adjust this value as needed
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const links = document.querySelectorAll('.nav-link');

    for (const link of links) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - navbar.offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    }
});

// Store Data On Google Form
const form = document.querySelector('form');
const submitButton = document.querySelector('#submit');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Disable the submit button to prevent multiple submissions
  submitButton.disabled = true;
  submitButton.value = "Submitting..."; // Optional: Show submitting status

  const formData = new FormData(form);
  const jsonData = {};

  formData.forEach((value, key) => {
    jsonData[key] = value;
  });

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbzzBibNl17SlNSJcxnvCANbgDaF_eD4n3B3sRqkpw9km9k2pvKYRx2R7yJfHoPdWxKX/exec', {
      method: 'POST',
      body: JSON.stringify(jsonData),
    });

    const result = await response.text();
    alert(result); // Optional: Shows "Success" if data is added successfully
    form.reset(); // Reset form after submission
  } catch (error) {
    alert("An error occurred. Please try again.");
  } finally {
    // Re-enable the button (if necessary) after a successful or failed attempt
    submitButton.disabled = false;
    submitButton.value = "Submit"; // Reset button text
  }
});
