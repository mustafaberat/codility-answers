/*A positive integer D is a factor of a positive integer N if there exists an integer M such that N = D * M.

For example, 6 is a factor of 24, because M = 4 satisfies the above condition (24 = 6 * 4).

Write a function:

class Solution { public int solution(int N); }

that, given a positive integer N, returns the number of its factors.

For example, given N = 24, the function should return 8, because 24 has 8 factors, namely 1, 2, 3, 4, 6, 8, 12, 24. There are no other factors of 24.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..2,147,483,647].*/

function solution(N) {
    counter = 0, i = 1
    while (i < Math.sqrt(N)) {
        if (N % i === 0) counter += 2;
        i++;
    }
    if (Math.sqrt(N) === i) counter++;
    return counter;
}


/* Option 2:
function solution(N) {
    counter = 0, i = 1
    while(i*i < N) {
        if(N % i === 0) counter+=2
        i++;
    }
    if(N === i*i) counter++
    return counter;
}
*/


/*First look - Not optimal for time
function solution(N) {
    counter = 1, i = N
    while(i--) if(N % i === 0) counter++;
    return counter
}
*/