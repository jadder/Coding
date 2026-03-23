export function filter_list(l:Array<any>):Array<number> {
  // Return a new array with the strings filtered out
	let result : Array<number> = [];

	l.forEach((e) => {
			if( typeof e === "number"){
				result.push(e);
			}
		}
	);

	return result;
}



console.log(filter_list([1,2,'a','b']) );
console.log(filter_list([1,'a','b',0,15]) );
console.log(filter_list([1,2,'aasf','1','123',123]));

