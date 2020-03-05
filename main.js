function updateWebviews() {
  var webview = document.querySelector("webview");
  webview.style.height = document.documentElement.clientHeight + "px";
  webview.style.width = document.documentElement.clientWidth + "px";


};

function loaded() {
  updateWebviews();
}

onload = loaded;
window.onresize = loaded;