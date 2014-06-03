// START: APM service code injection
// Require the apm module

if (OS_IOS || OS_ANDROID) {
	try {
		Alloy.Globals.apm = require("com.appcelerator.apm");
	} catch (e) {
		Ti.API.info("com.appcelerator.apm module is not available");
	}

	// Initialize the module if it is defined
	Alloy.Globals.apm && Alloy.Globals.apm.init && Alloy.Globals.apm.init();
} else {
	Alloy.Globals.apm = {};
	
	//In case apm is not installed, so the leaveBreadcrumb calls to break the app.
	Alloy.Globals.apm.leaveBreadcrumb = function() {
	};
}
// END: APM code injection

// //Setup V2 Maps Module (Used for mapDrawing module);

Alloy.Globals.Map = OS_IOS || OS_ANDROID?require("ti.map"):Ti.Map;

Alloy.Globals.customMapView = (function() {
	return Ti.UI.createView({
		backgroundColor : "blue",
		height : 100,
		width : 100,
		opacity : "50%"
	});
})();

/**
 * Set the top as per the status bar
 * */
Alloy.Globals.adjustStatusBar = function(container) {
	if (OS_IOS && Ti.Platform.version.split('.')[0] >= 7) {
		container.top = 20;
	}
};


/**
 * Name of Local DB
 */
Alloy.Globals.db = "Employee";

/**
 * Adding book collection to alloy 
 * */
if(OS_IOS || OS_ANDROID || OS_BLACKBERRY){
	Alloy.Collections.book = Alloy.createCollection('book');
}
