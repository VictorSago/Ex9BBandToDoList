const output_area = document.querySelector('#output-area');
log_message = BishBosh1();

console.log(log_message);

output_area.innerText = log_message;

function BishBosh1() {
    let outputText = '';
    for (let i = 1; i <= 100; i++) {
        if (i % 12 === 0) {
            outputText += "BishBosh";
        } else if (i % 3 === 0) {
            outputText += "Bish";
        } else if (i % 4 === 0) {
            outputText += "Bosh";
        } else {
            outputText += i;
        }
        outputText += ', ';
    }
    return outputText.slice(0, -2);
}
