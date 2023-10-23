import{S as G,i as L,s as V,d as g,v as X,a8 as z,ab as P,ae as A,p as h,t as b,aj as D,x as k,L as H,y as w,z as v,N as K,q as m,C as S,ac as C,l as y,ad as T,O as Y,a$ as B,a6 as O,bi as Z,a9 as _,n as tt,b0 as ot,P as et,m as at}from"../chunks/vendor.8741eb95.js";import{F as U}from"../chunks/FicsitCard.444c0fb0.js";import{M as q}from"../chunks/MetaDescriptors.96db58f4.js";const I="src/lib/components/tools/ToolCard.svelte";function Q(a){let t,i,s=a[0].author+"",l;const o={c:function(){t=k("div"),i=k("span"),l=H(s),this.h()},l:function(e){t=w(e,"DIV",{slot:!0});var d=v(t);i=w(d,"SPAN",{});var r=v(i);l=K(r,s),r.forEach(m),d.forEach(m),this.h()},h:function(){S(i,I,6,4,234),C(t,"slot","stats"),S(t,I,5,2,211)},m:function(e,d){y(e,t,d),T(t,i),T(i,l)},p:function(e,d){d&1&&s!==(s=e[0].author+"")&&Y(l,s)},d:function(e){e&&m(t)}};return g("SvelteRegisterBlock",{block:o,id:Q.name,type:"slot",source:"(6:2) ",ctx:a}),o}function E(a){let t,i;t=new U({props:{name:a[0].name,link:a[0].link,logo:a[0].logo,description:a[0].description,$$slots:{stats:[Q]},$$scope:{ctx:a}},$$inline:!0});const s={c:function(){z(t.$$.fragment)},l:function(o){P(t.$$.fragment,o)},m:function(o,n){A(t,o,n),i=!0},p:function(o,[n]){const e={};n&1&&(e.name=o[0].name),n&1&&(e.link=o[0].link),n&1&&(e.logo=o[0].logo),n&1&&(e.description=o[0].description),n&3&&(e.$$scope={dirty:n,ctx:o}),t.$set(e)},i:function(o){i||(h(t.$$.fragment,o),i=!0)},o:function(o){b(t.$$.fragment,o),i=!1},d:function(o){D(t,o)}};return g("SvelteRegisterBlock",{block:s,id:E.name,type:"component",source:"",ctx:a}),s}function nt(a,t,i){let{$$slots:s={},$$scope:l}=t;X("ToolCard",s,[]);let{tool:o}=t;a.$$.on_mount.push(function(){o===void 0&&!("tool"in t||a.$$.bound[a.$$.props.tool])&&console.warn("<ToolCard> was created without expected prop 'tool'")});const n=["tool"];return Object.keys(t).forEach(e=>{!~n.indexOf(e)&&e.slice(0,2)!=="$$"&&e!=="slot"&&console.warn(`<ToolCard> was created with unknown prop '${e}'`)}),a.$$set=e=>{"tool"in e&&i(0,o=e.tool)},a.$capture_state=()=>({FicsitCard:U,tool:o}),a.$inject_state=e=>{"tool"in e&&i(0,o=e.tool)},t&&"$$inject"in t&&a.$inject_state(t.$$inject),[o]}class W extends G{constructor(t){super(t),L(this,t,nt,E,V,{tool:0}),g("SvelteRegisterComponent",{component:this,tagName:"ToolCard",options:t,id:E.name})}get tool(){throw new Error("<ToolCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set tool(t){throw new Error("<ToolCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const N="src/routes/tools/+page.svelte";function F(a,t,i){const s=a.slice();return s[1]=t[i],s}function R(a){let t,i;t=new W({props:{tool:a[1]},$$inline:!0});const s={c:function(){z(t.$$.fragment)},l:function(o){P(t.$$.fragment,o)},m:function(o,n){A(t,o,n),i=!0},p:et,i:function(o){i||(h(t.$$.fragment,o),i=!0)},o:function(o){b(t.$$.fragment,o),i=!1},d:function(o){D(t,o)}};return g("SvelteRegisterBlock",{block:s,id:R.name,type:"each",source:"(100:2) {#each tools as tool}",ctx:a}),s}function j(a){let t,i,s,l,o,n,e;t=new q({props:{description:"A collection of useful tools for Satisfactory, such as recipe calculators and save editors",title:"Tools"},$$inline:!0});let d=a[0];B(d);let r=[];for(let p=0;p<d.length;p+=1)r[p]=R(F(a,d,p));const J=p=>b(r[p],1,1,()=>{r[p]=null}),M={c:function(){z(t.$$.fragment),i=O(),s=k("h1"),l=H("Tools"),o=O(),n=k("div");for(let c=0;c<r.length;c+=1)r[c].c();this.h()},l:function(c){const u=Z("svelte-5zkdli",document.head);P(t.$$.fragment,u),u.forEach(m),i=_(c),s=w(c,"H1",{class:!0});var f=v(s);l=K(f,"Tools"),f.forEach(m),o=_(c),n=w(c,"DIV",{class:!0});var $=v(n);for(let x=0;x<r.length;x+=1)r[x].l($);$.forEach(m),this.h()},h:function(){document.title="Tools - SMR",C(s,"class","text-4xl my-4 font-bold"),S(s,N,97,0,4171),C(n,"class","grid 3xl:grid-cols-3 2xl:grid-cols-2 grid-cols-1 gap-4"),S(n,N,98,0,4218)},m:function(c,u){A(t,document.head,null),y(c,i,u),y(c,s,u),T(s,l),y(c,o,u),y(c,n,u);for(let f=0;f<r.length;f+=1)r[f]&&r[f].m(n,null);e=!0},p:function(c,[u]){if(u&1){d=c[0],B(d);let f;for(f=0;f<d.length;f+=1){const $=F(c,d,f);r[f]?(r[f].p($,u),h(r[f],1)):(r[f]=R($),r[f].c(),h(r[f],1),r[f].m(n,null))}for(at(),f=d.length;f<r.length;f+=1)J(f);tt()}},i:function(c){if(!e){h(t.$$.fragment,c);for(let u=0;u<d.length;u+=1)h(r[u]);e=!0}},o:function(c){b(t.$$.fragment,c),r=r.filter(Boolean);for(let u=0;u<r.length;u+=1)b(r[u]);e=!1},d:function(c){D(t),c&&m(i),c&&m(s),c&&m(o),c&&m(n),ot(r,c)}};return g("SvelteRegisterBlock",{block:M,id:j.name,type:"component",source:"",ctx:a}),M}function it(a,t,i){let{$$slots:s={},$$scope:l}=t;X("Page",s,[]);const o=[{name:"Save Editor",author:"Goz3rr",logo:"https://cdn.jsdelivr.net/gh/Goz3rr/SatisfactorySaveEditor@6958101e3f2c0e50ba92df798ebefe4e6bdd4eb5/Reference%20Materials/SatisfactorySaveEditorLogo.png",description:"A work in progress save editor for Satisfactory. Consists of both a save parser and an application for viewing and editing the parsed data.",link:"https://github.com/Goz3rr/SatisfactorySaveEditor"},{name:"Satisfactory Tools",author:"greeny",logo:"https://i.imgur.com/WQEHo26.png",description:"A collection of powerful tools for planning and building the perfect base. Calculate your production or consumption, browse items, buildings, and schematics and share your builds with others!",link:"https://www.satisfactorytools.com/"},{name:"Recipe Calculator",author:"KirkMcDonald",logo:"",description:"Recipe calculator using sankey diagrams.",link:"https://kirkmcdonald.github.io/satisfactory-calculator/calc.html"},{name:"Map",author:"Cornik and S4XXX",logo:"",description:"Satisfactory map based on in-game coordinates.",link:"https://www.satisfactorymap.com/"},{name:"SatisGraphtory",author:"tehalexf and thinkaliker",logo:"https://cdn.jsdelivr.net/gh/rhocode/rhocode.github.io@4713b4887e8821f1482de7af4ae32fb6a4b2bcaf/img/satoolsfactory_icons/dot.png",description:"This is a factory planner/optimizer/analyzer tool for factories old and new! Simulate resource chains, factory layouts, and more!",link:"https://satisgraphtory.com/"},{name:"Satisfactory Calculator",author:"Anthor",logo:"",description:"Collection of tools for Satisfactory (Production planner, Interactive map, Recipes, etc)",link:"https://satisfactory-calculator.com/"},{name:"Savegame Tool",author:"SillyBits",logo:"",description:"Allows for numerous options regarding satisfactory savegames, e.g. searching and erasing damaged entities",link:"https://github.com/SillyBits/satisfactory-savegame-tool-ng"},{name:"Satisfactory UI Kit",author:"Deantendo",logo:"",description:"A UI kit for Satisfactory mods",link:"https://github.com/deantendo/sfuikit"},{name:"Ficsit.info",author:"Nevir",logo:"https://github.com/ficsit/ficsit.info/blob/master/web/assets/site-icons/maskable-512.png?raw=true",description:"Production line optimization tool, and game info database",link:"https://ficsit.info/"},{name:"Daniel's Satisfactory Tools",author:"DanielTheProgrammer",logo:"https://i.imgur.com/Ogt0r9k.png",description:"Visualize production chains, and browse items and recipes!",link:"https://daniel2013.github.io/satisfactory/"},{name:"Satisfactory Toolbox",author:"Lucek",logo:"",description:'Factory tool collection, with main tool called "factory planner" with detailed, realtime stats for production and consumption, overclocking and much more.',link:"https://toolbox.satisfactory.lucek.io/"},{name:"Satisfactory 3D Map",author:"Moritz",logo:"",description:"Shows all objects within a savegame in 3D and provides a simple version of the game world for spatial context. Additionally, all properties and values of objects are shown.",link:"https://github.com/moritz-h/satisfactory-3d-map"}],n=[];return Object.keys(t).forEach(e=>{!~n.indexOf(e)&&e.slice(0,2)!=="$$"&&e!=="slot"&&console.warn(`<Page> was created with unknown prop '${e}'`)}),a.$capture_state=()=>({ToolCard:W,MetaDescriptors:q,tools:o}),[o]}class lt extends G{constructor(t){super(t),L(this,t,it,j,V,{}),g("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:j.name})}}export{lt as component};
//# sourceMappingURL=27.b2a93382.js.map
