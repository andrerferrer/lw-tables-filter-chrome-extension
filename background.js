chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.executeScript({
    code: `
    const classDashboard=document.getElementById("class-dashboard"),labelAndInput="<div class='m-3'><label for='filter'>Which table are you looking for?</label><input id='filter' type='text' name='table'></div>",filterTables=e=>{const t=e.currentTarget.value,l=new RegExp(t,"i");document.querySelectorAll(".dashboard-students-overflow .flexbox").forEach(e=>{const t=e.querySelector(".student-table a").innerText;e.style.display=l.test(t)?"":"none"})};classDashboard.insertAdjacentHTML("afterbegin",labelAndInput);const input=document.getElementById("filter");input.addEventListener("keyup",filterTables);
    `
  });
});