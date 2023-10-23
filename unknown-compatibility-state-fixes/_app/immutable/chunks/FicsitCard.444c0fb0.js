import{S as xe,i as ye,s as Ce,d as R,bo as ae,v as Ee,bm as W,bp as fe,bS as ue,b8 as de,b1 as me,aN as te,aZ as ne,w as T,a8 as H,ab as Z,ae as Q,p as B,t as D,aj as G,x as E,a6 as A,y as S,z as V,q as $,a9 as O,ac as w,C as F,b2 as _,l as P,ad as y,af as Se,E as q,F as z,G as M,L as J,N as K,O as se,k as U,m as Fe,n as Ne,bj as ie,P as Be}from"./vendor.8741eb95.js";const N="src/lib/components/general/FicsitCard.svelte",Pe=i=>({}),oe=i=>({}),Re=i=>({}),ce=i=>({}),Ve=i=>({}),re=i=>({}),De=i=>({}),le=i=>({});function pe(i){let e,n,o;const r={c:function(){e=E("img"),this.h()},l:function(c){e=S(c,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h:function(){ie(e.src,n=i[4])||w(e,"src",n),w(e,"alt",o=i[3]+" Logo"),w(e,"class","logo max-w-full max-h-full s-ZL2maQw1Napu"),F(e,N,41,10,1343)},m:function(c,f){P(c,e,f)},p:function(c,f){f&16&&!ie(e.src,n=c[4])&&w(e,"src",n),f&8&&o!==(o=c[3]+" Logo")&&w(e,"alt",o)},d:function(c){c&&$(e)}};return R("SvelteRegisterBlock",{block:r,id:pe.name,type:"else",source:"(41:8) {:else}",ctx:i}),r}function $e(i){let e;const n={c:function(){e=E("div"),this.h()},l:function(r){e=S(r,"DIV",{class:!0}),V(e).forEach($),this.h()},h:function(){w(e,"class","bg-gray-500 logo min-w-full min-h-full max-w-full max-h-full s-ZL2maQw1Napu"),F(e,N,39,10,1240)},m:function(r,t){P(r,e,t)},p:Be,d:function(r){r&&$(e)}};return R("SvelteRegisterBlock",{block:n,id:$e.name,type:"if",source:"(39:8) {#if fake}",ctx:i}),n}function X(i){let e,n;const o={c:function(){e=E("span"),n=J("Card stats"),this.h()},l:function(t){e=S(t,"SPAN",{class:!0});var c=V(e);n=K(c,"Card stats"),c.forEach($),this.h()},h:function(){w(e,"class","font-flow"),F(e,N,55,16,1829)},m:function(t,c){P(t,e,c),y(e,n)},d:function(t){t&&$(e)}};return R("SvelteRegisterBlock",{block:o,id:X.name,type:"if",source:"(55:14) {#if fake}",ctx:i}),o}function he(i){let e,n=i[1]&&X(i);const o={c:function(){n&&n.c(),e=U()},l:function(t){n&&n.l(t),e=U()},m:function(t,c){n&&n.m(t,c),P(t,e,c)},p:function(t,c){t[1]?n||(n=X(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d:function(t){n&&n.d(t),t&&$(e)}};return R("SvelteRegisterBlock",{block:o,id:he.name,type:"fallback",source:"(54:31)                ",ctx:i}),o}function ge(i){let e,n,o,r,t,c,f,a,u,d,m;const b=i[10].stats,x=T(b,i,i[12],le),p=x||he(i),k=i[10].tags,g=T(k,i,i[12],re),v={c:function(){e=E("div"),n=E("a"),o=E("span"),r=J(i[3]),t=A(),c=E("h5"),p&&p.c(),f=A(),g&&g.c(),a=A(),u=E("div"),d=J(i[2]),this.h()},l:function(s){e=S(s,"DIV",{class:!0});var l=V(e);n=S(l,"A",{href:!0,class:!0});var h=V(n);o=S(h,"SPAN",{class:!0});var I=V(o);r=K(I,i[3]),I.forEach($),h.forEach($),t=O(l),c=S(l,"H5",{class:!0});var L=V(c);p&&p.l(L),L.forEach($),f=O(l),g&&g.l(l),l.forEach($),a=O(s),u=S(s,"DIV",{class:!0});var j=V(u);d=K(j,i[2]),j.forEach($),this.h()},h:function(){w(o,"class","text-xl break-words"),F(o,N,49,12,1649),w(n,"href",i[0]),w(n,"class","text-white"),F(n,N,48,10,1602),w(c,"class","text-sm m-0"),F(c,N,52,10,1731),w(e,"class","mb-2"),F(e,N,47,8,1573),w(u,"class","break-words"),_(u,"font-flow",i[1]),F(u,N,63,8,1983)},m:function(s,l){P(s,e,l),y(e,n),y(n,o),y(o,r),y(e,t),y(e,c),p&&p.m(c,null),y(e,f),g&&g.m(e,null),P(s,a,l),P(s,u,l),y(u,d),m=!0},p:function(s,l){(!m||l&8)&&se(r,s[3]),(!m||l&1)&&w(n,"href",s[0]),x?x.p&&(!m||l&4096)&&q(x,b,s,s[12],m?M(b,s[12],l,De):z(s[12]),le):p&&p.p&&(!m||l&2)&&p.p(s,m?l:-1),g&&g.p&&(!m||l&4096)&&q(g,k,s,s[12],m?M(k,s[12],l,Ve):z(s[12]),re),(!m||l&4)&&se(d,s[2]),(!m||l&2)&&_(u,"font-flow",s[1])},i:function(s){m||(B(p,s),B(g,s),m=!0)},o:function(s){D(p,s),D(g,s),m=!1},d:function(s){s&&$(e),p&&p.d(s),g&&g.d(s),s&&$(a),s&&$(u)}};return R("SvelteRegisterBlock",{block:v,id:ge.name,type:"slot",source:'(47:6) <Content class=\\"flex flex-col pb-0\\">',ctx:i}),v}function Y(i){let e,n,o;e=new de({props:{href:i[0],"aria-label":"View "+i[3],title:"View "+i[3],$$slots:{default:[ke]},$$scope:{ctx:i}},$$inline:!0});const r=i[10].actions,t=T(r,i,i[12],ce),c={c:function(){H(e.$$.fragment),n=A(),t&&t.c()},l:function(a){Z(e.$$.fragment,a),n=O(a),t&&t.l(a)},m:function(a,u){Q(e,a,u),P(a,n,u),t&&t.m(a,u),o=!0},p:function(a,u){const d={};u&1&&(d.href=a[0]),u&8&&(d["aria-label"]="View "+a[3]),u&8&&(d.title="View "+a[3]),u&4096&&(d.$$scope={dirty:u,ctx:a}),e.$set(d),t&&t.p&&(!o||u&4096)&&q(t,r,a,a[12],o?M(r,a[12],u,Re):z(a[12]),ce)},i:function(a){o||(B(e.$$.fragment,a),B(t,a),o=!0)},o:function(a){D(e.$$.fragment,a),D(t,a),o=!1},d:function(a){G(e,a),a&&$(n),t&&t.d(a)}};return R("SvelteRegisterBlock",{block:c,id:Y.name,type:"if",source:"(70:8) {#if !fake}",ctx:i}),c}function we(i){let e;const n={c:function(){e=J("info")},l:function(r){e=K(r,"info")},m:function(r,t){P(r,e,t)},d:function(r){r&&$(e)}};return R("SvelteRegisterBlock",{block:n,id:we.name,type:"slot",source:'(72:12) <Icon class=\\"material-icons\\">',ctx:i}),n}function ke(i){let e,n;e=new me({props:{class:"material-icons",$$slots:{default:[we]},$$scope:{ctx:i}},$$inline:!0});const o={c:function(){H(e.$$.fragment)},l:function(t){Z(e.$$.fragment,t)},m:function(t,c){Q(e,t,c),n=!0},p:function(t,c){const f={};c&4096&&(f.$$scope={dirty:c,ctx:t}),e.$set(f)},i:function(t){n||(B(e.$$.fragment,t),n=!0)},o:function(t){D(e.$$.fragment,t),n=!1},d:function(t){G(e,t)}};return R("SvelteRegisterBlock",{block:o,id:ke.name,type:"slot",source:'(71:10) <IconButton href={link} aria-label=\\"View {renderedName}\\" title=\\"View {renderedName}\\">',ctx:i}),o}function ve(i){let e,n,o=!i[1]&&Y(i);const r={c:function(){o&&o.c(),e=U()},l:function(c){o&&o.l(c),e=U()},m:function(c,f){o&&o.m(c,f),P(c,e,f),n=!0},p:function(c,f){c[1]?o&&(Fe(),D(o,1,1,()=>{o=null}),Ne()):o?(o.p(c,f),f&2&&B(o,1)):(o=Y(c),o.c(),B(o,1),o.m(e.parentNode,e))},i:function(c){n||(B(o),n=!0)},o:function(c){D(o),n=!1},d:function(c){o&&o.d(c),c&&$(e)}};return R("SvelteRegisterBlock",{block:r,id:ve.name,type:"slot",source:'(69:6) <Actions class=\\"self-end\\">',ctx:i}),r}function be(i){let e,n,o,r,t,c,f,a,u,d,m,b;function x(s,l){return s[1]?$e:pe}let p=x(i),k=p(i);c=new fe({props:{class:"flex flex-col pb-0",$$slots:{default:[ge]},$$scope:{ctx:i}},$$inline:!0}),a=new ue({props:{class:"self-end",$$slots:{default:[ve]},$$scope:{ctx:i}},$$inline:!0});const g=i[10].outer,v=T(g,i,i[12],oe),C={c:function(){e=E("div"),n=E("div"),o=E("a"),k.c(),r=A(),t=E("div"),H(c.$$.fragment),f=A(),H(a.$$.fragment),u=A(),v&&v.c(),this.h()},l:function(l){e=S(l,"DIV",{class:!0});var h=V(e);n=S(h,"DIV",{class:!0});var I=V(n);o=S(I,"A",{href:!0});var L=V(o);k.l(L),L.forEach($),I.forEach($),r=O(h),t=S(h,"DIV",{class:!0});var j=V(t);Z(c.$$.fragment,j),f=O(j),Z(a.$$.fragment,j),j.forEach($),h.forEach($),u=O(l),v&&v.l(l),this.h()},h:function(){w(o,"href",i[0]),F(o,N,37,6,1164),w(n,"class","cursor-pointer card-image-container"),F(n,N,36,4,1108),w(t,"class","w-full flex flex-col justify-between"),F(t,N,45,4,1471),w(e,"class","grid grid-max-auto sm:grid-cols-2 grid-cols-1 justify-items-center s-ZL2maQw1Napu"),_(e,"text-gray-500",i[1]),_(e,"font-flow",i[1]),F(e,N,32,2,961)},m:function(l,h){P(l,e,h),y(e,n),y(n,o),k.m(o,null),y(e,r),y(e,t),Q(c,t,null),y(t,f),Q(a,t,null),P(l,u,h),v&&v.m(l,h),d=!0,m||(b=Se(o,"keypress",i[11],!1,!1,!1,!1),m=!0)},p:function(l,h){p===(p=x(l))&&k?k.p(l,h):(k.d(1),k=p(l),k&&(k.c(),k.m(o,null))),(!d||h&1)&&w(o,"href",l[0]);const I={};h&4111&&(I.$$scope={dirty:h,ctx:l}),c.$set(I);const L={};h&4107&&(L.$$scope={dirty:h,ctx:l}),a.$set(L),(!d||h&2)&&_(e,"text-gray-500",l[1]),(!d||h&2)&&_(e,"font-flow",l[1]),v&&v.p&&(!d||h&4096)&&q(v,g,l,l[12],d?M(g,l[12],h,Pe):z(l[12]),oe)},i:function(l){d||(B(c.$$.fragment,l),B(a.$$.fragment,l),B(v,l),d=!0)},o:function(l){D(c.$$.fragment,l),D(a.$$.fragment,l),D(v,l),d=!1},d:function(l){l&&$(e),k.d(),G(c),G(a),l&&$(u),v&&v.d(l),m=!1,b()}};return R("SvelteRegisterBlock",{block:C,id:be.name,type:"slot",source:'(32:0) <Card class=\\"h-full overflow-hidden\\" on:mouseover={onOver} on:mouseout={onOut}>',ctx:i}),C}function ee(i){let e,n;e=new ae({props:{class:"h-full overflow-hidden",$$slots:{default:[be]},$$scope:{ctx:i}},$$inline:!0}),e.$on("mouseover",i[5]),e.$on("mouseout",i[6]);const o={c:function(){H(e.$$.fragment)},l:function(t){Z(e.$$.fragment,t)},m:function(t,c){Q(e,t,c),n=!0},p:function(t,[c]){const f={};c&4127&&(f.$$scope={dirty:c,ctx:t}),e.$set(f)},i:function(t){n||(B(e.$$.fragment,t),n=!0)},o:function(t){D(e.$$.fragment,t),n=!1},d:function(t){G(e,t)}};return R("SvelteRegisterBlock",{block:o,id:ee.name,type:"component",source:"",ctx:i}),o}function Ie(i,e,n){let o,r,t,{$$slots:c={},$$scope:f}=e;Ee("FicsitCard",c,["stats","tags","actions","outer"]);let{name:a=""}=e,{logo:u=W+"/images/no_image.webp"}=e,{description:d=""}=e,{link:m="/"}=e,{fake:b=!1}=e,x=!1,p;const k=()=>{x||(p=setTimeout(()=>{x=!0,ne(m)},250))},g=()=>{x||clearTimeout(p)},v=["name","logo","description","link","fake"];Object.keys(e).forEach(s=>{!~v.indexOf(s)&&s.slice(0,2)!=="$$"&&s!=="slot"&&console.warn(`<FicsitCard> was created with unknown prop '${s}'`)});const C=()=>te(m);return i.$$set=s=>{"name"in s&&n(7,a=s.name),"logo"in s&&n(8,u=s.logo),"description"in s&&n(9,d=s.description),"link"in s&&n(0,m=s.link),"fake"in s&&n(1,b=s.fake),"$$scope"in s&&n(12,f=s.$$scope)},i.$capture_state=()=>({assets:W,Card:ae,Content:fe,Actions:ue,IconButton:de,Icon:me,goto:te,preloadData:ne,name:a,logo:u,description:d,link:m,fake:b,preloaded:x,timeoutHandle:p,onOver:k,onOut:g,renderedDescription:t,renderedName:r,renderedLogo:o}),i.$inject_state=s=>{"name"in s&&n(7,a=s.name),"logo"in s&&n(8,u=s.logo),"description"in s&&n(9,d=s.description),"link"in s&&n(0,m=s.link),"fake"in s&&n(1,b=s.fake),"preloaded"in s&&(x=s.preloaded),"timeoutHandle"in s&&(p=s.timeoutHandle),"renderedDescription"in s&&n(2,t=s.renderedDescription),"renderedName"in s&&n(3,r=s.renderedName),"renderedLogo"in s&&n(4,o=s.renderedLogo)},e&&"$$inject"in e&&i.$inject_state(e.$$inject),i.$$.update=()=>{i.$$.dirty&256&&n(4,o=u||W+"/images/no_image.webp"),i.$$.dirty&130&&n(3,r=a||b&&"Card Name"),i.$$.dirty&514&&n(2,t=d||b&&"Short card description")},[m,b,t,r,o,k,g,a,u,d,c,C,f]}class je extends xe{constructor(e){super(e),ye(this,e,Ie,ee,Ce,{name:7,logo:8,description:9,link:0,fake:1}),R("SvelteRegisterComponent",{component:this,tagName:"FicsitCard",options:e,id:ee.name})}get name(){throw new Error("<FicsitCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set name(e){throw new Error("<FicsitCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get logo(){throw new Error("<FicsitCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set logo(e){throw new Error("<FicsitCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get description(){throw new Error("<FicsitCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set description(e){throw new Error("<FicsitCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get link(){throw new Error("<FicsitCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set link(e){throw new Error("<FicsitCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get fake(){throw new Error("<FicsitCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set fake(e){throw new Error("<FicsitCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{je as F};
//# sourceMappingURL=FicsitCard.444c0fb0.js.map
