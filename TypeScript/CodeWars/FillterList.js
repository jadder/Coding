"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter_list = filter_list;
function filter_list(l) {
    // Return a new array with the strings filtered out
    var result = [];
    l.forEach(function (e) {
        if (typeof e === "number") {
            result.push(e);
        }
    });
    return result;
}
console.log(filter_list([1, 2, 'a', 'b']));
console.log(filter_list([1, 'a', 'b', 0, 15]));
console.log(filter_list([1, 2, 'aasf', '1', '123', 123]));
