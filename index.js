function hasTargetSum(array, target) {
  for(let i = 0; i < array.length; i++){
      const newNum = target - array[i] 
      for(let j = i+1; j < array.length; j++){
        if(array[j] === newNum){
          return true
        }
      }
    }
    return false
  }

 /* Write your algorithm here
  write a function that takes an array argument and a target number.
  the function should take two numbers of the array and add them together.
  if the added numbers = the target number return true. Else return false
 */
/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  iterate through array using i variable
  if i minus target = any of the previous numbers itterted return true????
  if not return false
*/

/*
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

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([6, 12, 4, 7, 8], 14));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([6, 2, 5, 8], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 4, 5, 6], 8));

}

module.exports = hasTargetSum;
