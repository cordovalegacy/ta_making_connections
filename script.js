var requestNumber = 2;
var connectionNumber = 418;
function removeRequest1() {
    requestNumber--;

    document.querySelector('.people1').remove();
    document.querySelector('#connection-number1').innerText = requestNumber;
}

function acceptRequest1() {
    requestNumber--;
    connectionNumber++;

    document.querySelector('.people1').remove();
    document.querySelector('#connection-number1').innerText = requestNumber;
    document.querySelector('#connection-number2').innerText = connectionNumber;
}

function removeRequest2() {
    requestNumber--;

    document.querySelector('.people2').remove();
    document.querySelector('#connection-number1').innerText = requestNumber;
}

function acceptRequest2() {
    requestNumber--;
    connectionNumber++;

    document.querySelector('.people2').remove();
    document.querySelector('#connection-number1').innerText = requestNumber;
    document.querySelector('#connection-number2').innerText = connectionNumber;
}

var nameChange = 'Brendan Cordova';

function editName() {
    document.querySelector('#h1').innerText = nameChange;
}