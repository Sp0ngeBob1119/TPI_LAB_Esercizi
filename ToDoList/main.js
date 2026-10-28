let myButton = document.getElementById("btGenera");
let myButtonE = document.getElementById("btElimina");
let myList = document.getElementById("toDoListDiv");
let mytable = document.getElementById("toDoListTable");
let myTbody = document.getElementById("toDoListBody");
let myTask = document.getElementById("txtTask");
let mySel = document.getElementById("txtSel");
let myData = document.getElementById("txtData");
let myNote = document.getElementById("txtNote");

let dati = [];
let datiC = []

// Caricamento iniziale dal LocalStorage al caricamento della pagina
window.onload = function() {
    dati = JSON.parse(localStorage.getItem("dati")) || [];
    visualizzaTabella();
};

// Funzione centrale per disegnare la tabella basandosi sull'array dati
function visualizzaTabella() {
    myTbody.innerHTML = ""; // Pulisce la tabella prima di ridegnarla

    dati.forEach(function(riga, index) {
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
            datiC.push(dati[index])
            dati.splice(index, 1); // Rimuove l'elemento dall'array
            localStorage.setItem("dati", JSON.stringify(dati)); // Aggiorna il localStorage
            localStorage.setItem("datiC", JSON.stringify(datiC))
            visualizzaTabella(); // Ridisegna la tabella aggiornata
            mySel.focus();
        };
        
        tdAzioni.appendChild(btnEliminaSingolo);
        myTr.appendChild(tdAzioni);

        myTbody.appendChild(myTr);
    });
}

// Aggiunta di un nuovo elemento
myButton.onclick = function lista() {
    let task = myTask.value.trim();
    let sel = mySel.value;
    let data = myData.value;
    let note = myNote.value.trim();

    if (task === "" && sel === "") {
        alert("Inserisci almeno un campo obbligatorio!");
        return;
    }

    // 1. Prima salva nell'array e nel LocalStorage
    dati.push({
        Ctask: task,
        Csel: sel,
        Cdata: data,
        Cnote: note
    });

    localStorage.setItem("dati", JSON.stringify(dati));

    // 2. Poi aggiorna la visualizzazione della tabella
    visualizzaTabella();

    // Pulisce i campi di input
    myTask.value = "";
    mySel.value = "";
    myData.value = "";
    myNote.value = "";
    mySel.focus();
};

// Eliminazione di tutta la lista
myButtonE.onclick = function elimina() {
    let risposta = confirm("Vuoi procedere con l'eliminazione dell'intera lista?");
    if (risposta) {
        dati.forEach(function(riga, index) {
            datiC.push(riga)
        })
        dati = []; // Svuota l'array
        localStorage.removeItem("dati"); // Rimuove i dati dal localStorage
        localStorage.setItem("datiC", JSON.stringify(datiC))
        visualizzaTabella(); // Aggiorna la tabella a schermo
        mySel.focus();
    }   
};