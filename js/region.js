let preUrl=document.referrer;
let busan="busan";
let seoul="seoul";
let southGyeong="South";
let northGyeong="Northern";
let daegu="daegu";
let daejeon="daejeon";
let gangneung="gangneung";
let chuncheon="chuncheon";
let region=document.getElementById("region");
//default는 0, 지역 에따라 부산은 1, 서울은 2, 경기남부는3, 경기북부는4,
let fromPrePageId=0;
//region.innerHTML=preUrl;

//이전 페이지 경로 읽어와서 각 지역당 전송할 페이지 정해주는 코드
if(preUrl.indexOf(busan)!==-1) {
    region.innerHTML="busan";
    fromPrePageId=1;
} else if(preUrl.indexOf(seoul)!==-1) {
    region.innerHTML="seoul";
    fromPrePageId=2;
} else if(preUrl.indexOf(southGyeong)!==-1) {
    region.innerHTML="south";
    fromPrePageId=3;
} else if(preUrl.indexOf(northGyeong)!==-1) {
    region.innerHTML="north";
    fromPrePageId=4;
} else if(preUrl.indexOf(daegu)!==-1) {
    region.innerHTML="daegu";
    fromPrePageId=5;
} else if(preUrl.indexOf(daejeon)!==-1) {
    region.innerHTML="deajeon";
    fromPrePageId=6;
} else if(preUrl.indexOf(gangneung)!==-1) {
    region.innerHTML="gangneung";
    fromPrePageId=7;
} else if(preUrl.indexOf(chuncheon)!==-1) {
    region.innerHTML="chuncheon";
    fromPrePageId=8;
}

let korBtn=document.getElementById("korBtn");
let chiBtn=document.getElementById("chiBtn");
let japBtn=document.getElementById("japBtn");
let wesBtn=document.getElementById("wesBtn");
let aisanBtn=document.getElementById("asianBtn");
let cafeBtn=document.getElementById("cafeBtn");
//한식 페이지 이동
function go_to_food_kor() {
    //이전 페이지가 부산인 경우
    if(fromPrePageId===1) {
        window.location.href= '../../html/takeplan/regionlist/busanlist/Korea.html'
    //이전 페이지가 서울인 경우
    } else if(fromPrePageId===2) {
        window.location.href= '../../html/takeplan/regionlist/seoulList/Korea.html'
    //이전 페이지가 경기 븍부인 경우
    } else if(fromPrePageId===3) {
        window.location.href= '../../html/takeplan/regionlist/northernGyeongGiList/Korea.html'
    //이전 페이지가 경기 남부인 경우
    } else if(fromPrePageId===4) {
        window.location.href= '../../html/takeplan/regionlist/southGyeongGiList/Korea.html'
    //이전 페이지가 대구인 경우
    } else if(fromPrePageId===5) {
        window.location.href= '../../html/takeplan/regionlist/daeguList/Korea.html'
    //이전 페이지가 대전인 경우
    } else if(fromPrePageId===6) {
        window.location.href= '../../html/takeplan/regionlist/daejeonList/Korea.html'
    //이전 페이지가 깅릉인 경우
    } else if(fromPrePageId===7) {
        window.location.href= '../../html/takeplan/regionlist/gangneungList/Korea.html'
    //이전 페이지가 춘천인 경우
    } else {
        window.location.href= '../../html/takeplan/regionlist/chuncheonList/Korea.html'
    }
}

//양식 페이지 이동
function go_to_food_wes() {
    //이전 페이지가 부산인 경우
    if(fromPrePageId===1) {
        window.location.href= '../../html/takeplan/regionlist/busanlist/Western.html'
    //이전 페이지가 서울인 경우
    } else if(fromPrePageId===2) {
        window.location.href= '../../html/takeplan/regionlist/seoulList/Western.html'
    //이전 페이지가 경기 븍부인 경우
    } else if(fromPrePageId===3) {
        window.location.href= '../../html/takeplan/regionlist/northernGyeongGiList/Western.html'
    //이전 페이지가 경기 남부인 경우
    } else if(fromPrePageId===4) {
        window.location.href= '../../html/takeplan/regionlist/southGyeongGiList/Western.html'
    //이전 페이지가 대구인 경우
    } else if(fromPrePageId===5) {
        window.location.href= '../../html/takeplan/regionlist/daeguList/Western.html'
    //이전 페이지가 대전인 경우
    } else if(fromPrePageId===6) {
        window.location.href= '../../html/takeplan/regionlist/daejeonList/Western.html'
    //이전 페이지가 깅릉인 경우
    } else if(fromPrePageId===7) {
        window.location.href= '../../html/takeplan/regionlist/gangneungList/Western.html'
    //이전 페이지가 춘천인 경우
    } else {
        window.location.href= '../../html/takeplan/regionlist/chuncheonList/Western.html'
    }
}

//중식 페이지 이동
function go_to_food_chi() {
    //이전 페이지가 부산인 경우
    if(fromPrePageId===1) {
        window.location.href= '../../html/takeplan/regionlist/busanlist/China.html'
    //이전 페이지가 서울인 경우
    } else if(fromPrePageId===2) {
        window.location.href= '../../html/takeplan/regionlist/seoulList/China.html'
    //이전 페이지가 경기 븍부인 경우
    } else if(fromPrePageId===3) {
        window.location.href= '../../html/takeplan/regionlist/northernGyeongGiList/China.html'
    //이전 페이지가 경기 남부인 경우
    } else if(fromPrePageId===4) {
        window.location.href= '../../html/takeplan/regionlist/southGyeongGiList/China.html'
    //이전 페이지가 대구인 경우
    } else if(fromPrePageId===5) {
        window.location.href= '../../html/takeplan/regionlist/daeguList/China.html'
    //이전 페이지가 대전인 경우
    } else if(fromPrePageId===6) {
        window.location.href= '../../html/takeplan/regionlist/daejeonList/China.html'
    //이전 페이지가 깅릉인 경우
    } else if(fromPrePageId===7) {
        window.location.href= '../../html/takeplan/regionlist/gangneungList/China.html'
    //이전 페이지가 춘천인 경우
    } else {
        window.location.href= '../../html/takeplan/regionlist/chuncheonList/China.html'
    }
}

//아시안 페이지 이동
function go_to_food_asi() {
    //이전 페이지가 부산인 경우
    if(fromPrePageId===1) {
        window.location.href= '../../html/takeplan/regionlist/busanlist/Asian.html'
    //이전 페이지가 서울인 경우
    } else if(fromPrePageId===2) {
        window.location.href= '../../html/takeplan/regionlist/seoulList/Asian.html'
    //이전 페이지가 경기 븍부인 경우
    } else if(fromPrePageId===3) {
        window.location.href= '../../html/takeplan/regionlist/northernGyeongGiList/Asian.html'
    //이전 페이지가 경기 남부인 경우
    } else if(fromPrePageId===4) {
        window.location.href= '../../html/takeplan/regionlist/southGyeongGiList/Asian.html'
    //이전 페이지가 대구인 경우
    } else if(fromPrePageId===5) {
        window.location.href= '../../html/takeplan/regionlist/daeguList/Asian.html'
    //이전 페이지가 대전인 경우
    } else if(fromPrePageId===6) {
        window.location.href= '../../html/takeplan/regionlist/daejeonList/Asian.html'
    //이전 페이지가 깅릉인 경우
    } else if(fromPrePageId===7) {
        window.location.href= '../../html/takeplan/regionlist/gangneungList/Asian.html'
    //이전 페이지가 춘천인 경우
    } else {
        window.location.href= '../../html/takeplan/regionlist/chuncheonList/Asian.html'
    }
}
function go_to_food_jap() {
    //이전 페이지가 부산인 경우
    if(fromPrePageId===1) {
        window.location.href= '../../html/takeplan/regionlist/busanlist/Japan.html'
    //이전 페이지가 서울인 경우
    } else if(fromPrePageId===2) {
        window.location.href= '../../html/takeplan/regionlist/seoulList/Japan.html'
    //이전 페이지가 경기 븍부인 경우
    } else if(fromPrePageId===3) {
        window.location.href= '../../html/takeplan/regionlist/northernGyeongGiList/Japan.html'
    //이전 페이지가 경기 남부인 경우
    } else if(fromPrePageId===4) {
        window.location.href= '../../html/takeplan/regionlist/southGyeongGiList/Japan.html'
    //이전 페이지가 대구인 경우
    } else if(fromPrePageId===5) {
        window.location.href= '../../html/takeplan/regionlist/daeguList/Japan.html'
    //이전 페이지가 대전인 경우
    } else if(fromPrePageId===6) {
        window.location.href= '../../html/takeplan/regionlist/daejeonList/Japan.html'
    //이전 페이지가 깅릉인 경우
    } else if(fromPrePageId===7) {
        window.location.href= '../../html/takeplan/regionlist/gangneungList/Japan.html'
    //이전 페이지가 춘천인 경우
    } else {
        window.location.href= '../../html/takeplan/regionlist/chuncheonList/Japan.html'
    }
}

//카페 페이지 이동
function go_to_food_cafe() {
    //이전 페이지가 부산인 경우
    if(fromPrePageId===1) {
        window.location.href= '../../html/takeplan/regionlist/busanlist/cafe.html'
    //이전 페이지가 서울인 경우
    } else if(fromPrePageId===2) {
        window.location.href= '../../html/takeplan/regionlist/seoulList/cafe.html'
    //이전 페이지가 경기 븍부인 경우
    } else if(fromPrePageId===3) {
        window.location.href= '../../html/takeplan/regionlist/northernGyeongGiList/cafe.html'
    //이전 페이지가 경기 남부인 경우
    } else if(fromPrePageId===4) {
        window.location.href= '../../html/takeplan/regionlist/southGyeongGiList/cafe.html'
    //이전 페이지가 대구인 경우
    } else if(fromPrePageId===5) {
        window.location.href= '../../html/takeplan/regionlist/daeguList/cafe.html'
    //이전 페이지가 대전인 경우
    } else if(fromPrePageId===6) {
        window.location.href= '../../html/takeplan/regionlist/daejeonList/cafe.html'
    //이전 페이지가 깅릉인 경우
    } else if(fromPrePageId===7) {
        window.location.href= '../../html/takeplan/regionlist/gangneungList/cafe.html'
    //이전 페이지가 춘천인 경우
    } else {
        window.location.href= '../../html/takeplan/regionlist/chuncheonList/cafe.html'
    }
}

$('#korBtn').click(go_to_food_kor);
$('#chiBtn').click(go_to_food_chi);
$('#japBtn').click(go_to_food_jap);
$('#aisanBtn').click(go_to_food_asi);
$('#wesBtn').click(go_to_food_wes);
$('#cafeBtn').click(go_to_food_cafe);






