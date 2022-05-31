//5-2.고기 해산물
let meat=document.getElementById("meat");
let seafood=document.getElementById("seafood");
const DB=JSON.parse(localStorage.getItem('filteredDB'));
$('#meat').click(async function(){
    localStorage.setItem("backup",localStorage.getItem('filteredDB'));
    let filteredDB=await DB.filter(e => e.meat === true);
    if(filteredDB.length===0) {
        location.href="../../../html/takeplan/tenques/notfound.html";
    } else if(filteredDB.length===1) {
        window.location.href='../../../html/takeplan/tenques/show.html';
    } else  {
        localStorage.setItem('filteredDB',JSON.stringify(filteredDB));
        window.location.href='../../../html/takeplan/tenques/cookRaw.html';
    }
});
$('#seafood').click(async function(){
    localStorage.setItem("backup",localStorage.getItem('filteredDB'));
    let filteredDB=await DB.filter(e => e.seaFood === true);
    if(filteredDB.length===0) {
        location.href="../../../html/takeplan/tenques/notfound.html";
    } else if(filteredDB.length===1) {
        window.location.href='../../../html/takeplan/tenques/show.html';
    } else  {
        localStorage.setItem('filteredDB',JSON.stringify(filteredDB));
        window.location.href='../../../html/takeplan/tenques/cookRaw.html';
    }
});