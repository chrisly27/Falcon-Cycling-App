/* //lets register template7 helper so we can pass json string in links
Template.registerHelper('json_stringify', function(context){
	return JSON.stringify(context);
}); */

//initialise the appCodeName
var myApp = new Framework7 ({
	animateNavBackIcon: true,
	precompileTemplates: true,
	template7Pages: true
	});

var $$ = Dom7;

var mainView = myApp.addView('.view-main',{
	//enable dynamic Navbar
	dynamicNavbar: true,
});
