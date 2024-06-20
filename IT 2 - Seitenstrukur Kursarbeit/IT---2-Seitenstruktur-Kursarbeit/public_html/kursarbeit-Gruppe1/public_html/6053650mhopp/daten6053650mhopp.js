// JavaScript Document

class Event {
    constructor(title, date, time, color, description, completed = false) {
        this.title = title;
        this.date = date;
        this.time = time;
        this.color = color;
        this.description = description;
        this.completed = completed;
    }
}
// Beispieldaten 
const events = [
    new Event('Deutsch lernen', '2024-06-01', '10:00', '#ADD8E6', 'Romantik'),
    new Event('Physik Hausaufgaben', '2024-06-02', '14:00', '#E1A6AD','Elektronik'),
    new Event('Mathe Vortrag', '2024-06-03', '16:00', '#CBFFC6','Karteikarten schreiben')
];

const daten6053650mhopp = [
    { spalte1: "Deutsch lernen", spalte2: "2024-06-01", spalte3: "10:00" },
    { spalte1: "Physik Hausaufgaben", spalte2: "2024-06-02", spalte3: "14:00" },
    { spalte1: "Mathe Vortrag", spalte2: "2024-06-03", spalte3: "16:00" }
];
