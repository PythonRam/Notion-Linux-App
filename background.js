chrome.app.runtime.onLaunched.addListener(function () {
  runApp();
});

chrome.app.runtime.onRestarted.addListener(function () {
  runApp();
});


function runApp(){
  chrome.app.window.create('window.html', {
    bounds: {
      'width': 1400,
      'height': 800
    },
  }, onWindowLoaded());
}

function onWindowLoaded(popup) {
  return function (win) {
  };
}