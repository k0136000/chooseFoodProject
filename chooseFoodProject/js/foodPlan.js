//각 맛집 리스트로 이동시키는 js 파일

let goToList = document.getElementById("goToList");
let goToSug = document.getElementById("goToSug");
let gotToTen = document.getElementById("goToTen");
$('#goToList').click(function(){
    window.location.href='../../html/takeplan/foodlist.html';
});
$('#goToSug').click(function(){
    window.location.href='../../html/takeplan/Sugges/foodsugges.html';
});
$('#goToTen').click(function(){
    localStorage.clear();
    window.location.href='../../html/takeplan/tenques/tenquestions.html';
});
