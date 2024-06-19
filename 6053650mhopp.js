// JavaScript Document

document.addEventListener('DOMContentLoaded', () => {
    const eventForm = document.getElementById('eventForm'); //Zugriff auf HTML_Elemente
    const eventTable = document.getElementById('eventTable').getElementsByTagName('tbody')[0];

    eventForm.addEventListener('submit', (event) => {    //Event-Listener wird ausgelöst wenn Formular abgeschickt wird 
        event.preventDefault();
        const title = document.getElementById('title').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const color = document.getElementById('color').value;
        const description = document.getElementById('description')

        const newEvent = new Event(title, date, time, color); //neuer Termin wird erstellt 
        events.push(newEvent); // wird zum Array hinzugefügt 

        updateEventTable(); //Tabelle wirtd aktualisiert 
        updateChart(); //Diagramm wird aktualisiert 
        eventForm.reset(); //Formular wird zurückgesetzt 
    });

    const updateEventTable = () => {
        eventTable.innerHTML = ''; //Tabelle wird geleert 
        events.forEach((event, index) => {
            const row = eventTable.insertRow(); //Erstellen der Zeilen 
            row.style.backgroundColor = event.color; //Anpassung über Terminfarbe 

            const titleCell = row.insertCell(0); //Zellen werden gefüllt 
            const dateCell = row.insertCell(1);
            const timeCell = row.insertCell(2);
            const colorCell = row.insertCell(3);
            const descriptionCell = row.insertCell(4)
            const completedCell = row.insertCell(5);

            titleCell.textContent = event.title;
            dateCell.textContent = event.date;
            timeCell.textContent = event.time;
            colorCell.innerHTML = `<input type="color" value="${event.color}" disabled>`;
            descriptionCell.textContent = event.description

            const completedCheckbox = document.createElement('input');
            completedCheckbox.type = 'checkbox';
            completedCheckbox.checked = event.completed;
            completedCheckbox.addEventListener('change', () => { //Event-Listener reagiert auf Veränderungen der Checkbox
                event.completed = completedCheckbox.checked;
                row.classList.toggle('completed', event.completed);
                updateChart();
            });
            completedCell.appendChild(completedCheckbox);

            if (event.completed) {
                row.classList.add('completed'); //CSS-Klasse wird hinzugefügt
            }
        });
    };

 //Donut-Diagramm gefunden bei https://developers.google.com/chart/interactive/docs/gallery/piechart?hl=de
    const updateChart = () => {
    const completedCount = events.filter(event => event.completed).length;
    const totalCount = events.length;
    const completedPercentage = (completedCount / totalCount) * 100;

    google.charts.load('current', { packages: ['corechart'] });
    google.charts.setOnLoadCallback(() => {
        const data = google.visualization.arrayToDataTable([
            ['Status', 'Anzahl'],
            ['Erledigt', completedCount],
            ['Offen', totalCount - completedCount]
        ]);

        const options = {
            title: 'Terminstatus',
            pieHole: 0.4,
            forceIFrame: false,
        };

        const chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
    });
};


    updateEventTable(); //Ausführung der Funktionen 
    updateChart();
});