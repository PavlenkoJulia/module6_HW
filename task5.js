const toThePower = (x, n) => {
    let result = x;
    for (let i = 1; i < n; i++) {
      result *= x;
    };
    return result;
  };
  let x = 4;
  let n = 0;
  
   if (n < 1) {
     console.log('Данные неверны');
   } else {
     console.log(toThePower(x, n));
   };
  
  toThePower(x, n);