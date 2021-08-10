
// Create a close button to each item in the list
var myList = document.getElementsByTagName('li');
for (var i = 0; i < myList.length; i++) {
    var span = document.createElement('SPAN');
    var text = document.createTextNode('(X)');
    span.className = "close";
    span.appendChild(text);
    myList[i].appendChild(span);
}

// click on a close button to hide/delete the list item
var closeList = document.getElementsByClassName('close');
for (var i = 0; i < closeList.length; i++) {
    closeList[i].onclick = function () {
        var el = this.parentElement;
        el.style.display = "none";
    }
}

// Add new element to Todo List:
function addNewElement() {
    var li = document.createElement('li');
    var inputValue = document.getElementById('myInput').value;
    var text = document.createTextNode(inputValue);
    li.appendChild(text);
    if (inputValue === '') {
        alert('You must write something..')
    } else {
        document.getElementById('myUL').appendChild(li);
        document.getElementById('myInput').value = "";
    }
    var span = document.createElement('SPAN');
    var text = document.createTextNode('(X)');
    span.className = "close";
    span.appendChild(text);
    li.appendChild(span);
    for (var i = 0; i < closeList.length; i++) {
        closeList[i].onclick = function () {
            var el = this.parentElement;
            el.style.display = "none";
        }
    }
}


// Clearing the Todo List:
function removeAll() {
    if (confirm('Are you sure to clear todo list?')) {
        var list = document.getElementsByTagName('ul');
        list[0].innerHTML = '';
    }
}