// Variables to store stopwatch data
let startTime = 0;
let elapsed = 0;
let timer = null;
// Get HTML elements
const display = document.getElementById("display");
const laps = document.getElementById("laps");
// Function to update stopwatch time
function update() {
    // Calculate elapsed time
    elapsed = Date.now() - startTime;
    // Convert milliseconds into hours, minutes, seconds
    let ms = elapsed % 1000;
    let sec = Math.floor(elapsed / 1000) % 60;
    let min = Math.floor(elapsed / 60000) % 60;
    let hr = Math.floor(elapsed / 3600000);
    // Display formatted time
    display.innerHTML =
        String(hr).padStart(2, '0') + ":" +
        String(min).padStart(2, '0') + ":" +
        String(sec).padStart(2, '0') + "." +
        String(ms).padStart(3, '0');
}
// Start button
document.getElementById("start").onclick = function () {
    // Prevent multiple timers
    if (timer) return;
    // Resume from paused time
    startTime = Date.now() - elapsed;
    // Update stopwatch every 10 milliseconds
    timer = setInterval(update, 10);
};
// Pause button
document.getElementById("pause").onclick = function () {
    clearInterval(timer);
    timer = null;
};
// Reset button
document.getElementById("reset").onclick = function () {
    clearInterval(timer);
    timer = null;
    elapsed = 0;
    display.innerHTML = "00:00:00.000";
    laps.innerHTML = "";
};
// Lap button
document.getElementById("lap").onclick = function () {
    // Don't record lap if stopwatch hasn't started
    if (elapsed === 0) return;
    // Create new lap item
    const li = document.createElement("li");
    li.innerHTML = display.innerHTML;
    // Add newest lap at the top
    laps.prepend(li);
};






