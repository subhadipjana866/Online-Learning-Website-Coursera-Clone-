
function menuOn() {
    const exPloreon = document.getElementById("up");
    const exPloreoff = document.getElementById("down");
    const box = document.getElementById("online-degrees");
    exPloreon.classList.add("active");
    exPloreoff.classList.add("active");
    box.classList.add("active");

}
function menuOff() {
    const exPloreon = document.getElementById("up");
    const exPloreoff = document.getElementById("down");
    const box = document.getElementById("online-degrees");
    exPloreon.classList.remove("active");
    exPloreoff.classList.remove("active");
    box.classList.remove("active");
}
function exploreOn(){
  const menu = document.getElementById("explore-card");
  menu.classList.add("active");
}
function exploreOff(){
  const menu = document.getElementById("explore-card");
  menu.classList.remove("active");
}
function searchOpen(){
  const menu = document.getElementById("page");
  menu.classList.add("active");
}
function searchClose(){
  const menu = document.getElementById("page");
  menu.classList.remove("active");
}

function menuVisible(){
  const button = document.getElementById("menu-page");
  button.classList.add("active");
}
function menuHidden(){
  const button2 = document.getElementById("menu-page");
  button2.classList.remove("active");
}
function leftScroll1() {
    const left = document.querySelector(".scroller1");
    left.scrollBy(-250, 0);
}
  function rightScroll1() {
    const right = document.querySelector(".scroller1");
    right.scrollBy(250, 0);
}
function leftScroll2() {
    const left = document.querySelector(".scroller2");
    left.scrollBy(-255, 0);
}
  function rightScroll2() {
    const right = document.querySelector(".scroller2");
    right.scrollBy(255, 0);
}
function leftScroll3() {
    const left = document.querySelector(".scroller3");
    left.scrollBy(-255, 0);
}
  function rightScroll3() {
    const right = document.querySelector(".scroller3");
    right.scrollBy(255, 0);
}
function leftScroll4() {
    const left = document.querySelector(".scroller4");
    left.scrollBy(-250, 0);
}
  function rightScroll4() {
    const right = document.querySelector(".scroller4");
    right.scrollBy(250, 0);
}
function leftScroll5() {
    const left = document.querySelector(".scroller5");
    left.scrollBy(-250, 0);
}
  function rightScroll5() {
    const right = document.querySelector(".scroller5");
    right.scrollBy(250, 0);
}