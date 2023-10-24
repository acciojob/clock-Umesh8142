//your JS code here. If required.

function updateTimer() {
    const timerElement = document.getElementById("timer");
    const currentDate = new Date();

    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };

    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    timerElement.textContent = formattedDate;
}

// Update the timer every second
setInterval(updateTimer, 1000);

// Initial call to display the timer immediately
updateTimer();