function customFilter(arr, fn) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
      const currentValue = arr[i];
      const shouldInclude = fn(currentValue, i);
      
      if (shouldInclude) {
        filteredArr.push(currentValue);
      }
    }
    return filteredArr;
  }
  
  // Example 1
  const arr1 = [0, 10, 20, 30];
  const greaterThan10 = function greaterThan10(n) {
    return n > 10;
  };
  const result1 = customFilter(arr1, greaterThan10);
  console.log(result1); // Output: [20, 30]
  
  // Example 2
  const arr2 = [1, 2, 3];
  const firstIndex = function firstIndex(n, i) {
    return i === 0;
  };
  const result2 = customFilter(arr2, firstIndex);
  console.log(result2); // Output: [1]
  
  // Example 3
  const arr3 = [-2, -1, 0, 1, 2];
  const plusOne = function plusOne(n) {
    return n + 1;
  };
  const result3 = customFilter(arr3, plusOne);
  console.log(result3); // Output: [-2, 0, 1, 2]

  





