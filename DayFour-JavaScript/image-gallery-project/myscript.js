
function update(element) {
    document.getElementById('description').innerHTML = element.alt;
}

function undo() {
    document.getElementById('description').innerHTML = "Hover over an image below to display here.";
}

function showContent() {
    var para = document.getElementById('para');
    para.style.display = "block";
}

function hideContent() {
    var para = document.getElementById('para');
    para.style.display = "none";
}