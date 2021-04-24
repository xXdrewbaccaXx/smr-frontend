import{S as e,i as t,s as r,A as a,J as n,c as o,a as i,d as s,K as l,f as c,p as d,C as h,L as f,e as u,t as g,k as m,j as p,g as v,n as b,m as w,b as y,M as k,F as x,o as $,h as E,v as M,r as N,w as S,N as A,B as I,u as _,O as D,P as V,Q as P,l as C,R as F}from"../chunks/index-ec5ec844.js";import{a as L}from"../chunks/paths-6eb0a1f3.js";import{z as j,A as O}from"../chunks/urql-svelte-f29a483a.js";var H={body:'<path d="M13 14h-2V9h2m0 9h-2v-2h2M1 21h22L12 2L1 21z" fill="currentColor"/>',width:24,height:24};function T(e){var t={exports:{}};return e(t,t.exports),t.exports}var z=T((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.merge=void 0,t.merge=function(e,t,r){const a=Object.create(null),n=[e,t,r];for(let o=0;o<3;o++){const e=n[o];if("object"==typeof e&&e)for(const t in e)a[t]=e[t]}return a}})),R=T((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.fullCustomisations=t.defaults=void 0,t.defaults=Object.freeze({inline:!1,width:null,height:null,hAlign:"center",vAlign:"middle",slice:!1,hFlip:!1,vFlip:!1,rotate:0}),t.fullCustomisations=function(e){return z.merge(t.defaults,e)}})),W=T((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.alignmentFromString=t.flipFromString=void 0;const r=/[\s,]+/;t.flipFromString=function(e,t){t.split(r).forEach((t=>{switch(t.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0}}))},t.alignmentFromString=function(e,t){t.split(r).forEach((t=>{const r=t.trim();switch(r){case"left":case"center":case"right":e.hAlign=r;break;case"top":case"middle":case"bottom":e.vAlign=r;break;case"slice":case"crop":e.slice=!0;break;case"meet":e.slice=!1}}))}})),q=T((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.rotateFromString=void 0,t.rotateFromString=function(e){const t=e.replace(/^-?[0-9.]*/,"");function r(e){for(;e<0;)e+=4;return e%4}if(""===t){const t=parseInt(e);return isNaN(t)?0:r(t)}if(t!==e){let a=0;switch(t){case"%":a=25;break;case"deg":a=90}if(a){let n=parseFloat(e.slice(0,e.length-t.length));return isNaN(n)?0:(n/=a,n%1==0?r(n):0)}}return 0}})),B=T((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.fullIcon=t.iconDefaults=void 0,t.iconDefaults=Object.freeze({body:"",left:0,top:0,width:16,height:16,rotate:0,vFlip:!1,hFlip:!1}),t.fullIcon=function(e){return z.merge(t.iconDefaults,e)}})),U=T((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.calculateSize=void 0;const r=/(-?[0-9.]*[0-9]+[0-9.]*)/g,a=/^-?[0-9.]*[0-9]+[0-9.]*$/g;t.calculateSize=function(e,t,n){if(1===t)return e;if(n=void 0===n?100:n,"number"==typeof e)return Math.ceil(e*t*n)/n;if("string"!=typeof e)return e;const o=e.split(r);if(null===o||!o.length)return e;const i=[];let s=o.shift(),l=a.test(s);for(;;){if(l){const e=parseFloat(s);isNaN(e)?i.push(s):i.push(Math.ceil(e*t*n)/n)}else i.push(s);if(s=o.shift(),void 0===s)return i.join("");l=!l}}})),G=T((function(e,t){function r(e){let t="";switch(e.hAlign){case"left":t+="xMin";break;case"right":t+="xMax";break;default:t+="xMid"}switch(e.vAlign){case"top":t+="YMin";break;case"bottom":t+="YMax";break;default:t+="YMid"}return t+=e.slice?" slice":" meet",t}Object.defineProperty(t,"__esModule",{value:!0}),t.iconToSVG=void 0,t.iconToSVG=function(e,t){const a={left:e.left,top:e.top,width:e.width,height:e.height},n=[],o=t.hFlip!==e.hFlip,i=t.vFlip!==e.vFlip;let s,l,c,d=t.rotate+e.rotate;switch(o?i?d+=2:(n.push("translate("+(a.width+a.left)+" "+(0-a.top)+")"),n.push("scale(-1 1)"),a.top=a.left=0):i&&(n.push("translate("+(0-a.left)+" "+(a.height+a.top)+")"),n.push("scale(1 -1)"),a.top=a.left=0),d%=4,d){case 1:s=a.height/2+a.top,n.unshift("rotate(90 "+s+" "+s+")");break;case 2:n.unshift("rotate(180 "+(a.width/2+a.left)+" "+(a.height/2+a.top)+")");break;case 3:s=a.width/2+a.left,n.unshift("rotate(-90 "+s+" "+s+")")}d%2==1&&(0===a.left&&0===a.top||(s=a.left,a.left=a.top,a.top=s),a.width!==a.height&&(s=a.width,a.width=a.height,a.height=s)),null===t.width&&null===t.height?(c="1em",l=U.calculateSize(c,a.width/a.height)):null!==t.width&&null!==t.height?(l=t.width,c=t.height):null!==t.height?(c=t.height,l=U.calculateSize(c,a.width/a.height)):(l=t.width,c=U.calculateSize(l,a.height/a.width)),"auto"===l&&(l=a.width),"auto"===c&&(c=a.height),l="string"==typeof l?l:l+"",c="string"==typeof c?c:c+"";let h=e.body;n.length&&(h='<g transform="'+n.join(" ")+'">'+h+"</g>");const f={attributes:{width:l,height:c,preserveAspectRatio:r(t),viewBox:a.left+" "+a.top+" "+a.width+" "+a.height},body:h};return t.inline&&(f.inline=!0),f}})),Y=T((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.replaceIDs=void 0;const r=/\sid="(\S+)"/g,a="IconifyId-"+Date.now().toString(16)+"-"+(16777216*Math.random()|0).toString(16)+"-";let n=0;function o(e,t,r){let a=0;for(;-1!==(a=r.indexOf(e,a));)r=r.slice(0,a)+t+r.slice(a+e.length),a+=t.length;return r}t.replaceIDs=function(e,t=a){const i=[];let s;for(;s=r.exec(e);)i.push(s[1]);return i.length?(i.forEach((r=>{const a="function"==typeof t?t():t+n++;e=o('="'+r+'"','="'+a+'"',e),e=o('="#'+r+'"','="#'+a+'"',e),e=o("(#"+r+")","(#"+a+")",e)})),e):e}}));const X={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"};function J(e){let t,r=e[0].body+"",f=[e[0].attributes],u={};for(let n=0;n<f.length;n+=1)u=a(u,f[n]);return{c(){t=n("svg"),this.h()},l(e){t=o(e,"svg",{},1),i(t).forEach(s),this.h()},h(){l(t,u)},m(e,a){c(e,t,a),t.innerHTML=r},p(e,[a]){1&a&&r!==(r=e[0].body+"")&&(t.innerHTML=r),l(t,u=d(f,[1&a&&e[0].attributes]))},i:h,o:h,d(e){e&&s(t)}}}function K(e,t,r){let n;return e.$$set=e=>{r(1,t=a(a({},t),f(e)))},e.$$.update=()=>{r(0,n=function(e){let t=B.fullIcon(e.icon);if(!t)return{attributes:X,body:""};const r=z.merge(R.defaults,e),a=z.merge(X);let n="string"==typeof e.style?e.style:"";for(let l in e){const t=e[l];switch(l){case"icon":case"style":break;case"flip":W.flipFromString(r,t);break;case"align":W.alignmentFromString(r,t);break;case"color":n="color: "+t+"; "+n;break;case"rotate":"number"!=typeof t?r[l]=q.rotateFromString(t):a[l]=t;break;case"ariaHidden":case"aria-hidden":!0!==t&&"true"!==t&&delete a["aria-hidden"];break;default:void 0===R.defaults[l]&&(a[l]=t)}}const o=G.iconToSVG(t,r);for(let l in o.attributes)a[l]=o.attributes[l];o.inline&&(n="vertical-align: -0.125em; "+n),""!==n&&(a.style=n);let i=0;const s=e.id;return{attributes:a,body:Y.replaceIDs(o.body,s?()=>s+"-"+i++:"iconify-svelte-")}}(t))},t=f(t),[n]}class Q extends e{constructor(e){super(),t(this,e,K,J,r,{})}}var Z={body:'<path d="M5 20h14v-2H5m14-9h-4V3H9v6H5l7 7l7-7z" fill="currentColor"/>',width:24,height:24},ee={body:'<path d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z" fill="currentColor"/>',width:24,height:24},te={body:'<path d="M14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7z" fill="currentColor"/>',width:24,height:24};
/*! Fast Average Color | © 2021 Denis Seleznev | MIT License | https://github.com/fast-average-color/fast-average-color */
function re(e){const t=e.toString(16);return 1===t.length?"0"+t:t}function ae(e){return"#"+e.map(re).join("")}function ne(e,t,r){for(let a=0;a<r.length;a++)if(oe(e,t,r[a]))return!0;return!1}function oe(e,t,r){switch(r.length){case 3:if(function(e,t,r){if(255!==e[t+3])return!0;if(e[t]===r[0]&&e[t+1]===r[1]&&e[t+2]===r[2])return!0;return!1}(e,t,r))return!0;break;case 4:if(function(e,t,r){if(e[t+3]&&r[3])return e[t]===r[0]&&e[t+1]===r[1]&&e[t+2]===r[2]&&e[t+3]===r[3];return e[t+3]===r[3]}(e,t,r))return!0;break;case 5:if(function(e,t,r){const a=r[0],n=r[1],o=r[2],i=r[3],s=r[4],l=e[t+3],c=ie(l,i,s);if(!i)return c;if(!l&&c)return!0;if(ie(e[t],a,s)&&ie(e[t+1],n,s)&&ie(e[t+2],o,s)&&c)return!0;return!1}(e,t,r))return!0;break;default:return!1}}function ie(e,t,r){return e>=t-r&&e<=t+r}function se(e,t,r){const a={},n=r.ignoredColor,o=r.step;let i=[0,0,0,0,0];for(let f=0;f<t;f+=o){const t=e[f],r=e[f+1],o=e[f+2],s=e[f+3];if(n&&ne(e,f,n))continue;const l=Math.round(t/24)+","+Math.round(r/24)+","+Math.round(o/24);a[l]?a[l]=[a[l][0]+t*s,a[l][1]+r*s,a[l][2]+o*s,a[l][3]+s,a[l][4]+1]:a[l]=[t*s,r*s,o*s,s,1],i[4]<a[l][4]&&(i=a[l])}const s=i[0],l=i[1],c=i[2],d=i[3],h=i[4];return d?[Math.round(s/d),Math.round(l/d),Math.round(c/d),Math.round(d/h)]:r.defaultColor}function le(e,t,r){let a=0,n=0,o=0,i=0,s=0;const l=r.ignoredColor,c=r.step;for(let d=0;d<t;d+=c){const t=e[d+3],r=e[d]*t,c=e[d+1]*t,h=e[d+2]*t;l&&ne(e,d,l)||(a+=r,n+=c,o+=h,i+=t,s++)}return i?[Math.round(a/i),Math.round(n/i),Math.round(o/i),Math.round(i/s)]:r.defaultColor}function ce(e,t,r){let a=0,n=0,o=0,i=0,s=0;const l=r.ignoredColor,c=r.step;for(let d=0;d<t;d+=c){const t=e[d],r=e[d+1],c=e[d+2],h=e[d+3];l&&ne(e,d,l)||(a+=t*t*h,n+=r*r*h,o+=c*c*h,i+=h,s++)}return i?[Math.round(Math.sqrt(a/i)),Math.round(Math.sqrt(n/i)),Math.round(Math.sqrt(o/i)),Math.round(i/s)]:r.defaultColor}function de(e){return he(e,"defaultColor",[0,0,0,0])}function he(e,t,r){return void 0===e[t]?r:e[t]}function fe(e,t,r){e.silent||(console.error("FastAverageColor: "+t),r&&console.error(r))}function ue(e){return Error("FastAverageColor: "+e)}class ge{getColorAsync(e,t){if(!e)return Promise.reject(ue("call .getColorAsync() without resource."));if("string"==typeof e){const r=new Image;return r.crossOrigin="",r.src=e,this._bindImageEvents(r,t)}if(e instanceof Image&&!e.complete)return this._bindImageEvents(e,t);{const r=this.getColor(e,t);return r.error?Promise.reject(r.error):Promise.resolve(r)}}getColor(e,t){const r=de(t=t||{});if(!e)return fe(t,"call .getColor(null) without resource."),this.prepareResult(r);const a=function(e,t){const r=he(t,"left",0),a=he(t,"top",0),n=he(t,"width",e.width),o=he(t,"height",e.height);let i,s=n,l=o;return"precision"===t.mode||(n>o?(i=n/o,s=100,l=Math.round(s/i)):(i=o/n,l=100,s=Math.round(l/i)),(s>n||l>o||s<10||l<10)&&(s=n,l=o)),{srcLeft:r,srcTop:a,srcWidth:n,srcHeight:o,destWidth:s,destHeight:l}}(function(e){if(e instanceof HTMLImageElement){let t=e.naturalWidth,r=e.naturalHeight;return e.naturalWidth||-1===e.src.search(/\.svg(\?|$)/i)||(t=r=100),{width:t,height:r}}return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:{width:e.width,height:e.height}}(e),t);if(!(a.srcWidth&&a.srcHeight&&a.destWidth&&a.destHeight))return fe(t,`incorrect sizes for resource "${e.src}".`),this.prepareResult(r);if(!this._ctx&&(this._canvas="undefined"==typeof window?new OffscreenCanvas(1,1):document.createElement("canvas"),this._ctx=this._canvas.getContext&&this._canvas.getContext("2d"),!this._ctx))return fe(t,"Canvas Context 2D is not supported in this browser."),this.prepareResult(r);this._canvas.width=a.destWidth,this._canvas.height=a.destHeight;let n=r;try{this._ctx.clearRect(0,0,a.destWidth,a.destHeight),this._ctx.drawImage(e,a.srcLeft,a.srcTop,a.srcWidth,a.srcHeight,0,0,a.destWidth,a.destHeight);const r=this._ctx.getImageData(0,0,a.destWidth,a.destHeight).data;n=this.getColorFromArray4(r,t)}catch(o){fe(t,`security error (CORS) for resource ${e.src}.\nDetails: https://developer.mozilla.org/en/docs/Web/HTML/CORS_enabled_image`,o)}return this.prepareResult(n)}getColorFromArray4(e,t){t=t||{};const r=e.length,a=de(t);if(r<4)return a;const n=r-r%4,o=4*(t.step||1);let i;switch(t.algorithm||"sqrt"){case"simple":i=le;break;case"sqrt":i=ce;break;case"dominant":i=se;break;default:throw ue(`${t.algorithm} is unknown algorithm.`)}return i(e,n,{defaultColor:a,ignoredColor:(s=t.ignoredColor,s?Array.isArray(s)?"number"==typeof s[0]?[s.slice()]:s:[s]:s),step:o});var s}prepareResult(e){const t=e.slice(0,3),r=[].concat(t,e[3]/255),a=(299*(n=e)[0]+587*n[1]+114*n[2])/1e3<128;var n;return{value:e,rgb:"rgb("+t.join(",")+")",rgba:"rgba("+r.join(",")+")",hex:ae(t),hexa:ae(e),isDark:a,isLight:!a}}destroy(){delete this._canvas,delete this._ctx}_bindImageEvents(e,t){return new Promise(((r,a)=>{const n=()=>{s();const n=this.getColor(e,t);n.error?a(n.error):r(n)},o=()=>{s(),a(ue(`Error loading image "${e.src}".`))},i=()=>{s(),a(ue(`Image "${e.src}" loading aborted.`))},s=()=>{e.removeEventListener("load",n),e.removeEventListener("error",o),e.removeEventListener("abort",i)};e.addEventListener("load",n),e.addEventListener("error",o),e.addEventListener("abort",i)}))}}var me,pe,ve,be,we,ye,ke,xe,$e,Ee,Me,Ne,Se,Ae;function Ie(e){let t,r,a,n,l,d,h,f,A,I,_,D,V,P,C,F,L=e[0].short_description+"";return I=new Q({props:{icon:te,inline:!0,class:"inline-block"}}),C=new Q({props:{icon:Z,inline:!0,class:"inline-block"}}),{c(){t=u("div"),r=u("div"),a=u("span"),n=g(L),l=m(),d=u("div"),h=u("button"),f=u("span"),A=g("More info "),p(I.$$.fragment),_=m(),D=u("button"),V=u("span"),P=g("Install "),p(C.$$.fragment),this.h()},l(e){t=o(e,"DIV",{class:!0});var c=i(t);r=o(c,"DIV",{});var u=i(r);a=o(u,"SPAN",{class:!0});var g=i(a);n=v(g,L),g.forEach(s),u.forEach(s),l=b(c),d=o(c,"DIV",{class:!0});var m=i(d);h=o(m,"BUTTON",{class:!0});var p=i(h);f=o(p,"SPAN",{});var y=i(f);A=v(y,"More info "),w(I.$$.fragment,y),y.forEach(s),p.forEach(s),_=b(m),D=o(m,"BUTTON",{class:!0});var k=i(D);V=o(k,"SPAN",{});var x=i(V);P=v(x,"Install "),w(C.$$.fragment,x),x.forEach(s),k.forEach(s),m.forEach(s),c.forEach(s),this.h()},h(){y(a,"class","text-base"),k(a,"text-gray-50",!e[6]),k(a,"text-gray-800",e[6]&&e[4]),y(h,"class","shadowed py-1 px-4 rounded text-base bg-blue-500 svelte-gm3y3f"),y(D,"class","shadowed py-1 px-4 rounded text-base bg-lime-600 svelte-gm3y3f"),y(d,"class","grid grid-flow-col gap-4"),y(t,"class","expanded grid grid-flow-row content-between gap-3")},m(e,o){c(e,t,o),x(t,r),x(r,a),x(a,n),x(t,l),x(t,d),x(d,h),x(h,f),x(f,A),$(I,f,null),x(d,_),x(d,D),x(D,V),x(V,P),$(C,V,null),F=!0},p(e,t){(!F||1&t)&&L!==(L=e[0].short_description+"")&&E(n,L),64&t&&k(a,"text-gray-50",!e[6]),80&t&&k(a,"text-gray-800",e[6]&&e[4])},i(e){F||(M(I.$$.fragment,e),M(C.$$.fragment,e),F=!0)},o(e){N(I.$$.fragment,e),N(C.$$.fragment,e),F=!1},d(e){e&&s(t),S(I),S(C)}}}function _e(e){let t,r,a,n,l,d,h,f,V,P,C,F,L,j,O,H,T,z,R,W,q,B,U,G,Y,X,J,K,te=e[0].name+"",re=e[0].views+"",ae=e[0].downloads+"";H=new Q({props:{icon:ee,inline:!0,class:"inline-block"}}),q=new Q({props:{icon:Z,inline:!0,class:"inline-block"}});let ne=e[4]&&Ie(e);return{c(){t=u("div"),r=u("div"),a=u("div"),n=u("div"),l=u("img"),f=m(),V=u("div"),P=u("div"),C=u("span"),F=g(te),L=m(),j=u("div"),O=u("span"),p(H.$$.fragment),T=m(),z=g(re),R=m(),W=u("span"),p(q.$$.fragment),B=m(),U=g(ae),G=m(),ne&&ne.c(),this.h()},l(e){t=o(e,"DIV",{class:!0});var c=i(t);r=o(c,"DIV",{class:!0,style:!0});var d=i(r);a=o(d,"DIV",{class:!0});var h=i(a);n=o(h,"DIV",{class:!0});var u=i(n);l=o(u,"IMG",{crossorigin:!0,src:!0,alt:!0}),u.forEach(s),f=b(h),V=o(h,"DIV",{});var g=i(V);P=o(g,"DIV",{});var m=i(P);C=o(m,"SPAN",{class:!0});var p=i(C);F=v(p,te),p.forEach(s),m.forEach(s),L=b(g),j=o(g,"DIV",{class:!0});var y=i(j);O=o(y,"SPAN",{});var k=i(O);w(H.$$.fragment,k),T=b(k),z=v(k,re),k.forEach(s),R=b(y),W=o(y,"SPAN",{});var x=i(W);w(q.$$.fragment,x),B=b(x),U=v(x,ae),x.forEach(s),y.forEach(s),g.forEach(s),h.forEach(s),G=b(d),ne&&ne.l(d),d.forEach(s),c.forEach(s),this.h()},h(){y(l,"crossorigin","anonymous"),l.src!==(d=e[7])&&y(l,"src",d),y(l,"alt",h=e[0].name+" Logo"),y(n,"class","shadowed svelte-gm3y3f"),y(C,"class","text-xl"),k(C,"text-gray-50",!e[6]),k(C,"text-gray-800",e[6]&&e[4]),y(j,"class","text-sm"),k(j,"text-gray-50",!e[6]),k(j,"text-gray-800",e[6]&&e[4]),y(a,"class","top grid grid-flow-col gap-4 svelte-gm3y3f"),y(r,"class","mod-card shadowed grid grid-flow-row p-3 bg-gray-700 gap-3 relative min-h-full svelte-gm3y3f"),y(r,"style",Y=e[4]&&e[5]?"background:"+e[5]:void 0),k(r,"max-h-72",e[4]),k(r,"max-h-36",!e[4]),k(r,"z-10",e[4]),y(t,"class","h-36 relative"),k(t,"h-36",!e[1])},m(o,i){c(o,t,i),x(t,r),x(r,a),x(a,n),x(n,l),e[9](l),x(a,f),x(a,V),x(V,P),x(P,C),x(C,F),x(V,L),x(V,j),x(j,O),$(H,O,null),x(O,T),x(O,z),x(j,R),x(j,W),$(q,W,null),x(W,B),x(W,U),x(r,G),ne&&ne.m(r,null),X=!0,J||(K=[A(r,"mouseover",e[10]),A(r,"mouseleave",e[11])],J=!0)},p(e,[a]){(!X||128&a&&l.src!==(d=e[7]))&&y(l,"src",d),(!X||1&a&&h!==(h=e[0].name+" Logo"))&&y(l,"alt",h),(!X||1&a)&&te!==(te=e[0].name+"")&&E(F,te),64&a&&k(C,"text-gray-50",!e[6]),80&a&&k(C,"text-gray-800",e[6]&&e[4]),(!X||1&a)&&re!==(re=e[0].views+"")&&E(z,re),(!X||1&a)&&ae!==(ae=e[0].downloads+"")&&E(U,ae),64&a&&k(j,"text-gray-50",!e[6]),80&a&&k(j,"text-gray-800",e[6]&&e[4]),e[4]?ne?(ne.p(e,a),16&a&&M(ne,1)):(ne=Ie(e),ne.c(),M(ne,1),ne.m(r,null)):ne&&(I(),N(ne,1,1,(()=>{ne=null})),_()),(!X||48&a&&Y!==(Y=e[4]&&e[5]?"background:"+e[5]:void 0))&&y(r,"style",Y),16&a&&k(r,"max-h-72",e[4]),16&a&&k(r,"max-h-36",!e[4]),16&a&&k(r,"z-10",e[4]),2&a&&k(t,"h-36",!e[1])},i(e){X||(M(H.$$.fragment,e),M(q.$$.fragment,e),M(ne),X=!0)},o(e){N(H.$$.fragment,e),N(q.$$.fragment,e),N(ne),X=!1},d(r){r&&s(t),e[9](null),S(H),S(q),ne&&ne.d(),J=!1,D(K)}}}function De(e,t,r){const a=[e,t,r].map((e=>(e/=255)<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)));return.2126*a[0]+.7152*a[1]+.0722*a[2]}function Ve(e,t,r){let a,n;var o=this&&this.__awaiter||function(e,t,r,a){return new(r||(r=Promise))((function(n,o){function i(e){try{l(a.next(e))}catch(t){o(t)}}function s(e){try{l(a.throw(e))}catch(t){o(t)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,s)}l((a=a.apply(e,t||[])).next())}))};let{mod:i}=t,{expanded:s=!1}=t;const l=new ge;let c,d,h=!1,f=!1;function u(e){return o(this,void 0,void 0,(function*(){const t=e.naturalWidth/2,r=e.naturalHeight/2;return Promise.all([new Promise((a=>{l.getColorAsync(e,{width:t,height:r}).then((e=>{e&&"hex"in e&&a(e.hex)}))})),new Promise((a=>{l.getColorAsync(e,{width:t,height:r,left:t}).then((e=>{e&&"hex"in e&&a(e.hex)}))})),new Promise((a=>{l.getColorAsync(e,{width:t,height:r,top:r}).then((e=>{e&&"hex"in e&&a(e.hex)}))})),new Promise((a=>{l.getColorAsync(e,{width:t,height:r,left:t,top:r}).then((e=>{e&&"hex"in e&&a(e.hex)}))})),new Promise((t=>{l.getColorAsync(e).then((e=>{e&&"value"in e&&t(e.value)}))}))]).then((e=>{console.log(e);let t="";return t+=`linear-gradient(to bottom right, ${e[0]}, 35%, transparent),`,t+=`linear-gradient(to bottom left, ${e[1]}, 35%, transparent),`,t+=`linear-gradient(to top right, ${e[2]}, 35%, transparent),`,t+=`linear-gradient(to top left, ${e[3]}, 35%, transparent),`,t+="linear-gradient(rgb(64, 64, 64), rgb(64, 64, 64));",{background:t,light:De(e[4][0],e[4][1],e[4][2])>.4}}))}))}let g=!1;return e.$$set=e=>{"mod"in e&&r(0,i=e.mod),"expanded"in e&&r(1,s=e.expanded)},e.$$.update=()=>{1&e.$$.dirty&&r(7,a=i.logo||L+"/images/no_image.png"),6&e.$$.dirty&&r(4,n=s||h),280&e.$$.dirty&&n&&c&&!g&&(r(8,g=!0),0!=c.naturalWidth&&0!=c.naturalHeight?u(c).then((e=>{r(5,d=e.background),r(6,f=e.light)})):r(3,c.onload=()=>u(c).then((e=>{r(5,d=e.background),r(6,f=e.light)})),c))},[i,s,h,c,n,d,f,a,g,function(e){V[e?"unshift":"push"]((()=>{c=e,r(3,c),r(4,n),r(8,g),r(1,s),r(2,h)}))},()=>r(2,h=!0),()=>r(2,h=!1)]}class Pe extends e{constructor(e){super(),t(this,e,Ve,_e,r,{mod:0,expanded:1})}}(pe=me||(me={})).Name="name",pe.CreatedAt="created_at",pe.UpdatedAt="updated_at",pe.SatisfactoryVersion="satisfactory_version",pe.Date="date",(be=ve||(ve={})).Name="name",be.CreatedAt="created_at",be.UpdatedAt="updated_at",be.Views="views",(ye=we||(we={})).CreatedAt="created_at",ye.UpdatedAt="updated_at",ye.Name="name",ye.Views="views",ye.Downloads="downloads",ye.Hotness="hotness",ye.Popularity="popularity",ye.LastVersionDate="last_version_date",ye.Search="search",(xe=ke||(ke={})).Asc="asc",xe.Desc="desc",(Ee=$e||($e={})).Name="name",Ee.CreatedAt="created_at",Ee.UpdatedAt="updated_at",Ee.SatisfactoryVersion="satisfactory_version",Ee.Date="date",(Ne=Me||(Me={})).CreatedAt="created_at",Ne.UpdatedAt="updated_at",Ne.Downloads="downloads",(Ae=Se||(Se={})).Alpha="alpha",Ae.Beta="beta",Ae.Release="release";const Ce={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetMods"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"offset"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"limit"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"getMods"},arguments:[{kind:"Argument",name:{kind:"Name",value:"filter"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"limit"},value:{kind:"Variable",name:{kind:"Name",value:"limit"}}},{kind:"ObjectField",name:{kind:"Name",value:"offset"},value:{kind:"Variable",name:{kind:"Name",value:"offset"}}}]}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"count"}},{kind:"Field",name:{kind:"Name",value:"mods"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"logo"}},{kind:"Field",name:{kind:"Name",value:"views"}},{kind:"Field",name:{kind:"Name",value:"downloads"}},{kind:"Field",name:{kind:"Name",value:"short_description"}}]}}]}}]}}]};function Fe(e,t,r){const a=e.slice();return a[4]=t[r],a}function Le(e,t,r){const a=e.slice();return a[4]=t[r],a}function je(e){let t,r,a=e[0].data.getMods.mods,n=[];for(let i=0;i<a.length;i+=1)n[i]=Te(Le(e,a,i));const o=e=>N(n[e],1,1,(()=>{n[e]=null}));return{c(){for(let e=0;e<n.length;e+=1)n[e].c();t=C()},l(e){for(let t=0;t<n.length;t+=1)n[t].l(e);t=C()},m(e,a){for(let t=0;t<n.length;t+=1)n[t].m(e,a);c(e,t,a),r=!0},p(e,r){if(1&r){let i;for(a=e[0].data.getMods.mods,i=0;i<a.length;i+=1){const o=Le(e,a,i);n[i]?(n[i].p(o,r),M(n[i],1)):(n[i]=Te(o),n[i].c(),M(n[i],1),n[i].m(t.parentNode,t))}for(I(),i=a.length;i<n.length;i+=1)o(i);_()}},i(e){if(!r){for(let e=0;e<a.length;e+=1)M(n[e]);r=!0}},o(e){n=n.filter(Boolean);for(let t=0;t<n.length;t+=1)N(n[t]);r=!1},d(e){F(n,e),e&&s(t)}}}function Oe(e){let t,r,a,n=e[0].error.message+"";return{c(){t=u("p"),r=g("Oh no... "),a=g(n)},l(e){t=o(e,"P",{});var l=i(t);r=v(l,"Oh no... "),a=v(l,n),l.forEach(s)},m(e,n){c(e,t,n),x(t,r),x(t,a)},p(e,t){1&t&&n!==(n=e[0].error.message+"")&&E(a,n)},i:h,o:h,d(e){e&&s(t)}}}function He(e){let t,r;return{c(){t=u("p"),r=g("Loading...")},l(e){t=o(e,"P",{});var a=i(t);r=v(a,"Loading..."),a.forEach(s)},m(e,a){c(e,t,a),x(t,r)},p:h,i:h,o:h,d(e){e&&s(t)}}}function Te(e){let t,r;return t=new Pe({props:{mod:e[4],expanded:!0}}),{c(){p(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,a){$(t,e,a),r=!0},p(e,r){const a={};1&r&&(a.mod=e[4]),t.$set(a)},i(e){r||(M(t.$$.fragment,e),r=!0)},o(e){N(t.$$.fragment,e),r=!1},d(e){S(t,e)}}}function ze(e){let t,r,a=e[1].data.getMods.mods,n=[];for(let i=0;i<a.length;i+=1)n[i]=qe(Fe(e,a,i));const o=e=>N(n[e],1,1,(()=>{n[e]=null}));return{c(){for(let e=0;e<n.length;e+=1)n[e].c();t=C()},l(e){for(let t=0;t<n.length;t+=1)n[t].l(e);t=C()},m(e,a){for(let t=0;t<n.length;t+=1)n[t].m(e,a);c(e,t,a),r=!0},p(e,r){if(2&r){let i;for(a=e[1].data.getMods.mods,i=0;i<a.length;i+=1){const o=Fe(e,a,i);n[i]?(n[i].p(o,r),M(n[i],1)):(n[i]=qe(o),n[i].c(),M(n[i],1),n[i].m(t.parentNode,t))}for(I(),i=a.length;i<n.length;i+=1)o(i);_()}},i(e){if(!r){for(let e=0;e<a.length;e+=1)M(n[e]);r=!0}},o(e){n=n.filter(Boolean);for(let t=0;t<n.length;t+=1)N(n[t]);r=!1},d(e){F(n,e),e&&s(t)}}}function Re(e){let t,r,a,n=e[1].error.message+"";return{c(){t=u("p"),r=g("Oh no... "),a=g(n)},l(e){t=o(e,"P",{});var l=i(t);r=v(l,"Oh no... "),a=v(l,n),l.forEach(s)},m(e,n){c(e,t,n),x(t,r),x(t,a)},p(e,t){2&t&&n!==(n=e[1].error.message+"")&&E(a,n)},i:h,o:h,d(e){e&&s(t)}}}function We(e){let t,r;return{c(){t=u("p"),r=g("Loading...")},l(e){t=o(e,"P",{});var a=i(t);r=v(a,"Loading..."),a.forEach(s)},m(e,a){c(e,t,a),x(t,r)},p:h,i:h,o:h,d(e){e&&s(t)}}}function qe(e){let t,r;return t=new Pe({props:{mod:e[4],expanded:!1}}),{c(){p(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,a){$(t,e,a),r=!0},p(e,r){const a={};2&r&&(a.mod=e[4]),t.$set(a)},i(e){r||(M(t.$$.fragment,e),r=!0)},o(e){N(t.$$.fragment,e),r=!1},d(e){S(t,e)}}}function Be(e){let t,r,a,n,l,d,h,f,k,E,A,D,V,P,C,F,j,O,T,z,R,W,q,B,U,G,Y,X,J,K,Z,ee,te,re,ae,ne,oe,ie,se,le,ce,de,he,fe,ue,ge,me,pe,ve,be,we,ye,ke,xe,$e,Ee,Me,Ne,Se,Ae,Ie,_e,De,Ve,Pe,Ce,Fe,Le,Te,qe,Be,Ue,Ge,Ye,Xe,Je,Ke,Qe,Ze,et,tt,rt;K=new Q({props:{icon:H,inline:!0,class:"inline-block"}});const at=[He,Oe,je],nt=[];function ot(e,t){return e[0].fetching?0:e[0].error?1:2}Be=ot(e),Ue=nt[Be]=at[Be](e);const it=[We,Re,ze],st=[];function lt(e,t){return e[1].fetching?0:e[1].error?1:2}return et=lt(e),tt=st[et]=it[et](e),{c(){t=u("div"),r=u("div"),a=u("div"),n=u("span"),l=g("Link 1"),d=m(),h=u("span"),f=g("Link 2"),k=m(),E=u("span"),A=g("Link 3"),D=m(),V=u("div"),P=g("Log in / register"),C=m(),F=u("div"),j=u("div"),O=u("span"),T=g("SMR"),z=m(),R=u("span"),W=g("Satisfactory Mod Repository"),q=m(),B=u("div"),U=u("span"),G=g("The unofficially official source for Satisfactory mods"),Y=m(),X=u("div"),J=u("span"),p(K.$$.fragment),Z=m(),ee=u("span"),te=g("Mods do not currently work on Experimental (EXP) / Update 4 - More info"),re=m(),ae=u("div"),ne=u("div"),oe=u("div"),ie=g("Link 1"),se=m(),le=u("div"),ce=g("Link 2"),de=m(),he=u("div"),fe=g("Link 3"),ue=m(),ge=u("div"),me=u("span"),pe=g("Type here to search, you can use #tags or !awards"),ve=m(),be=u("div"),we=u("div"),ye=u("div"),ke=u("div"),xe=u("span"),$e=g("Featured mods:"),Ee=m(),Me=u("span"),Ne=g("Newest"),Se=m(),Ae=u("div"),Ie=u("span"),_e=g("Browse all"),De=m(),Ve=u("span"),Pe=g("330"),Ce=m(),Fe=u("span"),Le=g("mods"),Te=m(),qe=u("div"),Ue.c(),Ge=m(),Ye=u("div"),Xe=u("span"),Je=g("Browse all 330 mods"),Ke=m(),Qe=u("div"),Ze=u("div"),tt.c(),this.h()},l(e){t=o(e,"DIV",{class:!0,style:!0});var c=i(t);r=o(c,"DIV",{class:!0});var u=i(r);a=o(u,"DIV",{class:!0});var g=i(a);n=o(g,"SPAN",{class:!0});var m=i(n);l=v(m,"Link 1"),m.forEach(s),d=b(g),h=o(g,"SPAN",{class:!0});var p=i(h);f=v(p,"Link 2"),p.forEach(s),k=b(g),E=o(g,"SPAN",{class:!0});var y=i(E);A=v(y,"Link 3"),y.forEach(s),g.forEach(s),D=b(u),V=o(u,"DIV",{class:!0});var x=i(V);P=v(x,"Log in / register"),x.forEach(s),u.forEach(s),C=b(c),F=o(c,"DIV",{class:!0});var $=i(F);j=o($,"DIV",{class:!0});var M=i(j);O=o(M,"SPAN",{class:!0});var N=i(O);T=v(N,"SMR"),N.forEach(s),z=b(M),R=o(M,"SPAN",{});var S=i(R);W=v(S,"Satisfactory Mod Repository"),S.forEach(s),M.forEach(s),q=b($),B=o($,"DIV",{class:!0});var I=i(B);U=o(I,"SPAN",{});var _=i(U);G=v(_,"The unofficially official source for Satisfactory mods"),_.forEach(s),I.forEach(s),Y=b($),X=o($,"DIV",{class:!0});var L=i(X);J=o(L,"SPAN",{});var H=i(J);w(K.$$.fragment,H),H.forEach(s),Z=b(L),ee=o(L,"SPAN",{});var Q=i(ee);te=v(Q,"Mods do not currently work on Experimental (EXP) / Update 4 - More info"),Q.forEach(s),L.forEach(s),$.forEach(s),re=b(c),ae=o(c,"DIV",{class:!0});var je=i(ae);ne=o(je,"DIV",{class:!0});var Oe=i(ne);oe=o(Oe,"DIV",{});var He=i(oe);ie=v(He,"Link 1"),He.forEach(s),se=b(Oe),le=o(Oe,"DIV",{});var ze=i(le);ce=v(ze,"Link 2"),ze.forEach(s),de=b(Oe),he=o(Oe,"DIV",{});var Re=i(he);fe=v(Re,"Link 3"),Re.forEach(s),Oe.forEach(s),ue=b(je),ge=o(je,"DIV",{class:!0});var We=i(ge);me=o(We,"SPAN",{});var Be=i(me);pe=v(Be,"Type here to search, you can use #tags or !awards"),Be.forEach(s),We.forEach(s),je.forEach(s),ve=b(c),be=o(c,"DIV",{class:!0});var et=i(be);we=o(et,"DIV",{class:!0});var rt=i(we);ye=o(rt,"DIV",{class:!0});var at=i(ye);ke=o(at,"DIV",{});var nt=i(ke);xe=o(nt,"SPAN",{});var ot=i(xe);$e=v(ot,"Featured mods:"),ot.forEach(s),Ee=b(nt),Me=o(nt,"SPAN",{class:!0});var it=i(Me);Ne=v(it,"Newest"),it.forEach(s),nt.forEach(s),Se=b(at),Ae=o(at,"DIV",{class:!0});var st=i(Ae);Ie=o(st,"SPAN",{});var lt=i(Ie);_e=v(lt,"Browse all"),lt.forEach(s),De=b(st),Ve=o(st,"SPAN",{class:!0});var ct=i(Ve);Pe=v(ct,"330"),ct.forEach(s),Ce=b(st),Fe=o(st,"SPAN",{});var dt=i(Fe);Le=v(dt,"mods"),dt.forEach(s),st.forEach(s),at.forEach(s),Te=b(rt),qe=o(rt,"DIV",{class:!0});var ht=i(qe);Ue.l(ht),ht.forEach(s),rt.forEach(s),et.forEach(s),c.forEach(s),Ge=b(e),Ye=o(e,"DIV",{class:!0});var ft=i(Ye);Xe=o(ft,"SPAN",{class:!0});var ut=i(Xe);Je=v(ut,"Browse all 330 mods"),ut.forEach(s),ft.forEach(s),Ke=b(e),Qe=o(e,"DIV",{class:!0});var gt=i(Qe);Ze=o(gt,"DIV",{class:!0});var mt=i(Ze);tt.l(mt),mt.forEach(s),gt.forEach(s),this.h()},h(){y(n,"class","border-r-2 border-white px-4"),y(h,"class","border-r-2 border-white px-4"),y(E,"class","px-4"),y(a,"class","grid grid-flow-col justify-self-center items-center svelte-5qzry0"),y(V,"class","log-in justify-self-center svelte-5qzry0"),y(r,"class","menu grid bg-black bg-opacity-70 py-2.5 px-4 items-center svelte-5qzry0"),y(O,"class","text-lime-500"),y(j,"class","header text-6xl"),y(B,"class","under-header text-3xl"),y(X,"class","alert mt-10 bg-red-700 inline-block mx-auto p-4 shadow-md"),y(F,"class","text-center self-center"),y(ne,"class","grid grid-flow-col justify-around h-14 mb-3 bg-black bg-opacity-70"),y(ge,"class","h-14 bg-black bg-opacity-70"),y(ae,"class","w-5/6 justify-self-center"),y(Me,"class","text-lime-500"),y(Ve,"class","text-lime-500"),y(Ae,"class","text-right"),y(ye,"class","w-5/6 mx-auto grid grid-flow-col mb-3"),y(qe,"class","featured-mods w-5/6 mx-auto grid grid-flow-col gap-4"),y(we,"class","py-8 bg-black bg-opacity-70"),y(be,"class","grid"),y(t,"class","h-screen bg-center bg-cover fold grid svelte-5qzry0"),y(t,"style",'background-image: url("'+L+'/assets/header_bg_image.png")'),y(Xe,"class","text-3xl"),y(Ye,"class","w-full text-center py-6 bg-lime-600 mb-8"),y(Ze,"class","w-5/6 mx-auto grid grid-cols-5 gap-4"),y(Qe,"class","grid")},m(e,o){c(e,t,o),x(t,r),x(r,a),x(a,n),x(n,l),x(a,d),x(a,h),x(h,f),x(a,k),x(a,E),x(E,A),x(r,D),x(r,V),x(V,P),x(t,C),x(t,F),x(F,j),x(j,O),x(O,T),x(j,z),x(j,R),x(R,W),x(F,q),x(F,B),x(B,U),x(U,G),x(F,Y),x(F,X),x(X,J),$(K,J,null),x(X,Z),x(X,ee),x(ee,te),x(t,re),x(t,ae),x(ae,ne),x(ne,oe),x(oe,ie),x(ne,se),x(ne,le),x(le,ce),x(ne,de),x(ne,he),x(he,fe),x(ae,ue),x(ae,ge),x(ge,me),x(me,pe),x(t,ve),x(t,be),x(be,we),x(we,ye),x(ye,ke),x(ke,xe),x(xe,$e),x(ke,Ee),x(ke,Me),x(Me,Ne),x(ye,Se),x(ye,Ae),x(Ae,Ie),x(Ie,_e),x(Ae,De),x(Ae,Ve),x(Ve,Pe),x(Ae,Ce),x(Ae,Fe),x(Fe,Le),x(we,Te),x(we,qe),nt[Be].m(qe,null),c(e,Ge,o),c(e,Ye,o),x(Ye,Xe),x(Xe,Je),c(e,Ke,o),c(e,Qe,o),x(Qe,Ze),st[et].m(Ze,null),rt=!0},p(e,[t]){let r=Be;Be=ot(e),Be===r?nt[Be].p(e,t):(I(),N(nt[r],1,1,(()=>{nt[r]=null})),_(),Ue=nt[Be],Ue?Ue.p(e,t):(Ue=nt[Be]=at[Be](e),Ue.c()),M(Ue,1),Ue.m(qe,null));let a=et;et=lt(e),et===a?st[et].p(e,t):(I(),N(st[a],1,1,(()=>{st[a]=null})),_(),tt=st[et],tt?tt.p(e,t):(tt=st[et]=it[et](e),tt.c()),M(tt,1),tt.m(Ze,null))},i(e){rt||(M(K.$$.fragment,e),M(Ue),M(tt),rt=!0)},o(e){N(K.$$.fragment,e),N(Ue),N(tt),rt=!1},d(e){e&&s(t),S(K),nt[Be].d(),e&&s(Ge),e&&s(Ye),e&&s(Ke),e&&s(Qe),st[et].d()}}}function Ue(e,t,r){let a,n;const o=j(Ce,{offset:0,limit:5});P(e,o,(e=>r(0,a=e))),O(o);const i=j(Ce,{offset:0,limit:100});return P(e,i,(e=>r(1,n=e))),O(i),[a,n,o,i]}export default class extends e{constructor(e){super(),t(this,e,Ue,Be,r,{})}}
