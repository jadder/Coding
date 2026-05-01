/*
Time Complexity:
- push(x): O(1)
- pop(): O(1)
- top(): O(1)
- empty(): O(1)

Space Complexity:
- O(n) where n is the number of elements stored in the stack
*/

#include <cassert>
#include <iostream>
#include <vector>

using namespace std;

class MyStack
{
private:
    // internal container to store stack elements
    vector<int> data;

public:
    MyStack()
    {
        // nothing to initialize explicitly
    }

    // push element to the top of the stack
    void push(int x)
    {
        data.push_back(x);
    }

    // remove and return the top element
    // NOTE: assumes stack is not empty (no safety checks added)
    int pop()
    {
        int topElement = data.back();
        data.pop_back();
        return topElement;
    }

    // return the top element without removing it
    int top()
    {
        return data.back();
    }

    // check if the stack is empty
    bool empty()
    {
        return data.empty();
    }
};

/**
 * Your MyStack object will be instantiated and called as such:
 * MyStack* obj = new MyStack();
 * obj->push(x);
 * int param_2 = obj->pop();
 * int param_3 = obj->top();
 * bool param_4 = obj->empty();
 */


int main()
{
    {
        cout << "Test 1: Basic operations" << endl;
        MyStack s;

        s.push(1);
        s.push(2);

        assert(s.top() == 2);
        assert(s.pop() == 2);
        assert(s.empty() == false);
    }

    {
        cout << "Test 2: Multiple pushes" << endl;
        MyStack s;

        s.push(10);
        s.push(20);
        s.push(30);

        assert(s.top() == 30);
        assert(s.pop() == 30);
        assert(s.top() == 20);
    }

    {
        cout << "Test 3: Pop until empty" << endl;
        MyStack s;

        s.push(5);
        s.push(6);

        assert(s.pop() == 6);
        assert(s.pop() == 5);
        assert(s.empty() == true);
    }

    {
        cout << "Test 4: Interleaved operations" << endl;
        MyStack s;

        s.push(1);
        assert(s.top() == 1);

        s.push(2);
        assert(s.top() == 2);

        assert(s.pop() == 2);
        assert(s.top() == 1);

        s.push(3);
        assert(s.top() == 3);
    }

    {
        cout << "Test 5: Single element" << endl;
        MyStack s;

        s.push(42);
        assert(s.top() == 42);
        assert(s.pop() == 42);
        assert(s.empty() == true);
    }

    cout << "All tests passed ✅" << endl;
    return 0;
}
