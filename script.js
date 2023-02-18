const QuizDB = [
    {
        quetion: "Q. 1 What is full form of HTML?",
        a: "Hello to my land",
        b: "Hey text markup language",
        c: "HyperText Makeup Language",
        d: "HyperText Markup Language",
        ans: "ans4",
    },
    {
        quetion: "Q. 2 What is full form of CSS?",
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheep",
        c: "Cartoon Style Sheets",
        d: "Cascading Super Sheets",
        ans: "ans1",
    },
    {
        quetion: "Q. 3 What is full form of HTTP?",
        a: "Hello to my land",
        b: "Hey text markup language",
        c: "HyperText Transper Protocol",
        d: "HyperText Markup Language",
        ans: "ans3",
    },
    {
        quetion: "Q. 4 What is full form of js?",
        a: "JavaScript",
        b: "Hey text markup language",
        c: "HyperText Makeup Language",
        d: "HyperText Markup Language",
        ans: "ans1",
    },
]

const question = document.querySelector(".question");

const option1 = document.body.querySelector("#option-1");
const option2 = document.body.querySelector("#option-2");
const option3 = document.body.querySelector("#option-3");
const option4 = document.body.querySelector("#option-4");

const btn = document.body.querySelector(".btn");
const options = document.body.querySelectorAll(".op");

const scorebtn = document.body.querySelector(".hidden");

 
const Qarray = QuizDB
let questionCount = 0;
let score = 0;
const setQuetion = ()=>{
    let queList = QuizDB[questionCount]
    question.innerHTML = queList.quetion;
    option1.innerHTML = queList.a;
    option2.innerHTML = queList.b;
    option3.innerHTML = queList.c;
    option4.innerHTML = queList.d;
}
const checkAnsewer = ()=>{
    let answer;
    options.forEach((curElement)=>{
        if(curElement.checked){
            answer = curElement.id;
        }
    });
    return answer;

}
const uncheckedanswer = ()=>{
    options.forEach((curElement)=>{
        if(curElement.checked){
             curElement.checked = false;
        }
    });
}
btn.addEventListener('click', ()=>{
    let answerid = checkAnsewer();
    uncheckedanswer();
    if(answerid === QuizDB[questionCount].ans){
        score++;
    }
    if(questionCount < QuizDB.length-1){
    questionCount++;
    setQuetion();
    }
    else{
        scorebtn.classList.remove("hidden");
        scorebtn.innerHTML = `<h2> Your Score is : ${score}/ ${QuizDB.length}</h2>
        <button type="submit" onclick="location.reload()" class="btn centerBTN">Play Again</button>`;
    }
})
setQuetion();
 