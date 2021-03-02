
document.querySelector('#bb-run').addEventListener("click", BishBosh2);

function BishBosh2() {
    let loopEnd = document.querySelector('#bb-max').value;
    let bishNum = document.querySelector('#bish-num').value;
    let boshNum = document.querySelector('#bosh-num').value;
    let outputField = document.querySelector('#output-area');
    let outputText = '';
    for (let i = 1; i <= loopEnd; i++) {
        if (i % bishNum === 0 && i % boshNum === 0) {
            outputText += "BishBosh";
        } else if (i % bishNum === 0) {
            outputText += "Bish";
        } else if (i % boshNum === 0) {
            outputText += "Bosh";
        } else {
            outputText += i;
        }
        outputText += ', ';
    }
    // console.log(outputText);
    outputField.innerText = outputText.slice(0, -2);
}
