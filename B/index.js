
// let quizData = [
//     {
//         "category": "Sports",
//         "type": "multiple",
//         "difficulty": "easy",
//         "question": "Which English football club has the nickname &#039;The Foxes&#039;?",
//         "correct_answer": "Leicester City",
//         "incorrect_answers": [
//         "Northampton Town",
//         "Bradford City",
//         "West Bromwich Albion"
//         ]
//     },
//     {
//         "category": "Sports",
//         "type": "multiple",
//         "difficulty": "easy",
//         "question": "Which country will host the 2020 Summer Olympics?",
//         "correct_answer": "Japan",
//         "incorrect_answers": [
//         "China",
//         "Australia",
//         "Germany"
//         ]
//     },
//     {
//         "category": "Sports",
//         "type": "multiple",
//         "difficulty": "easy",
//         "question": "Who won the 2015 Formula 1 World Championship?",
//         "correct_answer": "Lewis Hamilton",
//         "incorrect_answers": [
//         "Nico Rosberg",
//         "Sebastian Vettel",
//         "Jenson Button"
//         ]
//     },
//     {
//         "category": "Sports",
//         "type": "multiple",
//         "difficulty": "easy",
//         "question": "In Baseball, how many times does the ball have to be pitched outside of the strike zone before the batter is walked?",
//         "correct_answer": "4",
//         "incorrect_answers": [
//         "1",
//         "2",
//         "3"
//         ]
//     },
//     {
//         "category": "Sports",
//         "type": "multiple",
//         "difficulty": "easy",
//         "question": "When was the FC Schalke 04 founded?",
//         "correct_answer": "1904",
//         "incorrect_answers": [
//         "1909",
//         "2008",
//         "1999"
//         ]
//     }
// ];
let url = 'https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple'
fetch(url)
    .then((respone) => {
        return respone.json()
    })
    .then((res) => {
        let data = res.results;
        for(let i = 0; i < data.length; i++) {
            data[i].id = i;
            showQuiz(data[i], i);
        }
        const quizzForm = document.getElementById('quiz-list');
        quizzForm.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log('triggered');
            const quizes = quizzForm.querySelectorAll('.quiz-item')
            console.log(data)
            for(let i = 0; i < quizes.length; i++)  {
                console.log(quizes[i]);
                mark(data[i], quizes[i])
            }
        })
    })

let showQuiz = (quiz, questionIndex) => {
    let div = document.createElement('div');
    let answers = quiz.incorrect_answers;
    answers.push(quiz.correct_answer);
    shuffle(answers);
    let index = 0;
    div.className = 'quiz-item';
    div.id = quiz.id;
    div.innerHTML = `
    <div class="quiz-question">
        <h3>${quiz.question}</h3>
    </div>
    <ul class="quiz-answer-list">
        <li class="answer-list-item radio">
            <label><input type="radio" aria-describedby="question${questionIndex}Ans${index}" id="question${questionIndex}Ans${index}" name="answer" class="mr-2 mt-1">${answers[index]}</label>
            <small id="question${questionIndex}Ans${index++}" class="form-text text-danger"></small>
        </li>
        <li class="answer-list-item radio">
            <label><input type="radio" aria-describedby="question${questionIndex}Ans${index}" id="question${questionIndex}Ans${index}" name="answer" class="mr-2 mt-1">${answers[index]}</label>
            <small id="question${questionIndex}Ans${index++}" class="form-text text-danger"></small>
        </li><li class="answer-list-item radio">
            <label><input type="radio" aria-describedby="question${questionIndex}Ans${index}" id="question${questionIndex}Ans${index}" name="answer" class="mr-2 mt-1">${answers[index]}</label>
            <small id="question${questionIndex}Ans${index++}" class="form-text text-danger"></small>
        </li><li class="answer-list-item radio">
            <label><input type="radio" aria-describedby="question${questionIndex}Ans${index}" id="question${questionIndex}Ans${index}" name="answer" class="mr-2 mt-1">${answers[index]}</label>
            <small id="question${questionIndex}Ans${index++}" class="form-text text-danger"></small>
        </li>
    </ul>
    `
    document.getElementById('quiz-list').appendChild(div);
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}

const mark = (data, quiz) => {
    let trueAns = data.correct_answer;
    let ans = quiz.querySelectorAll('.answer-list-item label input')
    for(let i = 0; i < ans.length; i++) {
        console.log(ans[i].value);
    }
}