
// Scirpt for localStorage

function saveName() {
    var name = document.getElementById('firstName').value;
    if (localStorage) {
        localStorage.setItem('uname', name);
    } else {
        alert("Your browser doesn't support localStorage.")
    }
}
function getName() {
    if (localStorage) {
        alert(`Hello ${localStorage.getItem('uname')}!!`)
    } else {
        alert("Your browser doesn't support localStorage.")
    }
}
function removeName() {
    if (localStorage) {
        localStorage.removeItem('uname');
        alert('localStorage Cleared Now.')
    } else {
        alert("Your browser doesn't support localStorage.")
    }
}

// ------------------------------------------------------------- // 

// Scirpt for sessionStorage

function saveEmail() {
    var email = document.getElementById('email').value;
    if (sessionStorage) {
        sessionStorage.setItem('uemail', email);
    } else {
        alert("Your browser doesn't support sessionStorage.")
    }
}
function getEmail() {
    if (sessionStorage) {
        alert(`Hello ${sessionStorage.getItem('uemail')}!!`)
    } else {
        alert("Your browser doesn't support sessionStorage.")
    }
}