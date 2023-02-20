/*--------------------------------------------------------------------------
Cards mouse enter to generate random color
----------------------------------------------------------------------------*/
const allCards = document.getElementsByClassName('items');
for(const card of allCards) {
    card.addEventListener('mouseenter', function(event) {
        randomColorGenerator(event.target);
    });
    card.addEventListener('mouseleave', function(event) {
        randomColorReset(event.target);
    });
}


/*--------------------------------------------------------------------------
Card 1
----------------------------------------------------------------------------*/
/* Triangle edit button click and action */
const triangleEditBtn = document.getElementById('triangleEditBtn');
triangleEditBtn.addEventListener('click', function() {
    inputUnhide('triangleHide');
});


/* Triangle update button click and action */
const triangleUpdateBtn = document.getElementById('triangleUpdateBtn');
triangleUpdateBtn.addEventListener('click', function() {
    const bool = setValueFromInputField ('triangleInputB', 'triangleInputH', 'triangleB', 'triangleH')
});


/* Triangle calculation button click and action */
const triangleCalcBtn = document.getElementById('triangleCalcBtn');
triangleCalcBtn.addEventListener('click', function () {
    const title = getTextFieldText('triangleName');
    const triangleHide = document.getElementById('triangleHide');
    if(triangleHide.classList.contains('hidden')) {
        const triangleB = getTextFieldValue('triangleB');
        const triangleH = getTextFieldValue('triangleH');
        const area = 0.5 * triangleB * triangleH;
        areaValidation (area, title);
    }
    else {
        const bool = setValueFromInputField ('triangleInputB', 'triangleInputH', 'triangleB', 'triangleH');
        if(bool) {
            const triangleB = getTextFieldValue('triangleB');
            const triangleH = getTextFieldValue('triangleH');
            const area = 0.5 * triangleB * triangleH;
            areaValidation (area, title);
        }
    }
});


/*--------------------------------------------------------------------------
Card 2
----------------------------------------------------------------------------*/
/* Rectangle edit button click and action */
const rectangleEditBtn = document.getElementById('rectangleEditBtn');
rectangleEditBtn.addEventListener('click', function() {
    inputUnhide('rectangleHide');
});


/* Rectangle update button click and action */
const rectangleUpdateBtn = document.getElementById('rectangleUpdateBtn');
rectangleUpdateBtn.addEventListener('click', function() {
    const bool = setValueFromInputField ('rectangleInputW', 'rectangleInputL', 'rectangleW', 'rectangleL')
});


/* Rectangle calculation button click and action */
const rectangleCalcBtn = document.getElementById('rectangleCalcBtn');
rectangleCalcBtn.addEventListener('click', function () {
    const title = getTextFieldText('rectangleName');
    const rectangleHide = document.getElementById('rectangleHide');
    if(rectangleHide.classList.contains('hidden')) {
        const rectangleW = getTextFieldValue('rectangleW');
        const rectangleL = getTextFieldValue('rectangleL');
        const area = rectangleW * rectangleL;
        areaValidation (area, title);
    }
    else {
        const bool = setValueFromInputField ('rectangleInputW', 'rectangleInputL', 'rectangleW', 'rectangleL');
        if(bool) {
            const rectangleW = getTextFieldValue('rectangleW');
            const rectangleL = getTextFieldValue('rectangleL');
            const area = rectangleW * rectangleL;
            areaValidation (area, title);
        }
    }
});


/*--------------------------------------------------------------------------
Card 3
----------------------------------------------------------------------------*/
/* Parallelogram edit button click and action */
const parallelogramEditBtn = document.getElementById('parallelogramEditBtn');
parallelogramEditBtn.addEventListener('click', function() {
    inputUnhide('parallelogramHide');
});


/* Parallelogram update button click and action */
const parallelogramUpdateBtn = document.getElementById('parallelogramUpdateBtn');
parallelogramUpdateBtn.addEventListener('click', function() {
    const bool = setValueFromInputField ('parallelogramInputB', 'parallelogramInputH', 'parallelogramB', 'parallelogramH')
});


/* Parallelogram calculation button click and action */
const parallelogramCalcBtn = document.getElementById('parallelogramCalcBtn');
parallelogramCalcBtn.addEventListener('click', function () {
    const title = getTextFieldText('parallelogramName');
    const parallelogramHide = document.getElementById('parallelogramHide');
    if(parallelogramHide.classList.contains('hidden')) {
        const parallelogramB = getTextFieldValue('parallelogramB');
        const parallelogramH = getTextFieldValue('parallelogramH');
        const area = parallelogramB * parallelogramH;
        areaValidation (area, title);
    }
    else {
        const bool = setValueFromInputField ('parallelogramInputB', 'parallelogramInputH', 'parallelogramB', 'parallelogramH');
        if(bool) {
            const parallelogramB = getTextFieldValue('parallelogramB');
            const parallelogramH = getTextFieldValue('parallelogramH');
            const area = parallelogramB * parallelogramH;
            areaValidation (area, title);
        }
    }
});


/*--------------------------------------------------------------------------
Card 4
----------------------------------------------------------------------------*/
/* Rhombus edit button click and action */
const rhombusEditBtn = document.getElementById('rhombusEditBtn');
rhombusEditBtn.addEventListener('click', function() {
    inputUnhide('rhombusHide');
});


/* Rhombus update button click and action */
const rhombusUpdateBtn = document.getElementById('rhombusUpdateBtn');
rhombusUpdateBtn.addEventListener('click', function() {
    const bool = setValueFromInputField ('rhombusInputD1', 'rhombusInputD2', 'rhombusD1', 'rhombusD2')
});


/* Rhombus calculation button click and action */
const rhombusCalcBtn = document.getElementById('rhombusCalcBtn');
rhombusCalcBtn.addEventListener('click', function () {
    const title = getTextFieldText('rhombusName');
    const rhombusHide = document.getElementById('rhombusHide');
    if(rhombusHide.classList.contains('hidden')) {
        const rhombusD1 = getTextFieldValue('rhombusD1');
        const rhombusD2 = getTextFieldValue('rhombusD2');
        const area = 0.5 * rhombusD1 * rhombusD2;
        areaValidation (area, title);
    }
    else {
        const bool = setValueFromInputField ('rhombusInputD1', 'rhombusInputD2', 'rhombusD1', 'rhombusD2');
        if(bool) {
            const rhombusD1 = getTextFieldValue('rhombusD1');
            const rhombusD2 = getTextFieldValue('rhombusD2');
            const area = 0.5 * rhombusD1 * rhombusD2;
            areaValidation (area, title);
        }
    }
});


/*--------------------------------------------------------------------------
Card 5
----------------------------------------------------------------------------*/
/* Pentagon edit button click and action */
const pentagonEditBtn = document.getElementById('pentagonEditBtn');
pentagonEditBtn.addEventListener('click', function() {
    inputUnhide('pentagonHide');
});


/* Pentagon update button click and action */
const pentagonUpdateBtn = document.getElementById('pentagonUpdateBtn');
pentagonUpdateBtn.addEventListener('click', function() {
    const bool = setValueFromInputField ('pentagonInputP', 'pentagonInputB', 'pentagonP', 'pentagonB')
});


/* Pentagon calculation button click and action */
const pentagonCalcBtn = document.getElementById('pentagonCalcBtn');
pentagonCalcBtn.addEventListener('click', function () {
    const title = getTextFieldText('pentagonName');
    const pentagonHide = document.getElementById('pentagonHide');
    if(pentagonHide.classList.contains('hidden')) {
        const pentagonP = getTextFieldValue('pentagonP');
        const pentagonB = getTextFieldValue('pentagonB');
        const area = 0.5 * pentagonP * pentagonB;
        areaValidation (area, title);
    }
    else {
        const bool = setValueFromInputField ('pentagonInputP', 'pentagonInputB', 'pentagonP', 'pentagonB');
        if(bool) {
            const pentagonP = getTextFieldValue('pentagonP');
            const pentagonB = getTextFieldValue('pentagonB');
            const area = 0.5 * pentagonP * pentagonB;
            areaValidation (area, title);
        }
    }
});


/*--------------------------------------------------------------------------
Card 6
----------------------------------------------------------------------------*/
/* Ellipse edit button click and action */
const ellipseEditBtn = document.getElementById('ellipseEditBtn');
ellipseEditBtn.addEventListener('click', function() {
    inputUnhide('ellipseHide');
});


/* Ellipse update button click and action */
const ellipseUpdateBtn = document.getElementById('ellipseUpdateBtn');
ellipseUpdateBtn.addEventListener('click', function() {
    const bool = setValueFromInputField ('ellipseInputA', 'ellipseInputB', 'ellipseA', 'ellipseB')
});


/* Ellipse calculation button click and action */
const ellipseCalcBtn = document.getElementById('ellipseCalcBtn');
ellipseCalcBtn.addEventListener('click', function () {
    const title = getTextFieldText('ellipseName');
    const ellipseHide = document.getElementById('ellipseHide');
    if(ellipseHide.classList.contains('hidden')) {
        const ellipseA = getTextFieldValue('ellipseA');
        const ellipseB = getTextFieldValue('ellipseB');
        const area = 3.14 * ellipseA * ellipseB;
        areaValidation (area, title);
    }
    else {
        const bool = setValueFromInputField ('ellipseInputA', 'ellipseInputB', 'ellipseA', 'ellipseB');
        if(bool) {
            const ellipseA = getTextFieldValue('ellipseA');
            const ellipseB = getTextFieldValue('ellipseB');
            const area = 3.14 * ellipseA * ellipseB;
            areaValidation (area, title);
        }
    }
});


/*----------------------------------------------------------------------------------
Area calculation field click and action
------------------------------------------------------------------------------------*/
const tableContainer = document.getElementById('table-container');
tableContainer.addEventListener('click', function (event) {
    tableAction(event.target);
    setTableSerial();
});