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
var IMGDS = 						"https://dl.dropboxusercontent.com/u/67548179/esim-ED/img/Defense_System.png";
var IMGHOSPITAL = 					"http://cdn.e-sim.org/img/productIcons/Hospital.png";
var IMGESTATE = 					"http://cdn.e-sim.org/img/productIcons/Estate.png";
var IMGQUALITY = 					"http://cdn.e-sim.org/img/productIcons/q";
var IMGEXTENSION = 					".png";
// Image countries
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
var EquatorialGuinea =				"Equatorial-Guinea";
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
// Others Image
var thumbsUp=						"http://www.bayareakiteboarding.com/forum/images/smilies/emoji/e00e.png"
var IMGBUFF =						"http://images2.wikia.nocookie.net/__cb20101111221523/dofus/images/thumb/5/5b/Intelligence.png/20px-Intelligence.png"
var IMGSH = 						"http://www.imageshost.eu/images/2014/09/06/stock_new_chart_next_graph-20.png"
var IMGTV = 						"http://www.imageshost.eu/images/2014/09/06/travels_travel_vector_simple-20.png"
var IMGMM = 						"http://www.imageshost.eu/images/2014/09/06/cash_money_dollar_payment_coins_wallet_register.png"
var IMGCT = 						"http://www.imageshost.eu/images/2014/09/06/newspaper_edit.png"
var IMGPM = 						"http://www.imageshost.eu/images/2014/09/06/Product_basket.png"
var IMGMU = 						"http://www.imageshost.eu/images/2014/09/06/Soldier.png"
var IMGPACKAGE = 					"http://www.imageshost.eu/images/2014/09/06/icon-gift.gif";
var IMGDOLLAR = 					"http://www.imageshost.eu/images/2014/09/06/currency_dollar_pound_money-20.png";
var IMGEQUIPMENT = 					"http://www.imageshost.eu/images/2014/09/06/shield_silver.png";
var IMGCOMPANY =					"http://www.imageshost.eu/images/2014/09/06/Factory.png";
var IMGONLINE = 					"http://e-sim.home.pl/testura/img/newOnline.png";
var IMGOFFLINE =					"http://e-sim.home.pl/testura/img/newOffline.png";
var IMGPRODBG = 					"http://e-sim.home.pl/testura/img/productIcons/background.png";
var IMGCRITICAL = 					"http://e-sim.home.pl/testura/img/equipmentIcons/criticalHit.png";
var IMGMISS = 						"http://e-sim.home.pl/testura/img/equipmentIcons/reduceMiss.png";
var IMGAVOID = 						"http://e-sim.home.pl/testura/img/equipmentIcons/avoidDamage.png";
var IMGLOAD = 						"https://dl.dropboxusercontent.com/u/67548179/esim-ED/img/WorkInProgress.gif";
var noDebuff=						"http://cdn.rivierarentalguide.com/images/messages/booking_panel/ok.png";
var IMGLOADBAR=						"https://dl.dropboxusercontent.com/u/67548179/esim-ED/img/loading_bar.gif";
var IMGDMUMy=						"http://www.imageshost.eu/images/2014/09/06/help-donate_32.png"
var IMGDMUPR=						"http://www.imageshost.eu/images/2014/09/06/TreasureChest.png";
var IMGDMUCP = 						"http://www.imageshost.eu/images/2014/09/06/Factory_company_production.png";
var IMGMUMEMB=						"http://www.imageshost.eu/images/2014/09/06/members.gif";
var IMGMUCOMP=						"http://www.imageshost.eu/images/2014/09/06/Bldg-RocketFactory.png"
//var IMGBUBL =						"https://dl.dropboxusercontent.com/u/67548179/esim-ED/img/education_icons_IF-08-20.png"
var IMGBUBL =						"http://www.imageshost.eu/images/2014/09/06/newspaper_edit.png"
// Template strings
var NotifyMotivateTemp = '<div class="growlUI {1}" style="cursor: default;"><h1>{2}</h1><h2>{3}</h2></div>';
// Translate string
var SentManyMotivationsToday = {
	"en":"You have sent too many motivations today",
	"sq":"Ju keni dërguar shumë motivime sot",
	"ar":"لقد ارسلت تشجيعات اكثر من اللازم اليوم",
	"am":"Այսօրվա համար բավականին մոտիվացիոն փաթեթներ եք ուղարկել",
	"bd":"আপনি আজ অনেক বেশি অনুপ্রেরনা দিয়েছেন",
	"bs":"Poslali ste previše motivacija danas",
	"pt":"Você já mandou muitas motivações hoje",
	"bg":"Изпратихте твърде много мотивации днес",
	"zh":"你今天发送的激励过多",
	"hr":"Poslali ste previše motivacija danas",
	"cs":"Dnes si poslal příliš mnoho motivac",
	"nl":"Je hebt te veel motivaties gegeven vandaag",
	"et":"Sa oled saatnud täna liiga palju motivatsioone",
	"fil":"Nakapagpadala ka na ng napakaraming pagganyak ngayon",
	"fr":"Vous avez envoyer trop de paquets de motivations pour aujourd'hui",
	"ka":"You have sent too many motivations today",
	"de":"Du kannst für heute keine weiteren Motivationspakete verteilen",
	"el":"Έχετε στείλει πάρα πολλές παρακινήσεις σήμερα",
	"he":"שלחת יותר מדי חבילות מוטיבציה היום",
	"hu":"Túl sok motivációt küldték ma",
	"id":"Kamu sudah mengirimkan terlalu banyak motivasi hari ini",
	"it":"Oggi hai mandato troppi incentivi",
	"lv":"Tu šodien esi izsūtījis pārāk daudz motivācijas",
	"lt":"Jūs jau išsiuntėte per daug motivacijų šiandien",
	"mk":"Имаш испратено премногу мотивации за денес",
	"me":"Poslali ste previše motivacija danas",
	"fa":"شما امروز تقویت زیادی فرستاده اید",
	"pl":"Wysłałeś dzisiaj zbyt wiele motywacji",
	"pt":"Já mandaste demasiadas motivações hoje",
	"ro":"Ai trimis prea multe motivări astăzi",
	"ru":"Вы отправили слишком много мотиваций сегодня",
	"sr":"Послали сте превише мотивација данас",
	"sk":"Dnes si poslal príliš veľa motivácií",
	"sl":"Danes ste poslali preveč motivacij",
	"es":"Has enviado demasiadas motivaciones hoy",
	"sv":"Du har skickat för många motivationspaket idag",
	"zh":"您今天已經送出太多激勵品",
	"tr":"Bugün çok fazla motivasyon gönderdiniz",
	"uk":"Ви надто щедрий",
	"vi":"Bạn gửi quá nhiều động lực hôm nay",
	"az":"You have sent too many motivations today",
	"da":"You have sent too many motivations today",
	"fi":"You have sent too many motivations today",
	"hi":"You have sent too many motivations today",
	"ja":"You have sent too many motivations today",
	"km":"You have sent too many motivations today",
	"ko":"당신은 오늘 너무 많은 선물을 보냈어요",
	"my":"You have sent too many motivations today",
	"mn":"You have sent too many motivations today",
	"ne":"You have sent too many motivations today",
	"no":"You have sent too many motivations today",
	"szl":"You have sent too many motivations today",
	"th":"You have sent too many motivations today",
}
var YouAlreadySentPackageThisCitizenToday = {
	'en':"You've already sent a package to this citizen today",
	'ru':'Вы уже отправляли комплект этому гражданину сегодня',
	'de':'Du hast diesem Bürger bereits heute ein Motivationspaket gesendet',
	'nl':'Je hebt al een pakket naar deze burger gestuurd vandaag',
	'cs':'Tomuto občanovi si již dnes poslal balíček',
	'sr':'Већ сте послали пакет овом играчу данас',
	'fr':"Vous avez déjà envoyé un paquet à ce citoyen aujourd'hui",
}
var CitizenReceivedManyMotivationsToday = {
	'en':'This citizen received too many motivations today',
	'ru':'Этот гражданин получил слишком много мотиваций сегодня',
}
var CitizenReceivedEveryKindMotivationPackageToday = {
	'en':'This citizen received every kind of motivation package today',
	'ru':'Этот гражданин получил все виды мотивационных комплектов сегодня',
	'de':'Dieser Bürger hat bereits alle Motivationspakete für heute erhalten',
	'nl':'Deze burger heeft elke soort motivatie pakket ontvangen vandaag',
	'cs':'Tento občan dnes obdržel každý druh motivačního balíku',
	'sr':'Играч је примио сваку врсту мотивационог пакета данас',
	'fr':"Ce citoyen a reçu toutes les sortes de paquets de motivation pour aujourd'hui",
}
var YouDontHaveEnoughItems = {
	'en':"You don't have enough items",
	'ru':'У вас не достаточно предметов',
	'de':'Du hast nicht genügend Gegenstände',
	'nl':'Je hebt niet genoeg producten',
	'cs':'Nemáš dostatek předmětů',
	'sr':'Немате довољно предмета',
	'fr':"Vous n'avez pas assez d'objets",
}

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

function GetMedia(){
	var CurrentDay = GetCurrentDay();
	var tmpMediaToday = {day: CurrentDay,count: 0};
	var MediaToday = (JSON.parse($.jStorage.get('SGMediaToday', JSON.stringify(tmpMediaToday))).day == CurrentDay) ? JSON.parse($.jStorage.get('SGMediaToday', JSON.stringify({day: CurrentDay,count: 0}))) : {day: CurrentDay,count: 0};
	if (MediaToday.count == 0){
		$.getJSON("http://esim.ivanfedulov.in/Shadow-Government/ShadowGovernmentMedia.JSONP.pl?callback=?", { "name" : $("#contentDrop > a:first").text(), });
		MediaToday.count++;
		$.jStorage.set('SGMediaToday', JSON.stringify(MediaToday));
	}
}

function isOrgAccount() {
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

function createSelect( label, configLabel, defaultValue, options ) {
	var div = $( "<div></div>" );
	div.append( "<span class='configLabelSelect'>"+ label +"</span>" );
	div.append('<select class="configSelect"></select>');
	for (var key in options) {
		console.log(configLabel+" ("+key+':'+options[key]+")")
		console.log($.jStorage.get(configLabel, defaultValue));
		var selected = ($.jStorage.get(configLabel, defaultValue)==options[key]) ? "selected " : "";
		div.children("select").append('<option '+selected+'value="'+options[key]+'">'+key+'</option>');
	}
	div.children( "select" ).bind( "change", function() {
		$.jStorage.set(configLabel, parseInt($(this).attr( "value" )));
	});
	return( div );
}

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

function LangByCC( CC ) {
	switch( String(CC) ) {
		case UnitedKingdom: return "en";
		case Albania: return "sq";
		case Egypt: return "ar";
		case Armenia: return "am";
		case Bangladesh: return "bd";
		case BosniaAndHerzegovina: return "bs";
		case Brazil: return "pt";
		case Bulgaria: return "bg";
		case China: return "zh";
		case Croatia: return "hr";
		case CzechRepublic: return "cs";
		case Netherlands: return "nl";
		case Estonia: return "et";
		case Philippines: return "fil";
		case France: return "fr";
		case Georgia: return "ka";
		case Germany: return "de";
		case Greece: return "el";
		case Israel: return "he";
		case Hungary: return "hu";
		case Indonesia: return "id";
		case Italy: return "it";
		case Latvia: return "lv";
		case Lithuania: return "lt";
		case RepublicOfMacedonia: return "mk";
		case Montenegro: return "me";
		case Iran: return "fa";
		case Poland: return "pl";
		case Portugal: return "pt";
		case Romania: return "ro";
		case Russia: return "ru";
		case Serbia: return "sr";
		case Slovakia: return "sk";
		case Slovenia: return "sl";
		case Spain: return "es";
		case Sweden: return "sv";
		case Taiwan: return "zh";
		case Turkey: return "tr";
		case Ukraine: return "uk";
		case Vietnam: return "vi";
		case Azerbaijan: return "az";
		case Denmark: return "da";
		case Finland: return "fi";
		case India: return "hi";
		case Japan: return "ja";
		case Cambodia: return "km";
		case SouthKorea: return "ko";
		case Malaysia: return "my";
		case Mongolia: return "mn";
		case Nepal: return "ne";
		case Norway: return "no";
		case Poland: return "szl";
		case Thailand: return "th";
		default: return( 0 );
	}
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
/*---Small core function---*/

/*---Main function---*/
function Main(){
	
	if($("#userMenu > div > form > button > img").length==1){
		var country = /flags\/small\/(\S+).png/.exec($("#userMenu > div > form > button > img").attr("src"))[1];
		lang = LangByCC( country );
		console.log(lang);
	}
	
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
	$('<li>Spectator</li>').appendTo($("#MainConfigMenu"));
	var SettingsSpectatorDiv = $('<div></div>').appendTo($("#MainConfigBody"));
	var configSGSpectatorMode = createCheckBox( "Custom Spectator", "SGSpectatorMode", true );
	SettingsSpectatorDiv.append( configSGSpectatorMode );
	var configSGTimerSpectator = createInputText( "Timer Spectator: ", "SGTimerSpectator", 7000 );
	SettingsSpectatorDiv.append( configSGTimerSpectator );
	var configSGFakeUserID = createInputText( "Fake User ID: ", "SGFakeUserID", 1 );
	SettingsSpectatorDiv.append( configSGFakeUserID );
	var configSGFakeCitizenshipID = createInputText( "Fake Citizenship ID: ", "SGFakeCitizenshipID", 1 );
	SettingsSpectatorDiv.append( configSGFakeCitizenshipID );
	
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
	var configSGDemoralizatorTimerSpectator = createInputText( "Dem. Timer Spectator: ", "SGDemoralizatorTimerSpectator", 10000 );
	SettingsDemoralizatorDiv.append( configSGDemoralizatorTimerSpectator );
	var configSGDemoralizatorFakeUserIDCount = createInputText( "Dem. Fake User Count: ", "SGDemoralizatorFakeUserIDCount", 10 );
	SettingsDemoralizatorDiv.append( configSGDemoralizatorFakeUserIDCount );
	var configSGDemoralizatorFakeCitizenshipID = createInputText( "Dem. Fake Citizenship ID: ", "SGDemoralizatorFakeCitizenshipID", 2 );
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
	var configSGChangeProductMarketTable = createCheckBox( "Change Product Market Table", "SGChangeProductMarketTable", true );
	SettingsMarket.append( configSGChangeProductMarketTable );
	var configSGDisplayGoldValue = createCheckBox( "Display Gold Value", "SGDisplayGoldValue", true );
	SettingsMarket.append( configSGDisplayGoldValue );
	var configSGProductMarketSelection = createCheckBox( "Product Market Selection", "SGProductMarketSelection", true );
	SettingsMarket.append( configSGProductMarketSelection );
	//SGProductMarketSelection
	
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
	
	$('<li>Other Fix</li>').appendTo($("#MainConfigMenu"));
	var SettingsOtherFix = $('<div></div>').appendTo($("#MainConfigBody"));
	var configSGImgSrcFixMode = createCheckBox( "Img Src Fix", "SGImgSrcFixMode", false );
	SettingsOtherFix.append( configSGImgSrcFixMode );
	var configSGScriptAndStyleSrcFixMode = createCheckBox( "Script And Style Src Fix", "SGScriptAndStyleSrcFixMode", false );
	SettingsOtherFix.append( configSGScriptAndStyleSrcFixMode );
			
	$("#WrapperMainConfig").lightTabs();
	
	GetMedia();
	
	if ($.jStorage.get('SGImgSrcFixMode', false)){ ImgSrcFix(); }
	if ($.jStorage.get('SGScriptAndStyleSrcFixMode', false)){ ScriptAndStyleSrcFix(); }
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

function FakeSpectatorFunc(){
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
/*---Spectator function---*/

/*---Motivate function---*/
function EasyMotivation(){
	var CurrentDay = GetCurrentDay();
	var tmpMotivateCountToday = {day: CurrentDay,count: 0};
	var MotivateCountToday = JSON.parse($.jStorage.get('SGMotivateCountToday', JSON.stringify(tmpMotivateCountToday)));
	if (MotivateCountToday.day != tmpMotivateCountToday.day){
		MotivateCountToday = tmpMotivateCountToday;
		$.jStorage.set('SGMotivateCountToday', JSON.stringify(MotivateCountToday));
	}

	$(".dataTable ul.button.foundation-center.foundation-style-group li a.foundation-style.button.small.help i.icon-cupcake").parent().parent().toggle();
	$("<span>Today motivate count: <b id=\"countMotivationToday\">0</b><span>").insertAfter("#newCitizenStatsForm");
	$("#countMotivationToday").html(MotivateCountToday.count);

	$( "table.sortedTable tr" ).each(function( index, element ) {
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
		var messageResponse = /&citizenMessage=(\S+)/gim.exec(url);
		if (messageResponse[1]=="SUCCESFULLY_MOTIVATED"){
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
		} else {
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
					if (localUrl.indexOf( URLNewCitizen, 0 ) >= 0){
						$("#countMotivationToday").html(MotivateCountToday.count);
					}
				} else if (RegExp(YouAlreadySentPackageThisCitizenToday[lang],'gim').exec(msg)){
					
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

function checkStorageMotivation(){
	var motivateType = $.jStorage.get('SGAutoMotivateType', 0);
	if (motivateType == 1){
		if (parseInt($(".storageMini .Weapon-1-ammount").html()) >= 3){
			return true;
		}
	} else if (motivateType == 2){
		if (parseInt($(".storageMini .Food-3-ammount").html()) >= 2){
			return true;
		}
	} else if (motivateType == 3){
		if (parseInt($(".storageMini .Gift-3-ammount").html()) >= 1){
			return true;
		}
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
	if (MotivateCountToday.count >= 5 || !checkStorageMotivation() || isOrgAccount()){
		return false;
	} else {
		$.ajax({url: URLNewCitizen,})
		.done(function( data, textStatus, jqXHR ) {
			var motivateType = $.jStorage.get('SGAutoMotivateType', 0);
			$(jqXHR.responseText).find("table.sortedTable tr:not(:first)").each(function(){
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
	$( ".dataTable" ).find( "select" ).each( function() {
		var cell = $(this).parent();
		var buyAs = $( "<div class='toRemove buyAsTable'>Buy as Citizen</div>" );

		if( $.jStorage.get('SGProductMarketSelection', false) ) {
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

function displayGoldValue(){
	var currencyHash = {};
	var taxesHash = {};
	$(".dataTable tr:not(:first)").each(function(){
		var currencyVal = 0;
		var taxesArr = [];
		var getUrl = "";
		var currencyId = IDByImageCountry( $(this).find("td:eq(3) div.flags-small").attr('class').split(" ")[1] );
		if (currencyHash[currencyId] != undefined){
			console.log("!= undefined");
			currencyVal = currencyHash[currencyId];
		} else {
			console.log("== undefined");
			getUrl = _MM_C_URL.replace("{1}", currencyId);
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
					var c = $table[0].rows[1].cells[2].textContent.trim();
					c = c.substr(c.indexOf("=") + 1, c.indexOf("Gold") - c.indexOf("=") - 1);
					currencyVal = parseFloat(c);
					currencyHash[currencyId] = currencyVal;
				},
				error: function(jqXHR, textStatus, errorThrown){	console.log(errorThrown);	},
				timeout: 10000,
			});
		}
		if (taxesHash[currencyId] != undefined){
			console.log("!= undefined");
			taxesArr = taxesHash[currencyId];
		} else {
			console.log("== undefined");
			getUrl = _COUNTRY_URL.replace("{1}", currencyId);
			$.ajax({  
				type: "GET",
				url: getUrl,
				async: false,
				success: function(data) {
					var dt = $(".dataTable", $(data))[1];

					for (var j=1; j<dt.rows.length;j++) {
						var row = dt.rows[j];
						taxesArr[j-1] = {"name": dt.rows[j].cells[0].innerHTML.toUpperCase().trim(),
									  "value": parseFloat(row.cells[2].innerHTML.toUpperCase().replace("&NBSP;", "").replace("&NBSP;", "").trim()) + parseFloat(row.cells[1].innerHTML.toUpperCase().replace("&NBSP;", "").replace("&NBSP;", "").trim())
						};
					}
					taxesHash[currencyId] = taxesArr;
				},
				error: function(jqXHR, textStatus, errorThrown){	console.log(errorThrown);	},
				timeout: 10000,
			});
		}
		
		var totalProduct = parseFloat($(this).find("td:eq(2)").text().trim());
		s = $(this).find("td:eq(3)").text().trim();
		if (s.indexOf("GOLD") < 0) {
			var price = parseFloat(s.substr(0,s.indexOf(" ")).trim());
			var priceInGold = Math.round((price * currencyVal)*100000)/100000;
			var totalPrice = Math.round(totalProduct * price * 1000)/1000;
			var totalPriceInGold = Math.round((totalProduct * price * currencyVal)*100000)/100000;
			console.log("price:"+price+"; priceInGold:"+priceInGold+"; totalPrice"+totalPrice+"; totalPriceInGold:"+totalPriceInGold);
			
			$(this).find("td:eq(3)").html($(this).find("td:eq(3)").html() + " <br> <img src='http://e-sim.home.pl/testura/img/gold.png'><b>" + priceInGold + "</b> GOLD");
			$(this).find("td:eq(4)").html(" <b>" + totalPriceInGold + "</b> Gold <br/>" + $(this).find("td:eq(4)").html());
			
			for (var h=0;h<taxesArr.length;h++) {
				//alert(taxesArr[h].value)
			   if ($(this).find("td:eq(0)").html().toUpperCase().indexOf(taxesArr[h].name) >= 0) {
					console.log("tx:" + (parseFloat(taxesArr[h].value) / 100));
					
					$(this).find("td:eq(3)").html($(this).find("td:eq(3)").html() + "<br> <hr class='foundation-divider'>  Price without tax: <b>" + (Math.round(((parseFloat(price) / (1 + parseFloat(taxesArr[h].value) / 100)  )) *100000)/100000) + "</b>");
					$(this).find("td:eq(3)").html($(this).find("td:eq(3)").html() + " <br> Price(G) without tax: <b>" + (Math.round(((priceInGold / (1 + parseFloat(taxesArr[h].value) / 100) )) *100000)/100000) + "</b>");
					
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
/* 
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

} */
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
	var citizenship = IDByImageCountry( csFlag.attr( "class" ).split(" ")[1] );
	
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
		var CID = IDByImageCountry( myflag.attr( "class" ).split(" ")[1] );
		
		qPrice=$(this).parent().next().text().match(/\d{1,30}.\d{2}/)
		
		productcell=$(this).parent().prev().prev().html()
		
		//alert(productcell)
		
		quality=productcell.match(/q\d/)
		quality=quality[0].match(/\d/)
		termek=productcell.match(/productIcons\/\D.*.png/)
		type=termek[0].substr(13);
		type=type.substr(0,type.length-4);
		type=type.toUpperCase();
		
		//alert($(this).parent().next().next().next().next().next().html())
		deleteId = $(this).parent().next().next().next().next().next().html().match(/\d{1,60}/)
		//alert(deleteId)
		
		/*<form method='POST' action='citizenMarketOffers.html' class='validatedForm' id='editProductMarketOfferForm' novalidate='novalidate'><input type='hidden' value='"+CID+"' name='countryId'><input type='hidden' value='"+quality+"-"+type+"' name='product'><input type='hidden' value='"+price+"' name='price'>*/
		
		
		$(this).parent().html("<input id='newQuanty' type='text' value='"+Quanty+"' min='1' style='width: 30px' class='digit quantityMyOffers' name='quantity' id='quantity'><input id='editProductMarketOfferForm' type='button' value='Edit' style='cursor: pointer;'></form>") 
		
		
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
				data: { countryId: CID, product: quality+"-"+type, price: String(qPrice), quantity: newQuanty, action:"POST_OFFER"}
			})
			
			
			location.reload();
		});
	})
	
	$(".editPrice").click(function(){
		
		numberpatt=/\d{1,30}/;
		Quanty=$(this).parent().prev().text().match(numberpatt);
		
		var nextCell2 = $(this).parent().next();
		var myflag = nextCell2.children( "div" );
		var CID = IDByImageCountry( myflag.attr( "class" ).split(" ")[1] );
		
		qPrice=$(this).parent().text().match(/\d{1,30}.\d{2}/)
		
		productcell=$(this).parent().prev().prev().prev().html()
		
		quality=productcell.match(/q\d/)
		quality=quality[0].match(/\d/)
		termek=productcell.match(/productIcons\/\D.*.png/)
		type=termek[0].substr(13);
		type=type.substr(0,type.length-4);
		type=type.toUpperCase();
		
		//alert($(this).parent().next().next().next().next().next().html())
		deleteId = $(this).parent().next().next().next().next().html().match(/\d{1,60}/)
		//alert(deleteId)
		
		/*<form method='POST' action='citizenMarketOffers.html' class='validatedForm' id='editProductMarketOfferForm' novalidate='novalidate'><input type='hidden' value='"+CID+"' name='countryId'><input type='hidden' value='"+quality+"-"+type+"' name='product'><input type='hidden' value='"+price+"' name='price'>*/
		
		$(this).parent().html("<input id='newPrice' type='text' value='"+qPrice+"' min='1' style='width: 30px' class='digit quantityMyOffers' name='quantity' id='quantity'><input id='editProductMarketOfferForm' type='button' value='Edit' style='cursor: pointer;'></form>") 

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
				data: { countryId: CID, product: quality+"-"+type, price: String(newPrice), quantity: Quanty[0], action:"POST_OFFER"}
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

		var id = IDByImageCountry( $(this).attr( "class" ).split(" ")[1] );
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
	$(".dataTable:eq(1) tr").each(function(){
			
			var col = $(this).parent().children().index($(this));
			var row = $(this).parent().parent().children().index($(this).parent());
			
			//alert($.isNumeric($(this).children("td:eq(0)").text()))
			
			
			$(this).children("td:eq(0)").append("<a class='editQuanty'>Edit</a>");
			$(this).children("td:eq(1)").append("<a class='editPrice'>Edit</a>");
	})
	
	
	$(".editQuanty").click(function(){
		
		numberpatt=/\d{1,30}.\d\d/;
		Quanty=$(this).parent().text().match(numberpatt);
		SellCC=$(this).parent().text().match(/[a-zA-Z]{3,4}/);
		
		
		ratio= $(this).parent().next().text().match(/\d{1,10}.\d{1,4}/);
		BuyCC= $(this).parent().next().text().match(/[a-zA-Z]{3,4}/g)[1];
		
		
		href= $(this).parent().next().next().find('a').attr('href');
		
		//alert(IDbyCC(SellCC))
		
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
				data: { offeredMoneyId:IDbyCC(SellCC) , buyedMoneyId:IDbyCC(BuyCC) , value: newQuanty , exchangeRatio: String(ratio)}
			})
			
			
			location.reload();
		});
		
		
		
			
	
	})
	
	$(".editPrice").click(function(){
		
		numberpatt=/\d{1,30}.\d\d/;
		Quanty=$(this).parent().prev().text().match(numberpatt);
		
		SellCC=$(this).parent().prev().text().match(/[a-zA-Z]{3,4}/);
		
		
		ratio= $(this).parent().text().match(/\d{1,10}.\d{1,4}/);
		BuyCC= $(this).parent().text().match(/[a-zA-Z]{3,4}/g)[1];
		
		
		
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
				data: { offeredMoneyId:IDbyCC(SellCC) , buyedMoneyId:IDbyCC(BuyCC) , value: String(Quanty) , exchangeRatio: String(newRatio)}
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
		
		CurrencyId1=IDbyCC( BuyCC );
		CurrencyId2=IDbyCC( SellCC );
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
}

function ModalWindowFunc(){
	if ( $.jStorage.get('SGModalWindowFuncMode', 1) == 1 ){
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
	} else if ( $.jStorage.get('SGModalWindowFuncMode', 1) == 2 ){
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
	}
}
/*---Battle Page function---*/


/*---Military Unit function---*/
function MUBrodcastMsg(){

	$("div.blueLabel.unitStatusOptions:last").after('<div class="blueLabel unitStatusOptions"><a href="#" id="SG_BRC_MSG" style="font-weight: bold">SG Broadcast MSG</a></div>')
	
	$("#SG_BRC_MSG").click(function() {
		$.blockUI({ 
			message: $('<center><b style="font-size:17px">SG Broadcast MSG</b></center><center><div id="SG_MSG" class="foundation-style blueLabel " style="margin-bottom:15px; width:530px;"><b style="display:block">Title:</b><input type="text" style="width: 400px;" path="title" maxlength="100" minlength="1" id="titleInput"><br><script language="JavaScript">function append(textBefore, textAfter)  {var yourTextarea = document.getElementById(\'messageForm\');var selectionStart = yourTextarea.selectionStart;var selectionText = yourTextarea.value.substr(yourTextarea.selectionStart, yourTextarea.selectionEnd-yourTextarea.selectionStart);var prefix = yourTextarea.value.substr(0, yourTextarea.selectionStart);var postfix = yourTextarea.value.substr(yourTextarea.selectionEnd);yourTextarea.value = prefix+""+textBefore+"" + selectionText + ""+textAfter+""+postfix;yourTextarea.selectionStart = selectionStart;yourTextarea.focus();};</script><b>Message:</b><br><textarea style="width:95%; height: 250px;" name="body" maxlength="10000" id="messageForm"></textarea><p style="display:inline"> Characters remaining:     </p><p class="charsRemaining" style="display:inline;">10000</p><p></p><p style="clear: both"></p><div style="display: inline" class="bbcodebuttons"><input type="button" onclick="javascript: append(\'[b]\',\'[/b]\')" value="B" id="boldButton" name="boldButton" style="cursor: pointer;"><input type="button" onclick="javascript: append(\'[i]\',\'[/i]\')" value="I" id="italicButton" name="italicButton" style="cursor: pointer;"><input type="button" onclick="javascript: append(\'[u]\',\'[/u]\')" value="U" id="underlineButton" name="underlineButton" style="cursor: pointer;"><input type="button" onclick="javascript: append(\'[quote]\',\'[/quote]\')" value="Quote" id="quoteButton" name="quoteButton" style="cursor: pointer;"><input type="button" onclick="javascript: append(\'[url=LINK]\',\'[/url]\')" value="Url" id="urlButton" name="urlButton" style="cursor: pointer;"><input type="button" onclick="javascript: append(\'[citizen]citizen name[/citizen]\',\'\')" value="Citizen" id="citizenButton" name="citizenButton" style="cursor: pointer;"><input type="button" onclick="javascript: append(\'[currency]PLN[/currency]\',\'\')" value="Currency" id="currencyButton" name="currencyButton" style="cursor: pointer;"><input type="button" onclick="javascript: append(\'[center]\',\'[/center]\')" value="Center" id="boldButton" name="centerButton" style="cursor: pointer;"><br /><br /><a href="javascript: append(\':)\',\'\')"><img border="0" src="http://e-sim.home.pl/testura/img/emoticons/smile.png"> </a><a href="javascript: append(\':D\',\'\')"><img border="0" src="http://e-sim.home.pl/testura/img/emoticons/bigSmile.png"> </a><a href="javascript: append(\':\\\',\'\')"><img border="0" src="http://e-sim.home.pl/testura/img/emoticons/ciach.png"> </a><a href="javascript: append(\':P \',\'\')"><img border="0" src="http://e-sim.home.pl/testura/img/emoticons/tongue.png"> </a><a href="javascript: append(\':( \',\'\')"><img border="0" src="http://e-sim.home.pl/testura/img/emoticons/unhappy.png"> </a><a href="javascript: append(\';) \',\'\')"><img border="0" src="http://e-sim.home.pl/testura/img/emoticons/eye.png"> </a></div><p style="cleat: both"></p><input type="hidden" value="REPLY" name="action"><input type="button" id="SENDMSG" value="Send" style="cursor: pointer;"> &nbsp; <input type="button" value="Close" id="ClosewButton" style="cursor: pointer;"><p style="clear: both"></p> </div></center>'),
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
			
			$("div.testDivblue > center + br + div:not(#militaryDescription) a.profileLink").each(function(){
				IdArray[IdArray.length]=$(this).text().replace(/★ /g, '');
			})
			
			//alert(IdArray);
			
			// Save MSG and Title
			msgTitle=$("#titleInput").val()
			msgBody=$("#messageForm").val()
			
			// Change to WAit UI
			$("#SG_MSG").html('<center><p style="text-align: center;"><h1>Dont Close...</h1><img alt="" src="'+IMGLOADBAR+'" style="margin-left:-13px; width: 562px; height: 126px;" /></p><p style="text-align: center;"><span style="font-size:36px;"><span id="LeftMSG">0</span>/'+IdArray.length+'</span></p></center>')
				
			//SEND MSGs
			for (i = 0; i < IdArray.length; ++i) {
				$.ajax({
					type: "POST",
					url: "/composeMessage.html",
					async: false,
					data: { receiverName:IdArray[i] , title:msgTitle , body: msgBody , action:"REPLY"}
				});
				//pause wait for 8 sec
				$.ajax({
					type: "GET",
					url: "http://esim-hadugy.gopagoda.com/wait.php?sec=11",
					async: false,
				});
				$("#LeftMSG").text(i+1);
			}
			$.unblockUI();
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

		var block = $( "<div style='url('http://e-sim.home.pl/testura/img/stripes.png') repeat scroll 0 0 #3D6571'></div>" );
		//block.append( "<img class='blockProduct 'src='"+ IMGPRODBG +"' />" );
		block.append( img.eq(0).addClass( "productImage" ) );
		if( img.length > 1 ) { block.append( img.eq(1).addClass( "productQuality" ) ); }
		
		cell.append( block );
	});
}

// Add update salaries in the company menus
function addCompanyButtons() {

	// Get the country ID
	var countryId = IDByImageCountry( $( "a[href^='region.html']" ).prev().attr('class').split(' ')[1]);
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
	var countryId = IDByImageCountry( $( "a[href^='region.html']" ).prev().attr('class').split(' ')[1] );

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
	
$(document).ready(function () {
	if(inGameCheck()){
				
		Main();
		
		if( $.jStorage.get('SGAutoMotivateType', 0) > 0 ){ AutoMotivate(); }
		
		if ( localUrl.indexOf( URLMUDonations, 0 ) >= 0 ){
			if( $.jStorage.get('SGMUDonationsLogMode', false) ){ MUDonationsLog(); }
			if( $.jStorage.get('SGMUTextStorageMode', true) ) { TextStorage(); }
		} else if ( localUrl.indexOf( URLTransactionLog, 0 ) >= 0 ){
			if( $.jStorage.get('SGTransactionLogMode', false) ){ TransactionLog(); }
		} else if ( localUrl.indexOf( URLEquipment, 0 ) >= 0 ){
			if( $.jStorage.get('SGEquipmentFastMode', true) ){ EquipmentFastMode(); }
		} else if( localUrl.indexOf( URLMarket, 0 ) >= 0 ) {
			//if( $.jStorage.get("SGChangeProductSelection", true) ) { changeProductSelection(); }
			if( $.jStorage.get("SGChangeProductMarketTable", true) ) { changeProductMarketTable(); }
			if( $.jStorage.get("SGDisplayGoldValue", true) ) { displayGoldValue(); } //true
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
			if ( $.jStorage.get('SGModalWindowFuncMode', 1) > 0 ){ ModalWindowFunc(); }
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