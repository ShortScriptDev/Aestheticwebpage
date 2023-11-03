/* ----------------------------------------------
 * Developed by: Devonna Howell
 * GitHub handle: https://github.com/ShortScriptDev
 * https://github.com/ShortScriptDev/Aestheticwebpage
 * ---------------------------------------------- */

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
// listeners for theme changing buttons 1 2 & 3
document.querySelector(".theme1").addEventListener("click", () => {
  let allStyles = document.querySelectorAll("style");
  allStyles.forEach(() => {
    document.querySelector("style").remove();
  });
  let addCss = document.createElement("style");
  addCss.innerHTML = '.theme-preview{background-image: url("Theme1.png")};';
  document.head.append(addCss);
});
document.querySelector(".theme2").addEventListener("click", () => {
  let allStyles = document.querySelectorAll("style");
  allStyles.forEach(() => {
    document.querySelector("style").remove();
  });
  let addCss = document.createElement("style");
  addCss.innerHTML = '.theme-preview{background-image: url("Theme2.png")};';
  document.head.append(addCss);
});
document.querySelector(".theme3").addEventListener("click", () => {
  let allStyles = document.querySelectorAll("style");
  allStyles.forEach(() => {
    document.querySelector("style").remove();
  });
  let addCss = document.createElement("style");
  addCss.innerHTML =
    '.theme-preview{background-image: url("Theme3.png")}.list-item{background-color:darkolivegreen;}.todosec2 p{color: darkgray;}.checkbox{border: 1px solid darkgray;}';
  document.head.append(addCss);
  document.head.append(addListColor);
});
// Use html2canavas to convert div into an image
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
// create a link for download to browser 
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
