import{_ as g,u,h as p,o as a,c as n,a as s,F as m,d as k,t as c,f as v}from"./app.00ab700b.js";const f={class:"page--knowledge"},h={class:"page-content"},w={class:"list-wrapper"},x=["onClick"],P={class:"title"},b={class:"desc"},y={__name:"KnowledgePage",setup(i){const o=u(),d=p(),l=[{id:Math.random(),title:"前端知识",icon:"",desc:"记录前端相关知识",updateTime:"",link:"/knowledges/frontend/index"},{id:Math.random(),title:"技术知识",icon:"",desc:"记录技术相关知识",updateTime:"",link:"/knowledges/tech/index"}];function _(e=""){e&&(e=(d.site.value.base||"")+e,e=e.replaceAll("//","/"),console.log("alan->toPage path",e),o.go(e))}return(e,K)=>(a(),n("div",f,[s("section",h,[s("div",w,[(a(),n(m,null,k(l,(t,r)=>s("div",{class:"list-item card",key:t.index+"_"+r,onClick:L=>_(t.link)},[s("div",P,c(t.title),1),s("div",b,c(t.desc),1)],8,x)),64))])])]))}},B=g(y,[["__scopeId","data-v-2985adbe"]]),V=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"AlanLee の 知识库","image":{"src":"/assets/images/notebook.svg","alt":"VitePress"}}},"headers":[],"relativePath":"knowledges/index.md","lastUpdated":1678341923000}'),D={name:"knowledges/index.md"},A=Object.assign(D,{setup(i){return(o,d)=>(a(),n("div",null,[v(B)]))}});export{V as __pageData,A as default};