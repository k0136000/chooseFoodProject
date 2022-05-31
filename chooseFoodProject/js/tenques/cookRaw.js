//6.날것 익힌것 끝ㄴ
let cooked=document.getElementById("cooked");
let raw=document.getElementById("raw");
const DB=JSON.parse(localStorage.getItem('filteredDB'));
$('#raw').click(async function(){
    localStorage.setItem("backup",localStorage.getItem('filteredDB'));
    let filteredDB=await DB.filter(e => e.raw === true);
    if(filteredDB.length===0) {
        location.href="../../../html/takeplan/tenques/notfound.html";
    } else  {
        window.location.href='../../../html/takeplan/tenques/show.html';
    } 
});
$('#cooked').click(async function(){
    localStorage.setItem("backup",localStorage.getItem('filteredDB'));
    let filteredDB=await DB.filter(e => e.cooked === true);
    if(filteredDB.length===0) {
        location.href="../../../html/takeplan/tenques/notfound.html";
    } else  {
        window.location.href='../../../html/takeplan/tenques/show.html';
    } 
});