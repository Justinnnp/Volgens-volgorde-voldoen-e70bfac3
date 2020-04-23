function check() {


    const arrayAnswers = [
        "Parijs",
        8,
        "IJsselmeer",
        ["Volkswagen", "Audi", "Opel", "Porsche", "BMW", "Mercedes", "Mercedes-Benz"],
        ["Texel", "Vlieland", "Terschelling", "Ameland", "Schiermonnikoog"],

    ];

    const values = [
        document.getElementById("input1").value,
        document.getElementById("input2").value,
        document.getElementById("input3").value,
        document.getElementById("input4").value,
        document.getElementById("input5").value
    ]
    if (arrayAnswers[0] == values[0] && arrayAnswers[1] == values[1] && arrayAnswers[2] == values[2] && arrayAnswers[3].includes(values[3]) && arrayAnswers[4].includes(values[4])) {

        for (i = 0; i < arrayAnswers.length; i++) {
            document.getElementById("answer").innerText = `Je hebt ${[i]} antwoorden goed!`;
            document.getElementById("input1").style.background = "green";
            document.getElementById("input2").style.background = "green";
            document.getElementById("input3").style.background = "green";
            document.getElementById("input4").style.background = "green";
            document.getElementById("input5").style.background = "green";
        }
    }
}