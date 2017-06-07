// ==UserScript==
// @name        Remove image links from reddit
// @namespace   https://www.reddit.com
// @description Removes imgur, gyfcat and redd.it links from reddit
// @include     https://www.reddit.com/*
// @include     https://reddit.com/*
// @include     http://www.reddit.com/*
// @include     http://reddit.com/*
// @version     1
// @grant       none
// ==/UserScript==


(function() { 
    linklist = document.getElementsByClassName("link");
    for( var i=0; i < linklist.length; i++ ) {
	domain = linklist[i].getAttribute("data-domain");
	console.log(domain);
	if( domain.indexOf("redd.it") >= 0 ||
            domain.indexOf("imgur") >= 0 ||
            domain.indexOf("gfycat") >= 0 ||
            domain.indexOf("reddit") >= 0 ||
            domain.indexOf("giphy") >= 0
          ) {
              linklist[i].style.setProperty("display", "none", "important");
	  }
    }
})();
