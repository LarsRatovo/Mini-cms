import{r as t,b as e,j as l,F as d}from"./app-9be05c91.js";import{S as o}from"./Sidebar-6ebed8ea.js";function p({categories:r,article:s}){const[c,i]=t.useState(s.paragraphs.map(a=>e("div",{className:"card",children:l("div",{className:"card-body",children:[l("div",{className:"row mb-3",children:[e("p",{children:e("a",{href:"/admin/articles/"+s.id+"/"+a.id+"/drop",children:"Supprimer la paragraphe"})}),e("label",{htmlFor:"inputText",className:"col-sm-2 col-form-label",children:"Titre du paragraph"}),l("div",{className:"col-sm-10",children:[e("input",{type:"hidden",name:"pid",value:a.id}),e("input",{type:"text",name:"ptitle[]",defaultValue:a.title,className:"form-control"})]})]}),l("div",{className:"row mb-3",children:[e("label",{htmlFor:"inputPassword",className:"col-sm-2 col-form-label",children:"Texte"}),e("div",{className:"col-sm-10",children:e("textarea",{className:"form-control",name:"ptext[]",defaultValue:a.text,style:{height:"100px"}})})]})]})}))),m=a=>{i(l(d,{children:[c,e("div",{className:"card",children:l("div",{className:"card-body",children:[l("div",{className:"row mb-3",children:[e("label",{htmlFor:"inputText",className:"col-sm-2 col-form-label",children:"Titre du paragraph"}),e("div",{className:"col-sm-10",children:e("input",{type:"text",className:"form-control",name:"ptitle[]"})})]}),l("div",{className:"row mb-3",children:[e("label",{htmlFor:"inputPassword",className:"col-sm-2 col-form-label",children:"Texte"}),e("div",{className:"col-sm-10",children:e("textarea",{className:"form-control",name:"ptext[]",style:{height:"100px"}})})]})]})})]}))};return e(o,{children:e("section",{className:"section",children:e("div",{className:"row",children:e("div",{className:"col-lg-12",children:e("div",{className:"card",children:l("div",{className:"card-body",children:[e("h5",{className:"card-title",children:"Modifier"}),l("form",{action:"/admin/articles/"+s.id+"/update",method:"post",encType:"multipart/form-data",children:[l("div",{className:"row mb-3",children:[e("label",{htmlFor:"inputText",className:"col-sm-2 col-form-label",children:"Titre"}),e("div",{className:"col-sm-10",children:e("input",{type:"text",defaultValue:s.title,className:"form-control",name:"title"})})]}),l("div",{className:"row mb-3",children:[e("label",{htmlFor:"inputPassword",className:"col-sm-2 col-form-label",children:"Snippet"}),e("div",{className:"col-sm-10",children:e("textarea",{className:"form-control",defaultValue:s.snippet,name:"snippet",style:{height:"100px"}})})]}),l("div",{className:"row mb-3",children:[e("label",{htmlFor:"inputNumber",className:"col-sm-2 col-form-label",children:"Image de l'article"}),e("div",{className:"col-sm-10",children:e("input",{className:"form-control",type:"file",name:"image",id:"formFile"})})]}),l("div",{className:"row mb-3",children:[e("label",{className:"col-sm-2 col-form-label",children:"Categorie"}),e("div",{className:"col-sm-10",children:e("select",{className:"form-select",name:"category","aria-label":"Default select example",children:r.map(a=>s.category===a.id?e("option",{value:a.id,selected:!0,children:a.name}):e("option",{value:a.id,children:a.name}))})})]}),e("button",{type:"button",className:"btn btn-outline-primary",onClick:m,children:"Ajouter une paragraph"}),c,e("div",{className:"row mb-3",children:e("div",{className:"col-sm-10",children:e("button",{type:"submit",className:"btn btn-primary",children:"Submit Form"})})})]})]})})})})})})}export{p as default};