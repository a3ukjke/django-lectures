var hot = false
var temp = 50

if (true) {
  console.log("I ran");
}

if (temp>80) {
  console.log("Temp is greater than 80");
}
else {
  console.log("Temp is less than 80");
}

if (temp>80){
  console.log("Hot Outside!")
}else {
  console.log("Its not very hot today!")
}
console.log(hot);

var temp = 100;
if (temp>80) {
  console.log("Hot Outside!")
}else if (temp <= 80 && temp >= 50) {
  console.log("Average temp outside")
}else if (temp < 50 && temp >= 32) {
  console.log("Its pretty cold out!")
}else {
  console.log("It is very cold out!")
}

console.log("================ while Loop ===============");

var x = 0;

while (x < 5) {
  if (x===3) {
    console.log("X IS EQUAL TO THREE!");
    break;
  }
  console.log("x is currently: " + x);
  console.log("x is still less than 5, adding 1 to x");
  x = x + 1;
}

var num = 0;
while (num < 11){
  if (num %2 === 0) {
    console.log("even: " + num);
  }
  else if (num%2 !== 0) {
    console.log("odd: " + num);

  }
  num = num + 1
}
