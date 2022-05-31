//5-1 밥 빵 끝
let rice=document.getElementById("rice");
let bread=document.getElementById("bread");
const DB=JSON.parse(localStorage.getItem('filteredDB'));
$('#rice').click(async function(){
    localStorage.setItem("backup",localStorage.getItem('filteredDB'));
    let filteredDB=await DB.filter(e => e.rice === true);
    if(filteredDB.length===0) {
        location.href="../../../html/takeplan/tenques/notfound.html";
    } else if(filteredDB.length===1)  {
        window.location.href='../../../html/takeplan/tenques/show.html';
    } else {
        window.location.href='../../../html/takeplan/tenques/meatSeafood.html';
    }
});
$('#bread').click(async function(){
    localStorage.setItem("backup",localStorage.getItem('filteredDB'));
    let filteredDB= await DB.filter(e => e.bread === true);
    if(filteredDB.length===0) {
        location.href="../../../html/takeplan/tenques/notfound.html";
    } else if (filteredDB.length===1)  {
        window.location.href='../../../html/takeplan/tenques/show.html';
    } else {
        window.location.href='../../../html/takeplan/tenques/meatSeafood.html';
    }
});