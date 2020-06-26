var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
const list = document.querySelectorAll('li');

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

list.forEach(li => {
    li.addEventListener('click', event => {
        li.classList.toggle('done');
    });
    const delButton = document.createElement('button');
    delButton.textContent = 'del';
    li.appendChild(delButton);
    delButton.addEventListener('click', event => {
        event.target.parentNode.remove();
    })
})

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);