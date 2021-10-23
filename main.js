const test_1 = 4;
let test_2 = 3;
test_2 += 3;
const test_3 = test_1 % test_2;

// console.log(test_3);

const height = 91;

// if(height === 90){
//   console.log('height90');
// }else{
//   console.log('none');
// }

const signal = 'blue';

if(signal === 'red'){
  console.log('stop');
}else if(signal === 'yellow'){
  console.log('one stop');
}else{
  console.log('OK');
}

const speed =60;
if(signal === 'blue'){
  if(speed >= 60){
    console.log('out');
  }
}