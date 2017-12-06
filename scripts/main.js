window.addEventListener('DOMContentLoaded', main, false);
function main() {
var myImage = document.querySelector('img');
    
    myImage.onclick = function() {
        var mySrc  = myImage.getAttribute('src');
        if(mySrc=== 'images/invitation.jpg') {
            myImage.setAttribute('src', 'images/invitation2.jpg');
            
        } else {
            myImage.setAttribute ('src', 'images/invitation.jpg')
        }
        
    }
    
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Podaj, proszę, swoje imię.');
    localStorage.setItem('name' , myName);
    myHeading.innerHTML= 'Zaproszenie specjalnie dla Ciebie, ' + myName;
}
    if(!localStorage.getItem('name')) {
        setUserName();
    } else {
        var storedName = localStorage.getItem('name');
        myHeading.innerHTML= 'Zaproszenie specjalnie dla Ciebie, ' + storedName;
    }
    myButton.onclick= function() {
        setUserName();
    }
}

