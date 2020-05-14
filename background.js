chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.executeScript({
    code: `
    	const filterTables=()=>{const e=document.getElementById("class-dashboard"),t=document.getElementById("filter");if(e&&!t){const t='<div class="m-3"><label for="filter" class="mr-3">Which table are you looking for?</label><input id="filter" type="text" name="table"></div>',l=e=>{const t=e.currentTarget.value,l=new RegExp(t,"i");document.querySelectorAll(".dashboard-students-overflow .flexbox").forEach(e=>{const t=e.querySelector(".student-table a").innerText;e.style.display=l.test(t)?"":"none"})};e.insertAdjacentHTML("afterbegin",t),document.getElementById("filter").addEventListener("keyup",l)}};filterTables();
    `
  });
});