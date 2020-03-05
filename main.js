function updateWebviews() {
  var webview = document.querySelector("webview");
  webview.style.height = document.documentElement.clientHeight + "px";
  webview.style.width = document.documentElement.clientWidth + "px";
  return webview;
};

function loaded() {
  var webview = updateWebviews();
  webview.addEventListener('newwindow', onNewWindow);
}


function onNewWindow(event) {
  switch (event.windowOpenDisposition) {
    case 'ignore':
      // Not sure what this is used by.  Default enum value, maybe.
      console.debug('Ignoring new window request');
      return;

    case 'save_to_disk':
      // Ctrl + S, maybe?  Not sure how to reproduce that.
      console.log('save_to_disk is not implemented');
      return;

    case 'current_tab':
      console.log("xiaofeng: ==================== current_tab");
      return;

    case 'new_background_tab':
    case 'new_foreground_tab':
      newWindow = open(event.targetUrl, '_blank');
      if (event.windowOpenDisposition != 'new_background_tab') {
        newWindow.focus();
      }
      break;

    case 'new_window':
    case 'new_popup':
      // if (event.initialWidth && event.initialHeight) {
      //   features = 'width=' + event.initialWidth + ',height=' + event.initialHeight;
      // }
      newWindow = open(event.targetUrl, '_blank');
      newWindow.focus();
      break;
  }
}


onload = loaded;
window.onresize = updateWebviews;