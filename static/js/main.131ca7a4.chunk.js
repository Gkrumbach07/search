(this["webpackJsonpthoth-search"]=this["webpackJsonpthoth-search"]||[]).push([[0],{39:function(e,n,t){},47:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(7),c=t.n(a),d=(t(39),t(9));function s(e,n,t){var o=t.filter((function(n){return e.includes(n.from.toString())})),r={nodes:[],edges:[]};return o.forEach((function(e){var n=i(e,{nodes:[],edges:[]},t);r={nodes:Object(d.a)(new Set([].concat(Object(d.a)(n.nodes),Object(d.a)(r.nodes)))),edges:Object(d.a)(new Set([].concat(Object(d.a)(n.edges),Object(d.a)(r.edges))))}})),r}function i(e,n,t){if(n.nodes.push(e.from,e.to),n.edges.push(e.id),0===e.to)return n;var o={nodes:[],edges:[]};return t.filter((function(n){return n.from===e.to})).forEach((function(e){var r=i(e,n,t);o={nodes:Object(d.a)(new Set([].concat(Object(d.a)(r.nodes),Object(d.a)(o.nodes)))),edges:Object(d.a)(new Set([].concat(Object(d.a)(r.edges),Object(d.a)(o.edges))))}})),o}var u={manipulation:{enabled:!1,editNode:function(e,n){e.fixed=!e.fixed.x,n(e)}},interaction:{hover:!0,hoverConnectedEdges:!1,selectConnectedEdges:!1,selectable:!1},edges:{chosen:!1,smooth:!1,color:{color:"#5c6470"},arrowStrikethrough:!1,arrows:{from:{enabled:!0,type:"triangle"}}},nodes:{chosen:!1,color:{background:"#5c6470",border:"#fff",hover:{background:"#f39200",border:"#fff"}},shape:"dot",size:10,borderWidth:2,labelHighlightBold:!1,font:{color:"#393e46",strokeWidth:2,size:15}},physics:{hierarchicalRepulsion:{damping:.1,springLength:200},solver:"hierarchicalRepulsion",minVelocity:.15}},l=t(16),f=t(85),g=t(77),b=t(8),h=Object(g.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"stretch"},bar:{margin:e.spacing(3)}}})),p=function(e){e.keyword;var n=e.setKeyword,t=h();return Object(b.jsx)("div",{className:t.root,children:Object(b.jsx)(f.a,{variant:"outlined",label:"Filter dependencies",className:t.bar,onChange:function(e){return n(e.target.value)}})})},j=t(82),m=Object(g.a)((function(e){return{paper:{margin:e.spacing(6),display:"flex",flexFlow:"column",flexGrow:1},root:{display:"flex",flexFlow:"column nowrap",minHeight:"100vh"},canvas:{flex:"1 1 auto",height:"75vh"}}})),v=function(e,n){var t=Object(o.useRef)(null),r=m(),a=null;Object(o.useEffect)((function(){a=t.current&&new l.b(t.current,e.data,u);var n=e.data.nodes.get(0);n.color="#4fc1ea",n.font={color:"#4fc1ea",strokeWidth:3,size:20},e.data.nodes.updateOnly(n);var o=document.getElementById("mynetwork").getElementsByTagName("canvas")[0];function r(e){o.style.cursor=e}a.on("hoverNode",(function(){r("grab")})),a.on("blurNode",(function(){r("default")})),a.on("dragStart",(function(){r("grabbing")})),a.on("dragging",(function(){r("grabbing")})),a.on("dragEnd",(function(){r("grab")})),a.on("dragEnd",(function(e){0!==e.nodes.length&&a.editNode(e.nodes[0])})),a.on("dragStart",(function(e){0!==e.nodes.length&&void 0!==a.body.nodes[e.nodes[0]].options.x&&a.body.nodes[e.nodes[0]].options.x&&a.editNode(e.nodes[0])}))}),[t,e.data,a]);return Object(b.jsx)("div",{className:r.root,children:Object(b.jsxs)(j.a,{className:r.paper,children:[Object(b.jsx)(p,{setKeyword:function(n){return function(e,n,t){if(n.data.nodes.updateOnly(n.data.nodes.get().map((function(e){return 0!==e.id&&(e.color=u.nodes.color,e.font=u.nodes.font),e}))),n.data.edges.updateOnly(n.data.edges.get().map((function(e){return e.color=u.edges.color,e}))),""!==e){var o=n.data.nodes.get({filter:function(n){return n.label.includes(e)}}),r=s(o.map((function(e){return e.label})),0,n.data.edges.map((function(e){return e}))),a=n.data.edges.get().filter((function(e){return!r.edges.includes(e.id)})).map((function(e){return e.color={color:"#e3e5e8"},e})),c=n.data.nodes.get().filter((function(e){return!r.nodes.includes(e.id)})).map((function(e){return 0!==e.id&&(e.color={background:"#e3e5e8"},e.font={color:"#e3e5e8",strokeWidth:2,size:15}),e}));o=o.map((function(e){return e.color={background:"#f39200"},e})),n.data.nodes.updateOnly(c.concat(o)),n.data.edges.updateOnly(a)}}(n,e)}}),Object(b.jsx)("div",{ref:t,id:"mynetwork",className:r.canvas})]})})};var O=t(31),x=Object(O.a)({palette:{background:{default:"#f9f9f9"}}}),y=t(83),w=t(84);var k=function(){var e=function(e){for(var n=[],t=[],o=[],r=0;r<e;r++)if(n.push({id:r,label:String(r)}),o[r]=0,1===r){var a=r;t.push({from:a,to:0}),o[a]++,o[0]++}else if(r>1){for(var c=2*t.length,d=Math.floor(Math.random()*c),s=0,i=0;i<o.length&&s<d;)s+=o[i],i++;var u=r,f=i;t.push({from:u,to:f}),o[u]++,o[f]++}return{nodes:new l.a(n),edges:new l.a(t)}}(100);return Object(b.jsxs)(y.a,{theme:x,children:[Object(b.jsx)(w.a,{}),Object(b.jsx)(v,{data:e})]})},N=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,86)).then((function(n){var t=n.getCLS,o=n.getFID,r=n.getFCP,a=n.getLCP,c=n.getTTFB;t(e),o(e),r(e),a(e),c(e)}))};c.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root")),N()}},[[47,1,2]]]);
//# sourceMappingURL=main.131ca7a4.chunk.js.map