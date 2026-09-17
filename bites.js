window.addEventListener("DOMContentLoaded", function() {
    const greetingElement = document.getElementById("greeting");
    if (greetingElement) {
        const now = new Date();
        const hour = now.getHours();
        let greeting = "";

        if (hour < 12) {
            greeting = "Good morning! 🌞 Welcome to Savoury Bites.";
        } else if (hour < 18) {
            greeting = "Good afternoon!  Welcome to Savoury Bites.";
        } else {
            greeting = "Good evening! 🌙 Welcome to Savoury Bites.";
        }

        greetingElement.textContent = greeting;
    }
});


function validateReservationForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const guests = document.getElementById("guests").value;

    if (!name || !email || !date || !time || !guests) {
        alert("Please fill in all the required fields before submitting.");
        return false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return false;
    }

    const confirmation = `
Thank you, ${name}!
Your reservation for ${guests} guest(s) on ${date} at ${time} has been received.
We look forward to serving you at Savoury Bites 🍴
    `;
    alert(confirmation);

    document.getElementById("reservationForm").reset();
    return true;
}

const toggleButton = document.getElementById("darkModeToggle");
if (toggleButton) {
    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        const isDarkMode = document.body.classList.contains("dark-mode");
        localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");

        toggleButton.textContent = isDarkMode ? "☀️" : "🌙";
    });

    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        toggleButton.textContent = "☀️";
    }
}
