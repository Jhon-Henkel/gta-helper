import{d as e}from"./directories-TGkux2Qp.js";import{_ as o}from"./GtaHelperCollectiblePage.vue_vue_type_script_setup_true_lang-BX2K5Re9.js";import{u as n}from"./utilLocalStorage-COiBzxLn.js";import{d as m,c as d,u as i,o as p}from"./index-CiS0gKJx.js";import"./GtaHelperPage.vue_vue_type_script_setup_true_lang-B9YAxVPn.js";import"./GtaHelperHeader.vue_vue_type_script_setup_true_lang-Bkafu87h.js";import"./GtaHelperCard.vue_vue_type_script_setup_true_lang-Byp-9sT3.js";const a={listOne:"saVehiclesListOne",listTwo:"saVehiclesListTwo",listThree:"saVehiclesListThree"},g=[{accordion:"first",part:a.listOne,imageFileName:"sa_vehicles_map.jpg",title:"Lista 1"},{accordion:"second",part:a.listTwo,imageFileName:"sa_vehicles_map.jpg",title:"Lista 2"},{accordion:"third",part:a.listThree,imageFileName:"sa_vehicles_map.jpg",title:"Lista 3"}],t={saListOne:[{number:1,description:"Patriot",collected:!1,imageFileName:"".concat(e.sanAndreas.collectibles.vehicles,"sa_patriot.jpg")},{number:2,description:"Sanchez",collected:!1,imageFileName:"".concat(e.sanAndreas.collectibles.vehicles,"sa_sanchez.jpg")},{number:3,description:"Stretch",collected:!1,imageFileName:"".concat(e.sanAndreas.collectibles.vehicles,"sa_stretch.jpg")},{number:4,description:"Feltzer",collected:!1,imageFileName:"".concat(e.sanAndreas.collectibles.vehicles,"sa_feltzer.jpg")},{number:5,description:"Remington",collected:!1,imageFileName:"".concat(e.sanAndreas.collectibles.vehicles,"sa_remington.jpg")},{number:6,description:"Buffalo",collected:!1,imageFileName:"".concat(e.sanAndreas.collectibles.vehicles,"sa_buffalo.jpg")},{number:7,description:"Sentinel",collected:!1,imageFileName:"".concat(e.sanAndreas.collectibles.vehicles,"sa_sentinel.jpg")},{number:8,description:"Infernus",collected:!1,imageFileName:"".concat(e.sanAndreas.collectibles.vehicles,"sa_infernus.jpg")},{number:9,description:"Camper",collected:!1,imageFileName:"".concat(e.sanAndreas.collectibles.vehicles,"sa_camper.jpg")},{number:10,description:"Admiral",collected:!1,imageFileName:"".concat(e.sanAndreas.collectibles.vehicles,"sa_admiral.jpg")}],saListTwo:[{number:11,description:"Slam van",collected:!1,imageFileName:"".concat(e.sanAndreas.collectibles.vehicles,"sa_slam_van.jpg")},{number:12,description:"Balista Compact",collected:!1,imageFileName:"".concat(e.sanAndreas.collectibles.vehicles,"sa_balista_compact.jpg")},{number:13,description:"Stafford",collected:!1,imageFileName:"".concat(e.sanAndreas.collectibles.vehicles,"sa_stafford.jpg")},{number:14,description:"Sabre",collected:!1,imageFileName:"".concat(e.sanAndreas.collectibles.vehicles,"sa_sabre.jpg")},{number:15,description:"FCR-900",collected:!1,imageFileName:"".concat(e.sanAndreas.collectibles.vehicles,"sa_fcr_900.jpg")},{number:16,description:"Cheetah",collected:!1,imageFileName:"".concat(e.sanAndreas.collectibles.vehicles,"sa_cheetah.jpg")},{number:17,description:"Rancher",collected:!1,imageFileName:"".concat(e.sanAndreas.collectibles.vehicles,"sa_rancher.jpg")},{number:18,description:"Stallion",collected:!1,imageFileName:"".concat(e.sanAndreas.collectibles.vehicles,"sa_stallion.jpg")},{number:19,description:"Tanker",collected:!1,imageFileName:"".concat(e.sanAndreas.collectibles.vehicles,"sa_tanker.jpg")},{number:20,description:"Comet",collected:!1,imageFileName:"".concat(e.sanAndreas.collectibles.vehicles,"sa_comet.jpg")}],saListThree:[{number:21,description:"Blade",collected:!1,imageFileName:"".concat(e.sanAndreas.collectibles.vehicles,"sa_blade.jpg")},{number:22,description:"Freeway",collected:!1,imageFileName:"".concat(e.sanAndreas.collectibles.vehicles,"sa_freeway.jpg")},{number:23,description:"Mesa",collected:!1,imageFileName:"".concat(e.sanAndreas.collectibles.vehicles,"sa_mesa.jpg")},{number:24,description:"ZR-350",collected:!1,imageFileName:"".concat(e.sanAndreas.collectibles.vehicles,"sa_zr_350.jpg")},{number:25,description:"Euros",collected:!1,imageFileName:"".concat(e.sanAndreas.collectibles.vehicles,"sa_euros.jpg")},{number:26,description:"Banshee",collected:!1,imageFileName:"".concat(e.sanAndreas.collectibles.vehicles,"sa_banshee.jpg")},{number:27,description:"Super GT",collected:!1,imageFileName:"".concat(e.sanAndreas.collectibles.vehicles,"sa_super_gt.jpg")},{number:28,description:"Journey",collected:!1,imageFileName:"".concat(e.sanAndreas.collectibles.vehicles,"sa_journey.jpg")},{number:29,description:"Huntley",collected:!1,imageFileName:"".concat(e.sanAndreas.collectibles.vehicles,"sa_huntley.jpg")},{number:30,description:"BF Injection",collected:!1,imageFileName:"".concat(e.sanAndreas.collectibles.vehicles,"sa_bf_injection.png")}]},h={getItemsPart:function(l){let s=n.getStorageItem(l);return s||(l===a.listOne?s=t.saListOne:l===a.listTwo?s=t.saListTwo:l===a.listThree?s=t.saListThree:s=[],this.updateItemsPart(l,s)),s},updateItemsPart:function(l,s){n.setStorageItem(l,s,null)},getSumOfCollectedItems:function(){const s=this.getItemsPart(a.listOne).concat(this.getItemsPart(a.listTwo),this.getItemsPart(a.listThree));let c=0;return s.forEach(r=>{r.collected&&c++}),c}},A=m({__name:"SaVehiclesImportationPage",setup(l){return(s,c)=>(p(),d(o,{"header-title":"San Andreas - Importações",items:i(g),service:i(h),"base-directory":i(e).sanAndreas.collectibles.vehicles,"total-items":30,"show-number":!1,"map-image-file-name":"".concat(i(e).sanAndreas.collectibles.vehicles,"/sa_vehicles_map.jpg"),"show-items-count":!0,"item-enum":""},null,8,["items","service","base-directory","map-image-file-name"]))}});export{A as default};
