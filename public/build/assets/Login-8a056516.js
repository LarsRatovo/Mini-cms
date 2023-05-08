import{b as e,W as f,r as g,j as a,a as h,d as b}from"./app-1984cdd7.js";import{G as x}from"./GuestLayout-4c201f65.js";import{I as n}from"./InputError-a0cdbf33.js";import{I as l}from"./InputLabel-fe5515cd.js";import{P as w}from"./PrimaryButton-9a8c39a9.js";import{T as d}from"./TextInput-535b873e.js";import"./ApplicationLogo-3b302bb3.js";function v({className:r="",...t}){return e("input",{...t,type:"checkbox",className:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 "+r})}function L({status:r,canResetPassword:t}){const{data:m,setData:o,post:c,processing:u,errors:i,reset:p}=f({email:"admin@admin.admin",password:"12345678",remember:!1});return g.useEffect(()=>()=>{p("password")},[]),a(x,{children:[e(h,{title:"Log in"}),r&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:r}),a("form",{onSubmit:s=>{s.preventDefault(),c(route("login"))},children:[a("div",{children:[e(l,{htmlFor:"email",value:"Email"}),e(d,{id:"email",type:"email",name:"email",value:m.email,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,onChange:s=>o("email",s.target.value)}),e(n,{message:i.email,className:"mt-2"})]}),a("div",{className:"mt-4",children:[e(l,{htmlFor:"password",value:"Password"}),e(d,{id:"password",type:"password",name:"password",value:m.password,className:"mt-1 block w-full",autoComplete:"current-password",onChange:s=>o("password",s.target.value)}),e(n,{message:i.password,className:"mt-2"})]}),e("div",{className:"block mt-4",children:a("label",{className:"flex items-center",children:[e(v,{name:"remember",checked:m.remember,onChange:s=>o("remember",s.target.checked)}),e("span",{className:"ml-2 text-sm text-gray-600",children:"Remember me"})]})}),a("div",{className:"flex items-center justify-end mt-4",children:[t&&e(b,{href:route("password.request"),className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Forgot your password?"}),e(w,{className:"ml-4",disabled:u,children:"Log in"})]})]})]})}export{L as default};