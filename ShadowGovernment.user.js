// ==UserScript==
// @name           Shadow Government Extension
// @version        0.1
// @namespace      localhost
// @author         EnterBrain
// @description    Plugin for best experience Shadow Government.
// @icon           http://firepic.org/images/2015-08/31/ktizhlzyzxz4.png
// @icon64         http://firepic.org/images/2015-08/31/8gwmu0w58oy5.png
// @match          http://*.e-sim.org/*
// @grant          all
// @require        http://code.jquery.com/jquery.js
// ==/UserScript==

$(document).ready(function () {
	$('<script type="text/javascript" src="https://greasyfork.org/scripts/12370-shadowgovermentlib/code/ShadowGovermentLib.js"></script>').appendTo($("body"));
	$('<link href="https://secura.e-sim.org:8080//css/esim-style.css" type="text/css" rel="stylesheet">').appendTo($("body"));
	/* var script = document.createElement( "script" );
	script.type = "text/javascript";
	script.src = "https://greasyfork.org/scripts/12370-shadowgovermentlib/code/ShadowGovermentLib.js";
	document.body.appendChild( script );
	script = undefined;

	var style = document.createElement( "style" );
	style.type = "text/css";
	style.src = "https://greasyfork.org/scripts/12370-shadowgovermentlib/code/ShadowGovermentLib.js";
	document.body.appendChild( style );
	style = undefined; */
}