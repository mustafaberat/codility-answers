/*
A string S consisting of N characters is considered to be properly nested if any of the following conditions is true:

S is empty;
S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
S has the form "VW" where V and W are properly nested strings.
For example, the string "{[()()]}" is properly nested but "([)()]" is not.

Write a function:

class Solution { public int solution(String S); }

that, given a string S consisting of N characters, returns 1 if S is properly nested and 0 otherwise.

For example, given S = "{[()()]}", the function should return 1 and given S = "([)()]", the function should return 0, as explained above.*/


// { [ ( ) ( ) ] } => 1
function solution(S) {
    var brackets = {
        "{": "}",
        "[": "]",
        "(": ")",
    }
    var stack = [], len = S.length
    if (len % 2 === 1) return 0
    for (let i = 0; i < len; i++) {
        if (brackets.hasOwnProperty(S[i])) stack.push(S[i])
        else if (brackets[stack[stack.length - 1]] === S[i]) stack.pop()
        else if (Object.values(brackets).indexOf(S[i]) === -1) return 0
    }
    return stack.length === 0 ? 1 : 0;
}

