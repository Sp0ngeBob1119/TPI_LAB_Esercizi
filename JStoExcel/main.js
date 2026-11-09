document.getElementById("btnEsporta").addEventListener("click", function () {
  if (typeof XLSX === "undefined") {
    alert("La libreria SheetJS non è stata caricata. Controlla il collegamento Internet o il percorso dello script.");
    return;
  }

  try {
    const tabella = document.getElementById("tabellaDati");

    if (!tabella) {
      alert("Tabella con id 'tabellaDati' non trovata.");
      return;
    }

    const documento = XLSX.utils.table_to_book(tabella, {
      sheet: "Dati"
    });

    XLSX.writeFile(documento, "Esportazione.xlsx");
  } catch (errore) {
    console.error(errore);
    alert("Errore durante l'esportazione: " + errore.message);
  }
});