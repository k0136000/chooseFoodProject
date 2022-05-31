let showTitle=document.getElementById("showTitle");
let showName=document.getElementById("showName");
let suggesImg=document.getElementById("suggesImg");

const randomList=JSON.parse(localStorage.getItem('regionList'));
let randomNumber=0;
window.onload=function() {
    const randomNum=Math.floor(Math.random()*randomList.length);
    randomNumber=randomNum;
    showName.innerHTML=randomList[randomNum].name;
    suggesImg.src=randomList[randomNum].img;
}

//다음 (페이지 새로고침)
let next=document.getElementById("next");
$('#next').click(function() {
    location.reload();
});

let goToMap=document.getElementById("goToMap");
$('#goToMap').click(function() {
    location.href=randomList[randomNumber].link;
})
