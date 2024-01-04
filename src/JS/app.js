/* ----------------------------------------------
 * Developed by: Devonna Howell
 * GitHub handle: https://github.com/ShortScriptDev
 * https://github.com/ShortScriptDev/Aestheticwebpage
 * ---------------------------------------------- */
import 'bootstrap';
let i = 0;

// Listener for add to list button
document.querySelector(".addbutton").addEventListener("click", () => {
  // variables to options when adding a task
  let urgencyType = document.querySelector(".todotype").value;
  let todo = document.querySelector(".todo").value;
  let date = document.querySelector(".tododate").value;
  // variables to lists when tasks are added & deleted
  let urgentlist = document.querySelector(".urgentlist");
  let lessUrgentList = document.querySelector(".lessurgent");
  // variables to preview lists in downloadable div
  let urgentPreview = document.querySelector(".urgent-preview");
  let lessUrgentPreview = document.querySelector(".lessurgent-preview");
  // variables to create elements
  let task = document.createElement("li");
  let listItem = document.createElement("p");
  // if statement to seprate task based on priority/urgency
  if (urgencyType === "Urgent") {
    // add classes and id's to the preview of lists and tasks lists
    listItem.setAttribute("class", "list-item");
    listItem.setAttribute("id", i);
    task.setAttribute("id", i);
    // add inner elements to innerhtml of preview & lists
    listItem.innerHTML = `<span class="checkbox"></span><span>${todo}</span><span>${date}</span>`;
    task.innerHTML = `<div class="listing">
        <div>${todo}</div>
        <div>${date}</div>
        <div><button class="delete" onclick="document.getElementById(${i}).remove(); document.getElementById(${i}).remove();" >delete</button></div></div>`;
    // add tasks to preview & modifying list
    urgentPreview.append(listItem);
    urgentlist.append(task);
    // Set options back to default
    document.querySelector(".todotype").value = "";
    document.querySelector(".todo").value = "";
    document.querySelector(".tododate").value = "";
    i++;
  } else {
    // add classes and id's to the preview of lists and tasks lists
    listItem.setAttribute("class", "list-item");
    listItem.setAttribute("id", i);
    task.setAttribute("id", i);
    // add inner elements to innerhtml of preview & lists
    listItem.innerHTML = `<span class="checkbox"></span><span>${todo}</span><span>${date}</span>`;
    task.innerHTML = `<div class="listing">
        <div>${todo}</div>
        <div>${date}</div>
        <div><button class="delete" onclick="document.getElementById(${i}).remove(); document.getElementById(${i}).remove();">delete</button></div>
        </div>`;
    //add tasks to preview & modifying list   
    lessUrgentPreview.append(listItem);
    lessUrgentList.append(task);
    // Set options back to default
    document.querySelector(".todotype").value = "";
    document.querySelector(".todo").value = "";
    document.querySelector(".tododate").value = "";
    i++;
  }
});
document.addEventListener("DOMContentLoaded", function() {
  const themePreview = document.querySelector(".theme-preview");
//default theme
  themePreview.classList.add("theme1");
});
// listeners for theme changing buttons 1 2 & 3
document.querySelector(".theme1").addEventListener("click", () => {
  const themePreview = document.querySelector(".theme-preview");
  themePreview.classList.remove("theme2", "theme3");
  themePreview.classList.add("theme1");

  const listitem = document.querySelector(".list-item");
  listitem.classList.remove("green");
  listitem.classList.add("tan");

  const todosec2 = document.querySelector(".choose");
  todosec2.classList.remove("darkgray");
  todosec2.classList.add("burgandy");

  const checkbox = document.querySelector(".checkbox");
  checkbox.classList.remove("border2");
  checkbox.classList.add("border1");
});
document.querySelector(".theme2").addEventListener("click", () => {
  const themePreview = document.querySelector(".theme-preview");
  themePreview.classList.remove("theme1", "theme3");
  themePreview.classList.add("theme2");

  const listitem = document.querySelector(".list-item");
  listitem.classList.remove("green");
  listitem.classList.add("tan");

  const todosec2 = document.querySelector(".choose");
  todosec2.classList.remove("darkgray");
  todosec2.classList.add("burgandy");

  const checkbox = document.querySelector(".checkbox");
  checkbox.classList.remove("border2");
  checkbox.classList.add("border1");
});
document.querySelector(".theme3").addEventListener("click", () => {
  const themePreview = document.querySelector(".theme-preview");
  themePreview.classList.remove("theme1", "theme2");
  themePreview.classList.add("theme3");

  const listitem = document.querySelector(".list-item");
  listitem.classList.remove("tan");
  listitem.classList.add("green");

  const todosec2 = document.querySelector(".choose");
  todosec2.classList.remove("burgandy");
  todosec2.classList.add("darkgray");

  const checkbox = document.querySelector(".checkbox");
  checkbox.classList.remove("border1");
  checkbox.classList.add("border2");
});
/*function takeshot() {
  let div = document.getElementById("photo");
  html2canvas(div, {
    allowTaint: true,
    backgroundColor: null,
    scrollX: 0,
    scrollY: -window.scrollY,
    scale: 1,
  }).then(function (canvas) {
    saveAs(canvas.toDataURL(), "ToDoList.png");
  });
}
// Use html2canavas to convert div into an image

// JS file (app.js)
window.takeshot = function() {
  let div = document.getElementById("photo");
  html2canvas(div, {
    allowTaint: true,
    backgroundColor: null,
    scrollX: 0,
    scrollY: -window.scrollY,
    scale: 1,
  }).then(function (canvas) {
    saveAs(canvas.toDataURL(), "ToDoList.png");
  });
};*/
function takeshot() {
  let div = document.getElementById("photo");
  html2canvas(div, {
    allowTaint: true,
    backgroundColor: null,
    scrollX: 0,
    scrollY: -window.scrollY,
    scale: 1,
  }).then(function (canvas) {
    saveAs(canvas.toDataURL(), "ToDoList.png");
  });
}
function saveAs(uri, filename) {
  var link = document.createElement("a");
  if (typeof link.download === "string") {
    link.href = uri;
    link.download = filename;

    //Firefox requires the link to be in the body
    document.body.appendChild(link);

    //simulate click
    link.click();

    //remove the link when done
    document.body.removeChild(link);
  } else {
    window.open(uri);
  }
}
document.getElementById("downloadButton").addEventListener("click", takeshot);
// create a link for download to browser 

