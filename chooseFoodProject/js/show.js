//다시하기 버튼
let reBtn=document.getElementById("reBtn");
let prePage=localStorage.getItem("prepage");
$('#reBtn').click(function() {
    location.href='../../../html/takeplan/tenques/tenquestions.html';
    if(prePage==='busan') {
        localStorage.setItem('regionList',JSON.stringify(busanreg));
    } else if(prePage==="seoul") {
        localStorage.setItem('regionList',JSON.stringify(seoulreg));
    } else if(prePage==="south") {
        localStorage.setItem('regionList',JSON.stringify(southreg));
    } else if(prePage==="north") {
        localStorage.setItem('regionList',JSON.stringify(northreg));
    } else if(prePage==="daegu") {
        localStorage.setItem('regionList',JSON.stringify(daegureg));
    } else if(prePage==="daejeon") {
        localStorage.setItem('regionList',JSON.stringify(daejeonreg));
    } else if(prePage==="gangneung") {
        localStorage.setItem('regionList',JSON.stringify(gangreg));
    } else if(prePage==="chuncheon") {
        localStorage.setItem('regionList',JSON.stringify(chuncheonreg));
    }
});

let showTitle=document.getElementById("showTitle");
let showName=document.getElementById("showName");
let suggesImg=document.getElementById("suggesImg");

const randomList=JSON.parse(localStorage.getItem('filteredDB'));
window.onload=function() {
    showName.innerHTML=randomList[0].name;
    suggesImg.src=randomList[0].img;
}

let goToM=document.getElementById("goToM");
$('#goToM').click(function() {
    location.href=randomList[0].link;
})