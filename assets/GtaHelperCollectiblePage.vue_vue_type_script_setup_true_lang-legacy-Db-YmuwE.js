System.register(["./GtaHelperPage.vue_vue_type_script_setup_true_lang-legacy-BTlXnPPH.js","./GtaHelperHeader.vue_vue_type_script_setup_true_lang-legacy-Cd3N8zgG.js","./GtaHelperCard.vue_vue_type_script_setup_true_lang-legacy-B0WA9tBz.js","./index-legacy-xH5muEQI.js","./_plugin-vue_export-helper-legacy-DgAO6S8O.js"],(function(e,t){"use strict";var l,a,r,s,n,i,o,u,c,d,p,m,g,v,f,_,h,y,b,I,S,k,q,x,C,N,w,j,A,F,H;return{setters:[e=>{l=e._},e=>{a=e._},e=>{r=e._},e=>{s=e.d,n=e.p,i=e.q,o=e.o,u=e.g,c=e.a,d=e.w,p=e.u,m=e.I,g=e.r,v=e.b,f=e.t,_=e.i,h=e.l,y=e.j,b=e.F,I=e.h,S=e.c,k=e.s,q=e.v,x=e.x,C=e.y,N=e.e,w=e.z,j=e.A,A=e.m,F=e.n},e=>{H=e._}],execute:function(){var t=document.createElement("style");t.textContent=".item-image[data-v-d7a3f351]{width:100px;height:100px;margin-right:10px}\n",document.head.appendChild(t),e("u",{getStorageItem:function(e){const t=localStorage.getItem(e);if(t){const l=JSON.parse(t);if((new Date).getTime()<l.expiry)return l.value;this.removeStorageItems(e)}return null},setStorageItem:function(e,t,l=null){const a=null!=l?l:31536e6;localStorage.setItem(e,JSON.stringify({value:t,expiry:(new Date).getTime()+a}))},removeStorageItems:function(...e){e.forEach((e=>{localStorage.removeItem(e)}))}}),e("d",{sanAndreas:{collectibles:{graffiti:"./public/assets/images/sanAndreas/collectibles/graffiti/",photos:"./public/assets/images/sanAndreas/collectibles/photos/",horseShoes:"./public/assets/images/sanAndreas/collectibles/horse-shoes/",oysters:"./public/assets/images/sanAndreas/collectibles/oysters/",vehicles:"./public/assets/images/sanAndreas/collectibles/vehicles/"}}});const U={class:"ion-padding",slot:"content"},D=s({__name:"GtaHelperCollectiblePartView",props:{part:{type:String,required:!0},imageFileName:{type:String,required:!0},service:{type:Object,required:!0},onlyUnchecked:{type:Boolean,required:!1,default:!1},showNumber:{type:Boolean,required:!1,default:!0}},emits:["update"],setup(e,{emit:t}){const l=e,a=t,r=n(0),s=n(l.service.getItemsPart(l.part));function A(e){s.value.forEach((t=>{t.collected=e})),F()}function F(){l.service.updateItemsPart(l.part,s.value),H(),a("update",s.value)}function H(){r.value=0,s.value.forEach((e=>{e.collected&&r.value++}))}return i((()=>{H()})),(t,l)=>(o(),u(b,null,[c(p(_),{slot:"header",color:"light"},{default:d((()=>[c(p(m),{slot:"start"},{default:d((()=>[g(t.$slots,"default",{},void 0,!0)])),_:3}),c(p(m),null,{default:d((()=>[v(f(r.value)+"/"+f(s.value.length),1)])),_:1})])),_:3}),h("div",U,[c(p(y),{src:e.imageFileName},null,8,["src"]),(o(!0),u(b,null,I(s.value,((t,l)=>(o(),S(p(N),{key:l},{default:d((()=>[k(c(p(_),null,{default:d((()=>{var l;return[c(p(q),{slot:"start",checked:t.collected,onIonChange:e=>function(e){s.value.forEach((t=>{t.number===e.number&&(t.collected=!t.collected)})),F()}(t)},null,8,["checked","onIonChange"]),k(c(p(y),{src:null!==(l=t.imageFileName)&&void 0!==l?l:"",class:"item-image"},null,8,["src"]),[[x,t.imageFileName]]),c(p(m),null,{default:d((()=>[e.showNumber?(o(),S(p(m),{key:0},{default:d((()=>[v(f(t.number)+" ",1),k(c(p(C),null,{default:d((()=>[v(" - "+f(t.description),1)])),_:2},1536),[[x,t.description.length>0]])])),_:2},1024)):(o(),S(p(m),{key:1},{default:d((()=>[k(c(p(C),null,{default:d((()=>[v(f(t.description),1)])),_:2},1536),[[x,t.description.length>0]])])),_:2},1024))])),_:2},1024)]})),_:2},1536),[[x,!e.onlyUnchecked||e.onlyUnchecked&&!t.collected]])])),_:2},1024)))),128)),k(c(p(w),{color:"primary",expand:"block",fill:"outline",class:"ion-padding-top",onClick:l[0]||(l[0]=e=>A(!0))},{default:d((()=>[v(" Marcar todos ")])),_:1},512),[[x,r.value<s.value.length]]),k(c(p(w),{color:"danger",expand:"block",fill:"outline",class:j(r.value<s.value.length?"":"ion-padding-top"),onClick:l[1]||(l[1]=e=>A(!1))},{default:d((()=>[v(" Desmarcar todos ")])),_:1},8,["class"]),[[x,r.value>0]])])],64))}}),E=H(D,[["__scopeId","data-v-d7a3f351"]]),G={class:"ion-text-end"};e("_",s({__name:"GtaHelperCollectiblePage",props:{totalItems:{type:Number,required:!0},baseDirectory:{type:String,required:!0},service:{type:Object,required:!0},items:{type:Array,required:!0},headerTitle:{type:String,required:!0},showNumber:{type:Boolean,required:!1,default:!0}},setup(e){const t=e,s=n(),m=n(),g=n(!0);function _(){s.value=t.service.getSumOfCollectedItems(),m.value=parseInt(String(s.value/t.totalItems*100))}return i((()=>{_()})),(t,n)=>(o(),S(l,null,{header:d((()=>[c(a,{title:e.headerTitle},null,8,["title"])])),content:d((()=>[c(r,null,{title:d((()=>[v(" Coletado ")])),subtitle:d((()=>[v(f(s.value)+"/"+f(e.totalItems)+" ("+f(m.value)+"%) ",1)])),_:1}),h("div",G,[c(p(w),{fill:"clear",onClick:n[0]||(n[0]=e=>g.value=!g.value)},{default:d((()=>[v(f(g.value?"Todos":"Somente Não Coletados"),1)])),_:1})]),c(p(A),null,{default:d((()=>[(o(!0),u(b,null,I(e.items,((t,l)=>(o(),S(p(F),{key:l,value:t.accordion},{default:d((()=>[c(E,{"image-file-name":`${e.baseDirectory}${t.imageFileName}`,part:t.part,service:e.service,onlyUnchecked:g.value,"show-number":e.showNumber,onUpdate:_},{default:d((()=>[v(f(t.title),1)])),_:2},1032,["image-file-name","part","service","onlyUnchecked","show-number"])])),_:2},1032,["value"])))),128))])),_:1})])),_:1}))}}))}}}));
