// timer-Array mit drei Objekten mit den Attributen: Farbe (color); Name (name); Minutenanzahl (minutes); Uhrzeit (time); Intervall für die Weckeraktualisierung (interval); verbleibende Zeit für pausierten Wecker (remaining); Boolean-Wert um anzugeben, ob Wecker gerade runterzählt (running); Referenz auf Canvas-Element für Wecker-Grafik (canvas); Zeichenkontext für Canvas-Element (context); Zeitspanne des Weckers in Millisekunden, entweder durch Minuten oder spezifische Uhrzeit festgelegt (total) 
const timers = [
    { color: "", name: "", minutes: 0, time: "", interval: null, remaining: 0, running: false, canvas: null, context: null, total: 0 },
    { color: "", name: "", minutes: 0, time: "", interval: null, remaining: 0, running: false, canvas: null, context: null, total: 0 },
    { color: "", name: "", minutes: 0, time: "", interval: null, remaining: 0, running: false, canvas: null, context: null, total: 0 }
];