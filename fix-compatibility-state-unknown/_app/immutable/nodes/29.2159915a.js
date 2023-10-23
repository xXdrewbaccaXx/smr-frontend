import{aL as Fe,S as ge,i as pe,s as he,d as w,bo as _e,v as ve,aK as ke,Y as oe,bp as je,a8 as G,ab as L,ae as q,p as h,t as b,aj as z,P as O,aw as We,x as S,L as P,a6 as V,y as E,z as I,N as A,q as m,a9 as M,ac as j,C as B,l as R,ad as p,O as te,bm as ye,bj as Se,Z as Ee,aQ as we,a_ as Pe,k as Z,bi as Xe,n as F,m as W,a$ as ne,b0 as Ae}from"../chunks/vendor.469c6aa0.js";import{S as et}from"../chunks/graphql.04d4ab78.js";import{l as tt}from"../chunks/gql.ff9241aa.js";import{p as re}from"../chunks/formatting.730f0615.js";import{M as De}from"../chunks/ModCard.85e6453f.js";import{G as Oe}from"../chunks/GuideCard.9ec85bf8.js";import{M as Ce}from"../chunks/MetaDescriptors.c919f508.js";import{a as se}from"../chunks/user.af1a2c01.js";const nt=async({params:r,parent:e})=>({...r,...await tt({user:Fe({query:et,client:(await e()).client,variables:{user:r.userId}})})}),mt=Object.freeze(Object.defineProperty({__proto__:null,load:nt},Symbol.toStringTag,{value:"Module"})),X="src/lib/components/users/UserInfo.svelte";function Te(r){let e,o,i,n,t,a,s=r[2]("entry.created-at")+"",f,l,d,u=re(r[0].created_at)+"",c,$;const x={c:function(){e=S("div"),o=S("h3"),i=P("Info"),n=V(),t=S("span"),a=S("strong"),f=P(s),l=P(":"),d=V(),c=P(u),$=S("br"),this.h()},l:function(k){e=E(k,"DIV",{class:!0});var _=I(e);o=E(_,"H3",{class:!0});var D=I(o);i=A(D,"Info"),D.forEach(m),n=M(_),t=E(_,"SPAN",{});var C=I(t);a=E(C,"STRONG",{});var v=I(a);f=A(v,s),l=A(v,":"),v.forEach(m),d=M(C),c=A(C,u),C.forEach(m),$=E(_,"BR",{}),_.forEach(m),this.h()},h:function(){j(o,"class","text-2xl my-4 font-bold"),B(o,X,10,6,277),B(a,X,11,12,335),B(t,X,11,6,329),B($,X,11,91,414),j(e,"class","text-lg"),B(e,X,9,4,249)},m:function(k,_){R(k,e,_),p(e,o),p(o,i),p(e,n),p(e,t),p(t,a),p(a,f),p(a,l),p(t,d),p(t,c),p(e,$)},p:function(k,_){_&4&&s!==(s=k[2]("entry.created-at")+"")&&te(f,s),_&1&&u!==(u=re(k[0].created_at)+"")&&te(c,u)},d:function(k){k&&m(e)}};return w("SvelteRegisterBlock",{block:x,id:Te.name,type:"slot",source:"(9:2) <Content>",ctx:r}),x}function Ve(r){let e,o;e=new je({props:{$$slots:{default:[Te]},$$scope:{ctx:r}},$$inline:!0});const i={c:function(){G(e.$$.fragment)},l:function(t){L(e.$$.fragment,t)},m:function(t,a){q(e,t,a),o=!0},p:function(t,a){const s={};a&13&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i:function(t){o||(h(e.$$.fragment,t),o=!0)},o:function(t){b(e.$$.fragment,t),o=!1},d:function(t){z(e,t)}};return w("SvelteRegisterBlock",{block:i,id:Ve.name,type:"slot",source:"(8:0) <Card>",ctx:r}),i}function ie(r){let e,o;e=new _e({props:{$$slots:{default:[Ve]},$$scope:{ctx:r}},$$inline:!0});const i={c:function(){G(e.$$.fragment)},l:function(t){L(e.$$.fragment,t)},m:function(t,a){q(e,t,a),o=!0},p:function(t,[a]){const s={};a&13&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i:function(t){o||(h(e.$$.fragment,t),o=!0)},o:function(t){b(e.$$.fragment,t),o=!1},d:function(t){z(e,t)}};return w("SvelteRegisterBlock",{block:i,id:ie.name,type:"component",source:"",ctx:r}),i}function st(r,e,o){let i,n=O,t=()=>(n(),n=We(l,u=>o(2,i=u)),l);r.$$.on_destroy.push(()=>n());let{$$slots:a={},$$scope:s}=e;ve("UserInfo",a,[]);let{user:f}=e;const{t:l}=ke();oe(l,"t"),t(),r.$$.on_mount.push(function(){f===void 0&&!("user"in e||r.$$.bound[r.$$.props.user])&&console.warn("<UserInfo> was created without expected prop 'user'")});const d=["user"];return Object.keys(e).forEach(u=>{!~d.indexOf(u)&&u.slice(0,2)!=="$$"&&u!=="slot"&&console.warn(`<UserInfo> was created with unknown prop '${u}'`)}),r.$$set=u=>{"user"in u&&o(0,f=u.user)},r.$capture_state=()=>({Card:_e,Content:je,prettyDate:re,getTranslate:ke,user:f,t:l,$t:i}),r.$inject_state=u=>{"user"in u&&o(0,f=u.user)},e&&"$$inject"in e&&r.$inject_state(e.$$inject),[f,l,i]}class Me extends ge{constructor(e){super(e),pe(this,e,st,ie,he,{user:0,t:1}),w("SvelteRegisterComponent",{component:this,tagName:"UserInfo",options:e,id:ie.name})}get user(){throw new Error("<UserInfo>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set user(e){throw new Error("<UserInfo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get t(){return this.$$.ctx[1]}set t(e){throw new Error("<UserInfo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const Be="src/lib/components/users/UserAvatar.svelte";function ce(r){let e,o,i,n;const t={c:function(){e=S("div"),o=S("img"),this.h()},l:function(s){e=E(s,"DIV",{});var f=I(e);o=E(f,"IMG",{class:!0,src:!0,alt:!0}),f.forEach(m),this.h()},h:function(){j(o,"class","rounded-lg sm:max-w-lg max-w-full w-full"),Se(o.src,i=r[1])||j(o,"src",i),j(o,"alt",n="Avatar for "+r[0]),B(o,Be,7,2,174),B(e,Be,6,0,166)},m:function(s,f){R(s,e,f),p(e,o)},p:function(s,[f]){f&2&&!Se(o.src,i=s[1])&&j(o,"src",i),f&1&&n!==(n="Avatar for "+s[0])&&j(o,"alt",n)},i:O,o:O,d:function(s){s&&m(e)}};return w("SvelteRegisterBlock",{block:t,id:ce.name,type:"component",source:"",ctx:r}),t}function ot(r,e,o){let i,{$$slots:n={},$$scope:t}=e;ve("UserAvatar",n,[]);let{avatar:a}=e,{username:s}=e;r.$$.on_mount.push(function(){a===void 0&&!("avatar"in e||r.$$.bound[r.$$.props.avatar])&&console.warn("<UserAvatar> was created without expected prop 'avatar'"),s===void 0&&!("username"in e||r.$$.bound[r.$$.props.username])&&console.warn("<UserAvatar> was created without expected prop 'username'")});const f=["avatar","username"];return Object.keys(e).forEach(l=>{!~f.indexOf(l)&&l.slice(0,2)!=="$$"&&l!=="slot"&&console.warn(`<UserAvatar> was created with unknown prop '${l}'`)}),r.$$set=l=>{"avatar"in l&&o(2,a=l.avatar),"username"in l&&o(0,s=l.username)},r.$capture_state=()=>({assets:ye,avatar:a,username:s,userAvatar:i}),r.$inject_state=l=>{"avatar"in l&&o(2,a=l.avatar),"username"in l&&o(0,s=l.username),"userAvatar"in l&&o(1,i=l.userAvatar)},e&&"$$inject"in e&&r.$inject_state(e.$$inject),r.$$.update=()=>{r.$$.dirty&4&&o(1,i=a||ye+"/images/no_image.webp")},[s,i,a]}class Ne extends ge{constructor(e){super(e),pe(this,e,ot,ce,he,{avatar:2,username:0}),w("SvelteRegisterComponent",{component:this,tagName:"UserAvatar",options:e,id:ce.name})}get avatar(){throw new Error("<UserAvatar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set avatar(e){throw new Error("<UserAvatar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get username(){throw new Error("<UserAvatar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set username(e){throw new Error("<UserAvatar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const T="src/routes/user/[userId]/+page.svelte";function Re(r,e,o){const i=r.slice();return i[9]=e[o],i}function Ie(r,e,o){const i=r.slice();return i[6]=e[o],i}function ae(r){let e,o;e=new Ce({props:{description:r[1].data.getUser.username+" profile",title:r[1].data.getUser.username+" profile"},$$inline:!0});const i={c:function(){G(e.$$.fragment)},l:function(t){L(e.$$.fragment,t)},m:function(t,a){q(e,t,a),o=!0},p:function(t,a){const s={};a&2&&(s.description=t[1].data.getUser.username+" profile"),a&2&&(s.title=t[1].data.getUser.username+" profile"),e.$set(s)},i:function(t){o||(h(e.$$.fragment,t),o=!0)},o:function(t){b(e.$$.fragment,t),o=!1},d:function(t){z(e,t)}};return w("SvelteRegisterBlock",{block:i,id:ae.name,type:"if",source:"(15:2) {#if !$user.fetching && !$user.error && $user.data.getUser}",ctx:r}),i}function Ge(r){let e;const o={c:function(){e=P("404")},l:function(n){e=A(n,"404")},m:function(n,t){R(n,e,t)},p:O,i:O,o:O,d:function(n){n&&m(e)}};return w("SvelteRegisterBlock",{block:o,id:Ge.name,type:"else",source:"(75:0) {:else}",ctx:r}),o}function Le(r){let e,o,i,n=r[1].data.getUser.username+"",t,a,s,f,l,d,u,c,$,x,U,k,_,D,C,v=r[2]&&r[1].data.getUser.id===r[2].id&&le(r);l=new we({props:{variant:"outlined",$$slots:{default:[Qe]},$$scope:{ctx:r}},$$inline:!0}),l.$on("click",r[5]);const be=[Ze,Ye],H=[];function xe(N,g){return N[0]?1:0}c=xe(r),$=H[c]=be[c](r),k=new Ne({props:{avatar:r[1].data.getUser.avatar,username:r[1].data.getUser.username},$$inline:!0}),D=new Me({props:{user:r[1].data.getUser},$$inline:!0});const Ue={c:function(){e=S("div"),o=S("div"),i=S("h1"),t=P(n),a=V(),s=S("div"),v&&v.c(),f=V(),G(l.$$.fragment),d=V(),u=S("div"),$.c(),x=V(),U=S("div"),G(k.$$.fragment),_=V(),G(D.$$.fragment),this.h()},l:function(g){e=E(g,"DIV",{class:!0});var y=I(e);o=E(y,"DIV",{class:!0});var J=I(o);i=E(J,"H1",{class:!0});var Y=I(i);t=A(Y,n),Y.forEach(m),a=M(J),s=E(J,"DIV",{});var K=I(s);v&&v.l(K),f=M(K),L(l.$$.fragment,K),K.forEach(m),J.forEach(m),d=M(y),u=E(y,"DIV",{class:!0});var Q=I(u);$.l(Q),x=M(Q),U=E(Q,"DIV",{class:!0});var ee=I(U);L(k.$$.fragment,ee),_=M(ee),L(D.$$.fragment,ee),ee.forEach(m),Q.forEach(m),y.forEach(m),this.h()},h:function(){j(i,"class","text-4xl font-bold"),B(i,T,28,6,1025),B(s,T,30,6,1098),j(o,"class","flex flex-wrap h-auto justify-between items-center"),B(o,T,27,4,954),j(U,"class","grid grid-cols-1 auto-rows-min gap-8"),B(U,T,68,6,2290),j(u,"class","grid grid-auto-max auto-cols-fr gap-4"),B(u,T,44,4,1472),j(e,"class","grid gap-6 xlx:grid-flow-row"),B(e,T,26,2,907)},m:function(g,y){R(g,e,y),p(e,o),p(o,i),p(i,t),p(o,a),p(o,s),v&&v.m(s,null),p(s,f),q(l,s,null),p(e,d),p(e,u),H[c].m(u,null),p(u,x),p(u,U),q(k,U,null),p(U,_),q(D,U,null),C=!0},p:function(g,y){(!C||y&2)&&n!==(n=g[1].data.getUser.username+"")&&te(t,n),g[2]&&g[1].data.getUser.id===g[2].id?v?(v.p(g,y),y&6&&h(v,1)):(v=le(g),v.c(),h(v,1),v.m(s,f)):v&&(W(),b(v,1,1,()=>{v=null}),F());const J={};y&4097&&(J.$$scope={dirty:y,ctx:g}),l.$set(J);let Y=c;c=xe(g),c===Y?H[c].p(g,y):(W(),b(H[Y],1,1,()=>{H[Y]=null}),F(),$=H[c],$?$.p(g,y):($=H[c]=be[c](g),$.c()),h($,1),$.m(u,x));const K={};y&2&&(K.avatar=g[1].data.getUser.avatar),y&2&&(K.username=g[1].data.getUser.username),k.$set(K);const Q={};y&2&&(Q.user=g[1].data.getUser),D.$set(Q)},i:function(g){C||(h(v),h(l.$$.fragment,g),h($),h(k.$$.fragment,g),h(D.$$.fragment,g),C=!0)},o:function(g){b(v),b(l.$$.fragment,g),b($),b(k.$$.fragment,g),b(D.$$.fragment,g),C=!1},d:function(g){g&&m(e),v&&v.d(),z(l),H[c].d(),z(k),z(D)}};return w("SvelteRegisterBlock",{block:Ue,id:Le.name,type:"if",source:"(26:29) ",ctx:r}),Ue}function qe(r){let e,o,i=r[1].error.message+"",n;const t={c:function(){e=S("p"),o=P("Oh no... "),n=P(i),this.h()},l:function(s){e=E(s,"P",{});var f=I(e);o=A(f,"Oh no... "),n=A(f,i),f.forEach(m),this.h()},h:function(){B(e,T,24,2,837)},m:function(s,f){R(s,e,f),p(e,o),p(e,n)},p:function(s,f){f&2&&i!==(i=s[1].error.message+"")&&te(n,i)},i:O,o:O,d:function(s){s&&m(e)}};return w("SvelteRegisterBlock",{block:t,id:qe.name,type:"if",source:"(24:22) ",ctx:r}),t}function ze(r){let e,o;const i={c:function(){e=S("p"),o=P("Loading..."),this.h()},l:function(t){e=E(t,"P",{});var a=I(e);o=A(a,"Loading..."),a.forEach(m),this.h()},h:function(){B(e,T,22,2,794)},m:function(t,a){R(t,e,a),p(e,o)},p:O,i:O,o:O,d:function(t){t&&m(e)}};return w("SvelteRegisterBlock",{block:i,id:ze.name,type:"if",source:"(22:0) {#if $user.fetching}",ctx:r}),i}function le(r){let e,o;e=new we({props:{variant:"outlined",href:Pe+"/settings",$$slots:{default:[He]},$$scope:{ctx:r}},$$inline:!0});const i={c:function(){G(e.$$.fragment)},l:function(t){L(e.$$.fragment,t)},m:function(t,a){q(e,t,a),o=!0},p:function(t,a){const s={};a&4096&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i:function(t){o||(h(e.$$.fragment,t),o=!0)},o:function(t){b(e.$$.fragment,t),o=!1},d:function(t){z(e,t)}};return w("SvelteRegisterBlock",{block:i,id:le.name,type:"if",source:"(32:8) {#if $me && $user.data.getUser.id === $me.id}",ctx:r}),i}function He(r){let e;const o={c:function(){e=P("Settings")},l:function(n){e=A(n,"Settings")},m:function(n,t){R(n,e,t)},d:function(n){n&&m(e)}};return w("SvelteRegisterBlock",{block:o,id:He.name,type:"slot",source:'(33:10) <Button variant=\\"outlined\\" href=\\"{base}/settings\\">',ctx:r}),o}function Ke(r){let e;const o={c:function(){e=P("Mods")},l:function(n){e=A(n,"Mods")},m:function(n,t){R(n,e,t)},d:function(n){n&&m(e)}};return w("SvelteRegisterBlock",{block:o,id:Ke.name,type:"else",source:"(39:10) {:else}",ctx:r}),o}function Je(r){let e;const o={c:function(){e=P("Guides")},l:function(n){e=A(n,"Guides")},m:function(n,t){R(n,e,t)},d:function(n){n&&m(e)}};return w("SvelteRegisterBlock",{block:o,id:Je.name,type:"if",source:"(37:10) {#if !guidesTab}",ctx:r}),o}function Qe(r){let e;function o(a,s){return a[0]?Ke:Je}let i=o(r),n=i(r);const t={c:function(){n.c(),e=Z()},l:function(s){n.l(s),e=Z()},m:function(s,f){n.m(s,f),R(s,e,f)},p:function(s,f){i!==(i=o(s))&&(n.d(1),n=i(s),n&&(n.c(),n.m(e.parentNode,e)))},d:function(s){n.d(s),s&&m(e)}};return w("SvelteRegisterBlock",{block:t,id:Qe.name,type:"slot",source:'(36:8) <Button variant=\\"outlined\\" on:click={() => (guidesTab = !guidesTab)}>',ctx:r}),t}function Ye(r){let e,o,i,n=r[1].data.getUser.guides;ne(n);let t=[];for(let l=0;l<n.length;l+=1)t[l]=ue(Re(r,n,l));const a=l=>b(t[l],1,1,()=>{t[l]=null});let s=r[1].data.getUser.guides.length===0&&fe(r);const f={c:function(){e=S("div");for(let d=0;d<t.length;d+=1)t[d].c();o=V(),s&&s.c(),this.h()},l:function(d){e=E(d,"DIV",{class:!0});var u=I(e);for(let c=0;c<t.length;c+=1)t[c].l(u);o=M(u),s&&s.l(u),u.forEach(m),this.h()},h:function(){j(e,"class","grid 3xl:grid-cols-3 2xl:grid-cols-2 grid-cols-1 gap-4 h-fit"),B(e,T,57,8,1906)},m:function(d,u){R(d,e,u);for(let c=0;c<t.length;c+=1)t[c]&&t[c].m(e,null);p(e,o),s&&s.m(e,null),i=!0},p:function(d,u){if(u&2){n=d[1].data.getUser.guides,ne(n);let c;for(c=0;c<n.length;c+=1){const $=Re(d,n,c);t[c]?(t[c].p($,u),h(t[c],1)):(t[c]=ue($),t[c].c(),h(t[c],1),t[c].m(e,o))}for(W(),c=n.length;c<t.length;c+=1)a(c);F()}d[1].data.getUser.guides.length===0?s||(s=fe(d),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},i:function(d){if(!i){for(let u=0;u<n.length;u+=1)h(t[u]);i=!0}},o:function(d){t=t.filter(Boolean);for(let u=0;u<t.length;u+=1)b(t[u]);i=!1},d:function(d){d&&m(e),Ae(t,d),s&&s.d()}};return w("SvelteRegisterBlock",{block:f,id:Ye.name,type:"else",source:"(57:6) {:else}",ctx:r}),f}function Ze(r){let e,o,i,n=r[1].data.getUser.mods;ne(n);let t=[];for(let l=0;l<n.length;l+=1)t[l]=de(Ie(r,n,l));const a=l=>b(t[l],1,1,()=>{t[l]=null});let s=r[1].data.getUser.mods.length===0&&$e(r);const f={c:function(){e=S("div");for(let d=0;d<t.length;d+=1)t[d].c();o=V(),s&&s.c(),this.h()},l:function(d){e=E(d,"DIV",{class:!0});var u=I(e);for(let c=0;c<t.length;c+=1)t[c].l(u);o=M(u),s&&s.l(u),u.forEach(m),this.h()},h:function(){j(e,"class","grid 3xl:grid-cols-3 2xl:grid-cols-2 grid-cols-1 gap-4 h-fit"),B(e,T,46,8,1555)},m:function(d,u){R(d,e,u);for(let c=0;c<t.length;c+=1)t[c]&&t[c].m(e,null);p(e,o),s&&s.m(e,null),i=!0},p:function(d,u){if(u&2){n=d[1].data.getUser.mods,ne(n);let c;for(c=0;c<n.length;c+=1){const $=Ie(d,n,c);t[c]?(t[c].p($,u),h(t[c],1)):(t[c]=de($),t[c].c(),h(t[c],1),t[c].m(e,o))}for(W(),c=n.length;c<t.length;c+=1)a(c);F()}d[1].data.getUser.mods.length===0?s||(s=$e(d),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},i:function(d){if(!i){for(let u=0;u<n.length;u+=1)h(t[u]);i=!0}},o:function(d){t=t.filter(Boolean);for(let u=0;u<t.length;u+=1)b(t[u]);i=!1},d:function(d){d&&m(e),Ae(t,d),s&&s.d()}};return w("SvelteRegisterBlock",{block:f,id:Ze.name,type:"if",source:"(46:6) {#if !guidesTab}",ctx:r}),f}function ue(r){let e,o;e=new Oe({props:{guide:r[9],logo:r[1].data.getUser.avatar},$$inline:!0});const i={c:function(){G(e.$$.fragment)},l:function(t){L(e.$$.fragment,t)},m:function(t,a){q(e,t,a),o=!0},p:function(t,a){const s={};a&2&&(s.guide=t[9]),a&2&&(s.logo=t[1].data.getUser.avatar),e.$set(s)},i:function(t){o||(h(e.$$.fragment,t),o=!0)},o:function(t){b(e.$$.fragment,t),o=!1},d:function(t){z(e,t)}};return w("SvelteRegisterBlock",{block:i,id:ue.name,type:"each",source:"(59:10) {#each $user.data.getUser.guides as guide}",ctx:r}),i}function fe(r){let e;const o={c:function(){e=P("User has no guides")},l:function(n){e=A(n,"User has no guides")},m:function(n,t){R(n,e,t)},d:function(n){n&&m(e)}};return w("SvelteRegisterBlock",{block:o,id:fe.name,type:"if",source:"(63:10) {#if $user.data.getUser.guides.length === 0}",ctx:r}),o}function de(r){let e,o;e=new De({props:{mod:r[6].mod},$$inline:!0});const i={c:function(){G(e.$$.fragment)},l:function(t){L(e.$$.fragment,t)},m:function(t,a){q(e,t,a),o=!0},p:function(t,a){const s={};a&2&&(s.mod=t[6].mod),e.$set(s)},i:function(t){o||(h(e.$$.fragment,t),o=!0)},o:function(t){b(e.$$.fragment,t),o=!1},d:function(t){z(e,t)}};return w("SvelteRegisterBlock",{block:i,id:de.name,type:"each",source:"(48:10) {#each $user.data.getUser.mods as mod}",ctx:r}),i}function $e(r){let e;const o={c:function(){e=P("User has no mods")},l:function(n){e=A(n,"User has no mods")},m:function(n,t){R(n,e,t)},d:function(n){n&&m(e)}};return w("SvelteRegisterBlock",{block:o,id:$e.name,type:"if",source:"(52:10) {#if $user.data.getUser.mods.length === 0}",ctx:r}),o}function me(r){let e,o,i,n,t,a,s=!r[1].fetching&&!r[1].error&&r[1].data.getUser&&ae(r);const f=[ze,qe,Le,Ge],l=[];function d(c,$){return c[1].fetching?0:c[1].error?1:c[1].data.getUser?2:3}i=d(r),n=l[i]=f[i](r);const u={c:function(){s&&s.c(),e=Z(),o=V(),n.c(),t=Z()},l:function($){const x=Xe("svelte-sx4i20",document.head);s&&s.l(x),e=Z(),x.forEach(m),o=M($),n.l($),t=Z()},m:function($,x){s&&s.m(document.head,null),p(document.head,e),R($,o,x),l[i].m($,x),R($,t,x),a=!0},p:function($,[x]){!$[1].fetching&&!$[1].error&&$[1].data.getUser?s?(s.p($,x),x&2&&h(s,1)):(s=ae($),s.c(),h(s,1),s.m(e.parentNode,e)):s&&(W(),b(s,1,1,()=>{s=null}),F());let U=i;i=d($),i===U?l[i].p($,x):(W(),b(l[U],1,1,()=>{l[U]=null}),F(),n=l[i],n?n.p($,x):(n=l[i]=f[i]($),n.c()),h(n,1),n.m(t.parentNode,t))},i:function($){a||(h(s),h(n),a=!0)},o:function($){b(s),b(n),a=!1},d:function($){s&&s.d($),m(e),$&&m(o),l[i].d($),$&&m(t)}};return w("SvelteRegisterBlock",{block:u,id:me.name,type:"component",source:"",ctx:r}),u}function rt(r,e,o){let i,n;oe(se,"me"),Ee(r,se,c=>o(2,n=c));let{$$slots:t={},$$scope:a}=e;ve("Page",t,[]);let{data:s}=e;const{user:f}=s;oe(f,"user"),Ee(r,f,c=>o(1,i=c));let l=!1;r.$$.on_mount.push(function(){s===void 0&&!("data"in e||r.$$.bound[r.$$.props.data])&&console.warn("<Page> was created without expected prop 'data'")});const d=["data"];Object.keys(e).forEach(c=>{!~d.indexOf(c)&&c.slice(0,2)!=="$$"&&c!=="slot"&&console.warn(`<Page> was created with unknown prop '${c}'`)});const u=()=>o(0,l=!l);return r.$$set=c=>{"data"in c&&o(4,s=c.data)},r.$capture_state=()=>({Button:we,UserInfo:Me,UserAvatar:Ne,ModCard:De,GuideCard:Oe,MetaDescriptors:Ce,me:se,base:Pe,data:s,user:f,guidesTab:l,$user:i,$me:n}),r.$inject_state=c=>{"data"in c&&o(4,s=c.data),"guidesTab"in c&&o(0,l=c.guidesTab)},e&&"$$inject"in e&&r.$inject_state(e.$$inject),[l,i,n,f,s,u]}class gt extends ge{constructor(e){super(e),pe(this,e,rt,me,he,{data:4}),w("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:me.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(e){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{gt as component,mt as universal};
//# sourceMappingURL=29.2159915a.js.map
