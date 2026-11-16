document.getElementById("btnEsporta").addEventListener("click", esportaPDF);

function esportaPDF() {
  // Verifica che le librerie siano state caricate.
  if (!window.jspdf || typeof window.jspdf.jsPDF.API.autoTable !== "function") {
    alert("Una delle librerie PDF non è stata caricata. Controlla eventuali blocchi ai collegamenti CDN e ricarica la pagina.");
    return;
  }

  const { jsPDF } = window.jspdf;
  const orientamento = document.getElementById("orientamento").value;

  const pdf = new jsPDF({
    orientation: orientamento,
    unit: "mm",
    format: "a4"
  });

  pdf.setFontSize(16);
  pdf.text("Elenco persone", 14, 15);

  pdf.autoTable({
    html: "#tabellaDati",
    startY: 22,
    theme: "grid",
    styles: {
      fontSize: 10,
      cellPadding: 3,
      overflow: "linebreak"
    },
    headStyles: {
      fillColor: [41, 128, 185],
      textColor: [255, 255, 255]
    },
    showHead: "everyPage",
    margin: { top: 15, right: 14, bottom: 15, left: 14 }
  });

  pdf.save("ElencoPersone.pdf");
}
