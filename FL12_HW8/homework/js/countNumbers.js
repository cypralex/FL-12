function countNumbers(){
	
	let numCounter = {};
	 
	for(let i = 0; i < arguments[0].length; i++){
			
			if(arguments[0][i] === 0){
				if(numCounter['0'] === undefined){
					numCounter['0'] = 0;
				}
				numCounter['0']++;
			}else if(arguments[0][i] == 1){
				if(numCounter['1'] === undefined){
					numCounter['1'] = 0;
				}
				numCounter['1']++;
			}else if(arguments[0][i] == 2){
				if(numCounter['2'] === undefined){
					numCounter['2'] = 0;
				}
				numCounter['2']++;
			}else if(arguments[0][i] == 3){
				if(numCounter['3'] === undefined){
					numCounter['3'] = 0;
				}
				numCounter['3']++;
			}else if(arguments[0][i] == 4){
				if(numCounter['4'] === undefined){
					numCounter['4'] = 0;
				}
				numCounter['4']++;
			}else if(arguments[0][i] == 5){
				if(numCounter['5'] === undefined){
					numCounter['5'] = 0;
				}
				numCounter['5']++;
			}else if(arguments[0][i] == 6){
				if(numCounter['6'] === undefined){
					numCounter['6'] = 0;
				}
				numCounter['6']++;
			}else if(arguments[0][i] == 7){
				if(numCounter['7'] === undefined){
					numCounter['7'] = 0;
				}
				numCounter['7']++;
			}else if(arguments[0][i] == 8){
				if(numCounter['8'] === undefined){
					numCounter['8'] = 0;
				}
				numCounter['8']++;
			}else if(arguments[0][i] == 9){
				if(numCounter['9'] === undefined){
					numCounter['9'] = 0;
				}
				numCounter['9']++;
			}
		}
	return numCounter;

	}
