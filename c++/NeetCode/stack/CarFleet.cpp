#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

class Solution
{

public:
    int carFleet(int target, vector<int> &position, vector<int> &speed)
    {
        int n = position.size();
        vector<pair<int, double>> cars;

        for (int i = 0; i < n; i++)
        {
            double time = (double)(target - position[i]) / speed[i];
            cars.push_back({position[i], time});
        }

        sort(cars.begin(), cars.end(), greater<pair<int, double>>());

        int fleets = 0;
        double maxTime = 0;

        for (auto &c : cars)
        {
            if (c.second > maxTime)
            {
                fleets++;
                maxTime = c.second;
            }
        }

        return fleets;
    }
};

int main()
{

    vector<int> pos = {0, 4, 2};
    vector<int> spe = {2, 1, 3};
    int target = 10;
    int expected = 3;

    // pos = {1, 4};
    // spe = {3, 2};
    // expected = 1;

    // pos = {8, 3, 7, 4, 6, 5};
    // spe = {4, 4, 4, 4, 4, 4};
    // expected = 6;

    Solution sol;
    int result = sol.carFleet(target, pos, spe);

    if (result != 1)
    {
        cout << "Failed expected " << expected << " got " << result << endl;
    }
    else
    {
        cout << "Pass" << endl;
    }

    return 0;
}