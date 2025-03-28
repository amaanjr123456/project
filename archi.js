// Function to open the modal and display architect's name
function openModal(architectName) {
    // Create a modal container
    let modal = document.createElement("div");
    modal.classList.add("modal");

    // Modal content
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <h2>Book Consultation</h2>
            <p>You are booking a consultation with <strong>${architectName}</strong>.</p>
            <form id="booking-form">
                <label for="name">Your Name:</label>
                <input type="text" id="name" required>

                <label for="email">Your Email:</label>
                <input type="email" id="email" required>

                <label for="date">Preferred Date:</label>
                <input type="date" id="date" required>

                <button type="submit">Confirm Booking</button>
            </form>
        </div>
    `;

    // Append modal to body
    document.body.appendChild(modal);

    // Close button functionality
    modal.querySelector(".close-button").addEventListener("click", function () {
        modal.remove();
    });

    // Close modal when clicking outside the content
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.remove();
        }
    });

    // Handle form submission
    document.getElementById("booking-form").addEventListener("submit", function (event) {
        event.preventDefault();
        alert(`Consultation booked with ${architectName}!`);
        modal.remove();
    });
}


    // Handle form submission
    document.getElementById("booking-form").addEventListener("submit", function (event) {
        event.preventDefault();
        alert(`Consultation booked with ${architectName}!`);
        modal.remove();
    });
}