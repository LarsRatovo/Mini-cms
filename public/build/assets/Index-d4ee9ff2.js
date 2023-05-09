import{q as w,r as v,W as h,j as t,b as e,a as b}from"./app-9be05c91.js";import{D as g,A as y}from"./AuthenticatedLayout-8072f803.js";import{I as p}from"./InputError-78944c40.js";import{P as x}from"./PrimaryButton-aeba1b8a.js";import"./ApplicationLogo-66944839.js";import"./transition-79619270.js";function N({chirp:s}){const{auth:o}=w().props,[n,r]=v.useState(!1),{data:l,setData:i,patch:c,clearErrors:d,reset:m,errors:a}=h({message:s.message}),f=u=>{u.preventDefault(),c(route("chirps.update",s.id),{onSuccess:()=>r(!1)})};return t("div",{className:"p-6 flex space-x-2",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-gray-600 -scale-x-100",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})}),t("div",{className:"flex-1",children:[t("div",{className:"flex justify-between items-center",children:[t("div",{children:[e("span",{className:"text-gray-800",children:s.user.name}),e("small",{className:"ml-2 text-sm text-gray-600",children:new Date(s.created_at).toLocaleString()}),s.created_at!==s.updated_at&&e("small",{className:"text-sm text-gray-600",children:" · edited"})]}),s.user.id===o.user.id&&t(g,{children:[e(g.Trigger,{children:e("button",{children:e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 text-gray-400",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{d:"M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"})})})}),e(g.Content,{children:e("button",{className:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out",onClick:()=>r(!0),children:"Edit"})})]})]}),n?t("form",{onSubmit:f,children:[e("textarea",{value:l.message,onChange:u=>i("message",u.target.value),className:"mt-4 w-full text-gray-900 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(p,{message:a.message,class:"mt-2"}),t("div",{className:"space-x-2",children:[e(x,{className:"mt-4",children:"Save"}),e("button",{className:"mt-4",onClick:()=>{r(!1),m(),d()},children:"Cancel"})]})]}):e("p",{className:"mt-4 text-lg text-gray-900",children:s.message})]})]})}function E({auth:s,chirps:o}){const{data:n,setData:r,post:l,processing:i,reset:c,errors:d}=h({message:""}),m=a=>{a.preventDefault(),l(route("chirps.store"),{onSuccess:()=>c()})};return t(y,{user:s.user,children:[e(b,{title:"Chirps"}),t("div",{className:"max-w-2xl mx-auto p-4 sm:p-6 lg:p-8",children:[t("form",{onSubmit:m,children:[e("textarea",{value:n.message,placeholder:"What's on your mind?",text:!0,className:"block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",onChange:a=>r("message",a.target.value)}),e(p,{message:d.message,className:"mt-2"}),e(x,{className:"mt-4",disabled:i,children:"Chirp"})]}),e("div",{className:"mt-6 bg-white shadow-sm rounded-lg divide-y",children:o.map(a=>e(N,{chirp:a},a.id))})]})]})}export{E as default};