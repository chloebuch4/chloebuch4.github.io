function askQuestions ()  {
	var firstName = prompt ('What is your first name?');
	var lastName = prompt ('What is your last name?');
	var fullName = firstName + ' ' + lastName;
	console.log(fullName)

	var age = prompt ('How old are you?')
	age = parseInt(age);
	console.log('You are '+age+' years old');

	if (age >= 18)  {
		console.log ('You are an adult');
	}	else if (age >= 13)  {
		console.log ('You are a teenager');
	}	else  {
		console.log ('You are a kid');
	
	}

	if (firstName === 'General' && lastName !== 'Assembly') {
		console.log ('Greetings');
	}

}



function addVat100 ()  {
	return 100*1.2
}

addVat100(19.99)





//given the page has loaded 
$(function (){

	// when the user clicks the image, ask the questions 
	$('img').on ('click', askQuestions);

	// if the user clicks on h3x
	$('h3').on('click',function (){

	//then hide the next element
	$(this).next().slideToggle(200);

	});

});