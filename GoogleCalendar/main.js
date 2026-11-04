const form = document.getElementById("formEvento");

function formatoDataGoogle(data) {
  // Da: 2026-11-10T09:00:00.000Z
  // A:  20261110T090000Z
  return data.toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}Z$/, "Z");
}

function apriGoogleCalendar(evento) {
  const parametri = new URLSearchParams({
    action: "TEMPLATE",
    text: evento.titolo,
    dates:
      formatoDataGoogle(evento.inizio) + "/" +
      formatoDataGoogle(evento.fine),
    details: evento.descrizione,
    location: evento.luogo
  });

  const url =
    "https://calendar.google.com/calendar/render?" +
    parametri.toString();

  window.open(url, "_blank", "noopener,noreferrer");
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const titolo = document.getElementById("titolo").value.trim();
  const inizio = new Date(document.getElementById("inizio").value);
  const fine = new Date(document.getElementById("fine").value);

  if (!titolo) {
    alert("Inserisci il titolo dell'evento.");
    return;
  }

  if (
    Number.isNaN(inizio.getTime()) ||
    Number.isNaN(fine.getTime()) ||
    fine <= inizio
  ) {
    alert("Inserisci date valide, con la fine successiva all'inizio.");
    return;
  }

  apriGoogleCalendar({
    titolo: titolo,
    inizio: inizio,
    fine: fine,
    luogo: document.getElementById("luogo").value,
    descrizione: document.getElementById("descrizione").value
  });
});