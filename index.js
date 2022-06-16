function hasTargetSum(array, target) {
  // Write your algorithm here
   
  for (let i=0; i<array.length; i++ ){
    for (let j= i+1; j< array.length; j++){

    if (array[i] + array[j] === target)
      
     return true
    }
  }

  return false

   
  
     
}

  // Write your algorithm here
  /*
  /O(n^2)
  Write the Big O time complexity of your function here
*

/* 
  

  loop through array using a nested for
  sum up array items 
  compare results
  return true if they match target

*/

/*Add your pseudocode here
  create a function that iterates through the array and sums array items
  it also compares the resulting sum with our target
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
