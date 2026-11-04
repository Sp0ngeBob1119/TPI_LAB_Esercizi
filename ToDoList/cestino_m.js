let myButton = document.getElementById("btRipristina");
let myButtonE = document.getElementById("btElimina");
let myList = document.getElementById("toDoListDiv");
let mytable = document.getElementById("toDoListTable");
let myTbody = document.getElementById("toDoListBody");
let btnList = document.getElementById("btnCambiaPagina")

let datiC = []
let dati=[]

// Caricamento iniziale dal LocalStorage al caricamento della pagina
window.onload = function() {
    datiC = JSON.parse(localStorage.getItem("datiC")) || [];
    visualizzaTabella();
};

btnList.onclick = function(){
    window.location.href="index.html"
}

// Funzione centrale per disegnare la tabella basandosi sull'array dati
function visualizzaTabella() {
    myTbody.innerHTML = ""; // Pulisce la tabella prima di ridegnarla

    datiC.forEach(function(riga, index) {
        let myTr = document.createElement("tr");

        let tdN = document.createElement("td");
        tdN.innerHTML = index + 1; // L'indice visivo parte da 1
        myTr.appendChild(tdN);

        let tdSel = document.createElement("td");
        tdSel.innerHTML = riga.Csel;
        myTr.appendChild(tdSel);

        let tdTask = document.createElement("td");
        tdTask.innerHTML = riga.Ctask;
        myTr.appendChild(tdTask);

        let tdData = document.createElement("td");
        tdData.innerHTML = riga.Cdata;
        myTr.appendChild(tdData);

        let tdNote = document.createElement("td");
        tdNote.innerHTML = riga.Cnote;
        myTr.appendChild(tdNote);

        let tdAzioni = document.createElement("td");
        let btnEliminaSingolo = document.createElement("button");
        btnEliminaSingolo.innerHTML = "X";
        
        // Eliminazione di una singola riga basata sull'indice dell'array
        btnEliminaSingolo.onclick = function() {
            datiC.splice(index, 1); // Rimuove l'elemento dall'array
            localStorage.setItem("datiC", JSON.stringify(datiC))
            visualizzaTabella(); // Ridisegna la tabella aggiornata
            mySel.focus();
        };
        
        tdAzioni.appendChild(btnEliminaSingolo);
        myTr.appendChild(tdAzioni);


        let tdAzioniR = document.createElement("td");
        let btnRecuperoSingolo = document.createElement("button");
        btnRecuperoSingolo.innerHTML = "V";
        
        // Eliminazione di una singola riga basata sull'indice dell'array
        btnRecuperoSingolo.onclick = function() {
            dati.push(datiC[index])
            datiC.splice(index, 1); // Rimuove l'elemento dall'array
            localStorage.setItem("datiC", JSON.stringify(datiC))
            localStorage.setItem("dati", JSON.stringify(dati))
            visualizzaTabella(); // Ridisegna la tabella aggiornata
            mySel.focus();
        };
        
        tdAzioniR.appendChild(btnRecuperoSingolo);
        myTr.appendChild(tdAzioniR);

        myTbody.appendChild(myTr);
    });
}
myButtonE.onclick = function elimina() {
    let risposta = confirm("Vuoi procedere con l'eliminazione dell'intera lista?");
    if (risposta) {
        datiC = []; // Svuota l'array
        localStorage.removeItem("datiC"); // Rimuove i dati dal localStorage
        visualizzaTabella(); // Aggiorna la tabella a schermo
        mySel.focus();
    }   
};

myButton.onclick = function recupera() {
    let risposta = confirm("Vuoi procedere con il recupero dell'intera lista?");
    if (risposta) {
        datiC.forEach(function(riga, index) {
            dati.push(riga)
        })
        datiC = []; // Svuota l'array
        localStorage.removeItem("datiC"); // Rimuove i dati dal localStorage
        localStorage.setItem("dati", JSON.stringify(dati))
        visualizzaTabella(); // Aggiorna la tabella a schermo
        mySel.focus();
    }   
};