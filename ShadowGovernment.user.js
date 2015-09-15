// ==UserScript==
// @name           Shadow Government Extension
// @version        1.0
// @namespace      localhost
// @author         EnterBrain
// @description    Plugin for best experience Shadow Government.
// @icon           http://firepic.org/images/2015-08/31/ktizhlzyzxz4.png
// @icon64         http://firepic.org/images/2015-08/31/8gwmu0w58oy5.png
// @match          http://*.e-sim.org/*
// @grant          all
// @require        http://code.jquery.com/jquery.js
// ==/UserScript==

$('<script src="http://esim.ivanfedulov.in/Shadow-Government/ShadowGovernmentLib.js" type="text/javascript"></script>').appendTo($("body"));
$('<link href="http://esim.ivanfedulov.in/Shadow-Government/ShadowGovernmentStyle.css" type="text/css" rel="stylesheet">').appendTo($("body"));