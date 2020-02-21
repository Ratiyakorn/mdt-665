// while and for loop
// var sum = 0, sum2=0;
// var i = 0;
// while (i<100){
//     if (i%2 ==0)
//     {
//       sum = sum + i;  
//     }
//     i++;
// }
// console.log(sum);

// for (var i2 = 0; i2<100; i2++){
//     if (i2%3 ==0)
//     {
//         sum2 = sum2+i2;
//     }
// }
// console.log(sum2);

// Array1
// var a = ["Pikachu","Squritle"];
// console.log(a);
// a.push("Magikarp");
// console.log(a);
// a.unshift("Charmander");
// console.log(a);
// a.pop();
// console.log(a);
// a.sort();
// console.log(a);

//Array as an object
// var car ={type:"Fiat",model:"500",color:"White"};
// console.log(car.color);


function myFunction(){
    alert("Hello!");
}

function pageLoad(){
    var clickButton = document.getElementById("clickme");
    clickButton.onclick = myFunction;
}

window.onload = pageLoad;
function pageLoad(){
    var form = document.getElementById("myForm");
    form.onsubmit = myFunction;
}
function myFunction(){
    alert("OK");
    var x = document.forms["myForm"]["firstname"];
    alert(x.value);
}