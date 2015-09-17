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
	
	var Benin = 						"Benin";
	var PapuaNewGuinea = 				"Papua-New-Guinea";
	var Angola = 						"Angola";
	var Cambodia = 						"Cambodia";
	var Sudan = 						"Sudan";
	var EastTimor = 					"East-Timor";
	var Paraguay =						"Paraguay";
	var Kazakhstan =					"Kazakhstan";
	var Portugal =						"Portugal";
	var Syria =							"Syria";
	var Bahamas =						"Bahamas";
	var SolomonIslands =				"Solomon-Islands";
	var NorthKorea =					"North-Korea";
	var Greece =						"Greece";
	var Latvia =						"Latvia";
	var Mongolia =						"Mongolia";
	var Iran =							"Iran";
	var Morocco =						"Morocco";
	var Mali =							"Mali";
	var Panama =						"Panama";
	var Guatemala =						"Guatemala";
	var Guyana =						"Guyana";
	var Iraq =							"Iraq";
	var Chile =							"Chile";
	var Laos =							"Laos";
	var Nepal =							"Nepal";
	var TheGambia =						"The-Gambia";
	var Argentina =						"Argentina";
	var Ukraine =						"Ukraine";
	var Tanzania =						"Tanzania";
	var Ghana =							"Ghana";
	var Zambia =						"Zambia";
	var Belize =						"Belize";
	var Bahrain =						"Bahrain";
	var Congo =							"Congo";
	var India =							"India";
	var Canada =						"Canada";
	var Turkey =						"Turkey";
	var Belgium =						"Belgium";
	var Namibia =						"Namibia";
	var Taiwan =						"Taiwan";
	var Finland =						"Finland";
	var SouthAfrica =					"South-Africa";
	var CentralAfricanRepublic =		"Central-African-Republic";
	var Georgia =						"Georgia";
	var Jamaica =						"Jamaica";
	var Peru =							"Peru";
	var Turkmenistan =					"Turkmenistan";
	var Germany =						"Germany";
	var Yemen =							"Yemen";
	var Eritrea =						"Eritrea";
	var PuertoRico =					"Puerto-Rico";
	var Guinea =						"Guinea";
	var Chad =							"Chad";
	var Somalia =						"Somalia";
	var Madagascar =					"Madagascar";
	var IvoryCoast =					"Ivory-Coast";
	var Thailand =						"Thailand";
	var Libya =							"Libya";
	var Equatorial Guinea =				"Equatorial-Guinea";
	var CostaRica =						"Costa-Rica";
	var Adminland =						"Adminland";
	var Sweden =						"Sweden";
	var Vietnam =						"Vietnam";
	var Malawi =						"Malawi";
	var Poland =						"Poland";
	var Bulgaria =						"Bulgaria";
	var Nigeria =						"Nigeria";
	var Jordan =						"Jordan";
	var Kuwait =						"Kuwait";
	var Tunisia =						"Tunisia";
	var Croatia =						"Croatia";
	var USA =							"USA";
	var Uruguay =						"Uruguay";
	var SriLanka =						"Sri-Lanka";
	var UnitedKingdom =					"United-Kingdom";
	var UnitedArabEmirates =			"United-Arab-Emirates";
	var Kenya =							"Kenya";
	var Switzerland =					"Switzerland";
	var Spain =							"Spain";
	var Djibouti =						"Djibouti";
	var Lebanon =						"Lebanon";
	var Venezuela =						"Venezuela";
	var Liberia =						"Liberia";
	var Azerbaijan =					"Azerbaijan";
	var Cuba =							"Cuba";
	var CzechRepublic =					"Czech-Republic";
	var BurkinaFaso =					"Burkina-Faso";
	var Mauritania =					"Mauritania";
	var Swaziland =						"Swaziland";
	var RepublicOfMacedonia =			"Republic-of-Macedonia";
	var Israel =						"Israel";
	var Australia =						"Australia";
	var DROfTheCongo =					"DR-of-the-Congo";
	var Tajikistan =					"Tajikistan";
	var Estonia =						"Estonia";
	var Myanmar =						"Myanmar";
	var Cameroon =						"Cameroon";
	var Cyprus =						"Cyprus";
	var Malaysia =						"Malaysia";
	var Oman =							"Oman";
	var Iceland =						"Iceland";
	var Armenia =						"Armenia";
	var Gabon =							"Gabon";
	var SouthKorea =					"South-Korea";
	var Austria =						"Austria";
	var Mozambique =					"Mozambique";
	var ElSalvador =					"El-Salvador";
	var Brazil =						"Brazil";
	var Algeria =						"Algeria";
	var Slovenia =						"Slovenia";
	var Lesotho =						"Lesotho";
	var Colombia =						"Colombia";
	var WesternSahara =					"Western-Sahara";
	var Ecuador =						"Ecuador";
	var Hungary =						"Hungary";
	var SouthSudan =					"South-Sudan";
	var Japan =							"Japan";
	var Moldova =						"Moldova";
	var Belarus =						"Belarus";
	var Albania =						"Albania";
	var NewZealand =					"New-Zealand";
	var Vanuatu =						"Vanuatu";
	var Senegal =						"Senegal";
	var GuineaBissau =					"Guinea-Bissau";
	var Italy =							"Italy";
	var Honduras =						"Honduras";
	var Ethiopia =						"Ethiopia";
	var Haiti =							"Haiti";
	var Burundi =						"Burundi";
	var Afghanistan =					"Afghanistan";
	var Egypt =							"Egypt";
	var SierraLeone =					"Sierra-Leone";
	var Bolivia =						"Bolivia";
	var Russia =						"Russia";
	var SaudiArabia =					"Saudi-Arabia";
	var Netherlands =					"Netherlands";
	var Pakistan =						"Pakistan";
	var Kosovo =						"Kosovo";
	var China =							"China";
	var Ireland =						"Ireland";
	var Qatar =							"Qatar";
	var Slovakia =						"Slovakia";
	var France =						"France";
	var Serbia =						"Serbia";
	var Lithuania =						"Lithuania";
	var BosniaAndHerzegovina =			"Bosnia-and-Herzegovina";
	var Kyrgyzstan =					"Kyrgyzstan";
	var Bhutan =						"Bhutan";
	var Romania =						"Romania";
	var Togo =							"Togo";
	var Niger =							"Niger";
	var Philippines =					"Philippines";
	var Rwanda =						"Rwanda";
	var Uzbekistan =					"Uzbekistan";
	var Bangladesh =					"Bangladesh";
	var Nicaragua =						"Nicaragua";
	var Norway =						"Norway";
	var Botswana =						"Botswana";
	var Denmark =						"Denmark";
	var DominicanRepublic =				"Dominican-Republic";
	var Mexico =						"Mexico";
	var Uganda =						"Uganda";
	var Zimbabwe =						"Zimbabwe";
	var Suriname =						"Suriname";
	var Montenegro =					"Montenegro";
	var Indonesia =						"Indonesia";
	
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
	
	function IDByImageCountry( img ) {

		switch( img ) {
			case Benin: return( 85 );
			case PapuaNewGuinea: return( 146 );
			case Angola: return( 65 );
			case Cambodia: return( 119 );
			case Sudan: return( 77 );
			case EastTimor: return( 159 );
			case Paraguay: return( 123 );
			case Kazakhstan: return( 128 );
			case Portugal: return( 18 );
			case Syria: return( 111 );
			case Bahamas: return( 160 );
			case SolomonIslands: return( 161 );
			case NorthKorea: return( 163 );
			case Greece: return( 14 );
			case Latvia: return( 20 );
			case Mongolia: return( 145 );
			case Iran: return( 30 );
			case Morocco: return( 72 );
			case Mali: return( 94 );
			case Panama: return( 143 );
			case Guatemala: return( 127 );
			case Guyana: return( 140 );
			case Iraq: return( 112 );
			case Chile: return( 45 );
			case Laos: return( 135 );
			case Nepal: return( 120 );
			case TheGambia: return( 117 );
			case Argentina: return( 24 );
			case Ukraine: return( 16 );
			case Tanzania: return( 78 );
			case Ghana: return( 69 );
			case Zambia: return( 82 );
			case Belize: return( 157 );
			case Bahrain: return( 154 );
			case Congo: return( 87 );
			case India: return( 34 );
			case Canada: return( 27 );
			case Turkey: return( 22 );
			case Belgium: return( 40 );
			case Namibia: return( 101 );
			case Taiwan: return( 32 );
			case Finland: return( 37 );
			case SouthAfrica: return( 76 );
			case CentralAfricanRepublic: return( 88 );
			case Georgia: return( 133 );
			case Jamaica: return( 151 );
			case Peru: return( 44 );
			case Turkmenistan: return( 137 );
			case Germany: return( 3 );
			case Yemen: return( 61 );
			case Eritrea: return( 90 );
			case PuertoRico: return( 149 );
			case Guinea: return( 96 );
			case Chad: return( 92 );
			case Somalia: return( 106 );
			case Madagascar: return( 104 );
			case IvoryCoast: return( 67 );
			case Thailand: return( 63 );
			case Libya: return( 71 );
			case EquatorialGuinea: return( 100 );
			case CostaRica: return( 144 );
			case Adminland: return( 777 );
			case Sweden: return( 17 );
			case Vietnam: return( 60 );
			case Malawi: return( 105 );
			case Poland: return( 1 );
			case Bulgaria: return( 10 );
			case Nigeria: return( 74 );
			case Jordan: return( 115 );
			case Kuwait: return( 155 );
			case Tunisia: return( 80 );
			case Croatia: return( 12 );
			case USA: return( 26 );
			case Uruguay: return( 124 );
			case SriLanka: return( 129 );
			case UnitedKingdom: return( 6 );
			case UnitedArabEmirates: return( 110 );
			case Kenya: return( 70 );
			case Switzerland: return( 39 );
			case Spain: return( 5 );
			case Djibouti: return( 107 );
			case Lebanon: return( 148 );
			case Venezuela: return( 56 );
			case Liberia: return( 99 );
			case Azerbaijan: return( 132 );
			case Cuba: return( 147 );
			case CzechRepublic: return( 51 );
			case BurkinaFaso: return( 86 );
			case Mauritania: return( 95 );
			case Swaziland: return( 103 );
			case RepublicOfMacedonia: return( 15 );
			case Israel: return( 33 );
			case Australia: return( 35 );
			case DROfTheCongo: return( 89 );
			case Tajikistan: return( 136 );
			case Estonia: return( 53 );
			case Myanmar: return( 162 );
			case Cameroon: return( 66 );
			case Cyprus: return( 156 );
			case Malaysia: return( 42 );
			case Oman: return( 113 );
			case Iceland: return( 165 );
			case Armenia: return( 131 );
			case Gabon: return( 91 );
			case SouthKorea: return( 31 );
			case Austria: return( 48 );
			case Mozambique: return( 73 );
			case ElSalvador: return( 152 );
			case Brazil: return( 23 );
			case Algeria: return( 64 );
			case Slovenia: return( 21 );
			case Lesotho: return( 102 );
			case Colombia: return( 46 );
			case WesternSahara: return( 116 );
			case Ecuador: return( 122 );
			case Hungary: return( 8 );
			case SouthSudan: return( 118 );
			case Japan: return( 58 );
			case Moldova: return( 150 );
			case Belarus: return( 52 );
			case Albania: return( 55 );
			case NewZealand: return( 139 );
			case Vanuatu: return( 166 );
			case Senegal: return( 75 );
			case GuineaBissau: return( 97 );
			case Italy: return( 7 );
			case Honduras: return( 125 );
			case Ethiopia: return( 68 );
			case Haiti: return( 153 );
			case Burundi: return( 109 );
			case Afghanistan: return( 130 );
			case Egypt: return( 57 );
			case SierraLeone: return( 98 );
			case Bolivia: return( 121 );
			case Russia: return( 2 );
			case SaudiArabia: return( 62 );
			case Netherlands: return( 36 );
			case Pakistan: return( 41 );
			case Kosovo: return( 158 );
			case China: return( 28 );
			case Ireland: return( 38 );
			case Qatar: return( 114 );
			case Slovakia: return( 49 );
			case France: return( 4 );
			case Serbia: return( 11 );
			case Lithuania: return( 19 );
			case BosniaAndHerzegovina: return( 13 );
			case Kyrgyzstan: return( 134 );
			case Bhutan: return( 164 );
			case Romania: return( 9 );
			case Togo: return( 79 );
			case Niger: return( 93 );
			case Philippines: return( 54 );
			case Rwanda: return( 108 );
			case Uzbekistan: return( 138 );
			case Bangladesh: return( 59 );
			case Nicaragua: return( 142 );
			case Norway: return( 43 );
			case Botswana: return( 84 );
			case Denmark: return( 50 );
			case DominicanRepublic: return( 126 );
			case Mexico: return( 25 );
			case Uganda: return( 81 );
			case Zimbabwe: return( 83 );
			case Suriname: return( 141 );
			case Montenegro: return( 47 );
			case Indonesia: return( 29 );
			default: return( 0 );
		}
	}

	
	
	function IDbyCC( CC ) {
		
		
		//prompt("a",CC)
		
		
		
		switch( String(CC) ) {
			case "BJ":  return( 85 );
			case "PGK": return( 146 );
			case "AOA": return( 65 );
			case "KHR": return( 119 );
			case "SDG": return( 77 );
			case "TLD": return( 159 );
			case "PYG": return( 123 );
			case "KZT": return( 128 );
			case "PTE": return( 18 );
			case "SYP": return( 111 );
			case "BSD": return( 160 );
			case "SBD": return( 161 );
			case "KPW": return( 163 );
			case "GRD": return( 14 );
			case "LVL": return( 20 );
			case "MNT": return( 145 );
			case "IRR": return( 30 );
			case "MAD": return( 72 );
			case "ML":  return( 94 );
			case "PAB": return( 143 );
			case "GTQ": return( 127 );
			case "GYT": return( 140 );
			case "IQD": return( 112 );
			case "CLP": return( 45 );
			case "LAK": return( 135 );
			case "NPR": return( 120 );
			case "GMD": return( 117 );
			case "ARS": return( 24 );
			case "UAH": return( 16 );
			case "TZS": return( 78 );
			case "GHS": return( 69 );
			case "ZMW": return( 82 );
			case "BZD": return( 157 );
			case "BHD": return( 154 );
			case "CG":  return( 87 );
			case "INR": return( 34 );
			case "CAD": return( 27 );
			case "TRY": return( 22 );
			case "BEF": return( 40 );
			case "NAD": return( 101 );
			case "TWD": return( 32 );
			case "FIM": return( 37 );
			case "ZAR": return( 76 );
			case "CF":  return( 88 );
			case "GEL": return( 133 );
			case "JMD": return( 151 );
			case "PEN": return( 44 );
			case "TMT": return( 137 );
			case "DEM": return( 3 );
			case "YER": return( 61 );
			case "ERN": return( 90 );
			case "PRD": return( 149 );
			case "GNF": return( 96 );
			case "TD":  return( 92 );
			case "SOS": return( 106 );
			case "MGA": return( 104 );
			case "CI":  return( 67 );
			case "THB": return( 63 );
			case "LYD": return( 71 );
			case "GQ":  return( 100 );
			case "CRC": return( 144 );
			case "undefined": return( 777 );
			case "SEK": return( 17 );
			case "VND": return( 60 );
			case "MWK": return( 105 );
			case "PLN": return( 1 );
			case "BGN": return( 10 );
			case "NGN": return( 74 );
			case "JOD": return( 115 );
			case "KWD": return( 155 );
			case "TND": return( 80 );
			case "HRK": return( 12 );
			case "USD": return( 26 );
			case "UYU": return( 124 );
			case "LKR": return( 129 );
			case "GBP": return( 6 );
			case "AED": return( 110 );
			case "KES": return( 70 );
			case "CHF": return( 39 );
			case "ESP": return( 5 );
			case "DJF": return( 107 );
			case "LBP": return( 148 );
			case "VEF": return( 56 );
			case "LRD": return( 99 );
			case "AZN": return( 132 );
			case "CUC": return( 147 );
			case "CZK": return( 51 );
			case "BF":  return( 86 );
			case "MRO": return( 95 );
			case "SZL": return( 103 );
			case "MKD": return( 15 );
			case "NIS": return( 33 );
			case "AUD": return( 35 );
			case "CDF": return( 89 );
			case "TJS": return( 136 );
			case "EEK": return( 53 );
			case "MMK": return( 162 );
			case "CM":  return( 66 );
			case "CY":  return( 156 );
			case "MYR": return( 42 );
			case "OMR": return( 113 );
			case "ISK": return( 165 );
			case "AMD": return( 131 );
			case "GA":  return( 91 );
			case "KRW": return( 31 );
			case "ATS": return( 48 );
			case "MZN": return( 73 );
			case "SVD": return( 152 );
			case "BRL": return( 23 );
			case "DZD": return( 64 );
			case "SIT": return( 21 );
			case "LSL": return( 102 );
			case "COP": return( 46 );
			case "EH":  return( 116 );
			case "ECD": return( 122 );
			case "HUF": return( 8 );
			case "SSP": return( 118 );
			case "JPY": return( 58 );
			case "MDL": return( 150 );
			case "BYR": return( 52 );
			case "ALL": return( 55 );
			case "NZD": return( 139 );
			case "VUT": return( 166 );
			case "SN":  return( 75 );
			case "GW":  return( 97 );
			case "ITL": return( 7 );
			case "HNL": return( 125 );
			case "ETB": return( 68 );
			case "HTG": return( 153 );
			case "BIF": return( 109 );
			case "AFN": return( 130 );
			case "EGP": return( 57 );
			case "SLL": return( 98 );
			case "BOB": return( 121 );
			case "RUB": return( 2 );
			case "SAR": return( 62 );
			case "NLG": return( 36 );
			case "PKR": return( 41 );
			case "XKD": return( 158 );
			case "CNY": return( 28 );
			case "IEP": return( 38 );
			case "QAR": return( 114 );
			case "SKK": return( 49 );
			case "FRF": return( 4 );
			case "RSD": return( 11 );
			case "LTL": return( 19 );
			case "BAM": return( 13 );
			case "KGS": return( 134 );
			case "BTN": return( 164 );
			case "RON": return( 9 );
			case "TG":  return( 79 );
			case "NE":  return( 93 );
			case "PHP": return( 54 );
			case "RWF": return( 108 );
			case "UZS": return( 138 );
			case "BDT": return( 59 );
			case "NIO": return( 142 );
			case "NOK": return( 43 );
			case "BWP": return( 84 );
			case "DKK": return( 50 );
			case "DOP": return( 126 );
			case "MXN": return( 25 );
			case "UGX": return( 81 );
			case "ZWL": return( 83 );
			case "SRD": return( 141 );
			case "MEP": return( 47 );
			case "IDR": return( 29 );
			default: return( 0 );
		}
	}
	
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
			var url = URLMonetaryMarket + "?buyerCurrencyId="+ IDByImageCountry( flag.attr( "class" ).split(" ")[1] ) +"&sellerCurrencyId=0";
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
			var SettingsLogs = $('<div></div>').appendTo($("#MainConfigBody"));
			var configSGMUDonationsLogMode = createCheckBox( "MU Donations Log", "SGMUDonationsLogMode", false )
			SettingsLogs.append( configSGMUDonationsLogMode );
			var configSGTransactionLogMode = createCheckBox( "Player Transaction Log", "SGTransactionLogMode", false )
			SettingsLogs.append( configSGTransactionLogMode );
			
			$('<li>Market</li>').appendTo($("#MainConfigMenu"));
			var SettingsMarket = $('<div></div>').appendTo($("#MainConfigBody"));
			var configSGChangeProductMarketTable = createCheckBox( "Change Product Market Table", "SGChangeProductMarketTable", false )
			SettingsMarket.append( configSGChangeProductMarketTable );
			var configSGDisplayGoldValue = createCheckBox( "Display Gold Value", "SGDisplayGoldValue", false )
			SettingsMarket.append( configSGDisplayGoldValue );
			
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