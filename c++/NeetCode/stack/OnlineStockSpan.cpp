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
        indice++;

        // eliminar todos los menores o iguales
        while (!myStack.empty() && myStack.top().first <= price)
        {
            myStack.pop();
        }

        int span;

        // si no hay mayor a la izquierda
        if (myStack.empty())
        {
            span = indice + 1;
        }
        else
        {
            span = indice - myStack.top().second;
        }

        // guardar precio actual e índice
        myStack.push({price, indice});

        return span;
    }
};

#include <vector>
int main()
{
    //vector<int> input = {100, 80, 60, 70, 60, 75, 85};
    vector<int> input = {100, 101, 99, 102, 103};

    // RESULTADOS ESPERADOS
    vector<int> expected = {1, 1, 1, 2, 1, 4, 6};
    expected = {1, 2, 1, 3, 4};

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