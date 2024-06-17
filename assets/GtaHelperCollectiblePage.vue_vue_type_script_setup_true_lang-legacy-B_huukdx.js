System.register(["./GtaHelperPage.vue_vue_type_script_setup_true_lang-legacy-D-SPCqgj.js","./GtaHelperHeader.vue_vue_type_script_setup_true_lang-legacy-BklWhuFv.js","./GtaHelperCard.vue_vue_type_script_setup_true_lang-legacy-DAD0FK_0.js","./index-legacy-DnhncAiM.js"],(function(e,t){"use strict";var l,a,r,u,n,i,o,d,c,s,p,m,v,g,_,h,f,y,b,w,C,I,k,q,N,x,S,j,F,E,H;return{setters:[e=>{l=e._},e=>{a=e._},e=>{r=e._},e=>{u=e.d,n=e.p,i=e.q,o=e.o,d=e.g,c=e.a,s=e.w,p=e.u,m=e.I,v=e.r,g=e.s,_=e.b,h=e.t,f=e.v,y=e.i,b=e.l,w=e.F,C=e.h,I=e.c,k=e.x,q=e.j,N=e.y,x=e.e,S=e.z,j=e.A,F=e._,E=e.m,H=e.n}],execute:function(){var t=document.createElement("style");t.textContent=".item-image[data-v-6519d1ad]{width:100px;height:100px;margin-right:10px}\n",document.head.appendChild(t);const U={class:"ion-padding",slot:"content"},B=u({__name:"GtaHelperCollectiblePartView",props:{part:{type:String,required:!0},imageFileName:{type:String,required:!0},service:{type:Object,required:!0},onlyUnchecked:{type:Boolean,required:!1,default:!1},showNumber:{type:Boolean,required:!1,default:!0},showItemsCount:{type:Boolean,required:!1,default:!0}},emits:["update"],setup(e,{emit:t}){const l=e,a=t,r=n(0),u=n(l.service.getItemsPart(l.part));function F(e){u.value.forEach((t=>{t.collected=e})),E()}function E(){l.service.updateItemsPart(l.part,u.value),H(),a("update",u.value)}function H(){r.value=0,u.value.forEach((e=>{e.collected&&r.value++}))}return i((()=>{H()})),(t,l)=>(o(),d(w,null,[c(p(y),{slot:"header",color:"light"},{default:s((()=>[c(p(m),{slot:"start"},{default:s((()=>[v(t.$slots,"default",{},void 0,!0)])),_:3}),g(c(p(m),null,{default:s((()=>[_(h(r.value)+"/"+h(u.value.length),1)])),_:1},512),[[f,e.showItemsCount]])])),_:3}),b("div",U,[(o(!0),d(w,null,C(u.value,((t,l)=>g((o(),I(p(x),{key:l},{default:s((()=>[c(p(y),null,{default:s((()=>{var l;return[c(p(k),{slot:"start",checked:t.collected,onIonChange:e=>function(e){u.value.forEach((t=>{t.number===e.number&&(t.collected=!t.collected)})),E()}(t)},null,8,["checked","onIonChange"]),g(c(p(q),{src:null!==(l=t.imageFileName)&&void 0!==l?l:"",class:"item-image"},null,8,["src"]),[[f,t.imageFileName]]),c(p(m),null,{default:s((()=>[e.showNumber?(o(),I(p(m),{key:0},{default:s((()=>[_(h(t.number)+" ",1),g(c(p(N),null,{default:s((()=>[_(" - "+h(t.description),1)])),_:2},1536),[[f,t.description.length>0]])])),_:2},1024)):(o(),I(p(m),{key:1},{default:s((()=>[g(c(p(N),null,{default:s((()=>[_(h(t.description),1)])),_:2},1536),[[f,t.description.length>0]])])),_:2},1024))])),_:2},1024)]})),_:2},1024)])),_:2},1024)),[[f,!e.onlyUnchecked||e.onlyUnchecked&&!t.collected]]))),128)),g(c(p(S),{color:"primary",expand:"block",fill:"outline",class:"ion-padding-top",onClick:l[0]||(l[0]=e=>F(!0))},{default:s((()=>[_(" Marcar todos ")])),_:1},512),[[f,r.value<u.value.length]]),g(c(p(S),{color:"danger",expand:"block",fill:"outline",class:j(r.value<u.value.length?"":"ion-padding-top"),onClick:l[1]||(l[1]=e=>F(!1))},{default:s((()=>[_(" Desmarcar todos ")])),_:1},8,["class"]),[[f,r.value>0]])])],64))}}),G=F(B,[["__scopeId","data-v-6519d1ad"]]),P=["src"],$={class:"ion-text-end"};e("_",u({__name:"GtaHelperCollectiblePage",props:{totalItems:{type:Number,required:!0},baseDirectory:{type:String,required:!0},service:{type:Object,required:!0},items:{type:Array,required:!0},headerTitle:{type:String,required:!0},showNumber:{type:Boolean,required:!1,default:!0},mapImageFileName:{type:String,required:!0},showItemsCount:{type:Boolean,required:!1,default:!0},itemEnum:{type:String,required:!0}},setup(e){const t=e,u=n(),m=n(),v=n(!0),g=n("");function f(){u.value=t.service.getSumOfCollectedItems(t.itemEnum),m.value=parseInt(String(u.value/t.totalItems*100))}return i((()=>{f(),g.value=`${t.mapImageFileName}?t=${Date.now()}`})),(t,n)=>(o(),I(l,null,{header:s((()=>[c(a,{title:e.headerTitle},null,8,["title"])])),content:s((()=>[c(r,null,{title:s((()=>[_(" Coletado ")])),subtitle:s((()=>[_(h(u.value)+"/"+h(e.totalItems)+" ("+h(m.value)+"%) ",1)])),_:1}),b("iframe",{src:g.value,width:"100%",height:"300px",loading:"lazy",allowfullscreen:""},null,8,P),b("div",$,[c(p(S),{fill:"clear",onClick:n[0]||(n[0]=e=>v.value=!v.value)},{default:s((()=>[_(h(v.value?"Todos":"Somente Não Coletados"),1)])),_:1})]),c(p(E),null,{default:s((()=>[(o(!0),d(w,null,C(e.items,((t,l)=>(o(),I(p(H),{key:l,value:t.accordion},{default:s((()=>[c(G,{"image-file-name":`${e.baseDirectory}${t.imageFileName}`,part:t.part,service:e.service,onlyUnchecked:v.value,"show-number":e.showNumber,"show-items-count":e.showItemsCount,onUpdate:f},{default:s((()=>[_(h(t.title),1)])),_:2},1032,["image-file-name","part","service","onlyUnchecked","show-number","show-items-count"])])),_:2},1032,["value"])))),128))])),_:1})])),_:1}))}}))}}}));
