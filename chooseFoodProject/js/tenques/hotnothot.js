//2.뜨거운거 안뜨거운거
let hot=document.getElementById("hot");
let cold=document.getElementById("cold");

const DB=JSON.parse(localStorage.getItem('filteredDB'));
$('#hot').click(async function() {
    //localStorage.setItem("DB",JSON.stringify(DB));
    localStorage.setItem("backup",JSON.stringify(DB));
    let filteredDB= await DB.filter(e => e.hot === true);
    if(filteredDB.length===0) {
        location.href="../../../html/takeplan/tenques/notfound.html";
    } else if(filteredDB.length===1) {
        location.href='../../../html/takeplan/tenques/show.html';
    } else {
        localStorage.setItem('filteredDB',JSON.stringify(filteredDB));
        location.href='../../../html/takeplan/tenques/heavSim.html';
    }
}); 

$('#cold').click(async function() {
    localStorage.setItem("backup",JSON.stringify(DB));
    let filteredDB= await DB.filter(e => e.cold === true);
    if(filteredDB.length===0) {
        location.href="../../../html/takeplan/tenques/notfound.html";
    } else if(filteredDB.length===1) {
        location.href='../../../html/takeplan/tenques/show.html';
    } else {
        localStorage.setItem('filteredDB',JSON.stringify(filteredDB));
        location.href='../../../html/takeplan/tenques/heavSim.html';
    }
});