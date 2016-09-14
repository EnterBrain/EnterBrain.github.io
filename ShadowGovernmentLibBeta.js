(function($){				
    jQuery.fn.lightTabs = function(options){
        
        var createTabs = function(){
            tabs = this;
            i = 0;
            
            showPage = function(i){
                $(tabs).children("div").children("div").hide();
                $(tabs).children("div").children("div").eq(i).show();
                $(tabs).children("ul").children("li").removeClass("active");
                $(tabs).children("ul").children("li").eq(i).addClass("active");
            }
            
            showPage(0);				
            
            $(tabs).children("ul").children("li").each(function(index, element){
                $(element).attr("data-page", i);
                i++;                        
            });
            
            $(tabs).children("ul").children("li").click(function(){
                showPage(parseInt($(this).attr("data-page")));
            });				
        };		
        return this.each(createTabs);
    };	
})(jQuery);

	
/*---Initialization parameters---*/
var lang = "en";
var localUrl = new String( window.location );
var lastModalWindow = $('#fightResponse > div').clone();

// Template strings
var NotifyMotivateTemp = '<div class="growlUI {1}" style="cursor: default;"><h1>{2}</h1><h2>{3}</h2></div>';
var NotifyTwoClickTemp = '<div class="growlUI {1}" style="cursor: default;"><h1>{2}</h1><h2>{3}</h2></div>';

// VARS
var cachedSettings = null; // GM friendly function
var currentServer = null;
var selectedFood = null;
var selectedGift = null;
var selectedWeapon = null;
var selectedCurrency = null;
var idPlayer = null;
var extendedMU = false;
var savedWorkedList = [];
/*---Initialization parameters---*/


/*---Small core function---*/
function inGameCheck(){
	if($("section.top-bar-section > ul.foundation-right").length==1){
		return true;
	} else {
		return false;
	}
}

function GetCurrentDay(){
	var CurrentDay = /\d+/gim.exec($("#userMenu div div.panel.callout b:eq(2)").html());
	if (CurrentDay){
		return parseInt(CurrentDay[0]);
	}
	return 0;
}

function itsOrgAccount() {
	if( parseInt($("#actualXp").html()) == 1 ) { return( true ); }
	return( false );
}

function createCheckBox( label, configLabel, defaultValue ) {
	var div = $( "<div></div>" );
	var checked = ($.jStorage.get(configLabel, defaultValue)) ? "checked='checked'" : "";
	div.append( "<input class='configCheckbox' type='checkbox' "+ checked +" />" );
	div.children( "input" ).bind( "change", function() { 
		$.jStorage.set(configLabel, ($(this).attr( "checked" ) == "checked"));
	});
	div.append( "<span class='configLabelCheckbox'>"+ label +"</span>" );
	div.children( "span" ).bind( "click", function() { 
		div.children( "input" ).click();
		div.children( "input" ).change();
	});
	return( div );
}

function createInputText( label, configLabel, defaultValue, filter) {
	var div = $( "<div></div>" );
	div.append( "<span class='configLabelInputText'>"+ label +"</span>" );
	div.append( "<input class='configInputText' type='text' value='"+$.jStorage.get(configLabel, defaultValue)+"' />" );
	div.children( "input" ).bind( "keyup change", function() {
		if (filter == "number") {
			$(this).attr( "value" , $(this).attr( "value" ).replace(/[^\d,]/g, ''))
		}
		if ($(this).attr( "value" ) != ""){
			$.jStorage.set(configLabel, $(this).attr( "value" ));
		}
	});
	return( div );
}

function createSelect( label, configLabel, defaultValue, options ) {
	var div = $( "<div></div>" );
	div.append( "<span class='configLabelSelect'>"+ label +"</span>" );
	div.append('<select class="configSelect"></select>');
	for (var key in options) {
		console.log(configLabel+" ("+key+':'+options[key]+")");
		console.log($.jStorage.get(configLabel, defaultValue));
		var selected = ($.jStorage.get(configLabel, defaultValue)==options[key]) ? "selected " : "";
		div.children("select").append('<option '+selected+'value="'+options[key]+'">'+key+'</option>');
	}
	div.children( "select" ).bind( "change", function() {
		$.jStorage.set(configLabel, parseInt($(this).attr( "value" )));
	});
	return( div );
}

function ImgSrcFix(){
	$("img").each(function(){
		if ($(this).attr("src") != undefined){
			if ($(this).attr("src").indexOf( "//cdn.e-sim.org//", 0 ) >= 0){
				$(this).attr("src", $(this).attr("src").replace("//cdn.e-sim.org//","//cdn.e-sim.org/"));
			}
			if ($(this).attr("src").indexOf( "https://cdn.e-sim.org:8080/", 0 ) >= 0){
				$(this).attr("src", $(this).attr("src").replace("https://cdn.e-sim.org:8080/","http://cdn.e-sim.org/"));
			}
		}
	});
	$("image").each(function(){
		if ($(this).attr("href") != undefined){
			if ($(this).attr("href").indexOf( "https://cdn.e-sim.org:8080/", 0 ) >= 0){
				$(this).attr("href", $(this).attr("href").replace("https://cdn.e-sim.org:8080/","http://cdn.e-sim.org/"));
			}
		}
	});
	window.setTimeout(ImgSrcFix,2000);
}

function ScriptAndStyleSrcFix(){
	$("script").each(function(){
		if ($(this).attr("src") != undefined){
			if ($(this).attr("src").indexOf( "//cdn.e-sim.org//", 0 ) >= 0){
				$(this).attr("src", $(this).attr("src").replace("//cdn.e-sim.org//","//cdn.e-sim.org/"));
			}
		}
	});
	$("link[type*=css]").each(function(){
		if ($(this).attr("href") != undefined){
			if ($(this).attr("href").indexOf( "//cdn.e-sim.org//", 0 ) >= 0){
				$(this).attr("href", $(this).attr("href").replace("//cdn.e-sim.org//","//cdn.e-sim.org/"));
			}
		}
	});
}

// Get URL Vars
function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function( m, key, value ) { vars[key] = value; });
	return vars;
}

//Get Lang
function getLang(){
	if($("#userMenu > div > form > button > img").length==1){
		var country = /flags\/small\/(\S+).png/.exec($("#userMenu > div > form > button > img").attr("src"))[1];
		lang = LangByCC[ country ];
		console.log(lang);
	}
}
/*---Small core function---*/

/*---Main function---*/
function Main(){
	
	getLang();
	
	$('<a id="SGSettingsButton" class="button foundation-style" title="Shadow Government Settings" href="editCitizen.html?Settings"><i class="icon-star"></i>SG Settings</a><br>').insertBefore($(".foundation-right.hidden-overflow > div:first > a:last"));
	
	$('#SGSettingsButton').click(function() { 
		$.blockUI({ 
			message: $('#WrapperMainConfig'), 
			css: {
				top:  "48px", 
				left: '50%', 
				right: '',
				margin: '0px 0px 0px -300px',
				width: '600px' ,
				border: "0px",
				position: "absolute",
				textAlign: "left",
				cursor: "default"
			},
			onOverlayClick: $.unblockUI
		});
		return false;
	});
	
	$('<div id="WrapperMainConfig" style="display:none;"><center><h1>Shadow Government Settings</h1></center><p style="clear: both"></p><br><ul id="MainConfigMenu"></ul><div id="MainConfigBody"></div></div>').appendTo($("body"));
	$('<button id="CloseWrapperMainConfig" style="position: absolute; top: 0.25em; right: 0.25em; padding: 0.3em !important; " href="#" class="foundation-style closeDropdown profileButton">×</button>').appendTo($("#WrapperMainConfig > center > h1"));
	$("#CloseWrapperMainConfig").click(function(){
		$.unblockUI();
	});
		
	$('<li>Two Click</li>').appendTo($("#MainConfigMenu"));
	var SettingsTwoClick = $('<div></div>').appendTo($("#MainConfigBody"));
	var configSGTwoClick = createCheckBox( "Two Click Auto", "SGTwoClick", false );
	SettingsTwoClick.append( configSGTwoClick );
	var configSGTwoClickLogin = createInputText( "Two Click Login: ", "SGTwoClickLogin", "", "login" );
	SettingsTwoClick.append( configSGTwoClickLogin );
	var configSGTwoClickPassword = createInputText( "Two Click Password: ", "SGTwoClickPassword", "", "passwd" );
	SettingsTwoClick.append( configSGTwoClickPassword );
	
	$('<li>Spectator</li>').appendTo($("#MainConfigMenu"));
	var SettingsSpectatorDiv = $('<div></div>').appendTo($("#MainConfigBody"));
	var configSGSpectatorMode = createCheckBox( "Custom Spectator", "SGSpectatorMode", true );
	SettingsSpectatorDiv.append( configSGSpectatorMode );
	var configSGTimerSpectator = createInputText( "Timer Spectator: ", "SGTimerSpectator", 7000, "number" );
	SettingsSpectatorDiv.append( configSGTimerSpectator );
	var configSGFakeUserID = createInputText( "Fake User ID: ", "SGFakeUserID", 1, "number" );
	SettingsSpectatorDiv.append( configSGFakeUserID );
	var configSGFakeCitizenshipID = createInputText( "Fake Citizenship ID: ", "SGFakeCitizenshipID", 1, "number" );
	SettingsSpectatorDiv.append( configSGFakeCitizenshipID );
	var configSGFakeSpectatorFocus = createCheckBox( "Fake Spectator Focus", "SGFakeSpectatorFocus", false );
	SettingsSpectatorDiv.append( configSGFakeSpectatorFocus );
	
	$('<li>Motivator</li>').appendTo($("#MainConfigMenu"));
	var SettingsMotivatorDiv = $('<div></div>').appendTo($("#MainConfigBody"));
	var configSGMotivationMode = createCheckBox( "Easy Motivator", "SGMotivationMode", true );
	SettingsMotivatorDiv.append( configSGMotivationMode );
	var configSGAutoMotivateType = createSelect( "Auto Motivator: ","SGAutoMotivateType", 0, { "disabed" : 0, "weapons" : 1, "breads" : 2 , "gifts" : 3 } );
	SettingsMotivatorDiv.append( configSGAutoMotivateType );
	
	$('<li>Demoralizator</li>').appendTo($("#MainConfigMenu"));
	var SettingsDemoralizatorDiv = $('<div></div>').appendTo($("#MainConfigBody"));
	var configSGDemoralizatorMode = createCheckBox( "Demoralizator", "SGDemoralizatorMode", false );
	SettingsDemoralizatorDiv.append( configSGDemoralizatorMode );
	var configSGDemoralizatorTimerSpectator = createInputText( "Dem. Timer Spectator: ", "SGDemoralizatorTimerSpectator", 10000, "number" );
	SettingsDemoralizatorDiv.append( configSGDemoralizatorTimerSpectator );
	var configSGDemoralizatorFakeUserIDCount = createInputText( "Dem. Fake User Count: ", "SGDemoralizatorFakeUserIDCount", 10, "number" );
	SettingsDemoralizatorDiv.append( configSGDemoralizatorFakeUserIDCount );
	var configSGDemoralizatorFakeCitizenshipID = createInputText( "Dem. Fake Citizenship ID: ", "SGDemoralizatorFakeCitizenshipID", 2, "number" );
	SettingsDemoralizatorDiv.append( configSGDemoralizatorFakeCitizenshipID );
	
	$('<li>Equipment</li>').appendTo($("#MainConfigMenu"));
	var SettingsEquipmentDiv = $('<div></div>').appendTo($("#MainConfigBody"));
	var configSGEquipmentFastMode = createCheckBox( "Equipment Fast Link", "SGEquipmentFastMode", true );
	SettingsEquipmentDiv.append( configSGEquipmentFastMode );
	
	$('<li>Logs</li>').appendTo($("#MainConfigMenu"));
	var SettingsLogs = $('<div></div>').appendTo($("#MainConfigBody"));
	var configSGMUDonationsLogMode = createCheckBox( "MU Donations Log", "SGMUDonationsLogMode", false );
	SettingsLogs.append( configSGMUDonationsLogMode );
	var configSGTransactionLogMode = createCheckBox( "Player Transaction Log", "SGTransactionLogMode", false );
	SettingsLogs.append( configSGTransactionLogMode );
	
	$('<li>Market</li>').appendTo($("#MainConfigMenu"));
	var SettingsMarket = $('<div></div>').appendTo($("#MainConfigBody"));
	var configSGNewTableProductMarket = createCheckBox( "New Table Product Market", "SGNewTableProductMarket", true );
	SettingsMarket.append( configSGNewTableProductMarket );
	var configSGChangeProductMarketTable = createCheckBox( "Change Product Market Table(OLD TABLE)", "SGChangeProductMarketTable", true );
	SettingsMarket.append( configSGChangeProductMarketTable );
	var configSGDisplayGoldValue = createCheckBox( "Display Gold Value", "SGDisplayGoldValue(OLD TABLE)", true );
	SettingsMarket.append( configSGDisplayGoldValue );
	/* var configSGProductMarketSelection = createCheckBox( "Product Market Selection", "SGProductMarketSelection", true );
	SettingsMarket.append( configSGProductMarketSelection ); */
	
	$('<li>Market Offers</li>').appendTo($("#MainConfigMenu"));
	var SettingsMarketOffers = $('<div></div>').appendTo($("#MainConfigBody"));
	var configSGChangeMarketOffers = createCheckBox( "Change Market Offers", "SGChangeMarketOffers", true );
	SettingsMarketOffers.append( configSGChangeMarketOffers );
	var configSGEditOffers = createCheckBox( "Edit Offers", "SGEditOffers", true );
	SettingsMarketOffers.append( configSGEditOffers );
	
	$('<li>Monetary Market</li>').appendTo($("#MainConfigMenu"));
	var SettingsMonetaryMarket = $('<div></div>').appendTo($("#MainConfigBody"));
	//var configSGChangeMonetaryMarket = createCheckBox( "Change Monetary Market", "SGChangeMonetaryMarket", true );
	//SettingsMonetaryMarket.append( configSGChangeMonetaryMarket );
	var configSGChangeMonetaryMarketTable = createCheckBox( "Change Monetary Market Table", "SGChangeMonetaryMarketTable", true );
	SettingsMonetaryMarket.append( configSGChangeMonetaryMarketTable );
	var configSGMonetaryMarketPriceEdit = createCheckBox( "Monetary Market Price Edit", "SGMonetaryMarketPriceEdit", true );
	SettingsMonetaryMarket.append( configSGMonetaryMarketPriceEdit );
	var configSGMonetaryMarketPriceRatio = createCheckBox( "Monetary Market Price Ratio", "SGMonetaryMarketPriceRatio", true );
	SettingsMonetaryMarket.append( configSGMonetaryMarketPriceRatio );
	
	$('<li>Battle Page</li>').appendTo($("#MainConfigMenu"));
	var SettingsBattlePage = $('<div></div>').appendTo($("#MainConfigBody"));
	var configSGBattleStatsMinimizeMode = createCheckBox( "Battle Stats Minimize Mode", "SGBattleStatsMinimizeMode", true );
	SettingsBattlePage.append( configSGBattleStatsMinimizeMode );
	var configSGModalWindowFuncMode = createSelect( "Modal Window Func Mode: ","SGModalWindowFuncMode", 1, { "disabed" : 0, "modal" : 1, "block" : 2 } );
	SettingsBattlePage.append( configSGModalWindowFuncMode );
	
	$('<li>Military Unit</li>').appendTo($("#MainConfigMenu"));
	var SettingsMUPage = $('<div></div>').appendTo($("#MainConfigBody"));
	var configSGMUBroadcastMsg = createCheckBox( "MU Broadcast Message", "SGMUBroadcastMsg", true );
	SettingsMUPage.append( configSGMUBroadcastMsg );
	var configSGMUTextStorageMode = createCheckBox( "MU Text Storage", "SGMUTextStorageMode", true );
	SettingsMUPage.append( configSGMUTextStorageMode );
	
	$('<li>Companies</li>').appendTo($("#MainConfigMenu"));
	var SettingsCompaniesPage = $('<div></div>').appendTo($("#MainConfigBody"));
	var configSGMUBroadcastMsg = createCheckBox( "Company Redesign", "SGCompanyRedesignMode", true );//'SGCompanyWorkResultsMode' 'SGCompanyRedesignMode'
	SettingsCompaniesPage.append( configSGMUBroadcastMsg );
	var configSGMUTextStorageMode = createCheckBox( "Company Work Results", "SGCompanyWorkResultsMode", true );
	SettingsCompaniesPage.append( configSGMUTextStorageMode );
	var configSGCompanyAllWorkersMode = createCheckBox( "SGCompany All Workers Redesign", "SGCompanyAllWorkersMode", true );
	SettingsCompaniesPage.append( configSGCompanyAllWorkersMode );
	
	$('<li>Statistics</li>').appendTo($("#MainConfigMenu"));
	var SettingsStatistics = $('<div></div>').appendTo($("#MainConfigBody"));
	var configSGCitizenBroadcastMSG = createCheckBox( "Citizen Broadcast MSG", "SGCitizenBroadcastMSG", true );
	SettingsStatistics.append( configSGCitizenBroadcastMSG );

	$('<li>Other Fix</li>').appendTo($("#MainConfigMenu"));
	var SettingsOtherFix = $('<div></div>').appendTo($("#MainConfigBody"));
	var configSGImgSrcFixMode = createCheckBox( "Img Src Fix", "SGImgSrcFixMode", false );
	SettingsOtherFix.append( configSGImgSrcFixMode );
	var configSGScriptAndStyleSrcFixMode = createCheckBox( "Script And Style Src Fix", "SGScriptAndStyleSrcFixMode", false );
	SettingsOtherFix.append( configSGScriptAndStyleSrcFixMode );
	
			
	$("#WrapperMainConfig").lightTabs();
	
}
/*---Main function---*/

/*---Spectator function---*/
function CreateSpectatorsBlock(){
	$("#battleStats").append('<div class="foundation-style small-10 columns"><div class="foundation-style small-5 columns"><b>Total defenders online:</b><i id="totaldefenders" style="display: inline;">0</i> <a style="font-size: 11px;" href="" id="defendersLink">Show details</a> <a style="font-size: 11px; display: none;" href="" id="defendersLinkHide">Hide details</a> <br><div align="center" id="defendersMenu" style="font-size: 11px; text-align: center; padding: 1em; margin: auto; display: none;">No one <br> </div></div><div class="foundation-style small-5 columns"><b>Total attackers online:</b><i id="totalattackers" style="display: inline;">0</i> <a style="font-size: 11px;" href="" id="attackersLink">Show details</a> <a style="font-size: 11px;  display: none;" href="" id="attackersLinkHide">Hide details</a> <br><div align="center" id="attackersMenu" style="font-size: 11px; text-align: center; padding: 1em; margin: auto; display: none;">No one <br> </div></div>');
	$("#battleStats").append('<div class="foundation-style small-10 columns"><b>Total spectators online:</b><i id="totalspectators" style="display: inline;">0</i> <a style="font-size: 11px;" href="" id="spectatorsLink">Show details</a> <a style="font-size: 11px; display: none;" href="" id="spectatorsLinkHide">Hide details</a> <br><div align="center" id="spectatorsMenu" style="font-size: 11px; text-align: center; padding: 1em; margin: auto; display: none;">No one <br> </div>  </div>');
	
	$('#spectatorsLink').click(function () { $('#spectatorsLink').fadeOut('fast', function () { $('#spectatorsLinkHide').fadeIn('fast'); $('#spectatorsMenu').fadeIn('fast'); }); return false; });
	$('#spectatorsLinkHide').click(function () { $('#spectatorsLinkHide').fadeOut('fast', function () { $('#spectatorsLink').fadeIn('fast'); $('#spectatorsMenu').fadeOut('fast'); }); return false; });

	$('#attackersLink').click(function () { $('#attackersLink').fadeOut('fast', function () { $('#attackersLinkHide').fadeIn('fast'); $('#attackersMenu').fadeIn('fast'); }); return false; });
	$('#attackersLinkHide').click(function () { $('#attackersLinkHide').fadeOut('fast', function () { $('#attackersLink').fadeIn('fast'); $('#attackersMenu').fadeOut('fast'); }); return false; });

	$('#defendersLink').click(function () { $('#defendersLink').fadeOut('fast', function () { $('#defendersLinkHide').fadeIn('fast'); $('#defendersMenu').fadeIn('fast'); }); return false; });
	$('#defendersLinkHide').click(function () { $('#defendersLinkHide').fadeOut('fast', function () { $('#defendersLink').fadeIn('fast'); $('#defendersMenu').fadeOut('fast'); }); return false; });
}

function sendUpdateRequestSpectator() {
	
	var FakeUserID = $.jStorage.get('SGFakeUserID', 1);
	var FakeCitizenshipID = $.jStorage.get('SGFakeCitizenshipID', 1);
	var SGTimerSpectator = $.jStorage.get('SGTimerSpectator', 7000);
	
	if (!hasFocus && $.jStorage.get('SGFakeSpectatorFocus', false)) {
		return;
	} else if (!hasFocus && !$.jStorage.get('SGFakeSpectatorFocus', false) && SGTimerSpectator<7000) {
		SGTimerSpectator = 7000;
	}
	
	var dataString = 'id=' + $("#battleRoundId").val() + "&at="+FakeUserID+"&ci="+FakeCitizenshipID+"&premium=1";
	
	$.ajax({  
		type: "GET",
		url: "battleScore.html",
		data: dataString,
		dataType: "json",
		success: function(msg) {
			updateStatus(msg.attackerScore, msg.defenderScore, msg.remainingTimeInSeconds, msg.percentAttackers);
			updateBattleHeros(msg.topAttackers, msg.topDefenders);
			updateTop10(msg.top10Attackers, msg.top10Defenders);
			updateBattleMonitor(msg);
			//updatePlace(msg.yourPlace);
			//updateTotalDamage(msg.totalPlayerDamage);
			for (var i = 0; i < msg.recentAttackers.length; i++) {
				if (msg.recentAttackers[i].id == latestAttackerId) {
					msg.recentAttackers = msg.recentAttackers.slice(0, i);
					break;
				}
			}
			for (var i = 0; i < msg.recentDefenders.length; i++) {
				if (msg.recentDefenders[i].id == latestDefenderId) {
					msg.recentDefenders = msg.recentDefenders.slice(0, i);
					break;
				}
			}
			if (msg.recentAttackers.length != 0) {
				latestAttackerId = msg.recentAttackers[0].id;
				attackerHits = msg.recentAttackers;
			}
			if (msg.recentDefenders.length != 0) {
				latestDefenderId = msg.recentDefenders[0].id;
				defenderHits = msg.recentDefenders;
			}
			window.setTimeout(sendUpdateRequestSpectator, SGTimerSpectator);
		}
	});
}

function FakeSpectatorFunc(){
	continueThread = false;
	sendUpdateRequestSpectator();
}
/*---Spectator function---*/

/*---Statictics function---*/
function citizenBroadcastMSG(){
	var arrNames = [];
	var lastPageRaw = /^(.*?)(\d+)$/gim.exec($("#pagination-digg >.next").prev("li").find("a").attr("href"));
	var lastPageUrl = "";
	var lastPageId = 1;
	if (!lastPageRaw){
		lastPageUrl = /(.*?\.html.*?)$/gim.exec(localUrl)[1];
	} else {
		lastPageUrl = lastPageRaw[1];
		lastPageId = lastPageRaw[2];
	}

	$('<hr class="littleDashedLine"><div id="citizenProgressWrap"></div><p style="clear: both"></p>').appendTo(".small-8 > .testDivblue");
	$("#citizenProgressWrap").append('<input type="submit" id="CitizenBroadcastMSG" value="Citizen Broadcast MSG">');

	$("#CitizenBroadcastMSG").click(function() {
		if (arrNames.length < 1){
			$("#citizenProgressWrap").append('<div id="citizenProgressBarWrap"><center><p style="text-align: center;"><img alt="" src="'+IMGLOAD+'" style="margin-right: 10px;" /><span style="font-size:36px;"><span id="CountPage">0</span>/<span id="AllPage">'+lastPageId+'</span></span></p></center></div>');
			for (var i = 1; i <= lastPageId; i++) {
				var getUrl = (lastPageId==1) ? lastPageUrl : lastPageUrl + i;
				$.ajax({  
					type: "GET",
					url: getUrl,
					success: function(data) {
						$(".dataTable a",data).each(function(){
							arrNames[arrNames.length] = $(this).text().replace(/★ /g, '');
						});
						$(data).empty().remove();
						data = "undefined";
						$("#CountPage").text(parseInt($("#CountPage").text())+1);							
						if (parseInt($("#CountPage").text()) == parseInt($("#AllPage").text())){
							$("#citizenProgressBarWrap").empty().remove();
							openButtonMSG();
						}
					},
					error: function(jqXHR, textStatus, errorThrown){
						console.log(errorThrown);
					},
					timeout: 5000,
				});
			}
		} else if ($("#citizenProgressBarWrap").length==0) {
			openButtonMSG();
		}
	});

	function openButtonMSG(){
		$.blockUI({ 
			message: $('<center><b style="font-size:17px">SG Broadcast MSG</b></center><center><div id="SG_MSG" class="foundation-style blueLabel " style="margin-bottom:15px; width:530px;"><b style="display:block">Title:</b><input type="text" style="width: 400px;" path="title" maxlength="100" minlength="1" id="titleInput"><br><script language="JavaScript">function append(textBefore, textAfter)  {var yourTextarea = document.getElementById(\'messageForm\');var selectionStart = yourTextarea.selectionStart;var selectionText = yourTextarea.value.substr(yourTextarea.selectionStart, yourTextarea.selectionEnd-yourTextarea.selectionStart);var prefix = yourTextarea.value.substr(0, yourTextarea.selectionStart);var postfix = yourTextarea.value.substr(yourTextarea.selectionEnd);yourTextarea.value = prefix+""+textBefore+"" + selectionText + ""+textAfter+""+postfix;yourTextarea.selectionStart = selectionStart;yourTextarea.focus();};</script><b>Message:</b><br><textarea style="width:95%; height: 250px;" name="body" maxlength="10000" id="messageForm"></textarea><p style="display:inline"> Characters remaining:     </p><p class="charsRemaining" style="display:inline;">10000</p><p></p><p style="clear: both"></p><div style="display: inline" class="bbcodebuttons"><input type="button" onclick="javascript: append(\'[b]\',\'[/b]\')" value="B" id="boldButton" name="boldButton" style="cursor: pointer;"><input type="button" onclick="javascript: append(\'[i]\',\'[/i]\')" value="I" id="italicButton" name="italicButton" style="cursor: pointer;"><input type="button" onclick="javascript: append(\'[u]\',\'[/u]\')" value="U" id="underlineButton" name="underlineButton" style="cursor: pointer;"><input type="button" onclick="javascript: append(\'[quote]\',\'[/quote]\')" value="Quote" id="quoteButton" name="quoteButton" style="cursor: pointer;"><input type="button" onclick="javascript: append(\'[url=LINK]\',\'[/url]\')" value="Url" id="urlButton" name="urlButton" style="cursor: pointer;"><input type="button" onclick="javascript: append(\'[citizen]citizen name[/citizen]\',\'\')" value="Citizen" id="citizenButton" name="citizenButton" style="cursor: pointer;"><input type="button" onclick="javascript: append(\'[currency]PLN[/currency]\',\'\')" value="Currency" id="currencyButton" name="currencyButton" style="cursor: pointer;"><input type="button" onclick="javascript: append(\'[center]\',\'[/center]\')" value="Center" id="boldButton" name="centerButton" style="cursor: pointer;"><br /><br /><a href="javascript: append(\':)\',\'\')"><img border="0" src="'+IMGSMILE+'"> </a><a href="javascript: append(\':D\',\'\')"><img border="0" src="'+IMGBIGSMILE+'"> </a><a href="javascript: append(\':\\\',\'\')"><img border="0" src="'+IMGCIACH+'"> </a><a href="javascript: append(\':P \',\'\')"><img border="0" src="'+IMGTONQUE+'"> </a><a href="javascript: append(\':( \',\'\')"><img border="0" src="'+IMGUNHAPPY+'"> </a><a href="javascript: append(\';) \',\'\')"><img border="0" src="'+IMGEYE+'"> </a></div><p style="cleat: both"></p><input type="hidden" value="REPLY" name="action"><input type="button" id="SENDMSG" value="Send" style="cursor: pointer;"> &nbsp; <input type="button" value="Close" id="ClosewButton" style="cursor: pointer;"><p style="clear: both"></p> </div></center>'),
			css: { 
				top:  "48px", 
				left: ($(window).width() - 600) /2 + 'px', 
				width: '600px' ,
				border: "0px",
				position: "absolute",
				textAlign: "left"
			} 
		}); 
		
		$("#ClosewButton").click(function() {
				$.unblockUI();
		});
		
		$("#SENDMSG").click(function() {
			// Save MSG and Title
			msgTitle=$("#titleInput").val();
			msgBody=$("#messageForm").val();
			
			// Change to WAit UI
			$("#SG_MSG").html('<center><p style="text-align: center;"><h1>Dont Close...</h1><img alt="" src="'+IMGLOADBAR+'" style="margin-left:-13px; width: 562px; height: 126px;" /></p><p style="text-align: center;"><span style="font-size:36px;"><span id="LeftMSG">0</span>/<span id="AllMSG">'+arrNames.length+'</span></span></p></center>')
				
			//SEND MSGs
			arrNames.forEach(function(item, i, arr) {
				console.log("receiverName:"+item+"; title:"+msgTitle+"; body:"+msgBody);
				var timer = 11000*i;
				SendMSG(item, msgTitle, msgBody, timer);
			});
		});
	}

	
}
/*---Statictics function---*/

/*---Motivate function---*/
function EasyMotivation(){
	var MotivateCountToday = GetMotivateToday();

	var topCitizenObj = $(".dataTable tr:eq(1) > td:first a.profileLink");
	if (topCitizenObj.length == 1) {
		NewestCitizen(topCitizenObj.attr("href").replace("profile.html?id=",""));
	}
	BruteForceCitizenForm();
	
	$(".dataTable ul.button.foundation-center.foundation-style-group li a.foundation-style.button.small.help i.icon-cupcake").parent().parent().toggle();
	$("<span>Today motivate count: <b id=\"countMotivationToday\">0</b><span>").insertAfter("#newCitizenStatsForm");
	$("#countMotivationToday").html(MotivateCountToday.count);

	$( "table.dataTable tr:not(:first)" ).each(function( index, element ) {
		if ($(this).children("td").children("i.icon-uniF478").length>0){
			var MotivateUserID = $(this).children("td:first").children(".profileLink").attr("href").replace("profile.html?id=","");
			if ($(this).children("td:eq(4)").children("i.icon-uniF478").length==1){
				$(this).children("td:eq(4)").empty();
				$(this).children("td:eq(4)").append('<i id="motivate-weapons-'+MotivateUserID+'" class="motivate-element motivate-weapons icon-tank" value="'+MotivateUserID+'"></i>');
			}
			if ($(this).children("td:eq(5)").children("i.icon-uniF478").length==1){
				$(this).children("td:eq(5)").empty();
				$(this).children("td:eq(5)").append('<i id="motivate-breads-'+MotivateUserID+'" class="motivate-element motivate-breads icon-bread" value="'+MotivateUserID+'"></i>');
			}
			if ($(this).children("td:eq(6)").children("i.icon-uniF478").length==1){
				$(this).children("td:eq(6)").empty();
				$(this).children("td:eq(6)").append('<i id="motivate-gifts-'+MotivateUserID+'" class="motivate-element motivate-gifts icon-gift" value="'+MotivateUserID+'"></i>');
			}
		}
		return true;
	});

	$(".motivate-element").click(function(){
		var typeMotivate = 0;
		if ($(this).hasClass("motivate-weapons")){
			typeMotivate = 1;
		} else if ($(this).hasClass("motivate-breads")){
			typeMotivate = 2;
		} else if ($(this).hasClass("motivate-gifts")){
			typeMotivate = 3;
		}
		var parentTD = $(this).parent();
		var userID = $(this).attr("value");
		var dataString = "type="+typeMotivate+"&id="+userID;
		$.ajax({  
			type: "POST",
			url: "motivateCitizen.html?id="+userID,
			data: dataString,
			dataType: "json",
			error:  AutoMotivateResponse
		});
	});
}

function BruteForceCitizenForm(){
	$('<br><br><b>Bruteforce motivate by user id</b>:<br><input id="BruteforceCitizenNuber" class="foundation-style" type="text" name="BruteforceCitizenNuber" placeholder="Enter User ID"><select id="BruteforceMotivateType" class="configSelect"><option selected="" value="1">weapons</option><option value="2">breads</option><option value="3">gifts</option></select><button id="BruteforceCitizenButton" class="postfix only-icon button foundation-style" style="width: 40px;" type="button"><i class="icon-muffin"></i></button>').insertAfter("#newCitizenStatsForm");
	var BruteforceCitizenNuber = $("#BruteforceCitizenNuber");
	var BruteforceCitizenButton = $("#BruteforceCitizenButton");
	var BruteforceMotivateType = $("#BruteforceMotivateType");
	BruteforceCitizenNuber.val($.jStorage.get('SGMotivateTopCitizen', 0));
	BruteforceCitizenButton.click(function(){
		var MotivateUserID = parseInt(BruteforceCitizenNuber.val());
		var motivateType = parseInt(BruteforceMotivateType.val());
		var dataString = "type="+motivateType+"&id="+MotivateUserID;
		var MotivateCountToday = GetMotivateToday();
		if (MotivateCountToday.count >= 5 || !checkStorageMotivation(motivateType) || itsOrgAccount()){
			if (itsOrgAccount()){
				var msgNotify = NotifyMotivateTemp;
				msgNotify = msgNotify.replace("{1}","error_motivated");
				msgNotify = msgNotify.replace("{2}","Motivate Notification");
				msgNotify = msgNotify.replace("{3}","It's Org account");
				MotivateNotify(msgNotify);
			}
			if (!checkStorageMotivation(motivateType)){
				var msgNotify = NotifyMotivateTemp;
				msgNotify = msgNotify.replace("{1}","error_motivated");
				msgNotify = msgNotify.replace("{2}","Motivate Notification");
				msgNotify = msgNotify.replace("{3}","Don't have supply for motivate");
				MotivateNotify(msgNotify);
			}
			if (MotivateCountToday.count >= 5){
				var msgNotify = NotifyMotivateTemp;
				msgNotify = msgNotify.replace("{1}","error_motivated");
				msgNotify = msgNotify.replace("{2}","Motivate Notification");
				msgNotify = msgNotify.replace("{3}","Motivate limit: 5");
				MotivateNotify(msgNotify);
			}
			return false;
		} else {
			while (MotivateCountToday.count < 5) {
				var dataString = "type="+motivateType+"&id="+MotivateUserID;
				$.ajax({  
					type: "POST",
					async: false,
					url: "motivateCitizen.html?id="+MotivateUserID,
					data: dataString,
					dataType: "json",
					error:  AutoMotivateResponse
				});
				MotivateUserID--;
				MotivateCountToday = GetMotivateToday();
			} 
		}
		
	});
}

function NewestCitizen(numberCitizen){
	if ($.jStorage.get('SGMotivateTopCitizen', 0) < numberCitizen){
		$.jStorage.set('SGMotivateTopCitizen', numberCitizen);
	}
}

function GetMotivateToday(){
	var CurrentDay = GetCurrentDay();
	var tmpMotivateToday = {day: CurrentDay,count: 0};
	if (JSON.parse($.jStorage.get('SGMotivateCountToday', JSON.stringify(tmpMotivateToday))).day == CurrentDay){
		return JSON.parse($.jStorage.get('SGMotivateCountToday', JSON.stringify(tmpMotivateToday)));
	} else {
		return tmpMotivateToday;
	}
}

function UpdateMotivateToday(){
	var MotivateCountToday = GetMotivateToday();
	MotivateCountToday.count++;
	$.jStorage.set('SGMotivateCountToday', JSON.stringify(MotivateCountToday));
	$("#MotivationCount").html(MotivateCountToday.count);
}

function MotivateNotify(msgNotify){
	$.blockUI({ 
		message: msgNotify, 
		fadeIn: 700, 
		fadeOut: 700, 
		timeout: 2000, 
		showOverlay: false, 
		centerY: false, 
		css: { 
			width: '350px', 
			top: '50px', 
			left: '', 
			right: '10px', 
			border: 'none', 
			padding: '5px', 
			backgroundColor: '#000', 
			'-webkit-border-radius': '10px', 
			'-moz-border-radius': '10px', 
			opacity: .9, 
			color: '#fff' 
		} 
	}); 
}

function AutoMotivateResponse (jqXHR, timeout, message) {
	var CheckPage = (localUrl.indexOf( URLNewCitizen, 0 ) >= 0) ? true : false;
	var dataString = /type=(\d)&id=(\d+)/gim.exec($(this)[0].data);
	var idType = parseInt(dataString[1]);
	var idUser = parseInt(dataString[2]);
	var arrType = ["none","weapons","breads","gifts"];
	var responsePage = $(jqXHR.responseText);
	console.log(jqXHR);
	console.log(responsePage);
	var url = jqXHR.getResponseHeader("TM-finalURLdhdg");
	var msgNotify = NotifyMotivateTemp;
	if (url){
		var messageResponse = /citizenMessage=(\S+)/gim.exec(url);
		if (messageResponse && messageResponse[1]=="SUCCESFULLY_MOTIVATED"){
			if (CheckPage){
				var parentTDw = $("#motivate-"+arrType[idType]+"-"+idUser).parent();
				parentTDw.empty();
				parentTDw.append('<i title="Мотивация прошла успешно" style="color: #0c0; font-size: 1.25em; text-shadow: 0 0 0" class="icon-uniF479"></i>');
			}
			msgNotify = msgNotify.replace("{1}","succesfully_motivated");
			msgNotify = msgNotify.replace("{2}","Motivate Notification");
			msgNotify = msgNotify.replace("{3}","Succesfully motivated");
			MotivateNotify(msgNotify);
			UpdateMotivateToday();
			console.log("motivate succes(type:"+arrType[idType]+"; user:"+idUser+"; message:"+messageResponse[1]+")");
		} else if(messageResponse) {
			if (CheckPage){
				$("#motivate-"+arrType[idType]+"-"+idUser).attr("title","Error: "+messageResponse[1]);
			}
			msgNotify = msgNotify.replace("{1}","error_motivated");
			msgNotify = msgNotify.replace("{2}","Motivate Notification");
			msgNotify = msgNotify.replace("{3}",messageResponse[1]);
			MotivateNotify(msgNotify);
			console.log("motivate error(type:"+arrType[idType]+"; user:"+idUser+"; message:"+messageResponse[1]+")");
		}
	} else {
		if (CheckPage){
			$("#motivate-"+arrType[idType]+"-"+idUser).css({"color": "#c00",});
		}
		var MsgDiv = responsePage.find("div.foundation-style.small-8 > div:eq(1)");
		console.log(MsgDiv);
		if (MsgDiv.hasClass("testDivred") || MsgDiv.hasClass("testDivblue")){
			var msg = $.trim(MsgDiv.text());
			if (SentManyMotivationsToday[lang] != undefined){
				if(RegExp(SentManyMotivationsToday[lang],'gim').exec(msg)){
					console.log("regexp ok");
					var MotivateCountToday = GetMotivateToday();
					MotivateCountToday.count = 5;
					$.jStorage.set('SGMotivateCountToday', JSON.stringify(MotivateCountToday));
					$("#MotivationCount").html(MotivateCountToday.count);
					if (CheckPage){
						$("#countMotivationToday").html(MotivateCountToday.count);
					}
				}
			} else if (succesfullyMotivated[lang] != undefined){
				if (RegExp(succesfullyMotivated[lang],'gim').exec(msg)){
					console.log("regexp ok");
					var MotivateCountToday = GetMotivateToday();
					MotivateCountToday.count++;
					$.jStorage.set('SGMotivateCountToday', JSON.stringify(MotivateCountToday));
					$("#MotivationCount").html(MotivateCountToday.count);
					if (CheckPage){
						$("#countMotivationToday").html(MotivateCountToday.count);
					}
				}
			} else {
				if (RegExp(YouAlreadySentPackageThisCitizenToday[lang],'gim').exec(msg)){
					
				} else if (RegExp(CitizenReceivedManyMotivationsToday[lang],'gim').exec(msg)){
					
				} else if (RegExp(CitizenReceivedEveryKindMotivationPackageToday[lang],'gim').exec(msg)){
					
				} else if (RegExp(YouDontHaveEnoughItems[lang],'gim').exec(msg)){
					
				}
			}
			
			msgNotify = msgNotify.replace("{1}","error_motivated");
			msgNotify = msgNotify.replace("{2}","Motivate Notification");
			msgNotify = msgNotify.replace("{3}",msg);
			MotivateNotify(msgNotify);
			console.log("motivate error(type:"+arrType[idType]+"; user:"+idUser+"; message:"+msg+")");
		} else {
			msgNotify = msgNotify.replace("{1}","error_motivated");
			msgNotify = msgNotify.replace("{2}","Motivate Notification");
			msgNotify = msgNotify.replace("{3}","Unknown error");
			MotivateNotify(msgNotify);
			console.log("motivate error(type:"+arrType[idType]+"; user:"+idUser+"; message:Unknown error");
		}
	}
	responsePage.remove();
}

function GetUserStorage(){
	var UserStorage = {};
	$.ajax({  
		type: "GET",
		url: URLUserStorage+"?storageType=PRODUCT",
		async: false,
		success: function(data) {
			$(data).find("#storageProductsTab .storage").each(function(){
				var val = parseInt($.trim($(this).children("div:first").text()));
				var type = /\/(\w+)\.png/gim.exec($(this).children("div:eq(1)").children("img:first").attr("src"))[1];
				var quality = 0;
				if ($(this).children("div:eq(1)").children("img").length > 1){
					quality = parseInt(/\/q(\d)\.png/gim.exec($(this).children("div:eq(1)").children("img:eq(1)").attr("src"))[1]);
				}
				if (UserStorage[type] === undefined){ UserStorage[type] = {}; }
				UserStorage[type][quality] = val;
			});
		}
	});
	return UserStorage;
}

function checkStorageMotivation(motivateType){
	if (motivateType === undefined){
		motivateType = $.jStorage.get('SGAutoMotivateType', 0);
	}
	var UserStorage = GetUserStorage();
	if (motivateType == 1 && typeof UserStorage.Weapon == "object" && UserStorage.Weapon[1] >= 3){
		return true;
	} else if (motivateType == 2 && typeof UserStorage.Food == "object" && UserStorage.Food[3] >= 2){
		return true;
	} else if (motivateType == 3 && typeof UserStorage.Gift == "object" && UserStorage.Gift[3] >= 1){
		return true;
	}
	return false;
}

function AutoMotivate(){
	var timerResponse = 60000;
	var CurrentDay = GetCurrentDay();
	var MotivateCountToday = GetMotivateToday();
	if ($("#MotivationCount").length==1){
		$("#MotivationCount").html(MotivateCountToday.count);
	} else {
		$('<b>Motivation Today:</b><b id="MotivationCount">'+MotivateCountToday.count+'</b>').insertAfter("#actualHealth + br");
	}
	console.log(JSON.stringify(MotivateCountToday));
	if (MotivateCountToday.count >= 5 || !checkStorageMotivation() || itsOrgAccount()){
		return false;
	} else {
		$.ajax({url: URLNewCitizen,})
		.done(function( data, textStatus, jqXHR ) {
			var motivateType = $.jStorage.get('SGAutoMotivateType', 0);
			$(jqXHR.responseText).find("table.dataTable  tr:not(:first)").each(function(){
				if ($(this).find("td:eq("+(3+motivateType)+") i.icon-uniF478").length>0){
					var MotivateUserID = $(this).find("td:first a").attr("href").replace(/.*?id=/,"");
					var dataString = "type="+motivateType+"&id="+MotivateUserID;
					$.ajax({  
						type: "POST",
						url: "motivateCitizen.html?id="+MotivateUserID,
						data: dataString,
						dataType: "json",
						error:  AutoMotivateResponse
					});
				}
			});
		});
	}
	window.setTimeout(AutoMotivate, timerResponse);
}
/*---Motivate function---*/

/*---Demoralizator function---*/
function sendUpdateRequestSpectatorFake(UserID,CitizenshipID) {
	var dataString = 'id=' + $("#battleRoundId").val() + "&at="+UserID+"&ci="+CitizenshipID+"&premium=1";
	
	$.ajax({  
		type: "GET",
		url: "battleScore.html",
		data: dataString,
		dataType: "json"
	});
}

function DemoralizatorFunc(){
	var SGDemoralizatorFakeUserIDCount = $.jStorage.get('SGDemoralizatorFakeUserIDCount', 10);
	var SGDemoralizatorFakeCitizenshipID = $.jStorage.get('SGDemoralizatorFakeCitizenshipID', 2);
	var SGDemoralizatorTimerSpectator = $.jStorage.get('SGDemoralizatorTimerSpectator', 10000);

	function FakeSpectators(){
		n = 0;
		while (n < SGDemoralizatorFakeUserIDCount) {
			setTimeout(sendUpdateRequestSpectatorFake, (n+1)*(SGDemoralizatorTimerSpectator/SGDemoralizatorFakeUserIDCount), (n+1), SGDemoralizatorFakeCitizenshipID);
			n++;
		}
	}
	window.setInterval(FakeSpectators, SGDemoralizatorTimerSpectator);
}
/*---Demoralizator function---*/

/*---Equipment function---*/
function EquipmentFastMode(){
	$('#equipmentTable > table.dataTable tr > td[id ^="cell"]').each(function(index, element){
		var elID = $(element).attr("id").replace(/[^\d,]/g, '');
		$(element).next().html('<a href="showEquipment.html?id='+elID+'">'+$(element).next().html()+'</a>');
	});
}
/*---Equipment function---*/

/*---Logs function---*/
function MUDonationsLog(){
	if ($("#pagination-digg")){
		function getPageMUDonations(id){
			var pageId = ($("#pagination-digg > li.next").length==1) ? parseInt($("#pagination-digg > li.next").prev("li").children("a").html()) : parseInt($("#pagination-digg > li.next-off").prev("li").html());
			if (id == undefined) { id = 1; }
			if (id <= parseInt(pageId)){
				$.ajax({url: "/militaryUnitDonations.html?page="+id,})
				.done(function( data, textStatus, jqXHR ) {
					$(jqXHR.responseText).find("#userMenu + div table.dataTable.paddedTable tr:not(:first)").insertAfter("#userMenu + script + div table.dataTable.paddedTable tr:last");
					id++;
					getPageMUDonations(id);
				});
			}
		};
		
		$('<li class="FullLog">Full Log</li>').appendTo("#pagination-digg").click(function(){
			$("#userMenu + script + div table.dataTable.paddedTable tr:not(:first)").remove();
			getPageMUDonations(1);
		});
	}
}

function TransactionLog(){
	if ($("#pagination-digg")){
		function getPageMUDonations(id){
			var LogUrl = /transactionLog\.html\?type=[\w_]+&dayFrom=\d+&dayTo=\d+/.exec(localUrl);
			var lastPage = parseInt(($("#pagination-digg > li.next").length==1) ? $("#pagination-digg > li.next").prev("li").children("a").html() : $("#pagination-digg > li.next-off").prev("li").html());
			if (id <= lastPage){
				$.ajax({url: "/"+LogUrl[0]+"&page="+id,})
				.done(function( data, textStatus, jqXHR ) {
					$(jqXHR.responseText).find("#userMenu + div table.dataTable.paddedTable tr:not(:first)").insertAfter("#userMenu + script + div table.dataTable.paddedTable tr:last");
					id++;
					getPageMUDonations(id);
				});
			}
		};
		$('<li class="FullLog">Full Log</li>').appendTo("#pagination-digg").click(function(){
			$("#userMenu + script + div table.dataTable.paddedTable tr:not(:first)").remove();
			getPageMUDonations(1);
		});
	}
}
/*---Logs function---*/

/*---Market function---*/
function changeNewPMTable() {
	$( "#myTablePM" ).find( "input[type='text']" ).addClass( "inputTextTable" );
	var submit = $( "#myTablePM" ).find( "input[type='submit']" ).addClass( "inputSubmitTable" );
	$( "#myTablePM" ).find( "input[type='text']" ).bind( "keyup", function() {
		var td = $(this).parent().parent();
		var priceUnit = parseFloat( td.prev().prev().prev().children( ".linkMonetaryMarket" ).next().text() );
		var value = parseFloat( $(this).val().trim() );
		td.prev().children( ".inputPrice" ).text( Math.round( priceUnit * value * 100 ) / 100 );  
	   
	});

	// Add buy all button
	var buyAll = $( "<input class='buyAllSubmit' type='submit' value='All' />" );
	buyAll.bind( "click", function() {
		var v = $(this).parent().parent().prev().prev().prev().prev().text();
		$(this).parent().children( "input[type='text']" ).val( v ).keyup();
		return( false );
	});
	buyAll.insertBefore( submit );
}

function changeProductMarketTable() {

	$( ".dataTable" ).find( "input[type='text']" ).addClass( "inputTextTable" );
	var submit = $( ".dataTable" ).find( "input[type='submit']" ).addClass( "inputSubmitTable" );
	$( ".dataTable" ).find( "input[type='text']" ).bind( "keyup", function() {
		var td = $(this).parent().parent();
		var priceUnit = parseFloat( td.prev().prev().children( ".linkMonetaryMarket" ).next().text() );
		var value = parseFloat( $(this).val() );
		td.prev().children( ".inputPrice" ).text( Math.round( priceUnit * value * 100 ) / 100 );  
	   
	});

	// Add buy all button
	var buyAll = $( "<input class='buyAllSubmit' type='submit' value='All' />" );
	buyAll.bind( "click", function() {
		var v = $(this).parent().parent().prev().prev().prev().text();
		$(this).parent().children( "input[type='text']" ).val( v );
		return( false );
	});
	buyAll.insertBefore( submit );

	// Hide buyAs select
	/* $( ".dataTable" ).find( "select" ).each( function() {
		var cell = $(this).parent();
		var buyAs = $( "<div class='toRemove buyAsTable'>Buy as Citizen</div>" );

		if( $.jStorage.get('SGProductMarketSelection', false) ) {
			buyAs.insertBefore( cell.children().first() );
			cell.parent().css({ "background-color" : "#ecffec" });
			cell.contents().eq(0).remove();
			cell.children( "br" ).remove();
			$(this).hide();

		} else $(this).addClass( "customSelectList" );
	}); */

	// Add help message
	var divT = $( "<div class='helpFlagMessage'>Click on country flag to open the monetary market (only price column)</div>" );
	divT.insertBefore( ".dataTable" );

	// Resize table
	$( ".dataTable" ).addClass( "dataTableMod" );

	// Redesign table
	// Headers
	$( ".dataTable > tbody > tr:first-child > td" ).addClass( "dataTableHeaders" );
	var trHead = $( ".dataTable" ).find( "tr" ).eq(0).children();
	trHead.eq(0).css({ "width" : "70px" });
	trHead.eq(3).text( "Price/unit" );
	$( "<td class='dataTableHeaders'>Price</td>" ).insertAfter( trHead.eq(3) );

	// Product list
	//resizeProductImage( $( ".dataTable" ).find( ".product" ) );

	// Name list and total price
	$( ".dataTable" ).find( "a" ).each( function() {

		// Name redesign
		var cell = $(this).parent();
		cell.children( ".currencyFlag" ).next().remove(); // Remove BR
		cell.children( ".currencyFlag" ).addClass( "dataTableNameFlag" );

		var div = $( "<div class='blockSeller'></div>" );
		var imgSeller = cell.children( "img" ).eq(1);
		imgSeller.addClass( "dataTableSeller" );
		div.append( imgSeller );

		var playerName = $( "<div class='playerName'></div>" ).append(  cell.children( ":lt(2)" ) );
		div.append( playerName );
		if( cell.children().length > 0 ) {
			playerName.css({ "margin-top" :"3px" });

			cell.children().eq(0).remove();
			var stockName = $( "<div class='stockName'></div>" ).append( cell.children().eq(0) );
			div.append( stockName );
		}
		cell.append( div );

		var nextCell = cell.next().next();
		var flag = nextCell.children( "div" );
		flag.addClass( "monetaryMarketFlag" );

		// Add link to monetary market
		var url = URLMonetaryMarket + "?buyerCurrencyId="+ IDByImageCountry[ flag.attr( "class" ).split(" ")[1] ] +"&sellerCurrencyId=0";
		var link = $( "<a class='linkMonetaryMarket' href='"+ url +"' target='_blank'></a>" );
		link.insertBefore( flag );
		link.append( flag );

		// Total price
		var priceItem = parseFloat( nextCell.children( "b" ).text() );
		var n = ( parseInt( parseInt( cell.next().text() ) * priceItem * 100 ) )/100;
		var money = nextCell.contents().last().text();
		var newCell = $( "<td class='totalPriceProductMarket'><b>"+ n +"</b> "+ money +"</td>" );
		newCell.insertAfter( nextCell );
		newCell.append( "<br/ > Total: <div style='display:inline;width:10px' class='inputPrice'>0</div>" + money );
	});
}

function displayGoldValue(){
	var currencyHash = {};
	var taxesHash = {};
	$(".dataTable tr:not(:first)").each(function(){
		var currencyVal = 0;
		var taxesArr = [];
		var getUrl = "";
		var currencyId = IDByImageCountry[ $(this).find("td:eq(3) div.flags-small").attr('class').split(" ")[1] ];
		if (currencyHash[currencyId] != undefined){
			console.log("!= undefined");
			currencyVal = currencyHash[currencyId];
		} else {
			console.log("== undefined");
			currencyHash[currencyId] = getCurrencyPriceGold(currencyId);
			currencyVal = currencyHash[currencyId];
		}
		if (taxesHash[currencyId] != undefined){
			console.log("!= undefined");
			taxesArr = taxesHash[currencyId];
		} else {
			console.log("== undefined");
			taxesHash[currencyId] = getTaxByCurrency(currencyId);
			taxesArr = taxesHash[currencyId];
		}
		
		var totalProduct = parseFloat($(this).find("td:eq(2)").text().trim());
		s = $(this).find("td:eq(3)").text().trim();
		if (s.indexOf("GOLD") < 0) {
			var price = parseFloat(s.substr(0,s.indexOf(" ")).trim());
			var priceInGold = Math.round((price * currencyVal)*100000)/100000;
			var totalPrice = Math.round(totalProduct * price * 1000)/1000;
			var totalPriceInGold = Math.round((totalProduct * price * currencyVal)*100000)/100000;
			console.log("price:"+price+"; priceInGold:"+priceInGold+"; totalPrice"+totalPrice+"; totalPriceInGold:"+totalPriceInGold);
			
			$(this).find("td:eq(3)").html($(this).find("td:eq(3)").html() + " <br> <div class=\"flags-small Gold\"></div><b>" + priceInGold + "</b> GOLD");
			$(this).find("td:eq(4)").html(" <b>" + totalPriceInGold + "</b> Gold <br/>" + $(this).find("td:eq(4)").html());
			
			for (var h=0;h<taxesArr.length;h++) {
				//alert(taxesArr[h].value)
			   if ($(this).find("td:eq(0)").html().toLowerCase().indexOf(taxesArr[h].name) >= 0) {
					//console.log("tx:" + (parseFloat(taxesArr[h].value) / 100));
					var tax = (sellerCountryID != currencyId) ? taxesArr[h].import+taxesArr[h].vat : taxesArr[h].vat;
					$(this).find("td:eq(3)").html($(this).find("td:eq(3)").html() + "<br> <hr class='foundation-divider'>  Price without tax: <b title=\"VAT: "+taxesArr[h].vat+"; Import Tax: "+taxesArr[h].import+"\">" + (Math.round(((parseFloat(price) * (1 - parseFloat(tax) / 100)  )) *100000)/100000) + "</b>");
					$(this).find("td:eq(3)").html($(this).find("td:eq(3)").html() + " <br> Price(G) without tax: <b>" + (Math.round(((priceInGold * (1 - parseFloat(tax) / 100) )) *100000)/100000) + "</b>");
					
					break;
				}
			}
		}
		
	});
	console.log(currencyHash);
	console.log(taxesHash);
}

function calcValueInGold(id, callback) {

	_MM_C_URL = _MM_C_URL.replace("{1}", id);
	
	$.get(_MM_C_URL, function(data) {
		try {
			//get first row of the dataTable
			var $content = $(data);
			var $table = $(".dataTable", $content);
			if ($table.length > 0) {
				$table = $($table[0]);
			}

			//get the currency
			var c = $table[0].rows[1].cells[2].textContent.trim();
			c = c.substr(c.indexOf("=") + 1, c.indexOf("Gold") - c.indexOf("=") - 1);

			_currencyValue = parseFloat(c);

			//$("#monetaryOfferPost #exchangeRatio").get(0).value = _currencyValue;

			if (callback) {
				callback();
			}
			
		} catch (e) {
			console.log(e);
			_currencyValue = 0;
		}
	});
}

function createTablePM(){
	var arrTest = [];
	var lastPageRaw = /^(.*?)(\d+)$/gim.exec($("#pagination-digg >.next").prev("li").find("a").attr("href"));
	var lastPageUrl = "";
	var lastPageId = 1;
	if (!lastPageRaw){
		lastPageUrl = /(.*?\.html.*?)$/gim.exec(localUrl)[1];
	} else {
		lastPageUrl = lastPageRaw[1];
		lastPageId = lastPageRaw[2];
	}
	var pagerHTML = '<div id="pager" class="pager"><form><img src="'+IMGFIRSTBTN+'" class="first"/><img src="'+IMGPREVBTN+'" class="prev"/><input type="text" class="pagedisplay"/><img src="'+IMGNEXTBTN+'" class="next"/><img src="'+IMGLASTBTN+'" class="last"/><select class="pagesize"><option selected="selected"  value="10">10</option><option value="20">20</option><option value="30">30</option><option  value="40">40</option></select></form></div>';
	$(".dataTable tr:first td").each(function(){arrTest[arrTest.length] = $(this).text()});
	$(".dataTable").parent().after('<table id="myTablePM" class="tablesorter"><thead><tr></tr></thead><tbody></tbody></table>'+pagerHTML+'<div id="urlLastPage" class="hiddenDiv">'+lastPageUrl+'</div><div id="idLastPage" class="hiddenDiv">'+lastPageId+'</div>').remove();
	arrTest.forEach(function(item, i, arr) {
		if (i == 3){
			$("<th>Price/Unit</th>").appendTo("#myTablePM > thead > tr");
			$("<th>Gold/Unit</th>").appendTo("#myTablePM > thead > tr");
			$("<th>Price</th>").appendTo("#myTablePM > thead > tr");
		} else {
			$("<th>"+item+"</th>").appendTo("#myTablePM > thead > tr");
		}
	});
}

function addPMTableRow(){
	var totalPrice = 0;
	var currencyId = IDByImageCountry[ $(this).find("td:eq(3) div.flags-small").attr('class').split(" ")[1] ];
	var rawProduct = $("<div>").append($(this).find("td:first > div.product > div:eq(0) > img:first").clone(),"<br>",$(this).find("td:first > div.product > div:eq(0) > img:not(:first)").clone());
	var	rawProductRegExp = /\/([\w\s]+)\.png/gim.exec(rawProduct.find("img:eq(0)").attr("src"));
	//console.log(rawProductRegExp)
	if (!rawProductRegExp){return false;}
	var product = rawProductRegExp[1];
	if (rawProduct.find("img").length > 1){
		product = product+" "+/\/(q\d)\.png/gim.exec(rawProduct.find("img:eq(1)").attr("src"))[1];
	}
	//console.log(product);
	var rawSeller = $(this).find("td:eq(1)");
	//console.log(rawSeller.html());
	var rawVal = $(this).find("td:eq(2)").html().trim();
	//console.log(rawVal);
	var rawPrice = $(this).find("td:eq(3)");
	totalPrice = Math.round(rawVal*parseFloat(rawPrice.children("b").text().trim()) * 100000)/100000;
	var flag = rawPrice.children( "div" );
		flag.addClass( "monetaryMarketFlag" );

	// Add link to monetary market
	var url = URLMonetaryMarket + "?buyerCurrencyId="+ IDByImageCountry[ flag.attr( "class" ).split(" ")[1] ] +"&sellerCurrencyId=0";
	var link = $( "<a class='linkMonetaryMarket' href='"+ url +"' target='_blank'></a>" );
	link.insertBefore( flag );
	link.append( flag );
	
	//console.log(rawPrice.html());
	var rawBuyForm = $(this).find("td:eq(4)");
	//console.log(rawBuyForm.html());
	$('<tr style="text-align:center;"><td><b style="display:none;">'+product+'</b>'+rawProduct.html()+'</td><td>'+rawSeller.html()+'</td><td>'+rawVal+'</td><td>'+rawPrice.html()+'</td><td></td><td><b>' + totalPrice + '</b> '+CCbyID[currencyId]+' <br/> Total: <div style="display:inline;width:10px" class="inputPrice">0</div> '+CCbyID[currencyId]+'</td><td>'+rawBuyForm.html()+'</td></tr>').appendTo("#myTablePM");
}

function getCurrencyPriceGold(currencyId){
	//console.log("currencyId: "+currencyId);
	var currencyVal = 0;
	var currencyAmount = 0;
	var getUrl = _MM_C_URL.replace("{1}", currencyId);
	$.ajax({  
		type: "GET",
		url: getUrl,
		async: false,
		success: function(data) {
			//get first row of the dataTable
			var $content = $(data);
			var $table = $(".dataTable", $content);
			if ($table.length > 0) {	$table = $($table[0]);	}
			//get the currency
			var c = $table[0].rows[1].cells[2];
			if (c){
				c = c.textContent.trim();
				c = c.substr(c.indexOf("=") + 1, c.indexOf("Gold") - c.indexOf("=") - 1);
				currencyVal = parseFloat(c);
				currencyAmount = parseFloat($(".dataTable tr:eq(1) td:eq(1) > b:first", $content).html().trim());
			} else {
				currencyVal = -1;
			}
			$content = "undefined";
			$(data).empty().remove();
		},
		error: function(jqXHR, textStatus, errorThrown){
			console.log(errorThrown);
		},
		timeout: 5000,
	});
	//console.log("currencyVal: "+currencyVal);
	return [currencyVal,currencyAmount];
}

function getTaxByCurrency(currencyId){
	var taxesArr = [];
	var getUrl = _COUNTRY_URL.replace("{1}", currencyId);
	$.ajax({  
		type: "GET",
		url: getUrl,
		async: false,
		success: function(data) {
			var dt = $(".dataTable", $(data))[1];

			for (var j=1; j<dt.rows.length;j++) {
				var row = dt.rows[j];
				taxesArr[j-1] = {"name": TaxNameByID[j],
							  "import": parseFloat(row.cells[2].innerHTML.toUpperCase().replace("&NBSP;", "").replace("&NBSP;", "").trim()),
							  "vat": parseFloat(row.cells[1].innerHTML.toUpperCase().replace("&NBSP;", "").replace("&NBSP;", "").trim())
				};
			}
			$(data).empty().remove();
		},
		error: function(jqXHR, textStatus, errorThrown){
			console.log(errorThrown);
		},
		timeout: 5000,
	});
	return taxesArr;
}

function CalcValuePM(){
	var currencyHash = {};
	var taxesHash = {};
	$("#myTablePM tr:not(:first)").each(function(){
		var currencyVal = 0;
		var taxesArr = [];
		var getUrl = "";
		var sellerCountryID = IDByImageCountry[ $(this).find("td:eq(1) div.flags-small").attr('class').split(" ")[1] ];
		var currencyId = IDByImageCountry[ $(this).find("td:eq(3) div.flags-small").attr('class').split(" ")[1] ];
		if (currencyHash[currencyId] != undefined){
			//console.log("!= undefined");
			currencyVal = currencyHash[currencyId];
		} else {
			//console.log("== undefined");
			currencyHash[currencyId] = getCurrencyPriceGold(currencyId);
			currencyVal = currencyHash[currencyId];
		}
		if (taxesHash[currencyId] != undefined){
			//console.log("!= undefined");
			taxesArr = taxesHash[currencyId];
		} else {
			//console.log("== undefined");
			taxesHash[currencyId] = getTaxByCurrency(currencyId);
			taxesArr = taxesHash[currencyId];
		}
		console.log(taxesHash);
		console.log(taxesArr);
		var totalProduct = parseFloat($(this).find("td:eq(2)").text().trim());
		s = $(this).find("td:eq(3)").text().trim();
		if (s.indexOf("GOLD") < 0 && currencyVal[0] >= 0) {
			var price = parseFloat(s.substr(0,s.indexOf(" ")).trim());
			var priceInGold = Math.round((price * currencyVal[0])*100000)/100000;
			var totalPrice = Math.round(totalProduct * price * 1000)/1000;
			var totalPriceInGold = Math.round((totalProduct * price * currencyVal[0])*100000)/100000;
			//console.log("price:"+price+"; priceInGold:"+priceInGold+"; totalPrice"+totalPrice+"; totalPriceInGold:"+totalPriceInGold);
			
			$(this).find("td:eq(4)").html("<div class=\"flags-small Gold\"></div><b>" + priceInGold + "</b> Gold<br/> <b>(Ratio: "+currencyVal[0]+" "+CCbyID[0]+", Amount: "+currencyVal[1]+" "+CCbyID[currencyId]+")</b>");
			$(this).find("td:eq(5)").html("<b>" + totalPriceInGold + "</b> Gold <br/>" + $(this).find("td:eq(5)").html());
			
			for (var h=0;h<taxesArr.length;h++) {
				//alert(taxesArr[h].value)
			   if ($(this).find("td:eq(0)").html().toLowerCase().indexOf(taxesArr[h].name) >= 0) {
					//console.log("tx:" + (parseFloat(taxesArr[h].value) / 100));
					var tax = (sellerCountryID != currencyId) ? taxesArr[h].import+taxesArr[h].vat : taxesArr[h].vat;
					$(this).find("td:eq(3)").html($(this).find("td:eq(3)").html() + "<br> <hr class='foundation-divider'>  Price without tax: <b title=\"VAT: "+taxesArr[h].vat+"; Import Tax: "+taxesArr[h].import+"\">" + (Math.round(((parseFloat(price) * (1 - parseFloat(tax) / 100)  )) *100000)/100000) + "</b>");
					$(this).find("td:eq(3)").html($(this).find("td:eq(3)").html() + " <br> Price(G) without tax: <b>" + (Math.round(((priceInGold * (1 - parseFloat(tax) / 100) )) *100000)/100000) + "</b>");
					
					break;
				}
			}
		}
	});
	//console.log(currencyHash);
	//console.log(taxesHash);
}

function NewTableProductMarket(){
	createTablePM();
	var urlPage = $("#urlLastPage").text().trim();
	var idLastPage = parseInt($("#idLastPage").text().trim());
	for (var i = 1; i <= idLastPage; i++) {
		var getUrl = (idLastPage==1) ? urlPage : urlPage + i;
		$.ajax({  
			type: "GET",
			url: getUrl,
			async: false,
			success: function(data) {
				$(data).find(".dataTable tr:not(:first)").each(addPMTableRow).empty().remove();
				$(data).empty().remove();
			},
			error: function(jqXHR, textStatus, errorThrown){
				console.log(errorThrown);
			},
			timeout: 5000,
		});
	}
	changeNewPMTable();
	CalcValuePM();
	$("#myTablePM").tablesorter( {sortList: [[4,0]], widthFixed: true, widgets: ['zebra']}).tablesorterPager({container: $("#pager")});
}
/*---Market function---*/

/*---Market offers function---*/
// Reorder select items
function orderSelect( select ) {

	var listOptions = [];
	select.find( "option" ).each( function() {
		listOptions.push( $(this) );
		$(this).remove();
	});

	// Order is... Weapons, Food, Gifts, Tickets, Raw and rest
	var newOptionList = new Array(46);
	newOptionList[0] = listOptions[0];
	var rawIndex = 0;
	var otherIndex = 0;
	for( var i=1; i<listOptions.length; i++ ) {
		var item = listOptions[i].attr( "value" ).split( "-" );
		if( item.length == 2 ) {
			var q = parseInt( item[0] ) - 1;
			if( item[1] == "WEAPON" ) { // Index 0 + quality
				newOptionList[ 1 + q ] = listOptions[i];

			} else if( item[1] == "FOOD" ) { // Index 5 + quality
				newOptionList[ 6 + q ] = listOptions[i];

			} else if( item[1] == "GIFT" ) { // Index 10 + quality
				newOptionList[ 11 + q ] = listOptions[i];

			} else if( item[1] == "TICKET" ) { // Index 15 + quality
				newOptionList[ 16 + q ] = listOptions[i];

			} else {
				newOptionList[ 27 + otherIndex ] = listOptions[i];
				otherIndex++;
			}
		} else {
			newOptionList[ 21 + rawIndex ] = listOptions[i];
			rawIndex++;
		}
	}

	// Add ordered items
	for( var i=0; i<newOptionList.length; i++ ) {
		if( newOptionList[i] ) { select.append( newOptionList[i] ); }
	}

	select.find( "option" )[ 0 ].selected = true;
}

// Change select from params
function changeSelect( select, placeToAdd, dest, color ) {

	// Add my items
	var selectDonate;
	var index = 1;
	select.find( "option" ).each( function() {
		if( $(this).attr( "value" ) == "" ) { return; }
		
		var str = $(this).text();
		//alert(str)
		var number = str.indexOf( "(", 0 );
		if( number != -1 ) { 
			str = str.substr( number + 1, str.indexOf( ")", number ) - number - 1 );
			mypatttofindnum=/\d{1,45}/g;
			//alert(str)
			str = mypatttofindnum.exec(str);
			
		}		

		var product = $( "<div class='storage productMU'>" );
		product.append( "<div>"+ str +"</div>" );
		var image = $( "<div></div>" );
		product.append( image );

		var storageMU = $( "<div class='storageButton' selectIndex='"+ index +"'></div>" );
		//storageMU.css({ "box-shadow" : "0px 1px 5px 1px " + color });
		storageMU.append( product );

		// Raw resource
		var split = $(this).attr( "value" ).split( "-" );
		if( split.length == 1 ) {

			if( split[0] == "IRON" ) {
				image.append( "<img src='"+ IMGIRON +"' />" );

			} else if( split[0] == "OIL" ) {
				image.append( "<img src='"+ IMGOIL +"' />" );

			} else if( split[0] == "GRAIN" ) {
				image.append( "<img src='"+ IMGGRAIN +"' />" );

			} else if( split[0] == "DIAMONDS" ) {
				image.append( "<img src='"+ IMGDIAMONDS +"' />" );

			} else if( split[0] == "WOOD" ) {
				image.append( "<img src='"+ IMGWOOD +"' />" );

			} else if( split[0] == "STONE" ) {
				image.append( "<img src='"+ IMGSTONE +"' />" );
			}

			product.css({ "height" : "67px" });
			storageMU.css({ "margin" : "10px 4px 8px 10px" });

		} else if( split.length = 2 ) {

			if( split[1] == "WEAPON" ) {
				image.append( "<img src='"+ IMGWEAPON +"' />" );
				
			} else if( split[1] == "FOOD" ) {
				image.append( "<img src='"+ IMGFOOD +"' />" );
 
			} else if( split[1] == "TICKET" ) {
				image.append( "<img src='"+ IMGTICKET +"' />" );

			} else if( split[1] == "GIFT" ) {
				image.append( "<img src='"+ IMGGIFT +"' />" );
				
			} else if( split[1] == "HOUSE" ) {
				image.append( "<img src='"+ IMGHOUSE +"' />" );

			} else if( split[1] == "DEFENSE_SYSTEM" ) {
				image.append( "<img src='"+ IMGDS +"' />" );

			} else if( split[1] == "HOSPITAL" ) {
				image.append( "<img src='"+ IMGHOSPITAL +"' />" );

			} else if( split[1] == "ESTATE" ) {
				image.append( "<img src='"+ IMGESTATE +"' />" );
			}

			image.append( "<img class='qualityMU' src='"+ IMGQUALITY + split[0] + IMGEXTENSION +"' />" );
			product.css({ "height" : "77px" });
			storageMU.css({ "margin" : "6px 4px 2px 10px" });
		}

		// Events
		storageMU.bind( "mouseover", function() {
			if( selectDonate != $(this).attr( "selectIndex" ) ) { $(this).addClass( "storageButtonHover" ); }
		});
		storageMU.bind( "mouseout", function() {
			if( selectDonate != $(this).attr( "selectIndex" ) ) { $(this).removeClass( "storageButtonHover" ); }
		});

		// Click
		storageMU.bind( "click", function() {

			// Deselect current selection
			if( selectDonate == $(this).attr( "selectIndex" ) ) {

				$(this).removeClass( "storageButtonClick" );
				$(this).removeClass( "storageButtonDblClick" );
				select.find( "option" ).removeAttr( "selected" );
				selectDonate = null;
				dest.val( "1" );

			} else {

				// Deselect last item
				if( selectDonate ) {
					var selectedItem = placeToAdd.find( ".storageButton[selectIndex='" + selectDonate + "']" );
					selectedItem.removeClass( "storageButtonClick" );
					selectedItem.removeClass( "storageButtonDblClick" );
					dest.val( "1" );
				}

				$(this).removeClass( "storageButtonHover" );
				$(this).removeClass( "storageButtonDblClick" );
				$(this).addClass( "storageButtonClick" );
				selectDonate = $(this).attr( "selectIndex" );

				select.find( "option" ).removeAttr( "selected" );
				select.find( "option" )[ selectDonate ].selected = true;
			}
		});

		// Doubleclick
		storageMU.bind( "dblclick", function() {

			$(this).removeClass( "storageButtonHover" );
			$(this).removeClass( "storageButtonClick" );
			$(this).addClass( "storageButtonDblClick" );
			selectDonate = $(this).attr( "selectIndex" );

			select.find( "option" ).removeAttr( "selected" );
			select.find( "option" )[ selectDonate ].selected = true;

			dest.val( $(this).text().trim() );
			return( false );
		});

		placeToAdd.append( storageMU );
		index++;
	});
}

// Change market oferrs
function changeMarketOffers() {

	var select = $( "#resourceInput" );
	var pos = $( ".storage" ).parent();
	var dest = $( "#quantity" );

	var leftDiv = $( "#productMarketOfferForm" ).parent();
	leftDiv.children().first().remove();
	leftDiv.children().first().remove();
	leftDiv.addClass( "leftDivMyOffers" );

	// Remove all childrens and add help text
	pos.children().remove();
	pos.addClass( "myOffersProduct" );
	pos.append( "One click to select <b>ONE item</b>.<br/>Double click to select <b>ALL items</b>.<br/>" );

	var divBlue = $( "#countryInput" ).parent().parent();
	divBlue.find( "b" ).eq(0).css({ "display" : "inline" });
	divBlue.find( "b" ).eq(1).css({ "display" : "inline" });

	$( "#countryInput" ).addClass( "customSelectList" );
	select.addClass( "customSelectList" );

	firstFastButton = true;
	dest.addClass( "quantityMyOffers" );
	$( "#priceInput" ).addClass( "priceInputMyOffers" );

	var btn10 = $( "<input class='fastBtn FastButtonLeft' type='button' value='10' />" );
	btn10.bind( "click", function() { 
		if( firstFastButton ) {
			dest.attr( "value", "10" ); 
		} else dest.attr( "value", parseInt( dest.attr( "value" ) ) + 10 ); 
		firstFastButton = false;
	});

	var btn50 = $( "<input class='fastBtn FastButtonLeft' type='button' value='50' />" );
	btn50.bind( "click", function() { 
		if( firstFastButton ) {
			dest.attr( "value", "50" ); 
		} else dest.attr( "value", parseInt( dest.attr( "value" ) ) + 50 ); 
		firstFastButton = false;
	});

	var btn100 = $( "<input class='fastBtn FastButtonRight' type='button' value='100' />" );
	btn100.bind( "click", function() { 
		if( firstFastButton ) {
			dest.attr( "value", "100" ); 
		} else dest.attr( "value", parseInt( dest.attr( "value" ) ) + 100 ); 
		firstFastButton = false;
	});

	var btn1000 = $( "<input class='fastBtn FastButtonRight' type='button' value='1K' />" );
	btn1000.bind( "click", function() { 
		if( firstFastButton ) {
			dest.attr( "value", "1000" ); 
		} else dest.attr( "value", parseInt( dest.attr( "value" ) ) + 1000 ); 
		firstFastButton = false;
	});

	btn10.insertBefore( dest );
	btn50.insertBefore( dest );
	btn1000.insertAfter( dest );
	btn100.insertAfter( dest );

	orderSelect( select );
	changeSelect( select, pos, dest, "#aaaaaa" );

	$( ".storage" ).bind( "click", function() { setTimeout( mySendPreviewRequest, 500 ); });
	$( "#countryInput" ).unbind( "change" );
	$( "#countryInput" ).bind( "change", function() { mySendPreviewRequest(); });
	$( "#resourceInput" ).unbind( "change" );
	$( "#resourceInput" ).bind( "change", function() { mySendPreviewRequest(); });
	$( "#priceInput" ).unbind( "change" );
	$( "#priceInput" ).bind( "change", function() { mySendPreviewRequest(); });
	$( "#priceInput" ).bind( "keydown", function() { setTimeout( mySendPreviewRequest, 1000 ); 	});
}

// Replace sendPreviewRequest to restyle
function mySendPreviewRequest() {
	if( !isFormCorrect() ) { return; }

	// If is in the player or in the Stock
	var csFlag;
	var localUrl = new String( window.location );
	if( localUrl.indexOf( URLMarketOffers, 0 ) >= 0 ) {
		csFlag = $( "a[href='pendingCitizenshipApplications.html']" ).prev();

	} else if( localUrl.indexOf( URLStockProducts, 0 ) >= 0 ) {
	  
		csFlag = $("a[href*='stockCompanyAssets.html?id=']").prev().prev().prev().prev().prev().prev();
		//alert(csFlag)
		
	}
	var citizenship = IDByImageCountry[ csFlag.attr( "class" ).split(" ")[1] ];
	
	//alert(citizenship)

	var dataString = 'country=' + $("#countryInput").val() + '&resource=' + $("#resourceInput").val();
	dataString += '&price=' +$("#priceInput").val() + '&citizenship=' + citizenship;  
	var resourceType = $("#resourceInput option:selected").text();
	$( "#preview" ).html( "<div class ='previewMyOffers'>Loading tax resource...</div >" );

	$.ajax({  
		type: "POST",
		url: "productTaxes.html",
		data: dataString,
		dataType: "html",
		success: function( data ) {
			var preview = $( "#preview" );
			preview.html( data );
			preview.children( ".dataTable" ).addClass( "previewDataTable" );

			var res = $( "<div class='resourceMyOffers'>"+ resourceType + "</div>" );
			var link = URLMarket + "?resource=";
			var splitItem = $("#resourceInput").val().split( "-" );
			if( splitItem.length == 1 ) {
				link += splitItem[0] + "&countryId=" + $("#countryInput").val();
			} else link += splitItem[1] + "&countryId=" + $("#countryInput").val() + "&quality=" + splitItem[0];
			res.append( "<br /><a class='textMyOffers' href='"+ link +"' target='_blank'>Market</a>" );

			link = URLMonetaryMarket + "?buyerCurrencyId="+ $("#countryInput").val() +"&sellerCurrencyId=0";
			res.append( "  |  <a class='MMMyOffers' href='"+ link +"' target='_blank'>MM link</a>" );

			var flag = preview.find( ".currencyFlag" ).first();
			flag.addClass( "flagMyOffer" );

			// Remove all flags
			preview.find( ".currencyFlag" ).remove();
			res.insertBefore( preview.children().first() );
			flag.insertBefore( preview.children( "b" ).first() );
			preview.children( "b" ).addClass( "titleMyOffers" );

			var thead = preview.children( ".dataTable" ).find( "tr" ).eq(0);
			preview.children( ".dataTable" ).find( "tr" ).eq(1).children().css({ "height" : "25px" });
			thead.children().css({ "height" : "22px" });
			thead.children().eq(0).text( "Gross" );
			thead.children().eq(1).text( "Net" );
			thead.children().eq(3).text( "Tax" );
		}
	});
}

//Edit Price and Quanty
function editOffers(){
	
	// Add edit quanty
	$(".dataTable tr").each(function(){
			
			var col = $(this).parent().children().index($(this));
			var row = $(this).parent().parent().children().index($(this).parent());
			
			//alert($.isNumeric($(this).children("td:eq(2)").text())
			
			if($.isNumeric($(this).children("td:eq(2)").text()))
				{$(this).children("td:eq(2)").append("<a class='editQuanty'>Edit</a>");}
				
			
				$(this).children("td:eq(3):contains(.)").append("<a class='editPrice'>Edit</a>");
	})
	
	
	$(".editQuanty").click(function(){
		
		numberpatt=/\d{1,30}/;
		Quanty=$(this).parent().text().match(numberpatt);
		
		var nextCell2 = $(this).parent().next();
		var myflag = nextCell2.children( "div" );
		var CID = IDByImageCountry[ myflag.attr( "class" ).split(" ")[1] ];
		
		qPrice=$(this).parent().next().text().match(/\d{1,30}.\d{2}/);
		
		productcell=$(this).parent().prev().prev().html();
		
		//alert(productcell)
		
		quality=productcell.match(/q\d/);
		if (quality){
			quality=quality[0].match(/\d/)+"-";
		} else {
			quality="";
		}
		termek=productcell.match(/productIcons\/\D.*.png/);
		type=termek[0].substr(13);
		type=type.substr(0,type.length-4);
		type=type.toUpperCase();
		
		//alert($(this).parent().next().next().next().next().next().html())
		deleteId = $(this).parent().next().next().next().next().next().html().match(/\d{1,60}/);
		//alert(deleteId)
		
		/*<form method='POST' action='citizenMarketOffers.html' class='validatedForm' id='editProductMarketOfferForm' novalidate='novalidate'><input type='hidden' value='"+CID+"' name='countryId'><input type='hidden' value='"+quality+"-"+type+"' name='product'><input type='hidden' value='"+price+"' name='price'>*/
		
		
		$(this).parent().html("<input id='newQuanty' type='text' value='"+Quanty+"' min='1' style='width: 30px' class='digit quantityMyOffers' name='quantity' id='quantity'><input id='editProductMarketOfferForm' type='button' value='Edit' style='cursor: pointer;'></form>");
		
		
		$('#editProductMarketOfferForm').click(function() {
			
			
			//alert("HOPP")
			
			/*$.post(getCurrentServer()+"e-sim.net/citizenMarketOffers.html", {
				id: deleteId[0],
				action: "DELETE_OFFER"
			})*/
			
			
			newQuanty= $("#newQuanty").val();
			
			$(this).parent().html("<img src='"+IMGLOAD+"' >");
			
			$.ajax({
				type: "POST",
				url: "/citizenMarketOffers.html",
				async: false,
				data: { id: deleteId[0], action: "DELETE_OFFER" }
			})
			
			/*$.post(getCurrentServer()+"e-sim.net/citizenMarketOffers.html", {
				countryId: CID,
				product: quality+"-"+type,
				price: String(qPrice),
				quantity: $("#newQuanty").val(),
				action:"POST_OFFER"
			})*/
			
			//alert("countryId: "+ CID+", product:"+ quality+"-"+type+", price:" +String(qPrice)+", quantity:"+ newQuanty)
			
			$.ajax({
				type: "POST",
				url: "/citizenMarketOffers.html",
				async: false,
				data: { countryId: CID, product: quality+type, price: String(qPrice), quantity: newQuanty, action:"POST_OFFER"}
			})
			
			
			location.reload();
		});
	})
	
	$(".editPrice").click(function(){
		
		numberpatt=/\d{1,30}/;
		Quanty=$(this).parent().prev().text().match(numberpatt);
		
		var nextCell2 = $(this).parent().next();
		var myflag = nextCell2.children( "div" );
		var CID = IDByImageCountry[ myflag.attr( "class" ).split(" ")[1] ];
		
		qPrice=$(this).parent().text().match(/\d{1,30}.\d{2}/);
		
		productcell=$(this).parent().prev().prev().prev().html();
		
		quality=productcell.match(/q\d/);
		if (quality){
			quality=quality[0].match(/\d/)+"-";
		} else {
			quality="";
		}
		termek=productcell.match(/productIcons\/\D.*.png/);
		type=termek[0].substr(13);
		type=type.substr(0,type.length-4);
		type=type.toUpperCase();
		
		//alert($(this).parent().next().next().next().next().next().html())
		deleteId = $(this).parent().next().next().next().next().html().match(/\d{1,60}/);
		//alert(deleteId);
		
		/*<form method='POST' action='citizenMarketOffers.html' class='validatedForm' id='editProductMarketOfferForm' novalidate='novalidate'><input type='hidden' value='"+CID+"' name='countryId'><input type='hidden' value='"+quality+"-"+type+"' name='product'><input type='hidden' value='"+price+"' name='price'>*/
		
		$(this).parent().html("<input id='newPrice' type='text' value='"+qPrice+"' min='1' style='width: 30px' class='digit quantityMyOffers' name='quantity' id='quantity'><input id='editProductMarketOfferForm' type='button' value='Edit' style='cursor: pointer;'></form>");

		$('#editProductMarketOfferForm').click(function() {
			
			//alert("HOPP")
			
			/*$.post(getCurrentServer()+"e-sim.net/citizenMarketOffers.html", {
				id: deleteId[0],
				action: "DELETE_OFFER"
			})*/
			
			newPrice= $("#newPrice").val();
			
			$(this).parent().html("<img src='"+IMGLOAD+"' >");
			
			$.ajax({
				type: "POST",
				url: "/citizenMarketOffers.html",
				async: false,
				data: { id: deleteId[0], action: "DELETE_OFFER" }
			})
			
			/*$.post(getCurrentServer()+"e-sim.net/citizenMarketOffers.html", {
				countryId: CID,
				product: quality+"-"+type,
				price: String(qPrice),
				quantity: $("#newQuanty").val(),
				action:"POST_OFFER"
			})*/
			$.ajax({
				type: "POST",
				url: "/citizenMarketOffers.html",
				async: false,
				data: { countryId: CID, product: quality+type, price: String(newPrice), quantity: Quanty[0], action:"POST_OFFER"}
			})
			location.reload();
		});
	})
}
/*---Market offers function---*/

/*---Monetary Market function---*/
// Change monetary market view	
function changeMonetaryMarket() {

	if( $( "#container" ).children().length == 3 ) {
		$( "#container" ).children().last().remove();
	}
	var listBlue = $( "#container" ).find( ".testDivblue" );
	var currentOffersTitle = listBlue.eq(2);
	listBlue.eq(2).hide();
	var currentOffers = listBlue.eq(3);
	var yourOffersTitle = listBlue.eq(4);
	var yourOffers = listBlue.eq(5);

	currentOffers.addClass( "currentOffersMM" );
	yourOffers.addClass( "yourOffersMM" );
	yourOffers.children().last().remove();

	// Custom Selects
	$( "#buy" ).addClass( "customSelectList" );
	$( "#sell" ).addClass( "customSelectList" );
	$( "#offeredMoneyId" ).addClass( "customSelectList" );
	$( "#buyedMoneyId" ).addClass( "customSelectList" );
	
	// Create new blocks BR
	var block1 = $( "<div class='monetaryMarketTitleBlock'></div>" );
	block1.insertBefore( currentOffersTitle );
	//block1.append( currentOffers );
	block1.append( currentOffersTitle );


	// New button in current offers
	var swapView = $( "<input class='swapView' type='button' value='Swap & View' />" );
	swapView.insertAfter( "#swap2" );
	swapView.bind( "click", function() {
		$( "#swap2" ).click();
		$( "#monetaryMarketView" ).submit();
	});
	$( "#swap2" ).addClass( "swapView" );
	$( "#swap2" ).bind( "click", function() {
		var temp = $( "#offeredMoneyId" ).val();
		$( "#offeredMoneyId" ).val( $( "#buyedMoneyId" ).val() );
		$( "#buyedMoneyId" ).val( temp );

		var currency = "Gold";
		if ( $( "#buyedMoneyId > option:selected" ).text() != "Gold" ) {
			currency = $( "#buyedMoneyId > option:selected" ).text().substr( 0, 3 );
		}
		$( "#offeredRate2" ).text( currency );

		currency = "Gold";
		if ( $( "#offeredMoneyId > option:selected" ).text() != "Gold" ) {
			currency = $( "#offeredMoneyId > option:selected" ).text().substr( 0, 3 );
		}
		$( "#offeredCurrency" ).text( currency );
		$( "#offeredRate1" ).text( currency );
	});

	// Redesign in your offers
	var block2 = $( "<div class='monetaryMarketTitleBlock'></div>" );
	block2.insertBefore( currentOffersTitle );
	block2.append( yourOffersTitle );
	block2.append( currentOffers );
	block2.append( yourOffers );

	$( "#swap1" ).addClass( "swapYourOffers" );
	$( "#swap1" ).bind( "click", function() {
		var temp = $( "#buy" ).val();
		$( "#buy" ).val( $( "#sell" ).val() );
		$( "#sell" ).val( temp );

		if( $( "#offeredMoneyId" ).val() == "0" ) {
			var cc = $( ".monetaryMarketCurrencyBlock" ).find( ".currencySelector[id='"+ $( "#buyedMoneyId" ).val() +"']" );
			var v = "0.0";
			if( cc.length != 0 ) { v = cc.children( "b" ).text(); }
			$( "#value" ).val( v );

		} else $( "#value" ).val( "0.0" );
	});

	$( "#buyedMoneyId" ).next().remove();
	$( "#value" ).addClass( "priceInputMM" );
	$( "#exchangeRatio" ).addClass( "priceInputMM" );

	var blockCurrency = $( "<div class='monetaryMarketCurrencyBlock'></div>" );
	blockCurrency.addClass( "testDivblue" );
	//blockCurrency.append( block1 );
	
	block1.append( blockCurrency );

	// Add currency block
	var plate = $( "#hiddenMoney" ).parent();
	plate.find( ".flags-small" ).each( function() {

		var id = IDByImageCountry[ $(this).attr( "class" ).split(" ")[1] ];
		var itemCC = $( "<div class='currencySelector'></div>" );
		itemCC.attr( "id", id );
		if( id == 0 ) { selectedCurrency = itemCC; }
		itemCC.append( "<div class='"+$(this).attr( "class" )+"'></div>" );
		itemCC.append( "<b>"+ $(this).next().text() +" </b>" );
		var currencyName = $( "#buy" ).children( "option[value='"+ id +"']" ).text().split( " " );
		itemCC.append( currencyName[0] );
		blockCurrency.append( itemCC );

		itemCC.bind( "click", function() {

			var idC = $(this).attr( "id" );
			if( (idC != "0") && (idC != selectedCurrency.attr( "id" )) ) {
				if( selectedCurrency ) { selectedCurrency.removeClass( "selectedCurrency" ); }

				if( $( "#buy" ).val() == "0" ) {
					$( "#sell" ).val( idC );
				} else $( "#buy" ).val( idC );

				if( $( "#offeredMoneyId" ).val() == "0" ) {
					$( "#buyedMoneyId" ).val( idC );
				} else $( "#offeredMoneyId" ).val( idC );

				$(this).addClass( "selectedCurrency" );
				selectedCurrency = $(this);

				var currency = "Gold";
				if ( $( "#buyedMoneyId > option:selected" ).text() != "Gold" ) {
					currency = $( "#buyedMoneyId > option:selected" ).text().substr( 0, 3 );
				}
				$( "#offeredRate2" ).text( currency );

				currency = "Gold";
				if ( $( "#offeredMoneyId > option:selected" ).text() != "Gold" ) {
					currency = $( "#offeredMoneyId > option:selected" ).text().substr( 0, 3 );
				}
				$( "#offeredCurrency" ).text( currency );
				$( "#offeredRate1" ).text( currency );

				if( $( "#buyedMoneyId" ).val() == "0" ) {
					$( "#value" ).val( $(this).children( "b" ).text() );

				} else $( "#value" ).val( "0.0" );
			}
		});
	});

	// Add fast buttons
	var idDest = "#value";
	var firstFastButton = true;
	var btn1 = $( "<input class='priceFastButton' type='button' value='1' />" );
	btn1.bind( "click", function() { 
		if( firstFastButton ) {
			$( idDest ).attr( "value", "1" ); 
		} else $( idDest ).attr( "value", parseInt( $( idDest ).attr( "value" ) ) + 1 ); 
		firstFastButton = false;
	});

	var btn5 = $( "<input class='priceFastButton' type='button' value='5' />" );
	btn5.bind( "click", function() { 
		if( firstFastButton ) {
			$( idDest ).attr( "value", "5" ); 
		} else $( idDest ).attr( "value", parseInt( $( idDest ).attr( "value" ) ) + 5 ); 
		firstFastButton = false;
	});

	var btn10 = $( "<input class='priceFastButton' type='button' value='10' />" );
	btn10.bind( "click", function() { 
		if( firstFastButton ) {
			$( idDest ).attr( "value", "10" ); 
		} else $( idDest ).attr( "value", parseInt( $( idDest ).attr( "value" ) ) + 10 ); 
		firstFastButton = false;
	});

	var btn50 = $( "<input class='priceFastButton' type='button' value='50' />" );
	btn50.bind( "click", function() { 
		if( firstFastButton ) {
			$( idDest ).attr( "value", "50" ); 
		} else $( idDest ).attr( "value", parseInt( $( idDest ).attr( "value" ) ) + 50 ); 
		firstFastButton = false;
	});

	var btn100 = $( "<input class='priceFastButton' type='button' value='100' />" );
	btn100.bind( "click", function() { 
		if( firstFastButton ) {
			$( idDest ).attr( "value", "100" ); 
		} else $( idDest ).attr( "value", parseInt( $( idDest ).attr( "value" ) ) + 100 ); 
		firstFastButton = false;
	});

	var btn500 = $( "<input class='priceFastButton' type='button' value='500' />" );
	btn500.bind( "click", function() { 
		if( firstFastButton ) {
			$( idDest ).attr( "value", "500" ); 
		} else $( idDest ).attr( "value", parseInt( $( idDest ).attr( "value" ) ) + 500 ); 
		firstFastButton = false;
	});

	var pos = $( "#offeredRate2" ).next();
	btn1.insertBefore( pos );
	btn5.insertBefore( pos );
	btn10.insertBefore( pos );
	btn50.insertBefore( pos );
	btn100.insertBefore( pos );
	btn500.insertBefore( pos );

	// Add confirm option
	var postButton = $( "<input class='postOfferButton' type='button' value='Post new offer' />" );
	var pos = $( "#monetaryOfferPost" ).children( "center" ).children( "input" );
	postButton.insertBefore( pos );
	pos.hide();
	postButton.click( "click", function() {
		var value = parseFloat( $( "#value" ).val() );
		var change = parseFloat( $( "#exchangeRatio" ).val() );
		var res = confirm( "Sell "+ value +" "+ $( "#offeredCurrency" ).text() +" for "+ (value*change) +" "+ $( "#offeredRate2" ).text() );
		if( res ) { $( "#monetaryOfferPost" ).submit(); }
	});
}


// Change monetary market product table
function changeMonetaryMarketTable() {

	$( ".dataTable" ).find( "input[type='text']" ).addClass( "inputTextTable" );
	var submit = $( ".dataTable" ).find( "input[type='submit']" ).addClass( "inputSubmitTable" );

	// Add buy all button
	var buyAll = $( "<input class='buyAllSubmit' type='submit' value='All' />" );
	buyAll.bind( "click", function() {
		var v = $(this).parent().parent().prev().prev().text().match(/\d{1,10}.\d{1,5}/);
		//alert(v)
		$(this).parent().children( "input[type='text']" ).val( v );
		return( false );
	});
	buyAll.insertBefore( submit );

	// Resize table
	$( ".dataTable" ).addClass( "dataTableMod" );

	// Redesign table
	// Headers
	$( ".dataTable > tbody > tr:first-child > td" ).addClass( "dataTableHeaders" );
}

//Edit MM price
function monetaryMarketPriceEdit(){

	// Add edit quanty
	$(".dataTable:eq(1) tr:not(:first)").each(function(){
			
			//var col = $(this).parent().children().index($(this));
			//var row = $(this).parent().parent().children().index($(this).parent());
			
			//alert($.isNumeric($(this).children("td:eq(0)").text()))
			
			
			$(this).children("td:eq(0)").append(" <a class='editQuanty'>Edit</a>");
			$(this).children("td:eq(1)").append(" <a class='editPrice'>Edit</a>");
	})
	
	
	$(".editQuanty").click(function(){
		
		SellValue = /(\d{1,30}.\d\d) ([a-zA-Z]{3,4})/gim.exec($(this).parent().text());
		Quanty= SellValue[1];
		SellCC= SellValue[2];
		
		BuyValue = /= (\d{1,10}.{0,1}\d{0,4}) ([a-zA-Z]{3,4})/gim.exec($(this).parent().next().text());
		ratio= BuyValue[1];
		BuyCC= BuyValue[2];
		
		href= $(this).parent().next().next().find('a').attr('href');
		
		//alert(IDbyCC[SellCC])
		
		$(this).parent().html("<input id='newQuanty' type='text' value='"+Quanty+"' min='1' style='width: 30px' class='digit quantityMyOffers' name='quantity' id='quantity'><input id='editProductMarketOfferForm' type='button' value='Edit' style='cursor: pointer;'></form>") 
		
		
		$('#editProductMarketOfferForm').click(function() {
			
			
			
			
			newQuanty= $("#newQuanty").val();
			
			$(this).parent().html("<img src='"+IMGLOAD+"' >");
			
			//Törlés
			$.ajax({
				type: "GET",
				url: "/monetaryMarket.html"+href,
				async: false,
				
			})
			
			// Kitétel
			$.ajax({
				type: "POST",
				url: "/monetaryMarket.html?action=post",
				async: false,
				data: { offeredMoneyId:IDbyCC[SellCC] , buyedMoneyId:IDbyCC[BuyCC] , value: newQuanty , exchangeRatio: String(ratio)}
			})
			
			
			location.reload();
		});
		
		
		
			
	
	})
	
	$(".editPrice").click(function(){
		
		SellValue = /(\d{1,30}.\d\d) ([a-zA-Z]{3,4})/gim.exec($(this).parent().prev().text());
		Quanty= SellValue[1];
		SellCC= SellValue[2];
		
		BuyValue = /= (\d{1,10}.{0,1}\d{0,4}) ([a-zA-Z]{3,4})/gim.exec($(this).parent().text());
		ratio= BuyValue[1];
		BuyCC= BuyValue[2];
		
		
		href= $(this).parent().next().find('a').attr('href');
		
		//alert(href)
		
		$(this).parent().html("<input id='newratio' type='text' value='"+ratio+"' min='1' style='width: 30px' class='digit quantityMyOffers' name='quantity' id='quantity'><input id='editProductMarketOfferForm' type='button' value='Edit' style='cursor: pointer;'></form>") 
		
		
		$('#editProductMarketOfferForm').click(function() {
			
			
			
			
			newRatio= $("#newratio").val();
			
			$(this).parent().html("<img src='"+IMGLOAD+"' >");
			
			
			//Törlés
			$.ajax({
				type: "GET",
				url: "/monetaryMarket.html"+href,
				async: false,
				
			})
			
			// Kitétel
			$.ajax({
				type: "POST",
				url: "/monetaryMarket.html?action=post",
				async: false,
				data: { offeredMoneyId:IDbyCC[SellCC] , buyedMoneyId:IDbyCC[BuyCC] , value: String(Quanty) , exchangeRatio: String(newRatio)}
			})
			
			
			
			location.reload();
		});
		
		
		
			
	
	})


}

//monetaryMarketPrice&Ratio()
function monetaryMarketPriceRatio(){
	var CurrencyId1 = 0;
	var CurrencyId2 = 0;
	
	$(".dataTable:eq(0) tr:not(:first)").each(function(){
		amount = $(this).children("td:eq(1)").children("b").attr("title");
		ratio=$(this).children("td:eq(2)").children("b").html();
		
		//console.log("Amount: "+amount+" Ratio: "+ratio+" ALL: "+amount*ratio);
		var tmpCC = /\d+ (\w{2,4}) = <b>[\d\.]+<\/b> (\w{2,4})/.exec($(this).children("td:eq(2)").html());
		var SellCC=tmpCC[2];
		var BuyCC=tmpCC[1];
		tmpCC = undefined;
		//console.log("SellCC: "+SellCC+" BuyCC: "+BuyCC);
		
		$(this).children("td:eq(1)").append("<br/> All: <b>"+Math.round((amount*ratio*100))/100+"</b> "+SellCC);
		
		CurrencyId1=IDbyCC[ BuyCC ];
		CurrencyId2=IDbyCC[ SellCC ];
	});
	
	$.ajax({
		url: "/monetaryMarket.html?buyerCurrencyId="+CurrencyId2+"&sellerCurrencyId="+CurrencyId1,
		async: false
	}).done(function( html ) {
		versus_offer=$(html).find(".dataTable:eq(0) tr:eq(1) td:eq(2)").html();
		$(".dataTable:eq(0) tr:not(:first)").each(function(){
			$(this).children("td:eq(2)").append("<br/>"+versus_offer)
		});
	});
	
	
}
/*---Monetary Market function---*/

/*---Battle Page function---*/
function BattleStatsMinimize(){
	/*---Минимизируем заголовок боя---*/
	$("#battleHeaderImage").remove();
	//$("#mainFight .fightFont").removeClass("fightFont").addClass("fightFontSG");
	/*---Минимизируем заголовок боя---*/

	/*---Минимизируем списки топ3/топ10 по урону на странице боя---*/
	$("#battleStats").show();
				
	$("#battleSelectable:first + #battleSelectable div.small-10:first > #moreBattleStats").remove();
	$('#battleSelectable:first + #battleSelectable div.small-10:first').css({ "padding-bottom" : "1px" });
	$('#battleStats').insertBefore( $('#battleSelectable:first + #battleSelectable div.small-10:first') );
	$('<div id="wrapperBattleStatsButtons" class="foundation-style small-10 columns" style="margin-bottom:.4em;"></div>').insertBefore($("#battleSelectable:first + #battleSelectable div.small-4:first"));
	$('<div id="showTop3BattleStats" style="padding-bottom:.4em;padding-top:.4em;margin:.4em .4em 0 .4em;" class="foundation-style button"> Show Top 3 </div>').appendTo($("#wrapperBattleStatsButtons"));
	$('<div id="showTop10BattleStats" style="padding-bottom:.4em;padding-top:.4em;margin:.4em .4em 0 .4em;" class="foundation-style button"> Show Top 10 </div>').appendTo($("#wrapperBattleStatsButtons"));
	$('<div id="showRecentActionsBattleStats" style="padding-bottom:.4em;padding-top:.4em;margin:.4em .4em 0 .4em;" class="foundation-style button"> Recent Actions </div>').appendTo($("#wrapperBattleStatsButtons"));
	$('<div id="showSpectatorsBattleStats" style="padding-bottom:.4em;padding-top:.4em;margin:.4em .4em 0 .4em;" class="foundation-style button"> Spectators </div>').appendTo($("#wrapperBattleStatsButtons"));

	$("#wrapperBattleStatsButtons + div.small-4, #wrapperBattleStatsButtons + div.small-4 + div.small-2, #wrapperBattleStatsButtons + div.small-4 + div.small-2 + div.small-4").addClass("Top3BattleStatsElements");
	$("#battleStats > div.small-10:first").addClass("Top10BattleStatsElements");
	$(".Top10BattleStatsElements + div.small-10").addClass("RecentActionsBattleStatsElements");
	$(".RecentActionsBattleStatsElements + div.small-10, .RecentActionsBattleStatsElements + div.small-10 + div.small-10").addClass("SpectatorsBattleStatsElements");

	$(".Top3BattleStatsElements").css('display', $.jStorage.get('SGTop3BattleStatsElements', "none"));
	$("#showTop3BattleStats").click(function () {
		$(".Top3BattleStatsElements").toggle("fast", function () {
			$.jStorage.set('SGTop3BattleStatsElements', $(".Top3BattleStatsElements").css('display'));
		});
	});
	$(".Top10BattleStatsElements").css('display', $.jStorage.get('SGTop10BattleStatsElements', "none"));
	$("#showTop10BattleStats").click(function () {
		$(".Top10BattleStatsElements").toggle("fast", function () {
			$.jStorage.set('SGTop10BattleStatsElements', $(".Top10BattleStatsElements").css('display'));
		});
	});
	$(".RecentActionsBattleStatsElements").css('display', $.jStorage.get('SGRecentActionsBattleStatsElements', "none"));
	$("#showRecentActionsBattleStats").click(function () {
		$(".RecentActionsBattleStatsElements").toggle("fast", function () {
			$.jStorage.set('SGRecentActionsBattleStatsElements', $(".RecentActionsBattleStatsElements").css('display'));
		});
	});
	$(".SpectatorsBattleStatsElements").css('display', $.jStorage.get('SGSpectatorsBattleStatsElements', "none"));
	$("#showSpectatorsBattleStats").click(function () {
		$(".SpectatorsBattleStatsElements").toggle("fast", function () {
			$.jStorage.set('SGSpectatorsBattleStatsElements', $(".SpectatorsBattleStatsElements").css('display'));
		});
	});
	/*---Минимизируем списки топ3/топ10 по урону на странице боя---*/
	
	/*---Фикс последних ударов---*/
	if ($("#recentDefenders > span").length < 5){
		count = $("#recentDefenders > span").length;
		while(count < 5){
			$("#recentDefenders").append("<span></span>");
			count++;
		}
	}
	if ($("#recentAttackers > span").length < 5){
		count = $("#recentAttackers > span").length;
		while(count < 5){
			$("#recentAttackers").append("<span></span>");
			count++;
		}
	}
	/*---Фикс последних ударов---*/
}

function ModalWindowFunc(mode){
	switch (mode) {
		case 1:
			console.log("modal mode:"+mode);
			window.picoModal=function() {
				lastModalWindow.remove();
				lastModalWindow = $('#fightResponse > div').clone();
				$.blockUI({ 
					message: lastModalWindow, 
					fadeIn: 400, 
					fadeOut: 400, 
					timeout: 2000,
					showOverlay: false, 
					centerY: false, 
					css: { 
						width: '300px', 
						top: '50px', 
						left: '50%', 
						right: '',
						margin: '0px 0px 0px -55px',
						border: 'none', 
						padding: '5px', 
						backgroundColor: '#000', 
						'-webkit-border-radius': '10px', 
						'-moz-border-radius': '10px', 
						opacity: .9, 
						color: '#fff',
						cursor: 'default',
						'font-size': '16px',
					}
				});
				return true;
			}
			break
		case 2:
			console.log("block mode:"+mode);
			/*---Отключаем модальные окна на странице боя---*/
			window.picoModal=function() {
				return true;
			}
			/*---Отключаем модальные окна на странице боя---*/
			
			/*---Формируем блок сообщений боя---*/
			$('#fightStatus').attr("style","").show().removeClass("testDivblue").addClass("fightContainer");
			$('#fightResponse').hide().addClass("foundation-style small-10 columns");
			
			$('<div id="wrapperStatusActionButtons" class="foundation-style small-10 columns" style="margin-bottom:.4em;"></div>').insertBefore($("#fightResponse"));
			$('<div id="SGShowStatusAction" style="padding-bottom:.4em;padding-top:.4em;margin:.4em .4em 0 .4em;" class="foundation-style button"> Show Status Action </div>').appendTo($("#wrapperStatusActionButtons"));
			$("#fightResponse").css('display', $.jStorage.get('SGShowStatusActionButton', "none"));
			$("#SGShowStatusAction").click(function () {
				$("#fightResponse").toggle("fast", function () {
					$.jStorage.set('SGShowStatusActionButton', $("#fightResponse").css('display'));
				});
			});
			/*---Формируем блок сообщений боя---*/
			break
		default:
			console.log("error mode:"+mode);
	}

	// if ( mode == 1 ){
		
	// } else if ( mode == 2 ){
		
	// }
}
/*---Battle Page function---*/


/*---Military Unit function---*/
function SendMSG(msgName, msgTitle, msgBody, timer) {
	setTimeout( function() {
		$.ajax({
			type: "POST",
			url: "/composeMessage.html",
			data: { receiverName:msgName , title:msgTitle , body: msgBody , action:"REPLY"},
			success: function (){
				$("#LeftMSG").text(parseInt($("#LeftMSG").text())+1);							
				if (parseInt($("#LeftMSG").text()) == parseInt($("#AllMSG").text())){ $.unblockUI(); }
			}
		});
	}, timer );
}

function MUBrodcastMsg(){

	$("div.blueLabel.unitStatusOptions:last").after('<div class="blueLabel unitStatusOptions"><a href="#" id="SG_BRC_MSG" style="font-weight: bold">SG Broadcast MSG</a></div>')
	
	$("#SG_BRC_MSG").click(function() {
		$.blockUI({ 
			message: $('<center><b style="font-size:17px">SG Broadcast MSG</b></center><center><div id="SG_MSG" class="foundation-style blueLabel " style="margin-bottom:15px; width:530px;"><b style="display:block">Title:</b><input type="text" style="width: 400px;" path="title" maxlength="100" minlength="1" id="titleInput" value="Broadcast from military unit"><br><script language="JavaScript">function append(textBefore, textAfter)  {var yourTextarea = document.getElementById(\'messageForm\');var selectionStart = yourTextarea.selectionStart;var selectionText = yourTextarea.value.substr(yourTextarea.selectionStart, yourTextarea.selectionEnd-yourTextarea.selectionStart);var prefix = yourTextarea.value.substr(0, yourTextarea.selectionStart);var postfix = yourTextarea.value.substr(yourTextarea.selectionEnd);yourTextarea.value = prefix+""+textBefore+"" + selectionText + ""+textAfter+""+postfix;yourTextarea.selectionStart = selectionStart;yourTextarea.focus();};</script><b>Message:</b><br><textarea style="width:95%; height: 250px;" name="body" maxlength="10000" id="messageForm"></textarea><p style="display:inline"> Characters remaining:     </p><p class="charsRemaining" style="display:inline;">10000</p><p></p><p style="clear: both"></p><div style="display: inline" class="bbcodebuttons"><input type="button" onclick="javascript: append(\'[b]\',\'[/b]\')" value="B" id="boldButton" name="boldButton" style="cursor: pointer;"><input type="button" onclick="javascript: append(\'[i]\',\'[/i]\')" value="I" id="italicButton" name="italicButton" style="cursor: pointer;"><input type="button" onclick="javascript: append(\'[u]\',\'[/u]\')" value="U" id="underlineButton" name="underlineButton" style="cursor: pointer;"><input type="button" onclick="javascript: append(\'[quote]\',\'[/quote]\')" value="Quote" id="quoteButton" name="quoteButton" style="cursor: pointer;"><input type="button" onclick="javascript: append(\'[url=LINK]\',\'[/url]\')" value="Url" id="urlButton" name="urlButton" style="cursor: pointer;"><input type="button" onclick="javascript: append(\'[citizen]citizen name[/citizen]\',\'\')" value="Citizen" id="citizenButton" name="citizenButton" style="cursor: pointer;"><input type="button" onclick="javascript: append(\'[currency]PLN[/currency]\',\'\')" value="Currency" id="currencyButton" name="currencyButton" style="cursor: pointer;"><input type="button" onclick="javascript: append(\'[center]\',\'[/center]\')" value="Center" id="boldButton" name="centerButton" style="cursor: pointer;"><br /><br /><a href="javascript: append(\':)\',\'\')"><img border="0" src="'+IMGSMILE+'"> </a><a href="javascript: append(\':D\',\'\')"><img border="0" src="'+IMGBIGSMILE+'"> </a><a href="javascript: append(\':\\\',\'\')"><img border="0" src="'+IMGCIACH+'"> </a><a href="javascript: append(\':P \',\'\')"><img border="0" src="'+IMGTONQUE+'"> </a><a href="javascript: append(\':( \',\'\')"><img border="0" src="'+IMGUNHAPPY+'"> </a><a href="javascript: append(\';) \',\'\')"><img border="0" src="'+IMGEYE+'"> </a></div><p style="cleat: both"></p><input type="hidden" value="REPLY" name="action"><input type="button" id="SENDMSG" value="Send" style="cursor: pointer;"> &nbsp; <input type="button" value="Close" id="ClosewButton" style="cursor: pointer;"><p style="clear: both"></p> </div></center>'),
			css: { 
				top:  "48px", 
				left: ($(window).width() - 600) /2 + 'px', 
				width: '600px' ,
				border: "0px",
				position: "absolute",
				textAlign: "left"
			} 
		}); 
		
		$("#ClosewButton").click(function() {
				$.unblockUI();
		});
		
		$("#SENDMSG").click(function() {
			// Collect Members Names
			IdArray=new Array();
			
			$("div.testDivblue > center + br + div > div > a.profileLink").each(function(){
				if ($(this).css("color") == "rgb(55, 135, 234)") {
					IdArray[IdArray.length]=$(this).text().replace(/★ /g, '');
				}
			})
			
			console.log();
			
			// Save MSG and Title
			msgTitle=$("#titleInput").val();
			msgBody=$("#messageForm").val();
			
			// Change to WAit UI
			$("#SG_MSG").html('<center><p style="text-align: center;"><h1>Dont Close...</h1><img alt="" src="'+IMGLOADBAR+'" style="margin-left:-13px; width: 562px; height: 126px;" /></p><p style="text-align: center;"><span style="font-size:36px;"><span id="LeftMSG">0</span>/<span id="AllMSG">'+IdArray.length+'</span></span></p></center>')
				
			//SEND MSGs
			IdArray.forEach(function(item, i, arr) {
				console.log("receiverName:"+item+"; title:"+msgTitle+"; body:"+msgBody);
				var timer = 11000*i;
				SendMSG(item, msgTitle, msgBody, timer);
			});
		});
	});
}
/*---Military Unit function---*/

/*---Military Unit Storage---*/
function TextStorage(){
	$('<div id="TextStorage" style="width:350px;float: left; text-align: left" class="testDivwhite"><ul></ul></div>').insertAfter($(".testDivwhite > div.storage:first").parent());
	$(".testDivwhite > div.storage").each(function(){
		var val = $.trim($(this).children("div:first").text());
		var type = /\/(\w+)\.png/gim.exec($(this).children("div:eq(1)").children("img:first").attr("src"))[1];
		var quality = "";
		if ($(this).children("div:eq(1)").children("img").length > 1){
			quality = " "+/\/(q\d)\.png/gim.exec($(this).children("div:eq(1)").children("img:eq(1)").attr("src"))[1];
		}
		$("<li>"+type+quality+":"+val+"</li>").appendTo("#TextStorage > ul");
	});
}
/*---Military Unit Storage---*/


/*---Company---*/
// Redesign product image
function resizeProductImage( productList ) {

	productList.each( function() {
		var cell = $(this).parent();
		var img = cell.find( "img" );
		cell.children().remove()

		var block = $( "<div style='url('"+IMGSTRIPS+"') repeat scroll 0 0 #3D6571'></div>" );
		//block.append( "<img class='blockProduct 'src='"+ IMGPRODBG +"' />" );
		block.append( img.eq(0).addClass( "productImage" ) );
		if( img.length > 1 ) { block.append( img.eq(1).addClass( "productQuality" ) ); }
		
		cell.append( block );
	});
}

// Add update salaries in the company menus
function addCompanyButtons() {

	// Get the country ID
	var countryId = IDByImageCountry[ $( "a[href^='region.html']" ).prev().attr('class').split(' ')[1] ];
	var workerList = $( ".workerListDiv" );
	var offerList = $( ".offerListDiv" );

	var updateSalaries = $( "<input class='updateSalariesButton' type='button' value='Update salaries'/>" );
	updateSalaries.insertBefore( workerList.children().first() );
	updateSalaries.bind( "click", function() {

		// Clean previous results
		workerList.find( ".redText" ).remove();
		workerList.find( ".greenText" ).remove();

		var i=0;
		var checkedSkills = [];
		workerList.find( ".tableRow" ).each( function() {

			// First get the skill number
			var tdList = $(this).find( "td" );
			var skill = parseInt( tdList.eq(1).text() );
			if( checkedSkills.indexOf( skill ) == -1 ) {
				checkedSkills.push( skill );

				setTimeout( function() {
					$.ajax({
						url: URLJobMarket + "?countryId="+ countryId +"&minimalSkill="+ skill,
						success: function( data ) {

							var trList = $( data ).find( ".dataTable" ).find( "tr" );
							// We take the first row
							var salary = trList.eq(1).find( "td" ).eq(4).children( "b" ).text();
							salary = parseFloat( salary );

							workerList.find( ".workerSkill" + skill ).each( function() {
								var classColor;
								var percent;
								var workerSalary = parseFloat( $(this).children( ".salary" ).children( "b" ).text() );
								if( workerSalary < salary ) {
									classColor = "redText";
									percent = "-" + parseInt((salary / workerSalary -1) * 10000) / 100;

								} else {
									classColor = "greenText";
									percent = "+" + parseInt((workerSalary / salary - 1) * 10000) / 100;
								}
								$(this).append( "<b class='"+ classColor +"'>"+ salary +" ("+ percent +"%)</b>" );
							});
						}
					});
				}, 500*i );
				i++;
			}
		});
	});

	var updateJobs = $( "<input class='updateJobsButton' type='button' value='Update jobs'/>" );
	updateJobs.insertBefore( workerList.children().first() );
	updateJobs.bind( "click", function() {

		var id = getUrlVars()[ "id" ];
		$.ajax({
			url: URLCompanyDetails + id,
			success: function( data ) {
				$( data ).find( "#productivityTable" ).find( "tr" ).each( function() {
					var td = $(this).children( "td" ).last();
					var player = $(this).find( "a" );
					if( player ) {
						var place = workerList.find( "a[href='"+ player.attr( "href" ) +"']" ).parent();
						if( td.children( "div" ).length == 2 ) {
							place.append( "<br/>" );
							place.append( "<b>"+ td.children().eq(1).text().replace( "(", "" ).replace( ")", "" ) +"</b>" );
							place.addClass( "greenBackgroundCompany" );

						} else place.addClass( "redBackgroundCompany" );
					}
				});
			}
		});
	});
	
	if ($("#createJobForm td:last").length == 1){
		var updateJobSalary = $( "<input class='updateJobSalary' type='button' value='Update job salary'/>" );
		updateJobSalary.appendTo( "#createJobForm td:last" );
		updateJobSalary.bind( "click", function() {
			var minimalSkill = $("input[name='minimalSkill']").val();
			$(".workerListDiv table.dataTable tr:not(:first) > .workerSkill"+minimalSkill+" > div > form").each(function(){
				var id = $(this).find("input[name='id']").val();
				var workerId = $(this).find("input[name='workerId']").val();
				var action = $(this).find("input[name='action']").val();
				var newSalary = $("input[name='price']").val();
				var dataString = "id="+id+"&workerId="+workerId+"&action="+action+"&newSalary="+newSalary;
				console.log(dataString);
				$.ajax({  
					type: "POST",
					url: "company.html",
					async: false,
					data: dataString,
				});
			})
			var msgNotify = NotifyMotivateTemp;
			msgNotify = msgNotify.replace("{1}","update_salary_completed");
			msgNotify = msgNotify.replace("{2}","Salary Notification");
			msgNotify = msgNotify.replace("{3}","Update salary completed");
			MotivateNotify(msgNotify);
		});
	}	
}


// Improve company interface
function companyImprovements() {
	if( $( "#minimalSkill option" ).length == 14 ) {
		$( "#minimalSkill" ).append( "<option value='15'>15</option>" );
		$( "#minimalSkill" ).append( "<option value='16'>16</option>" );
	}

	var listBlue = $( "#container" ).find( ".testDivblue" );
	var mainMenu = listBlue.eq(2).find( "table" ).eq(1);
	var rowRemove = mainMenu.find( "tr" ).first().children( "td" ).first();
	rowRemove.next().children().css({ "max-width" : "100%" });
	rowRemove.remove();

	// Get the country ID
	var countryId = IDByImageCountry[ $( "a[href^='region.html']" ).prev().attr('class').split(' ')[1] ];

	// Rellocate some items
	if( listBlue.length == 6 ) {

		var workerList = listBlue.eq(5);
		var offerList = listBlue.eq(4);
		var uglyBox = listBlue.eq(3);
		var createJob = uglyBox.children().first();
		uglyBox.children().first().remove();

		createJob.insertBefore( uglyBox );
		$( "<br/>" ).insertBefore( uglyBox );
		var divBlock = $( "<div style='display:inline-block; width:100%'></div>" )
		divBlock.insertBefore( uglyBox );
		divBlock.append( offerList );
		divBlock.append( workerList );
		uglyBox.css({ "margin-top" : "15px" });

		createJob.removeClass( "testDivwhite" );
		createJob.addClass( "testDivblue" ).css({ "width" : "680px" });
		createJob.children( "p" ).remove();

		var selectedSkill = null;
		$( "#minimalSkill option" ).each( function() {

			var skill = $( "<div class='skillSelector'>"+ $(this).val() +"</div>" );
			skill.insertBefore( "#minimalSkill" );

			skill.bind( "click", function() {
				if( selectedSkill ) { selectedSkill.removeClass( "skillSelectorSelected" ); }

				selectedSkill = $(this);
				selectedSkill.addClass( "skillSelectorSelected" );
				$( "#minimalSkill" ).val( selectedSkill.text() );

				var link = URLJobMarket + "?countryId="+ countryId +"&minimalSkill="+ $(this).text();
				$( ".companyLinkOffers" ).attr( "href", link );
			});
		});
		$( "#minimalSkill" ).hide();

		var firstLine = $( "#minimalSkill" ).parent();
		firstLine.attr( "colspan", "4" );
		createJob.find( "table" ).css({ "width" : "100%" });

		var tr = $( "<tr></tr>" );
		tr.append( firstLine.next().css({ "width" : "33%" }) );
		var td = $( "<td style='width:18%;'></td>" );
		var link = $( "<a class='companyLinkOffers' href='' target='_blank'>View skill offers</a>" );
		tr.append( td.append( link ) );
		tr.append( firstLine.next().css({ "width" : "17%" }) );
		tr.append( firstLine.next().css({ "width" : "26%" }) );
		firstLine.parent().parent().append( tr );

		$( ".skillSelector" ).first().click();
		$( "#price" ).addClass( "priceInputCompany" );
		$( "#price" ).bind( "focus", function() { $(this).select(); });
		$( "#quantity" ).addClass( "quantityMyOffers" );
		$( "#quantity" ).bind( "focus", function() { $(this).select(); });

	} else {
		var workerList = listBlue.eq(4);
		var offerList = listBlue.eq(3);
	}

	workerList.addClass( "workerListDiv" );
	offerList.addClass( "offerListDiv" );

	// Remove useless space
	mainMenu.children( "p" ).remove();

	// Edit image size
	mainMenu.find( ".productLabelRight" ).css({ "height" : "auto", "width" : "40px" });
	//resizeProductImage( mainMenu.find( ".product" ) );

	// Add extra links to check salaries
	workerList.find( ".tableRow" ).each( function() {
		var tdList = $(this).find( "td" );
		// First get the skill number
		var skill = parseInt( tdList.eq(1).text() );
		var viewLink = $( "<a href='"+ URLJobMarket + "?countryId="+ countryId +"&minimalSkill="+ skill +"'>View</a>" );
		tdList.eq(1).append( "<br/>" );
		tdList.eq(1).append( viewLink );
		tdList.eq(2).addClass( "workerSkill" + skill );
	});

	$( "input[name=newSalary]" ).addClass( "priceInputCompany" );
	$( "input[name=newSalary]" ).bind( "focus", function() { $(this).select(); });
	$( "input[name=salary]" ).addClass( "priceInputCompany" );
	$( "input[name=salary]" ).bind( "focus", function() { $(this).select(); });
}


// Improve company work results
function companyWorkResults() {

	// Redesign first block
	var listBlue = $( "#container" ).find( ".testDivwhite " );
	var mainMenu = listBlue.find( "table" );
	mainMenu.find( ".productLabelRight" ).css({ "height" : "auto", "width" : "40px" });
	resizeProductImage( mainMenu.find( ".product" ) );

	//var rowRemove = mainMenu.find( "tr" ).first().children( "td" ).first();
	//rowRemove.next().children().css({ "max-width" : "100%" });
	//rowRemove.remove();
	
	var headerText = $(".column-margin-vertical.column.small-8 > div.testDivblue:first > h1");
	headerText.html("<a href='company.html?id="+getUrlVars()[ "id" ]+"'>"+headerText.html()+"</a>");
    headerText.find("a").attr("style","font-family:'Open Sans',Arial; font-size: 26px!important;");
	
	// Add button to get salary
	var divConfig = $( "<div class='testDivblue' style='width:500px;'></div>" );
	var buttonUpdate = $( "<input class='companyGetSalary' type='button' value='Calculate'/>" );
	divConfig.append( buttonUpdate );
	divConfig.insertAfter( listBlue.prev() );

	var mainBlock = $( "#container" ).find( ".testDivwhite" );
	var idCompany = getUrlVars()[ "id" ];
	buttonUpdate.bind( "click", function() {

		// Remove previous col
		$( "td.playerSalary" ).remove();

		// Add new col
		var index = 0;
		mainBlock.find( "tr" ).each( function() {
			var td = $( "<td class='playerSalary'></td>" );
			if( index == 0 ) { td.append( "Salary" ); }
			$(this).append( td );
			index++;
		});

		mainBlock.css({ "width" : "785px" });
		mainBlock.find( "table" ).css({ "width" : "100%" });

		$.ajax({
			url: URLCompany + idCompany,
			success: function( data ) {
				var blue = $(data).find( ".testDivblue" );
				//alert(blue.length)
				if( blue.length == 6 ) {
					var playerList = blue.eq(5).find( ".tableRow" );
				} else var playerList = blue.eq(4).find( ".tableRow" );
				checkPlayersSalary( playerList, mainBlock );
			}
		});
	});
}


// Check player salary
function checkPlayersSalary( playerList, block ) {
	
	playerList.each( function() {
		
		var player = $(this).find( "a[href^='profile.html']" );
		var content = $(this).find( ".salary" );
		content.removeClass( "salary" );
		if( content.children().length == 3 ) { content.children().last().remove(); }

		block.find( "tr" ).each( function() {
		
			if( $(this).find( "a[href='"+ player.attr( "href" ) +"']" ).length == 1 ) {
				$(this).find( ".playerSalary" ).append( content );
				$( "<br/>" ).insertBefore( content.children( "b" ) );
				var currency = content.contents().eq(5).text();

				var salary = parseFloat( content.children( "b" ).text() );
				$(this).find( "td" ).each( function() {
					if( $(this).children().length == 2 ) {
						$(this).children().eq(1).css({ "color" : "#009900" });
						//console.log($(this));
						var numItems = $(this).children( "div" ).eq(1).text();
						numItems = numItems.replace( /[\(\)]/g, "" );
						numItems = parseFloat( numItems );

						//console.log("salary: "+salary+", numItems: "+numItems);
						if (!isNaN(numItems)){
							var finalPrice = $( "<div class='finalPrice'>"+ (parseInt( (salary / numItems)*1000 ) / 1000) +"</div>" );
							finalPrice.append( "<br/>" );
							finalPrice.append( "<span> "+ currency +"</span>" );
							$(this).append( finalPrice );
						}
					}
				});
			}
		});
	});
		
	trNumber=block.find( "tr" ).length
	
	//alert(trNumber)	
	
	if($('#sum_1').length == 0){
		$('#productivityTable > tbody:last').append('<tr><td colspan="2"><b>Sum:</b></td><td id="sum_1"></td><td id="sum_2"></td><td id="sum_3"></td><td id="sum_4"></td><td id="sum_5"></td><td id="sum_6"></td><td id="sum_7"></td><td id="sum_8"></td><td id="sum_9"></td><td id="sum_10"></td><td id="sum_11"></td></tr>');
		$('#productivityTable > tbody:last').append('<tr><td colspan="2"><b>Avarage:</b></td><td id="avg_1"></td><td id="avg_2"></td><td id="avg_3"></td><td id="avg_4"></td><td id="avg_5"></td><td id="avg_6"></td><td id="avg_7"></td><td id="avg_8"></td><td id="avg_9"></td><td id="avg_10"></td><td id="avg_11"></td></tr>');
	}else{
		$('#productivityTable > tbody tr:last td:last').remove()
		$('#productivityTable > tbody tr:eq(-2) td:last').remove()
	}
	
	for(i=3;i<13;i++){
		col=$('#productivityTable tr>td:nth-child('+i+')').text();
		col=col.replace(/\t/g, '');
		//console.log(col);
		Productivity=col.match(/\d{0,10}\.\d{0,2}[\n\r]/g);
		Product=col.match(/\(\d{0,10}\.\d{0,2}\)/g);
		
		price_one=col.match(/\d{1,5}\.\d{0,3}\s{2}\w+/g);
		
		//alert(Productivity)
		
		if(Productivity != null)
		{
			Productivity= Productivity.join().match(/\d{0,10}\.\d{0,2}/g);
			
			//alert(Productivity)
			
			Sum_productivity=0;
			
			for(var x = 0; x < Productivity.length; x++)
			{
			  Sum_productivity = Sum_productivity + Number(Productivity[x]);  //or Sum += scores[x];
			}

			average_productivity = Sum_productivity / Productivity.length;
		
		}else{
			
			Sum_productivity=0
			average_productivity=0;
		
		}
		
		
		if(Product != null)
		{
			Product= Product.join().match(/\d{0,10}\.\d{0,2}/g);
			
			Sum_product=0;
			
			for(var x = 0; x < Product.length; x++)
			{
			  Sum_product = Sum_product + Number(Product[x]);  //or Sum += scores[x];
			}

			average_product = Sum_product / Product.length;
			
			//alert(average_product)
			
		}else{
			
			Sum_product=0
			average_product=0;
		
		}
		
		
		if(price_one != null)
		{
			
			price_one= price_one.join().match(/\d{1,5}\.\d{0,3}/g);
			
			Sum_price_one=0;
			
			for(var x = 0; x < price_one.length; x++)
			{
			  Sum_price_one = Sum_price_one + Number(price_one[x]);  //or Sum += scores[x];
			}

			average_price_one = Sum_price_one / price_one.length;
			
			
		}else{
			
			Sum_price_one=0
			average_price_one=0;
		
		}
		
		$('#sum_'+(i-2)).html("<div>"+Sum_productivity.toFixed(2)+"</div><div style='color: rgb(0, 153, 0);font-weight:normal;'>"+Sum_product.toFixed(2)+"</div>")
		
		$('#avg_'+(i-2)).html("<div>"+average_productivity.toFixed(2)+"</div><div style='color: rgb(0, 153, 0);'>"+average_product.toFixed(2)+"</div><div class='finalPrice'>"+average_price_one.toFixed(4)+"</div>")
		
	}
	
	col_sal=$('#productivityTable tr>td:nth-child(13)').text();
	sal=col_sal.match(/\d{1,3}\.\d{0,2}/g)
	
	Sum_sal=0;
		
	for(var x = 0; x < sal.length; x++){
	  Sum_sal = Sum_sal + Number(sal[x]);  //or Sum += scores[x];
	}

	average_sal = Sum_sal / sal.length;
	
	$('#avg_11').html("<div style='color: rgb(0, 153, 0);'>"+average_sal.toFixed(2)+"</div>")
	$('#sum_11').html("<div style='color: rgb(0, 153, 0);'>"+Sum_sal.toFixed(2)+"</div>")
}

function companyAllWorkersPage(){
	$("<div style=\"width:520px;min-height:30px;line-height:20px;\" class=\"testDivblue\"><h1><span></span>Back to company</h1><p style=\"clear: both\"></p> </div><br>").insertBefore("#userMenu + script + div > :first");
	var headerText = $(".column-margin-vertical.column.small-8 > div.testDivblue:first > h1");
	headerText.html("<a href='company.html?id="+getUrlVars()[ "id" ]+"'>"+headerText.html()+"</a>");
    headerText.find("a").attr("style","font-family:'Open Sans',Arial; font-size: 26px!important;");
}

function addMenu() {

	// Version
	var vers = $( "<li class='version'><a href='/' target='_blank'> ADMIN</a></li>" );
	$( ".foundation-left" ).append( vers );
	$( ".foundation-left" ).append( "<li class='divider'></li>" );
}

function twoClickNotify(msgNotify){
	$.blockUI({ 
		message: msgNotify, 
		fadeIn: 700, 
		fadeOut: 700, 
		timeout: 2000, 
		showOverlay: false, 
		centerY: false, 
		css: { 
			width: '350px', 
			top: '50px', 
			left: '', 
			right: '10px', 
			border: 'none', 
			padding: '5px', 
			backgroundColor: '#000', 
			'-webkit-border-radius': '10px', 
			'-moz-border-radius': '10px', 
			opacity: .9, 
			color: '#fff' 
		} 
	}); 
}

function twoClick() {
	var SGTwoClick = $.jStorage.get('SGTwoClick', false);
	var SGTwoClickLogin = $.jStorage.get('SGTwoClickLogin', "" );
	var SGTwoClickPassword = $.jStorage.get('SGTwoClickPassword', "" );
	var twoClickTimer = 600000;
	msgNotify = NotifyTwoClickTemp;
	
	var tokenEsim = "";
	var trainedToday = false;
	var workedToday = false;
	
	if (SGTwoClick && SGTwoClickLogin != "" && SGTwoClickPassword != ""){
		$.ajax({
		  url:"mobile/login",
		  type:"POST",
		  data:'{"username":"'+SGTwoClickLogin+'","password":"'+SGTwoClickPassword+'","rememberMe":false}',
		  contentType:"application/json; charset=utf-8",
		  dataType:"json",
		  success: function(data){
			tokenEsim = data.token;
			console.log("tokenEsim: "+tokenEsim);
			console
			$.ajax({
			  url:"mobile/train",
			  type:"GET",
			  contentType:"application/json; charset=utf-8",
			  headers: { 
				"token" : tokenEsim
			  },
			  dataType:"json",
			  success: function(data){
				trainedToday = data.trainedToday;
				if (!trainedToday) {
					$.ajax({
					  url:"mobile/train",
					  type:"POST",
					  data:'{}',
					  contentType:"application/json; charset=utf-8",
					  headers: { 
						"token" : tokenEsim
					  },
					  dataType:"json",
					  success: function(data){
						trainedToday = data.trainedToday;
						if (trainedToday){
							msgNotify = msgNotify.replace("{1}","succesfully_trained");
							msgNotify = msgNotify.replace("{2}","Two Click Notification");
							msgNotify = msgNotify.replace("{3}","Succesfully trained");
							twoClickNotify(msgNotify);
						} else {
							msgNotify = msgNotify.replace("{1}","unsuccesfully_trained");
							msgNotify = msgNotify.replace("{2}","Two Click Notification");
							msgNotify = msgNotify.replace("{3}","Unsuccesfully trained");
							twoClickNotify(msgNotify);
						}
					  }
					});
				}
			  }
			});
			$.ajax({
			  url:"mobile/work",
			  type:"GET",
			  contentType:"application/json; charset=utf-8",
			  headers: { 
				"token" : tokenEsim
			  },
			  dataType:"json",
			  success: function(data){
				workedToday = data.workedToday;
				if (!workedToday) {
					$.ajax({
					  url:"mobile/work",
					  type:"POST",
					  data:'{}',
					  contentType:"application/json; charset=utf-8",
					  headers: { 
						"token" : tokenEsim
					  },
					  dataType:"json",
					  success: function(data){
						workedToday = data.workedToday;
						if (workedToday){
							msgNotify = msgNotify.replace("{1}","succesfully_worked");
							msgNotify = msgNotify.replace("{2}","Two Click Notification");
							msgNotify = msgNotify.replace("{3}","Succesfully worked");
							twoClickNotify(msgNotify);
						} else {
							msgNotify = msgNotify.replace("{1}","unsuccesfully_worked");
							msgNotify = msgNotify.replace("{2}","Two Click Notification");
							msgNotify = msgNotify.replace("{3}","Unsuccesfully worked");
							twoClickNotify(msgNotify);
						}
					  }
					});
				}
			  }
			});
			/* $.ajax({
			  url:"mobile/battle/list",
			  type:"GET",
			  contentType:"application/json; charset=utf-8",
			  headers: { 
				"token" : tokenEsim
			  },
			  dataType:"json",
			  success: function(data){
				
			  }
			}); */
		  }
		});
	}
	if (!trainedToday || !workedToday) window.setTimeout(twoClick, twoClickTimer);
}
	
$(document).ready(function () {
	if(inGameCheck()){
				
		Main();
		
		if ( $.jStorage.get('SGAutoMotivateType', 0) > 0 ){ AutoMotivate(); }
		
		if ( $.jStorage.get('SGTwoClick', false) ){ twoClick(); }
			
		if( $.jStorage.get('SGImgSrcFixMode', false)){ ImgSrcFix(); }
		
		if ( $.jStorage.get('SGScriptAndStyleSrcFixMode', false)){ ScriptAndStyleSrcFix(); }
		
		if ( localUrl.indexOf( URLMUDonations, 0 ) >= 0 ){
			if( $.jStorage.get('SGMUDonationsLogMode', false) ){ MUDonationsLog(); }
			if( $.jStorage.get('SGMUTextStorageMode', true) ) { TextStorage(); }
		} else if ( localUrl.indexOf( URLTransactionLog, 0 ) >= 0 ){
			if( $.jStorage.get('SGTransactionLogMode', false) ){ TransactionLog(); }
		}else if ( localUrl.indexOf( URLCitizen, 0 ) >= 0 ){
			if( $.jStorage.get('SGCitizenBroadcastMSG', true) ){ citizenBroadcastMSG(); }
		} else if ( localUrl.indexOf( URLEquipment, 0 ) >= 0 ){
			if( $.jStorage.get('SGEquipmentFastMode', true) ){ EquipmentFastMode(); }
		} else if( localUrl.indexOf( URLMarket, 0 ) >= 0 ) {
			//if( $.jStorage.get("SGChangeProductSelection", true) ) { changeProductSelection(); }
			if( $.jStorage.get("SGNewTableProductMarket", true) ) { NewTableProductMarket() }
			else {
				if( $.jStorage.get("SGChangeProductMarketTable", true) ) { changeProductMarketTable(); }
				if( $.jStorage.get("SGDisplayGoldValue", true) ) { displayGoldValue(); } //true
			}
		} else if( localUrl.indexOf( URLMarketOffers, 0 ) >= 0 ) {
			if( $.jStorage.get("SGChangeMarketOffers", true) ) { changeMarketOffers(); }
			if( $.jStorage.get("SGEditOffers", true) ) { editOffers(); }
		} else if( localUrl.indexOf( URLMonetaryMarket, 0 ) >= 0 ) {
			//if( $.jStorage.get("SGChangeMonetaryMarket", true) ) { changeMonetaryMarket(); }
			if( $.jStorage.get("SGChangeMonetaryMarketTable", true) ) { changeMonetaryMarketTable(); }
			if( $.jStorage.get("SGMonetaryMarketPriceEdit", true) ) { monetaryMarketPriceEdit(); }
			if( $.jStorage.get("SGMonetaryMarketPriceRatio", true) ) { monetaryMarketPriceRatio(); }
		} else if ( localUrl.indexOf( URLBattle, 0 ) >= 0 ){
			if ( $("#totalattackers").length==0 ) { CreateSpectatorsBlock(); }
			if ( $.jStorage.get('SGBattleStatsMinimizeMode', true) ){ BattleStatsMinimize(); }
			if ( $.jStorage.get('SGModalWindowFuncMode', 1) != 0 ){ ModalWindowFunc($.jStorage.get('SGModalWindowFuncMode', 1)); }
			if ( $.jStorage.get('SGSpectatorMode', true) ){ FakeSpectatorFunc(); }
			if ( $.jStorage.get('SGDemoralizatorMode', false) ){ DemoralizatorFunc(); }
		} else if ( localUrl.indexOf( URLNewCitizen, 0 ) >= 0 ){
			if( $.jStorage.get('SGMotivationMode', true) ){ EasyMotivation(); }
		} else if ( localUrl.indexOf( URLMyMU, 0 ) >= 0 ){
			if( $.jStorage.get('SGMUBroadcastMsg', true) ) { MUBrodcastMsg(); }
		} else if ( localUrl.indexOf( URLMUMain, 0 ) >= 0 ) {
			if( $.jStorage.get('SGMUBroadcastMsg', true) ) { MUBrodcastMsg(); }
		} else if ( localUrl.indexOf( URLMUStorage, 0 ) >= 0 ){
			if( $.jStorage.get('SGMUTextStorageMode', true) ) { TextStorage(); }
		} else if( localUrl.indexOf( URLCompany, 0 ) >= 0 ) {
			if( $.jStorage.get('SGCompanyRedesignMode', true) ) { companyImprovements(); }
			addCompanyButtons();
		} else if( localUrl.indexOf( URLCompanyDetails, 0 ) >= 0 ) {
			if( $.jStorage.get('SGCompanyWorkResultsMode', true) ) { companyWorkResults(); }
		} else if( localUrl.indexOf( URLCompanyAllWorkers, 0 ) >= 0 ){
			if( $.jStorage.get('SGCompanyAllWorkersMode', true) ) { companyAllWorkersPage(); }
		}
	}
});