//lets register template7 helper so we can pass json string in links
Template.registerHelper('json_stringify', function(context){
	return JSON.stringify(context);
});

//initialise the appCodeName
var myApp = new Framework7 ({
	animateNavBackIcon: true,
	precompileTemplates: true,
	template7Pages: true
	});

var $$ = Dom7;

//load the bike JSON file and add to the bikList dataset
function getBikes(){
		$$.getJSON('bike.json', function(json){
			myApp.template7Data.bikeList = json;
			console.log(template7Data);
		});
};

getBikes();

var mainView = myApp.addView('.view-main',{
	//enable dynamic Navbar
	dynamicNavbar: true,
});
