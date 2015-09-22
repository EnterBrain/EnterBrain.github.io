// ==UserScript==
// @name           Shadow Government Extension
// @version        1.3
// @namespace      localhost
// @author         EnterBrain
// @description    Plugin for best experience Shadow Government.
// @icon           http://enterbrain.github.io/img/16.png
// @icon64         http://enterbrain.github.io/img/64.png
// @match          http://*.e-sim.org/*
// @grant          all
// @require        http://code.jquery.com/jquery.js
// ==/UserScript==

$('<script src="http://enterbrain.github.io/plugins/jquery.blockUI.js" type="text/javascript"></script>').appendTo($("head"));
$('<script src="http://enterbrain.github.io/ShadowGovernmentLib.min.js" type="text/javascript"></script>').appendTo($("head"));
$('<link href="http://enterbrain.github.io/css/ShadowGovernmentStyle.css" type="text/css" rel="stylesheet">').appendTo($("head"));