import{S as t,i as e,s,e as a,j as r,k as n,c as l,a as o,m as c,d as i,n as f,b as u,f as g,o as d,r as h,u as m,w as $,x as p,v,N as x,M as b,ak as j,O as k,C as w,ad as y,t as G,g as C,R as E,h as P,X as M,$ as D}from"../../chunks/vendor-ae42b6a0.js";import{h as I}from"../../chunks/graphql-53becde4.js";import{G as V}from"../../chunks/GuideCard-17f58d89.js";import{P as N}from"../../chunks/PageControls-c61a9da0.js";import{F as O}from"../../chunks/FakeCard-17e5e9d4.js";import{b as S}from"../../chunks/paths-6758d194.js";import{M as A}from"../../chunks/MetaDescriptors-acbf38a9.js";import"../../chunks/image-128328ec.js";import"../../chunks/stores-fc868ea7.js";function B(t,e,s){const a=t.slice();return a[11]=e[s],a}function F(t,e,s){const a=t.slice();return a[8]=e[s],a}function q(t){let e,s,r,n=t[0].data.getGuides.guides,c=[];for(let a=0;a<n.length;a+=1)c[a]=X(B(t,n,a));const f=t=>m(c[t],1,1,(()=>{c[t]=null}));return{c(){e=a("div");for(let t=0;t<c.length;t+=1)c[t].c();this.h()},l(t){e=l(t,"DIV",{class:!0});var s=o(e);for(let e=0;e<c.length;e+=1)c[e].l(s);s.forEach(i),this.h()},h(){u(e,"class",s="grid "+t[2]+" gap-4")},m(t,s){g(t,e,s);for(let a=0;a<c.length;a+=1)c[a].m(e,null);r=!0},p(t,a){if(1&a){let s;for(n=t[0].data.getGuides.guides,s=0;s<n.length;s+=1){const r=B(t,n,s);c[s]?(c[s].p(r,a),p(c[s],1)):(c[s]=X(r),c[s].c(),p(c[s],1),c[s].m(e,null))}for(h(),s=n.length;s<c.length;s+=1)f(s);$()}(!r||4&a&&s!==(s="grid "+t[2]+" gap-4"))&&u(e,"class",s)},i(t){if(!r){for(let t=0;t<n.length;t+=1)p(c[t]);r=!0}},o(t){c=c.filter(Boolean);for(let e=0;e<c.length;e+=1)m(c[e]);r=!1},d(t){t&&i(e),y(c,t)}}}function H(t){let e,s,r,n=t[0].error.message+"";return{c(){e=a("p"),s=G("Oh no... "),r=G(n)},l(t){e=l(t,"P",{});var a=o(e);s=C(a,"Oh no... "),r=C(a,n),a.forEach(i)},m(t,a){g(t,e,a),E(e,s),E(e,r)},p(t,e){1&e&&n!==(n=t[0].error.message+"")&&P(r,n)},i:M,o:M,d(t){t&&i(e)}}}function R(t){let e,s,r,n=Array(K),c=[];for(let a=0;a<n.length;a+=1)c[a]=z(F(t,n,a));return{c(){e=a("div");for(let t=0;t<c.length;t+=1)c[t].c();this.h()},l(t){e=l(t,"DIV",{class:!0});var s=o(e);for(let e=0;e<c.length;e+=1)c[e].l(s);s.forEach(i),this.h()},h(){u(e,"class",s="grid "+t[2]+" gap-4")},m(t,s){g(t,e,s);for(let a=0;a<c.length;a+=1)c[a].m(e,null);r=!0},p(t,a){(!r||4&a&&s!==(s="grid "+t[2]+" gap-4"))&&u(e,"class",s)},i(t){if(!r){for(let t=0;t<n.length;t+=1)p(c[t]);r=!0}},o(t){c=c.filter(Boolean);for(let e=0;e<c.length;e+=1)m(c[e]);r=!1},d(t){t&&i(e),y(c,t)}}}function X(t){let e,s;return e=new V({props:{guide:t[11],logo:t[11].user.avatar}}),{c(){r(e.$$.fragment)},l(t){c(e.$$.fragment,t)},m(t,a){d(e,t,a),s=!0},p(t,s){const a={};1&s&&(a.guide=t[11]),1&s&&(a.logo=t[11].user.avatar),e.$set(a)},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){m(e.$$.fragment,t),s=!1},d(t){v(e,t)}}}function z(t){let e,s;return e=new O({}),{c(){r(e.$$.fragment)},l(t){c(e.$$.fragment,t)},m(t,a){d(e,t,a),s=!0},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){m(e.$$.fragment,t),s=!1},d(t){v(e,t)}}}function J(t){let e,s,x,b,j,k,w,y,G;s=new N({props:{totalPages:Math.ceil(t[1]/K),currentPage:t[4]}});const C=[R,H,q],E=[];function P(t,e){return t[0].fetching?0:t[0].error?1:2}return b=P(t),j=E[b]=C[b](t),y=new N({props:{totalPages:Math.ceil(t[1]/K),currentPage:t[4]}}),{c(){e=a("div"),r(s.$$.fragment),x=n(),j.c(),k=n(),w=a("div"),r(y.$$.fragment),this.h()},l(t){e=l(t,"DIV",{class:!0});var a=o(e);c(s.$$.fragment,a),a.forEach(i),x=f(t),j.l(t),k=f(t),w=l(t,"DIV",{class:!0});var r=o(w);c(y.$$.fragment,r),r.forEach(i),this.h()},h(){u(e,"class","mb-5 ml-auto flex justify-end"),u(w,"class","mt-5 ml-auto flex justify-end")},m(t,a){g(t,e,a),d(s,e,null),g(t,x,a),E[b].m(t,a),g(t,k,a),g(t,w,a),d(y,w,null),G=!0},p(t,[e]){const a={};2&e&&(a.totalPages=Math.ceil(t[1]/K)),s.$set(a);let r=b;b=P(t),b===r?E[b].p(t,e):(h(),m(E[r],1,1,(()=>{E[r]=null})),$(),j=E[b],j?j.p(t,e):(j=E[b]=C[b](t),j.c()),p(j,1),j.m(k.parentNode,k));const n={};2&e&&(n.totalPages=Math.ceil(t[1]/K)),y.$set(n)},i(t){G||(p(s.$$.fragment,t),p(j),p(y.$$.fragment,t),G=!0)},o(t){m(s.$$.fragment,t),m(j),m(y.$$.fragment,t),G=!1},d(t){t&&i(e),v(s),t&&i(x),E[b].d(t),t&&i(k),t&&i(w),v(y)}}}const K=40;function L(t,e,s){let a,r;var n,l;let{colCount:o=4}=e;const c=x(I,{offset:0,limit:K});b(t,c,(t=>s(0,r=t)));const i=w(1);let f;return i.subscribe((t=>{j(c,r.variables.offset=(t-1)*K,r),r.reexecute()})),k(c),t.$$set=t=>{"colCount"in t&&s(5,o=t.colCount)},t.$$.update=()=>{193&t.$$.dirty&&s(1,f=(null===s(7,l=null===s(6,n=null==r?void 0:r.data)||void 0===n?void 0:n.getGuides)||void 0===l?void 0:l.count)||0),32&t.$$.dirty&&s(2,a=4==o?"2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1":"2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 grid-cols-1")},[r,f,a,c,i,o,n,l]}class Q extends t{constructor(t){super(),e(this,t,L,J,s,{colCount:5})}}function T(t){let e,s,h,$,x,b,j,k,w,y,P;return e=new A({props:{description:"Guides for Satisfactory and modding Satisfactory",title:"Guides"}}),y=new Q({props:{colCount:5}}),{c(){r(e.$$.fragment),s=n(),h=a("div"),$=a("h1"),x=G("Guides"),b=n(),j=a("a"),k=G("New Guide"),w=n(),r(y.$$.fragment),this.h()},l(t){const a=D('[data-svelte="svelte-gby4d8"]',document.head);c(e.$$.fragment,a),a.forEach(i),s=f(t),h=l(t,"DIV",{class:!0});var r=o(h);$=l(r,"H1",{class:!0});var n=o($);x=C(n,"Guides"),n.forEach(i),b=f(r),j=l(r,"A",{href:!0,class:!0});var u=o(j);k=C(u,"New Guide"),u.forEach(i),r.forEach(i),w=f(t),c(y.$$.fragment,t),this.h()},h(){u($,"class","text-4xl my-4 font-bold"),u(j,"href",S+"/new-guide"),u(j,"class","rounded text-base bg-blue-500 py-2 px-4 h-fit"),u(h,"class","flex justify-between items-center")},m(t,a){d(e,document.head,null),g(t,s,a),g(t,h,a),E(h,$),E($,x),E(h,b),E(h,j),E(j,k),g(t,w,a),d(y,t,a),P=!0},p:M,i(t){P||(p(e.$$.fragment,t),p(y.$$.fragment,t),P=!0)},o(t){m(e.$$.fragment,t),m(y.$$.fragment,t),P=!1},d(t){v(e),t&&i(s),t&&i(h),t&&i(w),v(y,t)}}}class U extends t{constructor(t){super(),e(this,t,null,T,s,{})}}export{U as default};
//# sourceMappingURL=index.svelte-1c372554.js.map
