// document.addEventListener('DOMContentLoaded', function() {
//     console.log('Hello! Welcome to the page.');
// });
// const myDiv = document.getElementById('row1');

//         myDiv.addEventListener('click', function(event) {
//             console.log('Div clicked!');
//             var myDiv = document.getElementById('myDiv');
//             myDiv.style.backgroundColor = 'lightgreen';
// const row1 = document.getElementById('row1');
// row1.addEventListener('mouseover',function(event) {
// console.log('row clicked!');
//             // var row1byamit = document.getElementById('row1');
//             event.currentTarget.style.backgroundColor = 'lightgrey';
// })
//                 row1.addEventListener('mouseout',function(event) {
//                 console.log('row clicked!');
//                             // var row1byamit = document.getElementById('row1');
//                             event.currentTarget.style.backgroundColor = 'white';
                               
      
//         });
//         const row2 = document.getElementById('row2');
//         row2.addEventListener('mouseover',function(event) {
//         console.log('row clicked!');
//                     // var row2byamit = document.getElementById('row2');
//                     event.currentTarget.style.backgroundColor = 'lightgrey';
//         });
//         row2.addEventListener('mouseout',function(event) {
//             console.log('row clicked!');
//                         // var row2byamit = document.getElementById('row2');
//                         event.currentTarget.style.backgroundColor = 'white';
//             });
//         const row3 = document.getElementById('row3');
//         row3.addEventListener('mouseover',function(event) {
//         console.log('row clicked!');
//                     // var row3byamit = document.getElementById('row3');
//                     event.currentTarget.style.backgroundColor = 'lightgrey';
//         })


//         row3.addEventListener('mouseout',function(event) {
//             console.log('row3 mouseout!');
//                         // var row3byamit = document.getElementById('row3');
//                         event.currentTarget.style.backgroundColor = 'white';
//             });


            // const div1 = document.getElementById('div1');
            // div1.addEventListener('mouseover',function(event) {
            // // console.log('row clicked!');
            //             // var row3byamit = document.getElementById('row3');
            //             event.currentTarget.style.textDecoration = 'underline';
            // });
            // const h1 = document.getElementById('h1');
            // h1.addEventListener('mouseover',function(event) {
            //     event.currentTarget.classList.toggle('underline');    
            
            // });
 
    
    
        // document.getElementById('row1').addEventListener('click', changeBackgroundColor);

        // function getRandomColor() {
        //     var letters = '0123456789ABCDEF';
        //     var color = '#';
        //     for (var i = 0; i < 6; i++) {
        //         color += letters[Math.floor(Math.random() * 16)];
        //     }
        //     return color;
        // }

        // function changeBackgroundColor(event) {
        //     event.currentTarget.style.backgroundColor = getRandomColor();
        // }
        function addItem() {
            // Get the value of the input field
            const itemInput = document.getElementById('itemInput');
            const newItemText = itemInput.value;
        
            // Make sure the input is not empty
            if (newItemText.trim() !== '') {
                // Create a new list item
                const newItem = document.createElement('li');
                newItem.textContent = newItemText;
        
                // Add the new item to the list
                const list = document.getElementById('myList');
                list.appendChild(newItem);
        
                // Clear the input field
                itemInput.value = '';
            }
        }
// Function to load items from local storage
function loadItems() {
    const list = document.getElementById('myList');
    const items = JSON.parse(localStorage.getItem('items')) || [];
    items.forEach(itemText => {
        const newItem = document.createElement('li');
        newItem.textContent = itemText;
        list.appendChild(newItem);
    });
}

// Function to add a new item
function addItem() {
    const itemInput = document.getElementById('itemInput');
    const newItemText = itemInput.value;

    if (newItemText.trim() !== '') {
        const newItem = document.createElement('li');
        newItem.textContent = newItemText;

        const list = document.getElementById('myList');
        list.appendChild(newItem);

        saveItem(newItemText);

        itemInput.value = '';
    }
}

// Function to save an item to local storage
function saveItem(item) {
    const items = JSON.parse(localStorage.getItem('items')) || [];
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));
}

// Load items when the page is loaded
window.onload = loadItems;
// Function to toggle the visibility of the list
function toggleList() {
    const list = document.getElementById('myList');
    if (list.style.display === 'none' || list.style.display === '') {
        list.style.display = 'block';
    } else {
        list.style.display = 'none';
    }
}

// If you have additional functionality to load or add items,
// ensure those functions are also included in this script.
const items = document.querySelectorAll('#item-list li');

items.forEach(item => {
    const arrow = document.createElement('span');
    arrow.textContent = ' →';
    item.appendChild(arrow);
});

        
