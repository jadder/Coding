#include<iostream>
#include<vector>
#include<stack>

using namespace std;

class Solution
{
public:
    vector<int> dailyTemperatures(vector<int>& temperatures)
    {
        vector<int> result;

        for (int i = 0; i < temperatures.size(); i++)
        {
            int temp = 0;
            bool flag = false;
            for (int j = i + 1; j < temperatures.size(); j++)
            {
                temp++;
                if (temperatures[j] > temperatures[i])
                {
                    flag= true;
                    break;
                }
            }
            if (flag)
            {
                result.push_back(temp);
            }else
            {
                result.push_back(0);
            }
        }
        return result;
    }
};

int main()
{
    vector<int> temperatures = {30, 38, 30, 36, 35, 40, 28};
    vector<int> solution = {1, 4, 1, 2, 1, 0, 0};

    Solution sol;
    vector<int> result = sol.dailyTemperatures(temperatures);
    if (result != solution)
    {
        cout << "Failed [";
        for (int x : result)
        {
            cout << x << ", ";
        }
        cout << "]" << endl;
    }
    return 0;
}
