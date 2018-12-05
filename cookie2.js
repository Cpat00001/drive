const cookie = document.cookie.replace(/(?:(?:^|.*;\s*)id\s*\=\s*([^;]*).*$)|^.*$/, "$1");
const cookie2 = document.cookie.replace(/(?:(?:^|.*;\s*)od\s*\=\s*([^;]*).*$)|^.*$/, "$1");

function checkCookie() {

if(cookie === "wir123"){
  document.getElementById('cookieBanner').style.display = "none";
  document.getElementById('welcome').style.display = "block";
}else{
  document.getElementById('cookieBanner').style.display = "block";
  document.getElementById('welcome').style.display = "none";
}
}
//check if welcome banner should be displayed or hidden
function checkBanner(){
  if(cookie2 === "wir345"){
    document.getElementById('welcome').style.display = "none";
  }
}

function hideBanner() {
  document.getElementById('cookieBanner').style.display = "none";
  document.cookie = "id=wir123;expires= Sun,1 Mar 2019 00:00:00 GMT;path=/";
}
function hideWelcome() {
document.getElementById('welcome').style.display = "none";
document.cookie = "od=wir345;path=/";
}
