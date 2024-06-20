// JavaScript Document



const menueStrukturIndex = [
    new MenuPunkt('Startseite', 'index.html'),
    new MenuPunkt('unsere Anwendungen', '', [
        new MenuPunkt('6053347lkramer', '6053347lkramer/index.html'),
        new MenuPunkt('6053650mhopp', '6053650mhopp/index.html'),
		new MenuPunkt('6053997nbusch', '6053997nbusch/index.html')
    ]),
    new MenuPunkt('Aufgabenbeschreibung', 'aufgabenbeschreibung.html'),

];

const menueIndexSeite = new Menue('menuContainer', menueStrukturIndex);

function init()
	{
		menueIndexSeite.menueRendern();	
		htmlTabelleAusgeben(zentraleDatenStudent1,'indexTblStudent1');
		htmlTabelleAusgeben(zentraleDatenStudent2,'indexTblStudent2');
		console.info('Init-function wurde aufgerufen. Dokument ist geladen');
	}



document.addEventListener('DOMContentLoaded',init);