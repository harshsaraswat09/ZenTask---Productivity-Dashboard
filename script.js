function openfeatures() {
  var allElems = document.querySelectorAll(".elem");
  var fullElemPage = document.querySelectorAll(".fullElem");

  var FullElemPageBackbtn = document.querySelectorAll(".fullElem .back");

  allElems.forEach(function (elem) {
    elem.addEventListener("click", function () {
      fullElemPage[elem.id].style.display = "block";
    });
  });

  FullElemPageBackbtn.forEach(function (back) {
    back.addEventListener("click", function () {
      fullElemPage[back.id].style.display = "none";
    });
  });
}
// openfeatures()

let form = document.querySelector(".addTask form");
let taskInput = document.querySelector(".addTask form #task-input");
let taskDetailsInput = document.querySelector(".addTask form textarea");
let taskCheckbox = document.querySelector(".addTask form #check");

var currentTask = []

if(localStorage.getItem('currentTask')){
  currentTask = JSON.parse(localStorage.getItem('currentTask'))
}else{
  console.log("Task list is empty"); 
}

function renderTask() {
  var allTask = document.querySelector(".allTask");
  console.log(allTask);

  var sum = "";

  currentTask.forEach(function (elem) {
    sum += `<div class="task">
              <h5>${elem.task} <span class='${elem.imp}'>imp</span></h5>
              <button>Mark as completed</button>
          </div>`;
  });

  allTask.innerHTML = sum;
  // console.log(sum)
}

renderTask();

form.addEventListener("submit", function (e) {
  e.preventDefault();
  currentTask.push({
    
    task: taskInput.value,
    details: taskDetailsInput.value,
    imp: taskCheckbox.checked,
  });

  localStorage.setItem('currentTask',JSON.stringify(currentTask))

  taskInput.value = ''
  taskDetailsInput.value = ''
  taskCheckbox.checked = false
  renderTask()
});

