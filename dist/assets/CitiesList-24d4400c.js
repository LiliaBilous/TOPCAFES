import{c as i}from"./cities-6189a720.js";import{_ as c,r as l,o as s,c as n,F as _,a as d,n as u,b as t,t as p,d as m,w as h,e as f}from"./index-1dd3d357.js";const x={data(){return{cities:i}},computed:{city(){return this.cities.find(a=>a.name===this.$route.name)}}},b={class:"city__img-holder"},v={class:"city__header"},L=["innerHTML"],k={class:"button-wrapper"};function C(a,T,g,w,o,$){const r=l("RouterLink");return s(),n("div",null,[(s(!0),n(_,null,d(o.cities,e=>(s(),n("div",{key:e.id,class:u(e.bannerImgClass)},[t("div",null,[t("div",b,[t("h2",v,p(e.bannerTitle),1),t("p",{class:"city__text-wrap",innerHTML:e.bannerText},null,8,L),t("div",k,[m(r,{to:e.path,class:"button"},{default:h(()=>[f("Перейти до огляду")]),_:2},1032,["to"])])])])],2))),128))])}const V=c(x,[["render",C]]);export{V as default};