import{S as it,i as nt,s as ot,d as v,v as st,f as V,n as w,u as h,j as d,e as B,g as I,h as _,N as J,l as St,ar as O,m as j,W as S,X as P,Q as k,Y as M,ak as G,a1 as vt,x as xt,b as U,k as L,p as Nt,t as Z,q as Wt,r as tt,a7 as ct,J as lt,L as rt,O as pt,R as mt,a8 as Pt,a9 as Bt,aa as It}from"./vendor.8c8f6f37.js";import{t as C}from"./graphql.80ff4abf.js";import{m as et}from"./markdown.f2d4b0f7.js";const Mt="src/lib/components/mods/compatibility/OutdatedBanner.svelte";function ft(e){let t;const i={c:function(){t=B("div"),this.h()},l:function(c){t=I(c,"DIV",{class:!0,style:!0}),_(t).forEach(d),this.h()},h:function(){J(t,"class","mod-outdated-stripe"),St(t,"max-width","inherit"),O(t,"mod-damaged",e[1]===C.Damaged),O(t,"mod-broken",e[1]===C.Broken),O(t,"mod-logo-outdated",e[0]),j(t,Mt,33,2,780)},m:function(c,o){w(c,t,o)},p:function(c,o){o&2&&O(t,"mod-damaged",c[1]===C.Damaged),o&2&&O(t,"mod-broken",c[1]===C.Broken),o&1&&O(t,"mod-logo-outdated",c[0])},d:function(c){c&&d(t)}};return v("SvelteRegisterBlock",{block:i,id:ft.name,type:"if",source:"(29:0) {#if !works}",ctx:e}),i}function ut(e){let t,i=!e[2]&&ft(e);const s={c:function(){i&&i.c(),t=V()},l:function(o){i&&i.l(o),t=V()},m:function(o,n){i&&i.m(o,n),w(o,t,n)},p:function(o,[n]){o[2]?i&&(i.d(1),i=null):i?i.p(o,n):(i=ft(o),i.c(),i.m(t.parentNode,t))},i:h,o:h,d:function(o){o&&d(t),i&&i.d(o)}};return v("SvelteRegisterBlock",{block:s,id:ut.name,type:"component",source:"",ctx:e}),s}function Ut(e,t,i){let s,{$$slots:c={},$$scope:o}=t;st("OutdatedBanner",c,[]);let{compatibility:n}=t,{logo:r=!1}=t;function m(l){const u=l.EA.state;return u==C.Broken?u:u==C.Works||l.EXP.state!=C.Works?l.EXP.state:u}let a=C.Works;e.$$.on_mount.push(function(){n===void 0&&!("compatibility"in t||e.$$.bound[e.$$.props.compatibility])&&console.warn("<OutdatedBanner> was created without expected prop 'compatibility'")});const f=["compatibility","logo"];return Object.keys(t).forEach(l=>{!~f.indexOf(l)&&l.slice(0,2)!=="$$"&&l!=="slot"&&console.warn(`<OutdatedBanner> was created with unknown prop '${l}'`)}),e.$$set=l=>{"compatibility"in l&&i(3,n=l.compatibility),"logo"in l&&i(0,r=l.logo)},e.$capture_state=()=>({CompatibilityState:C,compatibility:n,logo:r,Worst:m,worst:a,works:s}),e.$inject_state=l=>{"compatibility"in l&&i(3,n=l.compatibility),"logo"in l&&i(0,r=l.logo),"worst"in l&&i(1,a=l.worst),"works"in l&&i(2,s=l.works)},t&&"$$inject"in t&&e.$inject_state(t.$$inject),e.$$.update=()=>{e.$$.dirty&8&&(n?i(1,a=m(n)):i(1,a=C.Works)),e.$$.dirty&2&&i(2,s=a===C.Works)},[r,a,s,n]}class Kt extends it{constructor(t){super(t),nt(this,t,Ut,ut,ot,{compatibility:3,logo:0}),v("SvelteRegisterComponent",{component:this,tagName:"OutdatedBanner",options:t,id:ut.name})}get compatibility(){throw new Error("<OutdatedBanner>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set compatibility(t){throw new Error("<OutdatedBanner>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get logo(){throw new Error("<OutdatedBanner>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set logo(t){throw new Error("<OutdatedBanner>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const Lt="src/lib/components/mods/compatibility/CompatibilityIcon.svelte";function dt(e){let t,i;const s={c:function(){t=B("p"),i=S(e[1]),this.h()},l:function(o){t=I(o,"P",{class:!0});var n=_(t);i=P(n,e[1]),n.forEach(d),this.h()},h:function(){J(t,"class","material-icons text-sm"),O(t,"mod-state-works",e[0]?.state===C.Works),O(t,"mod-state-damaged",e[0]?.state===C.Damaged),O(t,"mod-state-broken",e[0]?.state===C.Broken),O(t,"mod-state-unknown",!e[0]),j(t,Lt,12,0,210)},m:function(o,n){w(o,t,n),k(t,i)},p:function(o,[n]){n&2&&M(i,o[1]),n&1&&O(t,"mod-state-works",o[0]?.state===C.Works),n&1&&O(t,"mod-state-damaged",o[0]?.state===C.Damaged),n&1&&O(t,"mod-state-broken",o[0]?.state===C.Broken),n&1&&O(t,"mod-state-unknown",!o[0])},i:h,o:h,d:function(o){o&&d(t)}};return v("SvelteRegisterBlock",{block:s,id:dt.name,type:"component",source:"",ctx:e}),s}function Ft(e,t,i){let{$$slots:s={},$$scope:c}=t;st("CompatibilityIcon",s,[]);let{compatibility:o=null}=t,{EXP:n=!1}=t,r="rocket_launch";n&&(r="science");const m=["compatibility","EXP"];return Object.keys(t).forEach(a=>{!~m.indexOf(a)&&a.slice(0,2)!=="$$"&&a!=="slot"&&console.warn(`<CompatibilityIcon> was created with unknown prop '${a}'`)}),e.$$set=a=>{"compatibility"in a&&i(0,o=a.compatibility),"EXP"in a&&i(2,n=a.EXP)},e.$capture_state=()=>({CompatibilityState:C,compatibility:o,EXP:n,iconText:r}),e.$inject_state=a=>{"compatibility"in a&&i(0,o=a.compatibility),"EXP"in a&&i(2,n=a.EXP),"iconText"in a&&i(1,r=a.iconText)},t&&"$$inject"in t&&e.$inject_state(t.$$inject),[o,r,n]}class Zt extends it{constructor(t){super(t),nt(this,t,Ft,dt,ot,{compatibility:0,EXP:2}),v("SvelteRegisterComponent",{component:this,tagName:"CompatibilityIcon",options:t,id:dt.name})}get compatibility(){throw new Error("<CompatibilityIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set compatibility(t){throw new Error("<CompatibilityIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get EXP(){throw new Error("<CompatibilityIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set EXP(t){throw new Error("<CompatibilityIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const Jt="src/lib/components/mods/compatibility/CompatibilityStateText.svelte";function bt(e){let t,i=e[2](`compatibility-info.state.${e[3].toString().toLowerCase()}`)+"",s;const c={c:function(){t=B("p"),s=S(i),this.h()},l:function(n){t=I(n,"P",{class:!0});var r=_(t);s=P(r,i),r.forEach(d),this.h()},h:function(){J(t,"class",e[4](e[3])+" mod-state"),j(t,Jt,12,2,265)},m:function(n,r){w(n,t,r),k(t,s)},p:function(n,r){r&4&&i!==(i=n[2](`compatibility-info.state.${n[3].toString().toLowerCase()}`)+"")&&M(s,i)},d:function(n){n&&d(t)}};return v("SvelteRegisterBlock",{block:c,id:bt.name,type:"if",source:"(8:0) {#if state}",ctx:e}),c}function ht(e){let t,i=e[0]&&bt(e);const s={c:function(){i&&i.c(),t=V()},l:function(o){i&&i.l(o),t=V()},m:function(o,n){i&&i.m(o,n),w(o,t,n)},p:function(o,[n]){o[0]?i?i.p(o,n):(i=bt(o),i.c(),i.m(t.parentNode,t)):i&&(i.d(1),i=null)},i:h,o:h,d:function(o){o&&d(t),i&&i.d(o)}};return v("SvelteRegisterBlock",{block:s,id:ht.name,type:"component",source:"",ctx:e}),s}function qt(e,t,i){let s,c=h,o=()=>(c(),c=xt(a,b=>i(2,s=b)),a);e.$$.on_destroy.push(()=>c());let{$$slots:n={},$$scope:r}=t;st("CompatibilityStateText",n,[]);let{state:m=null}=t;const{t:a}=G();vt(a,"t"),o();const f=m??"Unknown",l=b=>`mod-state-${b.toString().toLowerCase()}`,u=["state"];return Object.keys(t).forEach(b=>{!~u.indexOf(b)&&b.slice(0,2)!=="$$"&&b!=="slot"&&console.warn(`<CompatibilityStateText> was created with unknown prop '${b}'`)}),e.$$set=b=>{"state"in b&&i(0,m=b.state)},e.$capture_state=()=>({getTranslate:G,state:m,t:a,textForState:f,classForState:l,$t:s}),e.$inject_state=b=>{"state"in b&&i(0,m=b.state)},t&&"$$inject"in t&&e.$inject_state(t.$$inject),[m,a,s,f,l]}class yt extends it{constructor(t){super(t),nt(this,t,qt,ht,ot,{state:0,t:1}),v("SvelteRegisterComponent",{component:this,tagName:"CompatibilityStateText",options:t,id:ht.name})}get state(){throw new Error("<CompatibilityStateText>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set state(t){throw new Error("<CompatibilityStateText>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get t(){return this.$$.ctx[1]}set t(t){throw new Error("<CompatibilityStateText>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const W="src/lib/components/mods/compatibility/CompatibilityInfo.svelte";function jt(e){let t,i=e[2].Unknown+"",s;const c={c:function(){t=B("div"),s=S(i),this.h()},l:function(n){t=I(n,"DIV",{});var r=_(t);s=P(r,i),r.forEach(d),this.h()},h:function(){j(t,W,51,2,1705)},m:function(n,r){w(n,t,r),k(t,s)},p:h,i:h,o:h,d:function(n){n&&d(t)}};return v("SvelteRegisterBlock",{block:c,id:jt.name,type:"else",source:"(45:0) {:else}",ctx:e}),c}function Rt(e){let t,i=e[3]("early-access")+"",s,c,o,n,r,m=e[2][e[0]?.EA?.state||"Unknown"]+"",a,f,l,u,b,x,T=e[3]("experimental")+"",q,D,A,H,E,y=e[2][e[0]?.EXP?.state||"Unknown"]+"",g,N,z,F;o=new yt({props:{state:e[0]?.EA?.state},$$inline:!0});let R=e[0].EA.note&&$t(e);A=new yt({props:{state:e[0]?.EXP?.state},$$inline:!0});let X=e[0].EXP.note&&wt(e);const Et={c:function(){t=B("div"),s=S(i),c=S(": "),lt(o.$$.fragment),n=U(),r=B("div"),a=S(m),f=U(),R&&R.c(),l=U(),u=B("br"),b=U(),x=B("div"),q=S(T),D=S(": "),lt(A.$$.fragment),H=U(),E=B("div"),g=S(y),N=U(),X&&X.c(),z=V(),this.h()},l:function(p){t=I(p,"DIV",{});var $=_(t);s=P($,i),c=P($,": "),rt(o.$$.fragment,$),$.forEach(d),n=L(p),r=I(p,"DIV",{class:!0});var K=_(r);a=P(K,m),K.forEach(d),f=L(p),R&&R.l(p),l=L(p),u=I(p,"BR",{}),b=L(p),x=I(p,"DIV",{});var Y=_(x);q=P(Y,T),D=P(Y,": "),rt(A.$$.fragment,Y),Y.forEach(d),H=L(p),E=I(p,"DIV",{class:!0});var Ct=_(E);g=P(Ct,y),Ct.forEach(d),N=L(p),X&&X.l(p),z=V(),this.h()},h:function(){j(t,W,25,2,778),J(r,"class","compatibility-state-description"),j(r,W,26,2,873),j(u,W,37,2,1231),j(x,W,38,2,1240),J(E,"class","compatibility-state-description"),j(E,W,39,2,1336)},m:function(p,$){w(p,t,$),k(t,s),k(t,c),pt(o,t,null),w(p,n,$),w(p,r,$),k(r,a),w(p,f,$),R&&R.m(p,$),w(p,l,$),w(p,u,$),w(p,b,$),w(p,x,$),k(x,q),k(x,D),pt(A,x,null),w(p,H,$),w(p,E,$),k(E,g),w(p,N,$),X&&X.m(p,$),w(p,z,$),F=!0},p:function(p,$){(!F||$&8)&&i!==(i=p[3]("early-access")+"")&&M(s,i);const K={};$&1&&(K.state=p[0]?.EA?.state),o.$set(K),(!F||$&1)&&m!==(m=p[2][p[0]?.EA?.state||"Unknown"]+"")&&M(a,m),p[0].EA.note?R?R.p(p,$):(R=$t(p),R.c(),R.m(l.parentNode,l)):R&&(R.d(1),R=null),(!F||$&8)&&T!==(T=p[3]("experimental")+"")&&M(q,T);const Y={};$&1&&(Y.state=p[0]?.EXP?.state),A.$set(Y),(!F||$&1)&&y!==(y=p[2][p[0]?.EXP?.state||"Unknown"]+"")&&M(g,y),p[0].EXP.note?X?X.p(p,$):(X=wt(p),X.c(),X.m(z.parentNode,z)):X&&(X.d(1),X=null)},i:function(p){F||(tt(o.$$.fragment,p),tt(A.$$.fragment,p),F=!0)},o:function(p){Z(o.$$.fragment,p),Z(A.$$.fragment,p),F=!1},d:function(p){p&&(d(t),d(n),d(r),d(f),d(l),d(u),d(b),d(x),d(H),d(E),d(N),d(z)),mt(o),R&&R.d(p),mt(A),X&&X.d(p)}};return v("SvelteRegisterBlock",{block:Et,id:Rt.name,type:"if",source:"(19:0) {#if compatibility}",ctx:e}),Et}function $t(e){let t,i=e[3]("compatibility-info.note")+"",s,c,o,n={ctx:e,current:null,token:null,hasCatch:!1,pending:Ot,then:_t,catch:Xt,value:4};ct(o=et(e[0].EA.note),n);const r={c:function(){t=B("div"),s=S(i),c=S(": "),n.block.c(),this.h()},l:function(a){t=I(a,"DIV",{});var f=_(t);s=P(f,i),c=P(f,": "),n.block.l(f),f.forEach(d),this.h()},h:function(){j(t,W,30,4,1038)},m:function(a,f){w(a,t,f),k(t,s),k(t,c),n.block.m(t,n.anchor=null),n.mount=()=>t,n.anchor=null},p:function(a,f){e=a,f&8&&i!==(i=e[3]("compatibility-info.note")+"")&&M(s,i),n.ctx=e,f&1&&o!==(o=et(e[0].EA.note))&&ct(o,n)||Pt(n,e,f)},d:function(a){a&&d(t),n.block.d(),n.token=null,n=null}};return v("SvelteRegisterBlock",{block:r,id:$t.name,type:"if",source:"(24:2) {#if compatibility.EA.note}",ctx:e}),r}function Xt(e){const t={c:h,l:h,m:h,p:h,d:h};return v("SvelteRegisterBlock",{block:t,id:Xt.name,type:"catch",source:`(1:0) <script lang=\\"ts\\">import CompatibilityStateText from '$lib/components/mods/compatibility/CompatibilityStateText.svelte'; import { markdown }`,ctx:e}),t}function _t(e){let t,i=e[4]+"",s;const c={c:function(){t=new Bt(!1),s=V(),this.h()},l:function(n){t=It(n,!1),s=V(),this.h()},h:function(){t.a=s},m:function(n,r){t.m(i,n,r),w(n,s,r)},p:function(n,r){r&1&&i!==(i=n[4]+"")&&t.p(i)},d:function(n){n&&(d(s),t.d())}};return v("SvelteRegisterBlock",{block:c,id:_t.name,type:"then",source:"(26:93)          <!-- eslint-disable -->         {@html rendered}",ctx:e}),c}function Ot(e){const t={c:h,l:h,m:h,p:h,d:h};return v("SvelteRegisterBlock",{block:t,id:Ot.name,type:"pending",source:`(1:0) <script lang=\\"ts\\">import CompatibilityStateText from '$lib/components/mods/compatibility/CompatibilityStateText.svelte'; import { markdown }`,ctx:e}),t}function wt(e){let t,i=e[3]("compatibility-info.note")+"",s,c,o,n={ctx:e,current:null,token:null,hasCatch:!1,pending:Vt,then:Dt,catch:Tt,value:4};ct(o=et(e[0].EXP.note),n);const r={c:function(){t=B("div"),s=S(i),c=S(": "),n.block.c(),this.h()},l:function(a){t=I(a,"DIV",{});var f=_(t);s=P(f,i),c=P(f,": "),n.block.l(f),f.forEach(d),this.h()},h:function(){j(t,W,43,4,1503)},m:function(a,f){w(a,t,f),k(t,s),k(t,c),n.block.m(t,n.anchor=null),n.mount=()=>t,n.anchor=null},p:function(a,f){e=a,f&8&&i!==(i=e[3]("compatibility-info.note")+"")&&M(s,i),n.ctx=e,f&1&&o!==(o=et(e[0].EXP.note))&&ct(o,n)||Pt(n,e,f)},d:function(a){a&&d(t),n.block.d(),n.token=null,n=null}};return v("SvelteRegisterBlock",{block:r,id:wt.name,type:"if",source:"(37:2) {#if compatibility.EXP.note}",ctx:e}),r}function Tt(e){const t={c:h,l:h,m:h,p:h,d:h};return v("SvelteRegisterBlock",{block:t,id:Tt.name,type:"catch",source:`(1:0) <script lang=\\"ts\\">import CompatibilityStateText from '$lib/components/mods/compatibility/CompatibilityStateText.svelte'; import { markdown }`,ctx:e}),t}function Dt(e){let t,i=e[4]+"",s;const c={c:function(){t=new Bt(!1),s=V(),this.h()},l:function(n){t=It(n,!1),s=V(),this.h()},h:function(){t.a=s},m:function(n,r){t.m(i,n,r),w(n,s,r)},p:function(n,r){r&1&&i!==(i=n[4]+"")&&t.p(i)},d:function(n){n&&(d(s),t.d())}};return v("SvelteRegisterBlock",{block:c,id:Dt.name,type:"then",source:"(39:94)          <!-- eslint-disable -->         {@html rendered}",ctx:e}),c}function Vt(e){const t={c:h,l:h,m:h,p:h,d:h};return v("SvelteRegisterBlock",{block:t,id:Vt.name,type:"pending",source:`(1:0) <script lang=\\"ts\\">import CompatibilityStateText from '$lib/components/mods/compatibility/CompatibilityStateText.svelte'; import { markdown }`,ctx:e}),t}function gt(e){let t,i=e[3]("compatibility-info.maintained-by")+"",s,c,o,n=e[3]("discord")+"",r,m,a,f,l,u,b,x,T;const q=[Rt,jt],D=[];function A(E,y){return E[0]?0:1}u=A(e),b=D[u]=q[u](e);const H={c:function(){t=B("div"),s=S(i),c=U(),o=B("a"),r=S(n),m=S("!"),a=U(),f=B("br"),l=U(),b.c(),x=V(),this.h()},l:function(y){t=I(y,"DIV",{});var g=_(t);s=P(g,i),c=L(g),o=I(g,"A",{href:!0,style:!0});var N=_(o);r=P(N,n),N.forEach(d),m=P(g,"!"),g.forEach(d),a=L(y),f=I(y,"BR",{}),l=L(y),b.l(y),x=V(),this.h()},h:function(){J(o,"href","https://discord.gg/xkVJ73E"),St(o,"text-decoration","underline"),j(o,W,21,2,649),j(t,W,19,0,598),j(f,W,23,0,749)},m:function(y,g){w(y,t,g),k(t,s),k(t,c),k(t,o),k(o,r),k(t,m),w(y,a,g),w(y,f,g),w(y,l,g),D[u].m(y,g),w(y,x,g),T=!0},p:function(y,[g]){(!T||g&8)&&i!==(i=y[3]("compatibility-info.maintained-by")+"")&&M(s,i),(!T||g&8)&&n!==(n=y[3]("discord")+"")&&M(r,n);let N=u;u=A(y),u===N?D[u].p(y,g):(Nt(),Z(D[N],1,1,()=>{D[N]=null}),Wt(),b=D[u],b?b.p(y,g):(b=D[u]=q[u](y),b.c()),tt(b,1),b.m(x.parentNode,x))},i:function(y){T||(tt(b),T=!0)},o:function(y){Z(b),T=!1},d:function(y){y&&(d(t),d(a),d(f),d(l),d(x)),D[u].d(y)}};return v("SvelteRegisterBlock",{block:H,id:gt.name,type:"component",source:"",ctx:e}),H}function Ht(e,t,i){let s,c=h,o=()=>(c(),c=xt(a,u=>i(3,s=u)),a);e.$$.on_destroy.push(()=>c());let{$$slots:n={},$$scope:r}=t;st("CompatibilityInfo",n,[]);let{compatibility:m}=t;const{t:a}=G();vt(a,"t"),o();const f={Works:s("compatibility-info.state.works.description"),Damaged:s("compatibility-info.state.damaged.description"),Broken:s("compatibility-info.state.broken.description"),Unknown:s("compatibility-info.state.unknown.description")};e.$$.on_mount.push(function(){m===void 0&&!("compatibility"in t||e.$$.bound[e.$$.props.compatibility])&&console.warn("<CompatibilityInfo> was created without expected prop 'compatibility'")});const l=["compatibility"];return Object.keys(t).forEach(u=>{!~l.indexOf(u)&&u.slice(0,2)!=="$$"&&u!=="slot"&&console.warn(`<CompatibilityInfo> was created with unknown prop '${u}'`)}),e.$$set=u=>{"compatibility"in u&&i(0,m=u.compatibility)},e.$capture_state=()=>({CompatibilityStateText:yt,markdown:et,getTranslate:G,compatibility:m,t:a,compatibilityStateDescriptions:f,$t:s}),e.$inject_state=u=>{"compatibility"in u&&i(0,m=u.compatibility)},t&&"$$inject"in t&&e.$inject_state(t.$$inject),[m,a,f,s]}class At extends it{constructor(t){super(t),nt(this,t,Ht,gt,ot,{compatibility:0,t:1,compatibilityStateDescriptions:2}),v("SvelteRegisterComponent",{component:this,tagName:"CompatibilityInfo",options:t,id:gt.name})}get compatibility(){throw new Error("<CompatibilityInfo>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set compatibility(t){throw new Error("<CompatibilityInfo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get t(){return this.$$.ctx[1]}set t(t){throw new Error("<CompatibilityInfo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get compatibilityStateDescriptions(){return this.$$.ctx[2]}set compatibilityStateDescriptions(t){throw new Error("<CompatibilityInfo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const at="src/lib/modals/CompatibilityModal.svelte";function kt(e){let t,i,s=e[2]("compatibility-info")+"",c,o,n,r,m;r=new At({props:{compatibility:e[0]},$$inline:!0});const a={c:function(){t=B("div"),i=B("h2"),c=S(s),o=U(),n=B("div"),lt(r.$$.fragment),this.h()},l:function(l){t=I(l,"DIV",{class:!0});var u=_(t);i=I(u,"H2",{class:!0});var b=_(i);c=P(b,s),b.forEach(d),o=L(u),n=I(u,"DIV",{});var x=_(n);rt(r.$$.fragment,x),x.forEach(d),u.forEach(d),this.h()},h:function(){J(i,"class","text-2xl"),j(i,at,11,2,277),j(n,at,12,2,332),J(t,"class","card p-4 flex flex-col gap-2"),j(t,at,10,0,232)},m:function(l,u){w(l,t,u),k(t,i),k(i,c),k(t,o),k(t,n),pt(r,n,null),m=!0},p:function(l,[u]){(!m||u&4)&&s!==(s=l[2]("compatibility-info")+"")&&M(c,s);const b={};u&1&&(b.compatibility=l[0]),r.$set(b)},i:function(l){m||(tt(r.$$.fragment,l),m=!0)},o:function(l){Z(r.$$.fragment,l),m=!1},d:function(l){l&&d(t),mt(r)}};return v("SvelteRegisterBlock",{block:a,id:kt.name,type:"component",source:"",ctx:e}),a}function Qt(e,t,i){let s,c=h,o=()=>(c(),c=xt(a,l=>i(2,s=l)),a);e.$$.on_destroy.push(()=>c());let{$$slots:n={},$$scope:r}=t;st("CompatibilityModal",n,[]);let{compatibility:m}=t;const{t:a}=G();vt(a,"t"),o(),e.$$.on_mount.push(function(){m===void 0&&!("compatibility"in t||e.$$.bound[e.$$.props.compatibility])&&console.warn("<CompatibilityModal> was created without expected prop 'compatibility'")});const f=["compatibility"];return Object.keys(t).forEach(l=>{!~f.indexOf(l)&&l.slice(0,2)!=="$$"&&l!=="slot"&&console.warn(`<CompatibilityModal> was created with unknown prop '${l}'`)}),e.$$set=l=>{"compatibility"in l&&i(0,m=l.compatibility)},e.$capture_state=()=>({CompatibilityInfo:At,getTranslate:G,compatibility:m,t:a,$t:s}),e.$inject_state=l=>{"compatibility"in l&&i(0,m=l.compatibility)},t&&"$$inject"in t&&e.$inject_state(t.$$inject),[m,a,s]}class te extends it{constructor(t){super(t),nt(this,t,Qt,kt,ot,{compatibility:0,t:1}),v("SvelteRegisterComponent",{component:this,tagName:"CompatibilityModal",options:t,id:kt.name})}get compatibility(){throw new Error("<CompatibilityModal>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set compatibility(t){throw new Error("<CompatibilityModal>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get t(){return this.$$.ctx[1]}set t(t){throw new Error("<CompatibilityModal>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Zt as C,Kt as O,te as a,yt as b};
//# sourceMappingURL=CompatibilityModal.75134c2c.js.map
