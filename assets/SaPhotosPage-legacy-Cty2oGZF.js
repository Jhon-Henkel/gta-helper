System.register(["./GtaHelperPage.vue_vue_type_script_setup_true_lang-legacy-DutARll5.js","./GtaHelperHeader.vue_vue_type_script_setup_true_lang-legacy-DzHMnIfk.js","./index-legacy-DYwxREy3.js","./utilLocalStorage-legacy-BI6FMvcZ.js","./GtaHelperCard.vue_vue_type_script_setup_true_lang-legacy-59Srp6RY.js"],(function(e,t){"use strict";var o,l,c,r,n,i,d,s,u,a,p,m,b,g,_,h,f,P,v,y,F,S,N,j,C,I,k;return{setters:[e=>{o=e._},e=>{l=e._},e=>{c=e.d,r=e.p,n=e.q,i=e.o,d=e.g,s=e.a,u=e.w,a=e.u,p=e.I,m=e.r,b=e.b,g=e.t,_=e.i,h=e.l,f=e.j,P=e.F,v=e.h,y=e.c,F=e.s,S=e.e,N=e.m,j=e.n},e=>{C=e.u,I=e.d},e=>{k=e._}],execute:function(){const t="saPhotoPartOne",H="saPhotoPartTwo",V="saPhotoPartThree",q="saPhotoPartFour",E="saPhotoPartFive",G=[{accordion:"first",imageFileName:"sa_photos_1.png",part:t,title:"Parte 1"},{accordion:"second",imageFileName:"sa_photos_2.png",part:H,title:"Parte 2"},{accordion:"third",imageFileName:"sa_photos_3.png",part:V,title:"Parte 3"},{accordion:"fourth",imageFileName:"sa_photos_4.png",part:q,title:"Parte 4"},{accordion:"fifth",imageFileName:"sa_photos_5.png",part:E,title:"Parte 5"}],O=[{number:30,description:"",collected:!1},{number:31,description:"",collected:!1},{number:32,description:"",collected:!1},{number:33,description:"",collected:!1},{number:34,description:"",collected:!1},{number:35,description:"",collected:!1},{number:36,description:"",collected:!1},{number:37,description:"",collected:!1},{number:38,description:"",collected:!1},{number:39,description:"",collected:!1},{number:40,description:"",collected:!1},{number:41,description:"",collected:!1}],U=[{number:1,description:"",collected:!1},{number:3,description:"",collected:!1},{number:4,description:"",collected:!1},{number:42,description:"",collected:!1},{number:43,description:"",collected:!1},{number:45,description:"",collected:!1},{number:46,description:"",collected:!1},{number:47,description:"",collected:!1},{number:48,description:"",collected:!1},{number:49,description:"",collected:!1},{number:50,description:"",collected:!1}],$=[{number:2,description:"",collected:!1},{number:5,description:"",collected:!1},{number:6,description:"",collected:!1},{number:7,description:"",collected:!1},{number:8,description:"",collected:!1},{number:9,description:"",collected:!1},{number:10,description:"",collected:!1}],w=[{number:22,description:"",collected:!1},{number:23,description:"",collected:!1},{number:26,description:"",collected:!1},{number:27,description:"",collected:!1},{number:28,description:"",collected:!1},{number:29,description:"",collected:!1}],x=[{number:11,description:"",collected:!1},{number:12,description:"",collected:!1},{number:13,description:"",collected:!1},{number:14,description:"",collected:!1},{number:15,description:"",collected:!1},{number:16,description:"",collected:!1},{number:17,description:"",collected:!1},{number:18,description:"",collected:!1},{number:19,description:"",collected:!1},{number:20,description:"",collected:!1},{number:21,description:"",collected:!1},{number:24,description:"",collected:!1},{number:25,description:"",collected:!1},{number:44,description:"",collected:!1}],A={getPhotos:function(e){let o=C.getStorageItem(e);return o||(o=e===t?O:e===H?U:e===V?$:e===q?w:e===E?x:[],this.updatePhotos(e,o)),o},updatePhotos:function(e,t){C.setStorageItem(e,t,null)},getSumOfCollectedItems:function(){let e=this.getPhotos(t).concat(this.getPhotos(H),this.getPhotos(V),this.getPhotos(q),this.getPhotos(E)),o=0;return e.forEach((e=>{e.collected&&o++})),o}},T={class:"ion-padding",slot:"content"},L=c({__name:"SaPhotosPart",props:{part:{type:String,required:!0},imageFileName:{type:String,required:!0}},emits:["update:photos"],setup(e,{emit:t}){const o=e,l=t,c=A.getPhotos(o.part),N=r(0);function j(){N.value=0,c.forEach((e=>{e.collected&&N.value++}))}return n((()=>{j()})),(t,r)=>(i(),d(P,null,[s(a(_),{slot:"header",color:"light"},{default:u((()=>[s(a(p),{slot:"start"},{default:u((()=>[m(t.$slots,"default")])),_:3}),s(a(p),null,{default:u((()=>[b(g(N.value)+"/"+g(a(c).length),1)])),_:1})])),_:3}),h("div",T,[s(a(f),{src:`${a(I).sanAndreas.collectibles.photos}${e.imageFileName}`},null,8,["src"]),s(a(S),null,{default:u((()=>[(i(!0),d(P,null,v(a(c),((e,t)=>(i(),y(a(_),{key:t},{default:u((()=>[s(a(F),{slot:"start",modelValue:e.collected,"onUpdate:modelValue":t=>e.collected=t,onClick:t=>function(e){c.forEach((t=>{t.number===e.number&&(t.collected=!t.collected)})),A.updatePhotos(o.part,c),j(),l("update:photos",c)}(e)},null,8,["modelValue","onUpdate:modelValue","onClick"]),s(a(p),null,{default:u((()=>[b(g(e.number)+" ",1),h("p",null,g(e.description),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])],64))}});e("default",c({__name:"SaPhotosPage",setup(e){const t=r(),c=r();function p(){t.value=A.getSumOfCollectedItems(),c.value=parseInt(String(t.value/50*100))}return n((()=>{p()})),(e,r)=>(i(),y(o,null,{header:u((()=>[s(l,{title:"San Andreas - Fotos"})])),content:u((()=>[s(k,null,{title:u((()=>[b(" Coletado ")])),subtitle:u((()=>[b(g(t.value)+"/"+g(50)+" ("+g(c.value)+"%) ",1)])),_:1}),s(a(N),null,{default:u((()=>[(i(!0),d(P,null,v(a(G),((e,t)=>(i(),y(a(j),{key:t,value:e.accordion},{default:u((()=>[s(L,{"image-file-name":e.imageFileName,part:e.part,"onUpdate:photos":p},{default:u((()=>[b(g(e.title),1)])),_:2},1032,["image-file-name","part"])])),_:2},1032,["value"])))),128))])),_:1})])),_:1}))}}))}}}));
