#include<iostream>
#include<vector>
using namespace std;

/*
Time Complexity:
- push(): O(1)
- pop(): O(1)
- top(): O(1)
- getMin(): O(n)  // we scan the whole array

Space Complexity:
- O(n)  // we store all elements in the vector
*/

class MinStack
{
private:
    vector<int> elements; // stores stack values

public:
    MinStack()
    {
        // nothing special to initialize
    }

    void push(int value)
    {
        // push element at the end (stack behavior)
        elements.push_back(value);
    }

    void pop()
    {
        // remove last element (no safety check, assuming valid usage)
        elements.pop_back();
    }

    int top()
    {
        // return last inserted element
        return elements[elements.size() - 1];
    }

    int getMin()
    {
        // assume at least one element exists
        int currentMin = elements[0];

        // brute force: iterate entire vector to find min
        for (int i = 0; i < elements.size(); i++)
        {
            if (currentMin > elements[i])
            {
                currentMin = elements[i];
            }
        }

        return currentMin;
    }
};

int main()
{
    MinStack minStack;

    // pushing elements
    minStack.push(1);
    minStack.push(2);
    minStack.push(0);

    // should print 0
    cout << "Valor min: " << minStack.getMin() << endl;

    // remove top element (0)
    minStack.pop();

    // should print 2
    cout << "Valor: " << minStack.top() << endl;

    // calling getMin again (not printed)
    minStack.getMin(); // should return 1

    return 0;
}