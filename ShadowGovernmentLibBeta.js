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

$(document).ready(function () {
	if($("section.top-bar-section > ul.foundation-right").length==1){
		/*---Initialization parameters---*/
		var localUrl = new String( window.location );
		var URLBattle = "battle.html?id=";
		var URLSettings = "editCitizen.html?Settings";
		var URLShadowGovernment = "editCitizen.html?ShadowGovernment";
		var URLMotivation = "newCitizenStatistics.html";
		var URLEquipment = "equipment.html";
		var URLMUDonations = "militaryUnitDonations.html";
		var URLTransactionLog = "transactionLog.html";
		/*---Initialization parameters---*/

		// Create checkbox and label
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
		
		// Create InputText and label
		function createInputText( label, configLabel, defaultValue ) {
			var div = $( "<div></div>" );
			div.append( "<span class='configLabelInputText'>"+ label +"</span>" );
			div.append( "<input class='configInputText' type='text' value='"+$.jStorage.get(configLabel, defaultValue)+"' />" );
			div.children( "input" ).bind( "keyup change", function() {
				$(this).attr( "value" , $(this).attr( "value" ).replace(/[^\d,]/g, ''));
				if ($(this).attr( "value" ) != ""){
					$.jStorage.set(configLabel, $(this).attr( "value" ));
				}
			});
			return( div );
		}
		
		
		/*---Initialization menu---*/
		$('<a id="SGSettingsButton" class="button foundation-style" title="Shadow Government Settings" href="editCitizen.html?Settings"><i class="icon-star"></i>SG Settings</a><br>').insertBefore($(".foundation-right.hidden-overflow > div:first > a:last"));
		$('<a id="SGMainButton" class="button foundation-style" title="Shadow Government Main" href="editCitizen.html?ShadowGovernment"><i class="icon-star"></i>SG Main</a><br>').insertBefore($(".foundation-right.hidden-overflow > div:first > a:last"));
		
		$('#SGSettingsButton').click(function() { 
			$.blockUI({ 
				message: $('#WrapperMainConfig'), 
				css: {
					top:  "48px", 
					left: ($(window).width() - 600) /2 + 'px', 
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
		/*---Initialization menu---*/

		function SGChecked(flag){
			if(flag){
				return "checked";
			} else {
				return  "";
			}
		}

		/*---On Settings Page---*/
		//if (localUrl.indexOf( URLSettings, 0 ) >= 0){
			$('<div id="WrapperMainConfig" style="display:none;"><center><h1>Shadow Government Settings</h1></center><p style="clear: both"></p><br><ul id="MainConfigMenu"></ul><div id="MainConfigBody"></div></div>').appendTo($("body"));
			$('<button id="CloseWrapperMainConfig" style="position: absolute; top: 0.25em; right: 0.25em; padding: 0.3em !important; " href="#" class="foundation-style closeDropdown profileButton">×</button>').appendTo($("#WrapperMainConfig > center > h1"));
			$("#CloseWrapperMainConfig").click(function(){
				$.unblockUI();
			});
			$('<li>Spectator</li>').appendTo($("#MainConfigMenu"));
			var SettingsSpectatorDiv = $('<div></div>').appendTo($("#MainConfigBody"));
			var configSGSpectatorMode = createCheckBox( "Custom Spectator", "SGSpectatorMode", true )
			SettingsSpectatorDiv.append( configSGSpectatorMode );
			var configSGTimerSpectator = createInputText( "Timer Spectator: ", "SGTimerSpectator", 7000 )
			SettingsSpectatorDiv.append( configSGTimerSpectator );
			var configSGFakeUserID = createInputText( "Fake User ID: ", "SGFakeUserID", 1 )
			SettingsSpectatorDiv.append( configSGFakeUserID );
			var configSGFakeCitizenshipID = createInputText( "Fake Citizenship ID: ", "SGFakeCitizenshipID", 1 )
			SettingsSpectatorDiv.append( configSGFakeCitizenshipID );
			
			$('<li>Motivator</li>').appendTo($("#MainConfigMenu"));
			var SettingsMotivatorDiv = $('<div></div>').appendTo($("#MainConfigBody"));
			var configSGMotivationMode = createCheckBox( "Easy Motivator", "SGMotivationMode", true )
			SettingsMotivatorDiv.append( configSGMotivationMode );
			
			$('<li>Demoralizator</li>').appendTo($("#MainConfigMenu"));
			var SettingsDemoralizatorDiv = $('<div></div>').appendTo($("#MainConfigBody"));
			var configSGDemoralizatorMode = createCheckBox( "Demoralizator", "SGDemoralizatorMode", false )
			SettingsDemoralizatorDiv.append( configSGDemoralizatorMode );
			var configSGDemoralizatorTimerSpectator = createInputText( "Dem. Timer Spectator: ", "SGDemoralizatorTimerSpectator", 10000 )
			SettingsDemoralizatorDiv.append( configSGDemoralizatorTimerSpectator );
			var configSGDemoralizatorFakeUserCount = createInputText( "Dem. Fake User Count: ", "SGDemoralizatorFakeUserCount", 10 )
			SettingsDemoralizatorDiv.append( configSGDemoralizatorFakeUserCount );
			var configSGDemoralizatorFakeCitizenshipID = createInputText( "Dem. Fake Citizenship ID: ", "SGDemoralizatorFakeCitizenshipID", 2 )
			SettingsDemoralizatorDiv.append( configSGDemoralizatorFakeCitizenshipID );
			
			$('<li>Equipment</li>').appendTo($("#MainConfigMenu"));
			var SettingsEquipmentDiv = $('<div></div>').appendTo($("#MainConfigBody"));
			var configSGEquipmentFastMode = createCheckBox( "Equipment Fast Link", "SGEquipmentFastMode", true )
			SettingsEquipmentDiv.append( configSGEquipmentFastMode );
			
			$("#WrapperMainConfig").lightTabs();
		//}
		/*---On Settings Page---*/
		
		/*---On MU Donations Page---*/
		if (localUrl.indexOf( URLMUDonations, 0 ) >= 0){
			
			var lastPageID = $("#pagination-digg > li:last").prev().children("a").html();
			var Id = 1;
			
			function getPageMUDonations(){
				if (Id <= lastPageID){
					$.ajax({
						url: "/militaryUnitDonations.html?page="+Id,
					})
					.done(function( data, textStatus, jqXHR ) {
						$(jqXHR.responseText).find("#userMenu + div table.dataTable.paddedTable tr:not(:first)").insertAfter("#userMenu + script + div table.dataTable.paddedTable tr:last");
						Id++;
						getPageMUDonations();
					});
				}
			};
			
			
			$('<li class="FullLog">Full Log</li>').appendTo("#pagination-digg").click(function(){
				$("#userMenu + script + div table.dataTable.paddedTable tr:not(:first)").remove();
				getPageMUDonations();
			});
		}
		/*---On MU Donations Page---*/
		
		/*---On Transaction Log Page---*/
		if (localUrl.indexOf( URLTransactionLog, 0 ) >= 0){
			
			var lastPage = /([\s\S]+)(\d)$/.exec($("#pagination-digg > li:last").prev().children("a").attr("href"));
			var Id = 1;
			
			function getPageMUDonations(){
				if (Id <= lastPage[2]){
					$.ajax({
						url: "/"+lastPage[1]+Id,
					})
					.done(function( data, textStatus, jqXHR ) {
						$(jqXHR.responseText).find("#userMenu + div table.dataTable.paddedTable tr:not(:first)").insertAfter("#userMenu + script + div table.dataTable.paddedTable tr:last");
						Id++;
						getPageMUDonations();
					});
				}
			};
			
			
			$('<li class="FullLog">Full Log</li>').appendTo("#pagination-digg").click(function(){
				$("#userMenu + script + div table.dataTable.paddedTable tr:not(:first)").remove();
				getPageMUDonations();
			});
		}
		/*---On Transaction Log Page---*/
		
		/*---On Shadow Government Page---*/
		if (localUrl.indexOf( URLShadowGovernment, 0 ) >= 0){
			var wrapperSG = $("#userMenu + script + div");
			wrapperSG.attr("id","WrapperMainConfig");
			wrapperSG.empty();
			$('<center><h1>Shadow Government Blank</h1></center><p style="clear: both"></p><br>').appendTo(wrapperSG);
		}
		/*---On Shadow Government Page---*/
		
		/*---On Equipment Page---*/
		if (localUrl.indexOf( URLEquipment, 0 ) >= 0){
			if($.jStorage.get('SGEquipmentFastMode', true)){
				$('#equipmentTable > table.dataTable tr > td[id ^="cell"]').each(function(index, element){
					var elID = $(element).attr("id").replace(/[^\d,]/g, '');
					$('<a href="showEquipment.html?id='+elID+'"></a>').prependTo($(element));
					$(element).children("img").appendTo($(element).children("a"));
				});
			}
		}
		/*---On Equipment Page---*/
		
		/*---On Battle Page---*/
		if (localUrl.indexOf( URLBattle, 0 ) >= 0){

			/*---Отключаем модальные окна на странице боя---*/
			window.picoModal=function() {
				return true;
			}
			/*---Отключаем модальные окна на странице боя---*/
				
			/*---Минимизируем заголовок боя---*/
			$("#battleHeaderImage").remove();
			$("#mainFight .fightFont").removeClass("fightFont").addClass("fightFontSG");
			/*---Минимизируем заголовок боя---*/

			/*---Минимизируем списки топ3/топ10 по урону на странице боя---*/
			$("#battleStats").show();
			if($("#totalattackers").length==0 ) {
				$("#battleStats").append('<div class="foundation-style small-10 columns"><div class="foundation-style small-5 columns"><b>Total defenders online:</b><i id="totaldefenders" style="display: inline;">0</i> <a style="font-size: 11px;" href="" id="defendersLink">Show details</a> <a style="font-size: 11px; display: none;" href="" id="defendersLinkHide">Hide details</a> <br><div align="center" id="defendersMenu" style="font-size: 11px; text-align: center; padding: 1em; margin: auto; display: block;">No one <br> </div></div><div class="foundation-style small-5 columns"><b>Total attackers online:</b><i id="totalattackers" style="display: inline;">0</i> <a style="font-size: 11px;" href="" id="attackersLink">Show details</a> <a style="font-size: 11px;  display: none;" href="" id="attackersLinkHide">Hide details</a> <br><div align="center" id="attackersMenu" style="font-size: 11px; text-align: center; padding: 1em; margin: auto; display: block;">No one <br> </div></div>');
				$("#battleStats").append('<div class="foundation-style small-10 columns"><b>Total spectators online:</b><i id="totalspectators" style="display: inline;">0</i> <a style="font-size: 11px;" href="" id="spectatorsLink">Show details</a> <a style="font-size: 11px; display: none;" href="" id="spectatorsLinkHide">Hide details</a> <br><div align="center" id="spectatorsMenu" style="font-size: 11px; text-align: center; padding: 1em; margin: auto; display: block;">No one <br> </div>  </div>');
			}
			
			$('#spectatorsLink').click(function () { $('#spectatorsLink').fadeOut('fast', function () { $('#spectatorsLinkHide').fadeIn('fast'); $('#spectatorsMenu').fadeIn('fast'); }); return false; });
			$('#spectatorsLinkHide').click(function () { $('#spectatorsLinkHide').fadeOut('fast', function () { $('#spectatorsLink').fadeIn('fast'); $('#spectatorsMenu').fadeOut('fast'); }); return false; });

			$('#attackersLink').click(function () { $('#attackersLink').fadeOut('fast', function () { $('#attackersLinkHide').fadeIn('fast'); $('#attackersMenu').fadeIn('fast'); }); return false; });
			$('#attackersLinkHide').click(function () { $('#attackersLinkHide').fadeOut('fast', function () { $('#attackersLink').fadeIn('fast'); $('#attackersMenu').fadeOut('fast'); }); return false; });

			$('#defendersLink').click(function () { $('#defendersLink').fadeOut('fast', function () { $('#defendersLinkHide').fadeIn('fast'); $('#defendersMenu').fadeIn('fast'); }); return false; });
			$('#defendersLinkHide').click(function () { $('#defendersLinkHide').fadeOut('fast', function () { $('#defendersLink').fadeIn('fast'); $('#defendersMenu').fadeOut('fast'); }); return false; });
			
			$("#battleSelectable:first + #battleSelectable div.small-10:first").remove();
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
			
			/*---Спектатор---*/
			if($.jStorage.get('SGSpectatorMode', true)){
				var SGTimerSpectator = $.jStorage.get('SGTimerSpectator', 7000);

				function sendUpdateRequestSpectator() {
					if (!hasFocus)
						return;
					
					var FakeUserID = $.jStorage.get('SGFakeUserID', 1);
					var FakeCitizenshipID = $.jStorage.get('SGFakeCitizenshipID', 1);
					
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
						}
					});
				}
				var intervalID = window.setInterval(sendUpdateRequestSpectator, SGTimerSpectator);
				continueThread = false;
			}
			/*---Спектатор---*/
			
			/*---Фейк Спектатор Деморализатор---*/
			if($.jStorage.get('SGDemoralizatorMode', false)){
				var SGDemoralizatorFakeUserIDCount = $.jStorage.get('SGDemoralizatorFakeUserIDCount', 10);
				var SGDemoralizatorFakeCitizenshipID = $.jStorage.get('SGDemoralizatorFakeCitizenshipID', 2);
				var SGDemoralizatorTimerSpectator = $.jStorage.get('SGDemoralizatorTimerSpectator', 10000);

				function sendUpdateRequestSpectatorFake(UserID,CitizenshipID) {
					var dataString = 'id=' + $("#battleRoundId").val() + "&at="+UserID+"&ci="+CitizenshipID+"&premium=1";
					
					$.ajax({  
						type: "GET",
						url: "battleScore.html",
						data: dataString,
						dataType: "json"
					});
				}

				function FakeSpectators(){
					n = 0;
					while (n < SGDemoralizatorFakeUserIDCount) {
						setTimeout(sendUpdateRequestSpectatorFake, (n+1)*(SGDemoralizatorTimerSpectator/SGDemoralizatorFakeUserIDCount), (n+1), SGDemoralizatorFakeCitizenshipID);
						n++;
					}
				}

				window.setInterval(FakeSpectators, SGDemoralizatorTimerSpectator);
			}
			/*---Фейк Спектатор Деморализатор---*/
		}
		/*---On Battle Page---*/

		/*---On Motivation Page---*/
		if (localUrl.indexOf( URLMotivation, 0 ) >= 0){
			if($.jStorage.get('SGMotivationMode', true)){
				var CurrentDay = /\d+/gim.exec($("#userMenu div div.panel.callout b:eq(2)").html());
				var CurrentDay = parseInt(CurrentDay[0]);
				var tmpMotivateCountToday = {day: CurrentDay,count: 0};
				var MotivateCountToday = JSON.parse($.jStorage.get('SGMotivateCountToday', JSON.stringify(tmpMotivateCountToday)));
				if (MotivateCountToday.day != tmpMotivateCountToday.day){
					MotivateCountToday = tmpMotivateCountToday;
					$.jStorage.set('SGMotivateCountToday', JSON.stringify(MotivateCountToday));
				}

				$(".dataTable ul.button.foundation-center.foundation-style-group li a.foundation-style.button.small.help i.icon-cupcake").parent().parent().toggle();
				$("<span>Today motivate count: <b id=\"countMotivationToday\">0</b><span>").insertAfter("#newCitizenStatsForm");
				$("#countMotivationToday").html(MotivateCountToday.count);

				$( "table.dataTable tr" ).each(function( index, element ) {
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

				function motivateResponse (jqXHR, timeout, message) {
					var dataString = /type=(\d)&id=(\d+)/gim.exec($(this)[0].data);
					var idType = parseInt(dataString[1]);
					var idUser = parseInt(dataString[2]);
					var arrType = ["none","weapons","breads","gifts"]
					var messageResponse = "";
					if (messageResponse = /&citizenMessage=(\S+)/gim.exec(jqXHR.getResponseHeader("TM-finalURLdhdg"))){
						if (messageResponse[1]=="SUCCESFULLY_MOTIVATED"){
							var parentTDw = $("#motivate-"+arrType[idType]+"-"+idUser).parent();
							parentTDw.empty();
							parentTDw.append('<i title="Мотивация прошла успешно" style="color: #0c0; font-size: 1.25em; text-shadow: 0 0 0" class="icon-uniF479"></i>');
							MotivateCountToday.count = MotivateCountToday.count+1;
							$.jStorage.set('SGMotivateCountToday', JSON.stringify(MotivateCountToday));
							$("#countMotivationToday").html(MotivateCountToday.count);
						} else {
							$("#motivate-"+arrType[idType]+"-"+idUser).attr("title","Ошибка: "+messageResponse[1]);
						}
					} else if(/Вы отправили слишком много мотиваций сегодня/gim.exec(jqXHR.responseText)){
						var parentTDw = $("#motivate-"+arrType[idType]+"-"+idUser).parent();
						parentTDw.empty();
						parentTDw.append('<i title="Вы отправили слишком много мотиваций сегодня" style="color: #c00; font-size: 1.25em; text-shadow: 0 0 0" class="icon-uniF478"></i>');
						MotivateCountToday.count = 5;
						$.jStorage.set('SGMotivateCountToday', JSON.stringify(MotivateCountToday));
						$("#countMotivationToday").html(MotivateCountToday.count);
					} else if(/Вы уже отправляли комплект этому гражданину сегодня/gim.exec(jqXHR.responseText)){
						var parentTDw = $("#motivate-"+arrType[idType]+"-"+idUser).parent();
						parentTDw.empty();
						parentTDw.append('<i title="Вы уже отправляли комплект этому гражданину сегодня" style="color: #c00; font-size: 1.25em; text-shadow: 0 0 0" class="icon-uniF478"></i>');
					} else if(/Этот гражданин получил слишком много мотиваций сегодня/gim.exec(jqXHR.responseText)){
						var parentTDw = $("#motivate-"+arrType[idType]+"-"+idUser).parent();
						parentTDw.empty();
						parentTDw.append('<i title="Этот гражданин получил слишком много мотиваций сегодня" style="color: #c00; font-size: 1.25em; text-shadow: 0 0 0" class="icon-uniF478"></i>');
					} else if(/Этот гражданин получил все виды мотивационных комплектов сегодня/gim.exec(jqXHR.responseText)){
						var parentTDw = $("#motivate-"+arrType[idType]+"-"+idUser).parent();
						parentTDw.empty();
						parentTDw.append('<i title="Этот гражданин получил все виды мотивационных комплектов сегодня" style="color: #c00; font-size: 1.25em; text-shadow: 0 0 0" class="icon-uniF478"></i>');
					} else if(/У вас не достаточно предметов/gim.exec(jqXHR.responseText)){
						var parentTDw = $("#motivate-"+arrType[idType]+"-"+idUser).parent();
						parentTDw.empty();
						parentTDw.append('<i title="У вас не достаточно предметов" style="color: #c00; font-size: 1.25em; text-shadow: 0 0 0" class="icon-uniF478"></i>');
					}
				}

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
						error:  motivateResponse
					});
				});
			}
		}
		/*---On Motivation Page---*/
	}
});