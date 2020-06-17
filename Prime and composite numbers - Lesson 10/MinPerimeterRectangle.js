/*An integer N is given, representing the area of some rectangle.

The area of a rectangle whose sides are of length A and B is A * B, and the perimeter is 2 * (A + B).

The goal is to find the minimal perimeter of any rectangle whose area equals N. The sides of this rectangle should be only integers.

For example, given integer N = 30, rectangles of area 30 are:

(1, 30), with a perimeter of 62,
(2, 15), with a perimeter of 34,
(3, 10), with a perimeter of 26,
(5, 6), with a perimeter of 22.
Write a function:

class Solution { public int solution(int N); }

that, given an integer N, returns the minimal perimeter of any rectangle whose area is exactly equal to N.

For example, given an integer N = 30, the function should return 22, as explained above.*/

// 48  => 6.97 = 6 8
// 30  => 5.7 =  5 6
// 101 => 10.04 = 1 101
// 1234  => 35.12 => 617 2 => 1238

function solution(N) {
    for (let i = Math.floor(Math.sqrt(N)); i > 0; i--)
        if (N % i === 0) return 2 * (i + (N / i))
}