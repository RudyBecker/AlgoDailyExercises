//  QUICK SORT

let values = [50, 34, 21, 2, 3, 5, 7, 9];

function quickSort(values) {
  if (values.length <= 1) {
    return values;
  }

  let lessThanPivot = [];
  let greaterThanPivot = [];
  const pivot = values.shift();

  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    value <= pivot ? lessThanPivot.push(value) : greaterThanPivot.push(value);
  }

  return [...quickSort(lessThanPivot), pivot, ...quickSort(greaterThanPivot)];
}

console.log(quickSort(values));
