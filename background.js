{
  //listening for tab.audible ==> true
  //gitaccess to storage
  //get access to and grab tabs
  //check if audible method is acivated, (bolean)
  //if true highlist windows

  //chrome.browserAction.onClicked.addListener(function () {
  //console.log(chrome.tabs.Tab);
  //});

  let color = "#3aa757";

  chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log("Default background color set to %cgreen", `color: ${color}`);
    console.log("yoooooo");
    chrome.tabs.query({}, (tabs) => {
      for (let i = 0; i < tabs.length; i++) {
        if (tabs[i].audible) {
          console.log("hi", tabs[i]);
          //tabs[i].onhighlight
        }
      }
    });
  });
}
