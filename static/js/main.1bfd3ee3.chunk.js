(this.webpackJsonpflash=this.webpackJsonpflash||[]).push([[0],[,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(2),c=n.n(i);n(8),n(9),n(10);var r=function(){var e=function(){navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}).then((function(e){var t=document.querySelector("video");t.srcObject=e;var n=e.getVideoTracks()[0];t.addEventListener("loadedmetadata",(function(e){window.setTimeout((function(){n.getCapabilities().torch&&n.applyConstraints({advanced:[{torch:!0}]}).catch((function(e){return console.log(e)}))}),500)}))})).catch((function(e){return console.error("getUserMedia() failed: ",e)}))};return Object(o.useEffect)((function(){e()}),[]),a.a.createElement("div",{className:"App"},a.a.createElement("div",null,a.a.createElement("video",{autoPlay:!0,id:"video"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(r,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[3,1,2]]]);
//# sourceMappingURL=main.1bfd3ee3.chunk.js.map