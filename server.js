const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const fs = require("fs");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

// 👉 Fragen aus config.json laden
const config = JSON.parse(fs.readFileSync("config.json", "utf8"));
let questions = config.questions;

let currentQuestion = 0;
let scores = { blue: 0, red: 0 };
let answers = { blue: null, red: null };

io.on("connection", socket => {
  console.log("Neuer Spieler:", socket.id);

  // Erste Frage direkt schicken
  socket.emit("newQuestion", {
    question: questions[currentQuestion],
    scores
  });

  socket.on("answer", ({ team, choice }) => {
    answers[team] = choice;
    console.log(`${team} antwortet: ${choice}`);
  });

  socket.on("nextQuestion", () => {
    evaluateAnswers();
    currentQuestion++;
    if (currentQuestion < questions.length) {
      answers = { blue: null, red: null };
      io.emit("newQuestion", {
        question: questions[currentQuestion],
        scores
      });
    } else {
      io.emit("gameOver", scores);
    }
  });
});

function evaluateAnswers() {
  const correct = questions[currentQuestion].correct;
  const blueCorrect = answers.blue === correct;
  const redCorrect = answers.red === correct;

  if (blueCorrect && redCorrect) {
    scores.blue++;
    scores.red++;
  } else if (blueCorrect && !redCorrect) {
    scores.blue += 2;
  } else if (!blueCorrect && redCorrect) {
    scores.red += 2;
  }
}

server.listen(3000, () => {
  console.log("Server läuft auf http://localhost:3000");
});
