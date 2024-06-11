System.register(["./GtaHelperPage.vue_vue_type_script_setup_true_lang-legacy-BySB9sCw.js","./GtaHelperHeader.vue_vue_type_script_setup_true_lang-legacy-DZcJKnlm.js","./GtaHelperCard.vue_vue_type_script_setup_true_lang-legacy-DmsGmacX.js","./index-legacy-Cs67UkvO.js","./_plugin-vue_export-helper-legacy-DgAO6S8O.js"],(function(e,t){"use strict";var l,a,r,s,i,n,o,u,c,d,p,m,g,v,_,f,h,y,b,k,S,I,q,x,C,N,w,j,A,F,H,U;return{setters:[e=>{l=e._},e=>{a=e._},e=>{r=e._},e=>{s=e.d,i=e.p,n=e.q,o=e.s,u=e.v,c=e.o,d=e.g,p=e.a,m=e.w,g=e.u,v=e.I,_=e.r,f=e.b,h=e.t,y=e.i,b=e.l,k=e.j,S=e.F,I=e.h,q=e.c,x=e.x,C=e.y,N=e.z,w=e.A,j=e.e,A=e.B,F=e.m,H=e.n},e=>{U=e._}],execute:function(){var t=document.createElement("style");t.textContent=".item-image[data-v-88c64678]{width:100px;height:100px;margin-right:10px}\n",document.head.appendChild(t),e("u",{getStorageItem:function(e){const t=localStorage.getItem(e);if(t){const l=JSON.parse(t);if((new Date).getTime()<l.expiry)return l.value;this.removeStorageItems(e)}return null},setStorageItem:function(e,t,l=null){const a=null!=l?l:31536e6;localStorage.setItem(e,JSON.stringify({value:t,expiry:(new Date).getTime()+a}))},removeStorageItems:function(...e){e.forEach((e=>{localStorage.removeItem(e)}))}}),e("d",{sanAndreas:{collectibles:{graffiti:"./public/assets/images/sanAndreas/collectibles/graffiti/",photos:"./public/assets/images/sanAndreas/collectibles/photos/",horseShoes:"./public/assets/images/sanAndreas/collectibles/horse-shoes/",oysters:"./public/assets/images/sanAndreas/collectibles/oysters/",vehicles:"./public/assets/images/sanAndreas/collectibles/vehicles/"}}});const D={class:"ion-padding",slot:"content"},E=s({__name:"GtaHelperCollectiblePartView",props:{part:{type:String,required:!0},imageFileName:{type:String,required:!0},service:{type:Object,required:!0},onlyUnchecked:{type:Boolean,required:!1,default:!1},showNumber:{type:Boolean,required:!1,default:!0}},emits:["update"],setup(e,{emit:t}){const l=e,a=t,r=i(0),s=n((()=>i(l.service.getItemsPart(l.part)).value.map((e=>({...e})))));function A(e){s.value.forEach((t=>{t.collected=e})),F()}function F(){l.service.updateItemsPart(l.part,s.value),H(),a("update",s.value)}function H(){r.value=0,s.value.forEach((e=>{e.collected&&r.value++}))}return o((()=>{H()})),(t,l)=>{const a=u("ion-button");return c(),d(S,null,[p(g(y),{slot:"header",color:"light"},{default:m((()=>[p(g(v),{slot:"start"},{default:m((()=>[_(t.$slots,"default",{},void 0,!0)])),_:3}),p(g(v),null,{default:m((()=>[f(h(r.value)+"/"+h(s.value.length),1)])),_:1})])),_:3}),b("div",D,[p(g(k),{src:e.imageFileName},null,8,["src"]),(c(!0),d(S,null,I(s.value,((t,l)=>(c(),q(g(j),{key:l},{default:m((()=>[x(p(g(y),null,{default:m((()=>{var l;return[p(g(C),{slot:"start",checked:t.collected,onClick:e=>function(e){s.value.forEach((t=>{t.number===e.number&&(t.collected=!t.collected)})),F()}(t)},null,8,["checked","onClick"]),x(p(g(k),{src:null!==(l=t.imageFileName)&&void 0!==l?l:"",class:"item-image"},null,8,["src"]),[[N,t.imageFileName]]),p(g(v),null,{default:m((()=>[e.showNumber?(c(),q(g(v),{key:0},{default:m((()=>[f(h(t.number)+" ",1),x(p(g(w),null,{default:m((()=>[f(" - "+h(t.description),1)])),_:2},1536),[[N,t.description.length>0]])])),_:2},1024)):(c(),q(g(v),{key:1},{default:m((()=>[x(p(g(w),null,{default:m((()=>[f(h(t.description),1)])),_:2},1536),[[N,t.description.length>0]])])),_:2},1024))])),_:2},1024)]})),_:2},1536),[[N,!e.onlyUnchecked||e.onlyUnchecked&&!t.collected]])])),_:2},1024)))),128)),p(a,{color:"primary",expand:"block",fill:"outline",class:"ion-padding-top",onClick:l[0]||(l[0]=e=>A(!0))},{default:m((()=>[f(" Marcar todos ")])),_:1}),p(a,{color:"danger",expand:"block",fill:"outline",onClick:l[1]||(l[1]=e=>A(!1))},{default:m((()=>[f(" Desmarcar todos ")])),_:1})])],64)}}}),G=U(E,[["__scopeId","data-v-88c64678"]]),O={class:"ion-text-end"};e("_",s({__name:"GtaHelperCollectiblePage",props:{totalItems:{type:Number,required:!0},baseDirectory:{type:String,required:!0},service:{type:Object,required:!0},items:{type:Array,required:!0},headerTitle:{type:String,required:!0},showNumber:{type:Boolean,required:!1,default:!0}},setup(e){const t=e,s=i(),n=i(),u=i(!0);function v(){s.value=t.service.getSumOfCollectedItems(),n.value=parseInt(String(s.value/t.totalItems*100))}return o((()=>{v()})),(t,i)=>(c(),q(l,null,{header:m((()=>[p(a,{title:e.headerTitle},null,8,["title"])])),content:m((()=>[p(r,null,{title:m((()=>[f(" Coletado ")])),subtitle:m((()=>[f(h(s.value)+"/"+h(e.totalItems)+" ("+h(n.value)+"%) ",1)])),_:1}),b("div",O,[p(g(A),{fill:"clear",onClick:i[0]||(i[0]=e=>u.value=!u.value)},{default:m((()=>[f(h(u.value?"Todos":"Somente Não Coletados"),1)])),_:1})]),p(g(F),null,{default:m((()=>[(c(!0),d(S,null,I(e.items,((t,l)=>(c(),q(g(H),{key:l,value:t.accordion},{default:m((()=>[p(G,{"image-file-name":`${e.baseDirectory}${t.imageFileName}`,part:t.part,service:e.service,onlyUnchecked:u.value,"show-number":e.showNumber,onUpdate:v},{default:m((()=>[f(h(t.title),1)])),_:2},1032,["image-file-name","part","service","onlyUnchecked","show-number"])])),_:2},1032,["value"])))),128))])),_:1})])),_:1}))}}))}}}));
