export function epidemic(tm: number, n: number, s0: number, i0: number, b: number, a: number) {
	let resul : number = 0;
	
	/*
	(I)    S[k+1] = S[k] - dt * b * S[k] * I[k]
	(II)   I[k+1] = I[k] + dt * (b * S[k] * I[k] - a * I[k])
	(III)  R[k+1] = R[k] + dt * I[k] * a
	*/

	let dt: number = 1;
	
	for(let k:number= 0; k<=tm ; k++){
		S1(k, dt, b);
		I1(k, dt, b, a);
		R1(k, dt, a);
	}

	return resul;


}

function S1( k:number, dt:number, b:number ):number {
	return S1(k) - dt * b * S1(k) * I1(k);
}
function I1(k:number, dt:number, b:number, a:number):number {
	return I1(k) + dt * ( b * S1(k) * I1(k) - a * I1(k) );
}
function R1(k:number, dt:number, a:number):number {
	return R1(k) + dt * I1(k) * a ;
}


var tm = 18, n = 432, s0 = 1004, i0 = 1, b = 0.00209, a = 0.51;
let result = epidemic(tm, n, s0, i0, b, a) ;

if (result == 420) {console.log(`Passed: ${result}`);}
else{ console.log(`Failed: ${result}`); }

