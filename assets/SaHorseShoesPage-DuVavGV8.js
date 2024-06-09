import{_ as y}from"./GtaHelperCard.vue_vue_type_script_setup_true_lang-A7U1rViN.js";import{d as k,p as H,q as $,o as u,g as I,a as l,w as s,u as t,I as g,r as E,b as f,t as c,i as C,l as O,j as A,F as P,h as V,c as F,s as B,e as L,m as q,n as U}from"./index-o_HX6XEl.js";import{_ as j}from"./GtaHelperHeader.vue_vue_type_script_setup_true_lang-LK3UWPyD.js";import{_ as D}from"./GtaHelperPage.vue_vue_type_script_setup_true_lang-UrhpChW3.js";import{u as N,d as G}from"./utilLocalStorage-BbPafjsp.js";const r={partOne:"saHorseShoesPartOne",partTwo:"saHorseShoesPartTwo",partThree:"saHorseShoesPartThree",partFour:"saHorseShoesPartFour"},S={saHorseShoesPartOne:[{number:1,description:"",collected:!1},{number:2,description:"",collected:!1},{number:3,description:"",collected:!1},{number:4,description:"",collected:!1},{number:5,description:"",collected:!1},{number:16,description:"",collected:!1},{number:17,description:"",collected:!1},{number:18,description:"",collected:!1},{number:19,description:"",collected:!1},{number:20,description:"",collected:!1},{number:21,description:"",collected:!1},{number:22,description:"",collected:!1}],saHorseShoesPartTwo:[{number:23,description:"",collected:!1},{number:24,description:"",collected:!1},{number:25,description:"",collected:!1},{number:26,description:"",collected:!1},{number:27,description:"",collected:!1},{number:28,description:"",collected:!1},{number:29,description:"",collected:!1},{number:32,description:"",collected:!1}],saHorseShoesPartThree:[{number:30,description:"",collected:!1},{number:31,description:"",collected:!1},{number:33,description:"",collected:!1},{number:34,description:"",collected:!1},{number:35,description:"",collected:!1},{number:36,description:"",collected:!1},{number:37,description:"",collected:!1},{number:38,description:"",collected:!1},{number:39,description:"",collected:!1},{number:40,description:"",collected:!1},{number:41,description:"",collected:!1}],saHorseShoesPartFour:[{number:6,description:"",collected:!1},{number:7,description:"",collected:!1},{number:8,description:"",collected:!1},{number:9,description:"",collected:!1},{number:10,description:"",collected:!1},{number:11,description:"",collected:!1},{number:12,description:"",collected:!1},{number:13,description:"",collected:!1},{number:14,description:"",collected:!1},{number:15,description:"",collected:!1},{number:42,description:"",collected:!1},{number:43,description:"",collected:!1},{number:44,description:"",collected:!1},{number:45,description:"",collected:!1},{number:46,description:"",collected:!1},{number:47,description:"",collected:!1},{number:48,description:"",collected:!1},{number:49,description:"",collected:!1},{number:50,description:"",collected:!1}]},T={getHorseShoes:function(o){let e=N.getStorageItem(o);return e||(o===r.partOne?e=S.saHorseShoesPartOne:o===r.partTwo?e=S.saHorseShoesPartTwo:o===r.partThree?e=S.saHorseShoesPartThree:o===r.partFour?e=S.saHorseShoesPartFour:e=[],this.updateHorseShoes(o,e)),e},updateHorseShoes:function(o,e){N.setStorageItem(o,e,null)},getSumOfCollectedItems:function(){let e=this.getHorseShoes(r.partOne).concat(this.getHorseShoes(r.partTwo),this.getHorseShoes(r.partThree),this.getHorseShoes(r.partFour)),a=0;return e.forEach(i=>{i.collected&&a++}),a}},M={class:"ion-padding",slot:"content"},z=k({__name:"SaHorseShoesPart",props:{part:{type:String,required:!0},imageFileName:{type:String,required:!0}},emits:["update:horse-shoes"],setup(o,{emit:e}){const a=o,i=e,n=T.getHorseShoes(a.part),h=H(0);function d(p){n.forEach(_=>{_.number===p.number&&(_.collected=!_.collected)}),T.updateHorseShoes(a.part,n),b(),i("update:horse-shoes",n)}function b(){h.value=0,n.forEach(p=>{p.collected&&h.value++})}return $(()=>{b()}),(p,_)=>(u(),I(P,null,[l(t(C),{slot:"header",color:"light"},{default:s(()=>[l(t(g),{slot:"start"},{default:s(()=>[E(p.$slots,"default")]),_:3}),l(t(g),null,{default:s(()=>[f(c(h.value)+"/"+c(t(n).length),1)]),_:1})]),_:3}),O("div",M,[l(t(A),{src:"".concat(t(G).sanAndreas.collectibles.horseShoes).concat(o.imageFileName)},null,8,["src"]),l(t(L),null,{default:s(()=>[(u(!0),I(P,null,V(t(n),(m,x)=>(u(),F(t(C),{key:x},{default:s(()=>[l(t(B),{slot:"start",modelValue:m.collected,"onUpdate:modelValue":v=>m.collected=v,onClick:v=>d(m)},null,8,["modelValue","onUpdate:modelValue","onClick"]),l(t(g),null,{default:s(()=>[f(c(m.number)+" ",1),O("p",null,c(m.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})])],64))}}),J=[{accordion:"first",imageFileName:"sa_horse_shoes_1.png",part:r.partOne,title:"Parte 1"},{accordion:"second",imageFileName:"sa_horse_shoes_2.png",part:r.partTwo,title:"Parte 2"},{accordion:"third",imageFileName:"sa_horse_shoes_3.png",part:r.partThree,title:"Parte 3"},{accordion:"fourth",imageFileName:"sa_horse_shoes_4.png",part:r.partFour,title:"Parte 4"}],w=50,Y=k({__name:"SaHorseShoesPage",setup(o){const e=H(),a=H();function i(){e.value=T.getSumOfCollectedItems(),a.value=parseInt(String(e.value/w*100))}return $(()=>{i()}),(n,h)=>(u(),F(D,null,{header:s(()=>[l(j,{title:"San Andreas - Ferraduras"})]),content:s(()=>[l(y,null,{title:s(()=>[f(" Coletado ")]),subtitle:s(()=>[f(c(e.value)+"/"+c(w)+" ("+c(a.value)+"%) ",1)]),_:1}),l(t(q),null,{default:s(()=>[(u(!0),I(P,null,V(t(J),(d,b)=>(u(),F(t(U),{key:b,value:d.accordion},{default:s(()=>[l(z,{"image-file-name":d.imageFileName,part:d.part,"onUpdate:horseShoes":i},{default:s(()=>[f(c(d.title),1)]),_:2},1032,["image-file-name","part"])]),_:2},1032,["value"]))),128))]),_:1})]),_:1}))}});export{Y as default};