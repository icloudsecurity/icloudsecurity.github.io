var from = "13/02/1997".split("/");
var birthdateTimeStamp = new Date(from[2], from[1] - 1, from[0]);
var cur = new Date();
var diff = cur - birthdateTimeStamp; // Difference in milliseconds
var currentAge = Math.floor(diff/31557600000);  // Divide by 1000*60*60*24*365.25
document.getElementsByClassName("age")[0].innerHTML = currentAge;