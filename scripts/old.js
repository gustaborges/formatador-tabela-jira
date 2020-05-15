const inputSelectTestType = document.querySelector('#inputGroupSelectTestType');
const inputFieldTriggerDescription = document.querySelector('#inputFieldTriggerDescription');
const inputFieldResult = document.querySelector('#inputFieldResult');
const inputSelectResultType = document.querySelector('#inputSelectResultType');
const inputFieldExpectedResult = document.querySelector('#inputFieldExpectedResult');
const btnGenerateTable = document.querySelector("#btnGenerateTable");
const btnReset = document.querySelector("#btnReset");
const codeEditor = document.querySelector("#codeEditor");
const formResultado = document.querySelector("#formResultado");

let generateTableMode = 'new';

btnGenerateTable.onclick = () => {
    let markUpCode;

    if(generateTableMode == 'new') {        
        markUpCode = generateMarkUp(headerIncluded = true);
        codeEditor.value = markUpCode;
        generateTableMode = 'append';
    }
    else if(generateTableMode == 'append') {
        markUpCode = generateMarkUp(headerIncluded = false);
        codeEditor.value += markUpCode;
    }


    const expectedResult = inputFieldExpectedResult.value; // não permite o valor desse campo ser resetado
    formResultado.reset();
    inputFieldExpectedResult.value = expectedResult;
}


btnReset.onclick = () => {
    generateTableMode = 'new';
    formResultado.reset();
    codeEditor.value = '';
}

function generateMarkUp(headerIncluded) {
    const description = formatDescription(inputFieldTriggerDescription.value);
    const expectedResult = inputFieldExpectedResult.value;
    const result =  inputFieldResult.value;
    const resultType = inputSelectResultType.value;


    const markupCode = [];
    if(headerIncluded) {
        markupCode.push(
        '|| Trigger || Evidência ||');
    }
    markupCode.push(`\n| ${description}`);

    if(expectedResult) {
        markupCode.push(`\n{color:#f79232}*Resultado Esperado:* ${expectedResult}{color}`);
    }

    markupCode.push(' | ');
    if(result) {
        markupCode.push(
            resultTypeIsImage(resultType) ? `!${result}.${resultType}|thumbnail!`: result
        );
    }
    markupCode.push(' | ');

    const finalCode = markupCode.join("").replace('| \n', '| ');
    return finalCode;
}


function resultTypeIsImage(resultType) {
    return resultType != 'normal-text';
}

function formatDescription(description) {
    return description.replace(/Quando:|Onde:/g, (x) => `*${x}*`);
}