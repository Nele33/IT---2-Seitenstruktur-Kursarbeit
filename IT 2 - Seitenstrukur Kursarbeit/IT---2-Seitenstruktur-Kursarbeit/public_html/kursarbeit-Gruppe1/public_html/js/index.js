// JavaScript Document



const menueStrukturIndex = [
    new MenuPunkt('Startseite', 'index.html'),
    new MenuPunkt('unsere Anwendungen', '', [
        new MenuPunkt('6053347lkramer', 'public_html/6053347lkramer/index.html'),
        new MenuPunkt('6053650mhopp', 'public_html/6053650mhopp/index.html'),
		new MenuPunkt('6053997nbusch', 'public_html/6053997nbusch/index.html')
    ]),
    new MenuPunkt('Aufgabenbeschreibung', 'aufgabenbeschreibung.html'),

];

const menueIndexSeite = new Menue('menuContainer', menueStrukturIndex);

function init()
	{
		menueIndexSeite.menueRendern();	
		htmlTabelleAusgeben(zentraleDatenStudent1,'indexTbl6053347lkramer');
		htmlTabelleAusgeben(zentraleDatenStudent2,'indexTbl6053650mhopp');
		htmlTabelleAusgeben(zentraleDatenStudent2,'indexTbl6053997nbusch');
		console.info('Init-function wurde aufgerufen. Dokument ist geladen');
	}



document.addEventListener('DOMContentLoaded',init);

function generateTableContent(dataArray, tbodyId) {
    let tbody = document.getElementById(tbodyId);
    dataArray.forEach(data => {
        let row = document.createElement('tr');
        Object.values(data).forEach(value => {
            let cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
        });
        tbody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    generateTableContent(daten6053347lkramer, 'tbody6053347lkramer');
    generateTableContent(daten6053650mhopp, 'tbody6053650mhopp');
    generateTableContent(daten6053997nbusch, 'tbody6053997nbusch');
});


hfonl,n ,nbjv 
