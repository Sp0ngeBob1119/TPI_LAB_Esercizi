const pulsante = document.getElementById("carica");
const stato = document.getElementById("stato");
const elenco = document.getElementById("elenco");
const url = "https://jsonplaceholder.typicode.com/users";
pulsante.addEventListener("click", caricaArticoli);
async function caricaArticoli() {
 pulsante.disabled = true;
 stato.textContent = "Caricamento in corso...";
 elenco.replaceChildren();
 try {
 const risposta = await fetch(url);
 if (!risposta.ok) {
 throw new Error(`Errore HTTP ${risposta.status}`);
 }
 const articoli = await risposta.json();
 for (const articolo of articoli) {
 const voce = document.createElement("li");
 voce.textContent = articolo.name+" - "+articolo.email;
 elenco.appendChild(voce);
 }
 stato.textContent = `Articoli caricati: ${articoli.length}`;
 } catch (errore) {
 stato.textContent = `Impossibile caricare gli articoli. ${errore.message}`;
 } finally {
 pulsante.disabled = false;
 }
}
