
! function() { var e = "@charset \"utf-8\";html{color:#000;background:#fff;overflow-y:scroll;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}html *{outline:0;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}html,body{width:100%;height:100%;font-family:font-family: 'Microsoft Yahei',sans-serif;;}body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,hr,button,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{margin:0;padding:0;box-sizing:border-box;}input,select,textarea{font-size:100%}table{border-collapse:collapse;border-spacing:0}fieldset,img{border:0}abbr,acronym{border:0;font-variant:normal}del{text-decoration:line-through}address,caption,cite,code,dfn,em,th,var{font-style:normal;font-weight:500}ol,ul{list-style:none}caption,th{text-align:left}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:500}q:before,q:after{content:''}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}a:hover{text-decoration:underline}ins,a{text-decoration:none}",
    d = document.createElement("style"); if (document.getElementsByTagName("head")[0].appendChild(d), d.styleSheet) { d.styleSheet.disabled || (d.styleSheet.cssText = e) } else { try { d.innerHTML = e } catch (f) { d.innerText = e } } }(); 
    !function(N,M){function L(){var a=I.getBoundingClientRect().width;a/F > 540 && (a = 540 * F);
var d = a / 10;
I.style.fontSize = d + "px", D.rem = N.rem = d
}
var K, J = N.document,
  I = J.documentElement,
  H = J.querySelector('meta[name="viewport"]'),
  G = J.querySelector('meta[name="flexible"]'),
  F = 0,
  E = 0,
  D = M.flexible || (M.flexible = {});
if (H) { console.warn("将根据已有的meta标签来设置缩放比例"); var C = H.getAttribute("content").match(/initial\-scale=([\d\.]+)/);
  C && (E = parseFloat(C[1]), F = parseInt(1 / E)) } else { if (G) { var B = G.getAttribute("content"); if (B) { var A = B.match(/initial\-dpr=([\d\.]+)/),
        z = B.match(/maximum\-dpr=([\d\.]+)/);
      A && (F = parseFloat(A[1]), E = parseFloat((1 / F).toFixed(2))), z && (F = parseFloat(z[1]), E = parseFloat((1 / F).toFixed(2))) } } }
if (!F && !E) { var y = N.navigator.userAgent,
    x = (!!y.match(/android/gi), !!y.match(/iphone/gi)),
    w = x && !!y.match(/OS 9_3/),
    v = N.devicePixelRatio;
  F = x && !w ? v >= 3 && (!F || F >= 3) ? 3 : v >= 2 && (!F || F >= 2) ? 2 : 1 : 1, E = 1 / F }
if (I.setAttribute("data-dpr", F), !H) { if (H = J.createElement("meta"), H.setAttribute("name", "viewport"), H.setAttribute("content", "initial-scale=" + E + ", maximum-scale=" + E + ", minimum-scale=" + E + ", user-scalable=no"), I.firstElementChild) { I.firstElementChild.appendChild(H) } else { var u = J.createElement("div");
    u.appendChild(H), J.write(u.innerHTML) } } N.addEventListener("resize", function() { clearTimeout(K), K = setTimeout(L, 300) }, !1), N.addEventListener("pageshow", function(b) { b.persisted && (clearTimeout(K), K = setTimeout(L, 300)) }, !1), "complete" === J.readyState ? J.body.style.fontSize = 12 * F + "px" : J.addEventListener("DOMContentLoaded", function() { J.body.style.fontSize = 12 * F + "px" }, !1), L(), D.dpr = N.dpr = F, D.refreshRem = L, D.rem2px = function(d) { var c = parseFloat(d) * this.rem; return "string" == typeof d && d.match(/rem$/) && (c += "px"), c }, D.px2rem = function(d) { var c = parseFloat(d) / this.rem; return "string" == typeof d && d.match(/px$/) && (c += "rem"), c }
}(window, window.lib || (window.lib = {}));