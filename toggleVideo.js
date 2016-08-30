/* Content script to toggle Youtube video display.
	Runs when user clicks on add-on icon in toolbar.
*/

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	if (tab.url.match(/https:\/\/www.youtube.com\/watch?/)) {
		var videoOn = true;
		chrome.pageAction.show(tab.id);
	}
});

chrome.pageAction.onClicked.addListener(function() {
	//console.log('clicked');
	chrome.tabs.executeScript({
		file: "toggleOverlay.js"
	});
});