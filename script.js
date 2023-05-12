function openFullscreenIframe() {
  var iframe = document.createElement('iframe');
  iframe.src = 'https://www.yourwebsite.com/';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.position = 'fixed';
  iframe.style.top = '0';
  iframe.style.left = '0';
  iframe.style.bottom = '0';
  iframe.style.right = '0';
  iframe.style.border = 'none';
  var newTab = window.open('about:blank');
  newTab.document.body.appendChild(iframe);
}
