(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function i(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=i(n);fetch(n.href,a)}})();var St={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},ct={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},Gt=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],G={CSS:{},springs:{}};function Y(t,e,i){return Math.min(Math.max(t,e),i)}function U(t,e){return t.indexOf(e)>-1}function st(t,e){return t.apply(null,e)}var u={arr:function(t){return Array.isArray(t)},obj:function(t){return U(Object.prototype.toString.call(t),"Object")},pth:function(t){return u.obj(t)&&t.hasOwnProperty("totalLength")},svg:function(t){return t instanceof SVGElement},inp:function(t){return t instanceof HTMLInputElement},dom:function(t){return t.nodeType||u.svg(t)},str:function(t){return typeof t=="string"},fnc:function(t){return typeof t=="function"},und:function(t){return typeof t>"u"},nil:function(t){return u.und(t)||t===null},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return u.hex(t)||u.rgb(t)||u.hsl(t)},key:function(t){return!St.hasOwnProperty(t)&&!ct.hasOwnProperty(t)&&t!=="targets"&&t!=="keyframes"}};function Yt(t){var e=/\(([^)]+)\)/.exec(t);return e?e[1].split(",").map(function(i){return parseFloat(i)}):[]}function Lt(t,e){var i=Yt(t),s=Y(u.und(i[0])?1:i[0],.1,100),n=Y(u.und(i[1])?100:i[1],.1,100),a=Y(u.und(i[2])?10:i[2],.1,100),c=Y(u.und(i[3])?0:i[3],.1,100),p=Math.sqrt(n/s),r=a/(2*Math.sqrt(n*s)),h=r<1?p*Math.sqrt(1-r*r):0,g=1,d=r<1?(r*p+-c)/h:-c+p;function v(y){var m=e?e*y/1e3:y;return r<1?m=Math.exp(-m*r*p)*(g*Math.cos(h*m)+d*Math.sin(h*m)):m=(g+d*m)*Math.exp(-m*p),y===0||y===1?y:1-m}function T(){var y=G.springs[t];if(y)return y;for(var m=1/6,b=0,k=0;;)if(b+=m,v(b)===1){if(k++,k>=16)break}else k=0;var _=b*m*1e3;return G.springs[t]=_,_}return e?v:T}function Xt(t){return t===void 0&&(t=10),function(e){return Math.ceil(Y(e,1e-6,1)*t)*(1/t)}}var $t=function(){var t=11,e=1/(t-1);function i(g,d){return 1-3*d+3*g}function s(g,d){return 3*d-6*g}function n(g){return 3*g}function a(g,d,v){return((i(d,v)*g+s(d,v))*g+n(d))*g}function c(g,d,v){return 3*i(d,v)*g*g+2*s(d,v)*g+n(d)}function p(g,d,v,T,y){var m,b,k=0;do b=d+(v-d)/2,m=a(b,T,y)-g,m>0?v=b:d=b;while(Math.abs(m)>1e-7&&++k<10);return b}function r(g,d,v,T){for(var y=0;y<4;++y){var m=c(d,v,T);if(m===0)return d;var b=a(d,v,T)-g;d-=b/m}return d}function h(g,d,v,T){if(!(0<=g&&g<=1&&0<=v&&v<=1))return;var y=new Float32Array(t);if(g!==d||v!==T)for(var m=0;m<t;++m)y[m]=a(m*e,g,v);function b(k){for(var _=0,f=1,Q=t-1;f!==Q&&y[f]<=k;++f)_+=e;--f;var C=(k-y[f])/(y[f+1]-y[f]),w=_+C*e,F=c(w,g,v);return F>=.001?r(k,w,g,v):F===0?w:p(k,_,_+e,g,v)}return function(k){return g===d&&v===T||k===0||k===1?k:a(b(k),d,T)}}return h}(),Ot=function(){var t={linear:function(){return function(s){return s}}},e={Sine:function(){return function(s){return 1-Math.cos(s*Math.PI/2)}},Expo:function(){return function(s){return s?Math.pow(2,10*s-10):0}},Circ:function(){return function(s){return 1-Math.sqrt(1-s*s)}},Back:function(){return function(s){return s*s*(3*s-2)}},Bounce:function(){return function(s){for(var n,a=4;s<((n=Math.pow(2,--a))-1)/11;);return 1/Math.pow(4,3-a)-7.5625*Math.pow((n*3-2)/22-s,2)}},Elastic:function(s,n){s===void 0&&(s=1),n===void 0&&(n=.5);var a=Y(s,1,10),c=Y(n,.1,2);return function(p){return p===0||p===1?p:-a*Math.pow(2,10*(p-1))*Math.sin((p-1-c/(Math.PI*2)*Math.asin(1/a))*(Math.PI*2)/c)}}},i=["Quad","Cubic","Quart","Quint"];return i.forEach(function(s,n){e[s]=function(){return function(a){return Math.pow(a,n+2)}}}),Object.keys(e).forEach(function(s){var n=e[s];t["easeIn"+s]=n,t["easeOut"+s]=function(a,c){return function(p){return 1-n(a,c)(1-p)}},t["easeInOut"+s]=function(a,c){return function(p){return p<.5?n(a,c)(p*2)/2:1-n(a,c)(p*-2+2)/2}},t["easeOutIn"+s]=function(a,c){return function(p){return p<.5?(1-n(a,c)(1-p*2))/2:(n(a,c)(p*2-1)+1)/2}}}),t}();function pt(t,e){if(u.fnc(t))return t;var i=t.split("(")[0],s=Ot[i],n=Yt(t);switch(i){case"spring":return Lt(t,e);case"cubicBezier":return st($t,n);case"steps":return st(Xt,n);default:return st(s,n)}}function Bt(t){try{var e=document.querySelectorAll(t);return e}catch{return}}function X(t,e){for(var i=t.length,s=arguments.length>=2?arguments[1]:void 0,n=[],a=0;a<i;a++)if(a in t){var c=t[a];e.call(s,c,a,t)&&n.push(c)}return n}function $(t){return t.reduce(function(e,i){return e.concat(u.arr(i)?$(i):i)},[])}function It(t){return u.arr(t)?t:(u.str(t)&&(t=Bt(t)||t),t instanceof NodeList||t instanceof HTMLCollection?[].slice.call(t):[t])}function gt(t,e){return t.some(function(i){return i===e})}function ut(t){var e={};for(var i in t)e[i]=t[i];return e}function rt(t,e){var i=ut(t);for(var s in t)i[s]=e.hasOwnProperty(s)?e[s]:t[s];return i}function tt(t,e){var i=ut(t);for(var s in e)i[s]=u.und(t[s])?e[s]:t[s];return i}function te(t){var e=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(t);return e?"rgba("+e[1]+",1)":t}function ee(t){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,i=t.replace(e,function(p,r,h,g){return r+r+h+h+g+g}),s=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(i),n=parseInt(s[1],16),a=parseInt(s[2],16),c=parseInt(s[3],16);return"rgba("+n+","+a+","+c+",1)"}function ie(t){var e=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t),i=parseInt(e[1],10)/360,s=parseInt(e[2],10)/100,n=parseInt(e[3],10)/100,a=e[4]||1;function c(v,T,y){return y<0&&(y+=1),y>1&&(y-=1),y<1/6?v+(T-v)*6*y:y<1/2?T:y<2/3?v+(T-v)*(2/3-y)*6:v}var p,r,h;if(s==0)p=r=h=n;else{var g=n<.5?n*(1+s):n+s-n*s,d=2*n-g;p=c(d,g,i+1/3),r=c(d,g,i),h=c(d,g,i-1/3)}return"rgba("+p*255+","+r*255+","+h*255+","+a+")"}function ne(t){if(u.rgb(t))return te(t);if(u.hex(t))return ee(t);if(u.hsl(t))return ie(t)}function j(t){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t);if(e)return e[1]}function se(t){if(U(t,"translate")||t==="perspective")return"px";if(U(t,"rotate")||U(t,"skew"))return"deg"}function at(t,e){return u.fnc(t)?t(e.target,e.id,e.total):t}function L(t,e){return t.getAttribute(e)}function dt(t,e,i){var s=j(e);if(gt([i,"deg","rad","turn"],s))return e;var n=G.CSS[e+i];if(!u.und(n))return n;var a=100,c=document.createElement(t.tagName),p=t.parentNode&&t.parentNode!==document?t.parentNode:document.body;p.appendChild(c),c.style.position="absolute",c.style.width=a+i;var r=a/c.offsetWidth;p.removeChild(c);var h=r*parseFloat(e);return G.CSS[e+i]=h,h}function jt(t,e,i){if(e in t.style){var s=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),n=t.style[e]||getComputedStyle(t).getPropertyValue(s)||"0";return i?dt(t,n,i):n}}function mt(t,e){if(u.dom(t)&&!u.inp(t)&&(!u.nil(L(t,e))||u.svg(t)&&t[e]))return"attribute";if(u.dom(t)&&gt(Gt,e))return"transform";if(u.dom(t)&&e!=="transform"&&jt(t,e))return"css";if(t[e]!=null)return"object"}function Ct(t){if(u.dom(t)){for(var e=t.style.transform||"",i=/(\w+)\(([^)]*)\)/g,s=new Map,n;n=i.exec(e);)s.set(n[1],n[2]);return s}}function re(t,e,i,s){var n=U(e,"scale")?1:0+se(e),a=Ct(t).get(e)||n;return i&&(i.transforms.list.set(e,a),i.transforms.last=e),s?dt(t,a,s):a}function ft(t,e,i,s){switch(mt(t,e)){case"transform":return re(t,e,s,i);case"css":return jt(t,e,i);case"attribute":return L(t,e);default:return t[e]||0}}function ht(t,e){var i=/^(\*=|\+=|-=)/.exec(t);if(!i)return t;var s=j(t)||0,n=parseFloat(e),a=parseFloat(t.replace(i[0],""));switch(i[0][0]){case"+":return n+a+s;case"-":return n-a+s;case"*":return n*a+s}}function Ft(t,e){if(u.col(t))return ne(t);if(/\s/g.test(t))return t;var i=j(t),s=i?t.substr(0,t.length-i.length):t;return e?s+e:s}function _t(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function ae(t){return Math.PI*2*L(t,"r")}function le(t){return L(t,"width")*2+L(t,"height")*2}function oe(t){return _t({x:L(t,"x1"),y:L(t,"y1")},{x:L(t,"x2"),y:L(t,"y2")})}function Nt(t){for(var e=t.points,i=0,s,n=0;n<e.numberOfItems;n++){var a=e.getItem(n);n>0&&(i+=_t(s,a)),s=a}return i}function ce(t){var e=t.points;return Nt(t)+_t(e.getItem(e.numberOfItems-1),e.getItem(0))}function Vt(t){if(t.getTotalLength)return t.getTotalLength();switch(t.tagName.toLowerCase()){case"circle":return ae(t);case"rect":return le(t);case"line":return oe(t);case"polyline":return Nt(t);case"polygon":return ce(t)}}function pe(t){var e=Vt(t);return t.setAttribute("stroke-dasharray",e),e}function ge(t){for(var e=t.parentNode;u.svg(e)&&u.svg(e.parentNode);)e=e.parentNode;return e}function Dt(t,e){var i=e||{},s=i.el||ge(t),n=s.getBoundingClientRect(),a=L(s,"viewBox"),c=n.width,p=n.height,r=i.viewBox||(a?a.split(" "):[0,0,c,p]);return{el:s,viewBox:r,x:r[0]/1,y:r[1]/1,w:c,h:p,vW:r[2],vH:r[3]}}function ue(t,e){var i=u.str(t)?Bt(t)[0]:t,s=e||100;return function(n){return{property:n,el:i,svg:Dt(i),totalLength:Vt(i)*(s/100)}}}function de(t,e,i){function s(g){g===void 0&&(g=0);var d=e+g>=1?e+g:0;return t.el.getPointAtLength(d)}var n=Dt(t.el,t.svg),a=s(),c=s(-1),p=s(1),r=i?1:n.w/n.vW,h=i?1:n.h/n.vH;switch(t.property){case"x":return(a.x-n.x)*r;case"y":return(a.y-n.y)*h;case"angle":return Math.atan2(p.y-c.y,p.x-c.x)*180/Math.PI}}function Tt(t,e){var i=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,s=Ft(u.pth(t)?t.totalLength:t,e)+"";return{original:s,numbers:s.match(i)?s.match(i).map(Number):[0],strings:u.str(t)||e?s.split(i):[]}}function vt(t){var e=t?$(u.arr(t)?t.map(It):It(t)):[];return X(e,function(i,s,n){return n.indexOf(i)===s})}function zt(t){var e=vt(t);return e.map(function(i,s){return{target:i,id:s,total:e.length,transforms:{list:Ct(i)}}})}function me(t,e){var i=ut(e);if(/^spring/.test(i.easing)&&(i.duration=Lt(i.easing)),u.arr(t)){var s=t.length,n=s===2&&!u.obj(t[0]);n?t={value:t}:u.fnc(e.duration)||(i.duration=e.duration/s)}var a=u.arr(t)?t:[t];return a.map(function(c,p){var r=u.obj(c)&&!u.pth(c)?c:{value:c};return u.und(r.delay)&&(r.delay=p?0:e.delay),u.und(r.endDelay)&&(r.endDelay=p===a.length-1?e.endDelay:0),r}).map(function(c){return tt(c,i)})}function fe(t){for(var e=X($(t.map(function(a){return Object.keys(a)})),function(a){return u.key(a)}).reduce(function(a,c){return a.indexOf(c)<0&&a.push(c),a},[]),i={},s=function(a){var c=e[a];i[c]=t.map(function(p){var r={};for(var h in p)u.key(h)?h==c&&(r.value=p[h]):r[h]=p[h];return r})},n=0;n<e.length;n++)s(n);return i}function he(t,e){var i=[],s=e.keyframes;s&&(e=tt(fe(s),e));for(var n in e)u.key(n)&&i.push({name:n,tweens:me(e[n],t)});return i}function _e(t,e){var i={};for(var s in t){var n=at(t[s],e);u.arr(n)&&(n=n.map(function(a){return at(a,e)}),n.length===1&&(n=n[0])),i[s]=n}return i.duration=parseFloat(i.duration),i.delay=parseFloat(i.delay),i}function ve(t,e){var i;return t.tweens.map(function(s){var n=_e(s,e),a=n.value,c=u.arr(a)?a[1]:a,p=j(c),r=ft(e.target,t.name,p,e),h=i?i.to.original:r,g=u.arr(a)?a[0]:h,d=j(g)||j(r),v=p||d;return u.und(c)&&(c=h),n.from=Tt(g,v),n.to=Tt(ht(c,g),v),n.start=i?i.end:0,n.end=n.start+n.delay+n.duration+n.endDelay,n.easing=pt(n.easing,n.duration),n.isPath=u.pth(a),n.isPathTargetInsideSVG=n.isPath&&u.svg(e.target),n.isColor=u.col(n.from.original),n.isColor&&(n.round=1),i=n,n})}var Ht={css:function(t,e,i){return t.style[e]=i},attribute:function(t,e,i){return t.setAttribute(e,i)},object:function(t,e,i){return t[e]=i},transform:function(t,e,i,s,n){if(s.list.set(e,i),e===s.last||n){var a="";s.list.forEach(function(c,p){a+=p+"("+c+") "}),t.style.transform=a}}};function Rt(t,e){var i=zt(t);i.forEach(function(s){for(var n in e){var a=at(e[n],s),c=s.target,p=j(a),r=ft(c,n,p,s),h=p||j(r),g=ht(Ft(a,h),r),d=mt(c,n);Ht[d](c,n,g,s.transforms,!0)}})}function ye(t,e){var i=mt(t.target,e.name);if(i){var s=ve(e,t),n=s[s.length-1];return{type:i,property:e.name,animatable:t,tweens:s,duration:n.end,delay:s[0].delay,endDelay:n.endDelay}}}function be(t,e){return X($(t.map(function(i){return e.map(function(s){return ye(i,s)})})),function(i){return!u.und(i)})}function Wt(t,e){var i=t.length,s=function(a){return a.timelineOffset?a.timelineOffset:0},n={};return n.duration=i?Math.max.apply(Math,t.map(function(a){return s(a)+a.duration})):e.duration,n.delay=i?Math.min.apply(Math,t.map(function(a){return s(a)+a.delay})):e.delay,n.endDelay=i?n.duration-Math.max.apply(Math,t.map(function(a){return s(a)+a.duration-a.endDelay})):e.endDelay,n}var Qt=0;function we(t){var e=rt(St,t),i=rt(ct,t),s=he(i,t),n=zt(t.targets),a=be(n,s),c=Wt(a,i),p=Qt;return Qt++,tt(e,{id:p,children:[],animatables:n,animations:a,duration:c.duration,delay:c.delay,endDelay:c.endDelay})}var S=[],Jt=function(){var t;function e(){!t&&(!Pt()||!l.suspendWhenDocumentHidden)&&S.length>0&&(t=requestAnimationFrame(i))}function i(n){for(var a=S.length,c=0;c<a;){var p=S[c];p.paused?(S.splice(c,1),a--):(p.tick(n),c++)}t=c>0?requestAnimationFrame(i):void 0}function s(){l.suspendWhenDocumentHidden&&(Pt()?t=cancelAnimationFrame(t):(S.forEach(function(n){return n._onDocumentVisibility()}),Jt()))}return typeof document<"u"&&document.addEventListener("visibilitychange",s),e}();function Pt(){return!!document&&document.hidden}function l(t){t===void 0&&(t={});var e=0,i=0,s=0,n,a=0,c=null;function p(_){var f=window.Promise&&new Promise(function(Q){return c=Q});return _.finished=f,f}var r=we(t);p(r);function h(){var _=r.direction;_!=="alternate"&&(r.direction=_!=="normal"?"normal":"reverse"),r.reversed=!r.reversed,n.forEach(function(f){return f.reversed=r.reversed})}function g(_){return r.reversed?r.duration-_:_}function d(){e=0,i=g(r.currentTime)*(1/l.speed)}function v(_,f){f&&f.seek(_-f.timelineOffset)}function T(_){if(r.reversePlayback)for(var Q=a;Q--;)v(_,n[Q]);else for(var f=0;f<a;f++)v(_,n[f])}function y(_){for(var f=0,Q=r.animations,C=Q.length;f<C;){var w=Q[f],F=w.animatable,H=w.tweens,V=H.length-1,I=H[V];V&&(I=X(H,function(qt){return _<qt.end})[0]||I);for(var D=Y(_-I.start-I.delay,0,I.duration)/I.duration,K=isNaN(D)?1:I.easing(D),E=I.to.strings,et=I.round,it=[],Kt=I.to.numbers.length,z=void 0,R=0;R<Kt;R++){var W=void 0,bt=I.to.numbers[R],wt=I.from.numbers[R]||0;I.isPath?W=de(I.value,K*bt,I.isPathTargetInsideSVG):W=wt+K*(bt-wt),et&&(I.isColor&&R>2||(W=Math.round(W*et)/et)),it.push(W)}var xt=E.length;if(!xt)z=it[0];else{z=E[0];for(var J=0;J<xt;J++){E[J];var kt=E[J+1],nt=it[J];isNaN(nt)||(kt?z+=nt+kt:z+=nt+" ")}}Ht[w.type](F.target,w.property,z,F.transforms),w.currentValue=z,f++}}function m(_){r[_]&&!r.passThrough&&r[_](r)}function b(){r.remaining&&r.remaining!==!0&&r.remaining--}function k(_){var f=r.duration,Q=r.delay,C=f-r.endDelay,w=g(_);r.progress=Y(w/f*100,0,100),r.reversePlayback=w<r.currentTime,n&&T(w),!r.began&&r.currentTime>0&&(r.began=!0,m("begin")),!r.loopBegan&&r.currentTime>0&&(r.loopBegan=!0,m("loopBegin")),w<=Q&&r.currentTime!==0&&y(0),(w>=C&&r.currentTime!==f||!f)&&y(f),w>Q&&w<C?(r.changeBegan||(r.changeBegan=!0,r.changeCompleted=!1,m("changeBegin")),m("change"),y(w)):r.changeBegan&&(r.changeCompleted=!0,r.changeBegan=!1,m("changeComplete")),r.currentTime=Y(w,0,f),r.began&&m("update"),_>=f&&(i=0,b(),r.remaining?(e=s,m("loopComplete"),r.loopBegan=!1,r.direction==="alternate"&&h()):(r.paused=!0,r.completed||(r.completed=!0,m("loopComplete"),m("complete"),!r.passThrough&&"Promise"in window&&(c(),p(r)))))}return r.reset=function(){var _=r.direction;r.passThrough=!1,r.currentTime=0,r.progress=0,r.paused=!0,r.began=!1,r.loopBegan=!1,r.changeBegan=!1,r.completed=!1,r.changeCompleted=!1,r.reversePlayback=!1,r.reversed=_==="reverse",r.remaining=r.loop,n=r.children,a=n.length;for(var f=a;f--;)r.children[f].reset();(r.reversed&&r.loop!==!0||_==="alternate"&&r.loop===1)&&r.remaining++,y(r.reversed?r.duration:0)},r._onDocumentVisibility=d,r.set=function(_,f){return Rt(_,f),r},r.tick=function(_){s=_,e||(e=s),k((s+(i-e))*l.speed)},r.seek=function(_){k(g(_))},r.pause=function(){r.paused=!0,d()},r.play=function(){r.paused&&(r.completed&&r.reset(),r.paused=!1,S.push(r),d(),Jt())},r.reverse=function(){h(),r.completed=!r.reversed,d()},r.restart=function(){r.reset(),r.play()},r.remove=function(_){var f=vt(_);Ut(f,r)},r.reset(),r.autoplay&&r.play(),r}function Mt(t,e){for(var i=e.length;i--;)gt(t,e[i].animatable.target)&&e.splice(i,1)}function Ut(t,e){var i=e.animations,s=e.children;Mt(t,i);for(var n=s.length;n--;){var a=s[n],c=a.animations;Mt(t,c),!c.length&&!a.children.length&&s.splice(n,1)}!i.length&&!s.length&&e.pause()}function xe(t){for(var e=vt(t),i=S.length;i--;){var s=S[i];Ut(e,s)}}function ke(t,e){e===void 0&&(e={});var i=e.direction||"normal",s=e.easing?pt(e.easing):null,n=e.grid,a=e.axis,c=e.from||0,p=c==="first",r=c==="center",h=c==="last",g=u.arr(t),d=parseFloat(g?t[0]:t),v=g?parseFloat(t[1]):0,T=j(g?t[1]:t)||0,y=e.start||0+(g?d:0),m=[],b=0;return function(k,_,f){if(p&&(c=0),r&&(c=(f-1)/2),h&&(c=f-1),!m.length){for(var Q=0;Q<f;Q++){if(!n)m.push(Math.abs(c-Q));else{var C=r?(n[0]-1)/2:c%n[0],w=r?(n[1]-1)/2:Math.floor(c/n[0]),F=Q%n[0],H=Math.floor(Q/n[0]),V=C-F,I=w-H,D=Math.sqrt(V*V+I*I);a==="x"&&(D=-V),a==="y"&&(D=-I),m.push(D)}b=Math.max.apply(Math,m)}s&&(m=m.map(function(E){return s(E/b)*b})),i==="reverse"&&(m=m.map(function(E){return a?E<0?E*-1:-E:Math.abs(b-E)}))}var K=g?(v-d)/b:d;return y+K*(Math.round(m[_]*100)/100)+T}}function Ie(t){t===void 0&&(t={});var e=l(t);return e.duration=0,e.add=function(i,s){var n=S.indexOf(e),a=e.children;n>-1&&S.splice(n,1);function c(v){v.passThrough=!0}for(var p=0;p<a.length;p++)c(a[p]);var r=tt(i,rt(ct,t));r.targets=r.targets||t.targets;var h=e.duration;r.autoplay=!1,r.direction=e.direction,r.timelineOffset=u.und(s)?h:ht(s,h),c(e),e.seek(r.timelineOffset);var g=l(r);c(g),a.push(g);var d=Wt(a,t);return e.delay=d.delay,e.endDelay=d.endDelay,e.duration=d.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e}l.version="3.2.1";l.speed=1;l.suspendWhenDocumentHidden=!0;l.running=S;l.remove=xe;l.get=ft;l.set=Rt;l.convertPx=dt;l.path=ue;l.setDashoffset=pe;l.stagger=ke;l.timeline=Ie;l.easing=pt;l.penner=Ot;l.random=function(t,e){return Math.floor(Math.random()*(e-t+1))+t};let yt;function Te(t){let e=document.getElementById(`notice_box_i${t}`);e&&(document.body.onmousemove=i=>{let s=e.getBoundingClientRect();e.style.setProperty("--x",`${i.clientX-s.left-s.width/2}px`),e.style.setProperty("--y",`${i.clientY-s.top-s.height/2}px`)},yt=e.animate({transform:["rotateX(90deg)","rotate(0deg)"]},{id:"play",duration:200,easing:"ease"}))}function Qe(t){let e=document.getElementById(`notice_i${t}`),i=document.getElementById(`notice_box_i${t}`);!e||!i||(e.style.display="flex",yt.play())}function Pe(t){let e=document.getElementById(`notice_i${t}`),i=document.getElementById(`notice_box_i${t}`);!e||!i||(yt.reverse(),setTimeout(()=>{e.style.display="none"},200))}const Me="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let Et=(t=21)=>{let e="",i=crypto.getRandomValues(new Uint8Array(t));for(;t--;)e+=Me[i[t]&63];return e};function o(t){return document.getElementById(t)}function lt(t,e,i){let s=Et(16),n=document.getElementById("notices_container");for(;document.getElementById(`notice_c${s}`)!=null;)s=Et(16);let a=`
    <div class="notice_wrapper" id="notice_i${s}">
        <div class="notice_box" id="notice_box_i${s}">
          <div class="inner">
            <div style="width: 100%;flex-grow: 1;display: flex;flex-direction: column; align-items: center;">
              <div class="notice_title">${t}</div>
              <hr style="width: 80%;line-height: 1px;" />
              <div class="notice_content">${e}</div>
            </div>
            <div class="notice_btns" id="ntb_i${s}">
            </div>
          </div>
        </div>
      </div>
    `,c=document.createElement("div");c.id=`notice_c${s}`,c.innerHTML=a,n==null||n.appendChild(c);let p=document.getElementById(`ntb_i${s}`);return i.forEach(r=>{let h=document.createElement("div");h.className="notice_btn",h.style.color=r.color,h.onclick=g=>{r.click(s,g)},h.innerText=r.content,p.appendChild(h)}),Te(s),Qe(s),s}function Z(t){Pe(t),setTimeout(()=>{var i;let e=document.getElementById(`notice_c${t}`);e!=null&&((i=document.getElementById("notices_container"))==null||i.removeChild(e))},300)}function Ee(){o("alert_stop").style.display="flex",window.stop()}function Ae(t,e){let i={u:t,p:e,ts:Date.now()};localStorage.setItem("c3tm_so",JSON.stringify(i))}function x(t){o("imgview_img").setAttribute("src",t),o("imgview_con").style.display="flex"}const q=new Map([["范星星",{sub:"英语",des:"",nick:["范Star","Star","Tony"]}],["杨怡涵",{sub:"语文",des:"",nick:["杨美丽"]}],["刘耀辉",{sub:"数学",des:"",nick:[]}],["付陪习",{sub:"物理",des:"",nick:["老付"]}],["谷正花",{sub:"化学",des:"",nick:["阿花"]}],["邱艳",{sub:"生物",des:"",nick:["邱嬢嬢"]}]]),O=new Map([["李想",{role:null,pic:[],cla:5,cp:"樊芷莹"}],["孙晨豪",{role:null,pic:[],cla:7,cp:null}],["吴泽松",{role:"数学课代表",pic:[],cla:4,cp:null}],["潘垚希",{role:"数学课代表",pic:[],cla:4,cp:null}],["齐娜",{role:null,pic:[{id:"sf22",pics:["https://s2.loli.net/2024/07/01/x3ufsk1c6SYwgbP.webp"]}],cla:6,cp:null}],["欧阳俊贤",{role:null,pic:[],cla:7,cp:"李佳潼"}],["田一诺",{role:"前语文课代表",pic:[{id:"sf22",pics:["https://s2.loli.net/2024/07/05/hY2bFgIJNQkvwmK.webp"]}],cla:6,cp:null}],["付开尹",{role:"语文课代表",pic:[{id:"sf22",pics:["https://s2.loli.net/2024/07/01/x3ufsk1c6SYwgbP.webp"]}],cla:6,cp:null}],["孙玉环",{role:null,pic:[{id:"sf22",pics:["https://s2.loli.net/2024/07/01/x3ufsk1c6SYwgbP.webp"]}],cla:6,cp:null}],["孙琳江",{role:null,pic:[],cla:4,cp:null}],["熊珂",{role:"体育委员",pic:[],cla:7,cp:null}],["段昊宇",{role:"DEV;生物课代表",pic:[],cla:7,cp:null}],["许中天",{role:null,pic:[],cla:7,cp:"虎金奕晓"}],["马金菁",{role:"化学课代表",pic:[{id:"sf22",pics:["https://s2.loli.net/2024/07/01/x3ufsk1c6SYwgbP.webp"]}],cla:6,cp:null}],["胡誉麒",{role:null,pic:[],cla:6,cp:null}],["秦志远",{role:null,pic:[],cla:5,cp:"付芝瑞"}],["曹紫陌",{role:null,pic:[],cla:5,cp:null}],["乔新媛",{role:"物理课代表",pic:[{id:"sf22",pics:["https://s2.loli.net/2024/07/01/x3ufsk1c6SYwgbP.webp","https://s2.loli.net/2024/07/05/N9Zn57QPdRzWhCo.webp"]}],cla:5,cp:null}],["王智超",{role:"班长",pic:[],cla:5,cp:"乔新媛"}],["李思雨",{role:null,pic:[{id:"sf22",pics:["https://s2.loli.net/2024/07/01/x3ufsk1c6SYwgbP.webp"]}],cla:6,cp:null}],["郭嘉楠",{role:null,pic:[],cla:7,cp:null}],["王禹淅",{role:null,pic:[{id:"sf22",pics:["https://s2.loli.net/2024/07/01/x3ufsk1c6SYwgbP.webp"]}],cla:4,cp:null}],["马煜翔",{role:"最美志愿者",pic:[],cla:4,cp:null}],["马健杰",{role:null,pic:[],cla:6,cp:null}],["娄钰",{role:null,pic:[{id:"sf22",pics:["https://s2.loli.net/2024/07/01/x3ufsk1c6SYwgbP.webp"]}],cla:6,cp:null}],["顾茹妍",{role:"团支书",pic:[{id:"sf22",pics:["https://s2.loli.net/2024/07/01/x3ufsk1c6SYwgbP.webp"]}],cla:6,cp:null}],["李梦涵",{role:"英语课代表",pic:[{id:"sf22",pics:["https://s2.loli.net/2024/07/01/x3ufsk1c6SYwgbP.webp"]}],cla:4,cp:null}],["虎金奕晓",{role:null,pic:[],cla:4,cp:"许中天"}],["白力文",{role:null,pic:[],cla:5,cp:null}],["郑家民",{role:null,pic:[{id:"sf22",pics:["https://s2.loli.net/2024/07/05/hY2bFgIJNQkvwmK.webp"]}],cla:4,cp:null}],["周俊辰",{role:"物理课代表",pic:[],cla:6,cp:null}],["刘邱宇",{role:null,pic:[],cla:5,cp:null}],["任柯锦",{role:"生物课代表",pic:[{id:"sf22",pics:["https://s2.loli.net/2024/07/01/x3ufsk1c6SYwgbP.webp"]}],cla:7,cp:null}],["王思涵",{role:"英语课代表",pic:[{id:"sf22",pics:["https://s2.loli.net/2024/07/01/x3ufsk1c6SYwgbP.webp"]}],cla:7,cp:null}],["毛安奇",{role:null,pic:[],cla:4,cp:null}],["和茂昀",{role:"化学课代表",pic:[{id:"sf22",pics:["https://s2.loli.net/2024/07/01/x3ufsk1c6SYwgbP.webp"]}],cla:6,cp:null}],["付芝瑞",{role:null,pic:[{id:"sf22",pics:["https://s2.loli.net/2024/07/01/x3ufsk1c6SYwgbP.webp"]}],cla:6,cp:null}],["李诗怡",{role:null,pic:[],cla:7,cp:null}],["胡砚",{role:"体育委员",pic:[{id:"sf22",pics:["https://s2.loli.net/2024/07/05/hY2bFgIJNQkvwmK.webp"]}],cla:7,cp:null}],["李佳潼",{role:"语文课代表",pic:[{id:"sf22",pics:["https://s2.loli.net/2024/07/01/x3ufsk1c6SYwgbP.webp"]}],cla:5,cp:"欧阳俊贤"}],["樊芷莹",{role:null,pic:[{id:"sf22",pics:["https://s2.loli.net/2024/07/01/x3ufsk1c6SYwgbP.webp"]}],cla:4,cp:"李想"}],["邓淅元",{role:"班长",pic:[{id:"sf22",pics:["https://s2.loli.net/2024/07/05/N9Zn57QPdRzWhCo.webp"]}],cla:4,cp:null}],["毕馨元",{role:null,pic:[],cla:4,cp:null}],["肖稚菡",{role:null,pic:[{id:"sf22",pics:["https://s2.loli.net/2024/07/05/N9Zn57QPdRzWhCo.webp"]}],cla:7,cp:null}],["鲁新海",{role:"生物课代表",pic:[],cla:4,cp:null}],["骆昱衡",{role:null,pic:[],cla:0,cp:null}],["杨以凡",{role:null,pic:[],cla:0,cp:null}],["赵文涛",{role:"语文课代表",pic:[],cla:5,cp:null}],["龚思豪",{role:null,pic:[],cla:5,cp:null}],["张在辉",{role:null,pic:[{id:"sf22",pics:["https://s2.loli.net/2024/07/05/hY2bFgIJNQkvwmK.webp"]}],cla:4,cp:null}],["付誉",{role:null,pic:[],cla:6,cp:null}]]);let A=0,M=null,N=!1;const B=[{html:`
        <div id="p0_bg" style="height:100%;width:100%;display:flex;justify-content:center;position:relative;">
        <div id="p0_logo_container" style="align-self: center;">
            <img id="p0_logo_p1" class="p0_logo_part" style="left:0;top:14.5px" src="/logo/Part1.png" height="44.5" width="60.5" />
            <img id="p0_logo_p2" class="p0_logo_part" style="left:0;top:0" src="/logo/Part2.png" height="163" width="214" />
            <img id="p0_logo_p3" class="p0_logo_part" style="left:216px;top:11.5px" src="/logo/Part3.png" height="133" width="115" />
            <img id="p0_logo_p4" class="p0_logo_part" style="left:100px;top:105px" src="/logo/Part4.png" height="46" width="124" />
        </div>
        <div id="p0_tapbtn">轻触任意位置进入/TAP TO ENTER</div>
        </div>
        `,value:new Map,enter:t=>{let e=l({targets:"#p0_logo_p1",keyframes:[{translateY:-5},{translateY:0}],duration:2800,easing:"linear",loop:!0});t.set("a1",e);let i=l({targets:"#p0_logo_p2",keyframes:[{translateY:-12},{translateY:0}],duration:2800,easing:"linear",loop:!0});t.set("a2",i);let s=l({targets:"#p0_logo_p3",keyframes:[{translateY:-20},{translateY:0}],duration:2800,easing:"linear",loop:!0});t.set("a3",s);let n=l({targets:"#p0_logo_p4",keyframes:[{translateY:4},{translateY:0}],duration:2400,easing:"linear",loop:!0});t.set("a4",n);let a=l({targets:"#p0_tapbtn",keyframes:[{opacity:.4},{opacity:1}],duration:2800,easing:"linear",loop:!0});t.set("a5",a),o("p0_bg").onclick=c=>{P()}},leave:t=>{o("p0_bg").onclick=null,l.remove(t.get("a1")),l.remove(t.get("a2")),l.remove(t.get("a3")),l.remove(t.get("a4")),l.remove(t.get("a5"));let e=l({targets:"#p0_logo_container",keyframes:[{translateY:-(o("p0_logo_container").offsetTop+170)}],duration:2600,easing:"easeInQuart"}),i=l({targets:"#p0_tapbtn",keyframes:[{translateY:document.documentElement.clientHeight*.1+50}],duration:1400,easing:"easeInBack"});e.play(),i.play(),setTimeout(()=>{l.remove([e,i])},2600)},delay:2700},{html:`
        <div id="p1_bg" style="height:100%;width:100%;display:flex;justify-content:center;position:relative;">
        <div id="p1_container" style="align-self: center;display: flex;flex-direction: column;align-items: center;">
            <div id="p1_t1" style="font-size:46px;opacity:0;transform: translateY(60px);">身份确认</div>
            <input type="text" placeholder="输入你的名字" id="p1_input" class="def_input" style="width:240px;height:40px;padding:8px;margin:16px;opacity: 0"></input>
            <div id="p1_btn" class="notice_btn" style="color: #17507d;opacity: 0;">确定</div>
        </div>
        </div>
        `,value:new Map,enter:t=>{let e=l({targets:"#p1_t1",keyframes:[{opacity:1}],duration:1e3,easing:"easeInQuart"});t.set("a1",e),setTimeout(()=>{let i=l({targets:"#p1_t1",keyframes:[{translateY:0}],duration:800,easing:"easeInQuart"}),s=l({targets:"#p1_input",keyframes:[{opacity:1}],duration:1e3,easing:"easeInQuart"}),n=l({targets:"#p1_btn",keyframes:[{opacity:1}],duration:1e3,easing:"easeInQuart"});t.set("a2",i),t.set("a3",s),t.set("a4",n)},800),o("p1_btn").onclick=()=>{let i=(o("p1_input").value??"").trim(),s=!1;if(O.has(i))s=!1;else if(q.has(i))s=!0;else{lt("身份验证失败","没有找到你的信息，是不是打错字了呢？",[{content:"我再试试",color:"#3d3d3f",click:function(n,a){Z(n)}}]);return}lt("身份已确认",`是否确认你的信息为「${i}」${s?"老师":"同学"}，确认后无法更改。`,[{content:"我确认了",color:"#ff6464",click:(n,a)=>{Z(n),M=i,N=s,P()}},{content:"我再想想",color:"#3d3d3f",click:(n,a)=>{Z(n)}}])}},leave:t=>{l.remove(t.get("a1")),l.remove(t.get("a2")),l.remove(t.get("a3")),l.remove(t.get("a4")),l({targets:"#p1_bg",keyframes:[{opacity:0}],duration:1e3,easing:"easeInQuart"})},delay:1200},{html:`
        <div id="p2_bg" style="height:100%;width:100%;display:flex;justify-content:center;position:relative;">
        <div id="p2_container" style="align-self: center;display: flex;flex-direction: column;align-items: center;">
            <div id="p2_t" style="font-size:46px;opacity:0;"></div>
        </div>
        </div>
        `,value:new Map,enter:t=>{o("p2_t").innerText=`${M}${N?"老师，你还记得和理3班第一次相遇吗？":"，你还记得和同学们第一次相遇吗？"}`;let e=l({targets:"#p2_t",keyframes:[{opacity:1}],duration:1e3,easing:"easeInQuart"});t.set("a1",e),setTimeout(()=>{P()},4e3)},leave:t=>{l.remove(t.get("a1")),l({targets:"#p2_t",keyframes:[{opacity:0}],duration:1e3,easing:"easeInQuart"})},delay:1200},{html:`
        <div id="p3_bg" style="height:100%;width:100%;display:flex;justify-content:center;position:relative;">
        <div id="p3_container" style="align-self: center;display: flex;flex-direction: column;align-items: center;transition: all 1s;justify-content: center;height:100%;">
            <div id="p3_li_1" class="p3_li" style="opacity:0;"></div>
            <div id="p3_li_2" class="p3_li" style="opacity:0;height:0">2022/8/14 14:30PM&emsp;我们收假了，开始了一起相处的第一个学期</div>
            <div id="p3_li_3" class="p3_li" style="opacity:0;height:0">2022/8/21~26&emsp;我们度过了一段「痛并快乐」的军训时光，你开始认识并记住了班上一个个同学</div>
            <div id="p3_li_b_con" style="opacity:0;">
                <div class="btm_tip">数据来源于班级微信群</div>
                <div class="li_n_btn">点击空白处继续</div>
            </div>
        </div>
        </div>
        `,value:new Map,enter:t=>{let e;N?e=M=="范星星"?"年级分好了班，你来「高二理3」任职班主任，并创立了班级群":"年级分好了班，你来「高二理3」任教":e=O.get(M).cla==0?"我们分好了班，来到了「高二理3」，进入了班级群":`你从「高一${O.get(M).cla}班」来到了「高二理3」，进入了班级群`,o("p3_li_1").innerHTML="2022/7/14 9:40AM&emsp;"+e,l({targets:"#p3_li_1",keyframes:[{opacity:1}],duration:500,easing:"easeInQuart"}),setTimeout(()=>{o("p3_li_2").style.height="fit-content",l({targets:"#p3_li_2",keyframes:[{opacity:1}],duration:500,easing:"easeInQuart"})},1500),setTimeout(()=>{o("p3_li_3").style.height="fit-content",l({targets:"#p3_li_3",keyframes:[{opacity:1}],duration:500,easing:"easeInQuart"})},3e3),setTimeout(()=>{l({targets:"#p3_li_b_con",keyframes:[{opacity:1}],duration:500,easing:"easeInQuart"})},4e3),o("p3_bg").onclick=()=>{P()}},leave:t=>{l({targets:"#p3_bg",keyframes:[{opacity:0}],duration:1e3,easing:"easeInQuart"})},delay:1200},{html:`
        <div id="p4_bg" style="height:100%;width:100%;display:flex;justify-content:center;position:relative;flex-direction: column;align-items: center;">
            <div id="p4_ic_1" class="pic_c_row" style="opacity:0;">
                <img id="p4_img_1" class="img_abs" style="height:225px;width:300px;" src="https://s2.loli.net/2024/07/01/rOtmZBeHb5xc8fp.webp" />
                <div id="p4_img_t1" class="img_text" style="width:0;opacity:0;"></div>
            </div>
            <div id="p4_ic_2" class="pic_c_row" style="opacity:0;">
                <div id="p4_img_t2" class="img_text" style="width:0;opacity:0;"></div>
                <img id="p4_img_2" class="img_abs" style="height:225px;width:300px;" src="https://s2.loli.net/2024/07/01/uzOiYHr5DTg8F6P.webp" />
            </div>
            <div id="p4_ic_3" class="pic_c_row" style="opacity:0;">
                <img id="p4_img_3" class="img_abs" style="height:225px;width:300px;" src="https://s2.loli.net/2024/07/01/C6qJwyFbHQEWA4T.webp" />
                <div id="p4_img_t3" class="img_text" style="width:0;opacity:0;"></div>
            </div>
            <div id="p4_tip" class="btm_tip" style="opacity:0">TIPS:点击图片查看大图<br/>点击空白处继续</div>
        </div>
        `,value:new Map,enter:t=>{o("p4_bg").onclick=()=>{P()},o("p4_img_1").onclick=e=>{var i;e.stopPropagation(),x(((i=o("p4_img_1"))==null?void 0:i.getAttribute("src"))??"")},o("p4_img_2").onclick=e=>{var i;e.stopPropagation(),x(((i=o("p4_img_2"))==null?void 0:i.getAttribute("src"))??"")},o("p4_img_3").onclick=e=>{var i;e.stopPropagation(),x(((i=o("p4_img_3"))==null?void 0:i.getAttribute("src"))??"")},l({targets:"#p4_ic_1",keyframes:[{opacity:1}],duration:500,easing:"easeInQuart"}),l({targets:"#p4_ic_2",keyframes:[{opacity:1}],duration:500,easing:"easeInQuart"}),l({targets:"#p4_ic_3",keyframes:[{opacity:1}],duration:500,easing:"easeInQuart"}),setTimeout(()=>{o("p4_img_t1").innerText="摆臂训练",o("p4_img_t2").innerText="军礼训练",o("p4_img_t3").innerText="齐步训练",l({targets:"#p4_img_t1",keyframes:[{opacity:1,width:200}],duration:500,easing:"easeInQuart"}),l({targets:"#p4_img_t2",keyframes:[{opacity:1,width:200}],duration:500,easing:"easeInQuart"}),l({targets:"#p4_img_t3",keyframes:[{opacity:1,width:200}],duration:500,easing:"easeInQuart"}),l({targets:"#p4_tip",keyframes:[{opacity:1}],duration:800,easing:"easeInQuart"})},1e3)},leave:t=>{l({targets:"#p4_bg",keyframes:[{opacity:0}],duration:1e3,easing:"easeInQuart"})},delay:1200},{html:`
        <div id="p5_bg" style="height:100%;width:100%;display:flex;justify-content:center;position:relative;flex-direction: column;align-items: center;">
            <div id="p5_ic_1" class="pic_c_row" style="opacity:0;">
                <img id="p5_img_1" class="img_abs" style="height:225px;width:300px;" src="https://s2.loli.net/2024/07/01/VBWYafMJEQ21T7z.webp" />
                <div id="p5_img_t1" class="img_text" style="width:0;opacity:0;"></div>
            </div>
            <div id="p5_ic_2" class="pic_c_row" style="opacity:0;">
                <div id="p5_img_t2" class="img_text" style="width:0;opacity:0;"></div>
                <img id="p5_img_2" class="img_abs" style="height:225px;width:300px;" src="https://s2.loli.net/2024/07/01/y3hXsxU7YNW4Jlt.webp" />
            </div>
            <div id="p5_ic_3" class="pic_c_row" style="opacity:0;">
                <img id="p5_img_3" class="img_abs" style="height:221px;width:375px;" src="https://s2.loli.net/2024/07/01/SC7G1HTRJXIOndr.webp" />
                <div id="p5_img_t3" class="img_text" style="width:0;opacity:0;"></div>
            </div>
            <div id="p5_tip" class="btm_tip" style="opacity:0">TIPS:点击图片查看大图<br/>点击空白处继续</div>
        </div>
        `,value:new Map,enter:t=>{o("p5_bg").onclick=()=>{P()},o("p5_img_1").onclick=e=>{var i;e.stopPropagation(),x(((i=o("p5_img_1"))==null?void 0:i.getAttribute("src"))??"")},o("p5_img_2").onclick=e=>{var i;e.stopPropagation(),x(((i=o("p5_img_2"))==null?void 0:i.getAttribute("src"))??"")},o("p5_img_3").onclick=e=>{var i;e.stopPropagation(),x(((i=o("p5_img_3"))==null?void 0:i.getAttribute("src"))??"")},l({targets:"#p5_ic_1",keyframes:[{opacity:1}],duration:500,easing:"easeInQuart"}),l({targets:"#p5_ic_2",keyframes:[{opacity:1}],duration:500,easing:"easeInQuart"}),l({targets:"#p5_ic_3",keyframes:[{opacity:1}],duration:500,easing:"easeInQuart"}),setTimeout(()=>{o("p5_img_t1").innerText="烈日下的训练",o("p5_img_t2").innerText="「FREE TIME」",o("p5_img_t3").innerText="「GOOD END」",l({targets:"#p5_img_t1",keyframes:[{opacity:1,width:300}],duration:500,easing:"easeInQuart"}),l({targets:"#p5_img_t2",keyframes:[{opacity:1,width:300}],duration:500,easing:"easeInQuart"}),l({targets:"#p5_img_t3",keyframes:[{opacity:1,width:300}],duration:500,easing:"easeInQuart"}),l({targets:"#p5_tip",keyframes:[{opacity:1}],duration:800,easing:"easeInQuart"})},1e3)},leave:t=>{l({targets:"#p5_bg",keyframes:[{opacity:0}],duration:1e3,easing:"easeInQuart"})},delay:1200},{html:`
        <div id="p6_bg" style="height:100%;width:100%;display:flex;justify-content:center;position:relative;">
        <div id="p6_container" style="align-self: center;display: flex;flex-direction: column;align-items: center;transition: all 1s;justify-content: center;height:100%;">
            <div id="p6_li_1" class="p3_li" style="opacity:0;">2022/9/25 14:30PM&emsp;因疫情暂缓返校，大家上了一个国庆的网课（在校的同学表示「只有我们班和厕所开灯了」）</div>
            <div id="p6_li_2" class="p3_li" style="opacity:0;height:0">2022/11/17~19&emsp;生日会和体育节（彩色手印班旗首次亮相！）</div>
            <div id="p6_li_3" class="p3_li" style="opacity:0;height:0">2022/11/22 8:00AM&emsp;网课MAX!（≈放寒假了）</div>
            <div id="p6_li_b_con" style="opacity:0;">
                <div class="btm_tip">数据来源于班级微信群</div>
                <div class="li_n_btn">点击空白处继续</div>
            </div>
        </div>
        </div>
        `,value:new Map,enter:()=>{l({targets:"#p6_li_1",keyframes:[{opacity:1}],duration:500,easing:"easeInQuart"}),setTimeout(()=>{o("p6_li_2").style.height="fit-content",l({targets:"#p6_li_2",keyframes:[{opacity:1}],duration:500,easing:"easeInQuart"})},1500),setTimeout(()=>{o("p6_li_3").style.height="fit-content",l({targets:"#p6_li_3",keyframes:[{opacity:1}],duration:500,easing:"easeInQuart"})},3e3),setTimeout(()=>{l({targets:"#p6_li_b_con",keyframes:[{opacity:1}],duration:500,easing:"easeInQuart"})},4e3),o("p6_bg").onclick=()=>{P()}},leave:()=>{l({targets:"#p6_bg",keyframes:[{opacity:0}],duration:1e3,easing:"easeInQuart"})},delay:1100},{html:`
        <div id="p7_bg" style="height:100%;width:100%;display:flex;justify-content:center;position:relative;flex-direction: column;align-items: center;">
            <div id="p7_ic_1" class="pic_c_row" style="opacity:0;">
                <img id="p7_img_1" class="img_abs" style="height:202px;width:306px;" src="https://s2.loli.net/2024/07/05/RyKYnE51mTsgFaL.webp" />
                <div id="p7_img_t1" class="img_text" style="width:0;opacity:0;"></div>
            </div>
            <div id="p7_ic_2" class="pic_c_row" style="opacity:0;">
                <div id="p7_img_t2" class="img_text" style="width:0;opacity:0;"></div>
                <img id="p7_img_2" class="img_abs" style="height:300px;width:200px;" src="https://s2.loli.net/2024/07/01/PXEymsdaDJVktCo.webp" />
            </div>
            <div id="p7_ic_3" class="pic_c_row" style="opacity:0;">
                <img id="p7_img_3" class="img_abs" style="height:225px;width:300px;" src="https://s2.loli.net/2024/07/01/nSZYv48pOAEhNR5.webp" />
                <div id="p7_img_t3" class="img_text" style="width:0;opacity:0;"></div>
            </div>
            <div id="p7_tip" class="btm_tip" style="opacity:0">TIPS:历史悠久...有些照片已经不可避免地包浆了...<br/>点击空白处继续</div>
        </div>
        `,value:new Map,enter:t=>{o("p7_bg").onclick=()=>{P()},o("p7_img_1").onclick=e=>{var i;e.stopPropagation(),x(((i=o("p7_img_1"))==null?void 0:i.getAttribute("src"))??"")},o("p7_img_2").onclick=e=>{var i;e.stopPropagation(),x(((i=o("p7_img_2"))==null?void 0:i.getAttribute("src"))??"")},o("p7_img_3").onclick=e=>{var i;e.stopPropagation(),x(((i=o("p7_img_3"))==null?void 0:i.getAttribute("src"))??"")},l({targets:"#p7_ic_1",keyframes:[{opacity:1}],duration:500,easing:"easeInQuart"}),l({targets:"#p7_ic_2",keyframes:[{opacity:1}],duration:500,easing:"easeInQuart"}),l({targets:"#p7_ic_3",keyframes:[{opacity:1}],duration:500,easing:"easeInQuart"}),setTimeout(()=>{o("p7_img_t1").innerText="颜料，理3，手印旗！",o("p7_img_t2").innerText="蛋糕，蜡烛，生日会！",o("p7_img_t3").innerText="汗水，奖牌，体育节！",l({targets:"#p7_img_t1",keyframes:[{opacity:1,width:300}],duration:500,easing:"easeInQuart"}),l({targets:"#p7_img_t2",keyframes:[{opacity:1,width:300}],duration:500,easing:"easeInQuart"}),l({targets:"#p7_img_t3",keyframes:[{opacity:1,width:300}],duration:500,easing:"easeInQuart"}),l({targets:"#p7_tip",keyframes:[{opacity:1}],duration:800,easing:"easeInQuart"})},1e3)},leave:t=>{l({targets:"#p7_bg",keyframes:[{opacity:0}],duration:1e3,easing:"easeInQuart"})},delay:1200},{html:`
        <div id="p8_bg" style="height:100%;width:100%;display:flex;justify-content:center;position:relative;flex-direction: column;align-items: center;">
            <div id="p8_ic_1" class="pic_c_row" style="opacity:0;">
                <img id="p8_img_1" class="img_abs" style="height:200px;width:300px;" src="https://s2.loli.net/2024/07/01/lty3KAwWjisQXzd.webp" />
                <div id="p8_img_t1" class="img_text" style="width:0;opacity:0;"></div>
            </div>
            <div id="p8_ic_2" class="pic_c_row" style="opacity:0;">
                <div id="p8_img_t2" class="img_text" style="width:0;opacity:0;"></div>
                <img id="p8_img_2" class="img_abs" style="height:300px;width:225px;" src="https://s2.loli.net/2024/07/01/I8aQWdRTb9GUXJM.webp" />
            </div>
            <div id="p8_ic_3" class="pic_c_row" style="opacity:0;">
                <img id="p8_img_3" class="img_abs" style="height:162px;width:288px;" src="https://s2.loli.net/2024/07/01/QL8s1N5E7vtbjrB.webp" />
                <div id="p8_img_t3" class="img_text" style="width:0;opacity:0;"></div>
            </div>
            <div id="p8_tip" class="btm_tip" style="opacity:0">TIPS:历史悠久...有些照片已经不可避免地包浆了...<br/>点击空白处继续</div>
        </div>
        `,value:new Map,enter:t=>{var i,s,n,a,c;let e="绿码方阵";N||((s=(i=O.get(M))==null?void 0:i.pic.find(p=>p.id=="sf22"))==null?void 0:s.pics[0])!=null&&((n=o("p8_img_3"))==null||n.setAttribute("src",O.get(M).pic.find(p=>p.id=="sf22").pics[0]),(a=o("p8_img_3"))==null||a.setAttribute("width","300px"),(c=o("p8_img_3"))==null||c.setAttribute("height","2250px"),e="还记得这一瞬间吗？"),o("p8_bg").onclick=()=>{P()},o("p8_img_1").onclick=p=>{var r;p.stopPropagation(),x(((r=o("p8_img_1"))==null?void 0:r.getAttribute("src"))??"")},o("p8_img_2").onclick=p=>{var r;p.stopPropagation(),x(((r=o("p8_img_2"))==null?void 0:r.getAttribute("src"))??"")},o("p8_img_3").onclick=p=>{var r;p.stopPropagation(),x(((r=o("p8_img_3"))==null?void 0:r.getAttribute("src"))??"")},l({targets:"#p8_ic_1",keyframes:[{opacity:1}],duration:500,easing:"easeInQuart"}),l({targets:"#p8_ic_2",keyframes:[{opacity:1}],duration:500,easing:"easeInQuart"}),l({targets:"#p8_ic_3",keyframes:[{opacity:1}],duration:500,easing:"easeInQuart"}),setTimeout(()=>{o("p8_img_t1").innerText="防护服方阵",o("p8_img_t2").innerText="「HAPPY TIME」",o("p8_img_t3").innerText=e,l({targets:"#p8_img_t1",keyframes:[{opacity:1,width:300}],duration:500,easing:"easeInQuart"}),l({targets:"#p8_img_t2",keyframes:[{opacity:1,width:300}],duration:500,easing:"easeInQuart"}),l({targets:"#p8_img_t3",keyframes:[{opacity:1,width:300}],duration:500,easing:"easeInQuart"}),l({targets:"#p8_tip",keyframes:[{opacity:1}],duration:800,easing:"easeInQuart"})},1e3)},leave:t=>{l({targets:"#p8_bg",keyframes:[{opacity:0}],duration:1e3,easing:"easeInQuart"})},delay:1200},{html:`
        <div id="p9_bg" style="height:100%;width:100%;display:flex;justify-content:center;position:relative;">
        <div id="p9_container" style="align-self: center;display: flex;flex-direction: column;align-items: center;transition: all 1s;justify-content: center;height:100%;">
            <div id="p9_li_1" class="p3_li" style="opacity:0;">2023/3/29~30&emsp;在大家的共同努力下，「飞越疯人院」话剧取得圆满成功！</div>
            <div id="p9_li_2" class="p3_li" style="opacity:0;height:0">2023/4/28&emsp;高中的第一次春游（果逸花谷一日游）</div>
            <div id="p9_li_3" class="p3_li" style="opacity:0;height:0"></div>
            <div id="p9_li_b_con" style="opacity:0;">
                <div class="btm_tip">数据来源于班级微信群</div>
                <div class="li_n_btn">点击空白处继续</div>
            </div>
        </div>
        </div>
        `,value:new Map,enter:()=>{let t="";N?t=`作为理3的${q.get(M).sub}老师，您在体育节为理3加油助威！`:O.get(M).role==null?t="作为班级的运动健儿，你在体育节为班级做出了巨大贡献":t=`作为班级的${O.get(M).role}，你在体育节为班级做出了巨大贡献`,o("p9_li_3").innerHTML=`2023/11/15~16&emsp;${t}`,l({targets:"#p9_li_1",keyframes:[{opacity:1}],duration:500,easing:"easeInQuart"}),setTimeout(()=>{o("p9_li_2").style.height="fit-content",l({targets:"#p9_li_2",keyframes:[{opacity:1}],duration:500,easing:"easeInQuart"})},1500),setTimeout(()=>{o("p9_li_3").style.height="fit-content",l({targets:"#p9_li_3",keyframes:[{opacity:1}],duration:500,easing:"easeInQuart"})},3e3),setTimeout(()=>{l({targets:"#p9_li_b_con",keyframes:[{opacity:1}],duration:500,easing:"easeInQuart"})},4e3),o("p9_bg").onclick=()=>{P()}},leave:()=>{l({targets:"#p9_bg",keyframes:[{opacity:0}],duration:1e3,easing:"easeInQuart"})},delay:1100},{html:`
        <div id="p10_bg" style="height:100%;width:100%;display:flex;justify-content:center;position:relative;flex-direction: column;align-items: center;">
            <div id="p10_ic_1" class="pic_c_row" style="opacity:0;">
                <img id="p10_img_1" class="img_abs" style="height:200px;width:300px;" src="https://s2.loli.net/2024/07/01/nu4Y29EVzaA3x8h.webp" />
                <div id="p10_img_t1" class="img_text" style="width:0;opacity:0;"></div>
            </div>
            <div id="p10_ic_2" class="pic_c_row" style="opacity:0;">
                <div id="p10_img_t2" class="img_text" style="width:0;opacity:0;"></div>
                <img id="p10_img_2" class="img_abs" style="height:200px;width:300px;" src="https://s2.loli.net/2024/07/01/UsqkYViQujZ5A8C.webp" />
            </div>
            <div id="p10_ic_3" class="pic_c_row" style="opacity:0;">
                <img id="p10_img_3" class="img_abs" style="height:200px;width:300px;" src="https://s2.loli.net/2024/07/01/BELOGv3phrwPlc1.webp" />
                <div id="p10_img_t3" class="img_text" style="width:0;opacity:0;"></div>
            </div>
            <div id="p10_tip" class="btm_tip" style="opacity:0">TIPS:热知识：本页图片文案来自于全宇宙第一畅销游戏Minecraft！<br/>点击空白处继续</div>
        </div>
        `,value:new Map,enter:t=>{o("p10_bg").onclick=()=>{P()},o("p10_img_1").onclick=e=>{var i;e.stopPropagation(),x(((i=o("p10_img_1"))==null?void 0:i.getAttribute("src"))??"")},o("p10_img_2").onclick=e=>{var i;e.stopPropagation(),x(((i=o("p10_img_2"))==null?void 0:i.getAttribute("src"))??"")},o("p10_img_3").onclick=e=>{var i;e.stopPropagation(),x(((i=o("p10_img_3"))==null?void 0:i.getAttribute("src"))??"")},l({targets:"#p10_ic_1",keyframes:[{opacity:1}],duration:500,easing:"easeInQuart"}),l({targets:"#p10_ic_2",keyframes:[{opacity:1}],duration:500,easing:"easeInQuart"}),l({targets:"#p10_ic_3",keyframes:[{opacity:1}],duration:500,easing:"easeInQuart"}),setTimeout(()=>{o("p10_img_t1").innerText="「One Flew Over the Cuckoo's Nest」",o("p10_img_t2").innerText="「Tie Dye Outfit」",o("p10_img_t3").innerText="「The Healing Power of Friendship!」",l({targets:"#p10_img_t1",keyframes:[{opacity:1,width:500}],duration:500,easing:"easeInQuart"}),l({targets:"#p10_img_t2",keyframes:[{opacity:1,width:500}],duration:500,easing:"easeInQuart"}),l({targets:"#p10_img_t3",keyframes:[{opacity:1,width:500}],duration:500,easing:"easeInQuart"}),l({targets:"#p10_tip",keyframes:[{opacity:1}],duration:800,easing:"easeInQuart"})},1e3)},leave:t=>{l({targets:"#p10_bg",keyframes:[{opacity:0}],duration:1e3,easing:"easeInQuart"})},delay:1200},{html:`
        <div id="p11_bg" style="height:100%;width:100%;display:flex;justify-content:center;position:relative;flex-direction: column;align-items: center;">
            <div id="p11_ic_1" class="pic_c_row" style="opacity:0;">
                <img id="p11_img_1" class="img_abs" style="height:200px;width:300px;" src="https://s2.loli.net/2024/07/01/PzlJN9M6ub8ioFG.webp" />
                <div id="p11_img_t1" class="img_text" style="width:0;opacity:0;"></div>
            </div>
            <div id="p11_ic_2" class="pic_c_row" style="opacity:0;">
                <div id="p11_img_t2" class="img_text" style="width:0;opacity:0;"></div>
                <img id="p11_img_2" class="img_abs" style="height:200px;width:300px;" src="https://s2.loli.net/2024/07/01/xd4F9vLMqecSHbI.webp" />
            </div>
            <div id="p11_ic_3" class="pic_c_row" style="opacity:0;">
                <img id="p11_img_3" class="img_abs" style="height:225px;width:300px;" src="https://s2.loli.net/2024/07/05/OE9bLwWPz5QSoNM.webp" />
                <div id="p11_img_t3" class="img_text" style="width:0;opacity:0;"></div>
            </div>
            <div id="p11_tip" class="btm_tip" style="opacity:0">TIPS:热知识：本页图片文案来自于全宇宙第一畅销游戏Minecraft！<br/>点击空白处继续</div>
        </div>
        `,value:new Map,enter:t=>{o("p11_bg").onclick=()=>{P()},o("p11_img_1").onclick=e=>{var i;e.stopPropagation(),x(((i=o("p11_img_1"))==null?void 0:i.getAttribute("src"))??"")},o("p11_img_2").onclick=e=>{var i;e.stopPropagation(),x(((i=o("p11_img_2"))==null?void 0:i.getAttribute("src"))??"")},o("p11_img_3").onclick=e=>{var i;e.stopPropagation(),x(((i=o("p11_img_3"))==null?void 0:i.getAttribute("src"))??"")},l({targets:"#p11_ic_1",keyframes:[{opacity:1}],duration:500,easing:"easeInQuart"}),l({targets:"#p11_ic_2",keyframes:[{opacity:1}],duration:500,easing:"easeInQuart"}),l({targets:"#p11_ic_3",keyframes:[{opacity:1}],duration:500,easing:"easeInQuart"}),setTimeout(()=>{o("p11_img_t1").innerText="「With Our Powers Combined!」",o("p11_img_t2").innerText="「Feels Like Home」",o("p11_img_t3").innerText="「Sneak 100」",l({targets:"#p11_img_t1",keyframes:[{opacity:1,width:400}],duration:500,easing:"easeInQuart"}),l({targets:"#p11_img_t2",keyframes:[{opacity:1,width:400}],duration:500,easing:"easeInQuart"}),l({targets:"#p11_img_t3",keyframes:[{opacity:1,width:400}],duration:500,easing:"easeInQuart"}),l({targets:"#p11_tip",keyframes:[{opacity:1}],duration:800,easing:"easeInQuart"})},1e3)},leave:t=>{l({targets:"#p11_bg",keyframes:[{opacity:0}],duration:1e3,easing:"easeInQuart"})},delay:1200},{html:`
        <div id="p12_bg" style="height:100%;width:100%;display:flex;justify-content:center;position:relative;">
        <div id="p12_container" style="align-self: center;display: flex;flex-direction: column;align-items: center;transition: all 1s;justify-content: center;height:100%;">
            <div id="p12_t" style="font-size:46px;opacity:0;">时光飞逝，一转眼，便是高三......</div>
        </div>
        </div>
        `,value:new Map,enter:()=>{l({targets:"#p12_t",keyframes:[{opacity:1}],duration:500,easing:"easeInQuart"}),setTimeout(()=>{P()},4e3)},leave:()=>{l({targets:"#p12_bg",keyframes:[{opacity:0}],duration:1e3,easing:"easeInQuart"})},delay:1100},{html:`
        <div id="p13_bg" style="height:100%;width:100%;display:flex;justify-content:center;position:relative;flex-direction: column;align-items: center;">
            <div id="p13_ic_1" class="pic_c_row" style="opacity:0;">
                <img id="p13_img_1" class="img_abs" style="height:225px;width:300px;" src="https://s2.loli.net/2024/07/01/SZKJjycL2AfmV5N.webp" />
                <div id="p13_img_t1" class="img_text" style="width:0;opacity:0;"></div>
            </div>
            <div id="p13_ic_2" class="pic_c_row" style="opacity:0;">
                <div id="p13_img_t2" class="img_text" style="width:0;opacity:0;"></div>
                <img id="p13_img_2" class="img_abs" style="height:225px;width:300px;" src="https://s2.loli.net/2024/07/01/s6JrWGaNYI7uVUx.webp" />
            </div>
            <div id="p13_ic_3" class="pic_c_row" style="opacity:0;">
                <img id="p13_img_3" class="img_abs" style="height:300px;width:225px;" src="https://s2.loli.net/2024/07/01/6lrTM4Fu7EmYqIj.webp" />
                <div id="p13_img_t3" class="img_text" style="width:0;opacity:0;"></div>
            </div>
            <div id="p13_tip" class="btm_tip" style="opacity:0">希望有羽毛和翅膀<br/>点击空白处继续</div>
        </div>
        `,value:new Map,enter:t=>{o("p13_bg").onclick=()=>{P()},o("p13_img_1").onclick=e=>{var i;e.stopPropagation(),x(((i=o("p13_img_1"))==null?void 0:i.getAttribute("src"))??"")},o("p13_img_2").onclick=e=>{var i;e.stopPropagation(),x(((i=o("p13_img_2"))==null?void 0:i.getAttribute("src"))??"")},o("p13_img_3").onclick=e=>{var i;e.stopPropagation(),x(((i=o("p13_img_3"))==null?void 0:i.getAttribute("src"))??"")},l({targets:"#p13_ic_1",keyframes:[{opacity:1}],duration:500,easing:"easeInQuart"}),l({targets:"#p13_ic_2",keyframes:[{opacity:1}],duration:500,easing:"easeInQuart"}),l({targets:"#p13_ic_3",keyframes:[{opacity:1}],duration:500,easing:"easeInQuart"}),setTimeout(()=>{o("p13_img_t1").innerText="「天空与你之间」",o("p13_img_t2").innerText="「胜利，然后是再见」",o("p13_img_t3").innerText="「结束，然后是开始」",l({targets:"#p13_img_t1",keyframes:[{opacity:1,width:300}],duration:500,easing:"easeInQuart"}),l({targets:"#p13_img_t2",keyframes:[{opacity:1,width:300}],duration:500,easing:"easeInQuart"}),l({targets:"#p13_img_t3",keyframes:[{opacity:1,width:300}],duration:500,easing:"easeInQuart"}),l({targets:"#p13_tip",keyframes:[{opacity:1}],duration:800,easing:"easeInQuart"})},1e3)},leave:t=>{l({targets:"#p13_bg",keyframes:[{opacity:0}],duration:1e3,easing:"easeInQuart"})},delay:1200},{html:`
        <div id="p14_bg" style="height:100%;width:100%;display:flex;justify-content:center;position:relative;">
        <div id="p14_container" style="align-self: center;display: flex;flex-direction: column;justify-content:center;align-items: center;height:100%;">
            <div id="p14_t" style="font-size:46px;opacity:0;"></div>
        </div>
        </div>
        `,value:new Map,enter:()=>{N?o("p14_t").innerText=`${M.substring(0,1)}老师，理3毕业了......`:o("p14_t").innerText="我们，毕业了......",l({targets:"#p14_t",keyframes:[{opacity:1}],duration:500,easing:"easeInQuart"});let t="";N?q.get(M).nick.length>0?t=`您还记得同学们亲切的叫您「${q.get(M).nick[0]}」吗？`:t="您还记得同学们听您课的样子吗？":O.get(M).cp!=null?t=`你还记得那个TA吗？是${O.get(M).cp.substring(0,1)}...？`:t="你还记得你那些朋友吗？",setTimeout(()=>{l({targets:"#p14_t",keyframes:[{opacity:0}],duration:500,easing:"easeInQuart"})},4e3),setTimeout(()=>{o("p14_t").innerText=t,l({targets:"#p14_t",keyframes:[{opacity:1}],duration:500,easing:"easeInQuart"})},5e3),setTimeout(()=>{l({targets:"#p14_t",keyframes:[{opacity:0}],duration:500,easing:"easeInQuart"})},9e3),setTimeout(()=>{o("p14_t").innerText="这三年已然结束，然后是新的「开始」",l({targets:"#p14_t",keyframes:[{opacity:1}],duration:500,easing:"easeInQuart"})},1e4),setTimeout(()=>{l({targets:"#p14_t",keyframes:[{opacity:0}],duration:500,easing:"easeInQuart"})},14e3),setTimeout(()=>{o("p14_t").innerText="或许并不完美，但我们各自走在未来的路上",l({targets:"#p14_t",keyframes:[{opacity:1}],duration:500,easing:"easeInQuart"})},15e3),setTimeout(()=>{l({targets:"#p14_t",keyframes:[{opacity:0}],duration:500,easing:"easeInQuart"})},19e3),setTimeout(()=>{P()},19e3)},leave:()=>{l({targets:"#p14_bg",keyframes:[{opacity:0}],duration:1e3,easing:"easeInQuart"})},delay:1100},{html:`
        <div id="p15_bg" style="height:100%;width:100%;display:flex;position:relative;opacity: 0;">
        <audio autoplay loop src="https://sharefs.tx.kugou.com/202407061710/0a121b5a5a520c1733d9977fb9828bd3/v3/76babb57ab736a8922e14b663da6f356/yp/full/a1000_u0_p409_s2456353169.mp3"></audio>
        <div id="p15_container" style="align-self: center;display: flex;flex-direction: column;align-items: center;height:100%;width:100%;overflow: hidden;">
            <img src="https://s2.loli.net/2024/07/01/rOtmZBeHb5xc8fp.webp"/>
            <img src="https://s2.loli.net/2024/07/01/uzOiYHr5DTg8F6P.webp"/>
            <img src="https://s2.loli.net/2024/07/01/C6qJwyFbHQEWA4T.webp"/>
            <img src="https://s2.loli.net/2024/07/01/8agkqEVcdmNBiKp.webp"/>
            <img src="https://s2.loli.net/2024/07/01/VBWYafMJEQ21T7z.webp"/>
            <img src="https://s2.loli.net/2024/07/01/y3hXsxU7YNW4Jlt.webp"/>
            <img src="https://s2.loli.net/2024/07/01/SC7G1HTRJXIOndr.webp"/>
            <img src="https://s2.loli.net/2024/07/05/RyKYnE51mTsgFaL.webp"/>
            <img src="https://s2.loli.net/2024/07/01/PXEymsdaDJVktCo.webp"/>
            <img src="https://s2.loli.net/2024/07/01/nSZYv48pOAEhNR5.webp"/>
            <img src="https://s2.loli.net/2024/07/01/lty3KAwWjisQXzd.webp"/>
            <img src="https://s2.loli.net/2024/07/01/I8aQWdRTb9GUXJM.webp"/>
            <img src="https://s2.loli.net/2024/07/01/QL8s1N5E7vtbjrB.webp"/>
            <img src="https://s2.loli.net/2024/07/01/Wlrgi5yUkmFHhZV.webp"/>
            <img src="https://s2.loli.net/2024/07/01/asLnWUpCc62izkg.webp"/>
            <img src="https://s2.loli.net/2024/07/01/yvX37qBT6wiP24k.webp"/>
            <img src="https://s2.loli.net/2024/07/01/2RokKQw17UiYdam.webp"/>
            <img src="https://s2.loli.net/2024/07/01/nLeYi5mSZE73gaq.webp"/>
            <img src="https://s2.loli.net/2024/07/01/PzlJN9M6ub8ioFG.webp"/>
            <img src="https://s2.loli.net/2024/07/01/sZgcomE72wzfGCT.webp"/>
            <img src="https://s2.loli.net/2024/07/01/jLMxzkZFB46eWoC.webp"/>
            <img src="https://s2.loli.net/2024/07/01/hukLYWO3QaPFUzq.webp"/>
            <img src="https://s2.loli.net/2024/07/01/x3ufsk1c6SYwgbP.webp"/>
            <img src="https://s2.loli.net/2024/07/01/xd4F9vLMqecSHbI.webp"/>
            <img src="https://s2.loli.net/2024/07/01/EJq2wuKRrD8seNk.webp"/>
            <img src="https://s2.loli.net/2024/07/01/NFCkxvJqQA8Ijnz.webp"/>
            <img src="https://s2.loli.net/2024/07/01/EaifgKDRHwlPh8k.webp"/>
            <img src="https://s2.loli.net/2024/07/01/UVABDHOx2CSneX1.webp"/>
            <img src="https://s2.loli.net/2024/07/01/cmosQTdPpjRZU7B.webp"/>
            <img src="https://s2.loli.net/2024/07/01/4X2wAq3Pf7KBLsa.webp"/>
            <img src="https://s2.loli.net/2024/07/01/YJfRuUzxpQSkBn7.webp"/>
            <img src="https://s2.loli.net/2024/07/01/zZoFS5wlcxCN8UH.webp"/>
            <img src="https://s2.loli.net/2024/07/01/RxryVSjebPT1Ftg.webp"/>
            <img src="https://s2.loli.net/2024/07/01/4luatsRNkxFYwSO.webp"/>
            <img src="https://s2.loli.net/2024/07/01/2eDRmYsZg7vEMXl.webp"/>
            <img src="https://s2.loli.net/2024/07/01/EioUQv1qPspy6aw.webp"/>
            <img src="https://s2.loli.net/2024/07/01/BELOGv3phrwPlc1.webp"/>
            <img src="https://s2.loli.net/2024/07/01/hJ9ZXo2zB3pIfOk.webp"/>
            <img src="https://s2.loli.net/2024/07/01/yidJ2Ta4LAheIr6.webp"/>
            <img src="https://s2.loli.net/2024/07/01/4PC3A7xJj9tvild.webp"/>
            <img src="https://s2.loli.net/2024/07/01/Zo7LPdbuWkypc52.webp"/>
            <img src="https://s2.loli.net/2024/07/01/ifehkBQT6djzSO4.webp"/>
            <img src="https://s2.loli.net/2024/07/01/udNbn8IpTXBMA9Y.webp"/>
            <img src="https://s2.loli.net/2024/07/01/eUGx13RHAMBbVfE.webp"/>
            <img src="https://s2.loli.net/2024/07/01/tfcEIymYnLN6BV8.webp"/>
            <img src="https://s2.loli.net/2024/07/01/yviapJcI97w8SLH.webp"/>
            <img src="https://s2.loli.net/2024/07/01/Z8tiB1gRvcEzSkA.webp"/>
            <img src="https://s2.loli.net/2024/07/01/q1csXIK4zr5jLGw.webp"/>
            <img src="https://s2.loli.net/2024/07/01/oYKryV1ZSGHBLXu.webp"/>
            <img src="https://s2.loli.net/2024/07/01/P3BksJRLYUGrmEK.webp"/>
            <img src="https://s2.loli.net/2024/07/01/kvYx5qL7Z8npujs.webp"/>
            <img src="https://s2.loli.net/2024/07/01/js6hz7EU4XkA8e9.webp"/>
            <img src="https://s2.loli.net/2024/07/01/kEMWOi1UgTpwyKv.webp"/>
            <img src="https://s2.loli.net/2024/07/01/RKAaQ6WhNeoC8rF.webp"/>
            <img src="https://s2.loli.net/2024/07/01/S5GZE7wqN9ycbQU.webp"/>
            <img src="https://s2.loli.net/2024/07/01/PAyJ7xtfZbBkQRi.webp"/>
            <img src="https://s2.loli.net/2024/07/01/LH5WzUsZK6wC8X9.webp"/>
            <img src="https://s2.loli.net/2024/07/01/Q7PxodlA3SsuGyb.webp"/>
            <img src="https://s2.loli.net/2024/07/01/CuaELFYKOX46rPB.webp"/>
            <img src="https://s2.loli.net/2024/07/01/ZR7mlEOiHUAMjbS.webp"/>
            <img src="https://s2.loli.net/2024/07/01/OLEWfgBKTVtUCzN.webp"/>
            <img src="https://s2.loli.net/2024/07/01/lDa5cAn3zZXIqj4.webp"/>
            <img src="https://s2.loli.net/2024/07/01/jGIqSro73Ct6QXB.webp"/>
            <img src="https://s2.loli.net/2024/07/01/efTcwJmRrlN4916.webp"/>
            <img src="https://s2.loli.net/2024/07/01/bN5S4IjXKUwq3WY.webp"/>
            <img src="https://s2.loli.net/2024/07/01/jwGbmhyEg2xaKHs.webp"/>
            <img src="https://s2.loli.net/2024/07/01/iAeJuzyBqnjo6bK.webp"/>
            <img src="https://s2.loli.net/2024/07/01/4MhFGa253CsuXe9.webp"/>
            <img src="https://s2.loli.net/2024/07/01/4b8anmdEH79GCUS.webp"/>
            <img src="https://s2.loli.net/2024/07/01/972BAUyZLOMeCsa.webp"/>
            <img src="https://s2.loli.net/2024/07/01/hAcvREobO5eumKJ.webp"/>
            <img src="https://s2.loli.net/2024/07/01/LQJMKlgO2bqukoa.webp"/>
            <img src="https://s2.loli.net/2024/07/01/vIgFOkU8jTMNGpc.webp"/>
            <img src="https://s2.loli.net/2024/07/01/xEhu5fd1Ys349eg.webp"/>
            <img src="https://s2.loli.net/2024/07/01/1ALSc8xtfNqlQ24.webp"/>
            <img src="https://s2.loli.net/2024/07/01/LTQDGWEa7OKNbYl.webp"/>
            <img src="https://s2.loli.net/2024/07/01/glu3MWvbDLnNFok.webp"/>
            <img src="https://s2.loli.net/2024/07/01/esyUJOHgMjKCW49.webp"/>
            <img src="https://s2.loli.net/2024/07/01/6Nw4PDRt8mXIixs.webp"/>
            <img src="https://s2.loli.net/2024/07/01/BTlb9OPe6SqaU1f.webp"/>
            <img src="https://s2.loli.net/2024/07/01/5dOUF3axXZW6YTt.webp"/>
            <img src="https://s2.loli.net/2024/07/01/FXKoWbV3dMRGfE5.webp"/>
            <img src="https://s2.loli.net/2024/07/01/oX6uqVI8GWDkFMA.webp"/>
            <img src="https://s2.loli.net/2024/07/01/wfVevMlnLxWk4Fz.webp"/>
            <img src="https://s2.loli.net/2024/07/01/9zF5qcoYdpsnL8S.webp"/>
            <img src="https://s2.loli.net/2024/07/01/LvXRKN254QthjdC.webp"/>
            <img src="https://s2.loli.net/2024/07/01/GrjF1muhwoiPed6.webp"/>
            <img src="https://s2.loli.net/2024/07/01/WpVAk3Z6QM9lwbL.webp"/>
            <img src="https://s2.loli.net/2024/07/01/DBhljCpZqTbXcw1.webp"/>
            <img src="https://s2.loli.net/2024/07/01/RmPeINZg2rVYafs.webp"/>
            <img src="https://s2.loli.net/2024/07/01/QOA6k3jrR4ebKPC.webp"/>
            <img src="https://s2.loli.net/2024/07/01/Gw5tJVujHfZnUbd.webp"/>
            <img src="https://s2.loli.net/2024/07/01/LJD6tuTg9QoqEvk.webp"/>
            <img src="https://s2.loli.net/2024/07/01/iuQ9NMS2v4mwhZP.webp"/>
            <img src="https://s2.loli.net/2024/07/01/adxs3O9GztwfhTq.webp"/>
            <img src="https://s2.loli.net/2024/07/01/BqDhYGkpIu3VUQN.webp"/>
            <img src="https://s2.loli.net/2024/07/01/Ep72MRU4YyVufPm.webp"/>
            <img src="https://s2.loli.net/2024/07/01/L1IpaWHXRnjk6Pc.webp"/>
            <img src="https://s2.loli.net/2024/07/01/1VY9A6DnNGlBFce.webp"/>
            <img src="https://s2.loli.net/2024/07/01/PxtYs8OwudCh7n9.webp"/>
            <img src="https://s2.loli.net/2024/07/01/HRuQazy5MqY7rdC.webp"/>
            <img src="https://s2.loli.net/2024/07/01/JvBAYKQ9zbeuNoc.webp"/>
            <img src="https://s2.loli.net/2024/07/01/uBDmwFNbpLJItnj.webp"/>
            <img src="https://s2.loli.net/2024/07/01/bhQzYP3e2tMXwJ8.webp"/>
            <img src="https://s2.loli.net/2024/07/01/QZUCBNowcWSEKr9.webp"/>
            <img src="https://s2.loli.net/2024/07/01/AzMRDSXJLZh2rsc.webp"/>
            <img src="https://s2.loli.net/2024/07/01/ZSa83coLzD7eg4B.webp"/>
            <img src="https://s2.loli.net/2024/07/01/B2jf5MtkcZmwapY.webp"/>
            <img src="https://s2.loli.net/2024/07/01/kWnLgZfVaerDQRN.webp"/>
            <img src="https://s2.loli.net/2024/07/01/AIRryCFMLaZVTXi.webp"/>
            <img src="https://s2.loli.net/2024/07/01/eRQ3sb9aylO1z5w.webp"/>
            <img src="https://s2.loli.net/2024/07/01/JKVIOqYyBnxjNWC.webp"/>
            <img src="https://s2.loli.net/2024/07/01/cWoqZ4iSLVKy1Fn.webp"/>
            <img src="https://s2.loli.net/2024/07/01/3wbUJNkFsAxnqQd.webp"/>
            <img src="https://s2.loli.net/2024/07/01/6lrTM4Fu7EmYqIj.webp"/>
            <img src="https://s2.loli.net/2024/07/01/lzQbUFmHSK8x31M.webp"/>
            <img src="https://s2.loli.net/2024/07/01/1iHTEsnS3ZDkrQM.webp"/>
            <img src="https://s2.loli.net/2024/07/01/yGM7CfJYDIe3ihQ.webp"/>
            <img src="https://s2.loli.net/2024/07/01/2foBbFvgP4YKeCG.webp"/>
            <img src="https://s2.loli.net/2024/07/01/jEzvQrFkBHlIKnV.webp"/>
            <img src="https://s2.loli.net/2024/07/01/S2q56Njz79HPbdg.webp"/>
            <img src="https://s2.loli.net/2024/07/01/NAY4Qq9CPoifd7X.webp"/>
            <img src="https://s2.loli.net/2024/07/01/OrL6e8wmcqZxotX.webp"/>
            <img src="https://s2.loli.net/2024/07/01/VWTG8xb7rQgUp54.webp"/>
            <img src="https://s2.loli.net/2024/07/01/eTW1I9R2j4nYoXQ.webp"/>
            <img src="https://s2.loli.net/2024/07/01/TGevdbmFc8itKsJ.webp"/>
            <img src="https://s2.loli.net/2024/07/01/FGVToXskwBN9cJe.webp"/>
            <img src="https://s2.loli.net/2024/07/01/FuJNzEn7xUlLd4f.webp"/>
            <img src="https://s2.loli.net/2024/07/01/rOQoYbR3wsLHvjh.webp"/>
            <img src="https://s2.loli.net/2024/07/01/sSiWok8jqpNA3vh.webp"/>
            <img src="https://s2.loli.net/2024/07/01/nu4Y29EVzaA3x8h.webp"/>
            <img src="https://s2.loli.net/2024/07/01/OVFNP7n4L2zZmoW.webp"/>
            <img src="https://s2.loli.net/2024/07/01/SaIRCDUP418YLpN.webp"/>
            <img src="https://s2.loli.net/2024/07/01/wRZun9A8SVCdj7q.webp"/>
            <img src="https://s2.loli.net/2024/07/01/5Nqwox4vfOIsDLu.webp"/>
            <img src="https://s2.loli.net/2024/07/01/q4FBVGJ8wLQUr9i.webp"/>
            <img src="https://s2.loli.net/2024/07/01/cuWjBeZmLafJY7g.webp"/>
            <img src="https://s2.loli.net/2024/07/01/iVSZ7zMu4BIGxg1.webp"/>
            <img src="https://s2.loli.net/2024/07/01/fFc8CXiDYsbtpjH.webp"/>
            <img src="https://s2.loli.net/2024/07/01/oMPUYxkBT6CX4yh.webp"/>
            <img src="https://s2.loli.net/2024/07/01/PsLDGebgc6UzMd3.webp"/>
            <img src="https://s2.loli.net/2024/07/01/dEvfcbGFqYPDiU6.webp"/>
            <img src="https://s2.loli.net/2024/07/01/KLJAPliCorBVOvb.webp"/>
            <img src="https://s2.loli.net/2024/07/01/QtHyxPBhdwMGfie.webp"/>
            <img src="https://s2.loli.net/2024/07/01/A1rZNg6fmPlEn45.webp"/>
            <img src="https://s2.loli.net/2024/07/01/dhSiVqlfZtvAJ1T.webp"/>
            <img src="https://s2.loli.net/2024/07/01/fKXGcpPTHSFgdVj.webp"/>
            <img src="https://s2.loli.net/2024/07/01/UsqkYViQujZ5A8C.webp"/>
            <img src="https://s2.loli.net/2024/07/01/W7kMgaGHAnIUdtO.webp"/>
            <img src="https://s2.loli.net/2024/07/01/YzOaIu6EUQlgJwL.webp"/>
            <img src="https://s2.loli.net/2024/07/01/Detz9pi5Gc82Xgk.webp"/>
            <img src="https://s2.loli.net/2024/07/01/wRYhaDeUHb7TtX1.webp"/>
            <img src="https://s2.loli.net/2024/07/01/uUcWOP4TvjrAilm.webp"/>
            <img src="https://s2.loli.net/2024/07/01/I4rcpgbOXme69hH.webp"/>
            <img src="https://s2.loli.net/2024/07/01/SZKJjycL2AfmV5N.webp"/>
            <img src="https://s2.loli.net/2024/07/01/KB5gEOxYJNvycro.webp"/>
            <img src="https://s2.loli.net/2024/07/01/s6JrWGaNYI7uVUx.webp"/>
            <img src="https://s2.loli.net/2024/07/05/VUPoFHueRbJzSiY.webp"/>
            <img src="https://s2.loli.net/2024/07/05/NeB4QfEoJ8SmjxD.webp"/>
            <img src="https://s2.loli.net/2024/07/05/qeMHb764uPXQvkB.webp"/>
            <img src="https://s2.loli.net/2024/07/05/csQaZdSruCABUxT.webp"/>
            <img src="https://s2.loli.net/2024/07/05/TMWc59GxZvDQVOL.webp"/>
            <img src="https://s2.loli.net/2024/07/05/hkQWcxT4ZJqfwbK.webp"/>
            <img src="https://s2.loli.net/2024/07/05/xWGK3wOZQm1rEjH.webp"/>
            <img src="https://s2.loli.net/2024/07/05/hY2bFgIJNQkvwmK.webp"/>
            <img src="https://s2.loli.net/2024/07/05/N9Zn57QPdRzWhCo.webp"/>
            <img src="https://s2.loli.net/2024/07/05/QtHYiUmA9DLeG1x.webp"/>
            <img src="https://s2.loli.net/2024/07/05/OE9bLwWPz5QSoNM.webp"/>
            <img src="https://s2.loli.net/2024/07/01/tNCB1PeOWZfXuy7.webp"/>
            <img src="https://s2.loli.net/2024/07/01/POzRcx76NoeflV5.webp"/>
            <img src="https://s2.loli.net/2024/07/01/zXEs8fR4ougnPd7.webp"/>
            <img src="https://s2.loli.net/2024/07/01/pnyIx57kGUFsHV6.webp"/>
            <img src="https://s2.loli.net/2024/07/01/7dB9nPb41AI2OEM.webp"/>
            <img src="https://s2.loli.net/2024/07/01/2MGKOdIWNYVRl6D.webp"/>
            <img src="https://s2.loli.net/2024/07/01/wOiEpLoTMyCGYdH.webp"/>
            <img src="https://s2.loli.net/2024/07/01/Mcr3oPHElZgyW4A.webp"/>
            <img src="https://s2.loli.net/2024/07/01/kv9oVKrNLnhPzjJ.webp"/>
            <img src="https://s2.loli.net/2024/07/01/y3I2GX8YPc9HCFb.webp"/>
            <img src="https://s2.loli.net/2024/07/01/nvHrdhXi14x7mjJ.webp"/>
            <img src="https://s2.loli.net/2024/07/01/cos5EN4KvFVHRxw.webp"/>
            <img src="https://s2.loli.net/2024/07/01/4Azcfah5Xjm9PWR.webp"/>

            <div class="p15_st">照片/PHOTOS</div>
            <div class="btm_tip">排名不分先后</div>
            <div class="p15_sc">邓淅元</div>
            <div class="p15_sc">和茂昀</div>
            <div class="p15_sc">孙玉环</div>
            <div class="p15_sc">范星星老师</div>
            <div class="p15_sc">谷正花老师</div>
            <div class="p15_sc">杨怡涵老师</div>
            <div class="p15_sc">高2024届理3全体同学</div>
            <div class="btm_tip">有更多同学提供了照片，未能列全深表歉意</div>
            <div style="padding:16px;"></div>
            <div class="p15_st">开发/DEVELOPER</div>
            <div class="p15_sc">段昊宇</div>
            <div style="padding:16px;"></div>
            <div class="p15_st">献给高2024届理3全体同学</div>
            <div style="padding:32px;"></div>
        </div>
        </div>
        `,value:new Map,enter:()=>{var s;let t=(s=o("p15_container"))==null?void 0:s.getElementsByTagName("img"),e=setInterval(()=>{let n=0;for(let a of t)a.complete&&n++;n>=30&&(clearInterval(e),i())},200);function i(){l({targets:"#p15_bg",keyframes:[{opacity:1}],duration:500,easing:"easeInQuart"}),setTimeout(()=>{o("p15_container").scrollTop=0;let n=setInterval(()=>{if(o("p15_container").scrollTop>=5e3&&o("p15_container").scrollTop>=o("p15_container").scrollHeight-window.innerHeight){console.log(o("p15_container").scrollHeight),clearInterval(n),setTimeout(()=>{P()},6e3);return}o("p15_container").scrollTop+=4},15)},3e3)}},leave:()=>{l({targets:"#p15_bg",keyframes:[{opacity:0}],duration:1e3,easing:"easeInQuart"})},delay:1e3},{html:`
        <div id="p16_bg" style="height:100%;width:100%;display:flex;justify-content:center;position:relative;">
        <div id="p16_container" style="align-self: center;display: flex;flex-direction: column;align-items: center;transition: all 1s;justify-content: center;height:100%;">
            <div id="p14_t" style="font-size:46px;"><a id="p16_a1" style="color:#ff4e00;opacity:0;">敬</a>&emsp;<a id="p16_a2" style="opacity:0;">不完美的明天</a></div>
        </div>
        </div>
        `,value:new Map,enter:()=>{l({targets:"#p16_a1",keyframes:[{opacity:1}],duration:1e3,easing:"easeInQuart"}),setTimeout(()=>{l({targets:"#p16_a2",keyframes:[{opacity:1}],duration:1e3,easing:"easeInQuart"})},3e3)},leave:()=>{},delay:0}];function Zt(t){o("main").innerHTML=t}function P(){B[A].leave(B[A].value),setTimeout(()=>{A++,Zt(B[A].html),B[A].enter(B[A].value),Ae(M,A)},B[A].delay)}function At(){Zt(B[A].html),B[A].enter(B[A].value)}o("imgview_con").onclick=t=>{t.stopPropagation(),o("imgview_con").style.display="none"};l({targets:"#imgview_tip",keyframes:[{opacity:.3},{opacity:1}],loop:!0,duration:3200,easing:"linear"});var ot=navigator.connection??{type:"wifi"};ot=ot.type??"wifi";ot!="wifi"?lt("当前正在使用移动数据","本网页需要加载数据(约50MB)，当前正在使用移动数据，可能会产生额外费用。",[{content:"继续使用",color:"#ff6464",click:(t,e)=>{Z(t),At()}},{content:"关闭页面",color:"#3d3d3f",click:(t,e)=>{Z(t),Ee()}}]):At();
