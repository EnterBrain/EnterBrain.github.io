// ==UserScript==
// @name           Shadow Government Extension Beta
// @version        2.03
// @namespace      localhost
// @author         EnterBrain
// @description    Plugin for best experience Shadow Government.
// @icon           https://enterbrain.github.io/img/16.png
// @icon64         https://enterbrain.github.io/img/64.png
// @include        http*://*.e-sim.org/*
// @exclude        http*://tickets.e-sim.org/*
// @grant          all
// @require        https://code.jquery.com/jquery.js
// ==/UserScript==

$('<script defer src="https://enterbrain.github.io/plugins/jquery.metadata.js" type="text/javascript"></script>').appendTo($("head"));
$('<script defer src="https://enterbrain.github.io/plugins/jquery.blockUI.js" type="text/javascript"></script>').appendTo($("head"));
$('<script defer src="https://enterbrain.github.io/plugins/jquery.tablesorter.js" type="text/javascript"></script>').appendTo($("head"));
$('<script defer src="https://enterbrain.github.io/plugins/jquery.tablesorter.pager.js" type="text/javascript"></script>').appendTo($("head"));
$('<link href="https://enterbrain.github.io/css/jquery.tablesorter.style.css" type="text/css" rel="stylesheet">').appendTo($("head"));
$('<link href="https://enterbrain.github.io/css/jquery.tablesorter.pager.css" type="text/css" rel="stylesheet">').appendTo($("head"));
$('<script defer src="https://enterbrain.github.io/ShadowGovernmentLibBeta.js" type="text/javascript"></script>').appendTo($("head"));
$('<link href="https://enterbrain.github.io/css/ShadowGovernmentStyleBeta.css" type="text/css" rel="stylesheet">').appendTo($("head"));