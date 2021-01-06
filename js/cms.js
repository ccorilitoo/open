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
   
var currlang = '';  
var sheet1, sheet2, sheet3, sheet4, sheet5, sheet6 = "";
var sheets_bg = { sheet1: null, sheet2: null, sheet3: null, sheet4: null, sheet5: null, sheet6: null, sheet7: null, sheet8: null }
var sheets_es = { sheet1: null, sheet2: null, sheet3: null, sheet4: null, sheet5: null, sheet6: null, sheet7: null, sheet8: null }
var sheets_gb = { sheet1: null, sheet2: null, sheet3: null, sheet4: null, sheet5: null, sheet6: null, sheet7: null, sheet8: null }
var sheets_tr = { sheet1: null, sheet2: null, sheet3: null, sheet4: null, sheet5: null, sheet6: null, sheet7: null, sheet8: null }
var sheets_pl = { sheet1: null, sheet2: null, sheet3: null, sheet4: null, sheet5: null, sheet6: null, sheet7: null, sheet8: null }

var myState = {
        pdf: null,
        currentPage: 1,
        zoom: 1
    }
   
function langFetch(lang) {
	$('.flag-elemnt').show();
	$('.garamontOPEN-' + lang).hide();
	switch (lang) {
		case 'bulgaria':
			$('.garamontOPEN-bulgaria').hide();
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
			$('.garamontOPEN-spain').hide();
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
			$('.garamontOPEN-poland').hide();
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
			$('.garamontOPEN-turkey').hide();
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
			$('.garamontOPEN-united-kingdom').hide();
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
			var testVar = 4;
			sheets_gb.sheet3 ? '' : sheets_gb.sheet3 = $.parseJSON($.ajax({
				url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/"+testVar+"/public/values?alt=json",
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
			sheets_gb.sheet7 ? '' : sheets_gb.sheet7 = $.parseJSON($.ajax({
				url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/8/public/values?alt=json",
				dataType: "json",
				async: false
			}).responseText).feed.entry;
			sheet7 = sheets_gb.sheet7;
			sheets_gb.sheet8 ? '' : sheets_gb.sheet8 = $.parseJSON($.ajax({
				url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/9/public/values?alt=json",
				dataType: "json",
				async: false
			}).responseText).feed.entry;
			sheet8 = sheets_gb.sheet8;
			currlang = "en";
	}
	 populateAbout();
}
   
	langFetch('united-kingdom');
	
	
	function langPuull(langIndex,langVar){
		langVar.sheet1 = 
		
		
		langVar.sheet6 ? '' : langVar.sheet6 = $.parseJSON($.ajax({
				url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/7/public/values?alt=json",
				dataType: "json",
				async: false
			}).responseText).feed.entry;
	}
	
	
	
	
	jQuery('.flag-elemnt').on('click', function(e){
		var lang =  e.target.closest('div');
		lang =  $(lang).attr('class').split(/\s+/)[1].split('-')[1];
		langFetch(lang);
	});
   
   
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


function populateBooks(){
	var sheet_books = $.parseJSON($.ajax({
		url: "http://spreadsheets.google.com/feeds/list/1TuOaSTC09LTl8EetGfbRC1hzAnrW658iEWaZ_sLhfFo/34/public/values?alt=json",
		dataType: "json",
		async: false
	}).responseText).feed.entry;
	
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
		var zoomContainer = document.createElement('div');
		$(zoomContainer).attr('id', 'zoom_controls');
		var zoomContainerIn = document.createElement('button');
		$(zoomContainerIn).addClass('zoom_in').html('+');
		var zoomContainerOut = document.createElement('button');
		$(zoomContainerOut).addClass('zoom_out').html('-');		
		var hoverContainer = document.createElement('div');
		$(hoverContainer).addClass('hovereffect');	
		var hoverImage = document.createElement('img');
		$(hoverImage).addClass('img-responsive').attr('alt','imageportofolio').attr('src',value['gsx$image']['$t']);
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
		$(zoomContainer).append(zoomContainerIn);
		$(zoomContainer).append(zoomContainerOut);
		$(pdfPop).append(canvasObjContainer);
		$(pdfPop).append(zoomContainer);
		$(pdfPopAnchor).append(pdfPop);
		$(pdfPopAnchor).append(hoverContainer);
		$(pdfPopAnchorContainer).append(pdfPopAnchor);
		$(thumbnailContainer).append(pdfPopAnchorContainer);
		$('#projects-wrap').prepend(thumbnailContainer);				
	});
	
	var pdfDoc = null,
		pageNum = 1,
		pageRendering = false,
		pageNumPending = null,
		scale = 1,
		canvas = null,
		ctx = "";

	function renderPage(num) {
		pageRendering = true;
		pdfDoc.getPage(num).then(function(page) {
			var viewport = page.getViewport(scale);
			canvas.height = viewport.height;
			canvas.width = viewport.width;
			ctx.canvas.height = viewport.height;
			ctx.canvas.width = viewport.width;
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
			pageNum = 1;
			renderPage(pageNum);
		});
	}
	function playAudio(){
		$('.speech').each(function(){
			this.pause();
		});
		var url = 'docs/books/' + fileName.split('.')[0] + '/' + fileName.split('.')[0] + '_' + pageNum  + '.mp3';
		$('.speech').attr('src', url).get(0).play();
	}
	
	$('.navnav.ppre').on('click', onPrevPage);
	$('.navnav.nnex').on('click', onNextPage);
	
	function onZoomIn(){
		 scale += 0.5;
			renderPage(pageNum);
	}	
	function onZoomOut(){
		if(scale > 1){
				scale -= 0.5;
				renderPage(pageNum);
			}
	}
	$('.zoom_in').on('click', onZoomIn);
	$('.zoom_out').on('click', onZoomOut);
	
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
				ctx = canvas[0].getContext('2d');
				getPDF();
				playAudio();
			},
			close: function() {
				$('.speech').each(function(){
					this.pause();
					});
					scale = 1;
			}
		}
	});
	
}
populateBooks();
   
   function sectionSheet2() {
	   var newDivElement111 = document.createElement('div');
		$(newDivElement111).addClass('container');
		var newDivElement222 = document.createElement('div');
		$(newDivElement222).addClass('row');
		var newDivElement3333 = document.createElement('div');
		$(newDivElement3333).addClass('overlay-main v-align')
		var newDivElement333 = document.createElement('div');
		$(newDivElement333).addClass('col-md-12 col-xs-12');
		
		var newDivElement444 = document.createElement('h1');
		$(newDivElement444).addClass('onStep').html($(sheet2)[0]['gsx$focus']['$t']).attr("data-animation","fadeInUp").attr("data-time",$(sheet2)[0]['gsx$timer']['$t']);
		
		var newDivElement555 = document.createElement('div');
		$(newDivElement555).addClass('onStep').attr("data-animation","fadeInUp").attr("data-time",$(sheet2)[3]['gsx$timer']['$t']).attr("id","slidertext");
			
			
		var newDivElement666 = document.createElement('div');
		$(newDivElement666).addClass('btn-home onStep').attr("data-animation","fadeInUp").attr("data-time","800");
				
			
		var newDivElement777 = document.createElement('a');
		$(newDivElement777).addClass('scroll-link').attr("href",$(sheet2)[2]['gsx$timer']['$t']).html($(sheet2)[1]['gsx$focus']['$t']);
		
		$(newDivElement666).append(newDivElement777);
		
		for (i = 3; i < sheet2.length; i++) {
			var newDivElement = document.createElement('h3');
			$(newDivElement).addClass('main-text');
			var newDivElement1 = document.createElement('span');
			$(newDivElement1).addClass('color');
			$(newDivElement1).html($(sheet2)[i]['gsx$focus']['$t']);
			$(newDivElement).append($(sheet2)[i]['gsx$text']['$t'] + " ");
			$(newDivElement).append(newDivElement1);
	
			$(newDivElement555).append(newDivElement);
		} 
		$(newDivElement333).append(newDivElement444);
		$(newDivElement333).append(newDivElement555);
		$(newDivElement333).append(newDivElement666);
		$(newDivElement222).append(newDivElement3333);
		$(newDivElement3333).append(newDivElement333);
		
		$(newDivElement111).append(newDivElement222);
		$('#home').attr("data-image-src",$(sheet2)[2]['gsx$focus']['$t']);
		$('#home').append(newDivElement111);
}
sectionSheet2();


   function sectionFour() {
	   var newDivElement111 = document.createElement('div');
		$(newDivElement111).addClass('container');
		var newDivElement222 = document.createElement('div');
		$(newDivElement222).addClass('row');
		var newDivElement333 = document.createElement('div');
		$(newDivElement333).addClass('col-md-12');
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


   function sectionSheet6() {
	   var newDivElement1 = document.createElement('div');
		$(newDivElement1).addClass('container');
		var newDivElement2 = document.createElement('div');
		$(newDivElement2).addClass('row');
		var newDivElement3 = document.createElement('div');
		$(newDivElement3).addClass('owl-carousel').attr("id","owl-testimonial");


	sheet6.forEach((value) => {	
			var newDivElement4 = document.createElement('div');
			$(newDivElement4).addClass('item col-md-12');
			var newDivElement5 = document.createElement('blockquote');
			var newDivElement6 = document.createElement('h3');
			$(newDivElement6).html(value['gsx$title']['$t']);
			var newDivElement7 = document.createElement('p')
			$(newDivElement7).html(value['gsx$quote']['$t']);
			var newDivElement7 = document.createElement('p');
			$(newDivElement7).html(value['gsx$quote']['$t']);
			var newDivElement8 = document.createElement('small');
			$(newDivElement8).html(value['gsx$small']['$t']);
			var newDivElement9 = document.createElement('cite');
			$(newDivElement9).attr("title","Source Title").attr("class","color").html(value['gsx$small']['$t']);

			$(newDivElement8).append(newDivElement9);
			$(newDivElement5).append(newDivElement6);
			$(newDivElement5).append(newDivElement7);
			$(newDivElement5).append(newDivElement8);
			$(newDivElement4).append(newDivElement5);		
			$(newDivElement3).append(newDivElement4);
		});
		
		
		$(newDivElement2).append(newDivElement3);
		$(newDivElement1).append(newDivElement2);
		$('#testi').append(newDivElement1);
		
}
sectionSheet6();



   function sectionSheet7() {
	   var newDivElement1 = document.createElement('div');
		$(newDivElement1).addClass('container-fluid');
		var newDivElement2 = document.createElement('div');
		$(newDivElement2).addClass('row');
		var newDivElement3 = document.createElement('div');
		$(newDivElement3).addClass('col-md-6 p-90 onStep').attr("data-animation","fadeInLeft").attr("ata-time","0");
		var newDivElement4 = document.createElement('div');
		$(newDivElement4).addClass('sp-padding text-right');
		var newDivElement5 = document.createElement('h3');
		$(newDivElement5).addClass('pers-heading').html($(sheet7)[0]['gsx$heading']['$t']);
		var newDivElement6 = document.createElement('div');
		$(newDivElement6).addClass('personal');
		var newDivElement7 = document.createElement('h6');
		$(newDivElement7).addClass('name').html($(sheet7)[0]['gsx$name']['$t']);
		var newDivElement8 = document.createElement('span');
		$(newDivElement8).addClass('title').html($(sheet7)[0]['gsx$title']['$t']);
		var newDivElement9 = document.createElement('span');
		$(newDivElement9).addClass('rounded-img');
		var newDivElement10 = document.createElement('img');
		$(newDivElement10).attr("alt","imgpersonal").attr("src",$(sheet7)[0]['gsx$circleimage']['$t']);
		var newDivElement11 = document.createElement('p');
		$(newDivElement11).addClass("content-max").html($(sheet7)[0]['gsx$bio']['$t']);
		var newDivElement12 = document.createElement('div');$(sheet7)[0]['gsx$photo']['$t']
		$(newDivElement12).addClass("image-container col-md-6 onStep").attr("data-animation","fadeInRight").attr("data-time","100");
		
		$(newDivElement9).append(newDivElement10);
		$(newDivElement6).append(newDivElement7);
		$(newDivElement6).append(newDivElement8);
		$(newDivElement4).append(newDivElement5);
		$(newDivElement4).append(newDivElement6);
		$(newDivElement4).append(newDivElement9);
		$(newDivElement4).append(newDivElement11);
		$(newDivElement3).append(newDivElement4);
		$(newDivElement2).append(newDivElement3);
		$(newDivElement2).append(newDivElement12);
		$(newDivElement1).append(newDivElement2);
		$('#about-us-bg').attr("data-image-src",$(sheet7)[0]['gsx$photo']['$t']);
		$('#about-us-bg').append(newDivElement1);
		
}
sectionSheet7();


   function sectionSheet8() {
	   var newDivElement1 = document.createElement('div');
		$(newDivElement1).addClass('container');
		var newDivElement2 = document.createElement('div');
		$(newDivElement2).addClass('row');
		var newDivElement3 = document.createElement('div');
		$(newDivElement3).addClass('col-md-12');	
		var newDivElement4 = document.createElement('h2');
		$(newDivElement4).addClass('devider-sub').html($(sheet8)[0]['gsx$heading']['$t']);
		var newDivElement5 = document.createElement('h3');
		$(newDivElement5).addClass('devider-heading').html($(sheet8)[0]['gsx$subheading']['$t']);
		var newDivElement6 = document.createElement('div');
		$(newDivElement6).addClass('space-double');
		var newDivElement7 = document.createElement('div');
		$(newDivElement7).addClass('onStep').attr("data-animation","fadeInUp").attr("data-time","300");
		var newDivElement8 = document.createElement('div');
		$(newDivElement8).addClass('owl-carousel').attr("id","owl-team");


sheet8.forEach((value, key) => {
	if(key > 0){
	//console.log(value['gsx$title']['$t']);
	
		var newDivElement9 = document.createElement('div');
		$(newDivElement10).addClass('item');
			var newDivElement10 = document.createElement('div');
			$(newDivElement10).addClass('team');
			$(newDivElement10).css("background-image","url( https://drive.google.com/uc?export=view&id=" + value['gsx$url']['$t'].replace("https://drive.google.com/file/d/","").replace("/view?usp=sharing","") + "");
			var newDivElement11 = document.createElement('div');
			$(newDivElement11).addClass('hovereffect');
		
		if(value['gsx$type']['$t'] == "video"){
			//$(newDivElement10).css("background-image","url(" + value['gsx$background']['$t'] + ")");
			var newDivElement12 = document.createElement('video');
			$(newDivElement12).attr("controls","true");
			var newDivElement13 = document.createElement('source');
			$(newDivElement13).attr("src","https://drive.google.com/uc?export=download&id=" +  value['gsx$url']['$t'].replace('https://drive.google.com/file/d/', '').replace('/view?usp=sharing','') + "");
			var newDivElement14 = document.createElement('source');
			$(newDivElement14).attr("type","video/mp4");
			$(newDivElement13).append(newDivElement14);
			$(newDivElement12).append(newDivElement13);
		} else if (value['gsx$type']['$t'] == "image"){
			$(newDivElement10).css("background-size","contain");
		}
		
		var newDivElement16 = document.createElement('div');
		$(newDivElement16).addClass("overlay");
		var newDivElement17 = document.createElement('div');
		$(newDivElement17).addClass("content");
		var newDivElement18 = document.createElement('div');
		$(newDivElement18).addClass("heading").html( value['gsx$heading']['$t']);
		var newDivElement19 = document.createElement('span');
		$(newDivElement19).addClass("devider-recent");
		var newDivElement20 = document.createElement('div');
		$(newDivElement20).addClass("subheading").html( value['gsx$subheading']['$t']);
	

		$(newDivElement18).append(newDivElement19);
		$(newDivElement17).append(newDivElement18);
		$(newDivElement17).append(newDivElement20);
		$(newDivElement16).append(newDivElement17);
		
		if(value['gsx$type']['$t'] == "video"){
			$(newDivElement11).append(newDivElement12);
		}
		
		$(newDivElement11).append(newDivElement16);
		$(newDivElement10).append(newDivElement11);
		$(newDivElement9).append(newDivElement10);
		$(newDivElement8).append(newDivElement9);
		
	/*
		*/
	}
 });	
		$(newDivElement7).append(newDivElement8);
		
		$(newDivElement3).append(newDivElement4);
		$(newDivElement3).append(newDivElement5);
		
		$(newDivElement2).append(newDivElement3);
		$(newDivElement2).append(newDivElement6);
		$(newDivElement2).append(newDivElement7);
		$(newDivElement1).append(newDivElement2);
		
		$('#media-gallery').append(newDivElement1);
		/*
		*/
	
}
sectionSheet8();
