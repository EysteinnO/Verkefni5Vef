var fetchQuestions = document.getElementById("questions");
var index = "";
var inquiry = [];

function questions(question, answers, rightAnswer){
    this.question = question;
    this.answers = answers;
    this.rightAnswer = rightAnswer;
    this.template = function(){

        var first = '<div class="question">' +
            "<h2>Question: "+ this.question + "</h2>"
        var answer = "<h3>" + "Answers" + "</h3>";
        answer += "<ul>";
        for(let i=0;i<this.answers.length;i++) {
            answer +=  "<li>" + this.answers[i] + "</li>";
        }
        answer += "</ul>";

        var last = "</div>";

        return first + answer + last;
    }
}

inquiry.push(new questions("What is 2 + 2 ?",['2','3','13','4'],'4'));
inquiry.push(new questions('Is Jim Carrey older than 50?',['True','False'],'True'));

for (var i = 0; i < inquiry.length; i++){
    index += inquiry[i].template();
}

fetchQuestions.innerHTML = index;
