// JavaScript Document



// Neue Module hinzufügen 

function newModule() {
    const modulNameInput = document.getElementById('modulName');
    const modulColorInput = document.getElementById('modulColor');
    const modulDescriptionInput = document.getElementById('modulDescription');
    const modulTasksInput = document.getElementById('modulTasks');
    const modulTimeInput = document.getElementById('appt');

    const modulName = modulNameInput.value;
    const modulColor = modulColorInput.value;
    const modulDescription = modulDescriptionInput.value;
    const modulTasks = modulTasksInput.value;
    const modulTime = modulTimeInput.value;
	
// Sind alle Felder ausgefüllt worden? -> Wenn nicht Alarm

    if (modulName && modulColor && modulDescription && modulTasks && modulTime) {
        const newModule = {
            name: modulName,
            color: modulColor,
            completed: 0,
            description: modulDescription,
            tasks: modulTasks,
            estimatedTime: modulTime,
        };
		
// Daten zum Array hinzufügen

        modules.push(newModule);
        renderModules();
        drawChart();
		
// Felder zurücksetzten 
		
        modulNameInput.value = '';
        modulColorInput.value = '#000000'; 
        modulDescriptionInput.value = '';
        modulTasksInput.value = '';
        modulTimeInput.value = '00:00'; 
		
    } else {
        alert('Bitte fülle alle Felder aus.');
    }
}

// Säulendiagramm gefunden unter: https://developers.google.com/chart/interactive/docs/gallery/columnchart?hl=de und JSFiddle
	
// Seite laden
		
	document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('addModuleButton').addEventListener('click', newModule);
    renderModules();
    google.charts.load('current', { packages: ['corechart', 'bar'] });
    google.charts.setOnLoadCallback(drawChart);
	
	});
		
// Modulnamen anzeigen und "erldigt" Button	

function renderModules() {
    const modulList = document.getElementById('modulList');
    modulList.innerHTML = ''; // Clear the list before adding new entries

    for (let i = 0; i < modules.length; i++) {
        const module = modules[i];
        const modulElement = document.createElement('div');

        const moduleInfo = document.createElement('span');
        moduleInfo.textContent = module.name;

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Erledigt';
        completeButton.addEventListener('click', () => completed(i));

        modulElement.appendChild(moduleInfo);
        modulElement.appendChild(completeButton);
        modulList.appendChild(modulElement);
    }
}

// Klicks auf den "erledigt" Button erhöhen		
		
function completed(index) {
    modules[index].completed += 1;
    drawChart();
}
		
// Säulendiagramm anzeigen und aktualisieren (Quelle siehe oben)		

function drawChart() {
    const data = new google.visualization.DataTable();
    data.addColumn('string', 'Modul');
    data.addColumn('number', 'Erledigt');
    data.addColumn({ type: 'string', role: 'style' }); 



    for (let i = 0; i < modules.length; i++) {
        const module = modules[i];
        const color = module.color;

        data.addRow([module.name, module.completed, color]);
    }

    const options = {
        title: 'Lernfortschritt',
        hAxis: {
            title: 'Module',
            format: 'text',
        },
        vAxis: {
            title: 'Erledigt',
            minValue: 0,
        },
        legend: 'none',
		forceSVG: true
    };

    const chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}

	google.charts.load('current', { packages: ['corechart', 'bar'] });
    google.charts.setOnLoadCallback(() => {
            renderModules();
            drawChart();
        });
