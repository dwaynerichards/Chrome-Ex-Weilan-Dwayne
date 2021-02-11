{
  let color = "#3aa757";

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log("Default background color set to %cgreen", `color: ${color}`);
    console.log("yoooooo");

    chrome.tabs.query({}, (tabs) => {
      for (let i = 0; i < tabs.length; i++) {
        if (tabs[i].audible) {
          console.log(["hi", tabs[i].id]);
          console.log(tabs[i])
          //tabs[i].highlighted = true;
          tabs[i].active = true;
         chrome.tabs.move(tabs[i].id,{index:-1})
          }
      }
    });
  });
chrome.tabs.onUpdated.addListener(()=>{
    chrome.tabs.query({}, (tabs) => {
      for (let i = 0; i < tabs.length; i++) {
        if (tabs[i].audible) {
          console.log(["hi", tabs[i].id]);
          
         chrome.tabs.move(tabs[i].id,{index:-1})
          }
      }
    })
  })

}
