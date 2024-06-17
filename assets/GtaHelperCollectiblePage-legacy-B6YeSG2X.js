System.register(["./GtaHelperPage.vue_vue_type_script_setup_true_lang-legacy-B1tzlCT_.js","./GtaHelperHeader.vue_vue_type_script_setup_true_lang-legacy-DbOmN8fx.js","./GtaHelperCard.vue_vue_type_script_setup_true_lang-legacy-DNtnSC_A.js","./index-legacy-NiU9aLye.js"],(function(e,t){"use strict";var l,a,r,u,n,o,i,c,d,s,p,m,v,g,_,h,f,y,b,w,k,I,C,q,N,x,S,j,F,E,G;return{setters:[e=>{l=e._},e=>{a=e._},e=>{r=e._},e=>{u=e.d,n=e.p,o=e.q,i=e.o,c=e.g,d=e.a,s=e.w,p=e.u,m=e.I,v=e.r,g=e.s,_=e.b,h=e.t,f=e.v,y=e.i,b=e.l,w=e.F,k=e.h,I=e.c,C=e.x,q=e.j,N=e.y,x=e.e,S=e.z,j=e.A,F=e._,E=e.m,G=e.n}],execute:function(){var t=document.createElement("style");t.textContent=".item-image[data-v-6519d1ad]{width:100px;height:100px;margin-right:10px}iframe[data-v-a94e1a9c]{-webkit-overflow-scrolling:touch}\n",document.head.appendChild(t);const H={class:"ion-padding",slot:"content"},U=u({__name:"GtaHelperCollectiblePartView",props:{part:{type:String,required:!0},imageFileName:{type:String,required:!0},service:{type:Object,required:!0},onlyUnchecked:{type:Boolean,required:!1,default:!1},showNumber:{type:Boolean,required:!1,default:!0},showItemsCount:{type:Boolean,required:!1,default:!0}},emits:["update"],setup(e,{emit:t}){const l=e,a=t,r=n(0),u=n(l.service.getItemsPart(l.part));function F(e){u.value.forEach((t=>{t.collected=e})),E()}function E(){l.service.updateItemsPart(l.part,u.value),G(),a("update",u.value)}function G(){r.value=0,u.value.forEach((e=>{e.collected&&r.value++}))}return o((()=>{G()})),(t,l)=>(i(),c(w,null,[d(p(y),{slot:"header",color:"light"},{default:s((()=>[d(p(m),{slot:"start"},{default:s((()=>[v(t.$slots,"default",{},void 0,!0)])),_:3}),g(d(p(m),null,{default:s((()=>[_(h(r.value)+"/"+h(u.value.length),1)])),_:1},512),[[f,e.showItemsCount]])])),_:3}),b("div",H,[(i(!0),c(w,null,k(u.value,((t,l)=>g((i(),I(p(x),{key:l},{default:s((()=>[d(p(y),null,{default:s((()=>{var l;return[d(p(C),{slot:"start",checked:t.collected,onIonChange:e=>function(e){u.value.forEach((t=>{t.number===e.number&&(t.collected=!t.collected)})),E()}(t)},null,8,["checked","onIonChange"]),g(d(p(q),{src:null!==(l=t.imageFileName)&&void 0!==l?l:"",class:"item-image"},null,8,["src"]),[[f,t.imageFileName]]),d(p(m),null,{default:s((()=>[e.showNumber?(i(),I(p(m),{key:0},{default:s((()=>[_(h(t.number)+" ",1),g(d(p(N),null,{default:s((()=>[_(" - "+h(t.description),1)])),_:2},1536),[[f,t.description.length>0]])])),_:2},1024)):(i(),I(p(m),{key:1},{default:s((()=>[g(d(p(N),null,{default:s((()=>[_(h(t.description),1)])),_:2},1536),[[f,t.description.length>0]])])),_:2},1024))])),_:2},1024)]})),_:2},1024)])),_:2},1024)),[[f,!e.onlyUnchecked||e.onlyUnchecked&&!t.collected]]))),128)),g(d(p(S),{color:"primary",expand:"block",fill:"outline",class:"ion-padding-top",onClick:l[0]||(l[0]=e=>F(!0))},{default:s((()=>[_(" Marcar todos ")])),_:1},512),[[f,r.value<u.value.length]]),g(d(p(S),{color:"danger",expand:"block",fill:"outline",class:j(r.value<u.value.length?"":"ion-padding-top"),onClick:l[1]||(l[1]=e=>F(!1))},{default:s((()=>[_(" Desmarcar todos ")])),_:1},8,["class"]),[[f,r.value>0]])])],64))}}),B=F(U,[["__scopeId","data-v-6519d1ad"]]),P={style:{overflow:"auto","-webkit-overflow-scrolling":"touch"}},D=["src"],O={class:"ion-text-end"},T=u({__name:"GtaHelperCollectiblePage",props:{totalItems:{type:Number,required:!0},baseDirectory:{type:String,required:!0},service:{type:Object,required:!0},items:{type:Array,required:!0},headerTitle:{type:String,required:!0},showNumber:{type:Boolean,required:!1,default:!0},mapImageFileName:{type:String,required:!0},showItemsCount:{type:Boolean,required:!1,default:!0},itemEnum:{type:String,required:!0}},setup(e){const t=e,u=n(),m=n(),v=n(!0);function g(){u.value=t.service.getSumOfCollectedItems(t.itemEnum),m.value=parseInt(String(u.value/t.totalItems*100))}return o((()=>{g()})),(t,n)=>(i(),I(l,null,{header:s((()=>[d(a,{title:e.headerTitle},null,8,["title"])])),content:s((()=>[d(r,null,{title:s((()=>[_(" Coletado ")])),subtitle:s((()=>[_(h(u.value)+"/"+h(e.totalItems)+" ("+h(m.value)+"%) ",1)])),_:1}),b("div",P,[b("iframe",{src:e.mapImageFileName,width:"100%",height:"300px"},null,8,D)]),b("div",O,[d(p(S),{fill:"clear",onClick:n[0]||(n[0]=e=>v.value=!v.value)},{default:s((()=>[_(h(v.value?"Todos":"Somente Não Coletados"),1)])),_:1})]),d(p(E),null,{default:s((()=>[(i(!0),c(w,null,k(e.items,((t,l)=>(i(),I(p(G),{key:l,value:t.accordion},{default:s((()=>[d(B,{"image-file-name":`${e.baseDirectory}${t.imageFileName}`,part:t.part,service:e.service,onlyUnchecked:v.value,"show-number":e.showNumber,"show-items-count":e.showItemsCount,onUpdate:g},{default:s((()=>[_(h(t.title),1)])),_:2},1032,["image-file-name","part","service","onlyUnchecked","show-number","show-items-count"])])),_:2},1032,["value"])))),128))])),_:1})])),_:1}))}});e("G",F(T,[["__scopeId","data-v-a94e1a9c"]]))}}}));