const myMap = new Map();
myMap.set('id',3)
myMap.set('name','honda')

// console.log(myMap.get('name'));

const valueList = myMap.values();

for(value of valueList){
  console.log(value);
}