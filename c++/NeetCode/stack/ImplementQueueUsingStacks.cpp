#include<iostream>
#include<cassert>
#include<stack>

using namespace std;

/*
Time Complexity:
- push: O(1)
- pop: Amortized O(1)
- peek: Amortized O(1)
- empty: Amortized O(1)

Explanation:
Each element is moved from inputStack to outputStack at most once,
so even though transfer() can take O(n), it's not repeated unnecessarily.

Space Complexity:
- O(n) -> we store all elements across two stacks
*/

class MyQueue
{
private:
    stack<int> inputStack;   // stores incoming elements (push operations)
    stack<int> outputStack;  // stores elements in correct FIFO order

public:
    MyQueue()
    {
        // nothing special to initialize
    }

    // push always goes to input stack (cheap operation O(1))
    void push(int x)
    {
        inputStack.push(x);
    }

    // pop ensures correct order before removing
    int pop()
    {
        transferIfNeeded(); // only moves elements if necessary
        int result = outputStack.top();
        outputStack.pop();
        return result;
    }

    // peek is same as pop but without removing
    int peek()
    {
        transferIfNeeded();
        return outputStack.top();
    }

    // checks if queue is empty
    bool empty()
    {
        // forcing transfer is not strictly needed, but keeps behavior consistent
        transferIfNeeded();
        return outputStack.empty();
    }

    // moves elements from inputStack to outputStack only when needed
    void transferIfNeeded()
    {
        // key idea: only transfer when output is empty
        // this is what gives us amortized O(1)
        if (outputStack.empty())
        {
            while (!inputStack.empty())
            {
                outputStack.push(inputStack.top());
                inputStack.pop();
            }
        }
    }
};

int main()
{
    {
        cout << "Test 1: Basic Operations" << endl;
        MyQueue q;

        q.push(5);
        assert(q.empty() == false);
        q.pop();
        assert(q.empty() == true);
    }

    {
        cout << "Test 2: FIFO Order" << endl;
        MyQueue q;

        q.push(10);
        q.push(20);
        q.push(30);

        // validating FIFO behavior
        assert(q.pop() == 10);
        assert(q.pop() == 20);
        assert(q.pop() == 30);
        assert(q.empty() == true);
    }

    {
        cout << "Test 3: Interleaved Operations" << endl;
        MyQueue q;

        q.push(5);
        q.push(6);
        assert(q.pop() == 5);

        q.push(7);
        assert(q.peek() == 6);
        assert(q.pop() == 6);
        assert(q.pop() == 7);
        assert(q.empty() == true);
    }

    {
        cout << "Test 4: Single Element" << endl;
        MyQueue q;

        q.push(42);
        assert(q.peek() == 42);
        assert(q.pop() == 42);
        assert(q.empty() == true);
    }

    {
        cout << "Test 5: Multiple Peeks" << endl;
        MyQueue q;

        q.push(1);
        q.push(2);

        // peek should not remove element
        assert(q.peek() == 1);
        assert(q.peek() == 1);
    }

    {
        cout << "Test 6: Empty Queue Check" << endl;
        MyQueue q;

        assert(q.empty() == true);
        q.push(100);
        assert(q.empty() == false);
    }

    cout << "All tests passed (if no assertion failed)." << endl;
}