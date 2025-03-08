console.log('Simple debugging example running.')
debugger

let x = 99
debugger
console.log(x)


function someFunction() {
    debugger;  // Program will pause here when dev tools are open
    let result = someOperation();
    console.log(result);
  }
  