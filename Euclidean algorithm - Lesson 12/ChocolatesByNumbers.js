/*Two positive integers N and M are given. Integer N represents the number of chocolates arranged in a circle, numbered from 0 to N − 1.

You start to eat the chocolates. After eating a chocolate you leave only a wrapper.

You begin with eating chocolate number 0. Then you omit the next M − 1 chocolates or wrappers on the circle, and eat the following one.

More precisely, if you ate chocolate number X, then you will next eat the chocolate with number (X + M) modulo N (remainder of division).

You stop eating when you encounter an empty wrapper.

For example, given integers N = 10 and M = 4. You will eat the following chocolates: 0, 4, 8, 2, 6.

The goal is to count the number of chocolates that you will eat, following the above rules.

Write a function:

function solution(N, M);

that, given two positive integers N and M, returns the number of chocolates that you will eat.

For example, given integers N = 10 and M = 4. the function should return 5, as explained above.

Write an efficient algorithm for the following assumptions:

N and M are integers within the range [1..1,000,000,000].*/


// O(log(N + M))
function solution(N, M) {
    return N / ff(N, M);
}

ff = (N, M) => {
    if (N % M === 0) return M;
    else return ff(M, N % M);
}


/*Not optimal for long arr - O(N+M)
function solution(N, M) {
    let eaten = new Array(N).fill(0);
    start = 0, eaten[start] = 1;
    while(true){
        let current = (start += M) % N;
        if(eaten[current] === 0) eaten[current] = 1
        else break;
    }

    return eaten.filter(number => number === 1).length;
}

OR

function solution(N, M) {
    let eaten = [0];
    start = 0;
    while(true){
        let current = (start += M) % N;
        if(eaten.includes(current)) break;
        else eaten.push(current);
    }
    return eaten.length;
}

*/
