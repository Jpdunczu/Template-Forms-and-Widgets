"use strict"
var $ = function(id) {
    return document.getElementById(id);
};

window.onload = function() {
    var listNode = $("image_list"); // ul
    var captionNode = $("caption"); // h2
    var imageNode = $("main_image");    // main img
    
    var imageLinks = listNode.getElementsByTagName("a");
    
    var i, image, linkNode, link;
    for( i = 0; i < imageLinks.length; i++ ) {
        linkNode = imageLinks[i];
        
        // img preload
        image = new Image();
        image.src = linkNode.getAttribute("href");
        
        // handler
        linkNode.onclick = function(evt) {
            link = this;    // link that was clicked
            
            imageNode.src = link.getAttribute("href");
            captionNode.firstChild.nodeValue = link.getAttribute("title");
            
            if( !evt ) {
                evt = window.event;
            }
            if( evt.preventDefault ) {
                evt.preventDefault();
            } else {
                evt.returnFalse = false;
            }
        };
    }
    
    imageLinks[0].focus();
};


