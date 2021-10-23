 const postalCade = "123-4567";

const postal = {
  postalCade: "123-4567",
  checkPostalCade(){
    const replaced =  this.postalCade.replace('-','').length
    // const length =  replaced.length
    if(replaced === 7){
      return true
    }
    return false
  }
}

//  function checkPostalCade (string){
//   const replaced =  string.replace('-','');
//   const length =  replaced.length
//   if(length === 7){
//     return true
//   }
//   return false
//  }

 console.log(postal.checkPostalCade());