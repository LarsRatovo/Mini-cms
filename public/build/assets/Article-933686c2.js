import{b as a,j as l}from"./app-1984cdd7.js";import{S as s}from"./Sidebar-abf8fca8.js";function d({articles:i}){return a(s,{children:l("section",{className:"section",children:[a("div",{className:"row",children:i.data.map(e=>a("div",{className:"card col-lg-12",children:l("div",{className:"row g-0",children:[a("div",{className:"col-md-4",children:a("img",{src:"/assets/img/"+e.image,className:"img-fluid rounded-start",alt:e.snippet})}),a("div",{className:"col-md-8",children:l("div",{className:"card-body",children:[a("h5",{className:"card-title",children:a("a",{href:"/admin/articles/"+e.id+"/update",children:e.title})}),a("p",{className:"card-text",children:e.snippet}),a("button",{type:"button",className:"btn btn-outline-danger",children:"Supprimer l'article"})]})})]})}))}),a("nav",{"aria-label":"Page navigation example",children:a("ul",{className:"pagination",children:i.links.map(e=>{if(e.url!==null)return a("li",{className:"page-item",children:a("a",{className:"page-link",href:e.url,children:e.label})})})})})]})})}export{d as default};