# Poleo — il mercatino del Cartesio

Demo in italiano per il Liceo Cartesio di Triggiano: libri scolastici e altri oggetti usati, con ritiro dentro la scuola.

**Apri Poleo:** https://carellix17.github.io/poleo/

## Nuova interfaccia

- Home distinta dalla ricerca, con categorie, ultimi arrivi, libri per la propria classe e attività personali.
- Barra fluttuante con Home, Cerca, Vendi, Messaggi e Profilo.
- Caricamento ispirato alla sequenza ufficiale Vinted: foto, titolo/descrizione, categoria/dettagli, condizioni, prezzo e pubblicazione. Su Poleo la consegna resta dentro la scuola.
- Bozza salvata sul dispositivo, anteprima e scelta della foto di copertina.
- Feedback aptico facoltativo sui browser compatibili, disattivabile dal Profilo.
- Animazioni brevi che rispettano la preferenza di movimento ridotto.

## Sul telefono

Apri il sito pubblicato tramite GitHub Pages in **Chrome su Android**, poi usa **⋮ → Aggiungi a schermata Home → Installa** oppure il pulsante **Installa app** dentro Poleo. In Safari su iPhone: **Condividi → Aggiungi alla schermata Home**.

L’icona avvia una finestra dedicata senza la barra del browser. Dopo la prima apertura online e la preparazione della cache, l’app si apre anche offline. Nessun abbonamento, chiave API, backend, login reale o acquisto in-app.

## Versione HTML singola

`Poleo.html` è la demo autosufficiente: scaricala e aprila con un browser anche senza un server. La versione installabile usa invece `index.html`, `manifest.webmanifest`, `sw.js` e le icone e richiede HTTPS per l’installazione.

## Pubblicazione gratuita con GitHub Pages

1. Repository pubblico.
2. **Settings → Pages → Deploy from a branch**.
3. Branch **main**, cartella **/(root)**, quindi **Save**.
4. Attendi la pubblicazione e apri il link mostrato da GitHub.

Il progetto non richiede build o dipendenze. `.nojekyll` abilita la pubblicazione dei file statici.

## Cosa puoi provare

- Onboarding: nome utente e classe, con conferma dei 14 anni e accettazione del regolamento.
- 12 libri inventati con ISBN valido e venditori diversi, due altri oggetti e due annunci personali dimostrativi.
- Ricerca, filtri e ordinamento; creazione e modifica annunci con fino a tre foto compresse.
- Controllo ISBN-10/13, ricerca Open Library / Google Books e catalogo locale senza rete.
- Chat automatica, proposta di ritiro, conferma, prenotazione e consegna simulata.
- Segnalazioni e pannello di moderazione dimostrativo nel Profilo.
- Ripristino completo con **Profilo → Ripristina demo**.

**Tutti i contenuti iniziali sono fittizi.** I dati creati restano nel browser: aprire il link su un altro telefono avvia una demo indipendente. Questo prototipo non è un servizio ufficiale della scuola e non gestisce pagamenti o scambi reali.

## Verifica prima della presentazione

Apri l’app con Internet una volta, installala e prova a riaprirla in modalità aereo. Per evitare attese durante la presentazione, usa il catalogo demo anziché la ricerca online degli ISBN.
