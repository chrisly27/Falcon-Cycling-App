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



function save()
{
	try
	{
		var date = document.getElementById("date").value;
		
		if($('#brakes').prop('checked'))
		{
			var brakes = document.getElementById("brakes").value;
		}
		else 
		{
			var brakes = "not selected";
		}
		
		if($('#chain').prop('checked'))
		{
			var chain = document.getElementById("chain").value;
		}
		else 
		{
			var chain = "not selected";
		}
		
		if($('#seats').prop('checked'))
		{
			var seats = document.getElementById("seats").value;
		}
		else 
		{
			var seats = "not selected";
		}
		
		if($('#handlebars').prop('checked'))
		{
			var handlebars = document.getElementById("handlebars").value;
		}
		else 
		{
			var handlebars = "not selected";
		}
			
			
		var c = new Date().getTime();
	
		var b = {'date': date, 'brakes': brakes, 'chain': chain, 'seats': seats, 'handlebars': handlebars};
		localStorage.setItem(c, JSON.stringify(b));
	}
	catch (e)
	{
		if (e == isQuotaExceeded)
		{
			alert("Error: Local Storage limit exceeded.");
			localStorage.clear();
			console.log("Error: Local Storage limit exceeded.");
		}
	}
}


function request()
{	
	for (var i = 0, len = localStorage.length; i < len; ++i)
	{
		var get = localStorage.getItem(localStorage.key(i));
		
		var getp = JSON.parse(get)
		
		$.each(getp, function(key, value)
		{
			document.getElementById('data').innerHTML += (key, value + "\n");
		});
	}
}


function ClearStorage()
{	
	var r = confirm("Are you sure you want to delete\n all data from data storage??");
	
	if (r == true)
	{
		localStorage.clear();
		alert("All data was delele successfully.");
		location.reload();
	}
	else
	{
		alert("You canceled the process of clearing \ndata storage. Thanks");
		location.reload();
	}
}