'use strict'; /* 厳格にエラーをチェック */

const preventScroll = {
  x: 0,
  y: 0,
  setPos(x = window.pageXOffset, y = window.pageYOffset) {
    this.x = x;
    this.y = y;
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
}

function headerMenuFunc() {
  document.addEventListener('touchmove', handleTouchMove, { passive: false });
}

function handleTouchMove(e) {
  e.preventDefault();
}

calendarbutton.addEventListener(`click`, () => {
  console.log("検出!!")
  const mask = document.getElementById(`mask`)
  const home = document.getElementById(`calendarhome`)
  home.classList.remove('hidden');
  mask.classList.remove('hidden');
});

closebutton1.addEventListener('click', () => {
  const mask = document.getElementById(`mask`)
  const home = document.getElementById(`calendarhome`)
  home.classList.add('hidden');
  mask.classList.add('hidden');
});


function doReload() {

  // reloadメソッドによりページをリロード
  window.location.reload();
}

function homego() {
  psOKsystem()
}

const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

function psOKsystem() {
  let t = document.getElementById('login-container');
  t.className = 'login-container1';
  let h4 = document.getElementById('loader-off');
  h4.className = 'loader';
  async function hogehoge() {
    await sleep(3000)//3秒待つ
    let h5 = document.getElementById('loader-off');
    h5.className = 'loader-off';
    let p = document.getElementById('classclass');
    p.className = 'class2';
    scrollToTop()
    await sleep(1000)
    // headerMenuFunc()
    preventScroll.disable();
  }
  hogehoge()

}

function psOKsystem2() { // 管理者ページ
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
  let idspecial = "1"
  let passwordspecial = "1"
  console.log("認識中")
  if (localStorage.getItem(document.forms['form1'].elements['password'].value).includes(document.forms['form1'].elements['password'].value) &&
    (localStorage.getItem(document.forms['form1'].elements['mail'].value).includes(document.forms['form1'].elements['mail'].value))) {
    if ("shuuki" === document.forms['form1'].elements['mail'].value && "shuuki" === document.forms['form1'].elements['password'].value) {
      console.log("オペレータパスカクニン")
      psOKsystem2()
    } else {

      console.log("認証完了")
      psOKsystem()
      console.log("アッテイマス")
    }

  } else {

    alert("チガイマス");
  }
}