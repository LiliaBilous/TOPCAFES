import a from"./cafes-d6fecb5e.js";import{_ as A,r as k,o as c,c as d,b as e,n as v,e as f,d as r,w as l,T as m,F as g,a as B,f as $,g as u,v as y,t as b}from"./index-668b6f10.js";const x={data(){return{cafes:a,isActive:!1,priceActive:!1,cityActive:!1,ratingActive:!1}},methods:{filterByPrice(o){this.cafes=a.filter(t=>t.price===o),this.priceActive=!1},filterByCity(o){this.cafes=a.filter(t=>t.city===o),this.cityActive=!1},filterByRating(o,t){this.cafes=a.filter(_=>{const p=parseFloat(_.rating);return p>=t&&p<=o}),this.ratingActive=!1}}},h={class:"main-content"},R={key:0,class:"cafes__container"},L={class:"article-block-filter"},N={class:"dropdown price-filter"},P=e("span",{class:"material-symbols-outlined"}," expand_more ",-1),V={class:"dropdown-content price"},F={class:"dropdown city-filter"},T=e("span",{class:"material-symbols-outlined"}," expand_more ",-1),D={class:"dropdown-content city"},S={class:"dropdown rating-filter"},z=e("span",{class:"material-symbols-outlined"}," expand_more ",-1),E={class:"dropdown-content rating"},U={class:"article-block-cafes"},j={class:"article-name"},q={class:"article-text"},G={class:"article-description"};function H(o,t,_,p,n,s){const C=k("router-link"),w=k("RouterLink");return c(),d("main",h,[n.cafes?(c(),d("div",R,[e("div",L,[e("div",N,[e("button",{class:v(["button dropdown-btn",{active:n.priceActive}]),onClick:t[0]||(t[0]=i=>this.priceActive=!this.priceActive)},[f(" Ціна"),P],2),r(m,{name:"fade"},{default:l(()=>[u(e("div",V,[e("button",{class:"dropdown-item",onClick:t[1]||(t[1]=i=>s.filterByPrice("$$$"))},"$$$"),e("button",{class:"dropdown-item",onClick:t[2]||(t[2]=i=>s.filterByPrice("$$"))},"$$"),e("button",{class:"dropdown-item",onClick:t[3]||(t[3]=i=>s.filterByPrice("$"))},"$")],512),[[y,n.priceActive]])]),_:1})]),e("div",F,[e("button",{class:v(["button dropdown-btn",{active:n.cityActive}]),onClick:t[4]||(t[4]=i=>this.cityActive=!this.cityActive)},[f(" Місто"),T],2),r(m,{name:"fade"},{default:l(()=>[u(e("div",D,[e("button",{class:"dropdown-item",onClick:t[5]||(t[5]=i=>s.filterByCity("franyk"))}," Івано-Франківськ "),e("button",{class:"dropdown-item",onClick:t[6]||(t[6]=i=>s.filterByCity("kyiv"))},"Київ"),e("button",{class:"dropdown-item",onClick:t[7]||(t[7]=i=>s.filterByCity("cherkasy"))}," Черкаси "),e("button",{class:"dropdown-item",onClick:t[8]||(t[8]=i=>s.filterByCity("lviv"))},"Львів"),e("button",{class:"dropdown-item",onClick:t[9]||(t[9]=i=>s.filterByCity("odesa"))}," Одеса ")],512),[[y,n.cityActive]])]),_:1})]),e("div",S,[e("button",{class:v(["button dropdown-btn",{active:n.ratingActive}]),onClick:t[10]||(t[10]=i=>this.ratingActive=!this.ratingActive)},[f(" Рейтинг"),z],2),r(m,{name:"fade"},{default:l(()=>[u(e("div",E,[e("button",{class:"dropdown-item",onClick:t[11]||(t[11]=i=>s.filterByRating(5,4.8))}," Рейтинг 5.0 - 4.8 "),e("button",{class:"dropdown-item",onClick:t[12]||(t[12]=i=>s.filterByRating(4.7,4.5))}," Рейтинг 4.7 - 4.5 "),e("button",{class:"dropdown-item",onClick:t[13]||(t[13]=i=>s.filterByRating(4.4,1))}," Рейтинг нижче 4.5 ")],512),[[y,n.ratingActive]])]),_:1})])]),e("div",U,[(c(!0),d(g,null,B(n.cafes,i=>(c(),d("div",{key:i.id,class:"article-wrapper"},[r(C,{to:`/cafes/${i.id}`,class:v(["article__link-holder",i.imageUrlClass])},{default:l(()=>[e("h3",j,b(i.title),1)]),_:2},1032,["to","class"]),e("div",q,[e("p",G,b(i.text),1),r(w,{to:`/cafes/${i.id}`,class:"button"},{default:l(()=>[f("Відвідати заклад")]),_:2},1032,["to"])])]))),128))])])):$("",!0)])}const K=A(x,[["render",H]]);export{K as default};