(()=>{"use strict";document.querySelector("#width").addEventListener("input",(function(){const e=10*+this.value;this.style.background=`linear-gradient(to right, #FFCF7A 0%, #FFCF7A ${e}%, #646464 ${e}%, #646464 100%)`}));const e=document.querySelector("#right"),t=document.querySelector("#left"),c=document.querySelector("#slide1"),r=document.querySelector("#slide2"),n=document.querySelector("#slide3");let o=new Array(c,r,n),l=o.length,i=0;o.forEach(((e,t)=>e.onclick=()=>{i=t})),e.onclick=()=>{i++,i>l-1&&(i=0),o[i].checked=!0},t.onclick=()=>{i--,i<0&&(i=l-1),o[i].checked=!0}})();
//# sourceMappingURL=main.js.map