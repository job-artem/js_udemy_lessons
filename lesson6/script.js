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
    return li;
}

function addListAfterClick() {
    if (inputLength() > 0) {
        const li = createListElement();
        return li;
    }

}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        const li = createListElement();
        return li;
    }

}

function appendDelButtonToListElement(li) {
    const delButton = document.createElement('button');
    delButton.textContent = 'del';
    li.appendChild(delButton);
    delButton.addEventListener('click', event => {
        event.target.parentNode.remove();
    })
}

function appendToggleDoneEventToListItem(li) {
    li.addEventListener('click', event => {
        li.classList.toggle('done');
    });
}

list.forEach(li => {
    appendToggleDoneEventToListItem(li);
    appendDelButtonToListElement(li);
});

button.addEventListener("click", function(event) {
    const li = addListAfterClick(event);
    if (li) {
        console.log(li);
        appendDelButtonToListElement(li);
        appendToggleDoneEventToListItem(li);
    }

});

input.addEventListener("keypress", function(event) {
    const li = addListAfterKeypress(event);
    if (li) {
        console.log(li);
        appendDelButtonToListElement(li);
        appendToggleDoneEventToListItem(li);
    }

});