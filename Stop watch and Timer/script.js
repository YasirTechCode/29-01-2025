let stopwatchInterval;
let timerInterval;
let stopwatchTime = 0;
let timerTime = 300; // 5 minutes in seconds

function formatTime(seconds) {
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function formatTimer(seconds) {
    let mins = Math.floor(seconds / 60);
    let secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function startStopwatch() {
    if (!stopwatchInterval) {
        stopwatchInterval = setInterval(() => {
            stopwatchTime++;
            document.getElementById('stopwatch').textContent = formatTime(stopwatchTime);
        }, 1000);
    }
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
}

function resetStopwatch() {
    stopStopwatch();
    stopwatchTime = 0;
    document.getElementById('stopwatch').textContent = formatTime(stopwatchTime);
}

function startTimer() {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            if (timerTime > 0) {
                timerTime--;
                document.getElementById('timer').textContent = formatTimer(timerTime);
            } else {
                stopTimer();
            }
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    stopTimer();
    timerTime = 300;
    document.getElementById('timer').textContent = formatTimer(timerTime);
}

function addTime(seconds) {
    timerTime += seconds;
    document.getElementById('timer').textContent = formatTimer(timerTime);
}