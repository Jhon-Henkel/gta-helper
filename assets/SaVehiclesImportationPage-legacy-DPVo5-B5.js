System.register(["./directories-legacy-DaKnbCb3.js","./GtaHelperCollectiblePage.vue_vue_type_script_setup_true_lang-legacy-lxS5U3gk.js","./utilLocalStorage-legacy-BPyGa8cO.js","./index-legacy-xwO5G4J4.js","./GtaHelperPage.vue_vue_type_script_setup_true_lang-legacy-BhIsCBnb.js","./GtaHelperHeader.vue_vue_type_script_setup_true_lang-legacy-BO9v3aS1.js","./GtaHelperCard.vue_vue_type_script_setup_true_lang-legacy-C91iYKtH.js"],(function(e,l){"use strict";var s,a,i,c,t,n,r;return{setters:[e=>{s=e.d},e=>{a=e._},e=>{i=e.u},e=>{c=e.d,t=e.c,n=e.u,r=e.o},null,null,null],execute:function(){const l="saVehiclesListOne",o="saVehiclesListTwo",m="saVehiclesListThree",d=[{accordion:"first",part:l,imageFileName:"sa_vehicles_map.jpg",title:"Lista 1"},{accordion:"second",part:o,imageFileName:"sa_vehicles_map.jpg",title:"Lista 2"},{accordion:"third",part:m,imageFileName:"sa_vehicles_map.jpg",title:"Lista 3"}],p={saListOne:[{number:1,description:"Patriot",collected:!1,imageFileName:`${s.sanAndreas.collectibles.vehicles}sa_patriot.jpg`},{number:2,description:"Sanchez",collected:!1,imageFileName:`${s.sanAndreas.collectibles.vehicles}sa_sanchez.jpg`},{number:3,description:"Stretch",collected:!1,imageFileName:`${s.sanAndreas.collectibles.vehicles}sa_stretch.jpg`},{number:4,description:"Feltzer",collected:!1,imageFileName:`${s.sanAndreas.collectibles.vehicles}sa_feltzer.jpg`},{number:5,description:"Remington",collected:!1,imageFileName:`${s.sanAndreas.collectibles.vehicles}sa_remington.jpg`},{number:6,description:"Buffalo",collected:!1,imageFileName:`${s.sanAndreas.collectibles.vehicles}sa_buffalo.jpg`},{number:7,description:"Sentinel",collected:!1,imageFileName:`${s.sanAndreas.collectibles.vehicles}sa_sentinel.jpg`},{number:8,description:"Infernus",collected:!1,imageFileName:`${s.sanAndreas.collectibles.vehicles}sa_infernus.jpg`},{number:9,description:"Camper",collected:!1,imageFileName:`${s.sanAndreas.collectibles.vehicles}sa_camper.jpg`},{number:10,description:"Admiral",collected:!1,imageFileName:`${s.sanAndreas.collectibles.vehicles}sa_admiral.jpg`}],saListTwo:[{number:11,description:"Slam van",collected:!1,imageFileName:`${s.sanAndreas.collectibles.vehicles}sa_slam_van.jpg`},{number:12,description:"Balista Compact",collected:!1,imageFileName:`${s.sanAndreas.collectibles.vehicles}sa_balista_compact.jpg`},{number:13,description:"Stafford",collected:!1,imageFileName:`${s.sanAndreas.collectibles.vehicles}sa_stafford.jpg`},{number:14,description:"Sabre",collected:!1,imageFileName:`${s.sanAndreas.collectibles.vehicles}sa_sabre.jpg`},{number:15,description:"FCR-900",collected:!1,imageFileName:`${s.sanAndreas.collectibles.vehicles}sa_fcr_900.jpg`},{number:16,description:"Cheetah",collected:!1,imageFileName:`${s.sanAndreas.collectibles.vehicles}sa_cheetah.jpg`},{number:17,description:"Rancher",collected:!1,imageFileName:`${s.sanAndreas.collectibles.vehicles}sa_rancher.jpg`},{number:18,description:"Stallion",collected:!1,imageFileName:`${s.sanAndreas.collectibles.vehicles}sa_stallion.jpg`},{number:19,description:"Tanker",collected:!1,imageFileName:`${s.sanAndreas.collectibles.vehicles}sa_tanker.jpg`},{number:20,description:"Comet",collected:!1,imageFileName:`${s.sanAndreas.collectibles.vehicles}sa_comet.jpg`}],saListThree:[{number:21,description:"Blade",collected:!1,imageFileName:`${s.sanAndreas.collectibles.vehicles}sa_blade.jpg`},{number:22,description:"Freeway",collected:!1,imageFileName:`${s.sanAndreas.collectibles.vehicles}sa_freeway.jpg`},{number:23,description:"Mesa",collected:!1,imageFileName:`${s.sanAndreas.collectibles.vehicles}sa_mesa.jpg`},{number:24,description:"ZR-350",collected:!1,imageFileName:`${s.sanAndreas.collectibles.vehicles}sa_zr_350.jpg`},{number:25,description:"Euros",collected:!1,imageFileName:`${s.sanAndreas.collectibles.vehicles}sa_euros.jpg`},{number:26,description:"Banshee",collected:!1,imageFileName:`${s.sanAndreas.collectibles.vehicles}sa_banshee.jpg`},{number:27,description:"Super GT",collected:!1,imageFileName:`${s.sanAndreas.collectibles.vehicles}sa_super_gt.jpg`},{number:28,description:"Journey",collected:!1,imageFileName:`${s.sanAndreas.collectibles.vehicles}sa_journey.jpg`},{number:29,description:"Huntley",collected:!1,imageFileName:`${s.sanAndreas.collectibles.vehicles}sa_huntley.jpg`},{number:30,description:"BF Injection",collected:!1,imageFileName:`${s.sanAndreas.collectibles.vehicles}sa_bf_injection.png`}]},g={getItemsPart:function(e){let s=i.getStorageItem(e);return s||(s=e===l?p.saListOne:e===o?p.saListTwo:e===m?p.saListThree:[],this.updateItemsPart(e,s)),s},updateItemsPart:function(e,l){i.setStorageItem(e,l,null)},getSumOfCollectedItems:function(){const e=this.getItemsPart(l).concat(this.getItemsPart(o),this.getItemsPart(m));let s=0;return e.forEach((e=>{e.collected&&s++})),s}};e("default",c({__name:"SaVehiclesImportationPage",setup:e=>(e,l)=>(r(),t(a,{"header-title":"San Andreas - Importações",items:n(d),service:n(g),"base-directory":n(s).sanAndreas.collectibles.vehicles,"total-items":30,"show-number":!1,"map-image-file-name":`${n(s).sanAndreas.collectibles.vehicles}sa_vehicles_map.jpg`,"show-items-count":!0,"item-enum":""},null,8,["items","service","base-directory","map-image-file-name"]))}))}}}));
