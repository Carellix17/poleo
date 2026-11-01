# Poleo — sistema visivo

La personalità è quella di un mercatino scolastico curato e amichevole: verde bosco, carta chiara, salvia e un accento miele. Il marchio e le copertine illustrate restano originali di Poleo.

## Colori e caratteri

- Bosco `#244e40`: azioni, home e navigazione.
- Inchiostro `#203e31`: testo.
- Salvia `#e5eddf`: superfici di supporto.
- Carta `#fffefa`, fondo `#f6f7f2`: lettura e respiro.
- Miele `#e7b568`: dettagli e inviti a vendere.
- Titoli: stack di caratteri di sistema con `ui-rounded`; testo: stack sans di sistema. Nessun font esterno.

## Schemi dell’interfaccia

Home: un solo elemento visivo forte, seguito da ricerca, categorie, annunci e attività personali. Cerca: filtri e griglia densa, senza un secondo hero. Vendita: foto prima di tutto, poi il contenuto e i dettagli pertinenti, prezzo suggerito, anteprima e caricamento.

La navbar è un contenitore fluttuante con cinque destinazioni e Vendi evidenziato al centro. Tutti i dati rimangono locali; le bozze usano lo stesso archivio della demo.

## Movimento e aptica

Un ingresso della home di 700 ms, transizioni di 150–200 ms per azioni e finestre, nessuna animazione obbligatoria per vedere i contenuti. `prefers-reduced-motion` disattiva il movimento. `navigator.vibrate` viene chiamato solo dopo interazioni e se la preferenza aptica è attiva; non è garantito su ogni browser o dispositivo.

## Fonti del flusso

- Vinted, Uploading step by step: https://www.vinted.co.uk/help/4/375
- Subito, Come pubblicare un annuncio: https://assistenza.subito.it/hc/it/articles/360001165449-Come-pubblicare-un-annuncio
- MDN, Navigator.vibrate: https://developer.mozilla.org/en-US/docs/Web/API/Navigator/vibrate
