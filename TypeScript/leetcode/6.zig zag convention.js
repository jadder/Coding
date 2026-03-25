// First rough solution, it works but still needs refinement.
// I focused more on making it work than making it clean.
// Time Complexity: O(n)
// I go through the string basically one time (each char is visited).
// Space Complexity: O(n)
// I store the result in an array before joining.
function convert(s, numRows) {
    // I handle easy cases first.
    // If string is too short or only one row, nothing to convert.
    if (s.length < 3 || numRows === 1) {
        return s;
    }
    var result = [];
    // Special case for 2 rows.
    // I just split even and odd positions.
    if (numRows === 2) {
        var miniR = []; // even index chars
        var miniL = []; // odd index chars
        for (var i = 0; i < s.length; i++) {
            if (i % 2 == 0) {
                miniR.push(s[i]); // goes to first row
            }
            else {
                miniL.push(s[i]); // goes to second row
            }
        }
        return miniR.join("") + miniL.join(""); // merge both rows
    }
    // This is the jump distance for zigzag pattern.
    // Example: for 4 rows → 6 steps
    var vI = numRows * 2 - 2;
    var mover = 0;
    // 'a' and 'b' are alternating jumps.
    // They simulate going down and up in zigzag.
    var a = vI;
    var b = 0;
    // flag to alternate between a and b
    var flag = true;
    var pos = 0;
    for (var i = 0; i < numRows; i++) {
        // start from each row
        pos = i;
        // move through the string
        while (pos < s.length) {
            result.push(s[pos]); // take current char
            // alternate jumps
            if (flag) {
                if (a > 0) {
                    mover = a;
                }
                else {
                    mover = b;
                }
                flag = false;
            }
            else {
                if (b > 0) {
                    mover = b;
                }
                else {
                    mover = a;
                }
                flag = true;
            }
            pos += mover; // jump to next char in zigzag
        }
        // update jumps for next row
        a -= 2;
        b += 2;
        // reset flag for next row
        flag = true;
    }
    // finally join all characters
    return result.join("");
}
;
var s = "ABCDE";
var numRows = 2;
var Output = "ACEBD";
var result = convert(s, numRows);
if (result === Output) {
    console.log("passed ".concat(result));
}
else {
    console.log("failed ".concat(result));
}
