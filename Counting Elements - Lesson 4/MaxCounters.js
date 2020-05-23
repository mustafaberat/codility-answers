/* PROBLEM:
You are given N counters, initially set to 0, and you have two possible operations on them:

increase(X) − counter X is increased by 1,
max counter − all counters are set to the maximum value of any counter.
A non-empty array A of M integers is given. This array represents consecutive operations:

if A[K] = X, such that 1 ≤ X ≤ N, then operation K is increase(X),
if A[K] = N + 1 then operation K is max counter.
For example, given integer N = 5 and array A such that:

    A[0] = 3
    A[1] = 4
    A[2] = 4
    A[3] = 6
    A[4] = 1
    A[5] = 4
    A[6] = 4
the values of the counters after each consecutive operation will be:

    (0, 0, 1, 0, 0)
    (0, 0, 1, 1, 0)
    (0, 0, 1, 2, 0)
    (2, 2, 2, 2, 2)
    (3, 2, 2, 2, 2)
    (3, 2, 2, 3, 2)
    (3, 2, 2, 4, 2)
The goal is to calculate the value of every counter after all operations.

Write a function:

function solution(N, A);

that, given an integer N and a non-empty array A consisting of M integers, returns a sequence of integers representing the values of the counters.

Result array should be returned as an array of integers.

For example, given:

    A[0] = 3
    A[1] = 4
    A[2] = 4
    A[3] = 6
    A[4] = 1
    A[5] = 4
    A[6] = 4
the function should return [3, 2, 2, 4, 2], as explained above.

Write an efficient algorithm for the following assumptions:

N and M are integers within the range [1..100,000];
each element of array A is an integer within the range [1..N + 1].
*/

function solution(N, A) {
    counters = new Array(N);
    counters.fill(0);
    for (let i = 0, len = A.length; i < len; i++) {
        if (A[i] <= N) {
            counters[A[i] - 1] += 1
        } else {
            counters.fill(Math.max(...counters))
        }
        // console.log("New arr: ",counters);
    }
    return counters;
}

/*
Alternative:
function solution(N, A){
	var mx = 0, def = 0;
	arr = new Array(N).fill(0);
	for(i = 0, n = A.length; i < n; ++i){
		if(A[i] > N) def = mx;
		else{
			arr[A[i] - 1] = Math.max(def, arr[A[i] - 1]);
			mx = Math.max(++arr[A[i] - 1], mx);
		}
	}
	for(i = 0; i < N; ++i) arr[i] = Math.max(arr[i], def);
	return arr;
}
*/