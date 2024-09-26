'use strict'; /* 厳格にエラーをチェック */

{ /* ローカルスコープ */

  // DOM取得
  const tabMenus = document.querySelectorAll('.tab__menu-item');
  console.log(tabMenus);

  // イベント付加
  tabMenus.forEach((tabMenu) => {
    tabMenu.addEventListener('click', tabSwitch);
  })

  // イベントの処理
  function tabSwitch(e) {

    // クリックされた要素のデータ属性を取得
    const tabTargetData = e.currentTarget.dataset.tab;
    // クリックされた要素の親要素と、その子要素を取得
    const tabList = e.currentTarget.closest('.tab__menu');
    console.log(tabList);
    const tabItems = tabList.querySelectorAll('.tab__menu-item');
    console.log(tabItems);
    // クリックされた要素の親要素の兄弟要素の子要素を取得
    const tabPanelItems = tabList.
      nextElementSibling.querySelectorAll('.tab__panel-box');
    console.log(tabPanelItems);

    // クリックされたtabの同階層のmenuとpanelのクラスを削除
    tabItems.forEach((tabItem) => {
      tabItem.classList.remove('is-active');
    })
    tabPanelItems.forEach((tabPanelItem) => {
      tabPanelItem.classList.remove('is-show');
    })

    // クリックされたmenu要素にis-activeクラスを付加
    e.currentTarget.classList.add('is-active');
    // クリックしたmenuのデータ属性と等しい値を持つパネルにis-showクラスを付加
    tabPanelItems.forEach((tabPanelItem) => {
      if (tabPanelItem.dataset.panel === tabTargetData) {
        tabPanelItem.classList.add('is-show');
      }
    })

  }

}

document.querySelector('.hamburger').addEventListener('click', function () {
  this.classList.toggle('active');
  document.querySelector('.slide-menu').classList.toggle('active');
})

function psOKsystem() {
  let p = document.getElementById('classclass');
  p.className = 'class2';
  let t = document.getElementById('login-container');
  t.className = 'login-container1';
}

function addps() {
  let d = document.getElementById('psmode');
  d.className = 'nonemode';
  let f = document.getElementById('addps');
  f.className = 'nonemodenot';
  localStorage.setItem(document.forms['form1'].elements['password'].value , document.forms['form1'].elements['password'].value);
  const idlist = ["7846!7sa$w#82&36W473e%2%6!4A7'n3"]
}

function check() {
  let d = document.getElementById('psmode');
  d.className = 'nonemodenot';
  let f = document.getElementById('addps');
  f.className = 'nonemode';
  console.log("認識中")
  if(localStorage.getItem(document.forms['form1'].elements['password'].value).includes(document.forms['form1'].elements['password'].value)) {
    psOKsystem()
    console.log("アッテイマス")
  }
}