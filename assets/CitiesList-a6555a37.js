import i from"./cities-485daa78.js";import{_ as c,r as _,o as s,c as n,F as d,a as l,n as p,b as t,t as m,d as u,w as h,e as f}from"./index-3919916b.js";const x={data(){return{cities:i}},computed:{city(){return this.cities.find(a=>a.name===this.$route.name)}}},b={class:"main-content"},L={class:"city__img-holder"},k={class:"city__header"},C=["innerHTML"],T={class:"button-wrapper"};function g(a,v,w,$,o,B){const r=_("RouterLink");return s(),n("main",b,[(s(!0),n(d,null,l(o.cities,e=>(s(),n("div",{key:e.id,class:p(e.bannerImgClass)},[t("div",L,[t("h2",k,m(e.bannerTitle),1),t("p",{class:"city__text-wrap",innerHTML:e.bannerText},null,8,C),t("div",T,[u(r,{to:e.path,class:"button"},{default:h(()=>[f("Перейти до огляду")]),_:2},1032,["to"])])])],2))),128))])}const y=c(x,[["render",g]]);export{y as default};