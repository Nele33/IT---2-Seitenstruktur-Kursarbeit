// timer-Array mit drei Objekten mit den Attributen: Farbe (color); Name (name); Minutenanzahl (minutes); Uhrzeit (time); Intervall für die Weckeraktualisierung (interval); verbleibende Zeit für pausierten Wecker (remaining); Boolean-Wert um anzugeben, ob Wecker gerade runterzählt (running); Referenz auf Canvas-Element für Wecker-Grafik (canvas); Zeichenkontext für Canvas-Element (context); Zeitspanne des Weckers in Millisekunden, entweder durch Minuten oder spezifische Uhrzeit festgelegt (total) 
const timers = [
    { color: "#FF0000", name: "IT 2", minutes: 5, time: "", interval: null, remaining: 0, running: false, canvas: null, context: null, total: 0 },
    { color: "#FFA500", name: "Medien und Kommunikation 1", minutes: 25, time: "", interval: null, remaining: 0, running: false, canvas: null, context: null, total: 0 },
    { color: "#008000", name: "Statistik", minutes: 90, time: "", interval: null, remaining: 0, running: false, canvas: null, context: null, total: 0 }
];


const daten6053347lkramer = [
    { Farbe: "#FF0000", Name: "IT 2", Minuten: "5" },
    { Farbe: "#FFA500", Name: "Medien und Kommunikation 1", Minuten: "25" },
    { Farbe: "#008000", Name: "Statistik", Minuten: "90" }
];
