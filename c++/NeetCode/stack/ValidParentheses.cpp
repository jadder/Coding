#include <iostream>
#include <stack>
using namespace std;

/*
Time Complexity: O(n)
- We iterate through the string once.

Space Complexity: O(n)
- In the worst case, the stack stores all opening brackets.
*/

class Solution
{
public:
    bool isValid(string input)
    {
        // If length is odd, it can never be valid
        if (input.size() % 2 != 0) return false;

        stack<char> expectedClosings; // stack to store expected closing brackets
        bool isStillValid = true;

        for (int i = 0; i < input.size(); i++)
        {
            switch (input[i])
            {
                // When we see an opening bracket,
                // we push the EXPECTED closing bracket
                case '(':
                    expectedClosings.push(')');
                    break;

                case '{':
                    expectedClosings.push('}');
                    break;

                case '[':
                    expectedClosings.push(']');
                    break;

                // When we see a closing bracket,
                // we validate against the stack top
                case ')':
                    if (expectedClosings.empty() || expectedClosings.top() != ')')
                    {
                        isStillValid = false;
                        break;
                    }
                    expectedClosings.pop();
                    break;

                case '}':
                    if (expectedClosings.empty() || expectedClosings.top() != '}')
                    {
                        isStillValid = false;
                        break;
                    }
                    expectedClosings.pop();
                    break;

                case ']':
                    if (expectedClosings.empty() || expectedClosings.top() != ']')
                    {
                        isStillValid = false;
                        break;
                    }
                    expectedClosings.pop();
                    break;

                default:
                    break;
            }
        }

        // Valid only if:
        // 1. We never broke the rules
        // 2. Stack is empty (everything matched)
        if (isStillValid && expectedClosings.empty())
        {
            return true;
        }
        else
        {
            return false;
        }
    }
};

int main()
{
    Solution sol;

    string input = "([{}])";
    input = "]]";
    input = "((";

    bool result = sol.isValid(input);

    if (result)
    {
        cout << "It is valid: " << result << endl;
    }
    else
    {
        cout << "It is not valid: " << result << endl;
    }

    return 0;
}