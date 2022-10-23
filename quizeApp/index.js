const questionsText = [
  { name:"Which of the following is used to request and load data Asynchronously?",
    answer: ["SQL", "Ajax", "JSON", "Bootstrap"],
    coorect: "Ajax"
  },
  { name:"Which of the following is not an inbuilt array function in JavaScript?",
    answer: ["filter", "forEach", "map", "set"],
    coorect: "set"
  },
  { name:"You want to store an Array called 'items' to local storage. How will you convert it?",
    answer: ["JSON.stringify(items)","items.indexOf()","Object.keys(items)","item.toString()"],
    coorect: "JSON.stringify(items)"
  },
  { name:"Which property references the DOM object that dispatched an event?",
    answer: ["self", "object", "target", "source"],
    coorect: "target"
  },
  { name:"How does a function create a closure?",
    answer: ["It reloads the document whenever the value changes","It returns a reference to a variable in its parent scope","It completes execution without returning","It copies a local variable to the global scope"],
    coorect: "It returns a reference to a variable in its parent scope"
  },
  { name:"How is a forEach statement different from a for statement?",
    answer: ["Only a for statement uses a callback function","A for statement is generic, but a forEach statement can be used only with an array","Only a forEach statement lets you specify your own iterator.","A forEach statement is generic, but a for statement ca be used only with an array"],
    coorect: "A for statement is generic, but a forEach statement can be used only with an array"
  }
];

let question = document.getElementById('question');
let answersWrapper = document.getElementById('answers');
let answer1 = document.getElementById('answer1');
let answer2 = document.getElementById('answer2');
let answer3 = document.getElementById('answer3');
let answer4 = document.getElementById('answer4');
let correct = document.getElementById('correct');
let i = 0;
let count = 0;

firstload()

function firstload(){
  question.innerText = questionsText[i].name;
  answer1.innerText = questionsText[i].answer[0];
  answer2.innerText = questionsText[i].answer[1];
  answer3.innerText = questionsText[i].answer[2];
  answer4.innerText = questionsText[i].answer[3];
  loadQueestion();
}

function loadQueestion() {
  answersWrapper.addEventListener('click',e => makeQuestion(e.target));
};
function makeQuestion(target){
  i++;
  if(i < questionsText.length){
    if(target.innerText == questionsText[i-1].coorect){
      count++;
    }
    question.innerText = questionsText[i].name;
    answer1.innerText = questionsText[i].answer[0];
    answer2.innerText = questionsText[i].answer[1];
    answer3.innerText = questionsText[i].answer[2];
    answer4.innerText = questionsText[i].answer[3];
  }else {
    if(i == questionsText.length){
      let p = document.createElement('p');
      p.innerText = 'Количество правильных ответов = ' + count + '/6';
      correct.appendChild(p);
    }
  }
};