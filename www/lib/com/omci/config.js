/**
 * Base configuration for the app
 */

if (document.location.host.match(/local/)){
	window.Omc = {
		config: {
			client: "V4E5YSHBAG34FPQZA2X2ABUCHQP4M1AFIYWA5ZUTQWGSIPZE",
			callback: "http://" + document.location.host + document.location.pathname,
			api: {
				host: "local.api.onemorecheckin.com",
				port: 8080
			}
		}
	};
} else {
	window.Omc = {
		config: {
			client: "KPA3DXY55S1OWUAXKDNTXUCE0AL4AI0EMPKO2BSIVU2IUSAH",
			callback: "http://" + document.location.host + document.location.pathname,
			api: {
				host: "api.onemorecheckin.com",
				port: null
			}
		}
	};
}

if(!("console" in window)){
	window.console = {};
}

if(!("log" in console)){
	window.console.log = function(){
		// Hohohohoho
	};
}