var CLIENT_ID = '1004087893143-1lekdqmu0h4aafoghtlirhb2a8edt12r.apps.googleusercontent.com';
var API_KEY = 'AIzaSyC4bQKjRbypPlpHuFaaT2z8bTpEguegXOQ ';
var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
var SCOPES = "https://www.googleapis.com/auth/spreadsheets";
var authorizeButton = document.getElementById('authorize_button');
var signoutButton = document.getElementById('signout_button');
var pre = document.getElementById('content');
var userList = ['corilito@gmail.com', 'open@ouskravena.org'];
var signedUser = false;

function handleClientLoad() {
 gapi.load('client:auth2', initClient);
}

function initClient() {
 gapi.client.init({
  apiKey: API_KEY,
  clientId: CLIENT_ID,
  discoveryDocs: DISCOVERY_DOCS,
  scope: SCOPES
 }).then(function() {
  gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
  updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
  //authorizeButton.onclick = handleAuthClick;
  //signoutButton.onclick = handleSignoutClick;
 }, function(error) {
  //appendPre(JSON.stringify(error, null, 2));
  console.log( JSON.stringify(error, null, 2) );
 });
}

function updateSigninStatus(isSignedIn) {
 signedUser = isSignedIn;
 if (isSignedIn) {
  var thisUser = gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getEmail();
  var userFound = userList.indexOf(thisUser);
  if (userFound != -1) {
   //authorizeButton.style.display = 'none';
   //signoutButton.style.display = 'inline-block';
  }
 } else {
  //authorizeButton.style.display = 'inline-block';
  //signoutButton.style.display = 'none';
 }
}

function handleAuthClick(event) {
	gapi.auth2.getAuthInstance().signIn();
}

function handleSignoutClick(event) {
 gapi.auth2.getAuthInstance().signOut();
}

/*
function appendPre(message) {
 var pre = document.getElementById('content');
 var textContent = document.createTextNode(message + '\n');
 $(pre).append(textContent);
}
function dynamicallyLoadScript(url) {
 var script = document.createElement("script");
 script.src = url;
 script.id = 'fetchHandler';
 $('body').append(script);
}
*/


/*
	//    url: "https://spreadsheets.google.com/feeds/worksheets/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/private/full",
var sheet1 = $.parseJSON($.ajax({
    url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/2/public/values?alt=json",
    dataType: "json",
    async: false
   }).responseText).feed.entry;
var sheet1 = sheet1;
var sheet2 = $.parseJSON($.ajax({
    url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/3/public/values?alt=json",
    dataType: "json",
    async: false
   }).responseText).feed.entry;
var sheet2 = sheet2;
var sheet3 = $.parseJSON($.ajax({
    url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/4/public/values?alt=json",
    dataType: "json",
    async: false
   }).responseText).feed.entry;
var sheet3 = sheet3;
var sheet4 = $.parseJSON($.ajax({
    url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/5/public/values?alt=json",
    dataType: "json",
    async: false
   }).responseText).feed.entry;
var sheet4 = sheet4;
var sheet5 = $.parseJSON($.ajax({
    url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/6/public/values?alt=json",
    dataType: "json",
    async: false
   }).responseText).feed.entry;
var sheet5 = sheet5;
var sheet6 = $.parseJSON($.ajax({
    url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/7/public/values?alt=json",
    dataType: "json",
    async: false
   }).responseText).feed.entry;
var sheet6 = sheet6;
   //console.log(sheet1);
*/
   
   
var currlang = '';  
var sheet1, sheet2, sheet3, sheet4, sheet5, sheet6 = "";
var sheets_bg = { sheet1: null, sheet2: null, sheet3: null, sheet4: null, sheet5: null, sheet6: null }
var sheets_es = { sheet1: null, sheet2: null, sheet3: null, sheet4: null, sheet5: null, sheet6: null }
var sheets_gb = { sheet1: null, sheet2: null, sheet3: null, sheet4: null, sheet5: null, sheet6: null }
var sheets_tr = { sheet1: null, sheet2: null, sheet3: null, sheet4: null, sheet5: null, sheet6: null }
var sheets_pl = { sheet1: null, sheet2: null, sheet3: null, sheet4: null, sheet5: null, sheet6: null }

var myState = {
        pdf: null,
        currentPage: 1,
        zoom: 1
    }
   
function langFetch(lang) {
	$('.flag-elemnt').show();
	$('.garamontOPEN-' + lang).hide();
	/*  
	$('#navbarSupportedContent > ul').remove();
	$('section.cid-section-3 > div').remove();
	$('.cid-section-4 > div').remove();
	$('.cid-section-5 > div').remove();
	$('section.cid-section-6 #sheet6-03 > div#sheet6-03-01').remove();
	*/
	switch (lang) {
		case 'bulgaria':
			$('.garamont-bulgaria.langSelect').hide();
			sheets_bg.sheet1 ? '' : sheets_bg.sheet1 = $.parseJSON($.ajax({
				url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/8/public/values?alt=json",
				dataType: "json",
				async: false
			}).responseText).feed.entry;
			sheet1 = sheets_bg.sheet1;
			sheets_bg.sheet2 ? '' : sheets_bg.sheet2 = $.parseJSON($.ajax({
				url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/9/public/values?alt=json",
				dataType: "json",
				async: false
			}).responseText).feed.entry;
			sheet2 = sheets_bg.sheet2;
			sheets_bg.sheet3 ? '' : sheets_bg.sheet3 = $.parseJSON($.ajax({
				url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/10/public/values?alt=json",
				dataType: "json",
				async: false
			}).responseText).feed.entry;
			sheet3 = sheets_bg.sheet3;
			sheets_bg.sheet4 ? '' : sheets_bg.sheet4 = $.parseJSON($.ajax({
				url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/11/public/values?alt=json",
				dataType: "json",
				async: false
			}).responseText).feed.entry;
			sheet4 = sheets_bg.sheet4;
			sheets_bg.sheet5 ? '' : sheets_bg.sheet5 = $.parseJSON($.ajax({
				url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/12/public/values?alt=json",
				dataType: "json",
				async: false
			}).responseText).feed.entry;
			sheet5 = sheets_bg.sheet5;
			sheets_bg.sheet6 ? '' : sheets_bg.sheet6 = $.parseJSON($.ajax({
				url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/13/public/values?alt=json",
				dataType: "json",
				async: false
			}).responseText).feed.entry;
			sheet6 = sheets_bg.sheet6;
			currlang = "bg";
			break;
		case 'spain':
			$('.garamont-spain.langSelect').hide();
			sheets_es.sheet1 ? '' : sheets_es.sheet1 = $.parseJSON($.ajax({
				url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/14/public/values?alt=json",
				dataType: "json",
				async: false
			}).responseText).feed.entry;
			sheet1 = sheets_es.sheet1;
			sheets_es.sheet1 = sheets_es.sheet1;
			sheets_es.sheet2 ? '' : sheets_es.sheet2 = $.parseJSON($.ajax({
				url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/15/public/values?alt=json",
				dataType: "json",
				async: false
			}).responseText).feed.entry;
			sheet2 = sheets_es.sheet2;
			sheets_es.sheet3 ? '' : sheets_es.sheet3 = $.parseJSON($.ajax({
				url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/16/public/values?alt=json",
				dataType: "json",
				async: false
			}).responseText).feed.entry;
			sheet3 = sheets_es.sheet3;
			sheets_es.sheet4 ? '' : sheets_es.sheet4 = $.parseJSON($.ajax({
				url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/17/public/values?alt=json",
				dataType: "json",
				async: false
			}).responseText).feed.entry;
			sheet4 = sheets_es.sheet4;
			sheets_es.sheet5 ? '' : sheets_es.sheet5 = $.parseJSON($.ajax({
				url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/18/public/values?alt=json",
				dataType: "json",
				async: false
			}).responseText).feed.entry;
			sheet5 = sheets_es.sheet5;
			sheets_es.sheet6 ? '' : sheets_es.sheet6 = $.parseJSON($.ajax({
				url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/19/public/values?alt=json",
				dataType: "json",
				async: false
			}).responseText).feed.entry
			sheet6 = sheets_es.sheet6;
			currlang = "es";
		break;
		case 'poland':
			$('.garamont-poland.langSelect').hide();
			sheets_pl.sheet1 ? '' : sheets_pl.sheet1 = $.parseJSON($.ajax({
				url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/20/public/values?alt=json",
				dataType: "json",
				async: false
			}).responseText).feed.entry;
			sheet1 = sheets_pl.sheet1;
			sheets_pl.sheet2 ? '' : sheets_pl.sheet2 = $.parseJSON($.ajax({
				url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/21/public/values?alt=json",
				dataType: "json",
				async: false
			}).responseText).feed.entry;
			sheet2 = sheets_pl.sheet2;
			sheets_pl.sheet3 ? '' : sheets_pl.sheet3 = $.parseJSON($.ajax({
				url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/22/public/values?alt=json",
				dataType: "json",
				async: false
			}).responseText).feed.entry;
			sheet3 = sheets_pl.sheet3;
			sheets_pl.sheet4 ? '' : sheets_pl.sheet4 = $.parseJSON($.ajax({
				url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/23/public/values?alt=json",
				dataType: "json",
				async: false
			}).responseText).feed.entry;
			sheet4 = sheets_pl.sheet4;
			sheets_pl.sheet5 ? '' : sheets_pl.sheet5 = $.parseJSON($.ajax({
				url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/24/public/values?alt=json",
				dataType: "json",
				async: false
			}).responseText).feed.entry;
			sheet5 = sheets_pl.sheet5;
			sheets_pl.sheet6 ? '' : sheets_pl.sheet6 = $.parseJSON($.ajax({
				url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/25/public/values?alt=json",
				dataType: "json",
				async: false
			}).responseText).feed.entry;
			sheet6 = sheets_pl.sheet6;
			currlang = "pl";
		break;
		case 'turkey':
			$('.garamont-turkey.langSelect').hide();
			sheets_tr.sheet1 ? '' : sheets_tr.sheet1 = $.parseJSON($.ajax({
				url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/26/public/values?alt=json",
				dataType: "json",
				async: false
			}).responseText).feed.entry;
			sheet1 = sheets_tr.sheet1;
			sheets_tr.sheet2 ? '' : sheets_tr.sheet2 = $.parseJSON($.ajax({
				url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/27/public/values?alt=json",
				dataType: "json",
				async: false
			}).responseText).feed.entry;
			sheet2 = sheets_tr.sheet2;
			sheets_tr.sheet3 ? '' : sheets_tr.sheet3 = $.parseJSON($.ajax({
				url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/28/public/values?alt=json",
				dataType: "json",
				async: false
			}).responseText).feed.entry;
			sheet3 = sheets_tr.sheet3;
			sheets_tr.sheet4 ? '' : sheets_tr.sheet4 = $.parseJSON($.ajax({
				url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/29/public/values?alt=json",
				dataType: "json",
				async: false
			}).responseText).feed.entry;
			sheet4 = sheets_tr.sheet4;
			sheets_tr.sheet5 ? '' : sheets_tr.sheet5 = $.parseJSON($.ajax({
				url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/30/public/values?alt=json",
				dataType: "json",
				async: false
			}).responseText).feed.entry;
			sheet5 = sheets_tr.sheet5;
			sheets_tr.sheet6 ? '' : sheets_tr.sheet6 = $.parseJSON($.ajax({
				url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/31/public/values?alt=json",
				dataType: "json",
				async: false
			}).responseText).feed.entry;
			sheet6 = sheets_tr.sheet6;
			currlang = "tr";
		break;
		default:
			$('.garamont-united-kingdom.langSelect').hide();
			sheets_gb.sheet1 ? '' : sheets_gb.sheet1 = $.parseJSON($.ajax({
				url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/2/public/values?alt=json",
				dataType: "json",
				async: false
			}).responseText).feed.entry;
			sheet1 = sheets_gb.sheet1;
			sheets_gb.sheet2 ? '' : sheets_gb.sheet2 = $.parseJSON($.ajax({
				url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/3/public/values?alt=json",
				dataType: "json",
				async: false
			}).responseText).feed.entry;
			sheet2 = sheets_gb.sheet2;
			sheets_gb.sheet3 ? '' : sheets_gb.sheet3 = $.parseJSON($.ajax({
				url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/4/public/values?alt=json",
				dataType: "json",
				async: false
			}).responseText).feed.entry;
			sheet3 = sheets_gb.sheet3;
			sheets_gb.sheet4 ? '' : sheets_gb.sheet4 = $.parseJSON($.ajax({
				url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/5/public/values?alt=json",
				dataType: "json",
				async: false
			}).responseText).feed.entry;
			sheet4 = sheets_gb.sheet4;
			sheets_gb.sheet5 ? '' : sheets_gb.sheet5 = $.parseJSON($.ajax({
				url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/6/public/values?alt=json",
				dataType: "json",
				async: false
			}).responseText).feed.entry;
			sheet5 = sheets_gb.sheet5;
			sheets_gb.sheet6 ? '' : sheets_gb.sheet6 = $.parseJSON($.ajax({
				url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/7/public/values?alt=json",
				dataType: "json",
				async: false
			}).responseText).feed.entry;
			sheet6 = sheets_gb.sheet6;
			currlang = "en";
	}
 
	 populateAbout();
 /*
 switchlang = true;
 populateNavigation();
 sectionFour();
 sectionFive();
 sectionSix();
 $('#fetchHandler').remove();
 updateSigninStatus(signedUser);
 
 */
}
   
   
	langFetch('united-kingdom');
	
	
	$('.flag-elemnt').on('click', function(e){
		var lang =  e.target.closest('div');
		lang =  $(lang).attr('class').split(/\s+/)[1].split('-')[1];
		langFetch(lang);
	});
   
   
   
   
   
   
   
   
   
   
  /* 
 var sdsd = $('#menu-block > div > div > ul')
 console.log( $(sdsd) );
 
	
	function PopulateNavigation(){

		//var newDivMenu = document.createElement('div');
		//	$(newDivMenu).addClass('wrap-menu');
		//var newDivChild = document.createElement('div');
		//$(newDivChild).addClass('wrap-menu-child');
		//var newList = document.createElement('ul');
		//$(newList).addClass('wrap-menu-child');
 
 
		for (i = 1; i < sheet1.length; i++) {

			var newListElement = document.createElement('li');
			$(newListElement).addClass('init-menu');
			var newListElementLink = document.createElement('a');
			$(newListElementLink).addClass('scroll-link');
			$(newListElementLink).attr('href','#' + $(sheet1)[i]['gsx$link']['$t']);
			$(newListElementLink).html(  $(sheet1)[i]['gsx$text']['$t']  );
			$(newListElement).append(newListElementLink);
			//$(newList).append(newListElement);
			
			$(sdsd).prepend(newListElement);
		}
		//$(newDivChild).append(newList);
		//$(newDivMenu).append(newDivChild);
		//$("#menu-block").prepend(newDivMenu);
		$(sdsd).prepend(newList);
		$('#menu-block > div > div').css('margin-right', '0');
	}
	PopulateNavigation();
  */
   
   
   function populateAbout() {
		$('#about > div.container').remove();
		var newDivElementContainer = document.createElement('div');
		$(newDivElementContainer).addClass('container');
		var newDivElementRow = document.createElement('div');
		$(newDivElementRow).addClass('row');
		
		var newDivElementHeadline = document.createElement('div');
		$(newDivElementHeadline).addClass('col-md-12')
		var newDivElementHeadlineTitle = document.createElement('h2');
		$(newDivElementHeadlineTitle).addClass('devider-sub').html($(sheet3)[0]['gsx$title']['$t']);
		$(newDivElementHeadlineTitle).addClass('devider-sub')
		
		var newDivElementHeadling = document.createElement('h3');
		$(newDivElementHeadling).addClass('devider-heading').html($(sheet3)[0]['gsx$text']['$t']);
		
		$(newDivElementHeadline).append(newDivElementHeadlineTitle);
		$(newDivElementHeadline).append(newDivElementHeadling);
		$(newDivElementRow).append(newDivElementHeadline);
		
		for (i = 1; i < sheet3.length; i++) {
			var newDivElement = document.createElement('div');
			$(newDivElement).addClass('col-md-4');
			var newDivElement1 = document.createElement('div');
			$(newDivElement1).addClass('features onStep').attr("data-animation", "fadeInUp").attr("data-time",150 * i);
			var newDivElement12 = document.createElement('span');
			$(newDivElement12).addClass('ti-briefcase');
			var newDivElement123 = document.createElement('h3');
			$(newDivElement123).addClass('heading').html($(sheet3)[i]['gsx$title']['$t']);
			var newDivElement1234 = document.createElement('p');
			$(newDivElement1234).addClass('content').html($(sheet3)[i]['gsx$text']['$t']);
			var newDivElement12345 = document.createElement('a');
			
			$(newDivElement1).append(newDivElement12);
			$(newDivElement1).append(newDivElement123);
			$(newDivElement1).append(newDivElement1234);
			$(newDivElement).append(newDivElement1);
			
			if( i % 3 == 0 )
			{
				$(newDivElementRow).append('<div class="col-md-2"></div>');
			}
			$(newDivElementRow).append(newDivElement);
		}
 $(newDivElementContainer).append(newDivElementRow);
 $('#about').append(newDivElementContainer);
}
//sectionThree();



function populateBooks(){
	
	
	var sheet_books = $.parseJSON($.ajax({
		url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/32/public/values?alt=json",
		dataType: "json",
		async: false
	}).responseText).feed.entry;
	
	/*
	console.log(sheet_books);
	console.log(sheet_books[0]['gsx$title']['$t']);
	
	sheet_books.forEach(function (value, i) {
    console.log('%d: %s', i, value);
	*/
	
	sheet_books.forEach( (value) => {
		var lang =  value['gsx$title']['$t'].split('_')[0];
		var thumbnailContainer = document.createElement('div');
		$(thumbnailContainer).addClass('col-md-4 col-xs-12 item ' + lang + '_');
		var pdfPopAnchorContainer = document.createElement('div');
		$(pdfPopAnchorContainer).addClass('projects-grid this-ts');
		var pdfPopAnchor = document.createElement('a');
		$(pdfPopAnchor).attr('href', '#' + value['gsx$title']['$t']);
		var pdfPop = document.createElement('div');
		$(pdfPop).addClass('mfp-hide pdf-popup').attr('id', value['gsx$title']['$t']);
		var canvasObjContainer = document.createElement('div');
		$(canvasObjContainer).attr('id', 'canvas_container');
		var canvasObj = document.createElement('canvas');
		//$(canvasObj).attr('id', 'pdf_renderer');
		
		
		var navNextObj = document.createElement('div');
		$(navNextObj).addClass('navnav nnex');
		
		var navNextObjN = document.createElement('span');
		$(navNextObjN).addClass('garamontOPEN-angleRight');
		
		
		var navPrevObj = document.createElement('div');
		$(navPrevObj).addClass('navnav ppre');
		
		var navPrevObjP = document.createElement('span');
		$(navPrevObjP).addClass('garamontOPEN-angleLeft');
		
		
		
		var hoverContainer = document.createElement('div');
		$(hoverContainer).addClass('hovereffect');	
		var hoverImage = document.createElement('img');
		$(hoverImage).addClass('img-responsive').attr('alt','imageportofolio').attr('src','img/projects/img1.jpg');
		var overlay = document.createElement('div');
		$(overlay).addClass('overlay');
		var magnifierIconContainer = document.createElement('div');
		var magnifierIcon = document.createElement('i');
		$(magnifierIcon).addClass('garamontOPEN-uniE96B');
		
		$(magnifierIconContainer).append(magnifierIcon);
		$(overlay).append(magnifierIconContainer);
		$(hoverContainer).append(hoverImage);
		$(hoverContainer).append(overlay);
		$(canvasObjContainer).append(canvasObj);
		
		$(navNextObj).append(navNextObjN);
		$(canvasObjContainer).append(navNextObj);
		
		$(navPrevObj).append(navPrevObjP);
		$(canvasObjContainer).append(navPrevObj);
		
		
		$(pdfPop).append(canvasObjContainer);
		$(pdfPopAnchor).append(pdfPop);
		$(pdfPopAnchor).append(hoverContainer);
		$(pdfPopAnchorContainer).append(pdfPopAnchor);
		$(thumbnailContainer).append(pdfPopAnchorContainer);

		$('#projects-wrap').prepend(thumbnailContainer);				
	});

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var fileName = 'bg_file2.pdf';
	var pdfDoc = null,
		pageNum = 1,
		pageRendering = false,
		pageNumPending = null,
		scale = 1.1,
		//canvas = document.getElementById('pdf_renderer'),
		canvas = null,
		//ctx = canvas.getContext('2d');
		ctx = "";

	function renderPage(num) {
		pageRendering = true;
		pdfDoc.getPage(num).then(function(page) {
			var viewport = page.getViewport(scale);
			canvas.height = viewport.height;
			canvas.width = viewport.width;
			ctx.canvas.height = viewport.height;
			ctx.canvas.width = viewport.width;
			console.log(ctx.canvas.width);
			var renderContext = {
				canvasContext: ctx,
				viewport: viewport
			};
			var renderTask = page.render(renderContext);
			renderTask.promise.then(function() {
				pageRendering = false;
				if (pageNumPending !== null) {
					renderPage(pageNumPending);
					pageNumPending = null;
				}
			});
		});
	 // document.getElementById('current_page').textContent = num;
	}
	function queueRenderPage(num) {
		if (pageRendering) {
			pageNumPending = num;
		} else {
			renderPage(num);
		}
	}	
	function onPrevPage() {
		if (pageNum <= 1) {
			return;
		}
		pageNum--;
		queueRenderPage(pageNum);
		playAudio();
	}
	function onNextPage() {
	  if (pageNum >= pdfDoc.numPages) {
		return;
	  }
	  pageNum++;
	  queueRenderPage(pageNum);
	  playAudio();
	}
	function getPDF(){
		pdfjsLib.getDocument('docs/books/' + fileName + '.pdf').promise.then(function(pdfDoc_) {
			pdfDoc = pdfDoc_;
			//document.getElementById('current_page').textContent = pdfDoc.numPages;
			pageNum = 1;
			renderPage(pageNum);
		});
	}
	function playAudio(){
		$('audio').each(function(){
			this.pause();
		});
		var url = 'docs/books/' + fileName.split('.')[0] + '/' + fileName.split('.')[0] + '_' + pageNum  + '.mp3';
		$('.speech').attr('src', url).get(0).play();
	}
	
	$('.navnav.ppre').on('click', onPrevPage);
	$('.navnav.nnex').on('click', onNextPage);
	
	
$('.this-ts').magnificPopup({
                delegate: 'a',
                type: 'inline',
                mainClass: 'this-tsa',
                closeOnContentClick: false,
                closeBtnInside: false,
				midClick: true,
				callbacks: {
					open: function(e) {
						fileName = this.currItem.src.substring(1);
						canvas = $('#' + fileName + ' > div > canvas');
						//console.log(canvas);
						ctx = canvas[0].getContext('2d');
						getPDF();
						//playAudio();

					},
					close: function() {
						$('audio').each(function(){
							this.pause();
							});
					}
				}
				});
	
}
populateBooks();


   
   function sectionFour() {
	   var newDivElement111 = document.createElement('div');
		$(newDivElement111).addClass('container');
		var newDivElement222 = document.createElement('div');
		$(newDivElement222).addClass('row');
		
		var newDivElement333 = document.createElement('div');
		$(newDivElement333).addClass('col-md-12')
		var newDivElement444 = document.createElement('h2');
		$(newDivElement444).addClass('devider-sub').html($(sheet4)[0]['gsx$title']['$t']);
		$(newDivElement444).addClass('devider-sub')
		var newDivElement555 = document.createElement('h3');
		$(newDivElement555).addClass('devider-heading').html($(sheet4)[0]['gsx$text']['$t']);
		
		
		$(newDivElement333).append(newDivElement444);
		$(newDivElement333).append(newDivElement555);
		$(newDivElement333).append('<div class="space-double"></div>');
		$(newDivElement222).append(newDivElement333);
		
		
		for (i = 1; i < sheet4.length; i++) {
			var newDivElement = document.createElement('div');
			$(newDivElement).addClass('col-md-3');
			var newDivElement1 = document.createElement('div');
			$(newDivElement1).addClass('wrap-price onStep animated fadeInUp').attr("data-animation","fadeInUp").attr("data-time",300 * i);
			var newDivElement12 = document.createElement('div');
			$(newDivElement12).addClass('price').addClass($(sheet4)[i]['gsx$flag']['$t']);
			var newDivElement123 = document.createElement('div');
			$(newDivElement123).addClass('level-class').html($(sheet4)[i]['gsx$title']['$t']);
		
			$(newDivElement1).append(newDivElement12);
			$(newDivElement1).append(newDivElement123);
			$(newDivElement1).append($(sheet4)[i]['gsx$text']['$t']);
			$(newDivElement).append(newDivElement1);

			if( i % 4 == 0 )
			{
				$(newDivElement222).append('<div class="col-md-2"></div>');
			}
			$(newDivElement222).append(newDivElement);
		}
 
 
 $(newDivElement111).append(newDivElement222);
 $('#price').append(newDivElement111);
}

sectionFour();





 /*
function sectionFive() {
 var newDiv = document.createElement('div');
 $(newDiv).addClass('container justify-content-center');
 var section5H2 = document.createElement('h2');
 $(section5H2).addClass('mbr-fonts-style mbr-section-title align-center display-2').attr('id', 's5_' + currlang + '-h2').html($(sheet5)[0]['gsx$title']['$t']);
 var section5H3 = document.createElement('h3');
 $(section5H3).addClass('mbr-fonts-style mbr-section-subtitle align-center mbr-light pt-3 display-5').attr('id', 's5_' + currlang + '-h3').html($(sheet5)[0]['gsx$text']['$t']);
 var newDivContent = document.createElement('div');
 $(newDivContent).addClass('media-container-row justify-content-center align-items-start main-wrapper').attr('id', 's5_' + currlang + '-row');
 for (i = 1; i < sheet5.length; i++) {
  var newDivElement = document.createElement('div');
  $(newDivElement).addClass('icon-main col-lg-3 col-md-6 col-12 without-before contBox').attr('id', 's5_' + currlang + '-' + i);;
  $(newDivElement).html('<div class="process-icon">' + '<div class="wrapper-without-before">' + '<span class="icon-container">' + '<a href="' + $(sheet5)[i]['gsx$link']['$t'] + '">' + '<span class="' + $(sheet5)[i]['gsx$icon']['$t'] + ' icon-wrapper" media-simple="true"></span></a>' + '<span class="icon-number mbr-fonts-style display-7" style="background-color: #010f2d;">' + $(sheet5)[i]['gsx$badge']['$t'] + '</span>' + '</span>' + '</div>' + '<h4 class="subicon-title mbr-fonts-style display-5">' + $(sheet5)[i]['gsx$title']['$t'] + '</h4>' + '<p class="subicon-text mbr-fonts-style display-7">' + $(sheet5)[i]['gsx$text']['$t'] + '</p><a class="text-ptimary" href="' + $(sheet5)[i]['gsx$link']['$t'] + '"> Learn more</a>' + '</div>');
  $(newDivContent).append(newDivElement);
 }
 $(newDiv).append(section5H2);
 $(newDiv).append('<div class="underline align-center"><div class="line"></div></div>');
 $(newDiv).append(section5H3);
 $(newDiv).append(newDivContent);
 $('.cid-section-5').append(newDiv);
}
   

 */  
   

   /*
	
var sheetsList = [
 []
];
var rowID = '';
var theRange = '';
var sheetName = "";
var sheetsList = {
 s1_en: '1809525343',
 s2_en: '1164822323',
 s3_en: '0',
 s4_en: '1303419472',
 s5_en: '1255279082',
 s6_en: '1310432640',
 s1_bg: '786057320',
 s2_bg: '1417721967',
 s3_bg: '1976733470',
 s4_bg: '1107410630',
 s5_bg: '1317654258',
 s6_bg: '1259891342',
 s1_es: '1814457714',
 s2_es: '2135666804',
 s3_es: '1908330436',
 s4_es: '1857460671',
 s5_es: '606418550',
 s6_es: '1776312134',
 s1_pl: '2144136291',
 s2_pl: '553359725',
 s3_pl: '879562198',
 s4_pl: '464999966',
 s5_pl: '1878315391',
 s6_pl: '432479194',
 s1_tr: '476412116',
 s2_tr: '573699918',
 s3_tr: '1961009776',
 s4_tr: '1709663968',
 s5_tr: '696333165',
 s6_tr: '1018134277',
};
var iconlist = ['garamont-uniE900', 'garamont-uniE901', 'garamont-uniE902', 'garamont-uniE903', 'garamont-uniE904', 'garamont-uniE905', 'garamont-uniE906', 'garamont-uniE907', 'garamont-uniE908', 'garamont-uniE909', 'garamont-uniE90A', 'garamont-uniE90B', 'garamont-uniE90D', 'garamont-uniE90F', 'garamont-uniE910', 'garamont-uniE911', 'garamont-uniE912', 'garamont-uniE913', 'garamont-uniE914', 'garamont-uniE915', 'garamont-uniE916', 'garamont-uniE917', 'garamont-uniE918', 'garamont-uniE919', 'garamont-uniE91A', 'garamont-uniE91B', 'garamont-uniE91C', 'garamont-uniE91D', 'garamont-uniE91E', 'garamont-uniE91F', 'garamont-uniE920', 'garamont-uniE921', 'garamont-uniE922', 'garamont-uniE923', 'garamont-uniE924', 'garamont-uniE925', 'garamont-uniE926', 'garamont-uniE927', 'garamont-uniE928', 'garamont-uniE929', 'garamont-uniE92A', 'garamont-uniE92B', 'garamont-uniE92C', 'garamont-uniE92D', 'garamont-uniE92E', 'garamont-uniE92F', 'garamont-uniE930', 'garamont-uniE931', 'garamont-uniE932', 'garamont-uniE934', 'garamont-uniE937', 'garamont-uniE93A', 'garamont-uniE93B', 'garamont-uniE93C', 'garamont-uniE93E', 'garamont-uniE93F', 'garamont-uniE940', 'garamont-uniE941', 'garamont-uniE942', 'garamont-uniE943', 'garamont-uniE944', 'garamont-uniE945', 'garamont-uniE946', 'garamont-uniE947', 'garamont-uniE948', 'garamont-uniE949', 'garamont-uniE94A', 'garamont-uniE94B', 'garamont-uniE94C', 'garamont-uniE94D', 'garamont-uniE94E', 'garamont-uniE94F', 'garamont-uniE950', 'garamont-uniE951', 'garamont-uniE952', 'garamont-uniE953', 'garamont-uniE954', 'garamont-uniE955', 'garamont-uniE956', 'garamont-uniE957', 'garamont-uniE958', 'garamont-uniE959', 'garamont-uniE95A', 'garamont-uniE95B', 'garamont-uniE95C', 'garamont-uniE95D', 'garamont-uniE95E', 'garamont-uniE95F', 'garamont-uniE960', 'garamont-uniE961', 'garamont-uniE962', 'garamont-uniE963', 'garamont-uniE964', 'garamont-uniE965', 'garamont-uniE966', 'garamont-uniE967', 'garamont-uniE968', 'garamont-uniE96A', 'garamont-uniE96B', 'garamont-uniE96C', 'garamont-uniE96D', 'garamont-uniE96E', 'garamont-uniE96F', 'garamont-uniE970', 'garamont-uniE971', 'garamont-uniE972', 'garamont-uniE973', 'garamont-uniE974', 'garamont-uniE97F', 'garamont-uniE984', 'garamont-uniE985', 'garamont-uniE986', 'garamont-uniE987', 'garamont-uniE988', 'garamont-uniE989', 'garamont-uniE98A', 'garamont-uniE98B', 'garamont-uniE98C', 'garamont-uniE98D', 'garamont-uniE98E', 'garamont-uniE98F', 'garamont-uniE990', 'garamont-uniE991', 'garamont-uniE993', 'garamont-uniE994', 'garamont-uniE995'];
var option = '';
for (var i = 0; i < iconlist.length; i++) {
 option += '<option value="' + iconlist[i] + '">' + iconlist[i] + '</option>';
}
$('select[name=icons-id]').append(option);

function updateCellsEntries(data, contId, edit) {
 var vals = [
  []
 ];
 for (var i = 0; i < data.elements.length; i++) {
  var item = data.elements.item(i);
  if (item.type == 'textarea' || item.type == 'text' || item.type == 'hidden') {
   vals[0].push(data.elements.item(i).value);
  }
  if (item.type == 'select-one') {
   vals[0].push('mbr-iconfont ' + data.elements.item(i).value);
  }
 }
 var valueRangeBody = {
  "values": vals
 };
 gapi.client.sheets.spreadsheets.values.update({
  spreadsheetId: '1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo',
  range: theRange,
  valueInputOption: 'RAW',
  resource: valueRangeBody
 }).then(function(response) {
  var result = response.result;
  if (response.statusText) {
   if (contId.split('-')[1] == 'h2') {
    document.getElementById(contId).firstChild.nodeValue = vals[0][2];
    document.getElementById(contId.split('-')[0] + '-h3').innerHTML = vals[0][3];
   } else {
    if (edit) {
     $('#' + contId).find('.mbr-iconfont').eq(2).attr('class', vals[0][1]);
     if (theRange[1] == 5) {
      $('#' + contId).find('.mbr-iconfont').eq(2).addClass('icon-wrapper');
     }
    } else {
     $('#' + contId).find('.mbr-iconfont').eq(0).attr('class', vals[0][1]);
     if (theRange[1] == 5) {
      $('#' + contId).find('.mbr-iconfont').eq(0).addClass('icon-wrapper');
     }
    }
    $('#' + contId + ' h4').html(vals[0][2]);
    $('#' + contId + ' p').html(vals[0][3]);
   }
  }
 }, function(reason) {
  console.error('error: ' + reason.result.error.message);
 });
}

function deleteCellsEntries(sheetName, rowID) {
 gapi.client.sheets.spreadsheets.batchUpdate({
  spreadsheetId: '1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo',
  resource: {
   "requests": [{
    "deleteRange": {
     "range": {
      "sheetId": sheetsList[sheetName],
      "startRowIndex": rowID + 1,
      "endRowIndex": rowID + 2
     },
     "shiftDimension": "ROWS"
    }
   }]
  }
 }).then((response) => {
  $('#' + sheetName + '-' + parseInt(rowID)).remove();
 });
}
var editButton = '<span class="mbr-iconfont mbri-edit" media-simple="true" style="position: absolute;top: -40px; right: 60px;color: #fff;margin: 4px 0;text-align: center;vertical-align: middle;background: #0097e9;padding: 6px;font-size: 20px;cursor: pointer;font-weight: bold;box-shadow: 2px 2px 6px black;" onclick="updateCellsEntries(document.getElementById("update-form-s3-contBox"), this);return false;"></span>';
var deleteButton = '<span class="mbr-iconfont mbri-close" media-simple="true" style="position: absolute;top: -40px;right: 20px;color: #fff;margin: 4px 0;text-align: center;vertical-align: middle;background: red;padding: 6px;font-size: 20px;cursor: pointer;font-weight: bold;box-shadow: 2px 2px 6px black;"></span>';
var plusButtonS3 = '<div class="col-md-6 row-item col-lg-3 contBox" id="s3-plus"><span media-simple="true" style="color: #fff;margin: 4px 0;text-align: center;vertical-align: middle;background: #5bbd00;padding: 6px;font-size: 20px;cursor: pointer;font-weight: bold;box-shadow: 2px 2px 6px black;" class="mbr-iconfont mbri-plus"></span></div>';
var plusButtonS5 = '<div class="col-md-6 row-item col-lg-3 contBox" id="s5-plus"><span media-simple="true" style="color: #fff;margin: 4px 0;text-align: center;vertical-align: middle;background: #5bbd00;padding: 6px;font-size: 20px;cursor: pointer;font-weight: bold;box-shadow: 2px 2px 6px black;" class="mbr-iconfont mbri-plus"></span></div>';
var editRows = document.createElement('div');
$(editRows).css('height', '40px').css('position', 'absolute').css('top', '-40px').css('right', '0px');
$(editRows).append(deleteButton).append(editButton);
$('.cid-section-3 div.contBox').prepend(editButton).prepend(deleteButton);
$('.cid-section-3 h2').append(editButton);
$('#s3_' + currlang + '-row').append(plusButtonS3)
$('.cid-section-5 div.contBox').prepend(editButton).prepend(deleteButton);
$('.cid-section-5 h2').append(editButton);
if ($('#s5_' + currlang + '-row').children().length < 5) {
 $('#s5_' + currlang + '-row').append(plusButtonS5);
}
$('.mbri-edit').click(function(e) {
 var isS3 = $(this).closest("section[class^='cid-section']").hasClass('cid-section-3');
 var dialogForm = ""
 if (isS3) {
  dialogForm = "#dialog-s3-contBox";
 } else {
  dialogForm = "#dialog-s5-contBox";
 }
 if ($(this).parent().hasClass('contBox')) {
  var contId = $(this).closest('.contBox').attr('id');
  var pivot = $(this).closest('.contBox').attr('id').split('-');
  sheetName = pivot[0];
  rowID = pivot[1];
  $(dialogForm + ' form input[name=entryId]').val(rowID);
  var iconSelect = $(this).closest('.contBox').find('.mbr-iconfont').last().prop('className').split(' ')[1];
  $(dialogForm + ' form select').show();
  $(dialogForm + ' form select[name=icons-id] option').removeAttr('selected');
  $(dialogForm + ' form select[name=icons-id] option[value=' + iconSelect + ']').attr('selected', 'selected');
  $(dialogForm + ' form input[name=entryBadge]').val($(this).closest('.contBox').find('.icon-number').text());
  $(dialogForm + ' form input[name=entryTitle]').val($(this).closest('.contBox').find('h4').text());
  $(dialogForm + ' form input[name=entryLink]').val($(this).closest('.contBox').find('a').last().prop('href'));
  $(dialogForm + ' form textarea').val($(this).closest('.contBox').find('p').text());
  rowID = parseInt(rowID) + 2;
  theRange = sheetName + '!A' + rowID + ':F';
 } else {
  var contId = $(this).parent().attr('id');
  $(dialogForm + ' form select').hide();
  $(dialogForm + ' form input[type=text]').val($(this).parent().parent().find('h2').text());
  $(dialogForm + ' form input[type=text]').val($(this).parent().parent().find('h2').text());
  $(dialogForm + ' form textarea').val($(this).parent().parent().find('h3').text());
  var pivot = $(this).parent().attr('id').split('-');
  sheetName = pivot[0];
  theRange = sheetName + '!A2:F';
 }
 $(dialogForm).dialog({
  resizable: false,
  height: 400,
  width: 350,
  modal: true,
  buttons: {
   "Accept": function() {
    if (isS3) {
     updateCellsEntries(document.getElementById('update-form-s3-contBox'), contId, true);
    } else {
     updateCellsEntries(document.getElementById('update-form-s5-contBox'), contId, true);
    }
    $(this).dialog("close");
   },
   Cancel: function() {
    $(dialogForm + ' form').not(':button, :submit, :reset, :hidden').val('').prop('checked', false).prop('selected', false);
    $(this).dialog("close");
   }
  },
  close: function() {
   $(dialogForm + ' form').not(':button, :submit, :reset, :hidden').val('').prop('checked', false).prop('selected', false);
   $(this).dialog("close");
  }
 });
});
$('.mbri-close').click(function(e) {
 var pivot = $(this).closest('.contBox').attr('id').split('-');
 sheetName = pivot[0];
 rowID = pivot[1];
 rowID = parseInt(rowID);
 $("#dialog-confirm").dialog({
  resizable: false,
  height: "auto",
  width: 400,
  modal: true,
  buttons: {
   "Delete": function() {
    deleteCellsEntries(sheetName, rowID);
    $(this).dialog("close");
   },
   Cancel: function() {
    $(this).dialog("close");
   }
  }
 });
});
$('.mbri-plus').click(function(e) {
 var isS3 = $(this).closest("section[class^='cid-section']").hasClass('cid-section-3');
 var dialogForm = ""
 if (isS3) {
  dialogForm = "#dialog-s3-contBox";
 } else {
  dialogForm = "#dialog-s5-contBox";
 }
 var newId = parseInt($(this).parent().prev().attr('id').split('-')[1]) + 1;
 var sheetName = $(this).parent().prev().attr('id').split('-')[0];
 var pivot = $(this).closest('.contBox').attr('id').split('-');
 sheetName = pivot[0];
 var rowID = pivot[1];
 rowID = parseInt(rowID);
 theRange = sheetName + '!A' + (newId + 2) + ':F';
 $(dialogForm).dialog({
  resizable: false,
  height: "auto",
  width: 400,
  modal: true,
  buttons: {
   "Accept": function() {
    var cloneNode = $('#' + sheetName + '-row').children().first().clone().attr('id', sheetName + '-' + newId);
    $(cloneNode).find('.mbri-close').remove();
    $(cloneNode).find('.mbri-edit').remove();
    $('#' + sheetName + '-row').children().last().before(cloneNode);
    $(dialogForm + ' form input[name=entryId]').val(newId);
    var newContId = sheetName + '-' + newId;
    if (isS3) {
     updateCellsEntries(document.getElementById('update-form-s3-contBox'), newContId, false);
    } else {
     updateCellsEntries(document.getElementById('update-form-s5-contBox'), newContId, false);
    }
    $(this).dialog("close");
   },
   Cancel: function() {
    $(this).dialog("close");
   }
  }
 });
});
(function($) {})(jQuery);
var switchlang = false;
var currlang = "en";
var mainLogo = "";
var sheet1, sheet2, sheet3, sheet4, sheet5, sheet6 = "";
var sheets_bg.sheet1, sheets_bg.sheet2, sheets_bg.sheet3, sheets_bg.sheet4, sheets_bg.sheet5, sheets_bg.sheet6 = "";
var sheets_es.sheet1, sheets_es.sheet2, sheets_es.sheet3, sheets_es.sheet4, sheets_es.sheet5, sheets_es.sheet6 = "";
var sheets_gb.sheet1, sheets_gb.sheet2, sheets_gb.sheet3, sheets_gb.sheet4, sheets_gb.sheet5, sheets_gb.sheet6 = "";
var sheets_tr.sheet1, sheets_tr.sheet2, sheets_tr.sheet3, sheets_tr.sheet4, sheets_tr.sheet5, sheets_tr.sheet6 = "";
var sheets_pl.sheet1, sheets_pl.sheet2, sheets_pl.sheet3, sheets_pl.sheet4, sheets_pl.sheet5, sheets_pl.sheet6 = "";
mainLogo = $.parseJSON($.ajax({
 url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/1/public/values?alt=json",
 dataType: "json",
 async: false
}).responseText).feed.entry;

function langFetch(lang) {
 $('.langSelect').show();
 $('#navbarSupportedContent > ul').remove();
 $('section.cid-section-3 > div').remove();
 $('.cid-section-4 > div').remove();
 $('.cid-section-5 > div').remove();
 $('section.cid-section-6 #sheet6-03 > div#sheet6-03-01').remove();
 switch (lang) {
  case 2:
   $('.garamont-bulgaria.langSelect').hide();
   sheets_bg.sheet1 ? '' : sheets_bg.sheet1 = $.parseJSON($.ajax({
    url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/8/public/values?alt=json",
    dataType: "json",
    async: false
   }).responseText).feed.entry;
   sheet1 = sheets_bg.sheet1;
   sheets_bg.sheet2 ? '' : sheets_bg.sheet2 = $.parseJSON($.ajax({
    url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/9/public/values?alt=json",
    dataType: "json",
    async: false
   }).responseText).feed.entry;
   sheet2 = sheets_bg.sheet2;
   sheets_bg.sheet3 ? '' : sheets_bg.sheet3 = $.parseJSON($.ajax({
    url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/10/public/values?alt=json",
    dataType: "json",
    async: false
   }).responseText).feed.entry;
   sheet3 = sheets_bg.sheet3;
   sheets_bg.sheet4 ? '' : sheets_bg.sheet4 = $.parseJSON($.ajax({
    url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/11/public/values?alt=json",
    dataType: "json",
    async: false
   }).responseText).feed.entry;
   sheet4 = sheets_bg.sheet4;
   sheets_bg.sheet5 ? '' : sheets_bg.sheet5 = $.parseJSON($.ajax({
    url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/12/public/values?alt=json",
    dataType: "json",
    async: false
   }).responseText).feed.entry;
   sheet5 = sheets_bg.sheet5;
   sheets_bg.sheet6 ? '' : sheets_bg.sheet6 = $.parseJSON($.ajax({
    url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/13/public/values?alt=json",
    dataType: "json",
    async: false
   }).responseText).feed.entry;
   sheet6 = sheets_bg.sheet6;
   currlang = "bg";
   break;
  case 3:
   $('.garamont-spain.langSelect').hide();
   sheets_es.sheet1 ? '' : sheets_es.sheet1 = $.parseJSON($.ajax({
    url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/14/public/values?alt=json",
    dataType: "json",
    async: false
   }).responseText).feed.entry;
   sheet1 = sheets_es.sheet1;
   sheets_es.sheet2 ? '' : sheets_es.sheet2 = $.parseJSON($.ajax({
    url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/15/public/values?alt=json",
    dataType: "json",
    async: false
   }).responseText).feed.entry;
   sheet2 = sheets_es.sheet2;
   sheets_es.sheet3 ? '' : sheets_es.sheet3 = $.parseJSON($.ajax({
    url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/16/public/values?alt=json",
    dataType: "json",
    async: false
   }).responseText).feed.entry;
   sheet3 = sheets_es.sheet3;
   sheets_es.sheet4 ? '' : sheets_es.sheet4 = $.parseJSON($.ajax({
    url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/17/public/values?alt=json",
    dataType: "json",
    async: false
   }).responseText).feed.entry;
   sheet4 = sheets_es.sheet4;
   sheets_es.sheet5 ? '' : sheets_es.sheet5 = $.parseJSON($.ajax({
    url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/18/public/values?alt=json",
    dataType: "json",
    async: false
   }).responseText).feed.entry;
   sheet5 = sheets_es.sheet5;
   sheets_es.sheet6 ? '' : sheets_es.sheet6 = $.parseJSON($.ajax({
    url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/19/public/values?alt=json",
    dataType: "json",
    async: false
   }).responseText).feed.entry
   sheet6 = sheets_es.sheet6;
   currlang = "es";
   break;
  case 4:
   $('.garamont-poland.langSelect').hide();
   sheets_pl.sheet1 ? '' : sheets_pl.sheet1 = $.parseJSON($.ajax({
    url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/20/public/values?alt=json",
    dataType: "json",
    async: false
   }).responseText).feed.entry;
   sheet1 = sheets_pl.sheet1;
   sheets_pl.sheet2 ? '' : sheets_pl.sheet2 = $.parseJSON($.ajax({
    url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/21/public/values?alt=json",
    dataType: "json",
    async: false
   }).responseText).feed.entry;
   sheet2 = sheets_pl.sheet2;
   sheets_pl.sheet3 ? '' : sheets_pl.sheet3 = $.parseJSON($.ajax({
    url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/22/public/values?alt=json",
    dataType: "json",
    async: false
   }).responseText).feed.entry;
   sheet3 = sheets_pl.sheet3;
   sheets_pl.sheet4 ? '' : sheets_pl.sheet4 = $.parseJSON($.ajax({
    url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/23/public/values?alt=json",
    dataType: "json",
    async: false
   }).responseText).feed.entry;
   sheet4 = sheets_pl.sheet4;
   sheets_pl.sheet5 ? '' : sheets_pl.sheet5 = $.parseJSON($.ajax({
    url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/24/public/values?alt=json",
    dataType: "json",
    async: false
   }).responseText).feed.entry;
   sheet5 = sheets_pl.sheet5;
   sheets_pl.sheet6 ? '' : sheets_pl.sheet6 = $.parseJSON($.ajax({
    url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/25/public/values?alt=json",
    dataType: "json",
    async: false
   }).responseText).feed.entry;
   sheet6 = sheets_pl.sheet6;
   currlang = "pl";
   break;
  case 5:
   $('.garamont-turkey.langSelect').hide();
   sheets_tr.sheet1 ? '' : sheets_tr.sheet1 = $.parseJSON($.ajax({
    url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/26/public/values?alt=json",
    dataType: "json",
    async: false
   }).responseText).feed.entry;
   sheet1 = sheets_tr.sheet1;
   sheets_tr.sheet2 ? '' : sheets_tr.sheet2 = $.parseJSON($.ajax({
    url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/27/public/values?alt=json",
    dataType: "json",
    async: false
   }).responseText).feed.entry;
   sheet2 = sheets_tr.sheet2;
   sheets_tr.sheet3 ? '' : sheets_tr.sheet3 = $.parseJSON($.ajax({
    url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/28/public/values?alt=json",
    dataType: "json",
    async: false
   }).responseText).feed.entry;
   sheet3 = sheets_tr.sheet3;
   sheets_tr.sheet4 ? '' : sheets_tr.sheet4 = $.parseJSON($.ajax({
    url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/29/public/values?alt=json",
    dataType: "json",
    async: false
   }).responseText).feed.entry;
   sheet4 = sheets_tr.sheet4;
   sheets_tr.sheet5 ? '' : sheets_tr.sheet5 = $.parseJSON($.ajax({
    url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/30/public/values?alt=json",
    dataType: "json",
    async: false
   }).responseText).feed.entry;
   sheet5 = sheets_tr.sheet5;
   sheets_tr.sheet6 ? '' : sheets_tr.sheet6 = $.parseJSON($.ajax({
    url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/31/public/values?alt=json",
    dataType: "json",
    async: false
   }).responseText).feed.entry;
   sheet6 = sheets_tr.sheet6;
   currlang = "tr";
   break;
  default:
   $('.garamont-united-kingdom.langSelect').hide();
   sheets_gb.sheet1 ? '' : sheets_gb.sheet1 = $.parseJSON($.ajax({
    url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/2/public/values?alt=json",
    dataType: "json",
    async: false
   }).responseText).feed.entry;
   sheet1 = sheets_gb.sheet1;
   sheets_gb.sheet2 ? '' : sheets_gb.sheet2 = $.parseJSON($.ajax({
    url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/3/public/values?alt=json",
    dataType: "json",
    async: false
   }).responseText).feed.entry;
   sheet2 = sheets_gb.sheet2;
   sheets_gb.sheet3 ? '' : sheets_gb.sheet3 = $.parseJSON($.ajax({
    url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/4/public/values?alt=json",
    dataType: "json",
    async: false
   }).responseText).feed.entry;
   sheet3 = sheets_gb.sheet3;
   sheets_gb.sheet4 ? '' : sheets_gb.sheet4 = $.parseJSON($.ajax({
    url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/5/public/values?alt=json",
    dataType: "json",
    async: false
   }).responseText).feed.entry;
   sheet4 = sheets_gb.sheet4;
   sheets_gb.sheet5 ? '' : sheets_gb.sheet5 = $.parseJSON($.ajax({
    url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/6/public/values?alt=json",
    dataType: "json",
    async: false
   }).responseText).feed.entry;
   sheet5 = sheets_gb.sheet5;
   sheets_gb.sheet6 ? '' : sheets_gb.sheet6 = $.parseJSON($.ajax({
    url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/7/public/values?alt=json",
    dataType: "json",
    async: false
   }).responseText).feed.entry;
   sheet6 = sheets_gb.sheet6;
   currlang = "en";
 }
 switchlang = true;
 populateNavigation();
 sectionThree();
 sectionFour();
 sectionFive();
 sectionSix();
 $('#fetchHandler').remove();
 updateSigninStatus(signedUser);
}

function populateLogoTop() {
 $('svg.logo-top').html($(mainLogo)[0]['gsx$value']['$t']);
}
populateLogoTop();

function sectionThree() {
 var newDiv = document.createElement('div');
 $(newDiv).addClass('container');
 var section3H2 = document.createElement('h2');
 $(section3H2).addClass('mbr-fonts-style mbr-section-title align-center display-2').attr('id', 's3_' + currlang + '-h2').html($(sheet3)[0]['gsx$title']['$t']);
 var section3H3 = document.createElement('h3');
 $(section3H3).addClass('mbr-fonts-style mbr-section-subtitle align-center mbr-light pt-3 display-5').attr('id', 's3_' + currlang + '-h3').html($(sheet3)[0]['gsx$text']['$t']);
 var newDivContent = document.createElement('div');
 $(newDivContent).addClass('row justify-content-center pt-5').attr('id', 's3_' + currlang + '-row');
 for (i = 1; i < sheet3.length; i++) {
  var newDivElement = document.createElement('div');
  $(newDivElement).addClass('col-md-6 row-item col-lg-3 contBox').attr('id', 's3_' + currlang + '-' + i);
  var newDivElement2 = document.createElement('div');
  $(newDivElement2).addClass('card-img pb-3');
  $(newDivElement2).html('<span class="' + $(sheet3)[i]['gsx$icon']['$t'] + '" media-simple="true"></span>');
  $(newDivElement).append(newDivElement2);
  $(newDivElement).append('<h4 class="mbr-fonts-style mbr-card-title display-5">' + $(sheet3)[i]['gsx$title']['$t'] + '</h4>');
  $(newDivElement).append('<p class="mbr-text mbr-fonts-style display-7">' + $(sheet3)[i]['gsx$text']['$t'] + '</p>');
  $(newDivContent).append(newDivElement);
 }
 $(newDiv).append(section3H2);
 $(newDiv).append('<div class="underline align-center"><div class="line"></div></div>');
 $(newDiv).append(section3H3);
 $(newDiv).append(newDivContent);
 $('section.cid-section-3').append(newDiv);
}

function sectionFour() {
 var newDiv = document.createElement('div');
 $(newDiv).addClass('container');
 var section4H2 = document.createElement('h2');
 $(section4H2).addClass('mbr-fonts-style mbr-section-title align-center display-2').attr('id', 's4_' + currlang + '-h2').html($(sheet4)[0]['gsx$title']['$t']);
 var section4H3 = document.createElement('h3');
 $(section4H3).addClass('mbr-fonts-style mbr-section-subtitle align-center mbr-light pt-3 display-5').attr('id', 's3_' + currlang + '-h3').html($(sheet4)[0]['gsx$text']['$t']);
 var newDivFluid = document.createElement('div');
 $(newDivFluid).addClass('container-fluid');
 var newDivFluid01 = document.createElement('div');
 $(newDivFluid01).addClass('row justify-content-center align-center');
 for (i = 1; i < sheet4.length; i++) {
  var newDivElement = document.createElement('div');
  $(newDivElement).addClass('col-md-3 col-sm-6 stats-item col-lg-3').attr('id', 's4_' + currlang + '-' + i);
  $(newDivElement).append($(sheet4)[i]['gsx$flag']['$t']);
  $(newDivElement).append('<h2 class="heading mbr-card-title mbr-fonts-style display-5">' + $(sheet4)[i]['gsx$title']['$t'] + '</h2>');
  $(newDivElement).append('<h3 class="count counter mbr-fonts-style mbr-bold display-2">' + $(sheet4)[i]['gsx$text']['$t'] + '</h3>');
  $(newDivFluid01).append(newDivElement);
 }
 $(newDivFluid).append(newDivFluid01);
 $('section.cid-section-4').append(newDivFluid);
}

function sectionFive() {
 var newDiv = document.createElement('div');
 $(newDiv).addClass('container justify-content-center');
 var section5H2 = document.createElement('h2');
 $(section5H2).addClass('mbr-fonts-style mbr-section-title align-center display-2').attr('id', 's5_' + currlang + '-h2').html($(sheet5)[0]['gsx$title']['$t']);
 var section5H3 = document.createElement('h3');
 $(section5H3).addClass('mbr-fonts-style mbr-section-subtitle align-center mbr-light pt-3 display-5').attr('id', 's5_' + currlang + '-h3').html($(sheet5)[0]['gsx$text']['$t']);
 var newDivContent = document.createElement('div');
 $(newDivContent).addClass('media-container-row justify-content-center align-items-start main-wrapper').attr('id', 's5_' + currlang + '-row');
 for (i = 1; i < sheet5.length; i++) {
  var newDivElement = document.createElement('div');
  $(newDivElement).addClass('icon-main col-lg-3 col-md-6 col-12 without-before contBox').attr('id', 's5_' + currlang + '-' + i);;
  $(newDivElement).html('<div class="process-icon">' + '<div class="wrapper-without-before">' + '<span class="icon-container">' + '<a href="' + $(sheet5)[i]['gsx$link']['$t'] + '">' + '<span class="' + $(sheet5)[i]['gsx$icon']['$t'] + ' icon-wrapper" media-simple="true"></span></a>' + '<span class="icon-number mbr-fonts-style display-7" style="background-color: #010f2d;">' + $(sheet5)[i]['gsx$badge']['$t'] + '</span>' + '</span>' + '</div>' + '<h4 class="subicon-title mbr-fonts-style display-5">' + $(sheet5)[i]['gsx$title']['$t'] + '</h4>' + '<p class="subicon-text mbr-fonts-style display-7">' + $(sheet5)[i]['gsx$text']['$t'] + '</p><a class="text-ptimary" href="' + $(sheet5)[i]['gsx$link']['$t'] + '"> Learn more</a>' + '</div>');
  $(newDivContent).append(newDivElement);
 }
 $(newDiv).append(section5H2);
 $(newDiv).append('<div class="underline align-center"><div class="line"></div></div>');
 $(newDiv).append(section5H3);
 $(newDiv).append(newDivContent);
 $('.cid-section-5').append(newDiv);
}

function sectionSix() {
 var newDiv = document.createElement('div');
 $(newDiv).addClass('wrap-block col-lg-6');
 $(newDiv).attr('id', 'sheet6-03-01');
 var section6H1 = document.createElement('h1');
 $(section6H1).addClass('mbr-section-title mrb-about-title mbr-fonts-style mbr-light display-2').attr('id', 's6_' + currlang + '-h1').html($(sheet6)[0]['gsx$title']['$t']);
 var section6H2 = document.createElement('h2');
 $(section6H2).addClass('mbr-section-subtitle mrb-about-sub mbr-fonts-style mbr-light display-5').attr('id', 's6_' + currlang + '-h2').html($(sheet6)[0]['gsx$subtitle']['$t']);
 var section6H3 = document.createElement('h3');
 $(section6H3).addClass('mbr-text mbr-fonts-style mbr-light display-7').attr('id', 's6_' + currlang + '-h3').html($(sheet6)[0]['gsx$text']['$t']);
 var newDivContent = document.createElement('div');
 $(newDivContent).addClass('mbr-list counter-container mbr-fonts-style display-7').attr('id', 's6_' + currlang + '-row');
 var newUlContent = document.createElement('ul');
 for (i = 1; i < sheet6.length; i++) {
  var newUlContentLi = document.createElement('li');
  $(newUlContentLi).html($(sheet6)[i]['gsx$text']['$t']);
  $(newUlContent).append(newUlContentLi);
 }
 $(newDivContent).append(newUlContent);
 $(newDiv).append(section6H1);
 $(newDiv).append(section6H2);
 $(newDiv).append(section6H3);
 $(newDiv).append(newDivContent);
 $('section.cid-section-6 #sheet6-03').prepend(newDiv);
}

function populateNavigation() {
 var newUl = document.createElement('ul');
 $(newUl).addClass('navbar-nav nav-dropdown').attr('data-app-modern-menu', 'true');
 $('#navbarSupportedContent').append(newUl);
 for (var i = 0; i < sheet1.length; i++) {
  if (sheet1[i]['gsx$parentid']['$t'] == 0) {
   var navItem = document.createElement('li');
   $(navItem).addClass('nav-item');
   $(navItem).attr('id', 'nav-item-' + sheet1[i]['gsx$id']['$t']);
   $(navItem).html('<a id="' + 'a-item-' + sheet1[i]['gsx$id']['$t'] + '" class="nav-link link  display-4" href="#" data-toggle="dropdown-submenu" aria-expanded="false">' + sheet1[i]['gsx$text']['$t'] + '</a> ');
   var navItemText = document.createElement('a');
   $('#navbarSupportedContent > ul').append(navItem);
   if (sheet1[i]['gsx$parentid']['$t'] == 0) {}
  } else {
   if ($('#nav-item-' + sheet1[i]['gsx$parentid']['$t']).is('li')) {
    $('#nav-item-' + sheet1[i]['gsx$parentid']['$t']).addClass('dropdown');
    $('#nav-item-' + sheet1[i]['gsx$parentid']['$t']).children('a').first().addClass('dropdown-toggle').attr('data-toggle', 'dropdown-submenu');
    if ($('#nav-item-' + sheet1[i]['gsx$parentid']['$t']).has('div').length == 0) {
     var divDrop = document.createElement('div');
     $(divDrop).addClass('dropdown-menu');
     $('#nav-item-' + sheet1[i]['gsx$parentid']['$t']).append(divDrop);
    }
    var divDropSet = $('#nav-item-' + sheet1[i]['gsx$parentid']['$t']).children('div').first();
    $(divDropSet).append('<a id="' + 'a-item-' + sheet1[i]['gsx$id']['$t'] + '" class="dropdown-item">' + sheet1[i]['gsx$text']['$t'] + '</a> ');
   }
   if (!$('#nav-item-' + sheet1[i]['gsx$parentid']['$t']).is('li')) {
    if ($('#a-item-' + sheet1[i]['gsx$parentid']['$t']).parent().has('div').length == 0) {
     var divDrop = document.createElement('div');
     $(divDrop).addClass('dropdown');
     $(divDrop).attr('id', "nav-item-" + sheet1[i]['gsx$parentid']['$t']);
     $('#a-item-' + sheet1[i]['gsx$parentid']['$t']).parent().append(divDrop);
     $('#a-item-' + sheet1[i]['gsx$parentid']['$t']).addClass('dropdown-item dropdown-toggle display-4').attr('data-toggle', 'dropdown-submenu').attr('aria-expanded', 'false');
     $('#nav-item-' + sheet1[i]['gsx$parentid']['$t']).html($('#a-item-' + sheet1[i]['gsx$parentid']['$t']));
     var divDropSubmenu = document.createElement('div');
     $(divDropSubmenu).addClass('dropdown-menu');
     $(divDrop).append(divDropSubmenu);
    }
    var divDropSet = $(divDrop).children('div').first();
    $(divDropSet).append('<a id="' + 'a-item-' + sheet1[i]['gsx$id']['$t'] + '" class="dropdown-item">' + sheet1[i]['gsx$text']['$t'] + '</a> ');
   }
  }
 }
}
if (!switchlang) {
 langFetch(1);
}
*/