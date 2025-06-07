let userScr = 0;
let drawScr = 0;
let cpuScr = 0;

function makeChoice(userChoice) {

    document.getElementById("choices").style.display = "none"; // απόκρυψη όταν έχει πατηθεί μία επιλογή

    fetch('/.netlify/functions/game', {
        method: 'POST',
        body: JSON.stringify({ userChoice: userChoice }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {

            document.getElementById('user_choiceText').innerText = `Επέλεξες: ${userChoice}`;
            document.getElementById('cpu_choiceText').innerText = `Επέλεξε: ${data.computerChoice}`;
            document.getElementById('result').innerText = data.result;

            //ενημέωση των σκορ
            if (data.result === "Κέρδισες!") {
                userScr++;
            }
            else if (data.result === "Ισοπαλία!") {
                drawScr++;
            }
            else {
                cpuScr++;
            }

            // ενημέρωση του scoreboard στο header
            document.getElementById('user_score').innerText = userScr;
            document.getElementById('draws_score').innerText = drawScr;
            document.getElementById('cpu_score').innerText = cpuScr;

            //κουμπί παίξε ξανά
            document.getElementById("result-display").style.display = "block";
            document.getElementById("play-again").style.display = "block";
        });
}

function resetGame() {
    // επανεμφάνιση των επιλογών
    document.getElementById("choices").style.display = "block";

    // Απόκρυψη του αποτελέσματος και των επιλογών που εμφανίστηκαν μετά το γύρο
    document.getElementById("result-display").style.display = "none";

    // Απόκρυψη του κουμπιού "Παίξε Ξανά"
    document.getElementById("play-again").style.display = "none";

    // καθαρισμός κειμένων
    document.getElementById("user_choiceText").innerText = "";
    document.getElementById("cpu_choiceText").innerText = "";
    document.getElementById("result").innerText = "";
}