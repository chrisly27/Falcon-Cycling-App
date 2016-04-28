//lets register template7 helper so we can pass json string in links
Template7.registerHelper('json_stringify', function(context){
	return JSON.stringify(context);
});

// Initialize your app
var myApp = new Framework7({
    animateNavBackIcon: true,
    // Enable templates auto precompilation
    precompileTemplates: true,
    // Enabled pages rendering using Template7
    template7Pages: true
    // Specify Template7 data for pages
  });
// Export selectors engine
var $$ = Dom7;

//load the bike JSON file and add to the bikList dataset
function getBikes(){
		$$.getJSON('Bike.json', function(json){
			myApp.template7Data.bikelist = json;
 			/* console.log("Crisly Domingos");  */
		});
};

getBikes();

var mainView = myApp.addView('.view-main',{
	//enable dynamic Navbar
	dynamicNavbar: true,
});