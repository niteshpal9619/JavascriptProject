const question=[
    {
        question:"Who was the leader of the Indian independence movement and the first Prime Minister of India?",
        answer:[
            {text:"Mahatma Gandhi",correct:false},
            {text:"Jawaharlal Nehru",correct:true},
            {text:"Sardar Patel",correct:false},
            {text:"Subhas Chandra Bose",correct:false}
        ]
    },
    {
        question:"The Indus Valley Civilization was primarily located in which present-day country?",
        answer:[
            {text:"India",correct:false},
            {text:"Pakistan",correct:true},
            {text:"Nepal",correct:false},
            {text:"Bangladesh",correct:false}
        ]
    },
    {
        question:"The Maurya Dynasty was founded by:",
        answer:[
            {text:"Ashoka",correct:false},
            {text:"Chandragupta Maurya",correct:true},
            {text:"Bindusara",correct:false},
            {text:"Kanishka",correct:false}
        ]
    },
    {
        question:"The Quit India Movement was launched in response to:",
        answer:[
            {text:"Jallianwala Bagh massacre",correct:false},
            {text:"Non-Cooperation Movement",correct:false},
            {text:"Simon Commission",correct:false},
            {text:"World War II",correct:true}
        ]
    },
    {
        question:"The Mughal Emperor known for his construction of the Taj Mahal was:",
        answer:[
            {text:"Akbar",correct:false},
            {text:"Babur",correct:false},
            {text:"Aurangzeb",correct:false},
            {text:"Shah Jahan",correct:true}
        ]
    }   
]

const questionElment=document.getElementById('question');
const answerbuttons=document.getElementById('answer-buttons');
const NextBtn=document.getElementById('next-btn');
const Prevbtn=document.getElementById('Prev-btn');
//Prev-btn

let currentQuestionIndex=0;
let Score=0;

function startQuiz(){
    currentQuestionIndex=0
    Score=0
    NextBtn.innerHTML="Next"
    showNextQuestion();
}

function resetState(){
    NextBtn.style.display="block";
    Prevbtn.style.display="block";
    while(answerbuttons.firstChild){
        answerbuttons.removeChild(answerbuttons.firstChild);
    }
}

function selectAnswer(e){
    const selectBtn=e.target;
    const isCorrect=selectBtn.dataset.correct==="true"
    if(isCorrect){
        selectBtn.classList.add("correct")
        Score++;
    }
    else{
        selectBtn.classList.add("incorrect")
    }
    Array.from(answerbuttons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct")
        }
        button.disabled=true;
    })
}

function handelNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<question.length){
        showNextQuestion()
    }else{
        showScore();
    }
}


function showScore(){
    resetState();
    questionElment.innerHTML=`You scored ${Score} out of ${question.length}!`
    NextBtn.innerHTML="Play Again";
    NextBtn.style.display="block";
    Prevbtn.style.display="block";
}

NextBtn.addEventListener("click",()=>{
    if(currentQuestionIndex<question.length){
        handelNextButton();
    }
    else{
        startQuiz();
    }
})


function handelNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<question.length){
        showNextQuestion()
    }else{
        showScore();
    }
}

function showNextQuestion(){
    resetState()
    let currentQuestion=question[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElment.innerHTML=questionNo+".  "+currentQuestion.question;


    //to display answer
    currentQuestion.answer.forEach(answer=>{
        console.log(answer)
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerbuttons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer)
    })
}

function selectAnswer(e){    
    const selectBtn=e.target;
    const isCorrect=selectBtn.dataset.correct==="true"
    if(isCorrect){
        selectBtn.classList.add("correct")
        Score++;
    }
    else{
        selectBtn.classList.add("incorrect")
    }
    Array.from(answerbuttons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct")
        }
        button.disabled=true;
    })
}

Prevbtn.addEventListener("click",()=>{
    if(currentQuestionIndex<question.length){
        handelPrevButton();
    }
    else{
        startQuiz();
    }
})

function handelPrevButton(){
    currentQuestionIndex--;
    if(currentQuestionIndex<question.length){
        showPrevQuestion()
    }else{
        showScore();
    }
}

function showPrevQuestion(){
    resetState()
    let currentQuestion=question[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElment.innerHTML=questionNo+".  "+currentQuestion.question;

    //to display answer
    currentQuestion.answer.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerbuttons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",ShowPrevAnswer)
    })
}

function ShowPrevAnswer(e){
    const selectBtn=e.target;
    const isCorrect=selectBtn.dataset.correct==="true"
    if(isCorrect){
        selectBtn.classList.add("correct")
        Score++;
    }
    else{
        selectBtn.classList.add("incorrect")
    }
    Array.from(answerbuttons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct")
        }
        button.disabled=true;
    })
}



startQuiz()