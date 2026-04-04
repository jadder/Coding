/*Encode and Decode Strings
https://neetcode.io/problems/string-encode-and-decode/question */
function encode(strs: string[]): string {
    let res = "";

    // i go through each string in the array
    for (const s of strs) {
        // i store the length + a delimiter "#" + the string itself
        // this way i can rebuild it later without confusion
        res += s.length + "#" + s;
    }

    return res;
}

function decode(str: string): string[] {
    let res: string[] = [];
    let i = 0;

    // i iterate over the whole encoded string
    while (i < str.length) {
        let j = i;

        // i move j until i find the delimiter "#"
        // this gives me the length of the next word
        while (str[j] !== "#") {
            j++;
        }

        // i extract the length
        let length = parseInt(str.slice(i, j));

        // using the length, i extract the actual word
        let word = str.slice(j + 1, j + 1 + length);

        // i push the word into the result
        res.push(word);

        // i move i to the start of the next encoded word
        i = j + 1 + length;
    }

    return res;
}

const msg: string[] = ["Jadder", "Moya"];

let enc: string = "";
enc = encode(msg);
console.log("Enc: " + enc);


let dec: string[] = [];
dec = decode(enc);
console.log("Dec: " + dec);

console.log("Se acabo!");