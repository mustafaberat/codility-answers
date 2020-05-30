/*A non-empty array A consisting of N integers is given. The product of triplet (P, Q, R) equates to A[P] * A[Q] * A[R] (0 ≤ P < Q < R < N).

For example, array A such that:

  A[0] = -3
  A[1] = 1
  A[2] = 2
  A[3] = -2
  A[4] = 5
  A[5] = 6
contains the following example triplets:

(0, 1, 2), product is −3 * 1 * 2 = −6
(1, 2, 4), product is 1 * 2 * 5 = 10
(2, 4, 5), product is 2 * 5 * 6 = 60
Your goal is to find the maximal product of any triplet.

Write a function:

class Solution { public int solution(int[] A); }

that, given a non-empty array A, returns the value of the maximal product of any triplet.

For example, given array A such that:

  A[0] = -3
  A[1] = 1
  A[2] = 2
  A[3] = -2
  A[4] = 5
  A[5] = 6
the function should return 60, as the product of triplet (2, 4, 5) is maximal.*/


// -10, -2, -4 => -80 
// 4, 5, 1, 0 => 20
// -3 1 2 -2 5 6 => 60 due to 2 4 5
// -5, 5, -5, 4 => 125 !!!!!!!! not only last 3 or first 3
function solution(A) {
    let len = A.length;
    A.sort((a, b) => a - b);
    return Math.max(
        A[0] * A[1] * A[2],// First 3
        A[len - 1] * A[len - 2] * A[len - 3], //Last 3
        A[0] * A[1] * A[len - 1],// -10 -10 0 +10
    );
    // A[0]*A[len-1]*A[len-2] // -10 0 +10 +10 => not possible 
}







/* First glance - not optimal:
// -10, -2, -4 => -80
// 4, 5, 1, 0 => 20
// -3 1 2 -2 5 6 => 60 due to 2 4 5
function solution(A) {
    var max = -9999999999999999;
    for(var i = 0, len = A.length  ; i<len ; ++i){
     for(var k = i+1 ; k<len ; ++k){
         for(var j = k+1; j<len; ++j){
             result = A[i]*A[j]*A[k];
            if(i < k && i < j && k<j && Math.max(result,max) !== max) {
                max = result;
                }
            }
        }
    }
    return max;
}
*/