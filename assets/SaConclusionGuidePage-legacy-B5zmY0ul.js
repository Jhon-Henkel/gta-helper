System.register(["./index-legacy-JcxloKP0.js","./GtaHelperCard.vue_vue_type_script_setup_true_lang-legacy-CaapmbWI.js","./GtaHelperPage.vue_vue_type_script_setup_true_lang-legacy-BG8beoep.js","./GtaHelperHeader.vue_vue_type_script_setup_true_lang-legacy-B_bEgzu-.js","./utilLocalStorage-legacy-BPyGa8cO.js"],(function(e,t){"use strict";var a,o,l,s,i,n,d,u,r,c,_,f,v,m,p,g,C,S,M,h,I,y,k,A,B,D,G;return{setters:[e=>{a=e.d,o=e.p,l=e.q,s=e.c,i=e.w,n=e.o,d=e.a,u=e.b,r=e.t,c=e.u,_=e.n,f=e.i,v=e.I,m=e.l,p=e.m,g=e.z,C=e.g,S=e.h,M=e.F,h=e.s,I=e.e,y=e.x,k=e.v},e=>{A=e._},e=>{B=e._},e=>{D=e._},e=>{G=e.u}],execute:function(){const t="saConclusionItems",w=[{title:"Missões Principais",done:!1},{title:"Missões de veículos - Bombeiro",done:!1},{title:"Missões de veículos - Paramédico",done:!1},{title:"Missões de veículos - Policial",done:!1},{title:"Missões de veículos - Taxista",done:!1},{title:"Missões de veículos - Lenocínio",done:!1},{title:"Missões de veículos - Maquinista",done:!1},{title:"Serviços - Caminhoneiro",done:!1},{title:"Serviços - Pedreiro",done:!1},{title:"Serviços - Manobrista",done:!1},{title:"Missões secundárias - Caligulas Heit's",done:!1},{title:"Missões secundárias - Zero RC",done:!1},{title:"Missões de entregador - Los Santos",done:!1},{title:"Missões de entregador - San Fierro",done:!1},{title:"Missões de entregador - Las Venturas",done:!1},{title:"Comprar todas as propriedades",done:!1},{title:"Coletar todas as ostras",done:!1},{title:"Coletar todas as fotos",done:!1},{title:"Coletar todas as ferraduras",done:!1},{title:"Coletar todas as pichações",done:!1},{title:"Auto escola - Carro",done:!1},{title:"Auto escola - Moto",done:!1},{title:"Auto escola - Avião",done:!1},{title:"Auto escola - Barco",done:!1},{title:"Importar as 3 listas de veículos em San Fierro",done:!1},{title:"Finalizar todas as corridas em 1ª posição",done:!1},{title:"Corridas de estádio - 8-Track",done:!1},{title:"Corridas de estádio - Blood Bowl",done:!1},{title:"Corridas de estádio - Dirt Track",done:!1},{title:"Corridas de estádio - Kick Start",done:!1},{title:"Academia de luta - Los Santos",done:!1},{title:"Academia de luta - San Fierro",done:!1},{title:"Academia de luta - Las Venturas",done:!1},{title:"Desafio - BMX",done:!1},{title:"Desafio - NRG-500",done:!1},{title:"Desafio - Mountain Bike 1 - Scotch Bonnet Yellow Route",done:!1},{title:"Desafio - Mountain Bike 2 - Birdseye Winder",done:!1},{title:"Desafio - Mountain Bike 3 - Cobra Run",done:!1},{title:"Estande de tiro",done:!1}],x={getItems:function(e){let a=G.getStorageItem(e);return a||(a=e===t?w:[],this.updateItems(e,a)),a},updateItems:function(e,t){G.setStorageItem(e,t,null)},getSumOfItemsDone:function(e){const t=this.getItems(e);let a=0;return t.forEach((e=>{e.done&&a++})),a}},b={class:"ion-padding",slot:"content"},L={class:"ion-padding",slot:"content"},T={class:"ion-text-end"};e("default",a({__name:"SaConclusionGuidePage",setup(e){const a=o(!0),G=o(0),w=o(0),F=o(x.getItems(t));function H(){G.value=x.getSumOfItemsDone(t),w.value=parseInt(String(G.value/39*100))}return l((()=>{H()})),(e,o)=>(n(),s(B,null,{header:i((()=>[d(D,{title:"GTA SA - Checklist para o 100%"})])),content:i((()=>[d(A,null,{title:i((()=>[u(" Completado ")])),subtitle:i((()=>[u(r(G.value)+"/"+r(39)+" ("+r(w.value)+"%) ",1)])),_:1}),d(c(p),null,{default:i((()=>[d(c(_),{value:"first"},{default:i((()=>[d(c(f),{slot:"header",color:"light"},{default:i((()=>[d(c(v),null,{default:i((()=>[u("Desnecessário para o 100%")])),_:1})])),_:1}),m("div",b,[d(c(f),null,{default:i((()=>[u("Missões de roubar casas")])),_:1}),d(c(f),null,{default:i((()=>[u("Competições de Low rider")])),_:1}),d(c(f),null,{default:i((()=>[u("Jogar sinuca")])),_:1}),d(c(f),null,{default:i((()=>[u("Desafios de Basquete")])),_:1}),d(c(f),null,{default:i((()=>[u("Namoradas")])),_:1}),d(c(f),null,{default:i((()=>[u("Mini game de dança")])),_:1}),d(c(f),null,{default:i((()=>[u("Triatlos")])),_:1}),d(c(f),null,{default:i((()=>[u("Comprar todas as roupas")])),_:1}),d(c(f),null,{default:i((()=>[u("Guerras de Gangue")])),_:1}),d(c(f),null,{default:i((()=>[u("Saltos Únicos")])),_:1}),d(c(f),null,{default:i((()=>[u("Arcade games")])),_:1}),d(c(f),null,{default:i((()=>[u("Status maximizados")])),_:1})])])),_:1}),d(c(_),{value:"second"},{default:i((()=>[d(c(f),{slot:"header",color:"light"},{default:i((()=>[d(c(v),null,{default:i((()=>[u("Recompensas 100%")])),_:1})])),_:1}),m("div",L,[d(c(f),null,{default:i((()=>[u("Todos os veículos que você dirige possuem 200% de vida")])),_:1}),d(c(f),null,{default:i((()=>[u("Hydra spawna em cima da casa do Sweet")])),_:1}),d(c(f),null,{default:i((()=>[u("Rhino spawna embaixo da ponte da Grove Street")])),_:1}),d(c(f),null,{default:i((()=>[u("Ganha $1.000.000")])),_:1})])])),_:1})])),_:1}),m("div",T,[d(c(g),{fill:"clear",onClick:o[0]||(o[0]=e=>a.value=!a.value)},{default:i((()=>[u(r(a.value?"Todos":"Somente Faltantes"),1)])),_:1})]),(n(!0),C(M,null,S(F.value,((e,o)=>h((n(),s(c(I),{key:o},{default:i((()=>[d(c(f),null,{default:i((()=>[d(c(y),{slot:"start",checked:e.done,onIonChange:a=>function(e){F.value.forEach((t=>{t.title===e.title&&(t.done=!t.done)})),x.updateItems(t,F.value),H()}(e)},null,8,["checked","onIonChange"]),u(" "+r(e.title),1)])),_:2},1024)])),_:2},1024)),[[k,!a.value||a.value&&!e.done]]))),128))])),_:1}))}}))}}}));
