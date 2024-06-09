import{d as p,o as r,g as c,a as s,w as e,u as a,I as m,r as P,b as l,t as u,i as f,l as h,F as d,h as S,c as v,e as g,m as y,n as H}from"./index-o_HX6XEl.js";import{_ as B}from"./GtaHelperHeader.vue_vue_type_script_setup_true_lang-LK3UWPyD.js";import{_ as D}from"./GtaHelperCard.vue_vue_type_script_setup_true_lang-A7U1rViN.js";import{_ as F}from"./GtaHelperPage.vue_vue_type_script_setup_true_lang-UrhpChW3.js";const t={saLosSantosHouses:[{name:"Jefferson",value:1e4},{name:"Verona Beach",value:1e4},{name:"Willowfield",value:1e4},{name:"El Corona",value:1e4},{name:"Mulholland",value:3e4},{name:"Santa Maria Beach",value:12e4}],saRuralZoneHouses:[{name:"Blueberry",value:1e4},{name:"Angel Pine",value:2e4},{name:"Palomino Creek",value:35e3},{name:"Dillimore",value:4e4},{name:"Whetstone",value:1e5}],saSanFierroHouses:[{name:"Doherty",value:2e4},{name:"Chinatown",value:2e4},{name:"Paradiso",value:2e4},{name:"Hashbury",value:4e4},{name:"Queens",value:5e4},{name:"Calton Heights",value:1e5}],saSanFierroBusinesses:[{name:"Zero's RC Shop",value:3e4},{name:"Wang Cars",value:3e4}],saDesertHouses:[{name:"El Quebrados",value:2e4},{name:"Tierra Robada",value:2e4},{name:"Fort Carson",value:3e4}],saDesertBusinesses:[{name:"Abandoned Airfield",value:8e4}],saLasVenturasHouses:[{name:"Pirates In Men's Pants",value:6e3},{name:"The Camel's Toe",value:6e3},{name:"The Clown's Pocket",value:6e3},{name:"Old Venturas Strip",value:6e3},{name:"Creek",value:1e4},{name:"Rockshore West",value:2e4},{name:"Whitewood Estate",value:3e4},{name:"Red sands West",value:3e4},{name:"Prickle Pine",value:5e4}]},k=[{accordion:"first",title:"Casas em Los Santos",items:t.saLosSantosHouses},{accordion:"second",title:"Casas na Zona Rural",items:t.saRuralZoneHouses},{accordion:"third",title:"Casas em San Fierro",items:t.saSanFierroHouses},{accordion:"fourth",title:"Pontos Comerciais em San Fierro",items:t.saSanFierroBusinesses},{accordion:"fifth",title:"Casas no Deserto",items:t.saDesertHouses},{accordion:"sixth",title:"Pontos Comerciais no Deserto",items:t.saDesertBusinesses},{accordion:"seventh",title:"Casas em Las Venturas",items:t.saLasVenturasHouses}],L={formatValueToUs:n=>(n=parseFloat(String(n)),n.toLocaleString("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}))},V={class:"ion-padding",slot:"content"},I=p({__name:"SaPropertiesPart",props:{items:{type:Array,required:!0}},setup(n){return(_,C)=>(r(),c(d,null,[s(a(f),{slot:"header",color:"light"},{default:e(()=>[s(a(m),{slot:"start"},{default:e(()=>[P(_.$slots,"default")]),_:3}),s(a(m),null,{default:e(()=>[l(u(n.items.length),1)]),_:1})]),_:3}),h("div",V,[s(a(g),null,{default:e(()=>[(r(!0),c(d,null,S(n.items,(o,i)=>(r(),v(a(f),{key:i},{default:e(()=>[s(a(m),null,{default:e(()=>[l(u(o.name)+" ",1),h("p",null,u(a(L).formatValueToUs(o.value)),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})])],64))}}),w=p({__name:"SaAllPropertiesPage",setup(n){return(_,C)=>(r(),v(F,null,{header:e(()=>[s(B,{title:"San Andreas - Casas"})]),content:e(()=>[s(D,null,{title:e(()=>[l(" Total ")]),subtitle:e(()=>[l(" 32 ")]),_:1}),s(a(y),null,{default:e(()=>[(r(!0),c(d,null,S(a(k),(o,i)=>(r(),v(a(H),{key:i,value:o.accordion},{default:e(()=>[s(I,{items:o.items},{default:e(()=>[l(u(o.title),1)]),_:2},1032,["items"])]),_:2},1032,["value"]))),128))]),_:1})]),_:1}))}});export{w as default};