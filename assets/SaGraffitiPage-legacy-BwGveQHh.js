System.register(["./GtaHelperPage.vue_vue_type_script_setup_true_lang-legacy-DutARll5.js","./GtaHelperHeader.vue_vue_type_script_setup_true_lang-legacy-DzHMnIfk.js","./index-legacy-DYwxREy3.js","./utilLocalStorage-legacy-BI6FMvcZ.js","./GtaHelperCard.vue_vue_type_script_setup_true_lang-legacy-59Srp6RY.js"],(function(e,t){"use strict";var c,i,l,r,n,o,d,u,a,s,p,m,b,f,g,_,G,h,v,P,y,S,F,N,j,C,I,k;return{setters:[e=>{c=e._},e=>{i=e._},e=>{l=e.d,r=e.p,n=e.q,o=e.o,d=e.g,u=e.a,a=e.w,s=e.u,p=e.I,m=e.r,b=e.b,f=e.t,g=e.i,_=e.l,G=e.j,h=e.F,v=e.h,P=e.c,y=e.s,S=e.e,F=e.m,N=e.f,j=e.n},e=>{C=e.u,I=e.d},e=>{k=e._}],execute:function(){const t=[{number:1,description:"",collected:!1},{number:2,description:"",collected:!1},{number:3,description:"",collected:!1},{number:4,description:"",collected:!1},{number:5,description:"",collected:!1},{number:6,description:"",collected:!1},{number:7,description:"",collected:!1},{number:8,description:"",collected:!1},{number:9,description:"",collected:!1},{number:57,description:"",collected:!1},{number:58,description:"",collected:!1},{number:59,description:"",collected:!1},{number:60,description:"",collected:!1},{number:61,description:"",collected:!1},{number:62,description:"",collected:!1},{number:63,description:"",collected:!1},{number:67,description:"",collected:!1},{number:68,description:"",collected:!1},{number:69,description:"",collected:!1},{number:70,description:"",collected:!1},{number:71,description:"",collected:!1},{number:72,description:"",collected:!1},{number:73,description:"",collected:!1},{number:74,description:"",collected:!1},{number:75,description:"",collected:!1},{number:76,description:"",collected:!1},{number:77,description:"",collected:!1},{number:78,description:"",collected:!1},{number:79,description:"",collected:!1},{number:80,description:"",collected:!1},{number:81,description:"",collected:!1},{number:82,description:"",collected:!1},{number:83,description:"",collected:!1},{number:84,description:"",collected:!1},{number:85,description:"",collected:!1},{number:86,description:"",collected:!1},{number:87,description:"",collected:!1},{number:88,description:"",collected:!1},{number:89,description:"",collected:!1}],x=[{number:17,description:"",collected:!1},{number:18,description:"",collected:!1},{number:19,description:"",collected:!1},{number:26,description:"",collected:!1},{number:27,description:"",collected:!1},{number:28,description:"",collected:!1},{number:29,description:"",collected:!1},{number:30,description:"",collected:!1},{number:90,description:"",collected:!1},{number:91,description:"",collected:!1},{number:92,description:"",collected:!1},{number:93,description:"",collected:!1},{number:94,description:"",collected:!1},{number:95,description:"",collected:!1},{number:96,description:"",collected:!1},{number:97,description:"",collected:!1},{number:98,description:"",collected:!1},{number:99,description:"",collected:!1},{number:100,description:"",collected:!1}],H=[{number:10,description:"",collected:!1},{number:11,description:"",collected:!1},{number:12,description:"",collected:!1},{number:13,description:"",collected:!1},{number:14,description:"",collected:!1},{number:15,description:"",collected:!1},{number:16,description:"",collected:!1},{number:44,description:"",collected:!1},{number:46,description:"",collected:!1},{number:47,description:"",collected:!1},{number:48,description:"",collected:!1},{number:49,description:"",collected:!1},{number:50,description:"",collected:!1},{number:51,description:"",collected:!1},{number:52,description:"",collected:!1},{number:53,description:"",collected:!1},{number:54,description:"",collected:!1},{number:55,description:"",collected:!1},{number:56,description:"",collected:!1},{number:64,description:"",collected:!1},{number:65,description:"",collected:!1},{number:66,description:"",collected:!1}],V=[{number:20,description:"",collected:!1},{number:21,description:"",collected:!1},{number:22,description:"",collected:!1},{number:23,description:"",collected:!1},{number:24,description:"",collected:!1},{number:25,description:"",collected:!1},{number:31,description:"",collected:!1},{number:32,description:"",collected:!1}],q=[{number:38,description:"",collected:!1},{number:39,description:"",collected:!1},{number:40,description:"",collected:!1},{number:41,description:"",collected:!1},{number:42,description:"",collected:!1},{number:43,description:"",collected:!1},{number:45,description:"",collected:!1}],E=[{number:33,description:"",collected:!1},{number:34,description:"",collected:!1},{number:35,description:"",collected:!1},{number:36,description:"",collected:!1},{number:37,description:"",collected:!1}],O="saGraffitiPartOne",U="saGraffitiPartTwo",$="saGraffitiPartThree",w="saGraffitiPartFour",A="saGraffitiPartFive",T="saGraffitiPartSix",L={getGraffiti:function(e){let c=C.getStorageItem(e);return c||(c=e===O?t:e===U?x:e===$?H:e===w?V:e===A?q:e===T?E:[],this.updateGraffiti(e,c)),c},updateGraffiti:function(e,t){C.setStorageItem(e,t,null)},getSumOfCollectedItems:function(){let e=this.getGraffiti(O).concat(this.getGraffiti(U),this.getGraffiti($),this.getGraffiti(w),this.getGraffiti(A),this.getGraffiti(T)),t=0;return e.forEach((e=>{e.collected&&t++})),t}},z={class:"ion-padding",slot:"content"},B=l({__name:"SaGraffitiPart",props:{part:{type:String,required:!0},imageFileName:{type:String,required:!0}},emits:["update:graffiti"],setup(e,{emit:t}){const c=e,i=t,l=L.getGraffiti(c.part),F=r(0);function N(){F.value=0,l.forEach((e=>{e.collected&&F.value++}))}return n((()=>{N()})),(t,r)=>(o(),d(h,null,[u(s(g),{slot:"header",color:"light"},{default:a((()=>[u(s(p),{slot:"start"},{default:a((()=>[m(t.$slots,"default")])),_:3}),u(s(p),null,{default:a((()=>[b(f(F.value)+"/"+f(s(l).length),1)])),_:1})])),_:3}),_("div",z,[u(s(G),{src:`${s(I).sanAndreas.collectibles.graffiti}${e.imageFileName}`},null,8,["src"]),u(s(S),null,{default:a((()=>[(o(!0),d(h,null,v(s(l),((e,t)=>(o(),P(s(g),{key:t},{default:a((()=>[u(s(y),{slot:"start",modelValue:e.collected,"onUpdate:modelValue":t=>e.collected=t,onClick:t=>function(e){l.forEach((t=>{t.number===e.number&&(t.collected=!t.collected)})),L.updateGraffiti(c.part,l),N(),i("update:graffiti",l)}(e)},null,8,["modelValue","onUpdate:modelValue","onClick"]),u(s(p),null,{default:a((()=>[b(f(e.number)+" ",1),_("p",null,f(e.description),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])],64))}}),D=[{accordion:"first",imageFileName:"sa_graffiti_1.png",part:O,title:"Parte 1"},{accordion:"second",imageFileName:"sa_graffiti_2.png",part:U,title:"Parte 2"},{accordion:"third",imageFileName:"sa_graffiti_3.png",part:$,title:"Parte 3"},{accordion:"fourth",imageFileName:"sa_graffiti_4.png",part:w,title:"Parte 4"},{accordion:"fifth",imageFileName:"sa_graffiti_5.png",part:A,title:"Parte 5"},{accordion:"sixth",imageFileName:"sa_graffiti_6.png",part:T,title:"Parte 6"}];e("default",l({__name:"SaGraffitiPage",setup(e){const t=r(),l=r();function p(){t.value=L.getSumOfCollectedItems(),l.value=parseInt(String(t.value/100*100))}return n((()=>{p()})),(e,r)=>(o(),P(c,null,{header:a((()=>[u(i,{title:"San Andreas - Grafites"})])),content:a((()=>[u(s(N),null,{default:a((()=>[u(k,null,{title:a((()=>[b(" Coletado ")])),subtitle:a((()=>[b(f(t.value)+"/"+f(100)+" ("+f(l.value)+"%) ",1)])),_:1}),u(s(F),null,{default:a((()=>[(o(!0),d(h,null,v(s(D),((e,t)=>(o(),P(s(j),{key:t,value:e.accordion},{default:a((()=>[u(B,{"image-file-name":e.imageFileName,part:e.part,"onUpdate:graffiti":p},{default:a((()=>[b(f(e.title),1)])),_:2},1032,["image-file-name","part"])])),_:2},1032,["value"])))),128))])),_:1})])),_:1})])),_:1}))}}))}}}));
