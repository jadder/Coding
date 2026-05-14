#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

class Solution
{
public:
    string simplifyPath(string path)
    {
        string answer = "";
        return answer;
    }
};

struct TestCase
{
    string input;
    string expected;
};

int main()
{

    Solution sol;

    vector<TestCase> tests = {
        // Ejemplos del problema
        {"/neetcode/practice//...///../courses", "/neetcode/practice/courses"},
        {"/..//", "/"},
        {"/..//_home/a/b/..///", "/_home/a"},

        // Casos básicos
        {"/", "/"},
        {"//", "/"},
        {"///", "/"},

        // Directorio actual
        {"/./", "/"},
        {"/a/./b/./c/", "/a/b/c"},

        // Directorio padre
        {"/a/b/../c", "/a/c"},
        {"/a/b/c/../../", "/a"},
        {"/a/../../", "/"},
        {"/../../../../", "/"},

        // Slashes múltiples
        {"/a//b////c/d//", "/a/b/c/d"},

        // Nombres válidos con puntos
        {"/...", "/..."},
        {"/....", "/...."},
        {"/a/.../b", "/a/.../b"},
        {"/a/..../b", "/a/..../b"},

        // Mezcla compleja
        {"/home/user/Documents/../Pictures", "/home/user/Pictures"},
        {"/a/./b/../../c/", "/c"},
        {"/a//b////c/d//././/..", "/a/b/c"},
        {"/abc/.../../def", "/abc/def"},

        // Casos edge
        {"/.", "/"},
        {"/..", "/"},
        {"/a/..", "/"},
        {"/a/../", "/"},
        {"/a/b/c/../../../", "/"},

        // Casos con underscore y números
        {"/_home/user_1/docs", "/_home/user_1/docs"},
        {"/123/456/../789", "/123/789"},
    };

    int passed = 0;

    for (int i = 0; i < tests.size(); i++)
    {
        string result = sol.simplifyPath(tests[i].input);

        bool ok = (result == tests[i].expected);

        cout << "Test " << i + 1 << ": ";

        if (ok)
        {
            cout << "PASSED";
            passed++;
        }
        else
        {
            cout << "FAILED";
        }

        cout << "\n";
        cout << "Input:    " << tests[i].input << "\n";
        cout << "Expected: " << tests[i].expected << "\n";
        cout << "Got:      " << result << "\n";
        cout << "-----------------------------\n";
    }

    cout << "\nPassed " << passed << " / " << tests.size() << " tests.\n";

    return 0;
}