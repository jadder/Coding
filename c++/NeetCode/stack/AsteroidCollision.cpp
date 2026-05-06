/*
Time Complexity: O(n)
- Each asteroid is pushed once.
- In worst case, it can be popped once.
- So total operations are linear.

Space Complexity: O(n)
- We use a vector as a stack to store surviving asteroids.
*/

#include <iostream>
#include <vector>

using namespace std;

class Solution
{
private:
    // this works like a stack where we keep the "alive" asteroids
    vector<int> stackResult;

public:
    vector<int> asteroidCollision(vector<int>& asteroids)
    {
        for (const int& asteroid : asteroids)
        {
            // first, we just push the asteroid
            stackResult.push_back(asteroid);

            // now we try to resolve collisions if possible
            while (stackResult.size() > 1)
            {
                // take the last asteroid (top of the stack)
                int current = stackResult.back();
                stackResult.pop_back();

                // case 1: current asteroid is moving LEFT
                if (current < 0)
                {
                    // check the previous asteroid (potential collision)
                    int previous = stackResult.back();

                    // collision only happens if previous goes RIGHT
                    if (previous > 0)
                    {
                        // compare sizes (absolute values)
                        if (-current > previous)
                        {
                            // current destroys previous
                            stackResult.pop_back();
                            stackResult.push_back(current);
                        }
                        else if (-current == previous)
                        {
                            // both destroy each other
                            stackResult.pop_back();
                            break;
                        }
                        else
                        {
                            // previous survives, current is gone
                            break;
                        }
                    }
                    else
                    {
                        // no collision (same direction), just restore
                        stackResult.push_back(current);
                        break;
                    }
                }
                else
                {
                    // case 2: current asteroid is moving RIGHT
                    // no collision possible with previous
                    stackResult.push_back(current);
                    break;
                }
            }
        }
        return stackResult;
    }
};


// compara dos vectores
bool equals(const vector<int>& a, const vector<int>& b)
{
    return a == b;
}

// imprime vector (solo para debug si falla)
void printVector(const vector<int>& v)
{
    cout << "[ ";
    for (int x : v) cout << x << " ";
    cout << "]";
}

// ejecuta test
void runTest(int testNum, Solution& sol, vector<int> input, vector<int> expected)
{
    vector<int> result = sol.asteroidCollision(input);

    if (!equals(result, expected))
    {
        cout << "Test " << testNum << " FAILED\n";
        cout << "Expected: ";
        printVector(expected);
        cout << "\nGot:      ";
        printVector(result);
        cout << "\n\n";
    }
}

int main()
{
    Solution sol;
    runTest(0, sol, {-2,-1,1,2}, {-2,-1,1,2});
    // runTest(1, sol, {2, 4, -4, -1}, {2});
    // runTest(2, sol, {1, 2, 3, 4}, {1, 2, 3, 4});
    // runTest(3, sol, {-1, -2, -3}, {-1, -2, -3});
    // runTest(4, sol, {5, -5}, {});
    // runTest(5, sol, {10, -5}, {10});
    // runTest(6, sol, {10, 2, -5}, {10});
    // runTest(7, sol, {8, -8}, {});
    // runTest(8, sol, {1, -2, -2, -2}, {-2, -2, -2});
    // runTest(9, sol, {3, 5, -2, -5}, {3});
    // runTest(10, sol, {1}, {1});
    // runTest(11, sol, {}, {});
    // runTest(12, sol, {-2, -1, 1, 2}, {-2, -1, 1, 2});
    // runTest(13, sol, {1, 2, 3, -3, -2, -1}, {});
    // runTest(14, sol, {1, 2, -1, -2}, {});
    // runTest(15, sol, {10, 1, 2, 3, -10}, {});

    return 0;
}