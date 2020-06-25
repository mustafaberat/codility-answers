/*A prime is a positive integer X that has exactly two distinct divisors: 1 and X. The first few prime integers are 2, 3, 5, 7, 11 and 13.

A semiprime is a natural number that is the product of two (not necessarily distinct) prime numbers. The first few semiprimes are 4, 6, 9, 10, 14, 15, 21, 22, 25, 26.

You are given two non-empty arrays P and Q, each consisting of M integers. These arrays represent queries about the number of semiprimes within specified ranges.

Query K requires you to find the number of semiprimes within the range (P[K], Q[K]), where 1 ≤ P[K] ≤ Q[K] ≤ N.

For example, consider an integer N = 26 and arrays P, Q such that:

    P[0] = 1    Q[0] = 26
    P[1] = 4    Q[1] = 10
    P[2] = 16   Q[2] = 20
The number of semiprimes within each of these ranges is as follows:

(1, 26) is 10,
(4, 10) is 4,
(16, 20) is 0.
Write a function:

function solution(N, P, Q);

that, given an integer N and two non-empty arrays P and Q consisting of M integers, returns an array consisting of M elements specifying the consecutive answers to all the queries.

For example, given an integer N = 26 and arrays P, Q such that:

    P[0] = 1    Q[0] = 26
    P[1] = 4    Q[1] = 10
    P[2] = 16   Q[2] = 20
the function should return the values [10, 4, 0], as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..50,000];
M is an integer within the range [1..30,000];
each element of arrays P, Q is an integer within the range [1..N];
P[i] ≤ Q[i].*/


function solution(N, P, Q) {
    arr = Array(N + 1).fill(0);
    i = 2
    while (i * i <= N) {
        if (arr[i] === 0) {
            k = i * i;
            while (k <= N) {
                if (arr[k] === 0) arr[k] = i
                k += i
            }
        }
        i++;
    }

    sum = 0
    semi = Array(N + 1).fill(0)
    for (i = 1; i <= N; i++) {
        if (arr[i] !== 0 && arr[i / arr[i]] === 0) sum++;
        semi[i] = sum
    }

    for (let j = 0, len = P.length; j < len; j++) {
        P[j] = semi[Q[j]] - semi[P[j] - 1]
    }
    return P;
}


/* FIRST LOOK - Not optimal:
findBetween = (f,s, primes) => {
    semiPrimes = []
    for(let i=0, len = primes.length; i<len; i++){
        for(let j = i; j<len ; j++){
            product = primes[i]*primes[j]
            if(product > s || product<f) break
            else semiPrimes.push(product)
        }
    }
    return semiPrimes.length
}

generatePrimes = (N) =>{
    myPrimes = []
    for(let j = 2; j<=N; j++){
        divisor = 0
        for(let k = 1; k<=j; k++){
            if(j%k === 0) divisor++
        }
        if(divisor === 2) myPrimes.push(j)
    }
    return myPrimes;
}

function solution(N, P, Q) {
    result = [], primes = []
    primes = generatePrimes(N);
    for(let i = 0, len = P.length; i<len; i++){
        result.push(findBetween(P[i],Q[i],primes));
    }
    return result;
}


*/