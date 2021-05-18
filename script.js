
var userScore = 0;

var userIncorrect = 0;

var picsSRC = ["img/head.png", "img/headplusbody.png", "img/headarm.png", "img/headarm2.png", "img/headleg.png", "img/headleg2.png", "img/headLAST.png"];

var picsIndex = -1;

var historyQuestions = ["How many presidents have there been to this date?", "Who is the first female vice president?", "What is the name of the ship that brought the Pilgrims to America?", "Who was the Confederate president during the Civil War?", "Who has the biggest signature on the Declaration of independence?"];

var historyAnswers = ["46", "Kamala Harris", "Mayflower", "Jefferson Davis", "John Hancock"];

var mathQuestions = ["Whats the derivative of x^2?", "How many sides does a hexagon have?", "Is pi rational or irrational?", "What number does not have a roman numeral?", "How many sides are on dice?"];

var mathAnswers = ["2x", "6", "irrational", "0", "7"];

var chemistryQuestions = ["What element is the symbol O?", "How many elements are on the period table?", "Whats the symbol for silver?", "Whats the lightest element?", "Which elements make up water?"];

var chemistryAnswers = ["Oxygen", "118", "Ag", "Hydrogen", "H20"];

var biologyQuestions = ["The basic unit of all living things?", "What makes up about 70 percent of most living things?", "Trisomy-21 is popularly known as what?", "What are the small bones that make up a backbone called?", "What is the human body's largest organ?"];

var biologyAnswers = ["Cells", "Water", "Down Syndrome", "Vertebrae", "Skin"];

var entertainmentQuestions = ["How many albums does harry styles have?", "How many one direction members were there?", "What is the name of Michelle Obamas book?", "What job did Ross Geller have on friends?", "What was the name of the monkey on friends?"];

var entertainmentAnswers = ["2", "5", "becoming", "paleontologist", "marcel"];

function buttonClicked(category, value){


    var buttonCategory = category;

    var buttonValue = value;

    if(buttonCategory == "history"){
        if(buttonValue == 100){
            document.getElementById("questionDisplay").innerHTML = historyQuestions[0];
            document.getElementById("subject1Button100").disabled = true;
            document.getElementById("subject1Button100").style.color = "gray";
        }
        else if(buttonValue == 200){
            document.getElementById("questionDisplay").innerHTML = historyQuestions[1];
            document.getElementById("subject1Button200").disabled = true;
            document.getElementById("subject1Button200").style.color = "gray";
        }
        else if(buttonValue == 300){
            document.getElementById("questionDisplay").innerHTML = historyQuestions[2];
            document.getElementById("subject1Button300").disabled = true;
            document.getElementById("subject1Button300").style.color = "gray";
        }
        else if(buttonValue == 400){
            document.getElementById("questionDisplay").innerHTML = historyQuestions[3];
            document.getElementById("subject1Button400").disabled = true;
            document.getElementById("subject1Button400").style.color = "gray";
        }
        else if(buttonValue == 500){
            document.getElementById("questionDisplay").innerHTML = historyQuestions[4];
            document.getElementById("subject1Button500").disabled = true;
            document.getElementById("subject1Button500").style.color = "gray";
        }
    }
    else if(buttonCategory == "math"){
        if(buttonValue == 100){
            document.getElementById("questionDisplay").innerHTML = mathQuestions[0];
            document.getElementById("subject2Button100").disabled = true;
            document.getElementById("subject2Button100").style.color = "gray";
        }
        else if(buttonValue == 200){
            document.getElementById("questionDisplay").innerHTML = mathQuestions[1];
            document.getElementById("subject2Button200").disabled = true;
            document.getElementById("subject2Button200").style.color = "gray";
        }
        else if(buttonValue == 300){
            document.getElementById("questionDisplay").innerHTML = mathQuestions[2];
            document.getElementById("subject2Button300").disabled = true;
            document.getElementById("subject2Button300").style.color = "gray";
        }
        else if(buttonValue == 400){
            document.getElementById("questionDisplay").innerHTML = mathQuestions[3];
            document.getElementById("subject2Button400").disabled = true;
            document.getElementById("subject2Button400").style.color = "gray";
        }
        else if(buttonValue == 500){
            document.getElementById("questionDisplay").innerHTML = mathQuestions[4];
            document.getElementById("subject2Button500").disabled = true;
            document.getElementById("subject2Button500").style.color = "gray";
        }
    }
    else if(buttonCategory == "chemistry"){
        if(buttonValue == 100){
            document.getElementById("questionDisplay").innerHTML = chemistryQuestions[0];
            document.getElementById("subject3Button100").disabled = true;
            document.getElementById("subject3Button100").style.color = "gray";
        }
        else if(buttonValue == 200){
            document.getElementById("questionDisplay").innerHTML = chemistryQuestions[1];
            document.getElementById("subject3Button200").disabled = true;
            document.getElementById("subject3Button200").style.color = "gray";
        }
        else if(buttonValue == 300){
            document.getElementById("questionDisplay").innerHTML = chemistryQuestions[2];
            document.getElementById("subject3Button300").disabled = true;
            document.getElementById("subject3Button300").style.color = "gray";
        }
        else if(buttonValue == 400){
            document.getElementById("questionDisplay").innerHTML = chemistryQuestions[3];
            document.getElementById("subject3Button400").disabled = true;
            document.getElementById("subject3Button400").style.color = "gray";
        }
        else if(buttonValue == 500){
            document.getElementById("questionDisplay").innerHTML = chemistryQuestions[4];
            document.getElementById("subject3Button500").disabled = true;
            document.getElementById("subject3Button500").style.color = "gray";
        }
    }
    else if(buttonCategory == "biology"){
        if(buttonValue == 100){
            document.getElementById("questionDisplay").innerHTML = biologyQuestions[0];
            document.getElementById("subject4Button100").disabled = true;
            document.getElementById("subject4Button100").style.color = "gray";
        }
        else if(buttonValue == 200){
            document.getElementById("questionDisplay").innerHTML = biologyQuestions[1];
            document.getElementById("subject4Button200").disabled = true;
            document.getElementById("subject4Button200").style.color = "gray";
        }
        else if(buttonValue == 300){
            document.getElementById("questionDisplay").innerHTML = biologyQuestions[2];
            document.getElementById("subject4Button300").disabled = true;
            document.getElementById("subject4Button300").style.color = "gray";
        }
        else if(buttonValue == 400){
            document.getElementById("questionDisplay").innerHTML = biologyQuestions[3];
            document.getElementById("subject4Button400").disabled = true;
            document.getElementById("subject4Button400").style.color = "gray";
        }
        else if(buttonValue == 500){
            document.getElementById("questionDisplay").innerHTML = biologyQuestions[4];
            document.getElementById("subject4Button500").disabled = true;
            document.getElementById("subject4Button500").style.color = "gray";
        }
    }
    else{
        //Entertainment
        if(buttonValue == 100){
            document.getElementById("questionDisplay").innerHTML = entertainmentQuestions[0];
            document.getElementById("subject5button100").disabled = true;
            document.getElementById("subject5Button100").style.color = "gray";
        }
        else if(buttonValue == 200){
            document.getElementById("questionDisplay").innerHTML = entertainmentQuestions[1];
            document.getElementById("subject5button200").disabled = true;
            document.getElementById("subject5Button200").style.color = "gray";
        }
        else if(buttonValue == 300){
            document.getElementById("questionDisplay").innerHTML = entertainmentQuestions[2];
            document.getElementById("subject5button300").disabled = true;
            document.getElementById("subject5Button300").style.color = "gray";
        }
        else if(buttonValue == 400){
            document.getElementById("questionDisplay").innerHTML = entertainmentQuestions[3];
            document.getElementById("subject5button400").disabled = true;
            document.getElementById("subject5Button400").style.color = "gray";
        }
        else if(buttonValue == 500){
            document.getElementById("questionDisplay").innerHTML = entertainmentQuestions[4];
            document.getElementById("subject5button500").disabled = true;
            document.getElementById("subject5Button500").style.color = "gray";
        }
    }
}

var correctAnswerInputted = false;

//winners,

function submit(){
    correctAnswerInputted = false;
    var userAnswer = document.getElementById("input1").value;
    for(var x=0;x<4;x++){
        if(userAnswer == historyAnswers[x] || userAnswer == mathAnswers[x] || userAnswer == chemistryAnswers[x] || userAnswer == biologyAnswers[x] || userAnswer == entertainmentAnswers[x]){
            correctAnswerInputted = true;
            document.getElementById("questionResult").innerHTML = "Correct!";
            document.getElementById("questionResult").style.color = "green";
            if(x == 0){
                userScore = userScore + 100;
            }
            else if(x == 1){
                userScore = userScore + 250;
            }
            else if(x == 2){
                userScore = userScore + 500;
            }
            if(x == 3){
                userScore = userScore + 1000;
            }
        }
    }
    if(!correctAnswerInputted){
        document.getElementById("questionResult").innerHTML = "Incorrect!";
        document.getElementById("questionResult").style.color = "red";

        userIncorrect++;

        var subtractFromUserPoints = Math.floor((Math.random() * 1000) + 1);

        userScore = userScore - subtractFromUserPoints;

        picsIndex++;

        alert("pics index is: "  + picsIndex);
        document.getElementById("pics").src = picsSRC[picsIndex];
    }
    document.getElementById("userScore").innerHTML = "Score: $" + userScore;

    document.getElementById("input1").value = "";
    determineWinner();

} 

function determineWinner() {
    if(userScore == 1000){
        //winning
        document.getElementById("pics").src = "img/uwin.jpg"
    }

    if(userIncorrect >=7 || userScore <= -2000){
        //two losing conditions: 7 attempts or less than 2000 points
        document.getElementById("pics").src = "img/ulose.png"

    }

}

function resetGame() {
    userScore = 0;
    document.getElementById("questionDisplay").innerHTML = "";
    document.getElementById("userScore").innerHTML = "Score: $" + userScore;
    document.getElementById("input1").value = ""
}