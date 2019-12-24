let a;
let b;
let c;


a = prompt("enter length of the first side of triangle", );
b = prompt("enter length of the second side of triangle", );
c = prompt("enter length of the third side of triangle", );

if ( a === undefined || a == "" ||
     b === undefined || b == "" ||
     c === undefined || c == "") {
	alert('input values should be ONLY numbers');
} 
a = Number(a);
b = Number(b);
с = Number(c);

 if( a == 0 || b == 0 || c == 0){
	 alert('A triangle must have 3 sides with a positive definite length');
	} else if( c >= a + b  || b >= a + c || a >= b + c ){
		alert("Triangle doesn’t exist");
	} else if(isFinite(a)) {
		if(a == b & a == c & c == b){
			console.log("equivalent");
		}

		if( (a == b && c != b) || (a == c && c != b) || (c == b && b != a) ){
			console.log("isosceles");
		}
		if(a != b & a != c & c != b){
			console.log("scalene");
		}
	}else {
		alert("input values should be ONLY numbers");
	}


