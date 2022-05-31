//3.간단 든든
let heavy=document.getElementById("heavy");
let light=document.getElementById("light");
const DB=JSON.parse(localStorage.getItem('filteredDB'));
$('#heavy').click(async function() {
    localStorage.setItem("backup",localStorage.getItem('filteredDB'));
    let filteredDB=await DB.filter(e => e.heavy === true);
    if(filteredDB.length===0) {
        location.href="../../../html/takeplan/tenques/notfound.html";
    } else if(filteredDB.length===1) {
        window.location.href='../../../html/takeplan/tenques/show.html';
    } else {
        localStorage.setItem('filteredDB',JSON.stringify(filteredDB));
        window.location.href='../../../html/takeplan/tenques/cheapFlex.html';
    }

});
$('#light').click(async function() {
    localStorage.setItem("backup",localStorage.getItem('filteredDB'));
    let filteredDB=await DB.filter(e => e.light === true);
    if(filteredDB.length===0) {
        location.href="../../../html/takeplan/tenques/notfound.html";
    } else if(filteredDB.length===1) {
        window.location.href='../../../html/takeplan/tenques/show.html';
    } else  {
        localStorage.setItem('filteredDB',JSON.stringify(filteredDB));
        window.location.href='../../../html/takeplan/tenques/cheapFlex.html';
    }
});