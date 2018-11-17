const cookie = document.cookie.replace(/(?:(?:^|.*;\s*)id\s*\=\s*([^;]*).*$)|^.*$/, "$1");
function checkCookie() {

  if(cookie === "wir123"){
    document.getElementById('cookieBanner').style.display = "none";
    document.getElementById('welcome').style.display = "block";
  } else{
    document.getElementById('welcome').style.display = "none";
    document.getElementById('cookieBanner').style.display = "block";
  }
  
}

function hideBanner(){
  
  document.getElementById('cookieBanner').style.display = "none";
  document.cookie = "id=wir123;expires= Sun,1 Mar 2019 00:00:00 GMT"; 
}
function hideWelcome() {

  document.getElementById('welcome').style.display = "none";
}

