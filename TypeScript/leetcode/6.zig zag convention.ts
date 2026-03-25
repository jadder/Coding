// First rough solution, it works but still needs refinement.
// I focused more on making it work than making it clean.

// Time Complexity: O(n)
// I go through the string basically one time (each char is visited).
// Space Complexity: O(n)
// I store the result in an array before joining.

function convert(s: string, numRows: number): string {
    
    // I handle easy cases first.
    // If string is too short or only one row, nothing to convert.
    if (s.length < 3 || numRows === 1) {
        return s;
    }

    let result : string[] = [];
    
    // Special case for 2 rows.
    // I just split even and odd positions.
    if (numRows === 2 ) {
        let miniR : string[] =[]; // even index chars
        let miniL : string[] =[]; // odd index chars

        for(let i=0; i<s.length; i++){
            if(i%2==0){
                miniR.push(s[i]); // goes to first row
            }else{
                miniL.push(s[i]); // goes to second row
            }
        }    
        return miniR.join("")+miniL.join(""); // merge both rows
    } 

    // This is the jump distance for zigzag pattern.
    // Example: for 4 rows → 6 steps
    let vI : number = numRows * 2 - 2;    

    let mover : number = 0;
    
    // 'a' and 'b' are alternating jumps.
    // They simulate going down and up in zigzag.
    let a:number = vI;
    let b:number = 0;

    // flag to alternate between a and b
    let flag : boolean = true;

    let pos : number = 0;
    
    for (let i =0; i< numRows; i++){
        // start from each row
        pos = i;

        // move through the string
        while( pos < s.length){
            result.push(s[pos]); // take current char

            // alternate jumps
            if(flag){ 
                if(a > 0){
                    mover = a;   
                }else{
                    mover = b;
                }
                flag = false; 
            }else{
                if(b > 0){
                    mover = b;    
                }else{
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
};

let s : string = "ABCDE";
const numRows: number = 2;
const Output: string = "ACEBD";

let result: string = convert(s, numRows);

if(result === Output){ 
    console.log(`passed ${result}`); 
}else{ 
    console.log( `failed ${result}`); 
}


