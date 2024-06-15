System.register(["./GtaHelperPage.vue_vue_type_script_setup_true_lang-legacy-DbkwkBQj.js","./GtaHelperHeader.vue_vue_type_script_setup_true_lang-legacy--n7HS4u7.js","./GtaHelperCard.vue_vue_type_script_setup_true_lang-legacy-D-fjI-ib.js","./index-legacy-bMJyqNci.js","./_plugin-vue_export-helper-legacy-BuV6Gg6l.js"],(function(e,t){"use strict";var l,a,r,u,n,i,o,d,c,s,p,m,v,_,g,h,f,y,b,C,I,k,q,w,x,N,S,j,F,E,H;return{setters:[e=>{l=e._},e=>{a=e._},e=>{r=e._},e=>{u=e.d,n=e.p,i=e.q,o=e.o,d=e.g,c=e.a,s=e.w,p=e.u,m=e.I,v=e.r,_=e.s,g=e.b,h=e.t,f=e.v,y=e.i,b=e.l,C=e.F,I=e.h,k=e.c,q=e.x,w=e.j,x=e.y,N=e.e,S=e.z,j=e.A,F=e.m,E=e.n},e=>{H=e._}],execute:function(){var t=document.createElement("style");t.textContent=".item-image[data-v-6519d1ad]{width:100px;height:100px;margin-right:10px}\n",document.head.appendChild(t);const U={class:"ion-padding",slot:"content"},B=u({__name:"GtaHelperCollectiblePartView",props:{part:{type:String,required:!0},imageFileName:{type:String,required:!0},service:{type:Object,required:!0},onlyUnchecked:{type:Boolean,required:!1,default:!1},showNumber:{type:Boolean,required:!1,default:!0},showItemsCount:{type:Boolean,required:!1,default:!0}},emits:["update"],setup(e,{emit:t}){const l=e,a=t,r=n(0),u=n(l.service.getItemsPart(l.part));function F(e){u.value.forEach((t=>{t.collected=e})),E()}function E(){l.service.updateItemsPart(l.part,u.value),H(),a("update",u.value)}function H(){r.value=0,u.value.forEach((e=>{e.collected&&r.value++}))}return i((()=>{H()})),(t,l)=>(o(),d(C,null,[c(p(y),{slot:"header",color:"light"},{default:s((()=>[c(p(m),{slot:"start"},{default:s((()=>[v(t.$slots,"default",{},void 0,!0)])),_:3}),_(c(p(m),null,{default:s((()=>[g(h(r.value)+"/"+h(u.value.length),1)])),_:1},512),[[f,e.showItemsCount]])])),_:3}),b("div",U,[(o(!0),d(C,null,I(u.value,((t,l)=>_((o(),k(p(N),{key:l},{default:s((()=>[c(p(y),null,{default:s((()=>{var l;return[c(p(q),{slot:"start",checked:t.collected,onIonChange:e=>function(e){u.value.forEach((t=>{t.number===e.number&&(t.collected=!t.collected)})),E()}(t)},null,8,["checked","onIonChange"]),_(c(p(w),{src:null!==(l=t.imageFileName)&&void 0!==l?l:"",class:"item-image"},null,8,["src"]),[[f,t.imageFileName]]),c(p(m),null,{default:s((()=>[e.showNumber?(o(),k(p(m),{key:0},{default:s((()=>[g(h(t.number)+" ",1),_(c(p(x),null,{default:s((()=>[g(" - "+h(t.description),1)])),_:2},1536),[[f,t.description.length>0]])])),_:2},1024)):(o(),k(p(m),{key:1},{default:s((()=>[_(c(p(x),null,{default:s((()=>[g(h(t.description),1)])),_:2},1536),[[f,t.description.length>0]])])),_:2},1024))])),_:2},1024)]})),_:2},1024)])),_:2},1024)),[[f,!e.onlyUnchecked||e.onlyUnchecked&&!t.collected]]))),128)),_(c(p(S),{color:"primary",expand:"block",fill:"outline",class:"ion-padding-top",onClick:l[0]||(l[0]=e=>F(!0))},{default:s((()=>[g(" Marcar todos ")])),_:1},512),[[f,r.value<u.value.length]]),_(c(p(S),{color:"danger",expand:"block",fill:"outline",class:j(r.value<u.value.length?"":"ion-padding-top"),onClick:l[1]||(l[1]=e=>F(!1))},{default:s((()=>[g(" Desmarcar todos ")])),_:1},8,["class"]),[[f,r.value>0]])])],64))}}),G=H(B,[["__scopeId","data-v-6519d1ad"]]),P=["src"],D={class:"ion-text-end"};e("_",u({__name:"GtaHelperCollectiblePage",props:{totalItems:{type:Number,required:!0},baseDirectory:{type:String,required:!0},service:{type:Object,required:!0},items:{type:Array,required:!0},headerTitle:{type:String,required:!0},showNumber:{type:Boolean,required:!1,default:!0},mapImageFileName:{type:String,required:!0},showItemsCount:{type:Boolean,required:!1,default:!0},itemEnum:{type:String,required:!0}},setup(e){const t=e,u=n(),m=n(),v=n(!0);function _(){u.value=t.service.getSumOfCollectedItems(t.itemEnum),m.value=parseInt(String(u.value/t.totalItems*100))}return i((()=>{_()})),(t,n)=>(o(),k(l,null,{header:s((()=>[c(a,{title:e.headerTitle},null,8,["title"])])),content:s((()=>[c(r,null,{title:s((()=>[g(" Coletado ")])),subtitle:s((()=>[g(h(u.value)+"/"+h(e.totalItems)+" ("+h(m.value)+"%) ",1)])),_:1}),b("iframe",{src:e.mapImageFileName,width:"100%",height:"300px"},null,8,P),b("div",D,[c(p(S),{fill:"clear",onClick:n[0]||(n[0]=e=>v.value=!v.value)},{default:s((()=>[g(h(v.value?"Todos":"Somente Não Coletados"),1)])),_:1})]),c(p(F),null,{default:s((()=>[(o(!0),d(C,null,I(e.items,((t,l)=>(o(),k(p(E),{key:l,value:t.accordion},{default:s((()=>[c(G,{"image-file-name":`${e.baseDirectory}${t.imageFileName}`,part:t.part,service:e.service,onlyUnchecked:v.value,"show-number":e.showNumber,"show-items-count":e.showItemsCount,onUpdate:_},{default:s((()=>[g(h(t.title),1)])),_:2},1032,["image-file-name","part","service","onlyUnchecked","show-number","show-items-count"])])),_:2},1032,["value"])))),128))])),_:1})])),_:1}))}}))}}}));
