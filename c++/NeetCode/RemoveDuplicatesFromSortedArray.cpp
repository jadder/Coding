#include <iostream>
#include <vector>

using namespace std;

// NO implementar la solución (solo stub)
int removeDuplicates(vector<int>& nums)
{
    if (nums.size() < 2 ) return nums.size();

    int k = 1;
    for (int i=1; i<nums.size(); i++)
    {
        if (nums[i] != nums[i-1])
        {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
}

// Helper para imprimir vector
void printVector(const vector<int>& nums)
{
    cout << "[ ";
    for (int n : nums) cout << n << " ";
    cout << "]";
}

// Test runner
void runTest(vector<int> nums)
{
    cout << "Input: ";
    printVector(nums);

    int result = removeDuplicates(nums);

    cout << " -> Output: " << result << endl;
}

int main()
{
    // Test cases clásicos
    runTest({});                       // vacío
    runTest({1});                      // un elemento
    runTest({1,1});                    // duplicados simples
    runTest({1,2});                    // sin duplicados
    runTest({1,1,2});                  // ejemplo típico
    runTest({0,0,1,1,1,2,2,3,3,4});    // caso largo clásico
    runTest({1,1,1,1,1});              // todos iguales
    runTest({1,2,3,4,5});              // todos distintos
    runTest({-1,-1,0,0,1,1});          // incluye negativos
    runTest({1,1,2,2,3,3,4,4});        // duplicados en pares

    return 0;
}