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
	
	/*---Initialization parameters---*/
	var localUrl = new String( window.location );
	// API
	var URLAPIRanks =					"/apiRanks.html";
	var URLAPIRegion =					"/apiRegions.html";
	var URLAPIMap =					    "/apiMap.html";
	// URLs
	var URLMain = 						"/index.html";
	var URLArticle = 					"/article.html";
	var URLNewspaper = 					"/newspaper.html";
	var URLEditArticle = 				"/editArticle.html";
	var URLMyMU = 						"/myMilitaryUnit.html";
	var URLMUMain = 					"/militaryUnit.html?id=";
	var URLMUStorage = 					"/militaryUnitStorage.html";
	var URLMUMoney = 					"/militaryUnitMoneyAccount.html";
	var URLDMUMoney =					"/donateMoneyToMilitaryUnit.html?id=";
	var URLMUCompanies = 				"/militaryUnitCompanies.html?id=";
	var URLDDonatePlayerProduct = 		"/donateProducts.html?id=";
	var URLDonateMUProduct = 			"/donateProductsToMilitaryUnit.html?id=";
	var URLCompanies = 					"/companies.html";
	var URLCompany = 					"/company.html?id=";
	var URLCompanyDetails = 			"/companyWorkResults.html?id=";
	var URLCountryEco = 				"/countryEconomyStatistics.html";
	var URLBattle = 					"/battle.html?id=";
	var URLBattleList = 				"/battles.html";
	var URLContracts = 					"/contracts.html";
	var URLContract = 					"/contract.html?id=";
	var URLMarket = 					"/productMarket.html";
	var URLMonetaryMarket = 			"/monetaryMarket.html";
	var URLMarketOffers = 				"/citizenMarketOffers.html";
	var URLJobMarket =					"/jobMarket.html";
	var URLMyShares = 					"/myShares.html";
	var URLStockCompany = 				"/stockCompany.html?id=";
	var URLStockMM = 					"/stockCompanyMoney.html?id=";
	var URLStockProducts = 				"/stockCompanyProducts.html?id=";
	var URLStockDonateMoney = 			"/stockCompanyDonateMoney.html?id=";
	var URLStockDonateCompany = 		"/stockCompanyDonateCompany.html?id=";
	var URLStockLogs = 					"/stockCompanyLogs.html?id=";
	var URLTravel = 					"/travel.html";
	var URLEquipment =					"/equipment.html";
	var URLNewCitizen =					"/newCitizenStatistics.html";
	var URLSearch =						"/search.html";
	var _COUNTRY_URL = 					"/countryEconomyStatistics.html?countryId={1}";
	var _MM_C_URL = 					"/monetaryMarket.html?buyerCurrencyId={1}&sellerCurrencyId=0";
	var URLBUFF =						"/specialItems.html"
	var URLNB =							"/newCitizens.html?countryId=0"
	var URLNewRegisteredCitizen =		"/newCitizens.html?countryId=0"
	var URLPROFILE = 					"/profile.html"
	var URLDMUProduct=					"/donateProductsToMilitaryUnit.html?id=";
	var URLDMUComp =					"/donateCompanyToMilitaryUnit.html?id=";
	var URLMUMEMB =						"/militaryUnitMembers.html?id="
	var URLMUCOMP = 					"/militaryUnitCompanies.html?id="
	var URLSO = 						"/serverOverloaded.html"
	var URLMUDonations = 				"militaryUnitDonations.html";
	var URLTransactionLog = 			"transactionLog.html";
	var URLSettings = 					"editCitizen.html?Settings";
	var URLShadowGovernment = 			"editCitizen.html?ShadowGovernment";
	
	/*---Initialization parameters---*/
	
	function inGameCheck(){
		if($("section.top-bar-section > ul.foundation-right").length==1){
			return true;
		} else {
			return false;
		}
	}
	
	
	/*---Create checkbox and label---*/
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
	/*---Create checkbox and label---*/
	
	/*---Create InputText and label---*/
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
	/*---Create InputText and label---*/
	
	/*---Change product market table---*/
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
		$( ".dataTable" ).find( "select" ).each( function() {
			var cell = $(this).parent();
			var buyAs = $( "<div class='toRemove buyAsTable'>Buy as Citizen</div>" );

			if( getValue( "configProductMarketSelection" ) == "true" ) {
				buyAs.insertBefore( cell.children().first() );
				cell.parent().css({ "background-color" : "#ecffec" });
				cell.contents().eq(0).remove();
				cell.children( "br" ).remove();
				$(this).hide();

			} else $(this).addClass( "customSelectList" );
		});

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
			var url = getCurrentServer() + URLMonetaryMarket + "?buyerCurrencyId="+ IDByImageCountry( flag.attr( "class" ).split(" ")[1] ) +"&sellerCurrencyId=0";
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
	/*---Change product market table---*/
	
	
	/*---Calculate Value In Gold---*/
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
	/*---Calculate Value In Gold---*/
	
	/*---Display Gold Value---*/
	function displayGoldValue() {

		var $table = $(".dataTable");
        var s = "";
		
		var id = $("#productMarketViewForm #countryId");
		if (id.length > 0) {
                    id = id[0].value;
                } else {
                    id = _currencyId;
                }
		calcValueInGold(id, displayGoldValue.bind(this, id));
		
        //console.log("##### Values ######");
        try {
            if ($table.length > 0) {

                //need to get the tax for the selected country ....
				GET_URL=_COUNTRY_URL.replace("{1}", id)
                $.get(GET_URL, function(data) {
                    try {
                        var taxes = [];

                        var dt = $(".dataTable", $(data))[1];

                        for (var j=1; j<dt.rows.length;j++) {
                            var row = dt.rows[j];
                            taxes[j-1] = {"name": dt.rows[j].cells[0].innerHTML.toUpperCase().trim(),
                                          "value": parseFloat(row.cells[2].innerHTML.toUpperCase().replace("&NBSP;", "").replace("&NBSP;", "").trim()) + parseFloat(row.cells[1].innerHTML.toUpperCase().replace("&NBSP;", "").replace("&NBSP;", "").trim())
                            };
                        }

                        for (var k=1; k< $table[0].rows.length; k++) {
                            var $row = $table[0].rows[k];
                            var totalProduct = parseFloat($row.cells[2].textContent.trim());
                            s = $row.cells[3].textContent.trim();
                            if (s.indexOf("GOLD") >= 0) {
                                break;
                            }
                            var price = parseFloat(s.substr(0,s.indexOf(" ")).trim());
                            var priceInGold = Math.round((price * _currencyValue)*100000)/100000;
                            var totalPrice = Math.round(totalProduct * price * 1000)/1000;
                            var totalPriceInGold = Math.round((totalProduct * price * _currencyValue)*100000)/100000;

                            //console.log("price:" + price + " ; price in gold:" + priceInGold + " ; total price:" + totalPrice + " ; total in gold:" + totalPriceInGold);

                            $row.cells[3].innerHTML = $row.cells[3].innerHTML + " <br> <img src='http://e-sim.home.pl/testura/img/gold.png'><b>" + priceInGold + "</b> GOLD";
                            $row.cells[4].innerHTML = " <b>" + totalPriceInGold + "</b> Gold <br/>" + $row.cells[4].innerHTML //+
                                                        //"<br> Total in "+ s.substr(s.indexOf(" ")).trim() +": <b>" + totalPrice + "</b>"
                            //$row.cells[5].innerHTML = $row.cells[5].innerHTML +"<br><a style='cursor: pointer;color: #3787EA; font-weight: bold;' id='buyAllYouCan'>Buy All You Can</a>";


                            //console.log(taxes);

                            for (var h=0;h<taxes.length;h++) {
								//alert(taxes[h].value)
                               if ($row.cells[0].innerHTML.toUpperCase().indexOf(taxes[h].name) >= 0) {
                                    console.log("tx:" + (parseFloat(taxes[h].value) / 100));
									
                                    $row.cells[3].innerHTML = $row.cells[3].innerHTML + "<br> <hr class='foundation-divider'>  Price without tax: <b>" + (Math.round(((parseFloat(price) / (1 + parseFloat(taxes[h].value) / 100)  )) *100000)/100000) + "</b>";
                                    $row.cells[3].innerHTML = $row.cells[3].innerHTML + " <br> Price(G) without tax: <b>" + (Math.round(((priceInGold / (1 + parseFloat(taxes[h].value) / 100) )) *100000)/100000) + "</b>";
									
                                    break;
                                }
                            }

                            $("#buyAllYouCan", $($row)).hover(
                                function () {
                                    $(this).css("color", "#FF3344");
                                },
                                function () {
                                    $(this).css("color", "#3787EA");
                                }
                            );

                            $("#buyAllYouCan", $($row)).bind("click", function() {
                                try {

                                    var $this_tr = $(this).closest("tr")[0];
                                    var totalProd = parseFloat($this_tr.cells[2].textContent.trim());
                                    var ss = $this_tr.cells[3].textContent.trim();

                                    var pr = parseFloat(ss.substr(0,ss.indexOf(" ")).trim());

                                    var $usersAllMoney = $($("#userMenu .plate")[1]);
                                    var usersMoney = -1;
                                    var currency = ss.substr(ss.indexOf(" "), (ss.indexOf("Price") - ss.indexOf(" ")) ).trim();

                                    var foundIt = false;
                                    for (var k=1;k<$usersAllMoney[0].childNodes.length;k++) {
                                        var e = $usersAllMoney[0].childNodes[k];
                                        if (e.nodeName == "B") {
                                            usersMoney = e.innerHTML;
                                        }
                                        if (e.nodeName == "#text" && e.nodeValue.trim() == currency) {
                                            foundIt = true;
                                            break;
                                        }
                                    }

                                    if (!foundIt) {
                                        usersMoney = -1;
                                    }

                                    usersMoney = parseFloat(usersMoney);

                                    var buyingProds = 0;
                                    if (usersMoney > 0) {
                                        buyingProds = parseInt(usersMoney / pr);

                                        if (buyingProds > totalProd) {
                                            buyingProds = totalProd;
                                        }
                                    }

                                    $("input[name=quantity]", $this_tr.cells[4]).get(0).value = buyingProds;
                                } catch (e) {
                                    console.log(e);
                                }
                            });
                        }
                    } catch (e) {
                        console.log(e);
                    }
                });
            }
        } catch (e) {
            console.log(e);
        }

    }
	/*---Display Gold Value---*/
	
	if(inGameCheck()){
				
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
			
			$('<li>Logs</li>').appendTo($("#MainConfigMenu"));
			var SettingsMUDonationsLog = $('<div></div>').appendTo($("#MainConfigBody"));
			var configSGMUDonationsLogMode = createCheckBox( "MU Donations Log", "SGMUDonationsLogMode", false )
			SettingsMUDonationsLog.append( configSGMUDonationsLogMode );
			var SettingsTransactionLog = $('<div></div>').appendTo($("#MainConfigBody"));
			var configSGTransactionLogMode = createCheckBox( "Player Transaction Log", "SGTransactionLogMode", false )
			SettingsTransactionLog.append( configSGTransactionLogMode );
			
			$('<li>Market</li>').appendTo($("#MainConfigMenu"));
			var SettingsChangeProductMarketTable = $('<div></div>').appendTo($("#MainConfigBody"));
			var configSGChangeProductMarketTable = createCheckBox( "Equipment Fast Link", "SGChangeProductMarketTable", false )
			SettingsChangeProductMarketTable.append( configSGChangeProductMarketTable );
			var SettingsDisplayGoldValue = $('<div></div>').appendTo($("#MainConfigBody"));
			var configSGDisplayGoldValue = createCheckBox( "Equipment Fast Link", "SGDisplayGoldValue", false )
			SettingsDisplayGoldValue.append( configSGDisplayGoldValue );
			
			$("#WrapperMainConfig").lightTabs();
		//}
		/*---On Settings Page---*/
		
		/*---On MU Donations Page---*/
		if (localUrl.indexOf( URLMUDonations, 0 ) >= 0){
			if($.jStorage.get('SGMUDonationsLogMode', false)){
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
		}
		/*---On MU Donations Page---*/
		
		/*---On Transaction Log Page---*/
		if (localUrl.indexOf( URLTransactionLog, 0 ) >= 0){
			if($.jStorage.get('SGTransactionLogMode', false)){
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
		
		/*---On Market Page---*/
		if( localUrl.indexOf( URLMarket, 0 ) >= 0 ) {

			//if( $.jStorage.get("SGChangeProductSelection", true) ) { changeProductSelection(); }
			if( $.jStorage.get("SGChangeProductMarketTable", false) ) { changeProductMarketTable(); } //true
			if( $.jStorage.get("SGDisplayGoldValue", false) ) { displayGoldValue(); } //true

		}
		/*---On Market Page---*/
		
		/*---On Market offers Page---*/
		if( localUrl.indexOf( URLMarketOffers, 0 ) >= 0 ) {

			//if( getValue( "configProductMarketOffers" ) == "true" ) { changeMarketOffers(); }
			//if( getValue( "configEditOffers" ) == "true" ) { editOffers(); }

		}
		/*---On Market offers Page---*/

		/*---On Monetary market Page---*/
		if( localUrl.indexOf( URLMonetaryMarket, 0 ) >= 0 ) {

			//if( getValue( "configMonetaryMarketSelection" ) == "true" ) { changeMonetaryMarket(); }
			//if( getValue( "configMonetaryMarketTable" ) == "true" ) { changeMonetaryMarketTable(); }
			//if( getValue( "configEditPrice" ) == "true" ) { monetaryMarketPriceEdit(); }
			//if( getValue( "configRatioPrice" ) == "true" ) { monetaryMarketPriceRatio(); }

		}
		/*---On Monetary market Page---*/
		
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
		if (localUrl.indexOf( URLNewCitizen, 0 ) >= 0){
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