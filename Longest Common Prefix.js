/* 
14. Longest Common Prefix
https://leetcode.com/problems/longest-common-prefix/

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
*/

const romanToInt = function(s) {    
  const symbols = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  }
  
  let result = 0;
  
  for (let i = 0; i < s.length; i++) {
      if (symbols[s[i]] < symbols[s[i + 1]]) {
          result -= symbols[s[i]];
      } else {
          result += symbols[s[i]];
      }
  }
  
  return result;
};