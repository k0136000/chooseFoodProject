//4.가성비 가심비
let cheap=document.getElementById("cheap");
let flex=document.getElementById("flex");
const DB=JSON.parse(localStorage.getItem('filteredDB'));
$('#cheap').click(async function(){
    localStorage.setItem("backup",localStorage.getItem('filteredDB'));
    let filteredDB=await DB.filter(e => e.cheap === true);
    if(filteredDB.length===0) {
        location.href="../../../html/takeplan/tenques/notfound.html";
    } else if(filteredDB.length===1) {
        window.location.href='../../../../html/takeplan/tenques/show.html';
    } else  {
        localStorage.setItem('filteredDB',JSON.stringify(filteredDB));
        window.location.href='../../../html/takeplan/tenques/riceBread.html';
    }
});
$('#flex').click(async function(){
    localStorage.setItem("backup",localStorage.getItem('filteredDB'));
    let filteredDB=await DB.filter(e => e.flex === true);
    if(filteredDB.length===0) {
        location.href="../../../html/takeplan/tenques/notfound.html";
    } else if(filteredDB.length===1) {
        window.location.href='../../../html/takeplan/tenques/show.html';
    } else  {
        localStorage.setItem('filteredDB',JSON.stringify(filteredDB));
        window.location.href='../../../html/takeplan/tenques/riceBread.html';
    }
});