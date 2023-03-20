const Array = [100,2,3,4,5,6,7,8,9];
function minValue(array, callback){
  let min = array[0];
  for (let i = 1; i < array.length; i++){
    if (array[i] < min){
      min = array[i];
    }
  }
  return callback(min);
}

const minValueExample = minValue(Array, function(result){
  return result * 2;
})

console.log(minValueExample);