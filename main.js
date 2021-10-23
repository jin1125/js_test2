 const postalCade = "123-4567";
 function checkPostalCade (string){
  const replaced =  string.replace('-','');
  const length =  replaced.length
  if(length === 7){
    return true
  }
  return false
 }

 console.log(checkPostalCade(postalCade ));