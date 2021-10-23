const fruits = ["apple", "banana"];
fruits.push("orange");

// console.log(fruits);

fruits.forEach(input => console.log(input));

// function getItem(){}

const getItem = () => console.log("arrow");
getItem();


const scores = [10,20,30,40];
const newScores = scores.filter((value)=>{
  return value >=30;
})

console.log(newScores);

const members = ['honda','kagawa','nagatomo']

const member = members.find((value)=>{
 return value === 'nagatomo' 
})

console.log(member);

const userList = [10,20,30,40]
const userIdList = userList.map((value)=>{
  return `user_${value}`
})

console.table(userIdList);

