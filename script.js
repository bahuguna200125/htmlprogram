// document.addEventListener('DOMContentLoaded', function() {
//     console.log('Hello! Welcome to the page.');
// });
// const myDiv = document.getElementById('row1');

//         myDiv.addEventListener('click', function(event) {
//             console.log('Div clicked!');
//             var myDiv = document.getElementById('myDiv');
//             myDiv.style.backgroundColor = 'lightgreen';
const row1 = document.getElementById('row1');
row1.addEventListener('mouseover',function(event) {
console.log('row clicked!');
            // var row1byamit = document.getElementById('row1');
            event.currentTarget.style.backgroundColor = 'lightgrey';
})
                row1.addEventListener('mouseout',function(event) {
                console.log('row clicked!');
                            // var row1byamit = document.getElementById('row1');
                            event.currentTarget.style.backgroundColor = 'white';
                               
      
        });
        const row2 = document.getElementById('row2');
        row2.addEventListener('mouseover',function(event) {
        console.log('row clicked!');
                    // var row2byamit = document.getElementById('row2');
                    event.currentTarget.style.backgroundColor = 'lightgrey';
        });
        row2.addEventListener('mouseout',function(event) {
            console.log('row clicked!');
                        // var row2byamit = document.getElementById('row2');
                        event.currentTarget.style.backgroundColor = 'white';
            });
        const row3 = document.getElementById('row3');
        row3.addEventListener('mouseover',function(event) {
        console.log('row clicked!');
                    // var row3byamit = document.getElementById('row3');
                    event.currentTarget.style.backgroundColor = 'lightgrey';
        })


        row3.addEventListener('mouseout',function(event) {
            console.log('row3 mouseout!');
                        // var row3byamit = document.getElementById('row3');
                        event.currentTarget.style.backgroundColor = 'white';
            });


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
