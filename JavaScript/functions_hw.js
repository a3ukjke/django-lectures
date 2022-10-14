function sleepIn(weekday, vacation) {
    if (weekday === false && vacation === false){
      console.log(true);
    } else if(weekday=== true && vacation === false){
      console.log(false);
    } else if (weekday === false && vacation === true) {
      console.log(true);
    }
}
var country1 = "USA"
var country2 = "Germany"
var country3 = "China"
var countries = ["USA","Germany","China"]
console.log(countries);
var countries = [country1,country2,country3]
console.log(countries);
console.log(countries[0]);
console.log(countries[1]);
console.log(countries[2]);
countries[2]="France"
console.log(countries);
countries[3]="Spain"
console.log(countries);
console.log(countries.length);
var mixed = [true,20,"string"]
console.log(mixed);

var myArr = ['one','two','three']
var lastItem = myArr.pop()
console.log(lastItem);
console.log(myArr);
myArr.push('new_item')
console.log(myArr);
console.log(myArr[myArr.length - 1]);
console.log(myArr[0]);

var matrix = [[1,2,3],[4,5,6],[7,8,9]]
console.log(matrix);
console.log(matrix[0]);

var arr = ["A","B","C"]
for (var i = 0; i < arr.length; i++){
  console.log(i+" : "+arr[i]);
}

for (letter of arr){
  console.log(letter);
  //alert(letter);
}
arr.forEach(alert);



function addAwesome(name){
  console.log(name+" is awesome!");
}
addAwesome("django")

var topics =["python","django","science"]
topics.forEach(addAwesome)
