let pos = 0, board, qus, choices, A, B, C, cor = 0;

let questions = [
    ["Shortcut of copy", "CTRL+A", "CTRL+S", "CTRL+C", "C"],
    ["10+10", "20", "35", "48", "A"],
    ["100+250", "200", "800", "350", "C"],
    ["10+100", "50", "110", "55", "B"],
];

function DisplayQuestion() {
    board = document.getElementById("board");

    if (pos >= questions.length) {
        board.innerHTML = "<h2> You Got " + cor + "of "  + questions.length + "</h2>";
        document.getElementById("status").innerHTML = "Quiz Completed";
        pos = 0;
        cor = 0;
        return false;

    } document.getElementById("status").innerHTML = "Question " + (pos + 1) + " of " + questions.length ;

    qus = questions[pos][0];
    A = questions[pos][1];
    B = questions[pos][2];
    C = questions[pos][3];

    board.innerHTML = "<h3> " + qus + "</h3>";

    board.innerHTML += "<lable><input type='radio' name='choices' value='A'> " + A + "</lable>";

    board.innerHTML += "<lable><input type='radio' name='choices' value='B'> " + B + "</lable>";

    board.innerHTML += "<lable><input type='radio' name='choices' value='C'> " + C + "</lable>";

    board.innerHTML += "<button onclick='checkAnswer()'> Submit Answer </button>"

}

function checkAnswer() {
    let choice;
    choices = document.getElementsByName("choices");
    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            choice = choices[i].value;
        }
    }
    if (choice == questions[pos][4]) {
        cor++;
    }
    pos++;
    DisplayQuestion()
}