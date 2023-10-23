import{S as lt,i as dt,d as y,s as mt,bo as U,r as $t,T as pt,v as gt,aJ as A,aL as F,Y as ht,Z as bt,aN as H,a_ as J,bp as W,aG as Y,ao as yt,k as B,a6 as I,x as C,L as E,a8 as P,bi as vt,q as $,a9 as D,y as O,z as N,N as M,ab as T,ac as xt,C as L,ad as x,l as v,ae as R,p as h,t as b,n as X,ai as kt,aj as _,m as tt,O as et,P as S}from"../chunks/vendor.8741eb95.js";import{u as Z,y as K}from"../chunks/graphql.04d4ab78.js";import{T as ot}from"../chunks/Toast.4e559f9e.js";import{M as nt}from"../chunks/ModForm.783ee684.js";import{M as it}from"../chunks/MetaDescriptors.96db58f4.js";const wt=async({params:s})=>({...s}),_t=Object.freeze(Object.defineProperty({__proto__:null,load:wt},Symbol.toStringTag,{value:"Module"})),{console:Q}=yt,V="src/routes/mod/[modId]/edit/+page.svelte";function G(s){let t,n;t=new it({props:{description:"Editing mod "+s[1].data.mod.name,title:"Edit mod "+s[1].data.mod.name,image:s[1].data.mod.logo},$$inline:!0});const r={c:function(){P(t.$$.fragment)},l:function(e){T(t.$$.fragment,e)},m:function(e,a){R(t,e,a),n=!0},p:function(e,a){const f={};a&2&&(f.description="Editing mod "+e[1].data.mod.name),a&2&&(f.title="Edit mod "+e[1].data.mod.name),a&2&&(f.image=e[1].data.mod.logo),t.$set(f)},i:function(e){n||(h(t.$$.fragment,e),n=!0)},o:function(e){b(t.$$.fragment,e),n=!1},d:function(e){_(t,e)}};return y("SvelteRegisterBlock",{block:r,id:G.name,type:"if",source:"(51:2) {#if !$mod.fetching && !$mod.error && $mod.data.mod}",ctx:s}),r}function at(s){let t,n;t=new nt({props:{onSubmit:s[5],initialValues:s[3],editing:!0,submitText:"Save"},$$inline:!0});const r={c:function(){P(t.$$.fragment)},l:function(e){T(t.$$.fragment,e)},m:function(e,a){R(t,e,a),n=!0},p:function(e,a){const f={};a&8&&(f.initialValues=e[3]),t.$set(f)},i:function(e){n||(h(t.$$.fragment,e),n=!0)},o:function(e){b(t.$$.fragment,e),n=!1},d:function(e){_(t,e)}};return y("SvelteRegisterBlock",{block:r,id:at.name,type:"else",source:"(67:4) {:else}",ctx:s}),r}function st(s){let t,n,r=s[1].error.message+"",i;const e={c:function(){t=C("p"),n=E("Oh no... "),i=E(r),this.h()},l:function(f){t=O(f,"P",{});var l=N(t);n=M(l,"Oh no... "),i=M(l,r),l.forEach($),this.h()},h:function(){L(t,V,65,6,1795)},m:function(f,l){v(f,t,l),x(t,n),x(t,i)},p:function(f,l){l&2&&r!==(r=f[1].error.message+"")&&et(i,r)},i:S,o:S,d:function(f){f&&$(t)}};return y("SvelteRegisterBlock",{block:e,id:st.name,type:"if",source:"(65:25) ",ctx:s}),e}function rt(s){let t,n;const r={c:function(){t=C("p"),n=E("Loading..."),this.h()},l:function(e){t=O(e,"P",{});var a=N(t);n=M(a,"Loading..."),a.forEach($),this.h()},h:function(){L(t,V,63,6,1745)},m:function(e,a){v(e,t,a),x(t,n)},p:S,i:S,o:S,d:function(e){e&&$(t)}};return y("SvelteRegisterBlock",{block:r,id:rt.name,type:"if",source:"(63:4) {#if $mod.fetching}",ctx:s}),r}function ct(s){let t,n,r,i;const e=[rt,st,at],a=[];function f(m,u){return m[1].fetching?0:m[1].error?1:2}t=f(s),n=a[t]=e[t](s);const l={c:function(){n.c(),r=B()},l:function(u){n.l(u),r=B()},m:function(u,c){a[t].m(u,c),v(u,r,c),i=!0},p:function(u,c){let p=t;t=f(u),t===p?a[t].p(u,c):(tt(),b(a[p],1,1,()=>{a[p]=null}),X(),n=a[t],n?n.p(u,c):(n=a[t]=e[t](u),n.c()),h(n,1),n.m(r.parentNode,r))},i:function(u){i||(h(n),i=!0)},o:function(u){b(n),i=!1},d:function(u){a[t].d(u),u&&$(r)}};return y("SvelteRegisterBlock",{block:l,id:ct.name,type:"slot",source:"(62:2) <Content>",ctx:s}),l}function ft(s){let t,n;t=new W({props:{$$slots:{default:[ct]},$$scope:{ctx:s}},$$inline:!0});const r={c:function(){P(t.$$.fragment)},l:function(e){T(t.$$.fragment,e)},m:function(e,a){R(t,e,a),n=!0},p:function(e,a){const f={};a&1034&&(f.$$scope={dirty:a,ctx:e}),t.$set(f)},i:function(e){n||(h(t.$$.fragment,e),n=!0)},o:function(e){b(t.$$.fragment,e),n=!1},d:function(e){_(t,e)}};return y("SvelteRegisterBlock",{block:r,id:ft.name,type:"slot",source:"(61:0) <Card>",ctx:s}),r}function ut(s){let t,n;const r={c:function(){t=C("span"),n=E(s[2]),this.h()},l:function(e){t=O(e,"SPAN",{});var a=N(t);n=M(a,s[2]),a.forEach($),this.h()},h:function(){L(t,V,73,2,1990)},m:function(e,a){v(e,t,a),x(t,n)},p:function(e,a){a&4&&et(n,e[2])},d:function(e){e&&$(t)}};return y("SvelteRegisterBlock",{block:r,id:ut.name,type:"slot",source:"(73:0) <Toast bind:running={errorToast}>",ctx:s}),r}function z(s){let t,n,r,i,e,a,f,l,m,u,c=!s[1].fetching&&!s[1].error&&s[1].data.mod&&G(s);a=new U({props:{$$slots:{default:[ft]},$$scope:{ctx:s}},$$inline:!0});function p(g){s[7](g)}let k={$$slots:{default:[ut]},$$scope:{ctx:s}};s[0]!==void 0&&(k.running=s[0]),l=new ot({props:k,$$inline:!0}),$t.push(()=>pt(l,"running",p));const j={c:function(){c&&c.c(),t=B(),n=I(),r=C("h1"),i=E("Edit Mod"),e=I(),P(a.$$.fragment),f=I(),P(l.$$.fragment),this.h()},l:function(o){const d=vt("svelte-q8g25b",document.head);c&&c.l(d),t=B(),d.forEach($),n=D(o),r=O(o,"H1",{class:!0});var w=N(r);i=M(w,"Edit Mod"),w.forEach($),e=D(o),T(a.$$.fragment,o),f=D(o),T(l.$$.fragment,o),this.h()},h:function(){xt(r,"class","text-4xl my-4 font-bold"),L(r,V,58,0,1645)},m:function(o,d){c&&c.m(document.head,null),x(document.head,t),v(o,n,d),v(o,r,d),x(r,i),v(o,e,d),R(a,o,d),v(o,f,d),R(l,o,d),u=!0},p:function(o,[d]){!o[1].fetching&&!o[1].error&&o[1].data.mod?c?(c.p(o,d),d&2&&h(c,1)):(c=G(o),c.c(),h(c,1),c.m(t.parentNode,t)):c&&(tt(),b(c,1,1,()=>{c=null}),X());const w={};d&1034&&(w.$$scope={dirty:d,ctx:o}),a.$set(w);const q={};d&1028&&(q.$$scope={dirty:d,ctx:o}),!m&&d&1&&(m=!0,q.running=o[0],kt(()=>m=!1)),l.$set(q)},i:function(o){u||(h(c),h(a.$$.fragment,o),h(l.$$.fragment,o),u=!0)},o:function(o){b(c),b(a.$$.fragment,o),b(l.$$.fragment,o),u=!1},d:function(o){c&&c.d(o),$(t),o&&$(n),o&&$(r),o&&$(e),_(a,o),o&&$(f),_(l,o)}};return y("SvelteRegisterBlock",{block:j,id:z.name,type:"component",source:"",ctx:s}),j}function St(s,t,n){let r,i,{$$slots:e={},$$scope:a}=t;gt("Page",e,[]);let{data:f}=t;const{modId:l}=f,m=A();let u="",c=!1;const p=F({query:Z,client:m,variables:{mod:l}});ht(p,"mod"),bt(s,p,o=>n(1,i=o));const k=o=>{m.mutation(K,{modId:Y(p).data.mod.id,mod:o}).toPromise().then(d=>{d.error?(console.error(d.error.message),n(2,u="Error editing mod: "+d.error.message),n(0,c=!0)):H(J+"/mod/"+d.data.updateMod.id)})};s.$$.on_mount.push(function(){f===void 0&&!("data"in t||s.$$.bound[s.$$.props.data])&&Q.warn("<Page> was created without expected prop 'data'")});const j=["data"];Object.keys(t).forEach(o=>{!~j.indexOf(o)&&o.slice(0,2)!=="$$"&&o!=="slot"&&Q.warn(`<Page> was created with unknown prop '${o}'`)});function g(o){c=o,n(0,c)}return s.$$set=o=>{"data"in o&&n(6,f=o.data)},s.$capture_state=()=>({getContextClient:A,queryStore:F,EditModDocument:K,GetModDocument:Z,Toast:ot,goto:H,ModForm:nt,base:J,MetaDescriptors:it,Card:U,Content:W,get:Y,data:f,modId:l,client:m,errorMessage:u,errorToast:c,mod:p,onSubmit:k,initialValues:r,$mod:i}),s.$inject_state=o=>{"data"in o&&n(6,f=o.data),"errorMessage"in o&&n(2,u=o.errorMessage),"errorToast"in o&&n(0,c=o.errorToast),"initialValues"in o&&n(3,r=o.initialValues)},t&&"$$inject"in t&&s.$inject_state(t.$$inject),s.$$.update=()=>{s.$$.dirty&1&&(c||n(2,u="")),s.$$.dirty&2&&n(3,r=i.data?{...i.data.mod,logo:void 0}:void 0)},[c,i,u,r,p,k,f,g]}class jt extends lt{constructor(t){super(t),dt(this,t,St,z,mt,{data:6}),y("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:z.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(t){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{jt as component,_t as universal};
//# sourceMappingURL=16.0341df93.js.map
