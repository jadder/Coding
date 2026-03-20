// https://leetcode.com/problems/longest-palindromic-substring/submissions/1953743819/
// time complexity: O(n^3)
// space complexity: O(n)
// This is the first version, but not so efficient. There is room to improve it.
function longestPalindrome(s) {
    if (s.length == 1) {
        return s;
    }
    if (s.length == 2) {
        if (s[0] != s[1]) {
            return s[0];
        }
        return s;
    }
    var max = 1;
    var pali = s[0];
    // recorrer y fragmentar
    for (var i = 0; i < s.length; i++) {
        for (var j = s.length - 1; j > i; j--) {
            if (s[i] == s[j]) {
                if ((j - i) >= max) {
                    var cad = validate(s.slice(i, j + 1));
                    if (max < cad.length) {
                        max = cad.length;
                        pali = cad;
                    }
                }
            }
        }
    }
    //validar y anotar
    //entregar
    return pali;
}
;
function validate(s) {
    var result = s;
    for (var i = 0; i < s.length; i++) {
        if (s[i] != s[s.length - 1 - i]) {
            result = "";
            break;
        }
    }
    return result;
}
