#include <iostream>
#include <stack>

using namespace std;

class StockSpanner
{
private:
    stack<pair<int, int>> myStack;
    int indice = -1;

public:
    StockSpanner()
    {
    }

    int next(int price)
    {
        pair<int, int> par = {price, ++indice};

        if (!myStack.empty())
        {
            if (myStack.top().first < price)
            {
                int temp = 0;
                while (!myStack.empty() && myStack.top().first < price)
                {
                    temp = myStack.top().second;
                    myStack.pop();
                }
                
                myStack.push(par);
                return indice - temp;
            }
        }

        myStack.push(par);
        return 1;
    }
};

#include <vector>
int main()
{
    //vector<int> input = {100, 80, 60, 70, 60, 75, 85};
    vector<int> input = {100, 101, 102, 103};

    // RESULTADOS ESPERADOS
    vector<int> expected = {1, 1, 1, 2, 1, 4, 6};
    expected = {1, 2, 3, 4};

    StockSpanner sol;

    cout << "===== TEST CASES =====" << endl;

    bool allCorrect = true;

    for (int i = 0; i < input.size(); i++)
    {
        int result = sol.next(input[i]);

        cout << "Price: " << input[i]
             << " | Expected: " << expected[i]
             << " | Got: " << result;

        if (result == expected[i])
        {
            cout << "  ✅";
        }
        else
        {
            cout << "  ❌";
            allCorrect = false;
        }

        cout << endl;
    }

    cout << endl;

    if (allCorrect)
    {
        cout << "ALL TESTS PASSED ✅" << endl;
    }
    else
    {
        cout << "SOME TESTS FAILED ❌" << endl;
    }

    return 0;
}