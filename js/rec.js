function isQuotaExceeded(e) {
  var quotaExceeded = false;
  if (e) {
    if (e.code) {
      switch (e.code) {
        case 50:
          quotaExceeded = true;
          break;
        case 2000://1014:
          // Firefox
          if (e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
            quotaExceeded = true;
          }
          break;
      }
    } else if (e.number === -2147024882) {
      // Internet Explorer 8
      quotaExceeded = true;
    }
  }
  return quotaExceeded;
}



/* function appendToStorage(name, data){
    var old = localStorage.getItem(name);
    if(old === null) old = "";
    localStorage.setItem(name, old + data);
}

appendToStorage('oldData', $i("textbox").value); 











function addEntry() {
    // Parse any JSON previously stored in allEntries
    var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
    if(existingEntries == null) existingEntries = [];
    var entryTitle = document.getElementById("entryTitle").value;
    var entryText = document.getElementById("entryText").value;
    var entry = {
        "title": entryTitle,
        "text": entryText
    };
    localStorage.setItem("entry", JSON.stringify(entry));
    // Save allEntries back to local storage
    existingEntries.push(entry);
    localStorage.setItem("allEntries", JSON.stringify(existingEntries));
};
*/



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
			if($('#brakes').prop('checked'))
			{
				localStorage.setItem("brakes", brakes.value);
			}
			else 
			{
				localStorage.setItem("brakes", " ");
			}
			
			if($('#tires').prop('checked'))
			{
				localStorage.setItem("tires", tires.value);
			}
			else 
			{
				localStorage.setItem("tires", " ");
			}
			
			if($('#gears').prop('checked'))
			{
				localStorage.setItem("gears", gears.value);
			}
			else 
			{
				localStorage.setItem("gears", " ");
			}
			
			if($('#seats').prop('checked'))
			{
				localStorage.setItem("seats", seats.value);
			}
			else 
			{
				localStorage.setItem("seats", " ");
			}
			
			if($('#wheels').prop('checked'))
			{
				localStorage.setItem("wheels", wheels.value);
			}
			else 
			{
				localStorage.setItem("wheels", " ");
			}
			
			if($('#mudguard').prop('checked'))
			{
				localStorage.setItem("mudguard", mudguard.value);
			}
			else 
			{
				localStorage.setItem("mudguard", " ");
			}
			
			
			if($('#handlebars').prop('checked'))
			{
				localStorage.setItem("handlebars", handlebars.value);
			}
			else
			{
				localStorage.setItem("handlebars", " ");
			}
			
			localStorage.setItem("name", name.value);
			localStorage.setItem("email", email.value);
			localStorage.setItem("birthday", birthday.value);
		/* localStorage.setItem("name", name.value);
		localStorage.setItem("email", email.value);
		localStorage.setItem("birthday", birthday.value);
		localStorage.setItem("brakes", brakes.value);
		localStorage.setItem("tires", tires.value);
		localStorage.setItem("gears", gears.value);
		localStorage.setItem("seats", seats.value);
		localStorage.setItem("wheels", wheels.value);
		localStorage.setItem("mudguard", mudguard.value);
		localStorage.setItem("handlebars", handlebars.value); */
		
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
		
		Console.log("Successfully Saved Data to the local storage.")
		alert("Your data was saved successfully.");
	}
	catch (e)
	{
		if (e == isQuotaExceeded)
		{
			alert("Error: Local Storage limit exceeded.");
			localStorage.clear();
			console.log("Error: Local Storage limit exceeded.");
			
		}
/* 		else
		{
			console.log("Error: Saving to Local Storage.");
			alert("Error: Saving to Local Storage.");
			localStorage.clear();
		} */
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