function fib() {
    let num0 = 0;
    let num1 = 0;
    let sum = 0;
    function nacci() {
        sum === 0 ? sum = 1 : sum = num0 + num1;
        console.log(sum);
        num0 = num1;
        num1 = sum;
    }
    return nacci;
  }
  var fibCounter = fib();
  fibCounter(); // should console.log "1"
  fibCounter(); // should console.log "1"
  fibCounter(); // should console.log "2"
  fibCounter(); // should console.log "3"
  fibCounter(); // should console.log "5"
  fibCounter(); // should console.log "8"