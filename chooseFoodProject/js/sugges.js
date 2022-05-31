let startBtn=document.getElementById("startBtn");


let busan1="busan";
let seoul1="seoul";
let southGyeong1="South";
let northGyeong1="Northern";
let daegu1="daegu";
let daejeon1="daejeon";
let gangneung1="gangneung";
let chuncheon1="chuncheon";




$('#startBtn').click(function(){
    location.href='../../../html/takeplan/Sugges/goToSug.html';
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



// localStorage.removeItem('filteredDB');
// localStorage.removeItem('DB');
// localStorage.removeItem('tenquesDB');
// localStorage.removeItem('prepage');
// localStorage.removeItem('busanJson');
// localStorage.removeItem('regionList');
// localStorage.removeItem('length');



//부산
const busanreg = [
    {
        name:"할매국밥",
        //인덱스
        index:1,
        img:"../../../img/busan_korean_01.jpeg",
        link:"https://place.map.kakao.com/16694746",
    },
    {
        name:"해운대소문난암소갈비집",
        //인덱스
        index:2,
        img:"../../../img/busan_korean_02.jpeg",
        link:"https://place.map.kakao.com/8149130",
    },
    {
        name:"산발원",
        //인덱스
        index:3,
        img:"../../../img/busan_china_01.jpeg",
        link:"https://place.map.kakao.com/8407645",
    },
    {
        name:"팔레드신",
        //인덱스
        index:4,
        img:"../../../img/busan_china_02.jpeg",
        link:"https://place.map.kakao.com/1024056719",
    },
    {
        name:"다이닝룸",
        //인덱스
        index:5,
        img:"../../../img/busan_western_01.jpeg",
        link:"https://place.map.kakao.com/21539138",
    },
    {
        name:"포르타나",
        //인덱스
        index:6,
        img:"../../../img/busan_western_02.jpeg",
        link:"https://place.map.kakao.com/784538669",
    },
    {
        name:"톤쇼우",
        //인덱스
        index:7,
        img:"../../../img/busan_japan_01.jpeg",
        link:"https://place.map.kakao.com/704518356",
    },
    {
        name:"해목",
        //인덱스
        index:8,
        img:"../../../img/busan_japan_02.jpeg",
        link:"https://place.map.kakao.com/977177107"
    },
    {
        name:"피에프창",
        //인덱스
        index:9,
        img:"../../../img/busan_asian_01.jpeg",
        link:"https://place.map.kakao.com/27507546",
    },
    {
        name:"퍼스트부엌타이",
        //인덱스
        index:10,
        img:"../../../img/busan_asian_02.jpeg",
        link:"https://place.map.kakao.com/27457937",
    },
    {
        name:"비비비당",
        //인덱스
        index:11,
        img:"../../../img/busan_cafe_01.jpeg",
        link:"https://place.map.kakao.com/18451449",
    },
    {
        name:"블랙업커피",
        //인덱스
        index:12,
        img:"../../../img/busan_cafe_02.jpeg",
        link:"https://place.map.kakao.com/12807299",
    },
]
//서울
const seoulreg = [
    {
            name:"호반",
            //인덱스
            index:1,
    },
    {
            name:"맛짱조개",
            //인덱스
            index:2,
    },
    {
            name:"쥬에",
            //인덱스
            index:3,
    },
    {
            name:"오향가",
            //인덱스
            index:4,
    },
    {
            name:"알라프리마",
            //인덱스
            index:5,
    },
    {
           name:"바위파스타바",
            //인덱스
            index:6,
    },
    {
            name:"톤쇼우",
            //인덱스
            index:7,
    },
    {
            name:"스시키",
            //인덱스
            index:8,
    },
    {
            name:"더마칸",
            //인덱스
            index:9,
        },
        {
            name:"연회미식",
            //인덱스
            index:10,
        },
        {
            name:"따빠디또 디저트 따빠스바",
            //인덱스
            index:11,
        },
        {
            name:"회현카페",
            //인덱스
            index:12,
        },
]
//대구
const daegureg = [
            {
                name:"호반",
                //인덱스
                index:1,
            },
            {
                name:"맛짱조개",
                //인덱스
                index:2,
            },
            {
                name:"쥬에",
                //인덱스
                index:3,
            },
            {
                name:"오향가",
                //인덱스
                index:4,
            },
            {
                name:"알라프리마",
                //인덱스
                index:5,
            },
            {
                name:"바위파스타바",
                //인덱스
                index:6,
            },
            {
                name:"톤쇼우",
                //인덱스
                index:7,
            },
            {
                name:"스시키",
                //인덱스
                index:8,
            },
            {
                name:"더마칸",
                //인덱스
                index:9,
            },
            {
                name:"연회미식",
                //인덱스
                index:10,
            },
            {
                name:"따빠디또 디저트 따빠스바",
                //인덱스
                index:11,
            },
            {
                name:"회현카페",
                //인덱스
                index:12,
               
            },
]
    //경기 북부
const northreg = [
        {
            name:"할매국밥",
            //인덱스
            index:1,
        },
        {
            name:"해운대소문난암소갈비집",
            //인덱스
            index:2,
        },
        {
            name:"산발원",
            //인덱스
            index:3,
        },
        {
            name:"팔레드신",
            //인덱스
            index:4,
        },
        {
            name:"다이닝룸",
            //인덱스
            index:5,
        },
        {
            name:"포르타나",
            //인덱스
            index:6,
        },
        {
            name:"톤쇼우",
            //인덱스
            index:7,
        },
        {
            name:"해목",
            //인덱스
            index:8,
        },
        {
            name:"피에프창",
            //인덱스
            index:9,
            
        },
        {
            name:"퍼스트부엌타이",
            //인덱스
            index:10,
            
        },
        {
            name:"비비비당",
            //인덱스
            index:11,
            
        },
        {
            name:"블랙업커피",
            //인덱스
            index:12,
            
        },
]
    //경기 남부
const southreg = [
            {
                name:"호반",
                //인덱스
                index:1,
                
            },
            {
                name:"맛짱조개",
                //인덱스
                index:2,             
            },
            {
                name:"쥬에",
                //인덱스
                index:3,            
            },
            {
                name:"오향가",
                //인덱스
                index:4              
            },
            {
                name:"알라프리마",
                //인덱스
                index:5,               
            },
            {
                name:"바위파스타바",
                //인덱스
                index:6,                
            },
            {
                name:"톤쇼우",
                //인덱스
                index:7,                
            },
            {
                name:"스시키",
                //인덱스
                index:8,                
            },
            {
                name:"더마칸",
                //인덱스
                index:9,                
            },
            {
                name:"연회미식",
                //인덱스
                index:10,
           
            },
            {
                name:"따빠디또 디저트 따빠스바",
                //인덱스
                index:11,
            },
            {
                name:"회현카페",
                //인덱스
                index:12,
            },
]
//강릉
const gangreg = [
    {
                    name:"호반",
                    //인덱스
                    index:1,

    },
    {
        name:"맛짱조개",
        //인덱스
        index:2,
                    
    },
    {
        name:"쥬에",
        //인덱스
        index:3,
                   
    },
    {
        name:"오향가",
        //인덱스
       index:4,
                    
    },
    {
        name:"알라프리마",
        //인덱스
        index:5,
    },
    {
        name:"바위파스타바",
        //인덱스
        index:6,
    },
    {
        name:"톤쇼우",
        //인덱스
        index:7,
                
                },
            {
                    name:"스시키",
                    //인덱스
                    index:8,

            },
            {
                    name:"더마칸",
                    //인덱스
                    index:9,
                },
                {
                    name:"연회미식",
                    //인덱스
                    index:10,
                
                },
                {
                    name:"따빠디또 디저트 따빠스바",
                    //인덱스
                    index:11,
                   
                },
                {
                    name:"회현카페",
                    //인덱스
                    index:12,
                    
                },
]
    //대전
const daejeonreg = [
        {
            name:"호반",
            //인덱스
            index:1,
           
        },
        {
            name:"맛짱조개",
            //인덱스
            index:2,
            
        },
        {
            name:"쥬에",
            //인덱스
            index:3,
            
        },
        {
            name:"오향가",
            //인덱스
            index:4,
            
        },
        {
            name:"알라프리마",
            //인덱스
            index:5,
            
        },
        {
            name:"바위파스타바",
            //인덱스
            index:6,
            
        },
        {
            name:"톤쇼우",
            //인덱스
            index:7,

        },
        {
            name:"스시키",
            //인덱스
            index:8,
          
        },
        {
            name:"더마칸",
            //인덱스
            index:9,
            hot:true,
           
        },
        {
            name:"연회미식",
            //인덱스
            index:10,
            hot:true,
            
        },
        {
            name:"따빠디또 디저트 따빠스바",
            //인덱스
            index:11,
         
        },
        {
            name:"회현카페",
            //인덱스
            index:12,

        },
]
    //춘천
const chuncheonreg = [
        {
            name:"호반",
            //인덱스
            index:1,
            
        },
        {
            name:"맛짱조개",
            //인덱스
            index:2,
           
        },
        {
            name:"쥬에",
            //인덱스
            index:3,
            
        },
        {
            name:"오향가",
            //인덱스
            index:4,
            
        },
        {
            name:"알라프리마",
            //인덱스
            index:5,
           
        },
        {
            name:"바위파스타바",
            //인덱스

        },
        {
            name:"톤쇼우",
            //인덱스
            index:7,
            
        },
        {
            name:"스시키",
            //인덱스
            index:8,
                    
        },
        {
            name:"더마칸",
            //인덱스
            index:9,
        },
        {
            name:"연회미식",
            //인덱스
            index:10,

        },
        {
            name:"따빠디또 디저트 따빠스바",
            //인덱스
            index:11,

        },
        {

        },
]

