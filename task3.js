function getSum(x){
    return function(y){
      return x + y;
    }
  }
  
  let result = getSum(15)(15);
  console.log(result);