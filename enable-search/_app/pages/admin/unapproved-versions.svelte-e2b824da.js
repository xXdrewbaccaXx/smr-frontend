import{S as e,i as s,s as a,e as t,j as r,c as o,a as n,m as c,d as l,b as i,f as d,o as f,x as u,u as h,v as m,k as p,l as v,$ as g,n as $,w as b,N as D,M as V,ak as x,Q as E,O as w,r as I,C as k,t as y,g as j,R as P,W as M,h as U,Y as A,ad as N,X as _}from"../../chunks/vendor-ae42b6a0.js";import{i as O,A as T,D as q}from"../../chunks/graphql-53becde4.js";import{P as L}from"../../chunks/PageControls-c61a9da0.js";import{b as R}from"../../chunks/api-82c76902.js";import"../../chunks/user-c2fb5a94.js";import{b as B}from"../../chunks/paths-6758d194.js";import{M as C}from"../../chunks/MetaDescriptors-acbf38a9.js";import"../../chunks/stores-fc868ea7.js";function H(e,s,a){const t=e.slice();return t[12]=s[a],t}function Q(e){let s,a,p;return a=new L({props:{totalPages:Math.ceil(e[1]/G),currentPage:e[3]}}),{c(){s=t("div"),r(a.$$.fragment),this.h()},l(e){s=o(e,"DIV",{class:!0});var t=n(s);c(a.$$.fragment,t),t.forEach(l),this.h()},h(){i(s,"class","mt-5 ml-auto flex justify-end")},m(e,t){d(e,s,t),f(a,s,null),p=!0},p(e,s){const t={};2&s&&(t.totalPages=Math.ceil(e[1]/G)),a.$set(t)},i(e){p||(u(a.$$.fragment,e),p=!0)},o(e){h(a.$$.fragment,e),p=!1},d(e){e&&l(s),m(a)}}}function S(e){let s,a,r,c,f,u,h,m,v,g,b,D,V=e[0].data.getUnapprovedVersions.versions,x=[];for(let t=0;t<V.length;t+=1)x[t]=Y(H(e,V,t));return{c(){s=t("div"),a=t("div"),r=y("Mod"),c=p(),f=t("div"),u=y("Version"),h=p(),m=t("div"),v=y("Release Date"),g=p(),b=t("div"),D=p();for(let e=0;e<x.length;e+=1)x[e].c();this.h()},l(e){s=o(e,"DIV",{class:!0});var t=n(s);a=o(t,"DIV",{});var i=n(a);r=j(i,"Mod"),i.forEach(l),c=$(t),f=o(t,"DIV",{});var d=n(f);u=j(d,"Version"),d.forEach(l),h=$(t),m=o(t,"DIV",{});var p=n(m);v=j(p,"Release Date"),p.forEach(l),g=$(t),b=o(t,"DIV",{}),n(b).forEach(l),D=$(t);for(let s=0;s<x.length;s+=1)x[s].l(t);t.forEach(l),this.h()},h(){i(s,"class","grid grid-cols-6 itemList svelte-uwb2eg")},m(e,t){d(e,s,t),P(s,a),P(a,r),P(s,c),P(s,f),P(f,u),P(s,h),P(s,m),P(m,v),P(s,g),P(s,b),P(s,D);for(let a=0;a<x.length;a+=1)x[a].m(s,null)},p(e,a){if(49&a){let t;for(V=e[0].data.getUnapprovedVersions.versions,t=0;t<V.length;t+=1){const r=H(e,V,t);x[t]?x[t].p(r,a):(x[t]=Y(r),x[t].c(),x[t].m(s,null))}for(;t<x.length;t+=1)x[t].d(1);x.length=V.length}},d(e){e&&l(s),N(x,e)}}}function W(e){let s,a,r,c=e[0].error.message+"";return{c(){s=t("p"),a=y("Oh no... "),r=y(c)},l(e){s=o(e,"P",{});var t=n(s);a=j(t,"Oh no... "),r=j(t,c),t.forEach(l)},m(e,t){d(e,s,t),P(s,a),P(s,r)},p(e,s){1&s&&c!==(c=e[0].error.message+"")&&U(r,c)},d(e){e&&l(s)}}}function X(e){let s,a;return{c(){s=t("p"),a=y("Loading...")},l(e){s=o(e,"P",{});var t=n(s);a=j(t,"Loading..."),t.forEach(l)},m(e,t){d(e,s,t),P(s,a)},p:_,d(e){e&&l(s)}}}function Y(e){let s,a,r,c,f,u,h,m,v,g,b,D,V,x,E,w,I,k,N,_,O,T,q,L,C,H,Q,S=e[12].mod.name+"",W=e[12].version+"",X=e[12].created_at+"";function Y(){return e[8](e[12])}function z(){return e[9](e[12])}return{c(){s=t("div"),a=t("div"),r=y(S),c=p(),f=t("div"),u=y(W),h=p(),m=t("div"),v=y(X),g=p(),b=t("div"),D=t("button"),V=y("Approve"),x=p(),E=t("button"),w=y("Deny"),I=p(),k=t("a"),N=y("Download"),O=p(),T=t("a"),q=y("View"),C=p(),this.h()},l(e){s=o(e,"DIV",{class:!0});var t=n(s);a=o(t,"DIV",{class:!0});var i=n(a);r=j(i,S),i.forEach(l),c=$(t),f=o(t,"DIV",{class:!0});var d=n(f);u=j(d,W),d.forEach(l),h=$(t),m=o(t,"DIV",{class:!0});var p=n(m);v=j(p,X),p.forEach(l),g=$(t),b=o(t,"DIV",{class:!0});var y=n(b);D=o(y,"BUTTON",{class:!0});var P=n(D);V=j(P,"Approve"),P.forEach(l),x=$(y),E=o(y,"BUTTON",{class:!0});var M=n(E);w=j(M,"Deny"),M.forEach(l),I=$(y),k=o(y,"A",{href:!0,class:!0});var U=n(k);N=j(U,"Download"),U.forEach(l),O=$(y),T=o(y,"A",{href:!0,class:!0});var A=n(T);q=j(A,"View"),A.forEach(l),y.forEach(l),C=$(t),t.forEach(l),this.h()},h(){i(a,"class","svelte-uwb2eg"),i(f,"class","svelte-uwb2eg"),i(m,"class","svelte-uwb2eg"),i(D,"class","py-1 px-4 rounded text-base bg-green-600 text-center cursor-pointer"),i(E,"class","py-1 px-4 rounded text-base bg-red-600 text-center cursor-pointer"),i(k,"href",_=R+"/mod/"+e[12].mod_id+"/versions/"+e[12].id+"/download"),i(k,"class","py-1 px-4 rounded text-base bg-yellow-600 text-center cursor-pointer"),i(T,"href",L=B+"/mod/"+e[12].mod_id+"/version/"+e[12].id),i(T,"class","py-1 px-4 rounded text-base bg-blue-500 text-center cursor-pointer"),i(b,"class","grid grid-flow-col gap-4 svelte-uwb2eg"),i(s,"class","contents itemHeader svelte-uwb2eg")},m(e,t){d(e,s,t),P(s,a),P(a,r),P(s,c),P(s,f),P(f,u),P(s,h),P(s,m),P(m,v),P(s,g),P(s,b),P(b,D),P(D,V),P(b,x),P(b,E),P(E,w),P(b,I),P(b,k),P(k,N),P(b,O),P(b,T),P(T,q),P(s,C),H||(Q=[M(D,"click",Y),M(E,"click",z)],H=!0)},p(s,a){e=s,1&a&&S!==(S=e[12].mod.name+"")&&U(r,S),1&a&&W!==(W=e[12].version+"")&&U(u,W),1&a&&X!==(X=e[12].created_at+"")&&U(v,X),1&a&&_!==(_=R+"/mod/"+e[12].mod_id+"/versions/"+e[12].id+"/download")&&i(k,"href",_),1&a&&L!==(L=B+"/mod/"+e[12].mod_id+"/version/"+e[12].id)&&i(T,"href",L)},d(e){e&&l(s),H=!1,A(Q)}}}function z(e){let s,a,p;return a=new L({props:{totalPages:Math.ceil(e[1]/G),currentPage:e[3]}}),{c(){s=t("div"),r(a.$$.fragment),this.h()},l(e){s=o(e,"DIV",{class:!0});var t=n(s);c(a.$$.fragment,t),t.forEach(l),this.h()},h(){i(s,"class","mt-5 ml-auto flex justify-end")},m(e,t){d(e,s,t),f(a,s,null),p=!0},p(e,s){const t={};2&s&&(t.totalPages=Math.ceil(e[1]/G)),a.$set(t)},i(e){p||(u(a.$$.fragment,e),p=!0)},o(e){h(a.$$.fragment,e),p=!1},d(e){e&&l(s),m(a)}}}function F(e){let s,a,t,o,n,i;s=new C({props:{description:"Unapproved mod versions",title:"Admin: Unapproved Versions"}});let D=e[1]&&Q(e);function V(e,s){return e[0].fetching?X:e[0].error?W:S}let x=V(e),E=x(e),w=e[1]&&z(e);return{c(){r(s.$$.fragment),a=p(),D&&D.c(),t=p(),E.c(),o=p(),w&&w.c(),n=v()},l(e){const r=g('[data-svelte="svelte-c87g9p"]',document.head);c(s.$$.fragment,r),r.forEach(l),a=$(e),D&&D.l(e),t=$(e),E.l(e),o=$(e),w&&w.l(e),n=v()},m(e,r){f(s,document.head,null),d(e,a,r),D&&D.m(e,r),d(e,t,r),E.m(e,r),d(e,o,r),w&&w.m(e,r),d(e,n,r),i=!0},p(e,[s]){e[1]?D?(D.p(e,s),2&s&&u(D,1)):(D=Q(e),D.c(),u(D,1),D.m(t.parentNode,t)):D&&(I(),h(D,1,1,(()=>{D=null})),b()),x===(x=V(e))&&E?E.p(e,s):(E.d(1),E=x(e),E&&(E.c(),E.m(o.parentNode,o))),e[1]?w?(w.p(e,s),2&s&&u(w,1)):(w=z(e),w.c(),u(w,1),w.m(n.parentNode,n)):w&&(I(),h(w,1,1,(()=>{w=null})),b())},i(e){i||(u(s.$$.fragment,e),u(D),u(w),i=!0)},o(e){h(s.$$.fragment,e),h(D),h(w),i=!1},d(e){m(s),e&&l(a),D&&D.d(e),e&&l(t),E.d(e),e&&l(o),w&&w.d(e),e&&l(n)}}}const G=20;function J(e,s,a){let t;var r,o;const n=D(O,{filter:{offset:0,limit:G}});V(e,n,(e=>a(0,t=e)));const c=k(1);let l;c.subscribe((e=>x(n,t.variables.filter.offset=(e-1)*G,t)));const i=E({query:T}),d=e=>{i({versionId:e}).then((()=>{n.reexecute()}))},f=E({query:q}),u=e=>{f({versionId:e}).then((()=>{n.reexecute()}))};w(n);return e.$$.update=()=>{193&e.$$.dirty&&a(1,l=null===a(7,o=null===a(6,r=null==t?void 0:t.data)||void 0===r?void 0:r.getUnapprovedVersions)||void 0===o?void 0:o.count)},[t,l,n,c,d,u,r,o,e=>d(e.id),e=>u(e.id)]}class K extends e{constructor(e){super(),s(this,e,J,F,a,{})}}export{K as default};
//# sourceMappingURL=unapproved-versions.svelte-e2b824da.js.map
