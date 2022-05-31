//let tenQuesBox=document.getElementById("tenQuesBox");
let startBtn=document.getElementById("startBtn");
let startTitle=document.getElementById("startTitle");

let busan1="busan";
let seoul1="seoul";
let southGyeong1="South";
let northGyeong1="Northern";
let daegu1="daegu";
let daejeon1="daejeon";
let gangneung1="gangneung";
let chuncheon1="chuncheon";



$('#startBtn').click(function(){
    location.href='../../../html/takeplan/tenques/brothNobroth.html';
    //로컬 스토리지에 이전 페이지 주소를 저장하여 어느 지역에서 왔는지 확인.
    let prePage=document.referrer;
    if(prePage.indexOf(busan1)!==-1) {
        prePage="busan";
        localStorage.setItem('regionList',JSON.stringify(busanreg));
    } else if(prePage.indexOf(seoul1)!==-1) {
        prePage="seoul";
        localStorage.setItem('regionList',JSON.stringify(seoulreg));
    } else if(prePage.indexOf(southGyeong1)!==-1) {
        prePage="south";
        localStorage.setItem('regionList',JSON.stringify(southreg));
    } else if(prePage.indexOf(northGyeong1)!==-1) {
        prePage="north";
        localStorage.setItem('regionList',JSON.stringify(northreg));
    } else if(prePage.indexOf(daegu1)!==-1) {
        prePage="daegu";
        localStorage.setItem('regionList',JSON.stringify(daegureg));
    } else if(prePage.indexOf(daejeon1)!==-1) {
        prePage="daejeon";
        localStorage.setItem('regionList',JSON.stringify(daejeonreg));
    } else if(prePage.indexOf(gangneung1)!==-1) {
        prePage="gangneung";
        localStorage.setItem('regionList',JSON.stringify(gangreg));
    } else if(prePage.indexOf(chuncheon1)!==-1) {
        prePage="chuncheon";
        localStorage.setItem('regionList',JSON.stringify(chuncheonreg));
    }
    localStorage.setItem("prepage",prePage);
});


//default는 0, 지역 에따라 부산은 1, 서울은 2, 경기남부는3, 경기북부는4,

let rePage=document.referrer;
//startTitle.innerHTML=rePage;
//이전 페이지 경로 읽어와서 각 지역당 전송할 페이지 정해주는 코드
if(rePage.indexOf(busan1)!==-1) {
    startTitle.innerHTML="음식 열 고개(부산)";
} else if(rePage.indexOf(seoul1)!==-1) {
    startTitle.innerHTML="음식 열 고개(서울)";
} else if(rePage.indexOf(southGyeong1)!==-1) {
    startTitle.innerHTML="음식 열 고개(경기 남부)";
} else if(rePage.indexOf(northGyeong1)!==-1) {
    startTitle.innerHTML="음식 열 고개(경기 북부)";
} else if(rePage.indexOf(daegu1)!==-1) {
    startTitle.innerHTML="음식 열 고개(대구)";
} else if(rePage.indexOf(daejeon1)!==-1) {
    startTitle.innerHTML="음식 열 고개(대전)";
} else if(rePage.indexOf(gangneung1)!==-1) {
    startTitle.innerHTML="음식 열 고개(강릉)";
} else if(rePage.indexOf(chuncheon1)!==-1) {
    startTitle.innerHTML="음식 열 고개(춘천)";
}

//로컬 스토리지에 저장된 현재 위치 주변의 맛집 데이터를 getDB에 저장.
//let DB=JSON.parse(localStorage.getItem('tenquesDB'));


//const getDB=JSON.parse(localStorage.getItem('regionList'));
//1.국물 있는 것 없는 것
let broth=document.getElementById("broth");
let noBroth=document.getElementById("noBroth");
const getDB=JSON.parse(localStorage.getItem('regionList'));
$('#broth').click(function() {
    let filteredDB=getDB.filter(e => e.fullOfBroth === true);
    if(filteredDB.length===0) {
        location.href="../../../html/takeplan/tenques/notfound.html";
    } else if(filteredDB.length===1) {
        location.href='../../../html/takeplan/tenques/show.html';
    } else {
        localStorage.setItem('filteredDB',JSON.stringify(filteredDB));
        location.href='../../../html/takeplan/tenques/hotNothot.html';
    }
});
$('#noBroth').click(function() {
    let filteredDB=getDB.filter(e => e.noBroth === true);
    if(filteredDB.length===0) {
        location.href="../../../html/takeplan/tenques/notfound.html";
    } else if(filteredDB.length===1) {
        location.href='../../../html/takeplan/tenques/show.html';
    } else {
        localStorage.setItem('filteredDB',JSON.stringify(filteredDB));
        location.href='../../../html/takeplan/tenques/hotNothot.html';
    }
});

//뒤로가기 버튼
let backBtn=document.getElementById("backBtn");
$('#backBtn').click(function() {
    localStorage.setItem('filteredDB',localStorage.getItem("backup"));
    let repage=document.referrer;
    location.href=repage;
});


//부산
const busanreg = [
{
    name:"할매국밥",
    //인덱스
    index:1,
    img:"../../../img/busan_korean_01.jpeg",
    link:"https://place.map.kakao.com/16694746",
    site:"d",
    //뜨겁 차갑
    hot:true,
    cold:false,
    rice:true,
    bread:false,
    noodle:false,
    mood:false,
    friend:true,
    //맵 안맵
    spicy:false,
    notSpicy:true,
    //든든 간단
    heavy:true,
    light:false,
    //국물이 시원.
    cool:true,
    meat:true,

    seaFood:false,
    
    cheap:true,
    flex:false,
    //국물이 가득
    fullOfBroth:true,
    noBroth:false,
    //익힌것
    cooked:true,
    raw:false,
},
{
    name:"해운대소문난암소갈비집",
    //인덱스
    index:2,
    img:"../../../img/busan_korean_02.jpeg",
    link:"https://place.map.kakao.com/8149130",
    hot:true,
    cold:false,
    rice:true,
    bread:false,
    noodle:true,
    mood:false,
    friend:true,
    //맴냐 안맵냐
    spicy:false,
    notSpicy:true,
    //칼칼하냐
    spicy:false,
    //든든 간단
    heavy:true,
    light:false,
    //국물이 시원.
    cool:false,
    meat:true,
    seaFood:false,
    cheap:false,
    flex:true,
    //국물이 가득
    fullOfBroth:false,
    noBroth:true,
    //익힌것
    cooked:true,
    raw:false,
},
{
    name:"산발원",
    //인덱스
    index:3,
    img:"../../../img/busan_china_01.jpeg",
    link:"https://place.map.kakao.com/8407645",
    hot:true,
    cold:false,
    rice:true,
    bread:false,
    noodle:true,
    mood:false,
    friend:true,
    spicy:false,
    notSpicy:true,
    spicy:false,
    //든든 간단
    heavy:true,
    light:false,
    //국물이 시원.
    cool:false,
    meat:false,
    seaFood:false,
    cheap:true,
    flex:false,
    //국물이 가득
    fullOfBroth:true,
    noBroth:true,
    //익힌것
    cooked:true,
    raw:false,
},
{
    name:"팔레드신",
    //인덱스
    index:4,
    img:"../../../img/busan_china_02.jpeg",
    link:"https://place.map.kakao.com/1024056719",
    hot:true,
    cold:false,
    rice:true,
    bread:false,
    noodle:true,
    mood:false,
    friend:true,
    hot:false,
    spicy:false,
    notSpicy:true,
    //든든 간단
    heavy:true,
    light:false,
    //국물이 시원.
    cool:false,
    meat:false,
    seaFood:false,
    cheap:true,
    flex:false,
    //국물이 가득
    fullOfBroth:true,
    noBroth:true,
    //익힌것
    cooked:true,
    raw:false,
},
{
    name:"다이닝룸",
    //인덱스
    index:5,
    img:"../../../img/busan_western_01.jpeg",
    link:"https://place.map.kakao.com/21539138",
    hot:true,
    cold:false,
    rice:false,
    bread:true,
    noodle:false,
    mood:true,
    friend:false,
    //맴냐 안맵냐
    spicy:false,
    notSpicy:true,
    //칼칼하냐
    spicy:false,
    //든든 간단
    heavy:true,
    light:false,
    //국물이 시원.
    cool:false,
    meat:true,
    seaFood:false,
    cheap:false,
    flex:true,
    //국물이 가득
    fullOfBroth:false,
    noBroth:true,
    //익힌것
    cooked:true,
    raw:false,
},
{
    name:"포르타나",
    //인덱스
    index:6,
    img:"../../../img/busan_western_02.jpeg",
    link:"https://place.map.kakao.com/784538669",
    hot:true,
    cold:false,
    rice:false,
    bread:true,
    noodle:false,
    mood:true,
    friend:false,
    //맴냐 안맵냐
    spicy:false,
    notSpicy:true,
    //칼칼하냐
    spicy:false,
    //든든 간단
    heavy:true,
    light:false,
    //국물이 시원.
    cool:false,
    meat:true,
    seaFood:false,
    cheap:false,
    flex:true,
    //국물이 가득
    fullOfBroth:true,
    noBroth:true,
    //익힌것
    cooked:true,
    raw:false,
},
{
    name:"톤쇼우",
    //인덱스
    index:7,
    img:"../../../img/busan_japan_01.jpeg",
    link:"https://place.map.kakao.com/704518356",
    hot:true,
    cold:false,
    rice:false,
    bread:false,
    noodle:false,
    mood:true,
    friend:false,
    //맴냐 안맵냐
    spicy:false,
    notSpicy:true,
    //칼칼하냐
    spicy:false,
    //든든 간단
    heavy:true,
    light:false,
    //국물이 시원.
    cool:false,
    meat:true,
    seaFood:false,
    cheap:false,
    flex:true,
    //국물이 가득
    fullOfBroth:false,
    noBroth:true,
    //익힌것
    cooked:true,
    raw:false,
},
{
    name:"해목",
    //인덱스
    index:8,
    img:"../../../img/busan_japan_02.jpeg",
    link:"https://place.map.kakao.com/977177107",
    hot:true,
    cold:false,
    rice:false,
    bread:false,
    noodle:false,
    mood:true,
    friend:false,
    //맴냐 안맵냐
    spicy:false,
    notSpicy:true,
    //칼칼하냐
    spicy:false,
    //든든 간단
    heavy:true,
    light:false,
    //국물이 시원.
    cool:false,
    meat:false,
    seaFood:true,
    cheap:false,
    flex:true,
    //국물이 가득
    fullOfBroth:false,
    noBroth:true,
    //익힌것
    cooked:true,
    raw:false,
},
{
    name:"피에프창",
    //인덱스
    index:9,
    img:"../../../img/busan_asian_01.jpeg",
    link:"https://place.map.kakao.com/27507546",
    hot:true,
    cold:false,
    rice:true,
    bread:false,
    noodle:false,
    mood:true,
    friend:false,
    //맴냐 안맵냐
    spicy:false,
    notSpicy:true,
    //칼칼하냐
    spicy:false,
    //든든 간단
    heavy:true,
    light:false,
    //국물이 시원.
    cool:false,
    meat:false,
    seaFood:false,
    cheap:true,
    flex:false,
    //국물이 가득
    fullOfBroth:false,
    noBroth:true,
    //익힌것
    cooked:true,
    raw:false,
},
{
    name:"퍼스트부엌타이",
    //인덱스
    index:10,
    img:"../../../img/busan_asian_02.jpeg",
    link:"https://place.map.kakao.com/27457937",
    hot:true,
    cold:false,
    rice:true,
    bread:false,
    noodle:true,
    mood:false,
    friend:true,
    //맴냐 안맵냐
    spicy:false,
    notSpicy:true,
    //칼칼하냐
    spicy:false,
    //든든 간단
    heavy:true,
    light:false,
    //국물이 시원.
    cool:false,
    meat:true,
    seaFood:false,
    cheap:false,
    flex:true,
    //국물이 가득
    fullOfBroth:false,
    noBroth:true,
    //익힌것
    cooked:true,
    raw:false,
},
{
    name:"비비비당",
    //인덱스
    index:11,
    img:"../../../img/busan_cafe_01.jpeg",
    link:"https://place.map.kakao.com/18451449",
    hot:true,
    cold:false,
    rice:false,
    bread:true,
    noodle:false,
    mood:true,
    friend:false,
    //맴냐 안맵냐
    spicy:false,
    notSpicy:true,
    //칼칼하냐
    spicy:false,
    //든든 간단
    heavy:false,
    light:true,
    //국물이 시원.
    cool:false,
    meat:false,
    seaFood:false,
    cheap:false,
    flex:true,
    //국물이 가득
    fullOfBroth:false,
    noBroth:true,
    //익힌것
    cooked:true,
    raw:false,
},
{
    name:"블랙업커피",
    //인덱스
    index:12,
    img:"../../../img/busan_cafe_02.jpeg",
    link:"https://place.map.kakao.com/12807299",
    hot:true,
    cold:false,
    rice:false,
    bread:true,
    noodle:false,
    mood:true,
    friend:false,
    //맴냐 안맵냐
    spicy:false,
    notSpicy:true,
    //칼칼하냐
    spicy:false,
    //든든 간단
    heavy:false,
    light:true,
    //국물이 시원.
    cool:false,
    meat:false,
    seaFood:false,
    cheap:false,
    flex:true,
    //국물이 가득
    fullOfBroth:false,
    noBroth:true,
    //익힌것
    cooked:true,
    raw:false,
},
]
//서울
const seoulreg = [
    {
        name:"호반",
        //인덱스
        index:1,
        img:"../../../img/seoul_korean_01.jpeg",
        hot:true,
        cold:false,
        rice:true,
        bread:false,
        noodle:false,
        mood:false,
        friend:true,
        hot:true,
        notHot:false,
        spicy:true,
        //든든 간단
        heavy:true,
        light:false,
        //국물이 시원.
        cool:false,
        meat:false,
        seaFood:true,
        cheap:true,
        flex:false,
        //국물이 가득
        fullOfBroth:false,
        noBroth:false,
        //익힌것
        cooked:true,
        raw:false,
    },
    {
        name:"맛짱조개",
        //인덱스
        index:2,
        hot:false,
        cold:true,
        rice:false,
        bread:false,
        noodle:false,
        mood:false,
        friend:true,
        //맴냐 안맵냐
        hot:false,
        notHot:true,
        //칼칼하냐
        spicy:false,
        //든든 간단
        heavy:false,
        light:true,
        //국물이 시원.
        cool:false,
        meat:false,
        seaFood:true,
        cheap:false,
        flex:true,
        //국물이 가득
        fullOfBroth:false,
        noBroth:true,
        //익힌것
        cooked:false,
        raw:true,
    },
    {
        name:"쥬에",
        //인덱스
        index:3,
        hot:true,
        cold:false,
        rice:false,
        bread:false,
        noodle:false,
        mood:true,
        friend:false,
        hot:false,
        notHot:true,
        spicy:false,
        //든든 간단
        heavy:true,
        light:false,
        //국물이 시원.
        cool:false,
        meat:false,
        seaFood:false,
        cheap:false,
        flex:true,
        //국물이 가득
        fullOfBroth:false,
        noBroth:false,
        //익힌것
        cooked:true,
        raw:false,
    },
    {
        name:"오향가",
        //인덱스
        index:4,
        hot:true,
        cold:false,
        rice:false,
        bread:false,
        noodle:false,
        mood:false,
        friend:true,
        hot:false,
        notHot:true,
        spicy:false,
        //든든 간단
        heavy:true,
        light:false,
        //국물이 시원.
        cool:false,
        meat:true,
        seaFood:false,
        cheap:false,
        flex:true,
        //국물이 가득
        fullOfBroth:false,
        noBroth:false,
        //익힌것
        cooked:true,
        raw:false,
    },
    {
        name:"알라프리마",
        //인덱스
        index:5,
        hot:true,
        cold:false,
        rice:false,
        bread:true,
        noodle:false,
        mood:true,
        friend:false,
        //맴냐 안맵냐
        hot:false,
        notHot:true,
        //칼칼하냐
        spicy:false,
        //든든 간단
        heavy:true,
        light:false,
        //국물이 시원.
        cool:false,
        meat:true,
        seaFood:false,
        cheap:false,
        flex:true,
        //국물이 가득
        fullOfBroth:false,
        noBroth:true,
        //익힌것
        cooked:true,
        raw:false,
    },
    {
        name:"바위파스타바",
        //인덱스
        index:6,
        hot:true,
        cold:false,
        rice:false,
        bread:true,
        noodle:true,
        mood:true,
        friend:false,
        //맴냐 안맵냐
        hot:false,
        notHot:true,
        //칼칼하냐
        spicy:false,
        //든든 간단
        heavy:false,
        light:true,
        //국물이 시원.
        cool:false,
        meat:false,
        seaFood:false,
        cheap:false,
        flex:true,
        //국물이 가득
        fullOfBroth:false,
        noBroth:true,
        //익힌것
        cooked:true,
        raw:false,
    },
    {
        name:"톤쇼우",
        //인덱스
        index:7,
        hot:true,
        cold:false,
        rice:false,
        bread:false,
        noodle:false,
        mood:true,
        friend:false,
        //맴냐 안맵냐
        hot:false,
        notHot:true,
        //칼칼하냐
        spicy:true,
        //든든 간단
        heavy:false,
        light:true,
        //국물이 시원.
        cool:true,
        meat:false,
        seaFood:true,
        cheap:false,
        flex:true,
        //국물이 가득
        fullOfBroth:true,
        noBroth:true,
        //익힌것
        cooked:false,
        raw:true,
    },
    {
        name:"스시키",
        //인덱스
        index:8,
        hot:false,
        cold:true,
        rice:true,
        bread:false,
        noodle:false,
        mood:true,
        friend:false,
        //맴냐 안맵냐
        hot:false,
        notHot:true,
        //칼칼하냐
        spicy:false,
        //든든 간단
        heavy:false,
        light:true,
        //국물이 시원.
        cool:false,
        meat:false,
        seaFood:true,
        cheap:false,
        flex:true,
        //국물이 가득
        fullOfBroth:false,
        noBroth:true,
        //익힌것
        cooked:true,
        raw:false,
    },
    {
        name:"더마칸",
        //인덱스
        index:9,
        hot:true,
        cold:false,
        rice:true,
        bread:false,
        noodle:true,
        mood:true,
        friend:false,
        //맴냐 안맵냐
        hot:true,
        notHot:true,
        //칼칼하냐
        spicy:false,
        //든든 간단
        heavy:true,
        light:false,
        //국물이 시원.
        cool:false,
        meat:false,
        seaFood:false,
        cheap:true,
        flex:false,
        //국물이 가득
        fullOfBroth:false,
        noBroth:true,
        //익힌것
        cooked:true,
        raw:false,
    },
    {
        name:"연회미식",
        //인덱스
        index:10,
        hot:true,
        cold:false,
        rice:false,
        bread:false,
        noodle:true,
        mood:false,
        friend:true,
        //맴냐 안맵냐
        hot:false,
        notHot:true,
        //칼칼하냐
        spicy:false,
        //든든 간단
        heavy:true,
        light:false,
        //국물이 시원.
        cool:false,
        meat:true,
        seaFood:true,
        cheap:true,
        flex:false,
        //국물이 가득
        fullOfBroth:true,
        noBroth:true,
        //익힌것
        cooked:true,
        raw:false,
    },
    {
        name:"따빠디또 디저트 따빠스바",
        //인덱스
        index:11,
        hot:true,
        cold:false,
        rice:false,
        bread:true,
        noodle:false,
        mood:true,
        friend:false,
        //맴냐 안맵냐
        hot:false,
        notHot:true,
        //칼칼하냐
        spicy:false,
        //든든 간단
        heavy:false,
        light:true,
        //국물이 시원.
        cool:false,
        meat:false,
        seaFood:false,
        cheap:false,
        flex:true,
        //국물이 가득
        fullOfBroth:false,
        noBroth:true,
        //익힌것
        cooked:true,
        raw:false,
    },
    {
        name:"회현카페",
        //인덱스
        index:12,
        hot:true,
        cold:false,
        rice:true,
        bread:false,
        noodle:true,
        mood:true,
        friend:false,
        //맴냐 안맵냐
        hot:false,
        notHot:true,
        //칼칼하냐
        spicy:false,
        //든든 간단
        heavy:true,
        light:false,
        //국물이 시원.
        cool:false,
        meat:true,
        seaFood:true,
        cheap:true,
        flex:false,
        //국물이 가득
        fullOfBroth:false,
        noBroth:true,
        //익힌것
        cooked:true,
        raw:false,
    },
]
//대구
const daegureg = [
        {
            name:"호반",
            //인덱스
            index:1,
            hot:true,
            cold:false,
            rice:true,
            bread:false,
            noodle:false,
            mood:false,
            friend:true,
            hot:true,
            notHot:false,
            spicy:true,
            //든든 간단
            heavy:true,
            light:false,
            //국물이 시원.
            cool:false,
            meat:false,
            seaFood:true,
            cheap:true,
            flex:false,
            //국물이 가득
            fullOfBroth:false,
            noBroth:false,
            //익힌것
            cooked:true,
            raw:false,
        },
        {
            name:"맛짱조개",
            //인덱스
            index:2,
            hot:false,
            cold:true,
            rice:false,
            bread:false,
            noodle:false,
            mood:false,
            friend:true,
            //맴냐 안맵냐
            hot:false,
            notHot:true,
            //칼칼하냐
            spicy:false,
            //든든 간단
            heavy:false,
            light:true,
            //국물이 시원.
            cool:false,
            meat:false,
            seaFood:true,
            cheap:false,
            flex:true,
            //국물이 가득
            fullOfBroth:false,
            noBroth:true,
            //익힌것
            cooked:false,
            raw:true,
        },
        {
            name:"쥬에",
            //인덱스
            index:3,
            hot:true,
            cold:false,
            rice:false,
            bread:false,
            noodle:false,
            mood:true,
            friend:false,
            hot:false,
            notHot:true,
            spicy:false,
            //든든 간단
            heavy:true,
            light:false,
            //국물이 시원.
            cool:false,
            meat:false,
            seaFood:false,
            cheap:false,
            flex:true,
            //국물이 가득
            fullOfBroth:false,
            noBroth:false,
            //익힌것
            cooked:true,
            raw:false,
        },
        {
            name:"오향가",
            //인덱스
            index:4,
            hot:true,
            cold:false,
            rice:false,
            bread:false,
            noodle:false,
            mood:false,
            friend:true,
            hot:false,
            notHot:true,
            spicy:false,
            //든든 간단
            heavy:true,
            light:false,
            //국물이 시원.
            cool:false,
            meat:true,
            seaFood:false,
            cheap:false,
            flex:true,
            //국물이 가득
            fullOfBroth:false,
            noBroth:false,
            //익힌것
            cooked:true,
            raw:false,
        },
        {
            name:"알라프리마",
            //인덱스
            index:5,
            hot:true,
            cold:false,
            rice:false,
            bread:true,
            noodle:false,
            mood:true,
            friend:false,
            //맴냐 안맵냐
            hot:false,
            notHot:true,
            //칼칼하냐
            spicy:false,
            //든든 간단
            heavy:true,
            light:false,
            //국물이 시원.
            cool:false,
            meat:true,
            seaFood:false,
            cheap:false,
            flex:true,
            //국물이 가득
            fullOfBroth:false,
            noBroth:true,
            //익힌것
            cooked:true,
            raw:false,
        },
        {
            name:"바위파스타바",
            //인덱스
            index:6,
            hot:true,
            cold:false,
            rice:false,
            bread:true,
            noodle:true,
            mood:true,
            friend:false,
            //맴냐 안맵냐
            hot:false,
            notHot:true,
            //칼칼하냐
            spicy:false,
            //든든 간단
            heavy:false,
            light:true,
            //국물이 시원.
            cool:false,
            meat:false,
            seaFood:false,
            cheap:false,
            flex:true,
            //국물이 가득
            fullOfBroth:false,
            noBroth:true,
            //익힌것
            cooked:true,
            raw:false,
        },
        {
            name:"톤쇼우",
            //인덱스
            index:7,
            hot:true,
            cold:false,
            rice:false,
            bread:false,
            noodle:false,
            mood:true,
            friend:false,
            //맴냐 안맵냐
            hot:false,
            notHot:true,
            //칼칼하냐
            spicy:true,
            //든든 간단
            heavy:false,
            light:true,
            //국물이 시원.
            cool:true,
            meat:false,
            seaFood:true,
            cheap:false,
            flex:true,
            //국물이 가득
            fullOfBroth:true,
            noBroth:true,
            //익힌것
            cooked:false,
            raw:true,
        },
        {
            name:"스시키",
            //인덱스
            index:8,
            hot:false,
            cold:true,
            rice:true,
            bread:false,
            noodle:false,
            mood:true,
            friend:false,
            //맴냐 안맵냐
            hot:false,
            notHot:true,
            //칼칼하냐
            spicy:false,
            //든든 간단
            heavy:false,
            light:true,
            //국물이 시원.
            cool:false,
            meat:false,
            seaFood:true,
            cheap:false,
            flex:true,
            //국물이 가득
            fullOfBroth:false,
            noBroth:true,
            //익힌것
            cooked:true,
            raw:false,
        },
        {
            name:"더마칸",
            //인덱스
            index:9,
            hot:true,
            cold:false,
            rice:true,
            bread:false,
            noodle:true,
            mood:true,
            friend:false,
            //맴냐 안맵냐
            hot:true,
            notHot:true,
            //칼칼하냐
            spicy:false,
            //든든 간단
            heavy:true,
            light:false,
            //국물이 시원.
            cool:false,
            meat:false,
            seaFood:false,
            cheap:true,
            flex:false,
            //국물이 가득
            fullOfBroth:false,
            noBroth:true,
            //익힌것
            cooked:true,
            raw:false,
        },
        {
            name:"연회미식",
            //인덱스
            index:10,
            hot:true,
            cold:false,
            rice:false,
            bread:false,
            noodle:true,
            mood:false,
            friend:true,
            //맴냐 안맵냐
            hot:false,
            notHot:true,
            //칼칼하냐
            spicy:false,
            //든든 간단
            heavy:true,
            light:false,
            //국물이 시원.
            cool:false,
            meat:true,
            seaFood:true,
            cheap:true,
            flex:false,
            //국물이 가득
            fullOfBroth:true,
            noBroth:true,
            //익힌것
            cooked:true,
            raw:false,
        },
        {
            name:"따빠디또 디저트 따빠스바",
            //인덱스
            index:11,
            hot:true,
            cold:false,
            rice:false,
            bread:true,
            noodle:false,
            mood:true,
            friend:false,
            //맴냐 안맵냐
            hot:false,
            notHot:true,
            //칼칼하냐
            spicy:false,
            //든든 간단
            heavy:false,
            light:true,
            //국물이 시원.
            cool:false,
            meat:false,
            seaFood:false,
            cheap:false,
            flex:true,
            //국물이 가득
            fullOfBroth:false,
            noBroth:true,
            //익힌것
            cooked:true,
            raw:false,
        },
        {
            name:"회현카페",
            //인덱스
            index:12,
            hot:true,
            cold:false,
            rice:true,
            bread:false,
            noodle:true,
            mood:true,
            friend:false,
            //맴냐 안맵냐
            hot:false,
            notHot:true,
            //칼칼하냐
            spicy:false,
            //든든 간단
            heavy:true,
            light:false,
            //국물이 시원.
            cool:false,
            meat:true,
            seaFood:true,
            cheap:true,
            flex:false,
            //국물이 가득
            fullOfBroth:false,
            noBroth:true,
            //익힌것
            cooked:true,
            raw:false,
        },
]
//경기 북부
const northreg = [
    {
        name:"할매국밥",
        //인덱스
        index:1,
        hot:true,
        cold:false,
        rice:true,
        bread:false,
        noodle:false,
        mood:false,
        friend:true,
        hot:false,
        notHot:true,
        spicy:false,
        //든든 간단
        heavy:true,
        light:false,
        //국물이 시원.
        cool:true,
        meat:true,
        seaFood:false,
        cheap:true,
        flex:false,
        //국물이 가득
        fullOfBroth:true,
        noBroth:false,
        //익힌것
        cooked:true,
        raw:false,
    },
    {
        name:"해운대소문난암소갈비집",
        //인덱스
        index:2,
        hot:true,
        cold:false,
        rice:true,
        bread:false,
        noodle:true,
        mood:false,
        friend:true,
        //맴냐 안맵냐
        hot:false,
        notHot:true,
        //칼칼하냐
        spicy:false,
        //든든 간단
        heavy:true,
        light:false,
        //국물이 시원.
        cool:false,
        meat:true,
        seaFood:false,
        cheap:false,
        flex:true,
        //국물이 가득
        fullOfBroth:false,
        noBroth:true,
        //익힌것
        cooked:true,
        raw:false,
    },
    {
        name:"산발원",
        //인덱스
        index:3,
        hot:true,
        cold:false,
        rice:true,
        bread:false,
        noodle:true,
        mood:false,
        friend:true,
        hot:false,
        notHot:true,
        spicy:false,
        //든든 간단
        heavy:true,
        light:false,
        //국물이 시원.
        cool:false,
        meat:false,
        seaFood:false,
        cheap:true,
        flex:false,
        //국물이 가득
        fullOfBroth:false,
        noBroth:false,
        //익힌것
        cooked:true,
        raw:false,
    },
    {
        name:"팔레드신",
        //인덱스
        index:4,
        hot:true,
        cold:false,
        rice:true,
        bread:false,
        noodle:true,
        mood:false,
        friend:true,
        hot:false,
        notHot:true,
        spicy:false,
        //든든 간단
        heavy:true,
        light:false,
        //국물이 시원.
        cool:false,
        meat:false,
        seaFood:false,
        cheap:true,
        flex:false,
        //국물이 가득
        fullOfBroth:false,
        noBroth:false,
        //익힌것
        cooked:true,
        raw:false,
    },
    {
        name:"다이닝룸",
        //인덱스
        index:5,
        hot:true,
        cold:false,
        rice:false,
        bread:true,
        noodle:false,
        mood:true,
        friend:false,
        //맴냐 안맵냐
        hot:false,
        notHot:true,
        //칼칼하냐
        spicy:false,
        //든든 간단
        heavy:true,
        light:false,
        //국물이 시원.
        cool:false,
        meat:true,
        seaFood:false,
        cheap:false,
        flex:true,
        //국물이 가득
        fullOfBroth:false,
        noBroth:true,
        //익힌것
        cooked:true,
        raw:false,
    },
    {
        name:"포르타나",
        //인덱스
        index:6,
        hot:true,
        cold:false,
        rice:false,
        bread:true,
        noodle:false,
        mood:true,
        friend:false,
        //맴냐 안맵냐
        hot:false,
        notHot:true,
        //칼칼하냐
        spicy:false,
        //든든 간단
        heavy:true,
        light:false,
        //국물이 시원.
        cool:false,
        meat:true,
        seaFood:false,
        cheap:false,
        flex:true,
        //국물이 가득
        fullOfBroth:false,
        noBroth:true,
        //익힌것
        cooked:true,
        raw:false,
    },
    {
        name:"톤쇼우",
        //인덱스
        index:7,
        hot:true,
        cold:false,
        rice:false,
        bread:false,
        noodle:false,
        mood:true,
        friend:false,
        //맴냐 안맵냐
        hot:false,
        notHot:true,
        //칼칼하냐
        spicy:false,
        //든든 간단
        heavy:true,
        light:false,
        //국물이 시원.
        cool:false,
        meat:true,
        seaFood:false,
        cheap:false,
        flex:true,
        //국물이 가득
        fullOfBroth:false,
        noBroth:true,
        //익힌것
        cooked:true,
        raw:false,
    },
    {
        name:"해목",
        //인덱스
        index:8,
        hot:true,
        cold:false,
        rice:false,
        bread:false,
        noodle:false,
        mood:true,
        friend:false,
        //맴냐 안맵냐
        hot:false,
        notHot:true,
        //칼칼하냐
        spicy:false,
        //든든 간단
        heavy:true,
        light:false,
        //국물이 시원.
        cool:false,
        meat:false,
        seaFood:true,
        cheap:false,
        flex:true,
        //국물이 가득
        fullOfBroth:false,
        noBroth:true,
        //익힌것
        cooked:true,
        raw:false,
    },
    {
        name:"피에프창",
        //인덱스
        index:9,
        hot:true,
        cold:false,
        rice:true,
        bread:false,
        noodle:false,
        mood:true,
        friend:false,
        //맴냐 안맵냐
        hot:false,
        notHot:true,
        //칼칼하냐
        spicy:false,
        //든든 간단
        heavy:true,
        light:false,
        //국물이 시원.
        cool:false,
        meat:false,
        seaFood:false,
        cheap:true,
        flex:false,
        //국물이 가득
        fullOfBroth:false,
        noBroth:true,
        //익힌것
        cooked:true,
        raw:false,
    },
    {
        name:"퍼스트부엌타이",
        //인덱스
        index:10,
        hot:true,
        cold:false,
        rice:true,
        bread:false,
        noodle:true,
        mood:false,
        friend:true,
        //맴냐 안맵냐
        hot:false,
        notHot:true,
        //칼칼하냐
        spicy:false,
        //든든 간단
        heavy:true,
        light:false,
        //국물이 시원.
        cool:false,
        meat:true,
        seaFood:false,
        cheap:false,
        flex:true,
        //국물이 가득
        fullOfBroth:false,
        noBroth:true,
        //익힌것
        cooked:true,
        raw:false,
    },
    {
        name:"비비비당",
        //인덱스
        index:11,
        hot:true,
        cold:false,
        rice:false,
        bread:true,
        noodle:false,
        mood:true,
        friend:false,
        //맴냐 안맵냐
        hot:false,
        notHot:true,
        //칼칼하냐
        spicy:false,
        //든든 간단
        heavy:false,
        light:true,
        //국물이 시원.
        cool:false,
        meat:false,
        seaFood:false,
        cheap:false,
        flex:true,
        //국물이 가득
        fullOfBroth:false,
        noBroth:true,
        //익힌것
        cooked:true,
        raw:false,
    },
    {
        name:"블랙업커피",
        //인덱스
        index:12,
        hot:true,
        cold:false,
        rice:false,
        bread:true,
        noodle:false,
        mood:true,
        friend:false,
        //맴냐 안맵냐
        hot:false,
        notHot:true,
        //칼칼하냐
        spicy:false,
        //든든 간단
        heavy:false,
        light:true,
        //국물이 시원.
        cool:false,
        meat:false,
        seaFood:false,
        cheap:false,
        flex:true,
        //국물이 가득
        fullOfBroth:false,
        noBroth:true,
        //익힌것
        cooked:true,
        raw:false,
    },
]
//경기 남부
const southreg = [
        {
            name:"호반",
            //인덱스
            index:1,
            hot:true,
            cold:false,
            rice:true,
            bread:false,
            noodle:false,
            mood:false,
            friend:true,
            hot:true,
            notHot:false,
            spicy:true,
            //든든 간단
            heavy:true,
            light:false,
            //국물이 시원.
            cool:false,
            meat:false,
            seaFood:true,
            cheap:true,
            flex:false,
            //국물이 가득
            fullOfBroth:false,
            noBroth:false,
            //익힌것
            cooked:true,
            raw:false,
        },
        {
            name:"맛짱조개",
            //인덱스
            index:2,
            hot:false,
            cold:true,
            rice:false,
            bread:false,
            noodle:false,
            mood:false,
            friend:true,
            //맴냐 안맵냐
            hot:false,
            notHot:true,
            //칼칼하냐
            spicy:false,
            //든든 간단
            heavy:false,
            light:true,
            //국물이 시원.
            cool:false,
            meat:false,
            seaFood:true,
            cheap:false,
            flex:true,
            //국물이 가득
            fullOfBroth:false,
            noBroth:true,
            //익힌것
            cooked:false,
            raw:true,
        },
        {
            name:"쥬에",
            //인덱스
            index:3,
            hot:true,
            cold:false,
            rice:false,
            bread:false,
            noodle:false,
            mood:true,
            friend:false,
            hot:false,
            notHot:true,
            spicy:false,
            //든든 간단
            heavy:true,
            light:false,
            //국물이 시원.
            cool:false,
            meat:false,
            seaFood:false,
            cheap:false,
            flex:true,
            //국물이 가득
            fullOfBroth:false,
            noBroth:false,
            //익힌것
            cooked:true,
            raw:false,
        },
        {
            name:"오향가",
            //인덱스
            index:4,
            hot:true,
            cold:false,
            rice:false,
            bread:false,
            noodle:false,
            mood:false,
            friend:true,
            hot:false,
            notHot:true,
            spicy:false,
            //든든 간단
            heavy:true,
            light:false,
            //국물이 시원.
            cool:false,
            meat:true,
            seaFood:false,
            cheap:false,
            flex:true,
            //국물이 가득
            fullOfBroth:false,
            noBroth:false,
            //익힌것
            cooked:true,
            raw:false,
        },
        {
            name:"알라프리마",
            //인덱스
            index:5,
            hot:true,
            cold:false,
            rice:false,
            bread:true,
            noodle:false,
            mood:true,
            friend:false,
            //맴냐 안맵냐
            hot:false,
            notHot:true,
            //칼칼하냐
            spicy:false,
            //든든 간단
            heavy:true,
            light:false,
            //국물이 시원.
            cool:false,
            meat:true,
            seaFood:false,
            cheap:false,
            flex:true,
            //국물이 가득
            fullOfBroth:false,
            noBroth:true,
            //익힌것
            cooked:true,
            raw:false,
        },
        {
            name:"바위파스타바",
            //인덱스
            index:6,
            hot:true,
            cold:false,
            rice:false,
            bread:true,
            noodle:true,
            mood:true,
            friend:false,
            //맴냐 안맵냐
            hot:false,
            notHot:true,
            //칼칼하냐
            spicy:false,
            //든든 간단
            heavy:false,
            light:true,
            //국물이 시원.
            cool:false,
            meat:false,
            seaFood:false,
            cheap:false,
            flex:true,
            //국물이 가득
            fullOfBroth:false,
            noBroth:true,
            //익힌것
            cooked:true,
            raw:false,
        },
        {
            name:"톤쇼우",
            //인덱스
            index:7,
            hot:true,
            cold:false,
            rice:false,
            bread:false,
            noodle:false,
            mood:true,
            friend:false,
            //맴냐 안맵냐
            hot:false,
            notHot:true,
            //칼칼하냐
            spicy:true,
            //든든 간단
            heavy:false,
            light:true,
            //국물이 시원.
            cool:true,
            meat:false,
            seaFood:true,
            cheap:false,
            flex:true,
            //국물이 가득
            fullOfBroth:true,
            noBroth:true,
            //익힌것
            cooked:false,
            raw:true,
        },
        {
            name:"스시키",
            //인덱스
            index:8,
            hot:false,
            cold:true,
            rice:true,
            bread:false,
            noodle:false,
            mood:true,
            friend:false,
            //맴냐 안맵냐
            hot:false,
            notHot:true,
            //칼칼하냐
            spicy:false,
            //든든 간단
            heavy:false,
            light:true,
            //국물이 시원.
            cool:false,
            meat:false,
            seaFood:true,
            cheap:false,
            flex:true,
            //국물이 가득
            fullOfBroth:false,
            noBroth:true,
            //익힌것
            cooked:true,
            raw:false,
        },
        {
            name:"더마칸",
            //인덱스
            index:9,
            hot:true,
            cold:false,
            rice:true,
            bread:false,
            noodle:true,
            mood:true,
            friend:false,
            //맴냐 안맵냐
            hot:true,
            notHot:true,
            //칼칼하냐
            spicy:false,
            //든든 간단
            heavy:true,
            light:false,
            //국물이 시원.
            cool:false,
            meat:false,
            seaFood:false,
            cheap:true,
            flex:false,
            //국물이 가득
            fullOfBroth:false,
            noBroth:true,
            //익힌것
            cooked:true,
            raw:false,
        },
        {
            name:"연회미식",
            //인덱스
            index:10,
            hot:true,
            cold:false,
            rice:false,
            bread:false,
            noodle:true,
            mood:false,
            friend:true,
            //맴냐 안맵냐
            hot:false,
            notHot:true,
            //칼칼하냐
            spicy:false,
            //든든 간단
            heavy:true,
            light:false,
            //국물이 시원.
            cool:false,
            meat:true,
            seaFood:true,
            cheap:true,
            flex:false,
            //국물이 가득
            fullOfBroth:true,
            noBroth:true,
            //익힌것
            cooked:true,
            raw:false,
        },
        {
            name:"따빠디또 디저트 따빠스바",
            //인덱스
            index:11,
            hot:true,
            cold:false,
            rice:false,
            bread:true,
            noodle:false,
            mood:true,
            friend:false,
            //맴냐 안맵냐
            hot:false,
            notHot:true,
            //칼칼하냐
            spicy:false,
            //든든 간단
            heavy:false,
            light:true,
            //국물이 시원.
            cool:false,
            meat:false,
            seaFood:false,
            cheap:false,
            flex:true,
            //국물이 가득
            fullOfBroth:false,
            noBroth:true,
            //익힌것
            cooked:true,
            raw:false,
        },
        {
            name:"회현카페",
            //인덱스
            index:12,
            hot:true,
            cold:false,
            rice:true,
            bread:false,
            noodle:true,
            mood:true,
            friend:false,
            //맴냐 안맵냐
            hot:false,
            notHot:true,
            //칼칼하냐
            spicy:false,
            //든든 간단
            heavy:true,
            light:false,
            //국물이 시원.
            cool:false,
            meat:true,
            seaFood:true,
            cheap:true,
            flex:false,
            //국물이 가득
            fullOfBroth:false,
            noBroth:true,
            //익힌것
            cooked:true,
            raw:false,
        },
]
//강릉
const gangreg = [
            {
                name:"호반",
                //인덱스
                index:1,
                hot:true,
                cold:false,
                rice:true,
                bread:false,
                noodle:false,
                mood:false,
                friend:true,
                hot:true,
                notHot:false,
                spicy:true,
                //든든 간단
                heavy:true,
                light:false,
                //국물이 시원.
                cool:false,
                meat:false,
                seaFood:true,
                cheap:true,
                flex:false,
                //국물이 가득
                fullOfBroth:false,
                noBroth:false,
                //익힌것
                cooked:true,
                raw:false,
            },
            {
                name:"맛짱조개",
                //인덱스
                index:2,
                hot:false,
                cold:true,
                rice:false,
                bread:false,
                noodle:false,
                mood:false,
                friend:true,
                //맴냐 안맵냐
                hot:false,
                notHot:true,
                //칼칼하냐
                spicy:false,
                //든든 간단
                heavy:false,
                light:true,
                //국물이 시원.
                cool:false,
                meat:false,
                seaFood:true,
                cheap:false,
                flex:true,
                //국물이 가득
                fullOfBroth:false,
                noBroth:true,
                //익힌것
                cooked:false,
                raw:true,
            },
            {
                name:"쥬에",
                //인덱스
                index:3,
                hot:true,
                cold:false,
                rice:false,
                bread:false,
                noodle:false,
                mood:true,
                friend:false,
                hot:false,
                notHot:true,
                spicy:false,
                //든든 간단
                heavy:true,
                light:false,
                //국물이 시원.
                cool:false,
                meat:false,
                seaFood:false,
                cheap:false,
                flex:true,
                //국물이 가득
                fullOfBroth:false,
                noBroth:false,
                //익힌것
                cooked:true,
                raw:false,
            },
            {
                name:"오향가",
                //인덱스
                index:4,
                hot:true,
                cold:false,
                rice:false,
                bread:false,
                noodle:false,
                mood:false,
                friend:true,
                hot:false,
                notHot:true,
                spicy:false,
                //든든 간단
                heavy:true,
                light:false,
                //국물이 시원.
                cool:false,
                meat:true,
                seaFood:false,
                cheap:false,
                flex:true,
                //국물이 가득
                fullOfBroth:false,
                noBroth:false,
                //익힌것
                cooked:true,
                raw:false,
            },
            {
                name:"알라프리마",
                //인덱스
                index:5,
                hot:true,
                cold:false,
                rice:false,
                bread:true,
                noodle:false,
                mood:true,
                friend:false,
                //맴냐 안맵냐
                hot:false,
                notHot:true,
                //칼칼하냐
                spicy:false,
                //든든 간단
                heavy:true,
                light:false,
                //국물이 시원.
                cool:false,
                meat:true,
                seaFood:false,
                cheap:false,
                flex:true,
                //국물이 가득
                fullOfBroth:false,
                noBroth:true,
                //익힌것
                cooked:true,
                raw:false,
            },
            {
                name:"바위파스타바",
                //인덱스
                index:6,
                hot:true,
                cold:false,
                rice:false,
                bread:true,
                noodle:true,
                mood:true,
                friend:false,
                //맴냐 안맵냐
                hot:false,
                notHot:true,
                //칼칼하냐
                spicy:false,
                //든든 간단
                heavy:false,
                light:true,
                //국물이 시원.
                cool:false,
                meat:false,
                seaFood:false,
                cheap:false,
                flex:true,
                //국물이 가득
                fullOfBroth:false,
                noBroth:true,
                //익힌것
                cooked:true,
                raw:false,
            },
            {
                name:"톤쇼우",
                //인덱스
                index:7,
                hot:true,
                cold:false,
                rice:false,
                bread:false,
                noodle:false,
                mood:true,
                friend:false,
                //맴냐 안맵냐
                hot:false,
                notHot:true,
                //칼칼하냐
                spicy:true,
                //든든 간단
                heavy:false,
                light:true,
                //국물이 시원.
                cool:true,
                meat:false,
                seaFood:true,
                cheap:false,
                flex:true,
                //국물이 가득
                fullOfBroth:true,
                noBroth:true,
                //익힌것
                cooked:false,
                raw:true,
            },
            {
                name:"스시키",
                //인덱스
                index:8,
                hot:false,
                cold:true,
                rice:true,
                bread:false,
                noodle:false,
                mood:true,
                friend:false,
                //맴냐 안맵냐
                hot:false,
                notHot:true,
                //칼칼하냐
                spicy:false,
                //든든 간단
                heavy:false,
                light:true,
                //국물이 시원.
                cool:false,
                meat:false,
                seaFood:true,
                cheap:false,
                flex:true,
                //국물이 가득
                fullOfBroth:false,
                noBroth:true,
                //익힌것
                cooked:true,
                raw:false,
            },
            {
                name:"더마칸",
                //인덱스
                index:9,
                hot:true,
                cold:false,
                rice:true,
                bread:false,
                noodle:true,
                mood:true,
                friend:false,
                //맴냐 안맵냐
                hot:true,
                notHot:true,
                //칼칼하냐
                spicy:false,
                //든든 간단
                heavy:true,
                light:false,
                //국물이 시원.
                cool:false,
                meat:false,
                seaFood:false,
                cheap:true,
                flex:false,
                //국물이 가득
                fullOfBroth:false,
                noBroth:true,
                //익힌것
                cooked:true,
                raw:false,
            },
            {
                name:"연회미식",
                //인덱스
                index:10,
                hot:true,
                cold:false,
                rice:false,
                bread:false,
                noodle:true,
                mood:false,
                friend:true,
                //맴냐 안맵냐
                hot:false,
                notHot:true,
                //칼칼하냐
                spicy:false,
                //든든 간단
                heavy:true,
                light:false,
                //국물이 시원.
                cool:false,
                meat:true,
                seaFood:true,
                cheap:true,
                flex:false,
                //국물이 가득
                fullOfBroth:true,
                noBroth:true,
                //익힌것
                cooked:true,
                raw:false,
            },
            {
                name:"따빠디또 디저트 따빠스바",
                //인덱스
                index:11,
                hot:true,
                cold:false,
                rice:false,
                bread:true,
                noodle:false,
                mood:true,
                friend:false,
                //맴냐 안맵냐
                hot:false,
                notHot:true,
                //칼칼하냐
                spicy:false,
                //든든 간단
                heavy:false,
                light:true,
                //국물이 시원.
                cool:false,
                meat:false,
                seaFood:false,
                cheap:false,
                flex:true,
                //국물이 가득
                fullOfBroth:false,
                noBroth:true,
                //익힌것
                cooked:true,
                raw:false,
            },
            {
                name:"회현카페",
                //인덱스
                index:12,
                hot:true,
                cold:false,
                rice:true,
                bread:false,
                noodle:true,
                mood:true,
                friend:false,
                //맴냐 안맵냐
                hot:false,
                notHot:true,
                //칼칼하냐
                spicy:false,
                //든든 간단
                heavy:true,
                light:false,
                //국물이 시원.
                cool:false,
                meat:true,
                seaFood:true,
                cheap:true,
                flex:false,
                //국물이 가득
                fullOfBroth:false,
                noBroth:true,
                //익힌것
                cooked:true,
                raw:false,
            },
]
//대전
const daejeonreg = [
    {
        name:"호반",
        //인덱스
        index:1,
        hot:true,
        cold:false,
        rice:true,
        bread:false,
        noodle:false,
        mood:false,
        friend:true,
        hot:true,
        notHot:false,
        spicy:true,
        //든든 간단
        heavy:true,
        light:false,
        //국물이 시원.
        cool:false,
        meat:false,
        seaFood:true,
        cheap:true,
        flex:false,
        //국물이 가득
        fullOfBroth:false,
        noBroth:false,
        //익힌것
        cooked:true,
        raw:false,
    },
    {
        name:"맛짱조개",
        //인덱스
        index:2,
        hot:false,
        cold:true,
        rice:false,
        bread:false,
        noodle:false,
        mood:false,
        friend:true,
        //맴냐 안맵냐
        hot:false,
        notHot:true,
        //칼칼하냐
        spicy:false,
        //든든 간단
        heavy:false,
        light:true,
        //국물이 시원.
        cool:false,
        meat:false,
        seaFood:true,
        cheap:false,
        flex:true,
        //국물이 가득
        fullOfBroth:false,
        noBroth:true,
        //익힌것
        cooked:false,
        raw:true,
    },
    {
        name:"쥬에",
        //인덱스
        index:3,
        hot:true,
        cold:false,
        rice:false,
        bread:false,
        noodle:false,
        mood:true,
        friend:false,
        hot:false,
        notHot:true,
        spicy:false,
        //든든 간단
        heavy:true,
        light:false,
        //국물이 시원.
        cool:false,
        meat:false,
        seaFood:false,
        cheap:false,
        flex:true,
        //국물이 가득
        fullOfBroth:false,
        noBroth:false,
        //익힌것
        cooked:true,
        raw:false,
    },
    {
        name:"오향가",
        //인덱스
        index:4,
        hot:true,
        cold:false,
        rice:false,
        bread:false,
        noodle:false,
        mood:false,
        friend:true,
        hot:false,
        notHot:true,
        spicy:false,
        //든든 간단
        heavy:true,
        light:false,
        //국물이 시원.
        cool:false,
        meat:true,
        seaFood:false,
        cheap:false,
        flex:true,
        //국물이 가득
        fullOfBroth:false,
        noBroth:false,
        //익힌것
        cooked:true,
        raw:false,
    },
    {
        name:"알라프리마",
        //인덱스
        index:5,
        hot:true,
        cold:false,
        rice:false,
        bread:true,
        noodle:false,
        mood:true,
        friend:false,
        //맴냐 안맵냐
        hot:false,
        notHot:true,
        //칼칼하냐
        spicy:false,
        //든든 간단
        heavy:true,
        light:false,
        //국물이 시원.
        cool:false,
        meat:true,
        seaFood:false,
        cheap:false,
        flex:true,
        //국물이 가득
        fullOfBroth:false,
        noBroth:true,
        //익힌것
        cooked:true,
        raw:false,
    },
    {
        name:"바위파스타바",
        //인덱스
        index:6,
        hot:true,
        cold:false,
        rice:false,
        bread:true,
        noodle:true,
        mood:true,
        friend:false,
        //맴냐 안맵냐
        hot:false,
        notHot:true,
        //칼칼하냐
        spicy:false,
        //든든 간단
        heavy:false,
        light:true,
        //국물이 시원.
        cool:false,
        meat:false,
        seaFood:false,
        cheap:false,
        flex:true,
        //국물이 가득
        fullOfBroth:false,
        noBroth:true,
        //익힌것
        cooked:true,
        raw:false,
    },
    {
        name:"톤쇼우",
        //인덱스
        index:7,
        hot:true,
        cold:false,
        rice:false,
        bread:false,
        noodle:false,
        mood:true,
        friend:false,
        //맴냐 안맵냐
        hot:false,
        notHot:true,
        //칼칼하냐
        spicy:true,
        //든든 간단
        heavy:false,
        light:true,
        //국물이 시원.
        cool:true,
        meat:false,
        seaFood:true,
        cheap:false,
        flex:true,
        //국물이 가득
        fullOfBroth:true,
        noBroth:true,
        //익힌것
        cooked:false,
        raw:true,
    },
    {
        name:"스시키",
        //인덱스
        index:8,
        hot:false,
        cold:true,
        rice:true,
        bread:false,
        noodle:false,
        mood:true,
        friend:false,
        //맴냐 안맵냐
        hot:false,
        notHot:true,
        //칼칼하냐
        spicy:false,
        //든든 간단
        heavy:false,
        light:true,
        //국물이 시원.
        cool:false,
        meat:false,
        seaFood:true,
        cheap:false,
        flex:true,
        //국물이 가득
        fullOfBroth:false,
        noBroth:true,
        //익힌것
        cooked:true,
        raw:false,
    },
    {
        name:"더마칸",
        //인덱스
        index:9,
        hot:true,
        cold:false,
        rice:true,
        bread:false,
        noodle:true,
        mood:true,
        friend:false,
        //맴냐 안맵냐
        hot:true,
        notHot:true,
        //칼칼하냐
        spicy:false,
        //든든 간단
        heavy:true,
        light:false,
        //국물이 시원.
        cool:false,
        meat:false,
        seaFood:false,
        cheap:true,
        flex:false,
        //국물이 가득
        fullOfBroth:false,
        noBroth:true,
        //익힌것
        cooked:true,
        raw:false,
    },
    {
        name:"연회미식",
        //인덱스
        index:10,
        hot:true,
        cold:false,
        rice:false,
        bread:false,
        noodle:true,
        mood:false,
        friend:true,
        //맴냐 안맵냐
        hot:false,
        notHot:true,
        //칼칼하냐
        spicy:false,
        //든든 간단
        heavy:true,
        light:false,
        //국물이 시원.
        cool:false,
        meat:true,
        seaFood:true,
        cheap:true,
        flex:false,
        //국물이 가득
        fullOfBroth:true,
        noBroth:true,
        //익힌것
        cooked:true,
        raw:false,
    },
    {
        name:"따빠디또 디저트 따빠스바",
        //인덱스
        index:11,
        hot:true,
        cold:false,
        rice:false,
        bread:true,
        noodle:false,
        mood:true,
        friend:false,
        //맴냐 안맵냐
        hot:false,
        notHot:true,
        //칼칼하냐
        spicy:false,
        //든든 간단
        heavy:false,
        light:true,
        //국물이 시원.
        cool:false,
        meat:false,
        seaFood:false,
        cheap:false,
        flex:true,
        //국물이 가득
        fullOfBroth:false,
        noBroth:true,
        //익힌것
        cooked:true,
        raw:false,
    },
    {
        name:"회현카페",
        //인덱스
        index:12,
        hot:true,
        cold:false,
        rice:true,
        bread:false,
        noodle:true,
        mood:true,
        friend:false,
        //맴냐 안맵냐
        hot:false,
        notHot:true,
        //칼칼하냐
        spicy:false,
        //든든 간단
        heavy:true,
        light:false,
        //국물이 시원.
        cool:false,
        meat:true,
        seaFood:true,
        cheap:true,
        flex:false,
        //국물이 가득
        fullOfBroth:false,
        noBroth:true,
        //익힌것
        cooked:true,
        raw:false,
    },
]
//춘천
const chuncheonreg = [
    {
        name:"호반",
        //인덱스
        index:1,
        hot:true,
        cold:false,
        rice:true,
        bread:false,
        noodle:false,
        mood:false,
        friend:true,
        hot:true,
        notHot:false,
        spicy:true,
        //든든 간단
        heavy:true,
        light:false,
        //국물이 시원.
        cool:false,
        meat:false,
        seaFood:true,
        cheap:true,
        flex:false,
        //국물이 가득
        fullOfBroth:false,
        noBroth:false,
        //익힌것
        cooked:true,
        raw:false,
    },
    {
        name:"맛짱조개",
        //인덱스
        index:2,
        hot:false,
        cold:true,
        rice:false,
        bread:false,
        noodle:false,
        mood:false,
        friend:true,
        //맴냐 안맵냐
        hot:false,
        notHot:true,
        //칼칼하냐
        spicy:false,
        //든든 간단
        heavy:false,
        light:true,
        //국물이 시원.
        cool:false,
        meat:false,
        seaFood:true,
        cheap:false,
        flex:true,
        //국물이 가득
        fullOfBroth:false,
        noBroth:true,
        //익힌것
        cooked:false,
        raw:true,
    },
    {
        name:"쥬에",
        //인덱스
        index:3,
        hot:true,
        cold:false,
        rice:false,
        bread:false,
        noodle:false,
        mood:true,
        friend:false,
        hot:false,
        notHot:true,
        spicy:false,
        //든든 간단
        heavy:true,
        light:false,
        //국물이 시원.
        cool:false,
        meat:false,
        seaFood:false,
        cheap:false,
        flex:true,
        //국물이 가득
        fullOfBroth:false,
        noBroth:false,
        //익힌것
        cooked:true,
        raw:false,
    },
    {
        name:"오향가",
        //인덱스
        index:4,
        hot:true,
        cold:false,
        rice:false,
        bread:false,
        noodle:false,
        mood:false,
        friend:true,
        hot:false,
        notHot:true,
        spicy:false,
        //든든 간단
        heavy:true,
        light:false,
        //국물이 시원.
        cool:false,
        meat:true,
        seaFood:false,
        cheap:false,
        flex:true,
        //국물이 가득
        fullOfBroth:false,
        noBroth:false,
        //익힌것
        cooked:true,
        raw:false,
    },
    {
        name:"알라프리마",
        //인덱스
        index:5,
        hot:true,
        cold:false,
        rice:false,
        bread:true,
        noodle:false,
        mood:true,
        friend:false,
        //맴냐 안맵냐
        hot:false,
        notHot:true,
        //칼칼하냐
        spicy:false,
        //든든 간단
        heavy:true,
        light:false,
        //국물이 시원.
        cool:false,
        meat:true,
        seaFood:false,
        cheap:false,
        flex:true,
        //국물이 가득
        fullOfBroth:false,
        noBroth:true,
        //익힌것
        cooked:true,
        raw:false,
    },
    {
        name:"바위파스타바",
        //인덱스
        index:6,
        hot:true,
        cold:false,
        rice:false,
        bread:true,
        noodle:true,
        mood:true,
        friend:false,
        //맴냐 안맵냐
        hot:false,
        notHot:true,
        //칼칼하냐
        spicy:false,
        //든든 간단
        heavy:false,
        light:true,
        //국물이 시원.
        cool:false,
        meat:false,
        seaFood:false,
        cheap:false,
        flex:true,
        //국물이 가득
        fullOfBroth:false,
        noBroth:true,
        //익힌것
        cooked:true,
        raw:false,
    },
    {
        name:"톤쇼우",
        //인덱스
        index:7,
        hot:true,
        cold:false,
        rice:false,
        bread:false,
        noodle:false,
        mood:true,
        friend:false,
        //맴냐 안맵냐
        hot:false,
        notHot:true,
        //칼칼하냐
        spicy:true,
        //든든 간단
        heavy:false,
        light:true,
        //국물이 시원.
        cool:true,
        meat:false,
        seaFood:true,
        cheap:false,
        flex:true,
        //국물이 가득
        fullOfBroth:true,
        noBroth:true,
        //익힌것
        cooked:false,
        raw:true,
    },
    {
        name:"스시키",
        //인덱스
        index:8,
        hot:false,
        cold:true,
        rice:true,
        bread:false,
        noodle:false,
        mood:true,
        friend:false,
        //맴냐 안맵냐
        hot:false,
        notHot:true,
        //칼칼하냐
        spicy:false,
        //든든 간단
        heavy:false,
        light:true,
        //국물이 시원.
        cool:false,
        meat:false,
        seaFood:true,
        cheap:false,
        flex:true,
        //국물이 가득
        fullOfBroth:false,
        noBroth:true,
        //익힌것
        cooked:true,
        raw:false,
    },
    {
        name:"더마칸",
        //인덱스
        index:9,
        hot:true,
        cold:false,
        rice:true,
        bread:false,
        noodle:true,
        mood:true,
        friend:false,
        //맴냐 안맵냐
        hot:true,
        notHot:true,
        //칼칼하냐
        spicy:false,
        //든든 간단
        heavy:true,
        light:false,
        //국물이 시원.
        cool:false,
        meat:false,
        seaFood:false,
        cheap:true,
        flex:false,
        //국물이 가득
        fullOfBroth:false,
        noBroth:true,
        //익힌것
        cooked:true,
        raw:false,
    },
    {
        name:"연회미식",
        //인덱스
        index:10,
        hot:true,
        cold:false,
        rice:false,
        bread:false,
        noodle:true,
        mood:false,
        friend:true,
        //맴냐 안맵냐
        hot:false,
        notHot:true,
        //칼칼하냐
        spicy:false,
        //든든 간단
        heavy:true,
        light:false,
        //국물이 시원.
        cool:false,
        meat:true,
        seaFood:true,
        cheap:true,
        flex:false,
        //국물이 가득
        fullOfBroth:true,
        noBroth:true,
        //익힌것
        cooked:true,
        raw:false,
    },
    {
        name:"따빠디또 디저트 따빠스바",
        //인덱스
        index:11,
        hot:true,
        cold:false,
        rice:false,
        bread:true,
        noodle:false,
        mood:true,
        friend:false,
        //맴냐 안맵냐
        hot:false,
        notHot:true,
        //칼칼하냐
        spicy:false,
        //든든 간단
        heavy:false,
        light:true,
        //국물이 시원.
        cool:false,
        meat:false,
        seaFood:false,
        cheap:false,
        flex:true,
        //국물이 가득
        fullOfBroth:false,
        noBroth:true,
        //익힌것
        cooked:true,
        raw:false,
    },
    {
        name:"회현카페",
        //인덱스
        index:12,
        hot:true,
        cold:false,
        rice:true,
        bread:false,
        noodle:true,
        mood:true,
        friend:false,
        //맴냐 안맵냐
        hot:false,
        notHot:true,
        //칼칼하냐
        spicy:false,
        //든든 간단
        heavy:true,
        light:false,
        //국물이 시원.
        cool:false,
        meat:true,
        seaFood:true,
        cheap:true,
        flex:false,
        //국물이 가득
        fullOfBroth:false,
        noBroth:true,
        //익힌것
        cooked:true,
        raw:false,
    },
]

