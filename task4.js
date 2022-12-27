function getNum(x, y) {
    let intervalId = setInterval(function() {
      console.log(x);
      if (x === y) {
        clearInterval(intervalId);
      } else {
        x++;
      }
    }, 1000);
  }
  getNum(5, 15);