// Aggiunge una nuova riga alla tabella
function aggiungiRiga() {
    let input = document.getElementById("txtDescrizione");
    let descrizione = input.value.trim();

    if (descrizione === "") {
        alert("Inserire una descrizione");
        return;
    }

    let tabella = document.getElementById("tabellaDati");
    let tr = document.createElement("tr");

    // Prima colonna: checkbox
    let tdCheck = document.createElement("td");
    let check = document.createElement("input");
    check.type = "checkbox";
    check.className = "selezione";
    tdCheck.appendChild(check);

    // Seconda colonna: data e ora
    let tdData = document.createElement("td");
    tdData.textContent = new Date().toLocaleString("it-IT");

    // Terza colonna: descrizione
    let tdDescrizione = document.createElement("td");
    tdDescrizione.textContent = descrizione;

    tr.appendChild(tdCheck);
    tr.appendChild(tdData);
    tr.appendChild(tdDescrizione);
    tabella.appendChild(tr);
    console.log(tabella)
    input.value = "";
    input.focus();
}

// Elimina le righe selezionate
function eliminaSelezionati() {
    let checkbox = document.querySelectorAll(".selezione:checked");
    if (checkbox.length === 0) {
        alert("Selezionare almeno una riga");
        return;
    }
    if (!confirm("Eliminare le righe selezionate?")) {
        return;
    }
    checkbox.forEach(function(check) {
        check.closest("tr").remove();
    });
}

// Svuota tutta la tabella
function svuotaTabella() {
    if (!confirm("Vuoi svuotare tutta la tabella?")) {
        return;
    }
    let tabella = document.getElementById("tabellaDati");
    tabella.innerHTML = "";
}
