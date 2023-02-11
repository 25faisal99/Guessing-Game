var input = document.querySelector('#input');

var button = document.querySelector('button');

input.addEventListener('focus', function (e) {
    input.classList.add('hover');
});
let guess = 0;
button.addEventListener('mouseover', function (e) {
    button.classList.add('hover')
});
button.addEventListener('mouseleave', function (e) {
    button.classList.remove('hover')
});
button.addEventListener('click', function (e) {
    try {
        if (input.value > 5) {
            throw "Must be entered within 1 to 5"             
        }
        else if (input.value < 1) {
            throw "Must be entered within 1 to 5"
        } else {
            callfuntion()
        }
    } catch (error) {
        alert(error)
    }
});
function callfuntion() {
    var randomNumber = parseInt(Math.random() * 5) + 1;
    if (input.value == randomNumber) {
        guess++;
        console.log("You have won the game")
    } else {
        console.log("You haven't won the game")
    }
};
// function callfuntion() {
//     var randomNumber = parseInt(Math.random() * 5) + 1;
//     if (input.value == randomNumber) {
//         guess++;
//         console.log("You have won the game")
//     } else {
//         console.log("You haven't won the game")
//     }
// };
//  var rendomNumber =  parseInt(Math.random()*5)+1;
//  console.log(rendomNumber)