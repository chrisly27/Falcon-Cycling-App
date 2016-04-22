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
	}
	catch (e)
	{
		if (e == QUOTE_EXCEEDED_ERR)
		{
			console.log("Error: Local Storage limit exceeded.");
		}
		else
		{
			consol.log("Error: Saving to Local Storage.");
		}
	}
	
	console.log("Successfully Saved Data to the local storage.")
}






function request()
{
	console.log("Getting your data from local storage");
	
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
}

function clearStorage() {
    console.log("Clearing local storage.");
    localStorage.clear();
}

















