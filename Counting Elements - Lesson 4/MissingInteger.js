/*Write a function:

class Solution { public int solution(int[] A); }

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].*/

//Third time:   
function solution(A) {
    let counter = 1;
    while (1) {
        if (A.includes(counter))
            counter++
        else
            return counter;
    }
}


//Second time, I thought I could do with less code
/*
function solution(A) {
    A= A.filter((item,index)=>A.indexOf(item) === index && item>0)
    A.sort(function(a, b){return a-b});
    let counter = 1;
    for(let i =0,len = A.length; i<len; i++){
        if(counter !== A[i]){
            return counter;
        } else{
            counter++;
        }
    }
    return counter;
}*/


// First code - not optimal to performance because i look each element:
/*
function solution(A) {
    let counter = 1;
    for (let i = 0, len = A.length; i < len; i++) {
        if (A[i] === counter) {
            counter++;
            i = -1;
        }
    }
    return counter;
}
*/
