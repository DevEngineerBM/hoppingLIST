
const itemForm = document.getElementById('item-form');
const inputItem = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const itemFilter = document.getElementById('filter');

function addItem(e) {

    e.preventDefault();

    const newItem = inputItem.value;

    // CHECK THE ITEM
    if (newItem === '') {
        alert('Please add an item'); // Corrected: Added a more descriptive message
        return;
    }

    // ADD ITEM
    function addFunction() {
        // Use createElement with proper tag names
        const li = document.createElement('li');
        const button = document.createElement('button');
        const icon = document.createElement('i');
        const item = document.createTextNode(newItem);

        // Set class names
        button.className = 'remove-item btn-link text-red';
        icon.className = 'fa-solid fa-xmark';

        // Append icon to button
        button.appendChild(icon);

        // Append item and button to li
        li.appendChild(item);
        li.appendChild(button);

        // Append li to itemList, not itemForm
        itemList.appendChild(li);
    }

    // Call the addFunction with newItem
    addFunction(newItem);
   
}

   // DELETE ALL ITEMS
const button = document.getElementById('clear')

function onClear() {
   

     while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild)
     }
     
}

//REMOVE ITEMS

function removeItem(e) {
  if (e.target.parentElement.classList.contains('remove-item')) {
    e.target.parentElement.parentElement.remove();
  }
} 

//FILTER ITEMS

//const itemFilter = document.getElementById('filter'); 
//const itemList = document.getElementById('item-list');


function filterItems() {
    const filterValue = itemFilter.value.toLowerCase();
    const items = itemList.getElementsByTagName('li');

    for (const item of items) {
        const text = item.textContent.toLowerCase();
        const isVisible = text.includes(filterValue);
         if (isVisible) {
            item.style.display = 'flex';  
        } else {
            item.style.display = 'none';
        }
    }
}

itemFilter.addEventListener('input', filterItems);

 itemList.addEventListener('click', removeItem);

 button.addEventListener('click', onClear);

 itemForm.addEventListener('submit', addItem);



