/*An array A consisting of N integers is given. The dominator of array A is the value that occurs in more than half of the elements of A.

For example, consider array A such that

 A[0] = 3    A[1] = 4    A[2] =  3
 A[3] = 2    A[4] = 3    A[5] = -1
 A[6] = 3    A[7] = 3
The dominator of A is 3 because it occurs in 5 out of 8 elements of A (namely in those with indices 0, 2, 4, 6 and 7) and 5 is more than a half of 8.

Write a function

function solution(A);

that, given an array A consisting of N integers, returns index of any element of array A in which the dominator of A occurs. The function should return −1 if array A does not have a dominator.

For example, given array A such that

 A[0] = 3    A[1] = 4    A[2] =  3
 A[3] = 2    A[4] = 3    A[5] = -1
 A[6] = 3    A[7] = 3
the function may return 0, 2, 4, 6 or 7, as explained above.*/


//BETTER:
function solution(A) {
    var counters = [], len = A.length;
    for (let i of A) {
        (typeof counters[i] == "undefined") ? counters[i] = 1 : counters[i]++;
        if (counters[i] > len >> 1) return A.indexOf(i);
    }
    return -1;
}



/* First look:
// 3 4 3 2 3 -1 3 3
// 1 1 2 1 3  1 4 5 = Counters arr
function howManyBefore(index, A) {
    let counter = 1
    for (let i = 0; i < index; i++) if (A[i] === A[index]) counter++;
    return counter;
}

function solution(A) {
    len = A.length;
    counters = new Array(len).fill(0);
    for (let i = 0; i < len; i++) counters[i] += howManyBefore(i, A);
    let maxRepeated = Math.max(...counters);
    return (len >> 1) < maxRepeated ? counters.indexOf(maxRepeated) : -1
}
*/