import{_ as r,u as g,o as n,c as a,a as t,F as p,d as u,t as d,e as m}from"./app.45d7229a.js";const k={class:"VPHero page--knowledge"},f={class:"list-wrapper"},h=["onClick"],v={class:"title"},w={class:"desc"},x={__name:"KnowledgePage",setup(i){const o=g(),c=[{id:Math.random(),title:"前端知识",icon:"",desc:"111",updateTime:"",link:"/knowledges/frontend/index"},{id:Math.random(),title:"技术知识",icon:"",desc:"222",updateTime:"",link:"/knowledges/tech/index"}];function _(s){s&&o.go(s)}return(s,V)=>(n(),a("div",k,[t("div",f,[(n(),a(p,null,u(c,(e,l)=>t("div",{class:"list-item card",key:e.index+"_"+l,onClick:B=>_(e.link)},[t("div",v,d(e.title),1),t("div",w,d(e.desc),1)],8,h)),64))])]))}},P=r(x,[["__scopeId","data-v-effc701a"]]),L=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"AlanLee の 知识库","image":{"src":"/assets/images/notebook.svg","alt":"VitePress"}}},"headers":[],"relativePath":"knowledges/index.md"}'),y={name:"knowledges/index.md"},N=Object.assign(y,{setup(i){return(o,c)=>(n(),a("div",null,[m(P)]))}});export{L as __pageData,N as default};