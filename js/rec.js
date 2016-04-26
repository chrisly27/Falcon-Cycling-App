function save()
{
 	var name = document.getElementById("name");
	var email = document.getElementById("email");
	var birthday = document.getElementById("birthday");
	var brakes = document.getElementById("brakes"); 	 
 	var tires = document.getElementById("tires");
	var gears = document.getElementById("gears");
	var seats = document.getElementById("seats");
	var wheels = document.getElementById("wheels");
	var mudguard = document.getElementById("mudguard");
	var handlebars = document.getElementById("handlebars");
	
	try
	{

		
		localStorage.setItem("name", name.value);
		localStorage.setItem("email", email.value);
		localStorage.setItem("birthday", birthday.value);
		localStorage.setItem("brakes", brakes.value);
		localStorage.setItem("tires", tires.value);
		localStorage.setItem("gears", gears.value);
		localStorage.setItem("seats", seats.value);
		localStorage.setItem("wheels", wheels.value);
		localStorage.setItem("mudguard", mudguard.value);
		localStorage.setItem("handlebars", handlebars.value);
		
		name.value = "";
		email.value = "";
		birthday.value = "";
		brakes.value = "";
		tires.value = "";
		gears.value = "";
		seats.value = "";
		wheels.value = "";
		mudguard.value = "";
		handlebars.value = "";
		
		/* Console.log("Successfully Saved Data to the local storage.") */
		alert("Your data was saved successfully.");
	}
	catch (e)
	{
		 if (e == QUOTE_EXCEEDED_ERR)
		{
			console.log("Error: Local Storage limit exceeded.");
			alert("Error: Local Storage limit exceeded.");
			localStorage.clear();
		}
		else
		{
			consol.log("Error: Saving to Local Storage.");
			alert("Error: Saving to Local Storage.");
			localStorage.clear();
		}
	}
}






function request()
{	
	var name = document.getElementById("name");
	var email = document.getElementById("email");
	var birthday = document.getElementById("birthday");
	var brakes = document.getElementById("brakes");
	var tires = document.getElementById("tires");
	var gears = document.getElementById("gears");
	var seats = document.getElementById("seats");
	var wheels = document.getElementById("wheels");
	var mudguard = document.getElementById("mudguard");
	var handlebars = document.getElementById("handlebars");
	
	name.value = localStorage.getItem("name", name.value);
	email.value = localStorage.getItem("email", email.value);
	birthday.value = localStorage.getItem("birthday", birthday.value);
	brakes.value = localStorage.getItem("brakes", brakes.value);
	tires.value = localStorage.getItem("tires", tires.value);
	gears.value = localStorage.getItem("gears", gears.value);
	seats.value = localStorage.getItem("seats", seats.value);
	wheels.value = localStorage.getItem("wheels", wheels.value);
	mudguard.value = localStorage.getItem("mudguard", mudguard.value);
	handlebars.value = localStorage.getItem("handlebars", handlebars.value);
	
	console.log("Getting your data from local storage");
	alert("Your data was successfully requested from data storage.");
}

function clearStorage() {
    console.log("Clearing local storage.");
	
	var r = confirm("Are you sure you want to dele data from data storage??");
	
	if (r == true)
	{
		localStorage.clear();
	}
	else
	{
		alert("You canceled the process of clearing data storage. Thanks");
	}
}