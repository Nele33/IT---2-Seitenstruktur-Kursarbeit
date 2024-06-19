//JavaScript Lernwecker

// timer-Array mit drei Objekten mit den Attributen: Farbe (color); Name (name); Minutenanzahl (minutes); Uhrzeit (time); Intervall für die Weckeraktualisierung (interval); verbleibende Zeit für pausierten Wecker (remaining); Boolean-Wert um anzugeben, ob Wecker gerade runterzählt (running); Referenz auf Canvas-Element für Wecker-Grafik (canvas); Zeichenkontext für Canvas-Element (context); Zeitspanne des Weckers in Millisekunden, entweder durch Minuten oder spezifische Uhrzeit festgelegt (total) 
const timers = [
    { color: "", name: "", minutes: 0, time: "", interval: null, remaining: 0, running: false, canvas: null, context: null, total: 0 },
    { color: "", name: "", minutes: 0, time: "", interval: null, remaining: 0, running: false, canvas: null, context: null, total: 0 },
    { color: "", name: "", minutes: 0, time: "", interval: null, remaining: 0, running: false, canvas: null, context: null, total: 0 }
];
	 
//Hier wird das Canvas-Element für den Timer mit angegebenem Index initialisiert:
function initializeCanvas(index) {
    const timer = timers[index - 1];
    timer.canvas = document.getElementById(`canvas${index}`); // Holt Canvas-Element aus dem HTML-Dokument
    timer.context = timer.canvas.getContext('2d'); // 2D-Darstellung
}

// Quellen: https://www.youtube.com/watch?v=XWdH4XwrKrM und https://stackoverflow.com/questions/64615939/javascript-timer-with-clock-graphic und https://codepen.io/onge/pen/JoYEZo

// Startet den Timer:
function startTimer(index) { 
    const timer = timers[index - 1];
    timer.color = document.getElementById(`color${index}`).value;
    timer.name = document.getElementById(`name${index}`).value;

    const minutesRadio = document.querySelector(`input[name="time-option${index}"][value="minutes"]`).checked;
    const timeRadio = document.querySelector(`input[name="time-option${index}"][value="time"]`).checked;

    if (minutesRadio) {
        timer.minutes = parseInt(document.getElementById(`minutes${index}`).value);
        timer.remaining = timer.minutes * 60;
        timer.total = timer.remaining;
    } else if (timeRadio) {
        const timeValue = document.getElementById(`time${index}`).value;
        const currentTime = new Date();
        const [hours, minutes] = timeValue.split(":");
        const targetTime = new Date();
        targetTime.setHours(hours);
        targetTime.setMinutes(minutes);
        targetTime.setSeconds(0);
        timer.remaining = Math.floor((targetTime - currentTime) / 1000);
        timer.total = timer.remaining;
    }

    if (timer.remaining > 0) {
        timer.running = true;
        timer.interval = setInterval(() => updateTimer(index), 1000);
    }

    updateDisplay(index);
    initializeCanvas(index);
}

// Pausiert den Timer: 
function pauseTimer(index) {
    const timer = timers[index - 1];
    if (timer.running) {
        clearInterval(timer.interval); // Stoppt Intervall des Timers
        timer.running = false;
    }
}

// Stoppt den Timer: 
function stopTimer(index) {
    const timer = timers[index - 1];
    clearInterval(timer.interval);
    timer.running = false;
    timer.remaining = 0;
    updateDisplay(index);
    drawTimer(index, 0); // Setzt das Kreisdiagramm auf 0 zurück
}

// Aktualisiert die Zeit und zeigt die Benachrichtigungen (bei Hälfte und bei Ende des Timers) an:
function updateTimer(index) {
    const timer = timers[index - 1];
    if (timer.remaining > 0) {
        timer.remaining--;
        if (timer.remaining === Math.floor(timer.total / 2)) {
            notify(index, `„${timer.name}“ ist zur Hälfte geschafft! Weiter so!`, timer.color);
        }
    } else {
        clearInterval(timer.interval);
        timer.running = false;
        notify(index, `„${timer.name}“ ist vorbei! Gut gemacht!`, timer.color);
    }
	
	
    updateDisplay(index);
    drawTimer(index, timer.remaining / timer.total);
}

//Aktualisiert die Anzeige von der verbleibenden Zeit und ändert die Farbe von den Timer-Elementen:
function updateDisplay(index) {
    const timer = timers[index - 1];
    const clockElement = document.getElementById(`clock${index}`);
    const minutes = Math.floor(timer.remaining / 60);
    const seconds = timer.remaining % 60;
    clockElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    const timerElement = document.getElementById(`timer${index}`);
    timerElement.style.borderColor = timer.color;
    timerElement.style.color = timer.color;

    if (!timer.running && timer.remaining > 0) {
        timerElement.style.backgroundColor = timer.color;
    } else {
        timerElement.style.backgroundColor = '';
    }
}


//Abbildung des Timerfrotschritts auf Canvas:
function drawTimer(index, fraction) {
    const timer = timers[index - 1];
    const context = timer.context;
    const color = timer.color;

    context.clearRect(0, 0, 200, 200);

    context.beginPath();
    context.arc(100, 100, 90, -0.5 * Math.PI, (2 * Math.PI * fraction) - 0.5 * Math.PI);
    context.lineTo(100, 100);
    context.fillStyle = color;
    context.fill();

    context.beginPath();
    context.arc(100, 100, 70, 0, 2 * Math.PI);
    context.fillStyle = 'white';
    context.fill();
}

//Zeigt Benachrichtigung an:
function notify(index, message, color) 
{
    const notificationElement = document.getElementById(`notification${index}`);
    notificationElement.style.border = `2px solid ${color}`;
    notificationElement.style.color = color;
    notificationElement.textContent = message;
    notificationElement.style.display = 'block';

    setTimeout(() => {
        notificationElement.style.display = 'none';
    }, 5000);
}

// Canvas-Elemente werden für die drei Timer initialisiert
document.addEventListener("DOMContentLoaded", () => {
    initializeCanvas(1);
    initializeCanvas(2);
    initializeCanvas(3);
});
