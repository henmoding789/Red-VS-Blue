# Red vs Blue Quiz

Ein interaktives **Red vs Blue Quiz**, bei dem zwei Teams gegeneinander antreten.  
Die Teams beantworten Multiple-Choice-Fragen, und das Punktesystem wertet aus:

- **Beide Teams richtig:** +1 Punkt pro Team  
- **Nur ein Team richtig:** +2 Punkte für das richtige Team  

Die Anzeige erfolgt über einen PC als Server/Scoreboard, während die Teams über Handys antworten.

---

## Features

- Node.js + Socket.IO Echtzeit-Quiz  
- Multiple-Choice Fragen, konfigurierbar via `config.json`  
- Punktestand-Animation („hochzählende“ Punkte)  
- Nächste Frage per Button auf PC  
- Live Scoreboard für Zuschauer  

---

## Projektstruktur

Red-vs-Blue-Quiz/
├─ server.js # Node.js Server
├─ config.json # Fragen und Antworten
├─ package.json # Node.js Projektdatei
└─ public/## Installation

---

## Installation
1. Repository klonen:

git clone https://github.com/henmoding789/Red-VS-Blue.git 
cd red-vs-blue-quiz
├─ index.html # PC / Scoreboard Ansicht
├─ blue.html # Team Blue Ansicht
└─ red.html # Team Red Ansicht

2. Abhängigkeiten installieren:

npm install

3.Server starten:

node server.js

Browser öffnen:

PC / Scoreboard: http://localhost:3000

Team Blue: http://localhost:3000/blue.html

Team Red: http://localhost:3000/red.html

---

## Fragen anpassen

Die Fragen befinden sich in config.json.
Beispiel:

{
  "questions": [
    { "q": "5 + 3 = ?", "options": ["6", "7", "8", "9"], "correct": "8" },
    { "q": "Hauptstadt von Deutschland?", "options": ["Berlin", "Hamburg", "München", "Bonn"], "correct": "Berlin" }
  ]
}


q: die Frage

options: die Antwortmöglichkeiten

correct: die richtige Antwort

Wichtig: JSON korrekt formatieren (Kommas zwischen den Fragen!)
