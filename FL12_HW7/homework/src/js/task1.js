let inputName = prompt('Input name');
let admin = 'admin@gmail.com';
let user = 'user@gmail.com';
let adminPass = 'AdminPass';
let userPass = 'UserPass';
let pass;
let newPass;
let apprPass;
let newPass2;
let SIX = 6;
let FIVE = 5;

if(inputName === '' || inputName === null){
	alert('Canceled');
} else if(inputName.length < FIVE){
	alert('I don`t know any emails having name length less than 5 symbols');
} else if(inputName !== admin && inputName !== user){
	alert('I don’t know you');
}else if(inputName === admin || inputName === user){
	pass = prompt('Input password');
	if (pass === '' || pass === null){
		alert('Canceled');
	} else if(inputName === admin && pass !== adminPass || inputName === user && pass !== userPass){
		alert('Wrong password');
	} else if(inputName === admin && pass === adminPass || inputName === user && pass === userPass){
		if (confirm('do u want to change pass?')){
			apprPass = prompt('input old Pass');
			if(apprPass ==='' || apprPass === null){
				alert('Canceled');
			} else if (apprPass === pass) {
				newPass = prompt('input new Pass');
				if(newPass.length < SIX){
					alert('It’s too short password. Sorry.');
				}else{
					newPass2 = prompt('Enter new pass again');
					if (newPass2 === newPass) {
						alert('You have successfully changed your password')
					} else{
						alert('You wrote the wrong password');
					}
				}
			}
		} else{
			alert('You have failed the change');
		}
		
	}
}