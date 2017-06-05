chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "http://muele.mak.ac.ug/";
  chrome.tabs.create({ url: newURL });
});