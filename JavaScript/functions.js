function hello(){
  console.log("hello world!");
}
function helloYou(name){
  console.log("Hello "+name);
}

//var name = prompt("What is your name?")
//alert("Your name is: " + name)
//console.log("Your name is: " + name);
helloYou("Azamat")

function addNum(num1,num2){
  console.log(num1+num2);
}

addNum(1,2)

addNum("hello"," world")

addNum("2",2)

function helloSomeone(name="Frankie"){
  console.log("Hello "+name);
}

function formal(name="Sam",title="Sir"){
  console.log(title + " "+ name);
}

formal(name="Azamat",title="your majesty!")

function formal(name="Sam",title="Sir"){
  return title+ " " +name
}

function timesFive(numInput){
  var result = numInput * 5
  return result
}
console.log("Welcome "+timesFive(4));
var answer=timesFive(10)
console.log(answer);
