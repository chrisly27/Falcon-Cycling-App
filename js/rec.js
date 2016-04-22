function save()
{
	var name = document.getElementById("name");
	var email = document.getElementById("email");
	var pads = document.getElementById("pads");
	var brakes = document.getElementById("brakes");
	var tires = document.getElementById("tires");
	var gears = document.getElementById("gears");
	var seats = document.getElementById("seats");
	var wheel = document.getElementById("wheel");
	var mudguard = document.getElementById("mudguard");
	var handlebars = document.getElementById("handlebars");
	var chainsets = document.getElementById("chainsets");
	var cassettes = document.getElementById("cassettes");
	var Frame = document.getElementById("Frame");
	
	try
	{
		localStorage.setItem("name", name.value);
		localStorage.setItem("email", email.value);
		localStorage.setItem("pads", pads.value);
		localStorage.setItem("brakes", brakes.value);
		localStorage.setItem("tires", tires.value);
		localStorage.setItem("gears", gears.value);
		localStorage.setItem("seats", seats.value);
		localStorage.setItem("wheel", wheel.value);
		localStorage.setItem("mudguard", mudguard.value);
		localStorage.setItem("handlebars", handlebars.value);
		localStorage.setItem("chainsets", chainsets.value);
		localStorage.setItem("cassettes", cassettes.value);
		localStorage.setItem("Frame", Frame.value);
		
		name.value = "";
		email.value = "";
		pads.value = "";
		brakes.value = "";
		tires.value = "";
		gears.value = "";
		seats.value = "";
		wheel.value = "";
		mudguard.value = "";
		handlebars.value = "";
		chainsets.value = "";
		cassettes.value = "";
		Frame.value = "";
		
		Console.log("Successfully Saved Data to the local storage.")
		alert("Your data was saved successfully.");
	}
	catch (e)
	{
		 if (e == QUOTE_EXCEEDED_ERR)
		{
			console.log("Error: Local Storage limit exceeded.");
			/* alert("Error: Local Storage limit exceeded."); */
		}
		else
		{
			consol.log("Error: Saving to Local Storage.");
			alert("Error: Saving to Local Storage.");
		}
		return false;
	}
}






function request()
{	
	var name = document.getElementById("name");
	var email = document.getElementById("email");
	var pads = document.getElementById("pads");
	var brakes = document.getElementById("brakes");
	var tires = document.getElementById("tires");
	var gears = document.getElementById("gears");
	var seats = document.getElementById("seats");
	var wheel = document.getElementById("wheel");
	var mudguard = document.getElementById("mudguard");
	var handlebars = document.getElementById("handlebars");
	var chainsets = document.getElementById("chainsets");
	var cassettes = document.getElementById("cassettes");
	var Frame = document.getElementById("Frame");
	
	name.value = localStorage.getItem("name", name.value);
	email.value = localStorage.getItem("email", email.value);
	pads.value = localStorage.getItem("pads", pads.value);
	brakes.value = localStorage.getItem("brakes", brakes.value);
	tires.value = localStorage.getItem("tires", tires.value);
	gears.value = localStorage.getItem("gears", gears.value);
	seats.value = localStorage.getItem("seats", seats.value);
	wheel.value = localStorage.getItem("wheel", wheel.value);
	mudguard.value = localStorage.getItem("mudguard", mudguard.value);
	handlebars.value = localStorage.getItem("handlebars", handlebars.value);
	chainsets.value = localStorage.getItem("chainsets", chainsets.value);
	cassettes.value = localStorage.getItem("cassettes", cassettes.value);
	Frame.value = localStorage.getItem("Frame", Frame.value);
	
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
    /* localStorage.clear(); */
	else
	{
		alert("You canceled the process of clearing data storage. Thanks");
	}
}

















