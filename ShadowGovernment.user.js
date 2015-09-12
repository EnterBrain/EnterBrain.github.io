// ==UserScript==
// @name           Shadow Government Extension
// @version        0.11
// @namespace      localhost
// @author         EnterBrain
// @description    Plugin for best experience Shadow Government.
// @icon           http://firepic.org/images/2015-08/31/ktizhlzyzxz4.png
// @icon64         http://firepic.org/images/2015-08/31/8gwmu0w58oy5.png
// @match          http://*.e-sim.org/*
// @grant          all
// @require        http://code.jquery.com/jquery.js
// ==/UserScript==

$('<script src="https://rawgit.com/EnterBrain/Shadow-Government/master/ShadowGovernmentLib.js" type="text/javascript"></script>').appendTo($("body"));
$('<link href="https://rawgit.com/EnterBrain/Shadow-Government/master/ShadowGovernmentStyle.css" type="text/css" rel="stylesheet">').appendTo($("body"));