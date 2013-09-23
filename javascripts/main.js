/**
 * Utility to wrap the different behaviors between W3C-compliant browsers
 * and IE when adding event handlers.
 *
 * @param {Object} element Object on which to attach the event listener.
 * @param {string} type A string representing the event type to listen for
 *     (e.g. load, click, etc.).
 * @param {function()} callback The function that receives the notification.
 */
function addListener(element, type, callback) {
 if (element.addEventListener) element.addEventListener(type, callback);
 else if (element.attachEvent) element.attachEvent('on' + type, callback);
}

addListener(window, 'load', function(){
	_gaq.push(['_trackPageview']);
    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++){
        addListener(links[i], 'click', function() {
          if (this.id == 'forkme_banner')
            _gaq.push(['_trackEvent',  'a', 'click', 'forkme-link']);
          else if (this.href.indexOf('zipball') > -1 || this.href.indexOf('tarball') > -1)
            _gaq.push(['_trackEvent', 'a', 'click', 'project-download-link']);
          else if (this.href.indexOf('.jar?raw=true') > -1)
            _gaq.push(['_trackEvent', 'a', 'click', 'Jar-download-link']);
          else if (this.href.indexOf('.epf?raw=true') > -1)
            _gaq.push(['_trackEvent', 'a', 'click', 'epfColorScheme-download-link']);
          else if (this.href.indexOf('.xml?raw=true') > -1)
            _gaq.push(['_trackEvent', 'click', 'xmlColorScheme-download-link']);
          else if (this.href.indexOf('http://eclipsecolorthemes.org/?view=theme&amp;id=20025') > -1)
            _gaq.push(['_trackEvent', 'click', 'externalColorScheme-download-link']);
        });
    }
});