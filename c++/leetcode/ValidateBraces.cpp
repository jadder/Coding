/*# https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/python
# Solution
# The problem can be solved using a stack-based approach.
# For every opening symbol, we expect a corresponding closing symbol.
#
# Approach:
# 1. Iterate through each character in the string.
# 2. When an opening bracket is found ('(', '{', '['),
#    push its corresponding closing bracket onto a stack.
# 3. When a closing bracket is found, check:
#    - If the stack is empty → invalid (no matching opening bracket).
#    - If the top of the stack does not match → invalid.
#    - Otherwise, pop the stack and continue.
#
# 4. After processing all characters:
#    - If the stack is empty → valid string.
#    - If not → invalid (there are unmatched opening brackets).
#
# This works because a stack follows LIFO (Last In, First Out),
# which naturally matches the nested structure of balanced brackets.*/

#include <iostream>
#include <string>
#include <stack>

bool valid_braces(const std::string &braces) ;


int main(){
    std::string lista [] = { "(){}[]", "([{}])", "(}", "[(])", "[({})](]" };

    for(const std::string& l : lista){
        bool result = valid_braces(l);
        if (result){
            std::cout << "True" << std::endl;
        }else{
            std::cout << "False" << std::endl;
        }
    }
    return 0;
}

// function definition
bool valid_braces(const std::string &braces)
{
    if (braces.size() %2 != 0) return false;

    std::stack<char> closing;
    bool result = true;

    for(char c : braces){
        switch(c) {
            case '{' : closing.push('}'); break;
            case '(' : closing.push(')'); break;
            case '[' : closing.push(']'); break;
            default:
                if (closing.empty() || c != closing.top() ) {
                    result = false;
                    break;
                }
                closing.pop();
                break;
        }
    }
    return result;
}
