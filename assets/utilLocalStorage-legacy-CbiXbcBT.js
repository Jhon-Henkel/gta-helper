System.register(["./GtaHelperPage.vue_vue_type_script_setup_true_lang-legacy-CKpns3Ru.js","./GtaHelperHeader.vue_vue_type_script_setup_true_lang-legacy-DIDLRjYQ.js","./GtaHelperCard.vue_vue_type_script_setup_true_lang-legacy-Crwk_LZe.js","./index-legacy-BQ5RBHHL.js","./_plugin-vue_export-helper-legacy-BuV6Gg6l.js"],(function(e,t){"use strict";var l,a,r,n,u,o,i,c,s,d,m,p,g,v,_,f,h,y,I,b,w,S,C,k,q,x,N,j,E,F,H;return{setters:[e=>{l=e._},e=>{a=e._},e=>{r=e._},e=>{n=e.d,u=e.p,o=e.q,i=e.o,c=e.g,s=e.a,d=e.w,m=e.u,p=e.I,g=e.r,v=e.s,_=e.b,f=e.t,h=e.v,y=e.i,I=e.l,b=e.F,w=e.h,S=e.c,C=e.x,k=e.j,q=e.y,x=e.e,N=e.z,j=e.A,E=e.m,F=e.n},e=>{H=e._}],execute:function(){var t=document.createElement("style");t.textContent=".item-image[data-v-e749a76b]{width:100px;height:100px;margin-right:10px}\n",document.head.appendChild(t);const U={class:"ion-padding",slot:"content"},B=n({__name:"GtaHelperCollectiblePartView",props:{part:{type:String,required:!0},imageFileName:{type:String,required:!0},service:{type:Object,required:!0},onlyUnchecked:{type:Boolean,required:!1,default:!1},showNumber:{type:Boolean,required:!1,default:!0},showItemsCount:{type:Boolean,required:!1,default:!0}},emits:["update"],setup(e,{emit:t}){const l=e,a=t,r=u(0),n=u(l.service.getItemsPart(l.part));function E(e){n.value.forEach((t=>{t.collected=e})),F()}function F(){l.service.updateItemsPart(l.part,n.value),H(),a("update",n.value)}function H(){r.value=0,n.value.forEach((e=>{e.collected&&r.value++}))}return o((()=>{H()})),(t,l)=>(i(),c(b,null,[s(m(y),{slot:"header",color:"light"},{default:d((()=>[s(m(p),{slot:"start"},{default:d((()=>[g(t.$slots,"default",{},void 0,!0)])),_:3}),v(s(m(p),null,{default:d((()=>[_(f(r.value)+"/"+f(n.value.length),1)])),_:1},512),[[h,e.showItemsCount]])])),_:3}),I("div",U,[(i(!0),c(b,null,w(n.value,((t,l)=>(i(),S(m(x),{key:l},{default:d((()=>[v(s(m(y),null,{default:d((()=>{var l;return[s(m(C),{slot:"start",checked:t.collected,onIonChange:e=>function(e){n.value.forEach((t=>{t.number===e.number&&(t.collected=!t.collected)})),F()}(t)},null,8,["checked","onIonChange"]),v(s(m(k),{src:null!==(l=t.imageFileName)&&void 0!==l?l:"",class:"item-image"},null,8,["src"]),[[h,t.imageFileName]]),s(m(p),null,{default:d((()=>[e.showNumber?(i(),S(m(p),{key:0},{default:d((()=>[_(f(t.number)+" ",1),v(s(m(q),null,{default:d((()=>[_(" - "+f(t.description),1)])),_:2},1536),[[h,t.description.length>0]])])),_:2},1024)):(i(),S(m(p),{key:1},{default:d((()=>[v(s(m(q),null,{default:d((()=>[_(f(t.description),1)])),_:2},1536),[[h,t.description.length>0]])])),_:2},1024))])),_:2},1024)]})),_:2},1536),[[h,!e.onlyUnchecked||e.onlyUnchecked&&!t.collected]])])),_:2},1024)))),128)),v(s(m(N),{color:"primary",expand:"block",fill:"outline",class:"ion-padding-top",onClick:l[0]||(l[0]=e=>E(!0))},{default:d((()=>[_(" Marcar todos ")])),_:1},512),[[h,r.value<n.value.length]]),v(s(m(N),{color:"danger",expand:"block",fill:"outline",class:j(r.value<n.value.length?"":"ion-padding-top"),onClick:l[1]||(l[1]=e=>E(!1))},{default:d((()=>[_(" Desmarcar todos ")])),_:1},8,["class"]),[[h,r.value>0]])])],64))}}),D=H(B,[["__scopeId","data-v-e749a76b"]]),G=["src"],O={class:"ion-text-end"};e("_",n({__name:"GtaHelperCollectiblePage",props:{totalItems:{type:Number,required:!0},baseDirectory:{type:String,required:!0},service:{type:Object,required:!0},items:{type:Array,required:!0},headerTitle:{type:String,required:!0},showNumber:{type:Boolean,required:!1,default:!0},mapImageFileName:{type:String,required:!0},showItemsCount:{type:Boolean,required:!1,default:!0},itemEnum:{type:String,required:!0}},setup(e){const t=e,n=u(),p=u(),g=u(!0);function v(){n.value=t.service.getSumOfCollectedItems(t.itemEnum),p.value=parseInt(String(n.value/t.totalItems*100))}return o((()=>{v()})),(t,u)=>(i(),S(l,null,{header:d((()=>[s(a,{title:e.headerTitle},null,8,["title"])])),content:d((()=>[s(r,null,{title:d((()=>[_(" Coletado ")])),subtitle:d((()=>[_(f(n.value)+"/"+f(e.totalItems)+" ("+f(p.value)+"%) ",1)])),_:1}),I("iframe",{src:e.mapImageFileName,width:"100%",height:"300px",allowfullscreen:""},null,8,G),I("div",O,[s(m(N),{fill:"clear",onClick:u[0]||(u[0]=e=>g.value=!g.value)},{default:d((()=>[_(f(g.value?"Todos":"Somente Não Coletados"),1)])),_:1})]),s(m(E),null,{default:d((()=>[(i(!0),c(b,null,w(e.items,((t,l)=>(i(),S(m(F),{key:l,value:t.accordion},{default:d((()=>[s(D,{"image-file-name":`${e.baseDirectory}${t.imageFileName}`,part:t.part,service:e.service,onlyUnchecked:g.value,"show-number":e.showNumber,"show-items-count":e.showItemsCount,onUpdate:v},{default:d((()=>[_(f(t.title),1)])),_:2},1032,["image-file-name","part","service","onlyUnchecked","show-number","show-items-count"])])),_:2},1032,["value"])))),128))])),_:1})])),_:1}))}})),e("u",{getStorageItem:function(e){const t=localStorage.getItem(e);if(t){const l=JSON.parse(t);if((new Date).getTime()<l.expiry)return l.value;this.removeStorageItems(e)}return null},setStorageItem:function(e,t,l=null){const a=null!=l?l:31536e6;localStorage.setItem(e,JSON.stringify({value:t,expiry:(new Date).getTime()+a}))},removeStorageItems:function(...e){e.forEach((e=>{localStorage.removeItem(e)}))}})}}}));
