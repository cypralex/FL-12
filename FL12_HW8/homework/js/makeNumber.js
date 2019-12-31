function makeNumber(){
	
	let num = '';
	for(let i = 0; i < arguments[0].length; i++){
			
			if(isFinite(arguments[0][i]) && arguments[0][i] !== ' '){
				num += arguments[0][i];
			}
	}
	return num;
}

makeNumber('erer384jjjfd123');