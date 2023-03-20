function six(number, append) {
  if (typeof (number) == "number" && typeof(append === "number")) {
    return number + append;
  }else {
    console.error("no number")
  }
}

function seven(number, append){
  return number + append;
}

// 인자를 전달 받는다.
function eight(number, append, callback){
  let a = number + 1;
  let b = append + 2;
  return callback(a,b);
}

console.log(eight(1,2,function(a,b){
  return a + b;
}))
console.log(eight(3,4,seven));