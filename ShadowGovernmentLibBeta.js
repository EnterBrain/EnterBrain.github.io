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

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}

// API URLs
var URLAPIRanks =					"/apiRanks.html";
var URLAPIRegion =					"/apiRegions.html";
var URLAPIMap =					    "/apiMap.html";
var URLAPIMM = 						"https://www.cscpro.org/{1}/exchange/{2}-{3}.jsonp";
var URLAPITax =						"https://www.cscpro.org/{1}/tax/{2}.jsonp";
// API URLs

// E-SIM URLs
var URLMain = 						"/index.html";
var URLUserStorage = 				"/storage.html";
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
var URLCompanyAllWorkers = 			"/companyAllWorkers.html?id=";
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
var URLCitizen =					"/citizenStatistics.html";
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
var URLMUDonations = 				"/militaryUnitDonations.html";
var URLTransactionLog = 			"/transactionLog.html";
var URLSettings = 					"/editCitizen.html?Settings";
var URLShadowGovernment = 			"/editCitizen.html?ShadowGovernment";
// E-SIM URLs

// My URLs
var CUST_COUNTRY_URL = 				"https://enterbrain.h1n.ru/countryEconomyStatistics.php?server={1}&countryId={2}&callback=?";
var CUST_MM_C_URL = 				"https://enterbrain.h1n.ru/monetaryMarket.php?server={1}&buyerCurrencyId={2}&callback=?";
// My URLs

// Image resources
var IMGIRON = 						"http://cdn.e-sim.org/img/productIcons/Iron.png";
var IMGGRAIN = 						"http://cdn.e-sim.org/img/productIcons/Grain.png";
var IMGOIL = 						"http://cdn.e-sim.org/img/productIcons/Oil.png";
var IMGDIAMONDS = 					"http://cdn.e-sim.org/img/productIcons/Diamonds.png";
var IMGWOOD = 						"http://cdn.e-sim.org/img/productIcons/Wood.png";
var IMGSTONE = 						"http://cdn.e-sim.org/img/productIcons/Stone.png";
var IMGWEAPON = 					"http://cdn.e-sim.org/img/productIcons/Weapon.png";
var IMGFOOD = 						"http://cdn.e-sim.org/img/productIcons/Food.png";
var IMGTICKET = 					"http://cdn.e-sim.org/img/productIcons/Ticket.png";
var IMGGIFT = 						"http://cdn.e-sim.org/img/productIcons/Gift.png";
var IMGHOUSE = 						"http://cdn.e-sim.org/img/productIcons/House.png";
var IMGDS = 						"http://cdn.e-sim.org//img/productIcons/Defense%20System.png";
var IMGHOSPITAL = 					"http://cdn.e-sim.org/img/productIcons/Hospital.png";
var IMGESTATE = 					"http://cdn.e-sim.org/img/productIcons/Estate.png";
var IMGQUALITY = 					"http://cdn.e-sim.org/img/productIcons/q";
var IMGEXTENSION = 					".png";
// Image resources

//Image emoticons
var IMGSMILE = "http://cdn.e-sim.org//img/emoticons/smile.png";
var IMGBIGSMILE = "http://cdn.e-sim.org//img/emoticons/bigSmile.png";
var IMGCIACH = "http://cdn.e-sim.org//img/emoticons/ciach.png";
var IMGTONQUE = "http://cdn.e-sim.org//img/emoticons/tongue.png";
var IMGUNHAPPY = "http://cdn.e-sim.org//img/emoticons/unhappy.png";
var IMGEYE = "http://cdn.e-sim.org//img/emoticons/eye.png";
//Image emoticons

//Image pagination buttons
var IMGFIRSTBTN = "https://enterbrain.github.io/img/first.png";
var IMGPREVBTN = "https://enterbrain.github.io/img/prev.png";
var IMGNEXTBTN = "https://enterbrain.github.io/img/next.png";
var IMGLASTBTN = "https://enterbrain.github.io/img/last.png";
//Image pagination buttons

// Others Image
var IMGSTRIPS=						"https://enterbrain.github.io/img/stripes.png";
var IMGGOLD=						"https://enterbrain.github.io/img/gold.png";
var thumbsUp=						"https://enterbrain.github.io/img/e00e.png";
var IMGBUFF =						"https://enterbrain.github.io/img/20px-Intelligence.png";
var IMGSH = 						"https://enterbrain.github.io/img/stock_new_chart_next_graph-20.png";
var IMGTV = 						"https://enterbrain.github.io/img/travels_travel_vector_simple-20.png";
var IMGMM = 						"https://enterbrain.github.io/img/cash_money_dollar_payment_coins_wallet_register.png";
var IMGCT = 						"https://enterbrain.github.io/img/newspaper_edit.png";
var IMGPM = 						"https://enterbrain.github.io/img/Product_basket.png";
var IMGMU = 						"https://enterbrain.github.io/img/Soldier.png";
var IMGPACKAGE = 					"https://enterbrain.github.io/img/icon-gift.gif";
var IMGDOLLAR = 					"https://enterbrain.github.io/img/currency_dollar_pound_money-20.png";
var IMGEQUIPMENT = 					"https://enterbrain.github.io/img/shield_silver.png";
var IMGCOMPANY =					"https://enterbrain.github.io/img/Factory.png";
var IMGONLINE = 					"https://enterbrain.github.io/img/newOnline.png";
var IMGOFFLINE =					"https://enterbrain.github.io/img/newOffline.png";
var IMGPRODBG = 					"https://enterbrain.github.io/img/productIcons/productIconsBackground.png";
var IMGCRITICAL = 					"https://enterbrain.github.io/img/equipmentIcons/criticalHit.png";
var IMGMISS = 						"https://enterbrain.github.io/img/equipmentIcons/reduceMiss.png";
var IMGAVOID = 						"https://enterbrain.github.io/img/equipmentIcons/avoidDamage.png";
var IMGLOAD = 						"https://enterbrain.github.io/img/WorkInProgress.gif";
var noDebuff=						"https://enterbrain.github.io/img/ok.png";
var IMGLOADBAR=						"https://enterbrain.github.io/img/loading_bar.gif";
var IMGDMUMy=						"https://enterbrain.github.io/img/help-donate_32.png"
var IMGDMUPR=						"https://enterbrain.github.io/img/TreasureChest.png";
var IMGDMUCP = 						"https://enterbrain.github.io/img/Factory_company_production.png";
var IMGMUMEMB=						"https://enterbrain.github.io/img/members.gif";
var IMGMUCOMP=						"https://enterbrain.github.io/img/Bldg-RocketFactory.png";
//var IMGBUBL =						"https://enterbrain.github.io/img/education_icons_IF-08-20.png";
var IMGBUBL =						"https://enterbrain.github.io/img/newspaper_edit.png";
// Others Image

//CountyID hash's
var IDByImageCountry = {
	"Poland": 1,
	"Russia": 2,
	"Germany": 3,
	"France": 4,
	"Spain": 5,
	"United-Kingdom": 6,
	"Italy": 7,
	"Hungary": 8,
	"Romania": 9,
	"Bulgaria": 10,
	"Serbia": 11,
	"Croatia": 12,
	"Bosnia-and-Herzegovina": 13,
	"Greece": 14,
	"Republic-of-Macedonia": 15,
	"Ukraine": 16,
	"Sweden": 17,
	"Portugal": 18,
	"Lithuania": 19,
	"Latvia": 20,
	"Slovenia": 21,
	"Turkey": 22,
	"Brazil": 23,
	"Argentina": 24,
	"Mexico": 25,
	"USA": 26,
	"Canada": 27,
	"China": 28,
	"Indonesia": 29,
	"Iran": 30,
	"South-Korea": 31,
	"Taiwan": 32,
	"Israel": 33,
	"India": 34,
	"Australia": 35,
	"Netherlands": 36,
	"Finland": 37,
	"Ireland": 38,
	"Switzerland": 39,
	"Belgium": 40,
	"Pakistan": 41,
	"Malaysia": 42,
	"Norway": 43,
	"Peru": 44,
	"Chile": 45,
	"Colombia": 46,
	"Montenegro": 47,
	"Austria": 48,
	"Slovakia": 49,
	"Denmark": 50,
	"Czech-Republic": 51,
	"Belarus": 52,
	"Estonia": 53,
	"Philippines": 54,
	"Albania": 55,
	"Venezuela": 56,
	"Egypt": 57,
	"Japan": 58,
	"Bangladesh": 59,
	"Vietnam": 60,
	"Yemen": 61,
	"Saudi-Arabia": 62,
	"Thailand": 63,
	"Algeria": 64,
	"Angola": 65,
	"Cameroon": 66,
	"Ivory-Coast": 67,
	"Ethiopia": 68,
	"Ghana": 69,
	"Kenya": 70,
	"Libya": 71,
	"Morocco": 72,
	"Mozambique": 73,
	"Nigeria": 74,
	"Senegal": 75,
	"South-Africa": 76,
	"Sudan": 77,
	"Tanzania": 78,
	"Togo": 79,
	"Tunisia": 80,
	"Uganda": 81,
	"Zambia": 82,
	"Zimbabwe": 83,
	"Botswana": 84,
	"Benin": 85,
	"Burkina-Faso": 86,
	"Congo": 87,
	"Central-African-Republic": 88,
	"DR-of-the-Congo": 89,
	"Eritrea": 90,
	"Gabon": 91,
	"Chad": 92,
	"Niger": 93,
	"Mali": 94,
	"Mauritania": 95,
	"Guinea": 96,
	"Guinea-Bissau": 97,
	"Sierra-Leone": 98,
	"Liberia": 99,
	"Equatorial-Guinea": 100,
	"Namibia": 101,
	"Lesotho": 102,
	"Swaziland": 103,
	"Madagascar": 104,
	"Malawi": 105,
	"Somalia": 106,
	"Djibouti": 107,
	"Rwanda": 108,
	"Burundi": 109,
	"United-Arab-Emirates": 110,
	"Syria": 111,
	"Iraq": 112,
	"Oman": 113,
	"Qatar": 114,
	"Jordan": 115,
	"Western-Sahara": 116,
	"The-Gambia": 117,
	"South-Sudan": 118,
	"Cambodia": 119,
	"Nepal": 120,
	"Bolivia": 121,
	"Ecuador": 122,
	"Paraguay": 123,
	"Uruguay": 124,
	"Honduras": 125,
	"Dominican-Republic": 126,
	"Guatemala": 127,
	"Kazakhstan": 128,
	"Sri-Lanka": 129,
	"Afghanistan": 130,
	"Armenia": 131,
	"Azerbaijan": 132,
	"Georgia": 133,
	"Kyrgyzstan": 134,
	"Laos": 135,
	"Tajikistan": 136,
	"Turkmenistan": 137,
	"Uzbekistan": 138,
	"New-Zealand": 139,
	"Guyana": 140,
	"Suriname": 141,
	"Nicaragua": 142,
	"Panama": 143,
	"Costa-Rica": 144,
	"Mongolia": 145,
	"Papua-New-Guinea": 146,
	"Cuba": 147,
	"Lebanon": 148,
	"Puerto-Rico": 149,
	"Moldova": 150,
	"Jamaica": 151,
	"El-Salvador": 152,
	"Haiti": 153,
	"Bahrain": 154,
	"Kuwait": 155,
	"Cyprus": 156,
	"Belize": 157,
	"Kosovo": 158,
	"East-Timor": 159,
	"Bahamas": 160,
	"Solomon-Islands": 161,
	"Myanmar": 162,
	"North-Korea": 163,
	"Bhutan": 164,
	"Iceland": 165,
	"Vanuatu": 166,
	"Adminland": 777,
}
var ImageCountryByID = {
	1: "Poland",
	2: "Russia",
	3: "Germany",
	4: "France",
	5: "Spain",
	6: "United-Kingdom",
	7: "Italy",
	8: "Hungary",
	9: "Romania",
	10: "Bulgaria",
	11: "Serbia",
	12: "Croatia",
	13: "Bosnia-and-Herzegovina",
	14: "Greece",
	15: "Republic-of-Macedonia",
	16: "Ukraine",
	17: "Sweden",
	18: "Portugal",
	19: "Lithuania",
	20: "Latvia",
	21: "Slovenia",
	22: "Turkey",
	23: "Brazil",
	24: "Argentina",
	25: "Mexico",
	26: "USA",
	27: "Canada",
	28: "China",
	29: "Indonesia",
	30: "Iran",
	31: "South-Korea",
	32: "Taiwan",
	33: "Israel",
	34: "India",
	35: "Australia",
	36: "Netherlands",
	37: "Finland",
	38: "Ireland",
	39: "Switzerland",
	40: "Belgium",
	41: "Pakistan",
	42: "Malaysia",
	43: "Norway",
	44: "Peru",
	45: "Chile",
	46: "Colombia",
	47: "Montenegro",
	48: "Austria",
	49: "Slovakia",
	50: "Denmark",
	51: "Czech-Republic",
	52: "Belarus",
	53: "Estonia",
	54: "Philippines",
	55: "Albania",
	56: "Venezuela",
	57: "Egypt",
	58: "Japan",
	59: "Bangladesh",
	60: "Vietnam",
	61: "Yemen",
	62: "Saudi-Arabia",
	63: "Thailand",
	64: "Algeria",
	65: "Angola",
	66: "Cameroon",
	67: "Ivory-Coast",
	68: "Ethiopia",
	69: "Ghana",
	70: "Kenya",
	71: "Libya",
	72: "Morocco",
	73: "Mozambique",
	74: "Nigeria",
	75: "Senegal",
	76: "South-Africa",
	77: "Sudan",
	78: "Tanzania",
	79: "Togo",
	80: "Tunisia",
	81: "Uganda",
	82: "Zambia",
	83: "Zimbabwe",
	84: "Botswana",
	85: "Benin",
	86: "Burkina-Faso",
	87: "Congo",
	88: "Central-African-Republic",
	89: "DR-of-the-Congo",
	90: "Eritrea",
	91: "Gabon",
	92: "Chad",
	93: "Niger",
	94: "Mali",
	95: "Mauritania",
	96: "Guinea",
	97: "Guinea-Bissau",
	98: "Sierra-Leone",
	99: "Liberia",
	100: "Equatorial-Guinea",
	101: "Namibia",
	102: "Lesotho",
	103: "Swaziland",
	104: "Madagascar",
	105: "Malawi",
	106: "Somalia",
	107: "Djibouti",
	108: "Rwanda",
	109: "Burundi",
	110: "United-Arab-Emirates",
	111: "Syria",
	112: "Iraq",
	113: "Oman",
	114: "Qatar",
	115: "Jordan",
	116: "Western-Sahara",
	117: "The-Gambia",
	118: "South-Sudan",
	119: "Cambodia",
	120: "Nepal",
	121: "Bolivia",
	122: "Ecuador",
	123: "Paraguay",
	124: "Uruguay",
	125: "Honduras",
	126: "Dominican-Republic",
	127: "Guatemala",
	128: "Kazakhstan",
	129: "Sri-Lanka",
	130: "Afghanistan",
	131: "Armenia",
	132: "Azerbaijan",
	133: "Georgia",
	134: "Kyrgyzstan",
	135: "Laos",
	136: "Tajikistan",
	137: "Turkmenistan",
	138: "Uzbekistan",
	139: "New-Zealand",
	140: "Guyana",
	141: "Suriname",
	142: "Nicaragua",
	143: "Panama",
	144: "Costa-Rica",
	145: "Mongolia",
	146: "Papua-New-Guinea",
	147: "Cuba",
	148: "Lebanon",
	149: "Puerto-Rico",
	150: "Moldova",
	151: "Jamaica",
	152: "El-Salvador",
	153: "Haiti",
	154: "Bahrain",
	155: "Kuwait",
	156: "Cyprus",
	157: "Belize",
	158: "Kosovo",
	159: "East-Timor",
	160: "Bahamas",
	161: "Solomon-Islands",
	162: "Myanmar",
	163: "North-Korea",
	164: "Bhutan",
	165: "Iceland",
	166: "Vanuatu",
	777: "Adminland",
}
var CCbyID = {
	0: "Gold",
	1: "PLN",
	2: "RUB",
	3: "DEM",
	4: "FRF",
	5: "ESP",
	6: "GBP",
	7: "ITL",
	8: "HUF",
	9: "RON",
	10: "BGN",
	11: "RSD",
	12: "HRK",
	13: "BAM",
	14: "GRD",
	15: "MKD",
	16: "UAH",
	17: "SEK",
	18: "PTE",
	19: "LTL",
	20: "LVL",
	21: "SIT",
	22: "TRY",
	23: "BRL",
	24: "ARS",
	25: "MXN",
	26: "USD",
	27: "CAD",
	28: "CNY",
	29: "IDR",
	30: "IRR",
	31: "KRW",
	32: "TWD",
	33: "NIS",
	34: "INR",
	35: "AUD",
	36: "NLG",
	37: "FIM",
	38: "IEP",
	39: "CHF",
	40: "BEF",
	41: "PKR",
	42: "MYR",
	43: "NOK",
	44: "PEN",
	45: "CLP",
	46: "COP",
	47: "MEP",
	48: "ATS",
	49: "SKK",
	50: "DKK",
	51: "CZK",
	52: "BYR",
	53: "EEK",
	54: "PHP",
	55: "ALL",
	56: "VEF",
	57: "EGP",
	58: "JPY",
	59: "BDT",
	60: "VND",
	61: "YER",
	62: "SAR",
	63: "THB",
	64: "DZD",
	65: "AOA",
	66: "CM",
	67: "CI",
	68: "ETB",
	69: "GHS",
	70: "KES",
	71: "LYD",
	72: "MAD",
	73: "MZN",
	74: "NGN",
	75: "SN",
	76: "ZAR",
	77: "SDG",
	78: "TZS",
	79: "TG",
	80: "TND",
	81: "UGX",
	82: "ZMW",
	83: "ZWL",
	84: "BWP",
	85: "BJ",
	86: "BF",
	87: "CG",
	88: "CF",
	89: "CDF",
	90: "ERN",
	91: "GA",
	92: "TD",
	93: "NE",
	94: "ML",
	95: "MRO",
	96: "GNF",
	97: "GW",
	98: "SLL",
	99: "LRD",
	100: "GQ",
	101: "NAD",
	102: "LSL",
	103: "SZL",
	104: "MGA",
	105: "MWK",
	106: "SOS",
	107: "DJF",
	108: "RWF",
	109: "BIF",
	110: "AED",
	111: "SYP",
	112: "IQD",
	113: "OMR",
	114: "QAR",
	115: "JOD",
	116: "EH",
	117: "GMD",
	118: "SSP",
	119: "KHR",
	120: "NPR",
	121: "BOB",
	122: "ECD",
	123: "PYG",
	124: "UYU",
	125: "HNL",
	126: "DOP",
	127: "GTQ",
	128: "KZT",
	129: "LKR",
	130: "AFN",
	131: "AMD",
	132: "AZN",
	133: "GEL",
	134: "KGS",
	135: "LAK",
	136: "TJS",
	137: "TMT",
	138: "UZS",
	139: "NZD",
	140: "GYT",
	141: "SRD",
	142: "NIO",
	143: "PAB",
	144: "CRC",
	145: "MNT",
	146: "PGK",
	147: "CUC",
	148: "LBP",
	149: "PRD",
	150: "MDL",
	151: "JMD",
	152: "SVD",
	153: "HTG",
	154: "BHD",
	155: "KWD",
	156: "CY",
	157: "BZD",
	158: "XKD",
	159: "TLD",
	160: "BSD",
	161: "SBD",
	162: "MMK",
	163: "KPW",
	164: "BTN",
	165: "ISK",
	166: "VUT",
	777: "undefined",
}
var IDbyCC = {
	"Gold": 0,
	"PLN": 1,
	"RUB": 2,
	"DEM": 3,
	"FRF": 4,
	"ESP": 5,
	"GBP": 6,
	"ITL": 7,
	"HUF": 8,
	"RON": 9,
	"BGN": 10,
	"RSD": 11,
	"HRK": 12,
	"BAM": 13,
	"GRD": 14,
	"MKD": 15,
	"UAH": 16,
	"SEK": 17,
	"PTE": 18,
	"LTL": 19,
	"LVL": 20,
	"SIT": 21,
	"TRY": 22,
	"BRL": 23,
	"ARS": 24,
	"MXN": 25,
	"USD": 26,
	"CAD": 27,
	"CNY": 28,
	"IDR": 29,
	"IRR": 30,
	"KRW": 31,
	"TWD": 32,
	"NIS": 33,
	"INR": 34,
	"AUD": 35,
	"NLG": 36,
	"FIM": 37,
	"IEP": 38,
	"CHF": 39,
	"BEF": 40,
	"PKR": 41,
	"MYR": 42,
	"NOK": 43,
	"PEN": 44,
	"CLP": 45,
	"COP": 46,
	"MEP": 47,
	"ATS": 48,
	"SKK": 49,
	"DKK": 50,
	"CZK": 51,
	"BYR": 52,
	"EEK": 53,
	"PHP": 54,
	"ALL": 55,
	"VEF": 56,
	"EGP": 57,
	"JPY": 58,
	"BDT": 59,
	"VND": 60,
	"YER": 61,
	"SAR": 62,
	"THB": 63,
	"DZD": 64,
	"AOA": 65,
	"CM": 66,
	"CI": 67,
	"ETB": 68,
	"GHS": 69,
	"KES": 70,
	"LYD": 71,
	"MAD": 72,
	"MZN": 73,
	"NGN": 74,
	"SN": 75,
	"ZAR": 76,
	"SDG": 77,
	"TZS": 78,
	"TG": 79,
	"TND": 80,
	"UGX": 81,
	"ZMW": 82,
	"ZWL": 83,
	"BWP": 84,
	"BJ": 85,
	"BF": 86,
	"CG": 87,
	"CF": 88,
	"CDF": 89,
	"ERN": 90,
	"GA": 91,
	"TD": 92,
	"NE": 93,
	"ML": 94,
	"MRO": 95,
	"GNF": 96,
	"GW": 97,
	"SLL": 98,
	"LRD": 99,
	"GQ": 100,
	"NAD": 101,
	"LSL": 102,
	"SZL": 103,
	"MGA": 104,
	"MWK": 105,
	"SOS": 106,
	"DJF": 107,
	"RWF": 108,
	"BIF": 109,
	"AED": 110,
	"SYP": 111,
	"IQD": 112,
	"OMR": 113,
	"QAR": 114,
	"JOD": 115,
	"EH": 116,
	"GMD": 117,
	"SSP": 118,
	"KHR": 119,
	"NPR": 120,
	"BOB": 121,
	"ECD": 122,
	"PYG": 123,
	"UYU": 124,
	"HNL": 125,
	"DOP": 126,
	"GTQ": 127,
	"KZT": 128,
	"LKR": 129,
	"AFN": 130,
	"AMD": 131,
	"AZN": 132,
	"GEL": 133,
	"KGS": 134,
	"LAK": 135,
	"TJS": 136,
	"TMT": 137,
	"UZS": 138,
	"NZD": 139,
	"GYT": 140,
	"SRD": 141,
	"NIO": 142,
	"PAB": 143,
	"CRC": 144,
	"MNT": 145,
	"PGK": 146,
	"CUC": 147,
	"LBP": 148,
	"PRD": 149,
	"MDL": 150,
	"JMD": 151,
	"SVD": 152,
	"HTG": 153,
	"BHD": 154,
	"KWD": 155,
	"CY": 156,
	"BZD": 157,
	"XKD": 158,
	"TLD": 159,
	"BSD": 160,
	"SBD": 161,
	"MMK": 162,
	"KPW": 163,
	"BTN": 164,
	"ISK": 165,
	"VUT": 166,
	"undefined": 777,
}
//CountyID hash's

//TaxID hash's
var TaxNameByID = {
	1: "iron",
	2: "grain",
	3: "oil",
	4: "stone",
	5: "wood",
	6: "diamonds",
	7: "weapon",
	8: "house",
	9: "gift",
	10: "food",
	11: "ticket",
	12: "defense system",
	13: "hospital",
	14: "estate",
}
var TaxNameByAPI = {
	"iron": "iron",
	"grain": "grain",
	"oil": "oil",
	"stone": "stone",
	"wood": "wood",
	"diamonds": "diamonds",
	"weapon": "weapon",
	"house": "house",
	"gift": "gift",
	"food": "food",
	"ticket": "ticket",
	"ds": "defense system",
	"hospital": "hospital",
	"estate": "estate",
}
//TaxID hash's

//Lang hash's
var LangByCC = {
	"United-Kingdom":"English",
	"Albania":"Albanian",
	"Egypt":"Arabic",
	"Armenia":"Armenian",
	"Bangladesh":"Bengali",
	"Bosnia-and-Herzegovina":"Bosnian",
	"Brazil":"Brazilian",
	"Bulgaria":"Bulgarian",
	"China":"Chinese",
	"Croatia":"Croatian",
	"Czech-Republic":"Czech",
	"Netherlands":"Dutch",
	"Estonia":"Estonian",
	"Philippines":"Filipino",
	"France":"French",
	"Georgia":"Georgian",
	"Germany":"German",
	"Greece":"Greek",
	"Israel":"Hebrew",
	"Hungary":"Hungarian",
	"Indonesia":"Indonesian",
	"Italy":"Italian",
	"Latvia":"Latvian",
	"Lithuania":"Lithuanian",
	"Republic-of-Macedonia":"Macedonian",
	"Montenegro":"Montenegrin",
	"Iran":"Persian",
	"Poland":"Polish",
	"Portugal":"Portuguese",
	"Romania":"Romanian",
	"Russia":"Russian",
	"Serbia":"Serbian",
	"Slovakia":"Slovakian",
	"Slovenia":"Slovenian",
	"Spain":"Spanish",
	"Sweden":"Swedish",
	"Taiwan":"TraditionalChinese",
	"Turkey":"Turkish",
	"Ukraine":"Ukrainian",
	"Vietnam":"Vietnamese",
	"Azerbaijan":"Azerbaijani",
	"Denmark":"Danish",
	"Finland":"Finnish",
	"India":"Hindi",
	"Japan":"Japanese",
	"Cambodia":"Khmer",
	"South-Korea":"Korean",
	"Malaysia":"Malaysian",
	"Mongolia":"Mongolian",
	"Nepal":"Nepali",
	"Norway":"Norwegian",
	"Silesia":"Silesian",
	"Thailand":"Thai",
}
var SentManyMotivationsToday = {
	"English":"You have sent too many motivations today",
	"Albanian":"Ju keni dërguar shumë motivime sot",
	"Arabic":"لقد ارسلت تشجيعات اكثر من اللازم اليوم",
	"Armenian":"Այսօրվա համար բավականին մոտիվացիոն փաթեթներ եք ուղարկել",
	"Bengali":"আপনি আজ অনেক বেশি অনুপ্রেরনা দিয়েছেন",
	"Bosnian":"Poslali ste previše motivacija danas",
	"Brazilian":"Você já mandou muitas motivações hoje",
	"Bulgarian":"Изпратихте твърде много мотивации днес",
	"Chinese":"你今天发送的激励过多",
	"Croatian":"Poslali ste previše motivacija danas",
	"Czech":"Dnes si poslal příliš mnoho motivac",
	"Dutch":"Je hebt te veel motivaties gegeven vandaag",
	"Estonian":"Sa oled saatnud täna liiga palju motivatsioone",
	"Filipino":"Nakapagpadala ka na ng napakaraming pagganyak ngayon",
	"French":"Vous avez envoyer trop de paquets de motivations pour aujourd'hui",
	"Georgian":"You have sent too many motivations today",
	"German":"Du kannst für heute keine weiteren Motivationspakete verteilen",
	"Greek":"Έχετε στείλει πάρα πολλές παρακινήσεις σήμερα",
	"Hebrew":"שלחת יותר מדי חבילות מוטיבציה היום",
	"Hungarian":"Túl sok motivációt küldték ma",
	"Indonesian":"Kamu sudah mengirimkan terlalu banyak motivasi hari ini",
	"Italian":"Oggi hai mandato troppi incentivi",
	"Latvian":"Tu šodien esi izsūtījis pārāk daudz motivācijas",
	"Lithuanian":"Jūs jau išsiuntėte per daug motivacijų šiandien",
	"Macedonian":"Имаш испратено премногу мотивации за денес",
	"Montenegrin":"Poslali ste previše motivacija danas",
	"Persian":"شما امروز تقویت زیادی فرستاده اید",
	"Polish":"Wysłałeś dzisiaj zbyt wiele motywacji",
	"Portuguese":"Já mandaste demasiadas motivações hoje",
	"Romanian":"Ai trimis prea multe motivări astăzi",
	"Russian":"Вы отправили слишком много мотиваций сегодня",
	"Serbian":"Послали сте превише мотивација данас",
	"Slovakian":"Dnes si poslal príliš veľa motivácií",
	"Slovenian":"Danes ste poslali preveč motivacij",
	"Spanish":"Has enviado demasiadas motivaciones hoy",
	"Swedish":"Du har skickat för många motivationspaket idag",
	"TraditionalChinese":"您今天已經送出太多激勵品",
	"Turkish":"Bugün çok fazla motivasyon gönderdiniz",
	"Ukrainian":"Ви надто щедрий",
	"Vietnamese":"Bạn gửi quá nhiều động lực hôm nay",
	"Azerbaijani":"You have sent too many motivations today",
	"Danish":"You have sent too many motivations today",
	"Finnish":"You have sent too many motivations today",
	"Hindi":"You have sent too many motivations today",
	"Japanese":"You have sent too many motivations today",
	"Khmer":"You have sent too many motivations today",
	"Korean":"당신은 오늘 너무 많은 선물을 보냈어요",
	"Malaysian":"You have sent too many motivations today",
	"Mongolian":"You have sent too many motivations today",
	"Nepali":"You have sent too many motivations today",
	"Norwegian":"You have sent too many motivations today",
	"Silesian":"You have sent too many motivations today",
	"Thai":"You have sent too many motivations today",
}
var succesfullyMotivated = {
	"English":"Motivation package sent succesfully! You've been awarded 1 food limit point",
	"Albanian":"Paketa e motivimit është dërguar me sukses! Ju jeni shpërblyer me 1 limit të ushqimit",
	"Arabic":"مجموعة الترحيب تم ارسالها بنجاح. وانت تم مكافئتك بزيادة حد الاكل بنقطة واحدة",
	"Armenian":"Մոտիվացիոն փաթեթն ուղարկվեց. ստացաք մեկ հավելյալ սննդի լիմիտի միավոր",
	"Bengali":"অনুপ্রেরনার প্যাকেজ সফল ভাবে পাঠানো হয়েছে। আপনি 1 খাদ্যসীমা পেয়েছেন",
	"Bosnian":"Motivacijski paket uspješno poslat! Nagrađeni ste 1 limitom hrane",
	"Brazilian":"Pacote de motivação enviado com sucesso! Você foi premiado com +1 no seu limite de comida.",
	"Bulgarian":"Мотивацията беше изпратена успешно! Наградени сте с 1 лимит за храна",
	"Chinese":"成功发送激励包！你得到1个食物上限点",
	"Croatian":"Motivacijski paket uspješno poslat! Nagrađeni ste 1 dodatnim limitom hrane",
	"Czech":"Motivační balíček byl úspěšně poslaný! Byl jsi odměněný 1 limitem na jídlo navíc",
	"Dutch":"Motivatie pakket is succesvol verzonden! Je bent beloond met 1 voedsel limiet punt",
	"Estonian":"Motivatsioonipakett edukalt saadetud! Sinu toidulimiit kasvas +1 võrra",
	"Filipino":"Matagumpay na naipadala ang pakete ng pagganyak! Ikaw ay ginawaran ng 1 puntos sa hangganan sa pagkain",
	"French":"Le pack de motivation a été correctement envoyé ! Vous obtenez 1 point de limite de nourriture",
	"Georgian":"Motivation package sent succesfully! You've been awarded 1 food limit point",
	"German":"Motivationspaket wurde erfolgreich gesendet! Du wurdest mit 1 Essenslimitpunkt belohnt",
	"Greek":"Το πακέτο κινήτρου στάλθηκε επιτυχώς! Αυξήθηκε κατά 1 το όριο τροφής.",
	"Hebrew":"חבילת מוטיבציה נשלחה בהצלחה! נוסף לך מקום נוסף לאוכל",
	"Hungarian":"Motivációs csomag sikeresen elküldve! Jutalmad 1 élel korlát pont",
	"Indonesian":"Paket motivasi sudah dikirim dengan sukses! Kamu sudah diberikan 1 limit food tambahan",
	"Italian":"Incentivi inviati con successo! Sei stato ricompensato con 1 limite di Cibo extra",
	"Latvian":"Motivācijas maisiņš bija veiksmīgi aizsūtīts! Jums piešķīra 1 ēdiena limita punktu",
	"Lithuanian":"Motyvacinis paketas sėkmingai išsiųstas. Jūs buvote apdovanotas papildomu 1 maisto limitu",
	"Macedonian":"Мотивациониот пакет е успешно пратен! Беше награден со плус 1 лимит за храна",
	"Montenegrin":"Motivacioni paket poslat uspješno! Bićete nagrađeni sa 1 limitom hrane",
	"Persian":"بسته تقویتی با موفقیت فرستاده شد. یک لیمیت مواد غذایی به شما اعطا شد",
	"Polish":"Pakiet motywacyjny został wysłany. Powiększyliśmy Twój limit jedzenia o 1 punkt.",
	"Portuguese":"O Pacote de motivação foi enviado! Foi adicionado um ponto no limite de comida",
	"Romanian":"Pachetul de motivare a fost trimis cu succes! Ai fost recompensat cu 1 punct de limită la hrană",
	"Russian":"Мотивационный подарок успешно отправлен! Вы удостоены 1 дополнительного лимита на еду",
	"Serbian":"Мотивациони пакет послат успешно. Награђени сте са 1 лимитом хране",
	"Slovakian":"Motivačný balíček bol úspešne odoslaný! Bol si odmenený 1 limitom na jedlo",
	"Slovenian":"Motivacijski paket je poslan uspešno. Nagrajeni ste z 1 točko limita hrane",
	"Spanish":"¡Paquete de motivación enviado con éxito! Obtienes 1 punto en el limite de panes",
	"Swedish":"Motivationspaket sändes! Du har blivit belönad med 1 matpoöng",
	"TraditionalChinese":"激勵包裹發送成功！你得到了一單位的食物上限。",
	"Turkish":"Motivasyon paketi başarılı bir şekilde gönderildi!Fazladan 1 ekmek hakkı ile ödüllendirildiniz",
	"Ukrainian":"Мотиваційну посилку успішно надіслано! Вас винагороджено збільшенням ліміту вживання їжі на 1",
	"Vietnamese":"Hàng động viên đã được gửi thành công! Bạn được thưởng 1 điểm limit ăn bánh",
	"Azerbaijani":"Motivation package sent succesfully! You've been awarded 1 food limit point",
	"Danish":"Motivation package sent succesfully! You've been awarded 1 food limit point",
	"Finnish":"Motivaatiopaketti lähetetty onnistuneesti! Sinut on palkittu 1 ruokarajoituspisteellä",
	"Hindi":"प्रेरणा पैकेज सफलतापूर्वक भेजा! आप 1 खाद्य सीमा बिंदु से सम्मानित किया गया है",
	"Japanese":"Motivation package sent succesfully! You've been awarded 1 food limit point",
	"Khmer":"Motivation package sent succesfully! You've been awarded 1 food limit point",
	"Korean":"동기부여 패키지가 성공적으로 발송되었습니다! 음식 섭취한도가 1 늘어났습니다.",
	"Malaysian":"Motivation package sent succesfully! You've been awarded 1 food limit point",
	"Mongolian":"Motivation package sent succesfully! You've been awarded 1 food limit point",
	"Nepali":"Motivation package sent succesfully! You've been awarded 1 food limit point",
	"Norwegian":"Motivation package sent succesfully! You've been awarded 1 food limit point",
	"Silesian":"Motivation package sent succesfully! You've been awarded 1 food limit point",
	"Thai":"Motivation package sent succesfully! You've been awarded 1 food limit point",
}
var YouAlreadySentPackageThisCitizenToday = {
	"English":"You've already sent a package to this citizen today",
	"Russian":'Вы уже отправляли комплект этому гражданину сегодня',
	"German":'Du hast diesem Bürger bereits heute ein Motivationspaket gesendet',
	"Dutch":'Je hebt al een pakket naar deze burger gestuurd vandaag',
	"Czech":'Tomuto občanovi si již dnes poslal balíček',
	"Serbian":'Већ сте послали пакет овом играчу данас',
	"French":"Vous avez déjà envoyé un paquet à ce citoyen aujourd'hui",
}
var CitizenReceivedManyMotivationsToday = {
	"English":'This citizen received too many motivations today',
	"Russian":'Этот гражданин получил слишком много мотиваций сегодня',
}
var CitizenReceivedEveryKindMotivationPackageToday = {
	"English":'This citizen received every kind of motivation package today',
	"Russian":'Этот гражданин получил все виды мотивационных комплектов сегодня',
	"German":'Dieser Bürger hat bereits alle Motivationspakete für heute erhalten',
	"Dutch":'Deze burger heeft elke soort motivatie pakket ontvangen vandaag',
	"Czech":'Tento občan dnes obdržel každý druh motivačního balíku',
	"Serbian":'Играч је примио сваку врсту мотивационог пакета данас',
	"French":"Ce citoyen a reçu toutes les sortes de paquets de motivation pour aujourd'hui",
}
var YouDontHaveEnoughItems = {
	"English":"You don't have enough items",
	"Russian":'У вас не достаточно предметов',
	"German":'Du hast nicht genügend Gegenstände',
	"Dutch":'Je hebt niet genoeg producten',
	"Czech":'Nemáš dostatek předmětů',
	"Serbian":'Немате довољно предмета',
	"French":"Vous n'avez pas assez d'objets",
}
//Lang hash's

/*---Initialization parameters---*/
var lang = "en";
var localUrl = new String( window.location );
var currentServer = /\/\/(\w+)\./gim.exec(localUrl)[1];
var lastModalWindow = $('#fightResponse > div').clone();

// Template strings
var NotifyMotivateTemp = '<div class="growlUI {1}" style="cursor: default;"><h1>{2}</h1><h2>{3}</h2></div>';
var NotifyTwoClickTemp = '<div class="growlUI {1}" style="cursor: default;"><h1>{2}</h1><h2>{3}</h2></div>';

// VARS
var cachedSettings = null; // GM friendly function
var selectedFood = null;
var selectedGift = null;
var selectedWeapon = null;
var selectedCurrency = null;
var idPlayer = null;
var extendedMU = false;
var savedWorkedList = [];
var currencyHash = {};
var currencyPush = [];
var taxesHash = {};
var taxesPush = [];
/*---Initialization parameters---*/


/*---Small core function---*/
function in_array(value, array) 
{
    for(var i = 0; i < array.length; i++) 
    {
        if(array[i] == value) return true;
    }
    return false;
}

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
		//console.log(configLabel+" ("+key+':'+options[key]+")");
		//console.log($.jStorage.get(configLabel, defaultValue));
		var selected = ($.jStorage.get(configLabel, defaultValue)==options[key]) ? "selected " : "";
		div.children("select").append('<option '+selected+'value="'+options[key]+'">'+key+'</option>');
	}
	div.children( "select" ).bind( "change", function() {
		$.jStorage.set(configLabel, parseInt($(this).attr( "value" )));
	});
	return( div );
}

function ImgSrcFix(){
    $(".fightFlag.flags-medium").each(function(){
    	if($(this).html() != ""){ return true; };
        var classFlag = $(this).attr("class");
        var arrayFlag = classFlag.split(" ");
        console.log("fightFlag xflagsMedium xflagsMedium-"+arrayFlag[2]);
        $(this).append('<div class="fightFlag xflagsMedium xflagsMedium-'+arrayFlag[2]+'"></div>');
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
		//console.log(lang);
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
	//var configSGTwoClickLogin = createInputText( "Two Click Login: ", "SGTwoClickLogin", "", "login" );
	//SettingsTwoClick.append( configSGTwoClickLogin );
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
	var configSGImgSrcFixMode = createCheckBox( "Img Src Fix", "SGImgSrcFixMode", true );
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
						//console.log(errorThrown);
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
				//console.log("receiverName:"+item+"; title:"+msgTitle+"; body:"+msgBody);
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
                sleep(750);
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
	//console.log(jqXHR);
	//console.log(responsePage);
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
			//console.log("motivate succes(type:"+arrType[idType]+"; user:"+idUser+"; message:"+messageResponse[1]+")");
		} else if(messageResponse) {
			if (CheckPage){
				$("#motivate-"+arrType[idType]+"-"+idUser).attr("title","Error: "+messageResponse[1]);
			}
			msgNotify = msgNotify.replace("{1}","error_motivated");
			msgNotify = msgNotify.replace("{2}","Motivate Notification");
			msgNotify = msgNotify.replace("{3}",messageResponse[1]);
			MotivateNotify(msgNotify);
			//console.log("motivate error(type:"+arrType[idType]+"; user:"+idUser+"; message:"+messageResponse[1]+")");
		}
	} else {
		if (CheckPage){
			$("#motivate-"+arrType[idType]+"-"+idUser).css({"color": "#c00",});
		}
		var MsgDiv = responsePage.find("div.foundation-style.small-8 > div:eq(1)");
		//console.log(MsgDiv);
		if (MsgDiv.hasClass("testDivred") || MsgDiv.hasClass("testDivblue")){
			var msg = $.trim(MsgDiv.text());
			if (SentManyMotivationsToday[lang] != undefined){
				if(RegExp(SentManyMotivationsToday[lang],'gim').exec(msg)){
					//console.log("regexp ok");
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
					//console.log("regexp ok");
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
			//console.log("motivate error(type:"+arrType[idType]+"; user:"+idUser+"; message:"+msg+")");
		} else {
			msgNotify = msgNotify.replace("{1}","error_motivated");
			msgNotify = msgNotify.replace("{2}","Motivate Notification");
			msgNotify = msgNotify.replace("{3}","Unknown error");
			MotivateNotify(msgNotify);
			//console.log("motivate error(type:"+arrType[idType]+"; user:"+idUser+"; message:Unknown error");
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
	//console.log(JSON.stringify(MotivateCountToday));
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
    var selectorDisplayGoldValue = ".dataTable tr:not(:first)";
    if( $.jStorage.get("SGDisplayGoldValue", true) ) {
        selectorDisplayGoldValue = "#myTablePM tr:not(:first)";
    }
    console.log("displayGoldValue");

	$(selectorDisplayGoldValue).each(function(){
		var currencyVal = 0;
		var taxesArr = [];
		var getUrl = "";
		var currencyId = IDByImageCountry[ $(this).find("td:eq(3) div.flags-small").attr('class').split(" ")[1] ];
		console.log("currencyId="+currencyId);
		if (currencyHash[currencyId] != undefined){
			//console.log("!= undefined");
			currencyVal = currencyHash[currencyId];
		} else {
			//console.log("== undefined");
			currencyHash[currencyId] = getCurrencyPriceGold(currencyId);
			currencyVal = currencyHash[currencyId];
		}
        console.log(currencyHash);
		if (taxesHash[currencyId] != undefined){
			//console.log("!= undefined");
			taxesArr = taxesHash[currencyId];
		} else {
			//console.log("== undefined");
			taxesHash[currencyId] = getTaxByCurrency(currencyId);
			taxesArr = taxesHash[currencyId];
		}
        console.log(taxesHash);

		var totalProduct = parseFloat($(this).find("td:eq(2)").text().trim());
		s = $(this).find("td:eq(3)").text().trim();
		if (s.indexOf("GOLD") < 0) {
			var price = parseFloat(s.substr(0,s.indexOf(" ")).trim());
			var priceInGold = Math.round((price * currencyVal)*100000)/100000;
			var totalPrice = Math.round(totalProduct * price * 1000)/1000;
			var totalPriceInGold = Math.round((totalProduct * price * currencyVal)*100000)/100000;
			//console.log("price:"+price+"; priceInGold:"+priceInGold+"; totalPrice"+totalPrice+"; totalPriceInGold:"+totalPriceInGold);
			
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
	//console.log(currencyHash);
	//console.log(taxesHash);
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
			//console.log(e);
			_currencyValue = 0;
		}
	});
}

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

	$('<hr class="littleDashedLine"><div id="productProgressWrap"><center><p style="text-align: center;"><img alt="" src="'+IMGLOAD+'" style="margin-right: 10px;" /><span style="font-size:36px;"><span id="CountPage">0</span>/<span id="AllPage">'+lastPageId+'</span>&nbsp;Pages loaded</span></p></center></div><p style="clear: both"></p>').appendTo(".small-8 > .testDivwhite");

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
			//console.log(errorThrown);
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
			//console.log(errorThrown);
		},
		timeout: 5000,
	});
	return taxesArr;
}

function CalcValuePMProcess(currencyHash,taxesHash){
	console.log(currencyHash);
	console.log(taxesHash);
	$("#myTablePM tr:not(:first)").each(function(){
		var currencyVal = [];
		var taxesArr = [];
		var getUrl = "";
		//var sellerCountryID = IDByImageCountry[ $(this).find("td:eq(1) div.flags-small").attr('class').split(" ")[1] ];
		var currencyId = IDByImageCountry[ $(this).find("td:eq(3) div.flags-small").attr('class').split(" ")[1] ];

		//console.log(taxesHash);
		//console.log(taxesArr);

		if (currencyHash[currencyId] != currencyId){
			currencyVal = currencyHash[currencyId];
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
				
				// if (currencyHash[currencyId] != currencyId){
				// 	taxesArr = taxesHash[currencyId];
				// 	for (var h in taxesArr){
				// 		//alert(taxesArr[h].value)
				// 		if ($(this).find("td:eq(0)").html().toLowerCase().indexOf(TaxNameByAPI[h]) >= 0) {
				// 			//console.log("tx:" + (parseFloat(taxesArr[h].value) / 100));
				// 			var tax = (sellerCountryID != currencyId) ? taxesArr[h].import+taxesArr[h].vat : taxesArr[h].vat;
				// 			$(this).find("td:eq(3)").html($(this).find("td:eq(3)").html() + "<br> <hr class='foundation-divider'>  Price without tax: <b title=\"VAT: "+taxesArr[h].vat+"; Import Tax: "+taxesArr[h].import+"\">" + (Math.round(((parseFloat(price) * (1 - parseFloat(tax) / 100)  )) *100000)/100000) + "</b>");
				// 			$(this).find("td:eq(3)").html($(this).find("td:eq(3)").html() + " <br> Price(G) without tax: <b>" + (Math.round(((priceInGold * (1 - parseFloat(tax) / 100) )) *100000)/100000) + "</b>");
							
				// 			break;
				// 		}
				// 	}
				// }
			}
		}
	});
	$("#myTablePM").tablesorter( {sortList: [[4,0]], widthFixed: true, widgets: ['zebra']}).tablesorterPager({container: $("#pager")});
}

function CalcValuePM(){
	$("#myTablePM tr:not(:first)").each(function(){
		var currencyId = IDByImageCountry[ $(this).find("td:eq(3) div.flags-small").attr('class').split(" ")[1] ];
		// if (currencyHash[currencyId] === undefined){
		// 	currencyPush.push(currencyId);
		// }
		currencyHash[currencyId] = currencyId;
		// if (taxesHash[currencyId] === undefined){
		// 	taxesPush.push(currencyId);
		// }
		taxesHash[currencyId] = currencyId;
	});
	for(key in currencyHash){
		currencyPush.push(parseInt(key));
	}
	for(key in taxesHash){
		taxesPush.push(parseInt(key));
	}
	// console.log(currencyPush);
	// console.log(taxesPush);
	// k = currencyPush.length;
	// currencyPush.sort();
	// while (k--) {
	// 	if (currencyPush[k] == currencyPush[k-1]) {
	// 		currencyPush.splice(k, 1);
	// 	}
	// }
	// k = taxesPush.length;
	// taxesPush.sort();
	// while (k--) {
	// 	if (taxesPush[k] == taxesPush[k-1]) {
	// 		taxesPush.splice(k, 1);
	// 	}
	// }
	// currencyPush.sort();
	// taxesPush.sort();
	console.log(currencyPush);
	console.log(taxesPush);

	$('<div id="currencyProgressWrap"><center><p style="text-align: center;"><img alt="" src="'+IMGLOAD+'" style="margin-right: 10px;" /><span style="font-size:36px;"><span id="CountCurrency">0</span>/<span id="AllCurrency">'+Object.keys(currencyHash).length+'</span>&nbsp;Currencies loaded</span></p></center></div><p style="clear: both"></p>').appendTo(".small-8 > .testDivwhite");
	//$('<div id="taxesProgressWrap"><center><p style="text-align: center;"><img alt="" src="'+IMGLOAD+'" style="margin-right: 10px;" /><span style="font-size:36px;"><span id="CountTax">0</span>/<span id="AllTax">'+Object.keys(taxesHash).length+'</span>&nbsp;Taxes loaded</span></p></center></div><p style="clear: both"></p>').appendTo(".small-8 > .testDivwhite");

	function currencyHashAdd(){
		// setTimeout( function() {
			var i = currencyPush.pop();
			console.log(i);
			if (i === undefined){
				return false;
			}
			//console.log("currencyId: "+currencyId);
			var currencyVal = 0;
			var currencyAmount = 0;
			var getUrl = URLAPIMM.replace("{1}", currentServer);
			var getUrl = getUrl.replace("{2}", CCbyID[i]);
			var getUrl = getUrl.replace("{3}", CCbyID[0]);
			$.ajax({
				url: getUrl,
    			dataType: "jsonp",
				success: function(data) {
					console.log(data);
					if (!$.isArray(data.offer)){
						$("#CountCurrency").text(parseInt($("#CountCurrency").text())+1);	
						currencyHashAdd();
						return false;
					}
					$.each( data.offer, function( key, el ) {
						currencyHash[i]=[el.rate,el.amount];
						return false;
					});
					$content = "undefined";
					$(data).empty().remove();
					$("#CountCurrency").text(parseInt($("#CountCurrency").text())+1);							
					if (parseInt($("#CountCurrency").text()) == parseInt($("#AllCurrency").text())){
						$('#currencyProgressWrap').empty().remove();
						if ($('#taxesProgressWrap').length == 0 && $("#currencyProgressWrap").length == 0){
							//console.log(currencyHash);
							//console.log(taxesHash);
							CalcValuePMProcess(currencyHash,taxesHash);
						}
					} else {
						currencyHashAdd();
					}
				},
				error: function(jqXHR, textStatus, errorThrown){
					$("#CountCurrency").text(parseInt($("#CountCurrency").text())+1);
					if (parseInt($("#CountCurrency").text()) == parseInt($("#AllCurrency").text())){
						$('#currencyProgressWrap').empty().remove();
						if ($('#taxesProgressWrap').length == 0 && $("#currencyProgressWrap").length == 0){
							//console.log(currencyHash);
							//console.log(taxesHash);
							CalcValuePMProcess(currencyHash,taxesHash);
						}
					} else {
						currencyHashAdd();
					}
				},
				timeout: 5000,
			});
		// }, (3500*(i)) );
	}

	function taxesHashAdd(){
		// setTimeout( function() {
			var i = taxesPush.shift();
			console.log(i);
			if (i === undefined){
				return false;
			}
			var taxesArr = [];
			var getUrl = URLAPITax.replace("{1}", currentServer);
			var getUrl = getUrl.replace("{2}", i);
			$.ajax({
				url: getUrl,
    			dataType: "jsonp",
				success: function(data) {
					taxesHash[i]=data.resource;
					$(data).empty().remove();
					$("#CountTax").text(parseInt($("#CountTax").text())+1);
					if (parseInt($("#CountTax").text()) == parseInt($("#AllTax").text())){
						$('#taxesProgressWrap').empty().remove();
						if ($('#taxesProgressWrap').length == 0 && $("#currencyProgressWrap").length == 0){
							//console.log(currencyHash);
							//console.log(taxesHash);
							CalcValuePMProcess(currencyHash,taxesHash);
						}
					} else {
						taxesHashAdd();
					}
				},
				error: function(jqXHR, textStatus, errorThrown){
					$("#CountTax").text(parseInt($("#CountTax").text())+1);
					if (parseInt($("#CountTax").text()) == parseInt($("#AllTax").text())){
						$('#taxesProgressWrap').empty().remove();
						if ($('#taxesProgressWrap').length == 0 && $("#currencyProgressWrap").length == 0){
							//console.log(currencyHash);
							//console.log(taxesHash);
							CalcValuePMProcess(currencyHash,taxesHash);
						}
					} else {
						taxesHashAdd();
					}
				},
				timeout: 5000,
			});
		// }, (3500*(i)+100) );
	}

	currencyHashAdd();
	//taxesHashAdd();

	//var ind = 0;
	//for (var i in currencyHash){
		//console.log("countryID:"+i+"; index:"+ind);
		//currencyHashAdd(ind,i);
		//ind++;
		//console.log("currencyVal: "+currencyVal);
	//};

	//ind = 0;
	//for (var i in taxesHash){
		//console.log("countryID:"+i+"; index:"+ind);
		//taxesHashAdd(ind,i);
		//ind++;
	//};
	//console.log(currencyHash);
	//console.log(taxesHash);
}

function NewTableProductMarket(){
    if ($(".dataTable tr:eq(1) > td").length == 1){
        //$('<tr style="text-align:center;"><td colspan="7">'+$(this).find("td.biggerFont").text().trim()+'</td></tr>').appendTo("#myTablePM");
        return false;
    }
	createTablePM();
	var urlPage = $("#urlLastPage").text().trim();
	var idLastPage = parseInt($("#idLastPage").text().trim());

	function getNewPage(i){
		setTimeout( function() {
			var getUrl = (idLastPage==1) ? urlPage : urlPage + i;
			$.ajax({  
				type: "GET",
				url: getUrl,
				success: function(data) {
					$(data).find(".dataTable tr:not(:first)").each(addPMTableRow).empty().remove();
					data="undefined";
					$("#CountPage").text(parseInt($("#CountPage").text())+1);							
					if (parseInt($("#CountPage").text()) == parseInt($("#AllPage").text())){
						$('#productProgressWrap').empty().remove();
						changeNewPMTable();
						CalcValuePM();
					}
				},
				error: function(jqXHR, textStatus, errorThrown){
					$("#CountPage").text(parseInt($("#CountPage").text())+1);							
					if (parseInt($("#CountPage").text()) == parseInt($("#AllPage").text())){
						$('#productProgressWrap').empty().remove();
						changeNewPMTable();
						CalcValuePM();
					}
				},
				timeout: 5000,
			});
		}, (1000*(i-1)) );
	}

	for (var i = 1; i <= idLastPage; i++) {
		getNewPage(i);
	}
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
			//console.log("modal mode:"+mode);
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
			//console.log("block mode:"+mode);
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
			//console.log("error mode:"+mode);
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
			
			//console.log();
			
			// Save MSG and Title
			msgTitle=$("#titleInput").val();
			msgBody=$("#messageForm").val();
			
			// Change to WAit UI
			$("#SG_MSG").html('<center><p style="text-align: center;"><h1>Dont Close...</h1><img alt="" src="'+IMGLOADBAR+'" style="margin-left:-13px; width: 562px; height: 126px;" /></p><p style="text-align: center;"><span style="font-size:36px;"><span id="LeftMSG">0</span>/<span id="AllMSG">'+IdArray.length+'</span></span></p></center>')
				
			//SEND MSGs
			IdArray.forEach(function(item, i, arr) {
				//console.log("receiverName:"+item+"; title:"+msgTitle+"; body:"+msgBody);
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
				//console.log(dataString);
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
	//var SGTwoClickLogin = $.jStorage.get('SGTwoClickLogin', "" );
	var SGTwoClickLogin = $("#contentDrop > a:first").text();
	//console.log("SGTwoClickLogin: "+SGTwoClickLogin);
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
			//console.log("tokenEsim: "+tokenEsim);
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
		  },
		  error: function(jqXHR, textStatus, errorThrown){
		    console.log(errorThrown);
			msgNotify = msgNotify.replace("{1}","unsuccesfully_worked");
			msgNotify = msgNotify.replace("{2}","Two Click Notification");
			msgNotify = msgNotify.replace("{3}","Unsuccesfully login");
			twoClickNotify(msgNotify);
		  },
		});
	}
	if (!trainedToday || !workedToday) window.setTimeout(twoClick, twoClickTimer);
}
	
$(document).ready(function () {
	if(inGameCheck()){
				
		Main();
		
		if ( $.jStorage.get('SGAutoMotivateType', 0) > 0 ){ AutoMotivate(); }
		
		if ( $.jStorage.get('SGTwoClick', false) ){ twoClick(); }
			
		if( $.jStorage.get('SGImgSrcFixMode', true)){ ImgSrcFix(); }
		
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