const hour =new Date().getHours();
let greeting;
if (hour < 18) {
greeting = "Good day.";    
}
else{
    greeting = "Good evening."
}
console.log (greeting)
document.getElementById("time").innerHTML = greeting;


var number=1920;
var result;
if(number > 1000){
    result = "its a thousands numbber"

}
else if(
    number >  100
)
{
    result = "the number is a hundreds number"
}
else{
    result = "this number is under a hundred"
}
console.log (result)
document.getElementById("numbers").innerHTML = result
document.getElementById("number").innerHTML = number



