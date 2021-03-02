
document.querySelector('#add-btn').addEventListener("click", AddTask);

let tdList = document.querySelector('#td-list');

function AddTask() {
    let taskEntry = document.querySelector('#td-task').value;
    // console.log(taskEntry);
    let tdItem = document.createElement("li");
    var tdText = document.createTextNode(taskEntry);
    tdItem.appendChild(tdText);
    
    tdList.appendChild(tdItem);

    document.querySelector('#td-task').value = '';
}
