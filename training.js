const startButton = document.getElementById("start-btn")
const submitButton = document.getElementById("answer-btn")
const input = document.querySelector("input")
const question = document.getElementById("question")
const decider = document.getElementById("decider")
const scoreText = document.getElementById("score-text")

const questions = [
  "In which part of your body would you find the cruciate ligament?",
  "What is the name of the main antagonist in the Shakespeare play Othello?",
  "What element is denoted by the chemical symbol Sn in the periodic table?"
]
const answers = [
  "knee",
  "lago",
  "tin"
]

let questionidx = Math.floor(Math.random() * questions.length)
let answeridx = questionidx
let score = 0

const displayq = ()=>{
  question.style.display = "block"
  question.innerHTML = questions[questionidx]
  input.style.display = "block"
  submitButton.style.display = "block"
  scoreText.style.display = "block"
}

const startGame  = () => {
  startButton.style.display = "none"
  displayq()
}

const nextQ = ()=>{
  if(questionidx < questions.length - 1){
    questionidx++
    answeridx = questionidx
    question.innerHTML = questions[questionidx]
  }else{
    questionidx = 0
  }
}

const check = ()=>{
  if(input.value.toLowerCase() == answers[answeridx]){
    decider.style.color = "green"
    decider.textContent = "right"
    decider.style.display = "block"
    score++
    scoreText.textContent = "Score: " + score
    setTimeout(()=>{
      decider.textContent = ""
      input.value = ""
      nextQ()
    }, 1000)
  }else{
    decider.style.color = "red"
    decider.textContent = "wrong"
    decider.style.display = "block"
    setTimeout(()=>{
      decider.textContent = ""
    }, 1000)
  }
}

startButton.addEventListener("click", ()=>{
  startGame()
})

submitButton.addEventListener("click", ()=>{
  check()
})