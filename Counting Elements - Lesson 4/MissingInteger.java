/*This is a demo task.

Write a function:

class Solution { public int solution(int[] A); }

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].*/



import java.util.HashSet;
class Solution {
    public int solution(int[] A) {
        HashSet<Integer> seen = new HashSet<Integer>();

        for(int i = 0, len = A.length; i<len; i++){
            if(A[i] > 0) seen.add(A[i]);
        }

        for(int i = 1, max = Integer.MAX_VALUE; i<max; i++){
            if(!seen.contains(i)) return i;
        }
        
        return 1;
    }
}








/*
Not optimal for big arr
// import java.util.*;
class Solution {
    public boolean isInclude(int[] A, int counter){
        for(int item:A) if(item == counter) return true;
        return false;
    }
    
    public int solution(int[] A) {
        int counter = 1;
        while(true){
            if (isInclude(A,counter)) counter++;
            else break;
        }
        return counter;
    }
}*/
