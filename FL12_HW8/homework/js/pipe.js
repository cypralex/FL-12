function addOne(y) {
	return y + 1;
	}
function pipe(x){

	for(let i = 1; i < arguments.length; i++){
		x = arguments[i](x);
	}
	return x;
}