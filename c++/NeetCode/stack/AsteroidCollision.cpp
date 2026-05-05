#include <iostream>
#include <vector>
#include <stack>

using namespace std;

class Solution
{
private:
    vector<int> result;

public:
    vector<int> asteroidCollision(vector<int>& asteroids)
    {
        for (const int& aster : asteroids)
        {
            if (!result.empty())
            {
                int last = result[result.size() - 1];
                if (last > 0 and aster < 0)
                {
                    if (aster*-1 > last)
                    {
                        result[result.size() - 1] = aster;
                    }
                }
            }
            else
            {
                result.push_back(aster);
            }
        }
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

    //runTest(1, sol, {2,4,-4,-1}, {2});
    runTest(2, sol, {1, 2, 3, 4}, {1, 2, 3, 4});
    runTest(3, sol, {-1, -2, -3}, {-1, -2, -3});
    runTest(4, sol, {5, -5}, {});
    runTest(5, sol, {10, -5}, {10});
    runTest(6, sol, {10, 2, -5}, {10});
    runTest(7, sol, {8, -8}, {});
    runTest(8, sol, {1, -2, -2, -2}, {-2, -2, -2});
    runTest(9, sol, {3, 5, -2, -5}, {3});
    runTest(10, sol, {1}, {1});
    runTest(11, sol, {}, {});
    runTest(12, sol, {-2, -1, 1, 2}, {-2, -1, 1, 2});
    runTest(13, sol, {1, 2, 3, -3, -2, -1}, {});
    runTest(14, sol, {1, 2, -1, -2}, {});
    runTest(15, sol, {10, 1, 2, 3, -10}, {});

    return 0;
}
