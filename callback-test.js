function one(first, second, callback) {
  let sum = first + second;
  return callback(sum);
};

// const oneCallBack = one(1, 2, function (result) {
//   let callresult = result * 2;
//   return callresult;
// });

const hi = one(1, 2, function (result) {
  return result * 2;
});

console.log(hi);
