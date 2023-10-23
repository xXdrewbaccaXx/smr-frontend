import{aL as Tn,S as we,i as ke,s as ye,d as x,bo as Jt,v as be,bp as Kt,a8 as _,ab as P,ae as O,p as h,t as y,aj as T,bq as Re,x as E,y as I,z as M,q as $,ac as mt,C as D,l as b,br as Nn,P as U,aK as Ee,Y as Ft,aw as Cn,L as w,a6 as B,N as k,a9 as R,ad as u,O as K,Z as ie,aJ as Ie,X as De,aN as ce,a_ as Ot,aQ as dt,b9 as Xt,b1 as Qt,aH as Ce,aO as je,aP as Me,R as Le,a3 as Ae,al as Ge,ao as jn,k as Bt,bi as Mn,n as Rt,r as Ve,T as ze,m as Et,ai as He,a$ as _e,b0 as Ln}from"../chunks/vendor.469c6aa0.js";import{J as An,K as Pe}from"../chunks/graphql.04d4ab78.js";import{l as Gn}from"../chunks/gql.ff9241aa.js";import{m as le}from"../chunks/markdown.55e264db.js";import{b as ae,p as fe,a as ue,c as $e}from"../chunks/formatting.730f0615.js";import{M as Ue}from"../chunks/MetaDescriptors.c919f508.js";import{c as qt}from"../chunks/api.44414049.js";import{a as se}from"../chunks/user.af1a2c01.js";import{T as Fe}from"../chunks/Toast.98630023.js";import{i as Oe}from"../chunks/launcher.1da50e7d.js";import{V as qe,a as Je}from"../chunks/VersionDependenciesGrid.30ae0870.js";const zn=async({params:i,parent:t})=>({...i,...await Gn({version:Tn({query:An,client:(await t()).client,variables:{version:i.versionId}})})}),oo=Object.freeze(Object.defineProperty({__proto__:null,load:zn},Symbol.toStringTag,{value:"Module"})),Ke="src/lib/components/versions/VersionDescription.svelte";function Xe(i){const t={c:U,l:U,m:U,p:U,d:U};return x("SvelteRegisterBlock",{block:t,id:Xe.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { markdown }',ctx:i}),t}function Qe(i){let t,c=i[1]+"";const o={c:function(){t=E("p"),this.h()},l:function(r){t=I(r,"P",{});var s=M(t);s.forEach($),this.h()},h:function(){D(t,Ke,9,8,277)},m:function(r,s){b(r,t,s),t.innerHTML=c},p:function(r,s){s&1&&c!==(c=r[1]+"")&&(t.innerHTML=c)},d:function(r){r&&$(t)}};return x("SvelteRegisterBlock",{block:o,id:Qe.name,type:"then",source:"(9:57)          <p>{@html changelogRendered}",ctx:i}),o}function Ye(i){const t={c:U,l:U,m:U,p:U,d:U};return x("SvelteRegisterBlock",{block:t,id:Ye.name,type:"pending",source:'(1:0) <script lang=\\"ts\\">import { markdown }',ctx:i}),t}function Ze(i){let t,c,o={ctx:i,current:null,token:null,hasCatch:!1,pending:Ye,then:Qe,catch:Xe,value:1};Re(c=le(i[0]),o);const e={c:function(){t=E("div"),o.block.c(),this.h()},l:function(s){t=I(s,"DIV",{class:!0});var n=M(t);o.block.l(n),n.forEach($),this.h()},h:function(){mt(t,"class","markdown-content"),D(t,Ke,7,4,180)},m:function(s,n){b(s,t,n),o.block.m(t,o.anchor=null),o.mount=()=>t,o.anchor=null},p:function(s,n){i=s,o.ctx=i,n&1&&c!==(c=le(i[0]))&&Re(c,o)||Nn(o,i,n)},d:function(s){s&&$(t),o.block.d(),o.token=null,o=null}};return x("SvelteRegisterBlock",{block:e,id:Ze.name,type:"slot",source:"(7:2) <Content>",ctx:i}),e}function We(i){let t,c;t=new Kt({props:{$$slots:{default:[Ze]},$$scope:{ctx:i}},$$inline:!0});const o={c:function(){_(t.$$.fragment)},l:function(r){P(t.$$.fragment,r)},m:function(r,s){O(t,r,s),c=!0},p:function(r,s){const n={};s&5&&(n.$$scope={dirty:s,ctx:r}),t.$set(n)},i:function(r){c||(h(t.$$.fragment,r),c=!0)},o:function(r){y(t.$$.fragment,r),c=!1},d:function(r){T(t,r)}};return x("SvelteRegisterBlock",{block:o,id:We.name,type:"slot",source:'(6:0) <Card class=\\"h-fit\\">',ctx:i}),o}function de(i){let t,c;t=new Jt({props:{class:"h-fit",$$slots:{default:[We]},$$scope:{ctx:i}},$$inline:!0});const o={c:function(){_(t.$$.fragment)},l:function(r){P(t.$$.fragment,r)},m:function(r,s){O(t,r,s),c=!0},p:function(r,[s]){const n={};s&5&&(n.$$scope={dirty:s,ctx:r}),t.$set(n)},i:function(r){c||(h(t.$$.fragment,r),c=!0)},o:function(r){y(t.$$.fragment,r),c=!1},d:function(r){T(t,r)}};return x("SvelteRegisterBlock",{block:o,id:de.name,type:"component",source:"",ctx:i}),o}function Hn(i,t,c){let{$$slots:o={},$$scope:e}=t;be("VersionDescription",o,[]);let{changelog:r}=t;i.$$.on_mount.push(function(){r===void 0&&!("changelog"in t||i.$$.bound[i.$$.props.changelog])&&console.warn("<VersionDescription> was created without expected prop 'changelog'")});const s=["changelog"];return Object.keys(t).forEach(n=>{!~s.indexOf(n)&&n.slice(0,2)!=="$$"&&n!=="slot"&&console.warn(`<VersionDescription> was created with unknown prop '${n}'`)}),i.$$set=n=>{"changelog"in n&&c(0,r=n.changelog)},i.$capture_state=()=>({markdown:le,Card:Jt,Content:Kt,changelog:r}),i.$inject_state=n=>{"changelog"in n&&c(0,r=n.changelog)},t&&"$$inject"in t&&i.$inject_state(t.$$inject),[r]}class tn extends we{constructor(t){super(t),ke(this,t,Hn,de,ye,{changelog:0}),x("SvelteRegisterComponent",{component:this,tagName:"VersionDescription",options:t,id:de.name})}get changelog(){throw new Error("<VersionDescription>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set changelog(t){throw new Error("<VersionDescription>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const H="src/lib/components/versions/VersionInfo.svelte";function en(i){let t,c,o,e,r,s,n=i[2]("entry.created-at")+"",l,a,f,m=fe(i[0].created_at)+"",v,p,C,N,F,A=i[2]("downloads")+"",it,X,tt,at=ue(i[0].downloads)+"",q,Q,pt,z,et,nt,ct=i[2]("version")+"",g,ot,ht,st=i[0].sml_version+"",L,vt,lt,ft,j,xt=i[2]("stability")+"",wt,Vt,Y,d=i[0].stability+"",V,rt,ut,G,Z,W=i[2]("size")+"",kt,St,yt,It=ae(i[0].size)+"",Tt,Nt,Yt,gt,bt,Dt=i[2]("hash")+"",Ct,Zt,Wt,_t=i[0].hash+"",jt;const Se={c:function(){t=E("div"),c=E("h3"),o=w("Info"),e=B(),r=E("span"),s=E("strong"),l=w(n),a=w(":"),f=B(),v=w(m),p=E("br"),C=B(),N=E("span"),F=E("strong"),it=w(A),X=w(":"),tt=B(),q=w(at),Q=E("br"),pt=B(),z=E("span"),et=E("strong"),nt=w("SML "),g=w(ct),ot=w(":"),ht=B(),L=w(st),vt=E("br"),lt=B(),ft=E("span"),j=E("strong"),wt=w(xt),Vt=w(":"),Y=B(),V=w(d),rt=E("br"),ut=B(),G=E("span"),Z=E("strong"),kt=w(W),St=w(":"),yt=B(),Tt=w(It),Nt=E("br"),Yt=B(),gt=E("span"),bt=E("strong"),Ct=w(Dt),Zt=w(":"),Wt=B(),jt=w(_t),this.h()},l:function(J){t=I(J,"DIV",{class:!0});var S=M(t);c=I(S,"H3",{class:!0});var Be=M(c);o=k(Be,"Info"),Be.forEach($),e=R(S),r=I(S,"SPAN",{});var Mt=M(r);s=I(Mt,"STRONG",{});var te=M(s);l=k(te,n),a=k(te,":"),te.forEach($),f=R(Mt),v=k(Mt,m),Mt.forEach($),p=I(S,"BR",{}),C=R(S),N=I(S,"SPAN",{});var Lt=M(N);F=I(Lt,"STRONG",{});var ee=M(F);it=k(ee,A),X=k(ee,":"),ee.forEach($),tt=R(Lt),q=k(Lt,at),Lt.forEach($),Q=I(S,"BR",{}),pt=R(S),z=I(S,"SPAN",{});var At=M(z);et=I(At,"STRONG",{});var Gt=M(et);nt=k(Gt,"SML "),g=k(Gt,ct),ot=k(Gt,":"),Gt.forEach($),ht=R(At),L=k(At,st),At.forEach($),vt=I(S,"BR",{}),lt=R(S),ft=I(S,"SPAN",{});var zt=M(ft);j=I(zt,"STRONG",{});var ne=M(j);wt=k(ne,xt),Vt=k(ne,":"),ne.forEach($),Y=R(zt),V=k(zt,d),zt.forEach($),rt=I(S,"BR",{}),ut=R(S),G=I(S,"SPAN",{});var Ht=M(G);Z=I(Ht,"STRONG",{});var oe=M(Z);kt=k(oe,W),St=k(oe,":"),oe.forEach($),yt=R(Ht),Tt=k(Ht,It),Ht.forEach($),Nt=I(S,"BR",{}),Yt=R(S),gt=I(S,"SPAN",{});var Ut=M(gt);bt=I(Ut,"STRONG",{});var re=M(bt);Ct=k(re,Dt),Zt=k(re,":"),re.forEach($),Wt=R(Ut),jt=k(Ut,_t),Ut.forEach($),S.forEach($),this.h()},h:function(){mt(c,"class","text-2xl my-4 font-bold"),D(c,H,10,6,319),D(s,H,11,12,377),D(r,H,11,6,371),D(p,H,11,94,459),D(F,H,12,12,478),D(N,H,12,6,472),D(Q,H,12,88,554),D(et,H,13,12,573),D(z,H,13,6,567),D(vt,H,13,78,639),D(j,H,14,12,658),D(ft,H,14,6,652),D(rt,H,14,74,720),D(Z,H,15,12,739),D(G,H,15,6,733),D(Nt,H,15,77,804),D(bt,H,16,12,823),D(gt,H,16,6,817),mt(t,"class","text-lg break-words"),D(t,H,9,4,279)},m:function(J,S){b(J,t,S),u(t,c),u(c,o),u(t,e),u(t,r),u(r,s),u(s,l),u(s,a),u(r,f),u(r,v),u(t,p),u(t,C),u(t,N),u(N,F),u(F,it),u(F,X),u(N,tt),u(N,q),u(t,Q),u(t,pt),u(t,z),u(z,et),u(et,nt),u(et,g),u(et,ot),u(z,ht),u(z,L),u(t,vt),u(t,lt),u(t,ft),u(ft,j),u(j,wt),u(j,Vt),u(ft,Y),u(ft,V),u(t,rt),u(t,ut),u(t,G),u(G,Z),u(Z,kt),u(Z,St),u(G,yt),u(G,Tt),u(t,Nt),u(t,Yt),u(t,gt),u(gt,bt),u(bt,Ct),u(bt,Zt),u(gt,Wt),u(gt,jt)},p:function(J,S){S&4&&n!==(n=J[2]("entry.created-at")+"")&&K(l,n),S&1&&m!==(m=fe(J[0].created_at)+"")&&K(v,m),S&4&&A!==(A=J[2]("downloads")+"")&&K(it,A),S&1&&at!==(at=ue(J[0].downloads)+"")&&K(q,at),S&4&&ct!==(ct=J[2]("version")+"")&&K(g,ct),S&1&&st!==(st=J[0].sml_version+"")&&K(L,st),S&4&&xt!==(xt=J[2]("stability")+"")&&K(wt,xt),S&1&&d!==(d=J[0].stability+"")&&K(V,d),S&4&&W!==(W=J[2]("size")+"")&&K(kt,W),S&1&&It!==(It=ae(J[0].size)+"")&&K(Tt,It),S&4&&Dt!==(Dt=J[2]("hash")+"")&&K(Ct,Dt),S&1&&_t!==(_t=J[0].hash+"")&&K(jt,_t)},d:function(J){J&&$(t)}};return x("SvelteRegisterBlock",{block:Se,id:en.name,type:"slot",source:"(9:2) <Content>",ctx:i}),Se}function nn(i){let t,c;t=new Kt({props:{$$slots:{default:[en]},$$scope:{ctx:i}},$$inline:!0});const o={c:function(){_(t.$$.fragment)},l:function(r){P(t.$$.fragment,r)},m:function(r,s){O(t,r,s),c=!0},p:function(r,s){const n={};s&13&&(n.$$scope={dirty:s,ctx:r}),t.$set(n)},i:function(r){c||(h(t.$$.fragment,r),c=!0)},o:function(r){y(t.$$.fragment,r),c=!1},d:function(r){T(t,r)}};return x("SvelteRegisterBlock",{block:o,id:nn.name,type:"slot",source:"(8:0) <Card>",ctx:i}),o}function me(i){let t,c;t=new Jt({props:{$$slots:{default:[nn]},$$scope:{ctx:i}},$$inline:!0});const o={c:function(){_(t.$$.fragment)},l:function(r){P(t.$$.fragment,r)},m:function(r,s){O(t,r,s),c=!0},p:function(r,[s]){const n={};s&13&&(n.$$scope={dirty:s,ctx:r}),t.$set(n)},i:function(r){c||(h(t.$$.fragment,r),c=!0)},o:function(r){y(t.$$.fragment,r),c=!1},d:function(r){T(t,r)}};return x("SvelteRegisterBlock",{block:o,id:me.name,type:"component",source:"",ctx:i}),o}function Un(i,t,c){let o,e=U,r=()=>(e(),e=Cn(a,m=>c(2,o=m)),a);i.$$.on_destroy.push(()=>e());let{$$slots:s={},$$scope:n}=t;be("VersionInfo",s,[]);let{version:l}=t;const{t:a}=Ee();Ft(a,"t"),r(),i.$$.on_mount.push(function(){l===void 0&&!("version"in t||i.$$.bound[i.$$.props.version])&&console.warn("<VersionInfo> was created without expected prop 'version'")});const f=["version"];return Object.keys(t).forEach(m=>{!~f.indexOf(m)&&m.slice(0,2)!=="$$"&&m!=="slot"&&console.warn(`<VersionInfo> was created with unknown prop '${m}'`)}),i.$$set=m=>{"version"in m&&c(0,l=m.version)},i.$capture_state=()=>({Card:Jt,Content:Kt,prettyBytes:ae,prettyDate:fe,prettyNumber:ue,getTranslate:Ee,version:l,t:a,$t:o}),i.$inject_state=m=>{"version"in m&&c(0,l=m.version)},t&&"$$inject"in t&&i.$inject_state(t.$$inject),[l,a,o]}class on extends we{constructor(t){super(t),ke(this,t,Un,me,ye,{version:0,t:1}),x("SvelteRegisterComponent",{component:this,tagName:"VersionInfo",options:t,id:me.name})}get version(){throw new Error("<VersionInfo>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set version(t){throw new Error("<VersionInfo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get t(){return this.$$.ctx[1]}set t(t){throw new Error("<VersionInfo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const{console:Te}=jn,$t="src/routes/mod/[modId]/version/[versionId]/+page.svelte";function Ne(i,t,c){const o=i.slice();return o[23]=t[c],o}function pe(i){let t,c;t=new Ue({props:{description:"Information for mod version "+i[0].data.getVersion.mod.name+" "+i[0].data.getVersion.version,title:"Mod version "+i[0].data.getVersion.mod.name+" "+i[0].data.getVersion.version},$$inline:!0});const o={c:function(){_(t.$$.fragment)},l:function(r){P(t.$$.fragment,r)},m:function(r,s){O(t,r,s),c=!0},p:function(r,s){const n={};s&1&&(n.description="Information for mod version "+r[0].data.getVersion.mod.name+" "+r[0].data.getVersion.version),s&1&&(n.title="Mod version "+r[0].data.getVersion.mod.name+" "+r[0].data.getVersion.version),t.$set(n)},i:function(r){c||(h(t.$$.fragment,r),c=!0)},o:function(r){y(t.$$.fragment,r),c=!1},d:function(r){T(t,r)}};return x("SvelteRegisterBlock",{block:o,id:pe.name,type:"if",source:"(49:2) {#if !$version.fetching && !$version.error && $version.data.getVersion}",ctx:i}),o}function rn(i){let t;const c={c:function(){t=w("404")},l:function(e){t=k(e,"404")},m:function(e,r){b(e,t,r)},p:U,i:U,o:U,d:function(e){e&&$(t)}};return x("SvelteRegisterBlock",{block:c,id:rn.name,type:"else",source:"(136:0) {:else}",ctx:i}),c}function cn(i){let t,c,o,e=i[0].data.getVersion.mod.name+"",r,s,n=i[0].data.getVersion.version+"",l,a,f,m,v,p,C,N,F,A,it,X,tt,at,q,Q,pt,z,et,nt,ct,g,ot,ht,st,L=i[4]&&ge(i);const vt=[$n,un],lt=[];function ft(Y,d){return Y[0].data.getVersion.targets.length!=0?0:1}v=ft(i),p=lt[v]=vt[v](i),N=new dt({props:{variant:"outlined",$$slots:{default:[Vn]},$$scope:{ctx:i}},$$inline:!0}),N.$on("click",i[17]),A=new dt({props:{variant:"outlined",href:Ot+"/mod/"+i[6],$$slots:{default:[Rn]},$$scope:{ctx:i}},$$inline:!0}),tt=new tn({props:{changelog:i[0].data.getVersion.changelog},$$inline:!0}),Q=new on({props:{version:i[0].data.getVersion},$$inline:!0}),z=new qe({props:{targets:i[0].data.getVersion.targets},$$inline:!0}),nt=new Je({props:{dependencies:i[0].data.getVersion.dependencies},$$inline:!0});let j=i[4]&&ve(i);function xt(Y){i[21](Y)}let wt={$$slots:{default:[On]},$$scope:{ctx:i}};i[2]!==void 0&&(wt.running=i[2]),ot=new Fe({props:wt,$$inline:!0}),Ve.push(()=>ze(ot,"running",xt));const Vt={c:function(){t=E("div"),c=E("div"),o=E("h1"),r=w(e),s=w(`
        Version `),l=w(n),a=B(),f=E("div"),L&&L.c(),m=B(),p.c(),C=B(),_(N.$$.fragment),F=B(),_(A.$$.fragment),it=B(),X=E("div"),_(tt.$$.fragment),at=B(),q=E("div"),_(Q.$$.fragment),pt=B(),_(z.$$.fragment),et=B(),_(nt.$$.fragment),ct=B(),j&&j.c(),g=B(),_(ot.$$.fragment),this.h()},l:function(d){t=I(d,"DIV",{class:!0});var V=M(t);c=I(V,"DIV",{class:!0});var rt=M(c);o=I(rt,"H1",{class:!0});var ut=M(o);r=k(ut,e),s=k(ut,`
        Version `),l=k(ut,n),ut.forEach($),a=R(rt),f=I(rt,"DIV",{class:!0});var G=M(f);L&&L.l(G),m=R(G),p.l(G),C=R(G),P(N.$$.fragment,G),F=R(G),P(A.$$.fragment,G),G.forEach($),rt.forEach($),it=R(V),X=I(V,"DIV",{class:!0});var Z=M(X);P(tt.$$.fragment,Z),at=R(Z),q=I(Z,"DIV",{class:!0});var W=M(q);P(Q.$$.fragment,W),pt=R(W),P(z.$$.fragment,W),et=R(W),P(nt.$$.fragment,W),W.forEach($),Z.forEach($),V.forEach($),ct=R(d),j&&j.l(d),g=R(d),P(ot.$$.fragment,d),this.h()},h:function(){mt(o,"class","text-4xl font-bold"),D(o,$t,62,6,2543),mt(f,"class","grid grid-flow-col gap-4"),D(f,$t,67,6,2689),mt(c,"class","flex flex-wrap h-auto justify-between items-center"),D(c,$t,61,4,2472),mt(q,"class","grid grid-cols-1 auto-rows-min gap-8"),D(q,$t,110,6,4666),mt(X,"class","grid grid-auto-max auto-cols-fr gap-4"),D(X,$t,108,4,4532),mt(t,"class","grid gap-6 xlx:grid-flow-row"),D(t,$t,60,2,2425)},m:function(d,V){b(d,t,V),u(t,c),u(c,o),u(o,r),u(o,s),u(o,l),u(c,a),u(c,f),L&&L.m(f,null),u(f,m),lt[v].m(f,null),u(f,C),O(N,f,null),u(f,F),O(A,f,null),u(t,it),u(t,X),O(tt,X,null),u(X,at),u(X,q),O(Q,q,null),u(q,pt),O(z,q,null),u(q,et),O(nt,q,null),b(d,ct,V),j&&j.m(d,V),b(d,g,V),O(ot,d,V),st=!0},p:function(d,V){(!st||V&1)&&e!==(e=d[0].data.getVersion.mod.name+"")&&K(r,e),(!st||V&1)&&n!==(n=d[0].data.getVersion.version+"")&&K(l,n),d[4]?L?(L.p(d,V),V&16&&h(L,1)):(L=ge(d),L.c(),h(L,1),L.m(f,m)):L&&(Et(),y(L,1,1,()=>{L=null}),Rt());let rt=v;v=ft(d),v===rt?lt[v].p(d,V):(Et(),y(lt[rt],1,1,()=>{lt[rt]=null}),Rt(),p=lt[v],p?p.p(d,V):(p=lt[v]=vt[v](d),p.c()),h(p,1),p.m(f,C));const ut={};V&67108864&&(ut.$$scope={dirty:V,ctx:d}),N.$set(ut);const G={};V&67108864&&(G.$$scope={dirty:V,ctx:d}),A.$set(G);const Z={};V&1&&(Z.changelog=d[0].data.getVersion.changelog),tt.$set(Z);const W={};V&1&&(W.version=d[0].data.getVersion),Q.$set(W);const kt={};V&1&&(kt.targets=d[0].data.getVersion.targets),z.$set(kt);const St={};V&1&&(St.dependencies=d[0].data.getVersion.dependencies),nt.$set(St),d[4]?j?(j.p(d,V),V&16&&h(j,1)):(j=ve(d),j.c(),h(j,1),j.m(g.parentNode,g)):j&&(Et(),y(j,1,1,()=>{j=null}),Rt());const yt={};V&67108866&&(yt.$$scope={dirty:V,ctx:d}),!ht&&V&4&&(ht=!0,yt.running=d[2],He(()=>ht=!1)),ot.$set(yt)},i:function(d){st||(h(L),h(p),h(N.$$.fragment,d),h(A.$$.fragment,d),h(tt.$$.fragment,d),h(Q.$$.fragment,d),h(z.$$.fragment,d),h(nt.$$.fragment,d),h(j),h(ot.$$.fragment,d),st=!0)},o:function(d){y(L),y(p),y(N.$$.fragment,d),y(A.$$.fragment,d),y(tt.$$.fragment,d),y(Q.$$.fragment,d),y(z.$$.fragment,d),y(nt.$$.fragment,d),y(j),y(ot.$$.fragment,d),st=!1},d:function(d){d&&$(t),L&&L.d(),lt[v].d(),T(N),T(A),T(tt),T(Q),T(z),T(nt),d&&$(ct),j&&j.d(d),d&&$(g),T(ot,d)}};return x("SvelteRegisterBlock",{block:Vt,id:cn.name,type:"if",source:"(60:35) ",ctx:i}),Vt}function sn(i){let t,c,o=i[0].error.message+"",e;const r={c:function(){t=E("p"),c=w("Oh no... "),e=w(o),this.h()},l:function(n){t=I(n,"P",{});var l=M(t);c=k(l,"Oh no... "),e=k(l,o),l.forEach($),this.h()},h:function(){D(t,$t,58,2,2346)},m:function(n,l){b(n,t,l),u(t,c),u(t,e)},p:function(n,l){l&1&&o!==(o=n[0].error.message+"")&&K(e,o)},i:U,o:U,d:function(n){n&&$(t)}};return x("SvelteRegisterBlock",{block:r,id:sn.name,type:"if",source:"(58:25) ",ctx:i}),r}function ln(i){let t,c;const o={c:function(){t=E("p"),c=w("Loading..."),this.h()},l:function(r){t=I(r,"P",{});var s=M(t);c=k(s,"Loading..."),s.forEach($),this.h()},h:function(){D(t,$t,56,2,2300)},m:function(r,s){b(r,t,s),u(t,c)},p:U,i:U,o:U,d:function(r){r&&$(t)}};return x("SvelteRegisterBlock",{block:o,id:ln.name,type:"if",source:"(56:0) {#if $version.fetching}",ctx:i}),o}function ge(i){let t,c,o,e;t=new dt({props:{variant:"outlined",$$slots:{default:[an]},$$scope:{ctx:i}},$$inline:!0}),t.$on("click",i[13]),o=new dt({props:{variant:"outlined",$$slots:{default:[fn]},$$scope:{ctx:i}},$$inline:!0}),o.$on("click",i[14]);const r={c:function(){_(t.$$.fragment),c=B(),_(o.$$.fragment)},l:function(n){P(t.$$.fragment,n),c=R(n),P(o.$$.fragment,n)},m:function(n,l){O(t,n,l),b(n,c,l),O(o,n,l),e=!0},p:function(n,l){const a={};l&67108864&&(a.$$scope={dirty:l,ctx:n}),t.$set(a);const f={};l&67108864&&(f.$$scope={dirty:l,ctx:n}),o.$set(f)},i:function(n){e||(h(t.$$.fragment,n),h(o.$$.fragment,n),e=!0)},o:function(n){y(t.$$.fragment,n),y(o.$$.fragment,n),e=!1},d:function(n){T(t,n),n&&$(c),T(o,n)}};return x("SvelteRegisterBlock",{block:r,id:ge.name,type:"if",source:"(69:8) {#if canUserEdit}",ctx:i}),r}function an(i){let t;const c={c:function(){t=w("Edit")},l:function(e){t=k(e,"Edit")},m:function(e,r){b(e,t,r)},d:function(e){e&&$(t)}};return x("SvelteRegisterBlock",{block:c,id:an.name,type:"slot",source:`(70:10) <Button variant=\\"outlined\\" on:click={() => goto(base + '/mod/' + modId + '/version/' + versionId + '/edit')}>`,ctx:i}),c}function fn(i){let t;const c={c:function(){t=w("Delete")},l:function(e){t=k(e,"Delete")},m:function(e,r){b(e,t,r)},d:function(e){e&&$(t)}};return x("SvelteRegisterBlock",{block:c,id:fn.name,type:"slot",source:'(73:10) <Button variant=\\"outlined\\" on:click={() => deleteDialogOpen.set(true)}>',ctx:i}),c}function un(i){let t,c,o,e;t=new dt({props:{variant:"outlined",href:Ot+"/mod/"+i[6]+"/version/"+i[7],$$slots:{default:[dn]},$$scope:{ctx:i}},$$inline:!0}),o=new dt({props:{variant:"outlined",href:qt+"/mod/"+i[6]+"/versions/"+i[7]+"/download",$$slots:{default:[mn]},$$scope:{ctx:i}},$$inline:!0});const r={c:function(){_(t.$$.fragment),c=B(),_(o.$$.fragment)},l:function(n){P(t.$$.fragment,n),c=R(n),P(o.$$.fragment,n)},m:function(n,l){O(t,n,l),b(n,c,l),O(o,n,l),e=!0},p:function(n,l){const a={};l&67108864&&(a.$$scope={dirty:l,ctx:n}),t.$set(a);const f={};l&67108864&&(f.$$scope={dirty:l,ctx:n}),o.$set(f)},i:function(n){e||(h(t.$$.fragment,n),h(o.$$.fragment,n),e=!0)},o:function(n){y(t.$$.fragment,n),y(o.$$.fragment,n),e=!1},d:function(n){T(t,n),n&&$(c),T(o,n)}};return x("SvelteRegisterBlock",{block:r,id:un.name,type:"else",source:"(93:8) {:else}",ctx:i}),r}function $n(i){let t,c,o,e;t=new dt({props:{variant:"outlined",$$slots:{default:[hn]},$$scope:{ctx:i}},$$inline:!0}),t.$on("click",i[15]);let r={anchorCorner:"BOTTOM_LEFT",$$slots:{default:[kn]},$$scope:{ctx:i}};o=new Le({props:r,$$inline:!0}),i[16](o);const s={c:function(){_(t.$$.fragment),c=B(),_(o.$$.fragment)},l:function(l){P(t.$$.fragment,l),c=R(l),P(o.$$.fragment,l)},m:function(l,a){O(t,l,a),b(l,c,a),O(o,l,a),e=!0},p:function(l,a){const f={};a&67108864&&(f.$$scope={dirty:a,ctx:l}),t.$set(f);const m={};a&67108865&&(m.$$scope={dirty:a,ctx:l}),o.$set(m)},i:function(l){e||(h(t.$$.fragment,l),h(o.$$.fragment,l),e=!0)},o:function(l){y(t.$$.fragment,l),y(o.$$.fragment,l),e=!1},d:function(l){T(t,l),l&&$(c),i[16](null),T(o,l)}};return x("SvelteRegisterBlock",{block:s,id:$n.name,type:"if",source:"(75:8) {#if $version.data.getVersion.targets.length != 0}",ctx:i}),s}function dn(i){let t;const c={c:function(){t=w("View")},l:function(e){t=k(e,"View")},m:function(e,r){b(e,t,r)},d:function(e){e&&$(t)}};return x("SvelteRegisterBlock",{block:c,id:dn.name,type:"slot",source:`(94:10) <Button variant=\\"outlined\\" href={base + '/mod/' + modId + '/version/' + versionId}>`,ctx:i}),c}function mn(i){let t;const c={c:function(){t=w("Download")},l:function(e){t=k(e,"Download")},m:function(e,r){b(e,t,r)},d:function(e){e&&$(t)}};return x("SvelteRegisterBlock",{block:c,id:mn.name,type:"slot",source:`(95:10) <Button variant=\\"outlined\\" href={API_REST + '/mod/' + modId + '/versions/' + versionId + '/download'}             >`,ctx:i}),c}function pn(i){let t;const c={c:function(){t=w("Download")},l:function(e){t=k(e,"Download")},m:function(e,r){b(e,t,r)},d:function(e){e&&$(t)}};return x("SvelteRegisterBlock",{block:c,id:pn.name,type:"slot",source:"(77:12) <Label>",ctx:i}),c}function gn(i){let t;const c={c:function(){t=w("arrow_drop_down")},l:function(e){t=k(e,"arrow_drop_down")},m:function(e,r){b(e,t,r)},d:function(e){e&&$(t)}};return x("SvelteRegisterBlock",{block:c,id:gn.name,type:"slot",source:'(78:12) <Icon class=\\"material-icons\\" style=\\"margin: 0;\\">',ctx:i}),c}function hn(i){let t,c,o,e;t=new Xt({props:{$$slots:{default:[pn]},$$scope:{ctx:i}},$$inline:!0}),o=new Qt({props:{class:"material-icons",style:"margin: 0;",$$slots:{default:[gn]},$$scope:{ctx:i}},$$inline:!0});const r={c:function(){_(t.$$.fragment),c=B(),_(o.$$.fragment)},l:function(n){P(t.$$.fragment,n),c=R(n),P(o.$$.fragment,n)},m:function(n,l){O(t,n,l),b(n,c,l),O(o,n,l),e=!0},p:function(n,l){const a={};l&67108864&&(a.$$scope={dirty:l,ctx:n}),t.$set(a);const f={};l&67108864&&(f.$$scope={dirty:l,ctx:n}),o.$set(f)},i:function(n){e||(h(t.$$.fragment,n),h(o.$$.fragment,n),e=!0)},o:function(n){y(t.$$.fragment,n),y(o.$$.fragment,n),e=!1},d:function(n){T(t,n),n&&$(c),T(o,n)}};return x("SvelteRegisterBlock",{block:r,id:hn.name,type:"slot",source:'(76:10) <Button variant=\\"outlined\\" on:click={() => menu.setOpen(true)}>',ctx:i}),r}function vn(i){let t,c=$e(i[23].targetName)+"",o;const e={c:function(){t=w("Download "),o=w(c)},l:function(s){t=k(s,"Download "),o=k(s,c)},m:function(s,n){b(s,t,n),b(s,o,n)},p:function(s,n){n&1&&c!==(c=$e(s[23].targetName)+"")&&K(o,c)},d:function(s){s&&$(t),s&&$(o)}};return x("SvelteRegisterBlock",{block:e,id:vn.name,type:"slot",source:`(84:18) <Button                     variant=\\"outlined\\"                     class=\\"w-full\\"                     href={API_REST + '/mod/' + modId + '/versions/' + versionId + '/' + target.targetName + '/download'}                     >`,ctx:i}),e}function xn(i){let t,c,o;t=new dt({props:{variant:"outlined",class:"w-full",href:qt+"/mod/"+i[6]+"/versions/"+i[7]+"/"+i[23].targetName+"/download",$$slots:{default:[vn]},$$scope:{ctx:i}},$$inline:!0});const e={c:function(){_(t.$$.fragment),c=B()},l:function(s){P(t.$$.fragment,s),c=R(s)},m:function(s,n){O(t,s,n),b(s,c,n),o=!0},p:function(s,n){const l={};n&1&&(l.href=qt+"/mod/"+s[6]+"/versions/"+s[7]+"/"+s[23].targetName+"/download"),n&67108865&&(l.$$scope={dirty:n,ctx:s}),t.$set(l)},i:function(s){o||(h(t.$$.fragment,s),o=!0)},o:function(s){y(t.$$.fragment,s),o=!1},d:function(s){T(t,s),s&&$(c)}};return x("SvelteRegisterBlock",{block:e,id:xn.name,type:"slot",source:"(83:16) <Item>",ctx:i}),e}function he(i){let t,c;t=new Ge({props:{$$slots:{default:[xn]},$$scope:{ctx:i}},$$inline:!0});const o={c:function(){_(t.$$.fragment)},l:function(r){P(t.$$.fragment,r)},m:function(r,s){O(t,r,s),c=!0},p:function(r,s){const n={};s&67108865&&(n.$$scope={dirty:s,ctx:r}),t.$set(n)},i:function(r){c||(h(t.$$.fragment,r),c=!0)},o:function(r){y(t.$$.fragment,r),c=!1},d:function(r){T(t,r)}};return x("SvelteRegisterBlock",{block:o,id:he.name,type:"each",source:"(82:14) {#each $version.data.getVersion.targets as target}",ctx:i}),o}function wn(i){let t,c,o=i[0].data.getVersion.targets;_e(o);let e=[];for(let n=0;n<o.length;n+=1)e[n]=he(Ne(i,o,n));const r=n=>y(e[n],1,1,()=>{e[n]=null}),s={c:function(){for(let l=0;l<e.length;l+=1)e[l].c();t=Bt()},l:function(l){for(let a=0;a<e.length;a+=1)e[a].l(l);t=Bt()},m:function(l,a){for(let f=0;f<e.length;f+=1)e[f]&&e[f].m(l,a);b(l,t,a),c=!0},p:function(l,a){if(a&193){o=l[0].data.getVersion.targets,_e(o);let f;for(f=0;f<o.length;f+=1){const m=Ne(l,o,f);e[f]?(e[f].p(m,a),h(e[f],1)):(e[f]=he(m),e[f].c(),h(e[f],1),e[f].m(t.parentNode,t))}for(Et(),f=o.length;f<e.length;f+=1)r(f);Rt()}},i:function(l){if(!c){for(let a=0;a<o.length;a+=1)h(e[a]);c=!0}},o:function(l){e=e.filter(Boolean);for(let a=0;a<e.length;a+=1)y(e[a]);c=!1},d:function(l){Ln(e,l),l&&$(t)}};return x("SvelteRegisterBlock",{block:s,id:wn.name,type:"slot",source:"(81:12) <List>",ctx:i}),s}function kn(i){let t,c;t=new Ae({props:{$$slots:{default:[wn]},$$scope:{ctx:i}},$$inline:!0});const o={c:function(){_(t.$$.fragment)},l:function(r){P(t.$$.fragment,r)},m:function(r,s){O(t,r,s),c=!0},p:function(r,s){const n={};s&67108865&&(n.$$scope={dirty:s,ctx:r}),t.$set(n)},i:function(r){c||(h(t.$$.fragment,r),c=!0)},o:function(r){y(t.$$.fragment,r),c=!1},d:function(r){T(t,r)}};return x("SvelteRegisterBlock",{block:o,id:kn.name,type:"slot",source:'(80:10) <Menu bind:this={menu} anchorCorner=\\"BOTTOM_LEFT\\">',ctx:i}),o}function yn(i){let t;const c={c:function(){t=w("Install")},l:function(e){t=k(e,"Install")},m:function(e,r){b(e,t,r)},d:function(e){e&&$(t)}};return x("SvelteRegisterBlock",{block:c,id:yn.name,type:"slot",source:"(99:10) <Label>",ctx:i}),c}function bn(i){let t;const c={c:function(){t=w("download")},l:function(e){t=k(e,"download")},m:function(e,r){b(e,t,r)},d:function(e){e&&$(t)}};return x("SvelteRegisterBlock",{block:c,id:bn.name,type:"slot",source:'(100:10) <Icon class=\\"material-icons\\">',ctx:i}),c}function Vn(i){let t,c,o,e;t=new Xt({props:{$$slots:{default:[yn]},$$scope:{ctx:i}},$$inline:!0}),o=new Qt({props:{class:"material-icons",$$slots:{default:[bn]},$$scope:{ctx:i}},$$inline:!0});const r={c:function(){_(t.$$.fragment),c=B(),_(o.$$.fragment)},l:function(n){P(t.$$.fragment,n),c=R(n),P(o.$$.fragment,n)},m:function(n,l){O(t,n,l),b(n,c,l),O(o,n,l),e=!0},p:function(n,l){const a={};l&67108864&&(a.$$scope={dirty:l,ctx:n}),t.$set(a);const f={};l&67108864&&(f.$$scope={dirty:l,ctx:n}),o.$set(f)},i:function(n){e||(h(t.$$.fragment,n),h(o.$$.fragment,n),e=!0)},o:function(n){y(t.$$.fragment,n),y(o.$$.fragment,n),e=!1},d:function(n){T(t,n),n&&$(c),T(o,n)}};return x("SvelteRegisterBlock",{block:r,id:Vn.name,type:"slot",source:'(98:8) <Button variant=\\"outlined\\" on:click={() => installMod($version.data.getVersion.mod.mod_reference)}>',ctx:i}),r}function Sn(i){let t;const c={c:function(){t=w("Mod")},l:function(e){t=k(e,"Mod")},m:function(e,r){b(e,t,r)},d:function(e){e&&$(t)}};return x("SvelteRegisterBlock",{block:c,id:Sn.name,type:"slot",source:"(104:10) <Label>",ctx:i}),c}function Bn(i){let t;const c={c:function(){t=w("extension")},l:function(e){t=k(e,"extension")},m:function(e,r){b(e,t,r)},d:function(e){e&&$(t)}};return x("SvelteRegisterBlock",{block:c,id:Bn.name,type:"slot",source:'(105:10) <Icon class=\\"material-icons\\">',ctx:i}),c}function Rn(i){let t,c,o,e;t=new Xt({props:{$$slots:{default:[Sn]},$$scope:{ctx:i}},$$inline:!0}),o=new Qt({props:{class:"material-icons",$$slots:{default:[Bn]},$$scope:{ctx:i}},$$inline:!0});const r={c:function(){_(t.$$.fragment),c=B(),_(o.$$.fragment)},l:function(n){P(t.$$.fragment,n),c=R(n),P(o.$$.fragment,n)},m:function(n,l){O(t,n,l),b(n,c,l),O(o,n,l),e=!0},p:function(n,l){const a={};l&67108864&&(a.$$scope={dirty:l,ctx:n}),t.$set(a);const f={};l&67108864&&(f.$$scope={dirty:l,ctx:n}),o.$set(f)},i:function(n){e||(h(t.$$.fragment,n),h(o.$$.fragment,n),e=!0)},o:function(n){y(t.$$.fragment,n),y(o.$$.fragment,n),e=!1},d:function(n){T(t,n),n&&$(c),T(o,n)}};return x("SvelteRegisterBlock",{block:r,id:Rn.name,type:"slot",source:`(103:8) <Button variant=\\"outlined\\" href={base + '/mod/' + modId}>`,ctx:i}),r}function ve(i){let t,c,o;function e(n){i[20](n)}let r={$$slots:{default:[Pn]},$$scope:{ctx:i}};i[5]!==void 0&&(r.open=i[5]),t=new Ce({props:r,$$inline:!0}),Ve.push(()=>ze(t,"open",e));const s={c:function(){_(t.$$.fragment)},l:function(l){P(t.$$.fragment,l)},m:function(l,a){O(t,l,a),o=!0},p:function(l,a){const f={};a&67108864&&(f.$$scope={dirty:a,ctx:l}),!c&&a&32&&(c=!0,f.open=l[5],He(()=>c=!1)),t.$set(f)},i:function(l){o||(h(t.$$.fragment,l),o=!0)},o:function(l){y(t.$$.fragment,l),o=!1},d:function(l){T(t,l)}};return x("SvelteRegisterBlock",{block:s,id:ve.name,type:"if",source:"(119:2) {#if canUserEdit}",ctx:i}),s}function En(i){let t;const c={c:function(){t=w("Delete Version?")},l:function(e){t=k(e,"Delete Version?")},m:function(e,r){b(e,t,r)},d:function(e){e&&$(t)}};return x("SvelteRegisterBlock",{block:c,id:En.name,type:"slot",source:'(121:6) <Title id=\\"simple-title\\">',ctx:i}),c}function In(i){let t;const c={c:function(){t=w("Cancel")},l:function(e){t=k(e,"Cancel")},m:function(e,r){b(e,t,r)},d:function(e){e&&$(t)}};return x("SvelteRegisterBlock",{block:c,id:In.name,type:"slot",source:'(126:10) <Button variant=\\"outlined\\" on:click={() => deleteDialogOpen.set(false)}>',ctx:i}),c}function Dn(i){let t;const c={c:function(){t=w("Delete")},l:function(e){t=k(e,"Delete")},m:function(e,r){b(e,t,r)},d:function(e){e&&$(t)}};return x("SvelteRegisterBlock",{block:c,id:Dn.name,type:"slot",source:'(127:10) <Button variant=\\"outlined\\" on:click={() => deleteVersionFn()}>',ctx:i}),c}function _n(i){let t,c,o,e,r,s,n,l;r=new dt({props:{variant:"outlined",$$slots:{default:[In]},$$scope:{ctx:i}},$$inline:!0}),r.$on("click",i[18]),n=new dt({props:{variant:"outlined",$$slots:{default:[Dn]},$$scope:{ctx:i}},$$inline:!0}),n.$on("click",i[19]);const a={c:function(){t=E("div"),c=E("span"),o=w("Are you sure you wish to delete this version"),e=B(),_(r.$$.fragment),s=B(),_(n.$$.fragment),this.h()},l:function(m){t=I(m,"DIV",{class:!0});var v=M(t);c=I(v,"SPAN",{});var p=M(c);o=k(p,"Are you sure you wish to delete this version"),p.forEach($),e=R(v),P(r.$$.fragment,v),s=R(v),P(n.$$.fragment,v),v.forEach($),this.h()},h:function(){D(c,$t,123,10,5176),mt(t,"class","grid grid-flow-row gap-4"),D(t,$t,122,8,5127)},m:function(m,v){b(m,t,v),u(t,c),u(c,o),u(t,e),O(r,t,null),u(t,s),O(n,t,null),l=!0},p:function(m,v){const p={};v&67108864&&(p.$$scope={dirty:v,ctx:m}),r.$set(p);const C={};v&67108864&&(C.$$scope={dirty:v,ctx:m}),n.$set(C)},i:function(m){l||(h(r.$$.fragment,m),h(n.$$.fragment,m),l=!0)},o:function(m){y(r.$$.fragment,m),y(n.$$.fragment,m),l=!1},d:function(m){m&&$(t),T(r),T(n)}};return x("SvelteRegisterBlock",{block:a,id:_n.name,type:"slot",source:"(122:6) <DialogContent>",ctx:i}),a}function Pn(i){let t,c,o,e;t=new je({props:{id:"simple-title",$$slots:{default:[En]},$$scope:{ctx:i}},$$inline:!0}),o=new Me({props:{$$slots:{default:[_n]},$$scope:{ctx:i}},$$inline:!0});const r={c:function(){_(t.$$.fragment),c=B(),_(o.$$.fragment)},l:function(n){P(t.$$.fragment,n),c=R(n),P(o.$$.fragment,n)},m:function(n,l){O(t,n,l),b(n,c,l),O(o,n,l),e=!0},p:function(n,l){const a={};l&67108864&&(a.$$scope={dirty:l,ctx:n}),t.$set(a);const f={};l&67108864&&(f.$$scope={dirty:l,ctx:n}),o.$set(f)},i:function(n){e||(h(t.$$.fragment,n),h(o.$$.fragment,n),e=!0)},o:function(n){y(t.$$.fragment,n),y(o.$$.fragment,n),e=!1},d:function(n){T(t,n),n&&$(c),T(o,n)}};return x("SvelteRegisterBlock",{block:r,id:Pn.name,type:"slot",source:"(120:4) <Dialog bind:open={$deleteDialogOpen}>",ctx:i}),r}function On(i){let t,c;const o={c:function(){t=E("span"),c=w(i[1]),this.h()},l:function(r){t=I(r,"SPAN",{});var s=M(t);c=k(s,i[1]),s.forEach($),this.h()},h:function(){D(t,$t,133,4,5522)},m:function(r,s){b(r,t,s),u(t,c)},p:function(r,s){s&2&&K(c,r[1])},d:function(r){r&&$(t)}};return x("SvelteRegisterBlock",{block:o,id:On.name,type:"slot",source:"(133:2) <Toast bind:running={errorToast}>",ctx:i}),o}function xe(i){let t,c,o,e,r,s,n=!i[0].fetching&&!i[0].error&&i[0].data.getVersion&&pe(i);const l=[ln,sn,cn,rn],a=[];function f(v,p){return v[0].fetching?0:v[0].error?1:v[0].data.getVersion?2:3}o=f(i),e=a[o]=l[o](i);const m={c:function(){n&&n.c(),t=Bt(),c=B(),e.c(),r=Bt()},l:function(p){const C=Mn("svelte-7zfw29",document.head);n&&n.l(C),t=Bt(),C.forEach($),c=R(p),e.l(p),r=Bt()},m:function(p,C){n&&n.m(document.head,null),u(document.head,t),b(p,c,C),a[o].m(p,C),b(p,r,C),s=!0},p:function(p,[C]){!p[0].fetching&&!p[0].error&&p[0].data.getVersion?n?(n.p(p,C),C&1&&h(n,1)):(n=pe(p),n.c(),h(n,1),n.m(t.parentNode,t)):n&&(Et(),y(n,1,1,()=>{n=null}),Rt());let N=o;o=f(p),o===N?a[o].p(p,C):(Et(),y(a[N],1,1,()=>{a[N]=null}),Rt(),e=a[o],e?e.p(p,C):(e=a[o]=l[o](p),e.c()),h(e,1),e.m(r.parentNode,r))},i:function(p){s||(h(n),h(e),s=!0)},o:function(p){y(n),y(e),s=!1},d:function(p){n&&n.d(p),$(t),p&&$(c),a[o].d(p),p&&$(r)}};return x("SvelteRegisterBlock",{block:m,id:xe.name,type:"component",source:"",ctx:i}),m}function Fn(i,t,c){let o,e,r,s;Ft(se,"user"),ie(i,se,g=>c(12,e=g));let{$$slots:n={},$$scope:l}=t;be("Page",n,[]);let{data:a}=t;const{modId:f,versionId:m,version:v}=a;Ft(v,"version"),ie(i,v,g=>c(0,r=g));const p=Ie();let C="",N=!1,F;const A=De(!1);Ft(A,"deleteDialogOpen"),ie(i,A,g=>c(5,s=g));const it=()=>{p.mutation(Pe,{versionId:m}).toPromise().then(g=>{g.error?(console.error(g.error.message),c(1,C="Error deleting version: "+g.error.message),c(2,N=!0)):ce(Ot+"/mod/"+f)})};i.$$.on_mount.push(function(){a===void 0&&!("data"in t||i.$$.bound[i.$$.props.data])&&Te.warn("<Page> was created without expected prop 'data'")});const X=["data"];Object.keys(t).forEach(g=>{!~X.indexOf(g)&&g.slice(0,2)!=="$$"&&g!=="slot"&&Te.warn(`<Page> was created with unknown prop '${g}'`)});const tt=()=>ce(Ot+"/mod/"+f+"/version/"+m+"/edit"),at=()=>A.set(!0),q=()=>F.setOpen(!0);function Q(g){Ve[g?"unshift":"push"](()=>{F=g,c(3,F)})}const pt=()=>Oe(r.data.getVersion.mod.mod_reference),z=()=>A.set(!1),et=()=>it();function nt(g){s=g,A.set(s)}function ct(g){N=g,c(2,N)}return i.$$set=g=>{"data"in g&&c(11,a=g.data)},i.$capture_state=()=>({DeleteVersionDocument:Pe,VersionDescription:tn,VersionInfo:on,MetaDescriptors:Ue,API_REST:qt,Toast:Fe,writable:De,goto:ce,user:se,base:Ot,Button:dt,Label:Xt,Icon:Qt,Dialog:Ce,Title:je,DialogContent:Me,Menu:Le,List:Ae,Item:Ge,installMod:Oe,prettyTarget:$e,VersionTargetSupportGrid:qe,VersionDependenciesGrid:Je,getContextClient:Ie,data:a,modId:f,versionId:m,version:v,client:p,errorMessage:C,errorToast:N,menu:F,deleteDialogOpen:A,deleteVersionFn:it,canUserEdit:o,$user:e,$version:r,$deleteDialogOpen:s}),i.$inject_state=g=>{"data"in g&&c(11,a=g.data),"errorMessage"in g&&c(1,C=g.errorMessage),"errorToast"in g&&c(2,N=g.errorToast),"menu"in g&&c(3,F=g.menu),"canUserEdit"in g&&c(4,o=g.canUserEdit)},t&&"$$inject"in t&&i.$inject_state(t.$$inject),i.$$.update=()=>{i.$$.dirty&4097&&c(4,o=e?.roles?.deleteContent||r?.data?.getVersion.mod?.authors?.findIndex(g=>g.user_id==e?.id)>=0)},[r,C,N,F,o,s,f,m,v,A,it,a,e,tt,at,q,Q,pt,z,et,nt,ct]}class ro extends we{constructor(t){super(t),ke(this,t,Fn,xe,ye,{data:11}),x("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:xe.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(t){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{ro as component,oo as universal};
//# sourceMappingURL=18.17cdcf04.js.map
