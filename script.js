'use strict'; /* 厳格にエラーをチェック */

const weatherCode = {
  100: ["100.svg", "500.svg", "晴れ"],
  101: ["101.svg", "501.svg", "晴れ時々曇り"],
  102: ["102.svg", "502.svg", "晴れ一時雨"],
  103: ["102.svg", "502.svg", "晴れ時々雨"],
  104: ["104.svg", "504.svg", "晴れ一時雪"],
  105: ["104.svg", "504.svg", "晴れ時々雪"],
  106: ["102.svg", "502.svg", "晴れ一時雨か雪"],
  107: ["102.svg", "502.svg", "晴れ時々雨か雪"],
  108: ["102.svg", "502.svg", "晴れ一時雨か雷雨"],
  110: ["110.svg", "510.svg", "晴れ後時々曇り"],
  111: ["110.svg", "510.svg", "晴れ後曇り"],
  112: ["112.svg", "512.svg", "晴れ後一時雨"],
  113: ["112.svg", "512.svg", "晴れ後時々雨"],
  114: ["112.svg", "512.svg", "晴れ後雨"],
  115: ["115.svg", "515.svg", "晴れ後一時雪"],
  116: ["115.svg", "515.svg", "晴れ後時々雪"],
  117: ["115.svg", "515.svg", "晴れ後雪"],
  118: ["112.svg", "512.svg", "晴れ後雨か雪"],
  119: ["112.svg", "512.svg", "晴れ後雨か雷雨"],
  120: ["102.svg", "502.svg", "晴れ朝夕一時雨"],
  121: ["102.svg", "502.svg", "晴れ朝の内一時雨"],
  122: ["112.svg", "512.svg", "晴れ夕方一時雨"],
  123: ["100.svg", "500.svg", "晴れ山沿い雷雨"],
  124: ["100.svg", "500.svg", "晴れ山沿い雪"],
  125: ["112.svg", "512.svg", "晴れ午後は雷雨"],
  126: ["112.svg", "512.svg", "晴れ昼頃から雨"],
  127: ["112.svg", "512.svg", "晴れ夕方から雨"],
  128: ["112.svg", "512.svg", "晴れ夜は雨"],
  130: ["100.svg", "500.svg", "朝の内霧後晴れ"],
  131: ["100.svg", "500.svg", "晴れ明け方霧"],
  132: ["101.svg", "501.svg", "晴れ朝夕曇り"],
  140: ["102.svg", "502.svg", "晴れ時々雨と雷"],
  160: ["104.svg", "504.svg", "晴れ一時雪か雨"],
  170: ["104.svg", "504.svg", "晴れ時々雪か雨"],
  181: ["115.svg", "515.svg", "晴れ後雪か雨"],
  200: ["200.svg", "200.svg", "曇り"],
  201: ["201.svg", "601.svg", "曇り時々晴れ"],
  202: ["202.svg", "202.svg", "曇り一時雨"],
  203: ["202.svg", "202.svg", "曇り時々雨"],
  204: ["204.svg", "204.svg", "曇り一時雪"],
  205: ["204.svg", "204.svg", "曇り時々雪"],
  206: ["202.svg", "202.svg", "曇り一時雨か雪"],
  207: ["202.svg", "202.svg", "曇り時々雨か雪"],
  208: ["202.svg", "202.svg", "曇り一時雨か雷雨"],
  209: ["200.svg", "200.svg", "霧"],
  210: ["210.svg", "610.svg", "曇り後時々晴れ"],
  211: ["210.svg", "610.svg", "曇り後晴れ"],
  212: ["212.svg", "212.svg", "曇り後一時雨"],
  213: ["212.svg", "212.svg", "曇り後時々雨"],
  214: ["212.svg", "212.svg", "曇り後雨"],
  215: ["215.svg", "215.svg", "曇り後一時雪"],
  216: ["215.svg", "215.svg", "曇り後時々雪"],
  217: ["215.svg", "215.svg", "曇り後雪"],
  218: ["212.svg", "212.svg", "曇り後雨か雪"],
  219: ["212.svg", "212.svg", "曇り後雨か雷雨"],
  220: ["202.svg", "202.svg", "曇り朝夕一時雨"],
  221: ["202.svg", "202.svg", "曇り朝の内一時雨"],
  222: ["212.svg", "212.svg", "曇り夕方一時雨"],
  223: ["201.svg", "601.svg", "曇り日中時々晴れ"],
  224: ["212.svg", "212.svg", "曇り昼頃から雨"],
  225: ["212.svg", "212.svg", "曇り夕方から雨"],
  226: ["212.svg", "212.svg", "曇り夜は雨"],
  228: ["215.svg", "215.svg", "曇り昼頃から雪"],
  229: ["215.svg", "215.svg", "曇り夕方から雪"],
  230: ["215.svg", "215.svg", "曇り夜は雪"],
  231: ["200.svg", "200.svg", "曇り海岸霧か霧雨"],
  240: ["202.svg", "202.svg", "曇り時々雨と雷"],
  250: ["204.svg", "204.svg", "曇り時々雪と雷"],
  260: ["204.svg", "204.svg", "曇り一時雪か雨"],
  270: ["204.svg", "204.svg", "曇り時々雪か雨"],
  281: ["215.svg", "215.svg", "曇り後雪か雨"],
  300: ["300.svg", "300.svg", "雨"],
  301: ["301.svg", "701.svg", "雨時々晴れ"],
  302: ["302.svg", "302.svg", "雨時々止む"],
  303: ["303.svg", "303.svg", "雨時々雪"],
  304: ["300.svg", "300.svg", "雨か雪"],
  306: ["300.svg", "300.svg", "大雨"],
  308: ["308.svg", "308.svg", "雨で暴風を伴う"],
  309: ["303.svg", "303.svg", "雨一時雪"],
  311: ["311.svg", "711.svg", "雨後晴れ"],
  313: ["313.svg", "313.svg", "雨後曇り"],
  314: ["314.svg", "314.svg", "雨後時々雪"],
  315: ["314.svg", "314.svg", "雨後雪"],
  316: ["311.svg", "711.svg", "雨か雪後晴れ"],
  317: ["313.svg", "313.svg", "雨か雪後曇り"],
  320: ["311.svg", "711.svg", "朝の内雨後晴れ"],
  321: ["313.svg", "313.svg", "朝の内雨後曇り"],
  322: ["303.svg", "303.svg", "雨朝晩一時雪"],
  323: ["311.svg", "711.svg", "雨昼頃から晴れ"],
  324: ["311.svg", "711.svg", "雨夕方から晴れ"],
  325: ["311.svg", "711.svg", "雨夜は晴れ"],
  326: ["314.svg", "314.svg", "雨夕方から雪"],
  327: ["314.svg", "314.svg", "雨夜は雪"],
  328: ["300.svg", "300.svg", "雨一時強く降る"],
  329: ["300.svg", "300.svg", "雨一時みぞれ"],
  340: ["400.svg", "400.svg", "雪か雨"],
  350: ["300.svg", "300.svg", "雨で雷を伴う"],
  361: ["411.svg", "811.svg", "雪か雨後晴れ"],
  371: ["413.svg", "413.svg", "雪か雨後曇り"],
  400: ["400.svg", "400.svg", "雪"],
  401: ["401.svg", "801.svg", "雪時々晴れ"],
  402: ["402.svg", "402.svg", "雪時々止む"],
  403: ["403.svg", "403.svg", "雪時々雨"],
  405: ["400.svg", "400.svg", "大雪"],
  406: ["406.svg", "406.svg", "風雪強い"],
  407: ["406.svg", "406.svg", "暴風雪"],
  409: ["403.svg", "403.svg", "雪一時雨"],
  411: ["411.svg", "811.svg", "雪後晴れ"],
  413: ["413.svg", "413.svg", "雪後曇り"],
  414: ["414.svg", "414.svg", "雪後雨"],
  420: ["411.svg", "811.svg", "朝の内雪後晴れ"],
  421: ["413.svg", "413.svg", "朝の内雪後曇り"],
  422: ["414.svg", "414.svg", "雪昼頃から雨"],
  423: ["414.svg", "414.svg", "雪夕方から雨"],
  425: ["400.svg", "400.svg", "雪一時強く降る"],
  426: ["400.svg", "400.svg", "雪後みぞれ"],
  427: ["400.svg", "400.svg", "雪一時みぞれ"],
  450: ["400.svg", "400.svg", "雪で雷を伴う"],
};

const url = "https://www.jma.go.jp/bosai/forecast/data/forecast/110000.json";   //埼玉県

const dayList = ["日", "月", "火", "水", "木", "金", "土"];

function push(){
  Push.create("test!!", { //タイトル
      body: "test", //内容
      // icon: img/mtrad_logo.jpg, //ロゴ等の画像
      timeout: 6000, // 通知が消えるタイミング
      vibrate: [100, 100, 100], // モバイル端末でのバイブレーション秒数
      onClick: function() {
          // 通知がクリックされた場合の設定
  window.open("https://commandlabcreeperminecraft.github.io/-/", "_blank"); //URLリンク先
          console.log(this);
  
      }
  })}


 // const list
  const timeDefinesList = new Array();
  const weatherCodeList = new Array();
  const tempsMinList = new Array();
  const tempsMaxList = new Array();
 //


fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (weather) {
    document
      .getElementById("location")
      .prepend(
        `${weather[1].publishingOffice}: ${weather[1].timeSeries[0].areas[0].area.name} `
      );
    const isTodaysData = weather[0].timeSeries[2].timeDefines.length === 4;
    const weatherCodes = weather[0].timeSeries[0].areas[0].weatherCodes;
    const timeDefines = weather[0].timeSeries[0].timeDefines;
    const temps = weather[0].timeSeries[2].areas[0].temps;
    weatherCodeList.push(weatherCodes[0], weatherCodes[1]);
    timeDefinesList.push(timeDefines[0], timeDefines[1]);
    if (isTodaysData) {
      tempsMinList.push(temps[0] === temps[1] ? "--" : temps[0], temps[2]);
      tempsMaxList.push(temps[1], temps[3]);
    } else {
      tempsMinList.push("--", temps[0]);
      tempsMaxList.push("--", temps[1]);
    }

    const startCount =
      weather[1].timeSeries[0].timeDefines.indexOf(timeDefines[1]) + 1;
    for (let i = startCount; i < startCount + 5; i++) {
      weatherCodeList.push(weather[1].timeSeries[0].areas[0].weatherCodes[i]);
      timeDefinesList.push(weather[1].timeSeries[0].timeDefines[i]);
      tempsMinList.push(weather[1].timeSeries[1].areas[0].tempsMin[i]);
      tempsMaxList.push(weather[1].timeSeries[1].areas[0].tempsMax[i]);
    }

    const date = document.getElementsByClassName("date");
    const weatherImg = document.getElementsByClassName("weatherImg");
    const weatherTelop = document.getElementsByClassName("weatherTelop");
    const tempMin = document.getElementsByClassName("tempMin");
    const tempMax = document.getElementsByClassName("tempMax");

    weatherCodeList.forEach(function (el, i) {
      let dt = new Date(timeDefinesList[i]);
      let weekdayCount = dt.getDay();
      if (weekdayCount === 0) date[i].style.color = "red";
      if (weekdayCount === 6) date[i].style.color = "blue";
      var m = ("00" + (dt.getMonth() + 1)).slice(-2);
      var d = ("00" + dt.getDate()).slice(-2);
      date[i].textContent = `${m}/${d}(${dayList[weekdayCount]})`;
      var isNight = Number(i === 0 && !isTodaysData)
      weatherImg[i].src = "https://www.jma.go.jp/bosai/forecast/img/" + weatherCode[el][isNight];
      weatherTelop[i].textContent = weatherCode[el][2];
      tempMin[i].textContent = tempsMinList[i] + "℃";
      tempMax[i].textContent = tempsMaxList[i] + "℃";
    });
  });

const preventScroll = {
	x: 0,
	y: 0,
	setPos(x = window.pageXOffset, y = window.pageYOffset) {
		this.x=x;
		this.y=y;
	},
	handleEvent() {
		window.scrollTo(this.x, this.y);
	},
	enable() {
		this.setPos();
		window.addEventListener("scroll", this);
	},
	disable() {
		window.removeEventListener("scroll", this);
	}
};

function scrollToTop() {
  preventScroll.disable();	
  scrollTo(0, 0);
  preventScroll.enable();	
}

function headerMenuFunc() {
  document.addEventListener('touchmove', handleTouchMove, { passive: false });
}

function handleTouchMove(e) {
  e.preventDefault();
}

function calendarpage() {
  preventScroll.disable();
  scrollTo(0, 740);
  preventScroll.enable();	
}

const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

function psOKsystem() {
  let t = document.getElementById('login-container');
  t.className = 'login-container1';
  let h4 = document.getElementById('loader-off');
  h4.className = 'loader';
  async function hogehoge(){
    await sleep(3000)//3秒待つ
    let h5 = document.getElementById('loader-off');
    h5.className = 'loader-off';
    let p = document.getElementById('classclass');
    p.className = 'class2';
    scrollToTop()
    await sleep(1000)
    preventScroll.enable();	
    headerMenuFunc()
  }
  hogehoge()
  preventScroll.enable();	
}

function psOKsystem2() {
  let i = document.getElementById('operatormenu');
  i.className = 'operatormenu-on';
  let nh = document.getElementById('login-container');
  nh.className = 'login-container1';
}





function addps() {
  localStorage.setItem(document.forms['form1'].elements['password'].value, document.forms['form1'].elements['password'].value);
  localStorage.setItem(document.forms['form1'].elements['mail'].value, document.forms['form1'].elements['mail'].value);
}

function check() {
  let idspecial ="1"
  let passwordspecial ="1"
  console.log("認識中")
  if (localStorage.getItem(document.forms['form1'].elements['password'].value).includes(document.forms['form1'].elements['password'].value) && 
     (localStorage.getItem(document.forms['form1'].elements['mail'].value).includes(document.forms['form1'].elements['mail'].value))) {
      if ("1" === document.forms['form1'].elements['mail'].value && "1" === document.forms['form1'].elements['password'].value) {
        console.log("オペレータパスカクニン")
        psOKsystem2()
      } else {

        console.log("認証完了")
        psOKsystem()
        console.log("アッテイマス")
      }

  // } else if ("c8brtvevtc" === document.forms['form1'].elements['mail'].value && btv73t8v7 === document.forms['form1'].elements['password'].value) {
  } else {
    console.log("チガイマス")
  }
}
