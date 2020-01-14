function convert(){
	let a = arguments.length;
	let arr = [];
	for(let i = 0; i < a; i++){
		if (typeof arguments[i] === 'string'){
			arr.push(Number(arguments[i]));
		}else if(typeof arguments[i] === 'number'){
			arr.push(String(arguments[i]));
		}
	}
	return arr;
}

function executeforEach(arr, func) {
	for(let i = 0; i < arr.length; i++){
		func(arr[i]);
	}
}

function mapArray(arr, func) {
	let arr2 = [];
	for(let i = 0; i < arr.length; i++){
		let a = parseInt(arr[i]);
		arr2.push(func(a));
	}
	return arr2;
}

function filterArray(arr, func) {
	let arr2 = [];
	for(let i = 0; i < arr.length; i++){
			if (func(arr[i])) {
				arr2.push(arr[i]);
			}
		}
		return arr2;
	}
	
function flipOver(str) {
	let reverseStr = '';
	for(let i = str.length - 1; i >= 0; i--){
		reverseStr += str[i];
	}
	return reverseStr;
}

function makeListFromRange(extremeValues) {
	let result = [];
	if(extremeValues[0] < extremeValues[1]){
		for(let i = extremeValues[0]; i <= extremeValues[1]; i++){
			result.push(i);
		}
	} else{
		for(let i = extremeValues[0]; i >= extremeValues[1]; i--){
			result.push(i);
		}
	}
	return result;
}

function getArrayOfKeys(arrOfObj, keyWord) {
	let arrByKey = [];
	let arrOfObjLength = arrOfObj.length;
	for(let i = 0; i < arrOfObjLength; i++){
		arrByKey.push(arrOfObj[i][keyWord]);
	}
	return arrByKey;
}

function substitute(arrOfNum) {
	const lowestValue = 30;
	return mapArray(arrOfNum, function(){
		return arguments[0] < lowestValue ? '*' : arguments[0]
	});
}

function getPastDay(inputDate, daysBefore){
	let pastDate = new Date(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate());
	pastDate.setDate(pastDate.getDate() - daysBefore);
	return pastDate;
}

function formatDate(inputDate){
	let formattedDate = '';
	let year = inputDate.getFullYear();
	let month = inputDate.getMonth() + 1;
	let day = inputDate.getDate();
	let hours = inputDate.getHours();
	let minutes = inputDate.getMinutes();
	const ten = 10;
	hours = hours < ten ? '0' + hours : hours;
	minutes = minutes < ten ? '0' + minutes : minutes;
	formattedDate = `${year}/${month}/${day} ${hours}:${minutes}`;
	return formattedDate;
}