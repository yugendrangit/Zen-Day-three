// Compare two JSON have the same properties without order.

let obj1 = { name: "person 1", age: 5 };
let obj2 = { age: 5, name: "person 1" };

var compare = true;
if (Object.keys(obj1).length === Object.keys(obj2).length) {
  for (var keys in obj1) {
    if (obj1[keys] == obj2[keys]) {
      continue;
    } else {
      compare = false;
    }
  }
} else {
  compare = false;
}
console.log(compare);

// Use rest countries URL and print all the countries name, region, subregion and population.

var countries = new XMLHttpRequest();
countries.open("GET","https://restcountries.com/v3.1/all")
countries.send();
countries.onload = function(){
  var data = countries.response;
  // console.log(data)
  var result = JSON.parse(data)
  // console.log(result)
  for(var i=0;i<result.length;i=i+1){
    console.log("Country Name:"+" "+result[i].name.common,"region:"+" "+result[i].region,"Subregion:"+" "+result[i].subregion,"Population:"+" "+result[i].population)
  }
}

// Use rest countries URL and print all the countries Flag.

var myFlag = new XMLHttpRequest();
myFlag.open("GET","https://restcountries.com/v3.1/all")
myFlag.send();
myFlag.onload = function(){
  var dataFlag = myFlag.response;
  // console.log(dataFlag)
  var print = JSON.parse(dataFlag)
  // console.log(print)
  for(var i=0;i<print.length;i=i+1){
    console.log("Country Flag:"+" "+print[i].flags.png)
  }
}