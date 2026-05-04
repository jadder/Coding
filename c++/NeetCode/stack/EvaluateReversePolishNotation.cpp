#include <iostream>
#include <vector>
#include <string>
#include <cassert>
#include <stack>

using namespace std;

class Solution
{
private:
    stack<int> datos;

public:
    int evalRPN(vector<string>& tokens)
    {
        int a = 0, b = 0;
        for (int i = 0; i < tokens.size(); i++)
        {
            if (tokens[i] == "+")
            {
                b = datos.top();
                datos.pop();
                a = datos.top();
                datos.pop();
                datos.push(a + b);
            }
            else if (tokens[i] == "-")
            {
                b = datos.top();
                datos.pop();
                a = datos.top();
                datos.pop();
                datos.push(a - b);
            }
            else if (tokens[i] == "*")
            {
                b = datos.top();
                datos.pop();
                a = datos.top();
                datos.pop();
                datos.push(a * b);
            }
            else if (tokens[i] == "/")
            {
                b = datos.top();
                datos.pop();
                a = datos.top();
                datos.pop();
                datos.push(a / b);
            }
            else
            {
                datos.push(stoi(tokens[i]));
            }
        }

        return datos.top();
    }
};


void runTest(vector<string> tokens, int expected)
{
    Solution sol;
    int result = sol.evalRPN(tokens);

    cout << "Test: ";
    for (const auto& t : tokens)
        cout << t << " ";
    cout << endl;

    cout << "Expected: " << expected << ", Got: " << result << endl;

    assert(result == expected);

    cout << "Pass\n\n";
}

int main()
{
    cout << "Start" << endl;
    // Caso básico
    runTest({"2", "1", "+", "3", "*"}, 9);

    // División
    runTest({"4", "13", "5", "/", "+"}, 6); // 4 + (13/5)

    // Caso complejo (LeetCode clásico)
    runTest({"10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"}, 22);

    // Solo número
    runTest({"42"}, 42);

    // Negativos
    runTest({"-2", "3", "*"}, -6);

    // División negativa (truncamiento hacia 0 en C++)
    runTest({"7", "-3", "/"}, -2);

    // Expresión combinada
    runTest({"5", "1", "2", "+", "4", "*", "+", "3", "-"}, 14);

    cout << "Todos los tests pasaron correctamente 🚀" << endl;

    return 0;
}
