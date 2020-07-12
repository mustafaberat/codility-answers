/*Write a function:

class Solution { public int solution(int A, int B, int K); }

that, given three integers A, B and K, returns the number of integers within the range [A..B] that are divisible by K, i.e.:

{ i : A ≤ i ≤ B, i mod K = 0 }

For example, for A = 6, B = 11 and K = 2, your function should return 3, because there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.

Write an efficient algorithm for the following assumptions:

A and B are integers within the range [0..2,000,000,000];
K is an integer within the range [1..2,000,000,000];
A ≤ B.*/

// [0, 0, 11] => 1
// [1, 1, 11] => 0
// [6, 11, 2] => 3          6 8 10
// [5, 15, 4] => 3          9 13 17

function solution(A, B, K) {
    return (B/K) - (A/K) + (A%K == 0 ? 1 : 0);
}

/*
function solution(A, B, K) {
    if (K === 1) return B - A + 1; //For too large array to tricks
    let counter = 0;
    while (A <= B) {
        if (A % K === 0) {
            A += K;
            counter++;
        } else {
            A += K - (A % K);//Better than look one by one = A++
        }
    }
    return counter;
}*/

/* First think, I thought I could do better about time performance
function solution(A, B, K) {
    let counter = 0 ;
    for(let i = A ; i<=B; i++){
        if(i % K === 0){
            counter++;
            i = K + i - 1; //Go to next
        }
    }
    console.log("Result: ", counter, "when:", A,B,K);
    return counter;
}*/
