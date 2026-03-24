"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.epidemic = epidemic;
function epidemic(tm, n, s0, i0, b, a) {
    var resul = 0;
    /*
    (I)    S[k+1] = S[k] - dt * b * S[k] * I[k]
    (II)   I[k+1] = I[k] + dt * (b * S[k] * I[k] - a * I[k])
    (III)  R[k+1] = R[k] + dt * I[k] * a
    */
    var dt = 1;
    for (var k = 0; k <= tm; k++) {
        S1(k, dt, b);
        I1(k, dt, b, a);
        R1(k, dt, a);
    }
    return resul;
}
function S1(k, dt, b) {
    return S1(k) - dt * b * S1(k) * I1(k);
}
function I1(k, dt, b, a) {
    return I1(k) + dt * (b * S1(k) * I1(k) - a * I1(k));
}
function R1(k, dt, a) {
    return R1(k) + dt * I1(k) * a;
}
var tm = 18, n = 432, s0 = 1004, i0 = 1, b = 0.00209, a = 0.51;
var result = epidemic(tm, n, s0, i0, b, a);
if (result == 420) {
    console.log("Passed: ".concat(result));
}
else {
    console.log("Failed: ".concat(result));
}
