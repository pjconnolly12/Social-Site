(function(){
	if (window.myBookmarklet !== undefined){
		myBookmarklet();
	}
	else {
		document.body.appendChild(document.createElement('script')).src='http://127.0.1:800/static/js/bookmarklet.js?r='+
		Math.floor(math.random()*99999999999999999999);
	}
})();