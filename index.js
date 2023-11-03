//BY: DEVONNA HOWELL
let i = 0;
document.querySelector('.addbutton').addEventListener('click',()=>{
    let urgencyType = document.querySelector('.todotype').value;
    let todo = document.querySelector('.todo').value;
    let date = document.querySelector('.tododate').value;
    let urgentlist = document.querySelector('.urgentlist');
    let lessUrgentList = document.querySelector('.lessurgent');
    let urgentPreview = document.querySelector('.urgent-preview');
    let lessUrgentPreview = document.querySelector('.lessurgent-preview');
    let task = document.createElement('li');
    let listItem = document.createElement('p')
    if(urgencyType === 'Urgent'){
        listItem.setAttribute('class', 'list-item')
        listItem.setAttribute('id', i);
        task.setAttribute('id', i);
        listItem.innerHTML = `<span class="checkbox"></span><span>${todo}</span><span>${date}</span>`
        task.innerHTML = `<div class="listing">
        <div>${todo}</div>
        <div>${date}</div>
        <div>${urgencyType}</div>
        <div><button class="delete" onclick="document.getElementById(${i}).remove(); document.getElementById(${i}).remove();" >delete</button></div></div>`;
        urgentPreview.append(listItem);
        urgentlist.append(task);
        document.querySelector('.todotype').value = '';
        document.querySelector('.todo').value = '';
        document.querySelector('.tododate').value = '';
        i++;
    }else{
        listItem.setAttribute('class', 'list-item')
        listItem.setAttribute('id', i);
        task.setAttribute('id', i);
        listItem.innerHTML = `<span class="checkbox"></span><span>${todo}</span><span>${date}</span>`
        task.innerHTML = `<div class="listing">
        <div>${todo}</div>
        <div>${date}</div>
        <div>${urgencyType}</div>
        <div><button class="delete" onclick="document.getElementById(${i}).remove(); document.getElementById(${i}).remove();">delete</button></div>
        </div>`
        lessUrgentPreview.append(listItem);
        lessUrgentList.append(task);
        document.querySelector('.todotype').value = '';
        document.querySelector('.todo').value = '';
        document.querySelector('.tododate').value = '';
        i++;
    }
})
document.querySelector('.theme1').addEventListener('click',()=>{
    let addCss = document.createElement('style');
    addCss.innerHTML = '.theme-preview{background-image: url("Theme1.png")};';
    document.head.append(addCss);
})
document.querySelector('.theme2').addEventListener('click',()=>{
    let allStyles = document.querySelectorAll('style');
    allStyles.forEach(()=>{
        document.querySelector('style').remove();
    });
    let addCss = document.createElement('style');
    addCss.innerHTML = '.theme-preview{background-image: url("Theme2.png")};';
    document.head.append(addCss);
})
document.querySelector('.theme3').addEventListener('click',()=>{
    let addCss = document.createElement('style');
    addCss.innerHTML = '.theme-preview{background-image: url("Theme3.png")}.list-item{background-color:darkolivegreen;}.todosec2 p{color: darkgray;}.checkbox{border: 1px solid darkgray;}';
    document.head.append(addCss);    
    document.head.append(addListColor);

})
/*document.querySelector('.takepic').addEventListener('click',()=>{

    let div = document.getElementById('photo'); 
    html2canvas(div).then( 
        function (canvas) {  
            document.getElementById('output').appendChild(canvas); 
        }) 
        
    // Use the html2canvas 
    // function to take a screenshot 
    // and append it 
    // to the output div 
})*/
 // Define the function  
        // to screenshot the div 
function takeshot() { 
    let div = document.getElementById('photo'); 
    html2canvas(div, { allowTaint: true ,backgroundColor: null, scrollX: 0, scrollY: -window.scrollY , scale: 1}).then( 
    function (canvas) { 
        document.getElementById('output').prepend(canvas); 
        saveAs(canvas.toDataURL(), 'canvas.png');
    }) 
} 
function saveAs(uri, filename) {
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
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