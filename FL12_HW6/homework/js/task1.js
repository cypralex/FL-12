let a;
let b;
let c;

do{
	a = prompt('Input a', );
}while(isFinite(a) == false || +a == 0 || a =="");

do{
	b = prompt('Input b', );
}while(isFinite(b) == false|| b =="");

do{
	c = prompt('Input c', );
}while(isFinite(c) == false || b =="");

let d = b*b - 4*a*c;
let x1;
let x2;


if( d < 0 ){
	console.log("no solution");
} else if(d == 0){
	x1 = -(b/(a*2));
	x2 = x2;
	console.log('x=', x1);
}else {
	console.log("b = ", b);
	x1 = (-b + Math.sqrt(d))/(a*2);
	x2 = (-b - Math.sqrt(d))/(a*2);
	console.log("x1=", x1);
	console.log("x2=", x2);
}


