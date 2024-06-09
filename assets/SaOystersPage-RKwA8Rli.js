import{_ as E}from"./GtaHelperCard.vue_vue_type_script_setup_true_lang-BlGMSfYu.js";import{d as k,p as h,q as $,o as u,g as I,a,w as r,u as t,I as g,r as A,b as f,t as o,i as v,l as C,j as B,F as P,h as V,c as F,s as L,e as q,m as U,n as j}from"./index-Bzj9WBoP.js";import{_ as D}from"./GtaHelperHeader.vue_vue_type_script_setup_true_lang-Bujcl1gB.js";import{_ as G}from"./GtaHelperPage.vue_vue_type_script_setup_true_lang--6yVEyXj.js";import{u as N,d as M}from"./utilLocalStorage-BbPafjsp.js";const l={partOne:"saOystersPartOne",partTwo:"saOystersPartTwo",partThree:"saOystersPartThree",partFour:"saOystersPartFour"},O={saOystersPartOne:[{number:14,description:"",collected:!1},{number:44,description:"",collected:!1},{number:45,description:"",collected:!1},{number:46,description:"",collected:!1},{number:47,description:"",collected:!1},{number:48,description:"",collected:!1},{number:49,description:"",collected:!1},{number:50,description:"",collected:!1}],saOystersPartTwo:[{number:26,description:"",collected:!1},{number:27,description:"",collected:!1},{number:28,description:"",collected:!1},{number:29,description:"",collected:!1},{number:30,description:"",collected:!1},{number:31,description:"",collected:!1},{number:32,description:"",collected:!1},{number:33,description:"",collected:!1},{number:34,description:"",collected:!1},{number:35,description:"",collected:!1},{number:36,description:"",collected:!1},{number:37,description:"",collected:!1},{number:38,description:"",collected:!1},{number:39,description:"",collected:!1},{number:40,description:"",collected:!1},{number:41,description:"",collected:!1},{number:42,description:"",collected:!1},{number:43,description:"",collected:!1}],saOystersPartThree:[{number:21,description:"",collected:!1},{number:22,description:"",collected:!1},{number:23,description:"",collected:!1},{number:24,description:"",collected:!1},{number:25,description:"",collected:!1}],saOystersPartFour:[{number:1,description:"",collected:!1},{number:2,description:"",collected:!1},{number:3,description:"",collected:!1},{number:4,description:"",collected:!1},{number:5,description:"",collected:!1},{number:6,description:"",collected:!1},{number:7,description:"",collected:!1},{number:8,description:"",collected:!1},{number:9,description:"",collected:!1},{number:10,description:"",collected:!1},{number:11,description:"",collected:!1},{number:12,description:"",collected:!1},{number:13,description:"",collected:!1},{number:15,description:"",collected:!1},{number:16,description:"",collected:!1},{number:17,description:"",collected:!1},{number:18,description:"",collected:!1},{number:19,description:"",collected:!1},{number:20,description:"",collected:!1}]},S={getOysters:function(s){let e=N.getStorageItem(s);return e||(s===l.partOne?e=O.saOystersPartOne:s===l.partTwo?e=O.saOystersPartTwo:s===l.partThree?e=O.saOystersPartThree:s===l.partFour?e=O.saOystersPartFour:e=[],this.updateOysters(s,e)),e},updateOysters:function(s,e){N.setStorageItem(s,e,null)},getSumOfCollectedItems:function(){let e=this.getOysters(l.partOne).concat(this.getOysters(l.partTwo),this.getOysters(l.partThree),this.getOysters(l.partFour)),c=0;return e.forEach(i=>{i.collected&&c++}),c}},z=[{accordion:"first",imageFileName:"sa_oysters_1.png",part:l.partOne,title:"Parte 1"},{accordion:"second",imageFileName:"sa_oysters_2.png",part:l.partTwo,title:"Parte 2"},{accordion:"third",imageFileName:"sa_oysters_3.png",part:l.partThree,title:"Parte 3"},{accordion:"fourth",imageFileName:"sa_oysters_4.png",part:l.partFour,title:"Parte 4"}],H={class:"ion-padding",slot:"content"},J=k({__name:"SaOystersPart",props:{part:{type:String,required:!0},imageFileName:{type:String,required:!0}},emits:["update:oysters"],setup(s,{emit:e}){const c=s,i=e,n=S.getOysters(c.part),b=h(0);function d(p){n.forEach(y=>{y.number===p.number&&(y.collected=!y.collected)}),S.updateOysters(c.part,n),_(),i("update:oysters",n)}function _(){b.value=0,n.forEach(p=>{p.collected&&b.value++})}return $(()=>{_()}),(p,y)=>(u(),I(P,null,[a(t(v),{slot:"header",color:"light"},{default:r(()=>[a(t(g),{slot:"start"},{default:r(()=>[A(p.$slots,"default")]),_:3}),a(t(g),null,{default:r(()=>[f(o(b.value)+"/"+o(t(n).length),1)]),_:1})]),_:3}),C("div",H,[a(t(B),{src:"".concat(t(M).sanAndreas.collectibles.oysters).concat(s.imageFileName)},null,8,["src"]),a(t(q),null,{default:r(()=>[(u(!0),I(P,null,V(t(n),(m,x)=>(u(),F(t(v),{key:x},{default:r(()=>[a(t(L),{slot:"start",modelValue:m.collected,"onUpdate:modelValue":T=>m.collected=T,onClick:T=>d(m)},null,8,["modelValue","onUpdate:modelValue","onClick"]),a(t(g),null,{default:r(()=>[f(o(m.number)+" ",1),C("p",null,o(m.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})])],64))}}),w=50,Y=k({__name:"SaOystersPage",setup(s){const e=h(),c=h();function i(){e.value=S.getSumOfCollectedItems(),c.value=parseInt(String(e.value/w*100))}return $(()=>{i()}),(n,b)=>(u(),F(G,null,{header:r(()=>[a(D,{title:"San Andreas - Ostras"})]),content:r(()=>[a(E,null,{title:r(()=>[f(" Coletado ")]),subtitle:r(()=>[f(o(e.value)+"/"+o(w)+" ("+o(c.value)+"%) ",1)]),_:1}),a(t(U),null,{default:r(()=>[(u(!0),I(P,null,V(t(z),(d,_)=>(u(),F(t(j),{key:_,value:d.accordion},{default:r(()=>[a(J,{"image-file-name":d.imageFileName,part:d.part,"onUpdate:horseShoes":i},{default:r(()=>[f(o(d.title),1)]),_:2},1032,["image-file-name","part"])]),_:2},1032,["value"]))),128))]),_:1})]),_:1}))}});export{Y as default};
