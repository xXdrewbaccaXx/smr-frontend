import{D as r}from"./vendor-2ce7ccec.js";const w=r(!1),f=r(void 0);let n;n=window.matchMedia("(min-width: 1280px)"),n.addEventListener("change",e=>{i&&i.set(!e.matches)});const i=r(n&&!n.matches),l=r(!1);{const e=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","KeyB","KeyA","Space"],t=[];window.onkeyup=a=>{if(t.push(a.code),t.length>e.length&&t.unshift(),t.length==e.length){let s=!0;for(let o=0;o<e.length;o++)if(e[o]!==t[o]){s=!1;break}s&&l.set(!0)}}}export{l as e,f as g,w as l,i as o};
//# sourceMappingURL=global-7bf21905.js.map
