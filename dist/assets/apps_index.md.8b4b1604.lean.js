import{_ as u,u as h,f,g as v,o as a,c as o,a as s,F as b,r as k,n as P,t as n,e as y}from"./app.d2d47940.js";const A={class:"page--apps page"},j={class:"page-content"},L={class:"app-list-wrapper"},x=["onClick"],C={class:"poster-wrapper"},w=["src"],B={class:"name-poster"},D={class:"card-content"},U={class:"title"},q={class:"desc"},I={__name:"AppListPage",setup(l){const c=h(),p=f(),r=["#edf8ef","#ecf6f9","#fff2ef"],d=v([{name:"语你晚安",poster:"https://cdn.nlark.com/yuque/0/2022/jpeg/743297/1669559110991-734a4ac2-3149-421e-b148-8a2e7f813e26.jpeg",desc:"订阅晚安然后向你推送「晚安」的小程序",link:"apps/语你晚安"},{name:"AlanLeeの工具箱",poster:"",desc:"一些我自己常用的工具",link:"http://alanlee.top/app/toolbox"},{name:"el-dragmove",poster:"https://cdn.nlark.com/yuque/0/2022/jpeg/743297/1669554072209-49076c99-be57-495d-9704-6bf561387ba5.jpeg",desc:"我开源的轻量级的元素拖动js库",link:"https://github.com/AlanLee97/el-dragmove"},{name:"核酸批量查询",poster:"https://cdn.nlark.com/yuque/0/2022/jpeg/743297/1669555078763-6d79a003-dfc5-4e78-81b3-486fbb6d6341.jpeg",desc:"一个PC端的核酸批量查询工具",link:"apps/核酸批量查询"},{name:"U-UI-D",poster:"",desc:"大学毕业设计项目",link:"https://gitee.com/U-UI-D"},{name:"熊猫约拍",poster:"https://cdn.nlark.com/yuque/0/2022/jpeg/743297/1669559789853-c59d2bd6-4353-4f84-a4d2-263333f8763f.jpeg",desc:"大学参赛项目",link:"https://gitee.com/Panda_Appointment"},{name:"共享作业提醒APP",poster:"",desc:"大学参赛项目",link:"https://github.com/AlanLee97/HomeworkReminder"},{name:"更多APP，待上线...",poster:"",desc:"",link:""}]);function i(){return c.site.value.base||""}function _(e=""){e&&(e.startsWith("http")?window.open(e):(e=(i()+e+"").replaceAll("//","/"),p.go(e)))}function g(){let e=r[Math.floor(Math.random()*r.length)];return console.log(e),e}return(e,F)=>(a(),o("div",A,[s("section",j,[s("div",L,[(a(!0),o(b,null,k(d.value,(t,m)=>(a(),o("div",{class:"list-item app-item",key:"tool_"+m,onClick:M=>_(t.link)},[s("div",C,[t.poster?(a(),o("img",{key:0,class:"poster",src:t.poster},null,8,w)):(a(),o("div",{key:1,class:"poster-bgcolor",style:P({backgroundColor:g()})},[s("div",B,n(t.name),1)],4))]),s("div",D,[s("h3",U,n(t.name),1),s("div",q,n(t.desc),1)])],8,x))),128))])])]))}},N=u(I,[["__scopeId","data-v-54612c50"]]),V=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"AlanLee の APP","tagline":"一些我自己做的项目。","image":{"src":"/assets/images/hero-apps.svg","alt":"APP"}}},"headers":[],"relativePath":"apps/index.md","lastUpdated":1678530775000}'),R={name:"apps/index.md"},$=Object.assign(R,{setup(l){return(c,p)=>(a(),o("div",null,[y(N)]))}});export{V as __pageData,$ as default};
