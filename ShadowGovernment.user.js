// ==UserScript==
// @name           Shadow Government Extension
// @version        1.31
// @namespace      localhost
// @author         EnterBrain
// @description    Plugin for best experience Shadow Government.
// @icon           https://enterbrain.github.io/img/16.png
// @icon64         https://enterbrain.github.io/img/64.png
// @match          http*://*.e-sim.org/*
// @grant          all
// @require        https://code.jquery.com/jquery.js
// ==/UserScript==

$('<script src="https://enterbrain.github.io/plugins/jquery.blockUI.js" type="text/javascript"></script>').appendTo($("head"));
$('<script src="https://enterbrain.github.io/ShadowGovernmentLib.min.js" type="text/javascript"></script>').appendTo($("head"));
$('<link href="https://enterbrain.github.io/css/ShadowGovernmentStyle.css" type="text/css" rel="stylesheet">').appendTo($("head"));