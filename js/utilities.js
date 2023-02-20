/* Color generator */
function randomColorGenerator (element) {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    element.style.backgroundColor = "#" + randomColor;
}


/* Color reset */
function randomColorReset (element) {
    element.style.backgroundColor = 'white';
}


/* Universal function for unhide input field */
function inputUnhide (elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
    element.classList.add('block');
}


/* Universal function for set value from input field */
function setValueFromInputField (inputOne, inputTwo, elementOne, elementTwo) {
    const firstInput = document.getElementById(inputOne);
    const secondInput = document.getElementById(inputTwo);
    const firstElement = document.getElementById(elementOne);
    const secondElement = document.getElementById(elementTwo);

    if(!isNaN(firstInput.value) && !isNaN(secondInput.value) && firstInput.value !== '' && secondInput.value !== '' && firstInput.value > 0 && secondInput.value > 0) {
        firstElement.innerText = firstInput.value;
        secondElement.innerText = secondInput.value;
        return true;
    }
    else {
        alert('Please input valid number!');
        return false;
    }
}


/* Universal function to get text field text */
function getTextFieldText (elementId) {
    const element = document.getElementById(elementId);
    return element.innerText;
}


/* Universal function to get text field value */
function getTextFieldValue (elementId) {
    const element = document.getElementById(elementId);
    return parseFloat(element.innerText);
}


/* Function for area validation */
function areaValidation (area, title) {
    if(Number.isInteger(area)) {
        setTableInfo(title, area);
    }
    else {
        setTableInfo(title, area.toFixed(2));
    }
    setTableSerial();
}


/* Function for set table data */
function setTableInfo(title, area) {
    const tableContainer = document.getElementById('table-container');
    const newTr = document.createElement('tr');
    newTr.innerHTML = `
    <th class="serial">0.</th>
    <td>${title}</td>
    <td><span>${area}</span><span>cm</span><sup>2</sup></td>
    <td><button class="btn btn-xs"><span>Covert to m</span><sup>2</sup></button></td>
    <td><button class="btn btn-xs">Del</button></td>
    `
    tableContainer.appendChild(newTr);
}


/* Function for set table serial */
function setTableSerial () {
    const allSerial = document.getElementsByClassName('serial');
    let i;
    for (i = 0; i < allSerial.length; i++) {
        allSerial[i].innerText = i + 1;
    }
}


/* Function for manage table */
function tableAction (targetElement) {
    if(targetElement.innerText === 'COVERT TO M') {
        const squareMeter = parseFloat(targetElement.parentNode.parentNode.previousSibling.previousSibling.children[0].innerText) / 10000;
        targetElement.parentNode.parentNode.previousSibling.previousSibling.children[0].innerText = squareMeter.toFixed(4);
        targetElement.parentNode.parentNode.previousSibling.previousSibling.children[1].innerText = 'm';
        targetElement.parentNode.setAttribute('disabled', true);
    }
    if(targetElement.innerText === 'DEL' && targetElement.children.length === 0) {
        targetElement.parentNode.parentNode.remove();
    }
}