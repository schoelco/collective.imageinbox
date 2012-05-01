var dummy = function($) {

function attachThickboxesToBodyImages() {  
  // attach thickbox to every image in body text
  // skip <img class="noThickBox" /> elements
  $('#content img').each(function(idx, el) {
    var img = $(el);
    
    // skipp noThickBox images
    if (img.hasClass('noThickBox')) {
      return;
    }
    
    // attach thickbox if image tag is wrapped by "a" tag with href ending
    // with '/image_fullscreen' url or there is 'image_' line inside image's tag
    // src attribute
    var a = img.parent('[href$=/image_view_fullscreen]');
    var src = img.attr('src');
    if (a.length > 0 || src.match(/\/image_.+$/) ||
        src.match(/\/\@\@images\/.+?\/.+$/)) {
      // add cursor pointer to standalone images
      if (a.length == 0) {
        img.css('cursor', 'pointer');
      }
      
      // finally attach overlay
      if (a.length > 0) {
        // field images on content types, e.g. News Item view
        a.prepOverlay({
           'subtype': 'image',
           'urlmatch': '/image_view_fullscreen$',
           'urlreplace': ''
          });
      } else if (src.match(/\/\@\@images\/.+?\/.+$/)) {
        var match = src.match(/\/\@\@images\/(.+?)\/(.+)$/);
        // main content body images inserted via Kupu or TinyMCE editors
        img.prepOverlay({
            'subtype': 'image',
            'urlmatch': '/@@images/.+$',
            'urlreplace': '/'+match[1]
        });
      } else {
        // main content body images inserted via Kupu or TinyMCE editors
        img.prepOverlay({
            'subtype': 'image',
            'urlmatch': '/image_.+$',
            'urlreplace': ''
        });
      }
    }
  });
}

$(function() {
  attachThickboxesToBodyImages();
});

}(jQuery);

delete dummy;
