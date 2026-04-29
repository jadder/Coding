{
    class Solution {
        /**
         * @param {string[]} operations
         * @return {number}
         */
        calPoints(operations: string[]): number {

            let stack: number[] = [];

            for (let i = 0, j = 0; i < operations.length; i++) {
                j = stack.length - 1;

                switch (operations[i]) {
                    case '+':
                        stack.push(stack[j - 1] + stack[j]); //

                        break;

                    case 'C':
                        stack.pop();
                        break;

                    case 'D':
                        stack.push(stack[j] * 2);
                        break;

                    default:
                        stack.push(parseInt(operations[i]));
                        break;
                }
            }

            let answer = 0;
            for (let i = 0; i < stack.length; i++) {
                answer += stack[i];
            }


            return answer;
        }
    }

    let sol: Solution = new Solution();

    let ops: string[] = ["1", "2", "+", "C", "5", "D"]; // 18
    ops = ["5", "2", "C", "D", "+"];

    let result: number = sol.calPoints(ops);

    if (result !== 30) {
        console.log("failed: ", result);
    } else {
        console.log("result: ", result);
    }

}
