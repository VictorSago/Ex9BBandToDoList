
// Add EventListener to the Add button
document.querySelector('#add-btn').addEventListener("click", AddTask);

// Let each task item have the ability to be marked by a click
let tdList = document.querySelector('#td-list');
tdList.addEventListener('click', MarkChecked, false);

// Each Close button removes its parent ListItem
let closeButtons = document.querySelectorAll('.closeBtn');
for (const element of closeButtons) {
    element.addEventListener('click', RemoveItem);
}

// console.log(typeof(closeButtons), closeButtons);

// Toggle marking of list items as "Complete"
function MarkChecked(event) {
    if (event.target.tagName.toLowerCase() === 'li') {
        event.target.classList.toggle('checked');
    }
}

// Add new List item
function AddTask() {
    let taskEntry = document.querySelector('#td-task').value;
    let tdItem = document.createElement("li");
    let tdText = document.createTextNode(taskEntry);
    tdItem.appendChild(tdText);
    tdItem.classList.add('py-1');
    // tdItem.classList.add('pl-2');
    
    tdList.appendChild(tdItem);

    document.querySelector('#td-task').value = '';

    let removeBtn = document.createElement("span");
    let removeSymbol = document.createTextNode("\u00D7");
    removeBtn.className = "closeBtn";
    removeBtn.classList.add('px-2');
    removeBtn.appendChild(removeSymbol);
    tdItem.appendChild(removeBtn);
    removeBtn.addEventListener('click', RemoveItem);
}

// Remove clicked list item
function RemoveItem() {
    let item = this.parentElement;
    item.remove();
}
