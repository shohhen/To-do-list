let elForm = document.querySelector(".js-form");
let elInput = document.querySelector(".js-input");
let elList = document.querySelector(".js-list");
let elSpan1 = document.querySelector(".js-span1");
let elSpan2 = document.querySelector(".js-span2");
let elSpan3 = document.querySelector(".js-span3");
let elButton1 = document.querySelector(".btn-1");
let elButton2 = document.querySelector(".btn-2");
let elButton3 = document.querySelector(".btn-3");

let todos = [];

let renderTodo = (array, node) => {
  let comp = 0;
  let uncom = 0;
  array.forEach((element) => {
    let newItem = document.createElement("li");
    let newSpan = document.createElement("span");
    let newButton = document.createElement("button");
    let newCheckbox = document.createElement("input");

    newSpan.textContent = element.name;
    newButton.textContent = "Clear";
    newButton.setAttribute("class", "delete-btn");
    newButton.dataset.todoId = element.id;
    newCheckbox.setAttribute("type", "checkbox");
    newCheckbox.setAttribute("class", "todo-check");
    newCheckbox.dataset.todoId = element.id;

    if (element.isComplete) {
      newSpan.style.textDecoration = "line-through";
      newCheckbox.checked = true;
      newItem.style.boxShadow = "inset 1.5px 1.5px 6px #2e353e";
      comp += 1;
    } else {
      uncom += 1;
    }

    newItem.appendChild(newCheckbox);
    newItem.appendChild(newSpan);
    newItem.appendChild(newButton);
    node.appendChild(newItem);
  });
  elSpan2.textContent = comp;
  elSpan3.textContent = uncom;
};

elList.addEventListener("click", function (evt) {
  if (evt.target.matches(".delete-btn")) {
    let deletedId = evt.target.dataset.todoId;
    elList.innerHTML = "";
    let findedIndex = todos.findIndex((todo) => todo.id == deletedId);

    todos.splice(findedIndex, 1);
    elSpan1.textContent = todos.length;
    elSpan3.textContent = todos.length;
    renderTodo(todos, elList);
  } else if (evt.target.matches(".todo-check")) {
    let checkedId = evt.target.dataset.todoId;
    elList.innerHTML = "";
    let findedElement = todos.find((todo) => todo.id == checkedId);

    findedElement.isComplete = !findedElement.isComplete;
    renderTodo(todos, elList);
  }
});

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (elInput.value == "") {
    obj = {};
    elSpan1.textContent = todos.length;
    elSpan2.textContent = 0;
    elSpan3.textContent = todos.length;
  } else {
    elList.innerHTML = "";
    let elInputVal = elInput.value;
    elSpan1.textContent = todos.length + 1;
    elSpan3.textContent = todos.length + 1;

    let obj = {
      id: todos.length ? todos[todos.length - 1].id + 1 : 0,
      name: elInputVal,
      isComplete: false,
    };
    todos.push(obj);
    renderTodo(todos, elList);
  }
  elInput.value = "";
});




/* elButton1.addEventListener("click", function () {
  elButton1.style.boxShadow = " 1.5px 1.5px 6px #94adcf";
  elButton2.style.boxShadow = " 1.5px 1.5px 6px #2e353e";
  elButton3.style.boxShadow = " 1.5px 1.5px 6px #2e353e";
});
elButton2.addEventListener("click", function () {
  elButton2.style.boxShadow = " 1.5px 1.5px 6px #94adcf";
  elButton1.style.boxShadow = " 1.5px 1.5px 6px #2e353e";
  elButton3.style.boxShadow = " 1.5px 1.5px 6px #2e353e";
  
    todos.push(findedElement.isComplete == true)
    todos.pop(findedElement.isComplete == false);
    renderTodo(todos, elList)
  
});
elButton3.addEventListener("click", function () {
  elButton3.style.boxShadow = " 1.5px 1.5px 6px #94adcf";
  elButton2.style.boxShadow = " 1.5px 1.5px 6px #2e353e";
  elButton1.style.boxShadow = " 1.5px 1.5px 6px #2e353e";
}); */

// Array method

// Splice

// let array = ["Bir", "Ikki", "Uch", "To'rt"];

// console.log(array.splice(0, 1, "Besh"));

// console.log(array);

// Slice
// let array = ["Bir", "Ikki", "Uch", "To'rt"];

// let newArray = array.slice(0);

// console.log(newArray);

// MASALA

// array = ["Bir", "Ikki", "Uch", "To'rt"]
