!function(e,t,n){function r(){}var i,o=t.documentElement,c={create:function(e){return t.createElement(e)},old:!!/(Android\s(1.|2.))|(Silk\/1.)/i.test(navigator.userAgent),pfx:function(){var e=t.createElement("dummy").style,r=["Webkit","Moz","O","ms"],i={};return function(t){if("undefined"==typeof i[t]){var o=t.charAt(0).toUpperCase()+t.substr(1),o=(t+" "+r.join(o+" ")+o).split(" ");i[t]=null;for(var c in o)if(e[o[c]]!==n){i[t]=o[c];break}}return i[t]}}()},a=!(c.old||null===c.pfx("perspective")),s=!(c.old||null===c.pfx("transformOrigin")),l=null!==c.pfx("transition"),u=!!e.addEventListener,m=!!t.querySelectorAll,d=!!e.matchMedia,f="placeholder"in c.create("input");try{localStorage.setItem("x","x"),localStorage.removeItem("x"),i=!0}catch(v){i=!1}r.prototype={constructor:r,css3Dtransform:a,cssTransform:s,cssTransition:l,addEventListener:u,querySelectorAll:m,matchMedia:d,deviceMotion:"DeviceMotionEvent"in e,deviceOrientation:"DeviceOrientationEvent"in e,contextMenu:"contextMenu"in o&&"HTMLMenuItemElement"in e,classList:"classList"in o,placeholder:f,localStorage:i,historyAPI:e.history&&"pushState"in e.history,webWorker:"Worker"in e,viewportUnit:function(e){try{return e.style.width="1vw",""!==e.style.width}catch(t){return!1}}(c.create("dummy")),remUnit:function(e){try{return e.style.width="1rem",""!==e.style.width}catch(t){return!1}}(c.create("dummy")),canvas:function(e){return!(!e.getContext||!e.getContext("2d"))}(c.create("canvas")),svg:!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,webGL:function(t){try{return!(!e.WebGLRenderingContext||!t.getContext("webgl")&&!t.getContext("experimental-webgl"))}catch(n){return!1}}(c.create("canvas")),cors:"XMLHttpRequest"in e&&"withCredentials"in new XMLHttpRequest,touch:!!("ontouchstart"in e||e.navigator&&e.navigator.msPointerEnabled&&e.MSGesture||e.DocumentTouch&&t instanceof DocumentTouch),async:"async"in c.create("script"),defer:"defer"in c.create("script"),geolocation:"geolocation"in navigator,srcset:"srcset"in c.create("img"),sizes:"sizes"in c.create("img"),pictureElement:"HTMLPictureElement"in e,testAll:function(){var e,t=" js";for(e in this)"testAll"!==e&&"constructor"!==e&&this[e]&&(t+=" "+e);o.className+=t.toLowerCase()}},e.feature=new r}(window,document);